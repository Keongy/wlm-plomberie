import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:gap-16">
        <div className="max-w-xl">
          <div className="mb-10 md:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4d8b55]">
              À propos
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
              WLM Plomberie & Climatisation
            </h2>
          </div>

          <p className="mt-3 text-base md:text-lg leading-7 md:leading-8 text-gray-700 md:text-justify">
            WLM Plomberie Climatisation est une entreprise de renom spécialisée
            dans les services de plomberie, de climatisation et pompes à
            chaleur. Basée à Nice Ouest, notre équipe d’artisans certifiés
            s’engage à fournir des interventions rapides et efficaces,
            garantissant un travail de qualité supérieure. Nous desservons à la
            fois les particuliers et les entreprises, en veillant à respecter
            les normes les plus strictes pour assurer votre satisfaction totale.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-[#2b6288] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#35739d]"
            >
              Demander un devis (gratuit)
            </Link>
          </div>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-md">
            <Image
              src="/images/about-wlm.webp"
              alt="Salle de bain moderne réalisée par WLM Plomberie & Climatisation"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
