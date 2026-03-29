import {MapPin, Send} from 'lucide-react';

export default function ContactZone() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_440px] lg:gap-10">
          {/* Colonne gauche */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
              Zone d&apos;intervention
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#555555]">
              Basés à{' '}
              <span className="font-semibold text-[#2f7d32]">Nice Ouest</span>,
              nous intervenons rapidement dans tout le bassin niçois et ses
              environs : Saint-Laurent-du-Var, Cagnes-sur-Mer, et
              l&apos;arrière-pays proche.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative flex h-[240px] items-center justify-center bg-[#55b7da] md:h-[300px]">
                <div className="text-center leading-none text-white">
                  <div className="text-5xl font-extrabold tracking-tight md:text-7xl">
                    COTE
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

          {/* Colonne droite */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 md:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#222222]">
              Demander un devis
            </h2>

            <p className="mt-3 text-base text-[#666666]">
              Réponse sous 24h maximum pour vos projets et dépannages.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#333333]"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom complet"
                    className="h-12 w-full rounded-xl border border-transparent bg-[#f1f1f1] px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#333333]"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="06 . . . . . . . ."
                    className="h-12 w-full rounded-xl border border-transparent bg-[#f1f1f1] px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#333333]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="h-12 w-full rounded-xl border border-transparent bg-[#f1f1f1] px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#333333]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Détaillez votre besoin (Installation, Dépannage...)"
                  className="w-full rounded-xl border border-transparent bg-[#f1f1f1] px-4 py-3 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#0f6b1f] px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#15812a]"
              >
                <Send size={18} />
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
