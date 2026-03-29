export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-[#f8f8f8] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#222222] md:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#666666]">
            Nous accordons une importance particulière à la protection de vos
            données personnelles.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {[
            {
              title: 'Collecte des données',
              text: `Nous collectons les informations que vous nous transmettez via le formulaire de contact, notamment votre nom, votre adresse email, votre numéro de téléphone et votre message.`,
            },
            {
              title: 'Utilisation des données',
              text: `Ces données sont utilisées uniquement pour répondre à vos demandes (devis, contact, intervention). Elles ne sont jamais revendues ni utilisées à des fins commerciales sans votre accord.`,
            },
            {
              title: 'Durée de conservation',
              text: `Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.`,
            },
            {
              title: 'Sécurité',
              text: `Nous mettons en œuvre des mesures techniques et organisationnelles afin de protéger vos données contre tout accès non autorisé.`,
            },
            {
              title: 'Vos droits',
              text: `Conformément au RGPD, vous pouvez accéder, modifier ou supprimer vos données personnelles en nous contactant à l’adresse suivante : contact@wlm-artisan.fr`,
            },
            {
              title: 'Contact',
              text: `Pour toute question relative à vos données personnelles, vous pouvez nous contacter à : contact@wlm-artisan.fr`,
            },
          ].map((section) => (
            <div
              key={section.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8"
            >
              <h2 className="text-lg font-semibold text-[#2f7d32] md:text-xl">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#555555] md:text-base">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
