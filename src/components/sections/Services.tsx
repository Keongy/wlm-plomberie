'use client';

import {Wrench, Droplets, Snowflake, ShowerHead} from 'lucide-react';
import {motion, type Variants} from 'framer-motion';

const services = [
  {
    title: 'Plomberie & Dépannage',
    description:
      'Nous intervenons rapidement pour résoudre vos problèmes de plomberie, qu’il s’agisse de fuites, de débouchages ou de réparations d’urgence.',
    icon: Wrench,
  },
  {
    title: 'Entretien & Désinfection',
    description:
      'Assurez la longévité et l’efficacité de vos équipements grâce à notre service d’entretien et de désinfection réguliers.',
    icon: Droplets,
  },
  {
    title: 'Installation climatisation',
    description:
      'Profitez d’un confort optimal avec nos solutions d’installation de climatisation sur mesure, adaptées à votre espace et vos besoins.',
    icon: Snowflake,
  },
  {
    title: 'Pompes à chaleur',
    description:
      'Air/eau pour assurer votre chauffage et la production d’eau chaude sanitaire. Solution performante, économique et écologique.',
    icon: ShowerHead,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4d8b55]">
            Nos services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
            Solutions plomberie & climatisation
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf2ee]">
                  <Icon size={20} className="text-[#1f7a3f]" />
                </div>

                <h3 className="text-lg font-semibold text-[#2a2a2a]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-6 text-[#6b7280]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
