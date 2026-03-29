import {MapPin} from 'lucide-react';

export default function InterventionZone() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
              Zone d&apos;intervention
            </h2>

            <p className="mt-5 text-base leading-8 text-[#555555] md:text-lg">
              Basés à{' '}
              <span className="font-semibold text-[#2f7d32]">Nice Ouest</span>,
              nous intervenons rapidement pour vos besoins en plomberie,
              climatisation et pompes à chaleur dans tout le secteur niçois et
              ses environs.
            </p>

            <p className="mt-4 text-base leading-8 text-[#555555] md:text-lg">
              Nous nous déplaçons notamment à Nice Ouest, Saint-Laurent-du-Var,
              Cagnes-sur-Mer et dans les communes proches pour assurer un
              service réactif, soigné et professionnel.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <h3 className="text-base font-semibold text-[#2f7d32]">
                  Disponibilité
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  Lundi - Samedi : 8h - 19h
                  <br />
                  Urgences 24h/24
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <h3 className="text-base font-semibold text-[#2f7d32]">
                  Secteur
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#555555]">
                  Nice Ouest &amp; Communauté Urbaine
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="relative flex h-[260px] items-center justify-center bg-[#55b7da] md:h-[320px]">
              <div className="text-center leading-none text-white">
                <div className="text-5xl font-extrabold tracking-tight md:text-7xl">
                  NICE
                </div>
                <div className="mt-2 text-5xl font-extrabold tracking-tight md:text-7xl">
                  OUEST
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#0f6b1f] shadow-lg">
                <MapPin size={24} className="fill-white text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
