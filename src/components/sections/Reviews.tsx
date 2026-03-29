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
        <Star key={index} size={16} className="fill-[#fbbc04] text-[#fbbc04]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-3 text-sm text-[#666666] md:text-base">
            Des avis authentiques de clients satisfaits à Nice Ouest et
            alentours.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2 md:grid md:grid-cols-3 md:gap-6">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="min-w-[290px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:min-w-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e83e6f] text-base font-semibold text-white">
                      {review.initial}
                    </div>

                    <div>
                      <p className="text-base font-semibold text-[#171717]">
                        {review.name}
                      </p>
                      <p className="text-sm text-[#777777]">il y a 1 mois</p>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-[#4285F4]">G</div>
                </div>

                <div className="mt-4">
                  <Stars />
                </div>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-[#333333]">
                  {review.text}
                </p>

                <button className="mt-4 text-sm font-medium text-[#777777] transition-colors hover:text-[#171717]">
                  Lire la suite
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="rounded-md bg-[#0b7a53] px-4 py-2 text-sm font-semibold text-white">
            Certifié par: Trustindex
          </div>
        </div>
      </div>
    </section>
  );
}
