import {MapPin} from 'lucide-react';

export default function InterventionZone() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-8 md:mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4d8b55]">
                Zone d’intervention
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
                Nice Ouest & alentours
              </h2>
            </div>

            <p className="text-base leading-7 text-[#555555] md:text-lg md:leading-8">
              Basés à{' '}
              <span className="font-semibold text-[#2f7d32]">Nice Ouest</span>,
              nous intervenons rapidement pour vos besoins en plomberie,
              climatisation et pompes à chaleur dans tout le secteur niçois et
              ses environs.
            </p>

            <p className="mt-4 text-base leading-7 text-[#555555] md:text-lg md:leading-8">
              Nous nous déplaçons notamment à Nice Ouest, Saint-Laurent-du-Var,
              Cagnes-sur-Mer et dans les communes proches pour assurer un
              service réactif, soigné et professionnel.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-[#2f7d32]">
                  Disponibilité
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#555555]">
                  Lundi - Samedi : 8h - 19h
                  <br />
                  Urgences 24h/24
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-[#2f7d32]">
                  Secteur
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#555555]">
                  Nice Ouest &amp; alentours
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="relative flex h-[260px] items-center justify-center bg-[#55b7da] md:h-[320px]">
              <iframe
                title="Zone d’intervention WLM"
                className="h-[260px] w-full md:h-[320px]"
                style={{border: 0}}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDF16WePuYUf8ZHWG1hyvYIfp3HME73VtA&q=Nice+Ouest,France"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
