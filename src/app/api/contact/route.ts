import nodemailer from 'nodemailer';
import {NextResponse} from 'next/server';

type TurnstileVerifyResponse = {
  success: boolean;
  'error-codes'?: string[];
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();
    const turnstileToken = String(body.turnstileToken || '').trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        {error: 'Merci de remplir les champs obligatoires.'},
        {status: 400}
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        {error: 'Merci de valider la protection anti-spam.'},
        {status: 400}
      );
    }

    const formData = new FormData();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
    formData.append('response', turnstileToken);

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';

    if (ip) {
      formData.append('remoteip', ip);
    }

    const captchaRes = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: formData,
      }
    );

    const captchaJson = (await captchaRes.json()) as TurnstileVerifyResponse;

    if (!captchaJson.success) {
      return NextResponse.json(
        {
          error: 'La vérification anti-spam a échoué.',
          details: captchaJson['error-codes'] || [],
        },
        {status: 400}
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de devis - ${name}`,
      text: `
Nom : ${name}
Email : ${email || 'Non renseigné'}
Téléphone : ${phone}

Message :
${message}
  `,
    });

    return NextResponse.json({success: true});
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      {error: 'Une erreur serveur est survenue.'},
      {status: 500}
    );
  }
}
