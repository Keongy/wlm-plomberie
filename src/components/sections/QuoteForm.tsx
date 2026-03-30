import {Send} from 'lucide-react';

export default function QuoteForm() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Colonne gauche */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#f8f8f8] p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f7d32]">
                Demande rapide
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
                Un devis clair pour votre projet
              </h2>

              <p className="mt-10 text-base leading-8 text-[#555555]">
                Décrivez-nous votre besoin en plomberie, climatisation ou
                rénovation. Nous vous répondons rapidement avec une estimation
                adaptée à votre demande.
              </p>

              <p className="mt-4 text-base leading-8 text-[#555555]">
                Que ce soit pour une installation, un dépannage ou un entretien,
                nous vous accompagnons avec sérieux, réactivité et transparence.
              </p>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="rounded-3xl bg-[#f8f8f8] p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#222222]">
              Demander un devis
            </h2>

            <p className="mt-3 text-base leading-7 text-[#666666]">
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
                    className="h-12 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
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
                    placeholder="06 XX XX XX XX"
                    className="h-12 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
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
                  className="h-12 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
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
                  rows={6}
                  placeholder="Détaillez votre besoin : installation, dépannage, entretien, climatisation..."
                  className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-[#222222] outline-none placeholder:text-[#9ca3af] focus:border-[#2f7d32]"
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
