import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:gap-16">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#0f172a] md:text-6xl">
            À Propos de WLM Plomberie & Climatisation
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#1f2937] text-left md:text-justify">
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
