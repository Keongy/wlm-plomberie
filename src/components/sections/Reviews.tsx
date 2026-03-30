import {Star} from 'lucide-react';

const reviews = [
  {
    name: 'Laura Ballester',
    initial: 'L',
    text: 'Technicien ponctuel, très professionnel et à l’écoute. Il a rapidement identifié la panne de ma clim et a tout réparé dans la foulée.',
  },
  {
    name: 'Antonio Iannelli',
    initial: 'A',
    text: 'Excellent travail de William ! Installation de la climatisation réalisée avec beaucoup de sérieux et de professionnalisme. Je recommande.',
  },
  {
    name: 'Sabine Ballester',
    initial: 'S',
    text: 'Travail parfait, ponctuel à recommander sans hésiter.',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({length: 5}).map((_, index) => (
        <Star key={index} size={14} className="fill-[#fbbc04] text-[#fbbc04]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-14">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-8 text-center">
          <p className="text-base font-semibold text-[#333333]">
            Ce que disent nos clients
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2 md:grid md:grid-cols-3 md:gap-5">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="min-w-[270px] rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 md:min-w-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e83e6f] text-sm font-semibold text-white">
                      {review.initial}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#171717]">
                        {review.name}
                      </p>
                      <p className="text-xs text-[#777777]">il y a 1 mois</p>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-[#4285F4]">G</div>
                </div>

                <div className="mt-3">
                  <Stars />
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#333333]">
                  {review.text}
                </p>

                <button className="mt-3 text-sm font-medium text-[#777777] transition-colors hover:text-[#171717]">
                  Lire la suite
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
