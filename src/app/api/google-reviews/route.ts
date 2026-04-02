import {NextResponse} from 'next/server';

type LocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleApiReview = {
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: LocalizedText;
  originalText?: LocalizedText;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  googleMapsUri?: string;
  publishTime?: string;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID'},
      {status: 500}
    );
  }
  const fields = 'id,displayName,rating,userRatingCount,reviews';

  const url =
    `https://places.googleapis.com/v1/places/${placeId}` +
    `?fields=${fields}` +
    `&languageCode=fr` +
    `&key=${apiKey}`;

  try {
    const res = await fetch(url, {
      next: {revalidate: 60 * 60 * 24},
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        {error: 'Google API error', details: text},
        {status: res.status}
      );
    }

    const data = await res.json();

    const reviews = Array.isArray(data.reviews)
      ? data.reviews.map((review: GoogleApiReview) => ({
          authorName:
            review.authorAttribution?.displayName ?? 'Utilisateur Google',
          authorUrl: review.authorAttribution?.uri ?? '',
          authorPhoto: review.authorAttribution?.photoUri ?? '',
          rating: review.rating ?? 0,
          text: review.originalText?.text ?? review.text?.text ?? '',
          languageCode:
            review.originalText?.languageCode ??
            review.text?.languageCode ??
            '',
          relativeTime: review.relativePublishTimeDescription ?? '',
          publishTime: review.publishTime ?? '',
          googleMapsUri: review.googleMapsUri ?? '',
        }))
      : [];

    return NextResponse.json({
      placeId: data.id ?? placeId,
      placeName: data.displayName?.text ?? 'WLM plomberie Climatisation',
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      googleMapsUri: data.googleMapsUri ?? '',
      reviews,
    });
  } catch (error) {
    return NextResponse.json(
      {error: 'Unexpected server error', details: String(error)},
      {status: 500}
    );
  }
}
