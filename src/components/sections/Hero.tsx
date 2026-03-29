import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      {/* Background image / vidéo */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/wlm-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-6xl text-5xl font-semibold tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] md:text-7xl">
          WLM Plomberie & Climatisation
        </h1>

        <div className="mt-10 space-y-2 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
          <p className="text-lg font-semibold md:text-2xl">
            Plombier à Nice Ouest
          </p>
          <p className="text-base font-semibold md:text-xl">
            Installation • Dépannage • Climatisation
          </p>
        </div>

        <Link
          href="/#contact"
          className="mt-14 inline-flex rounded-full bg-blue-700 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-600 md:px-10 md:text-base"
        >
          Demander un devis (gratuit)
        </Link>
      </div>
    </section>
  );
}
