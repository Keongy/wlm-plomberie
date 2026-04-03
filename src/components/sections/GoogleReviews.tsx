'use client';

import Image from 'next/image';
import {ChevronLeft, ChevronRight, Star} from 'lucide-react';
import {useEffect, useMemo, useRef, useState} from 'react';

type Review = {
  authorName: string;
  authorUrl: string;
  authorPhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
  googleMapsUri: string;
};

type ReviewsResponse = {
  placeId: string;
  placeName: string;
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  reviews: Review[];
};

function Stars({rating}: {rating: number}) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} sur 5`}>
      {Array.from({length: 5}).map((_, index) => {
        const filled = index < rating;

        return (
          <Star
            key={index}
            size={14}
            className={
              filled ? 'fill-[#fbbc04] text-[#fbbc04]' : 'text-[#d4d4d4]'
            }
          />
        );
      })}
    </div>
  );
}

function getInitial(name: string) {
  return name?.trim()?.charAt(0)?.toUpperCase() || 'G';
}

function ReviewCard({review}: {review: Review}) {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isLong = useMemo(() => review.text.length > 140, [review.text]);

  return (
    <article className="w-[280px] shrink-0 snap-start rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 select-none sm:w-[320px] lg:w-[340px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {!imageError && review.authorPhoto ? (
            <Image
              src={review.authorPhoto}
              alt={review.authorName}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
              onError={() => setImageError(true)}
              draggable={false}
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e83e6f] text-sm font-semibold text-white">
              {getInitial(review.authorName)}
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#171717]">
              {review.authorName}
            </p>
            <p className="text-xs text-[#777777]">
              {review.relativeTime || 'Avis Google'}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-xs font-semibold text-[#4285F4]">G</div>
      </div>

      <div className="mt-3">
        <Stars rating={review.rating} />
      </div>

      <p
        className={`mt-3 text-sm leading-6 text-[#333333] ${
          expanded ? '' : 'line-clamp-3'
        }`}
      >
        {review.text}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        {isLong ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="text-sm font-medium text-[#777777] transition-colors hover:text-[#171717]"
          >
            {expanded ? 'Réduire' : 'Lire la suite'}
          </button>
        ) : null}

        {review.googleMapsUri ? (
          <a
            href={review.googleMapsUri}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#2f7d32] transition-colors hover:opacity-80"
          >
            Voir l’avis sur Google
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/google-reviews');

        if (!res.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const container = sliderRef.current;
    if (!container) return;

    const amount = Math.round(container.clientWidth * 0.9);

    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = sliderRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = sliderRef.current;
    if (!container || !isDraggingRef.current) return;

    const delta = e.pageX - startXRef.current;

    if (Math.abs(delta) > 5) {
      hasDraggedRef.current = true;
    }

    if (hasDraggedRef.current) {
      e.preventDefault();
      container.scrollLeft = scrollLeftRef.current - delta;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;

    window.setTimeout(() => {
      hasDraggedRef.current = false;
    }, 0);
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (loading) {
    return (
      <section className="bg-[#f5f5f5] py-10 md:py-14">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="text-sm text-neutral-500">
            Chargement des avis Google…
          </p>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="bg-[#f5f5f5] py-10 md:py-14">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="text-sm text-neutral-500">
            Impossible de charger les avis Google.
          </p>
        </div>
      </section>
    );
  }

  const reviews = data.reviews.slice(0, 8);
  const globalReviewsUrl =
    data.googleMapsUri ||
    'https://www.google.com/search?q=wlm+plomberie+climatisation+avis';

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-14">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-8 text-center">
          <p className="text-base font-semibold text-[#333333]">
            Ce que disent nos clients
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-[#555555]">
            <span className="font-semibold text-[#171717]">
              {data.rating.toFixed(1)}
            </span>
            <span>•</span>
            <span>{data.userRatingCount} avis Google</span>
          </div>
        </div>

        <div className="relative">
          <div className="mb-4 hidden justify-end gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#171717] shadow-sm transition hover:bg-[#f8f8f8]"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#171717] shadow-sm transition hover:bg-[#f8f8f8]"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClickCapture={handleClickCapture}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={`${review.authorName}-${index}`}
                review={review}
              />
            ))}
          </div>

          {globalReviewsUrl ? (
            <div className="mt-3 text-center">
              <a
                href={globalReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[#2f7d32] transition-colors hover:underline"
              >
                Voir tous nos avis
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
