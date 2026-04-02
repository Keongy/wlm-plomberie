'use client';

import Script from 'next/script';
import {Send} from 'lucide-react';
import {FormEvent, useEffect, useRef, useState} from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function QuoteForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const widgetRenderedRef = useRef(false);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const initTurnstile = () => {
      if (!window.turnstile) return;
      if (widgetRenderedRef.current) return;

      const container = document.getElementById('turnstile-widget');
      if (!container) return;

      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
        theme: 'light',
        callback: (token) => {
          setCaptchaToken(token);
        },
        'expired-callback': () => {
          setCaptchaToken('');
        },
        'error-callback': () => {
          setCaptchaToken('');
        },
      });

      widgetRenderedRef.current = true;
    };

    const timeout = setTimeout(initTurnstile, 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          turnstileToken: captchaToken,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Une erreur est survenue.');
      }

      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setCaptchaToken('');

      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Une erreur est survenue. Merci de réessayer.'
      );
    }
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />

      <section id="contact" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-between rounded-3xl bg-[#f8f8f8] p-6 shadow-sm ring-1 ring-black/5 md:p-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d32]">
                  Demande rapide
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
                  Un devis clair pour votre projet
                </h2>

                <p className="mt-10 text-base leading-8 text-[#555555]">
                  Décrivez-nous votre besoin en plomberie, climatisation ou
                  rénovation. Nous vous répondons rapidement avec une estimation
                  adaptée à votre demande.
                </p>

                <p className="mt-4 text-base leading-8 text-[#555555]">
                  Que ce soit pour une installation, un dépannage ou un
                  entretien, nous vous accompagnons avec sérieux, réactivité et
                  transparence.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#f8f8f8] p-6 shadow-sm ring-1 ring-black/5 md:p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#222222]">
                Demander un devis
              </h2>

              <p className="mt-3 text-base leading-7 text-[#666666]">
                Réponse sous 24h maximum pour vos projets et dépannages.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#333333]"
                    >
                      Nom
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom complet"
                      required
                      className="h-12 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#333333]"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="06 XX XX XX XX"
                      required
                      className="h-12 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#333333]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="h-12 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#333333]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Détaillez votre besoin : installation, dépannage, entretien, climatisation..."
                    required
                    className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                  />
                </div>

                <div className="overflow-hidden rounded-xl bg-white p-3">
                  <div id="turnstile-widget" />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !captchaToken}
                  className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#0f6b1f] px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#15812a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={18} />
                  {status === 'loading'
                    ? 'Envoi en cours...'
                    : 'Envoyer ma demande'}
                </button>

                {status === 'success' ? (
                  <p className="text-sm font-medium text-[#0f6b1f]">
                    Votre demande a bien été envoyée.
                  </p>
                ) : null}

                {status === 'error' ? (
                  <p className="text-sm font-medium text-red-600">
                    {errorMessage ||
                      'Une erreur est survenue. Merci de réessayer.'}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
