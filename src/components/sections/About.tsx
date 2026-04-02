'use client';

import Link from 'next/link';
import Image from 'next/image';
import {motion, type Variants} from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {opacity: 0, y: 24},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:gap-16">
        <motion.div
          className="max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.25}}
        >
          <motion.div variants={itemVariants} className="mb-10 md:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4d8b55]">
              À propos
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
              WLM Plomberie & Climatisation
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-base leading-7 text-gray-700 md:text-justify md:text-lg md:leading-8"
          >
            WLM Plomberie Climatisation est une entreprise de renom spécialisée
            dans les services de plomberie, de climatisation et pompes à
            chaleur. Basée à Nice Ouest, notre équipe d’artisans certifiés
            s’engage à fournir des interventions rapides et efficaces,
            garantissant un travail de qualité supérieure. Nous desservons à la
            fois les particuliers et les entreprises, en veillant à respecter
            les normes les plus strictes pour assurer votre satisfaction totale.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-[#2b6288] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#35739d]"
            >
              Demander un devis (gratuit)
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 40}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount: 0.25}}
          transition={{duration: 0.65, ease: 'easeOut', delay: 0.15}}
        >
          <div className="group relative overflow-hidden rounded-md">
            <Image
              src="/images/about-wlm.webp"
              alt="Salle de bain moderne réalisée par WLM Plomberie & Climatisation"
              width={900}
              height={900}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
