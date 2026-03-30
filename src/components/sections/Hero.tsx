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
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-between px-6 py-32 text-center">
        <h1 className="max-w-6xl text-[30px] leading-[1.1] sm:text-4xl md:text-6xl font-semibold tracking-tight text-white [text-shadow:0.08em_0.08em_0_rgba(0,0,0,0.4)]">
          WLM Plomberie & Climatisation
        </h1>

        <div className="mt-10 space-y-2 text-white [text-shadow:0.08em_0.08em_0_rgba(0,0,0,0.4)]">
          <p className="text-lg font-semibold md:text-1xl leading-[0.9]">
            Plombier à Nice Ouest
          </p>
          <p className="text-base font-semibold md:text-1xl">
            Installation • Dépannage • Climatisation
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex rounded-full bg-[#2b6288] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#35739d]"
        >
          Demander un devis (gratuit)
        </Link>
      </div>
    </section>
  );
}
