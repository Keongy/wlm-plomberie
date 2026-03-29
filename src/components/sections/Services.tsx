import {Wrench, Droplets, Snowflake, ShowerHead} from 'lucide-react';

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
    title: 'Pompes à chaleur ',
    description:
      'air/eau pour assurer votre chauffage et la production d’eau chaude sanitaire Solution performante, économique et écologique, la pompe à chaleur vous permet de réduire vos consommations d’énergie tout en améliorant votre confort toute l’année.',
    icon: ShowerHead,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4d8b55]">
            Nos services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
            Solutions plomberie & climatisation
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf2ee]">
                  <Icon size={22} className="text-[#1f7a3f]" />
                </div>

                <h3 className="text-xl font-semibold text-[#2a2a2a]">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-[#6b7280]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
