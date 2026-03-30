import Image from 'next/image';

const partners = [
  {name: 'Daikin', src: '/images/partners/daikin_logo.png'},
  {name: 'Toshiba', src: '/images/partners/toshiba_logo.png'},
  {name: 'Hitachi', src: '/images/partners/hitachi_logo.png'},
  {name: 'Midea', src: '/images/partners/midea_logo.png'},
  {name: 'Koolnova', src: '/images/partners/koolnova_logo.png'},
];

export default function Partners() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-12">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-6 text-center text-base font-bold text-[#2a2a2a]">
          Marques partenaires
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f5f5f5] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f5f5f5] to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-10 md:gap-14">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-20 w-[140px] shrink-0 items-center justify-center md:w-[170px]"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={200}
                height={80}
                sizes="(max-width: 768px) 120px, 160px"
                className="h-auto max-h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
