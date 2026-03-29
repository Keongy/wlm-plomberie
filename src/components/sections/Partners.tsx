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
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4d8b55]">
            Nos partenaires
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
            Des marques reconnues
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#666666]">
            Nous travaillons avec des marques fiables et reconnues pour vous
            garantir des installations durables et performantes.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-12 md:gap-16">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-24 w-[160px] shrink-0 items-center justify-center md:w-[190px]"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={1000}
                height={1000}
                className="h-auto max-h-14 w-auto object-contain opacity-70 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
