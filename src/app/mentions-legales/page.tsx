export default function MentionsLegalesPage() {
  return (
    <main className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
            Mentions légales
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#666666]">
            Informations légales relatives à l’édition et à l’hébergement du
            site WLM Plomberie & Climatisation.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="text-lg font-semibold text-[#2f7d32] md:text-xl">
              Éditeur du site
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">
              WLM Plomberie & Climatisation
              <br />
              Nice 06000
              <br />
              Téléphone : 07.60.18.55.61
              <br />
              Email : contact@wlm-artisan.fr
              <br />
              SIRET : 10203828800019
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="text-lg font-semibold text-[#2f7d32] md:text-xl">
              Hébergement
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">
              Hostinger International Ltd
              <br />
              61 Lordou Vironos Street
              <br />
              6023 Larnaca, Chypre
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="text-lg font-semibold text-[#2f7d32] md:text-xl">
              Propriété intellectuelle
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">
              L’ensemble des contenus présents sur ce site, incluant notamment
              les textes, images, graphismes, logos, icônes et éléments visuels,
              est protégé par le droit de la propriété intellectuelle. Sauf
              mention contraire, ces éléments sont la propriété exclusive de WLM
              Plomberie & Climatisation. Toute reproduction, représentation,
              modification, publication ou adaptation, totale ou partielle, est
              interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="text-lg font-semibold text-[#2f7d32] md:text-xl">
              Responsabilité
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">
              WLM Plomberie & Climatisation s’efforce de fournir sur ce site des
              informations aussi précises que possible. Toutefois, l’éditeur ne
              pourra être tenu responsable des omissions, des inexactitudes ou
              des carences dans la mise à jour, qu’elles soient de son fait ou
              du fait de tiers partenaires.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h2 className="text-lg font-semibold text-[#2f7d32] md:text-xl">
              Contact
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">
              Pour toute question relative au site, vous pouvez nous contacter à
              l’adresse suivante : contact@wlm-artisan.fr
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
