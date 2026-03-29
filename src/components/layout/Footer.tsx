import Link from 'next/link';
import {Mail, MapPin, Phone} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-[#222222] text-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:justify-between md:gap-8">
          <div className="space-y-4 md:flex-1">
            <h2 className="text-base font-extrabold uppercase tracking-tight text-[#a3a3a3]">
              WLM PLOMBERIE & CLIMATISATION
            </h2>

            <p className="max-w-sm text-sm leading-6 text-[#777777]">
              Votre artisan de confiance à Nice Ouest pour tous vos travaux de
              plomberie et climatisation. Qualité, propreté et rapidité.
            </p>
          </div>

          <div className="space-y-4 md:flex-1">
            <h3 className="text-base font-bold text-[#a3a3a3]">
              Contact & accès
            </h3>

            <ul className="space-y-3 text-sm text-[#777777]">
              <li>
                <a
                  href="tel:+33760185561"
                  className="flex items-center gap-2 transition-colors hover:text-[#a3a3a3]"
                >
                  <Phone size={16} className="text-green-800" />
                  <span>07 60 18 55 61</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@wlm-artisan.fr"
                  className="flex items-center gap-2 transition-colors hover:text-[#a3a3a3]"
                >
                  <Mail size={16} className="text-green-800" />
                  <span>contact@wlm-artisan.fr</span>
                </a>
              </li>

              <li className="flex items-start gap-2 text-[#777777]">
                <MapPin size={16} className="mt-0.5 shrink-0 text-green-800" />
                <span>Secteur Nice Ouest, 06200 Nice</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:flex-1">
            <h3 className="text-base font-bold text-[#a3a3a3]">Liens utiles</h3>

            <ul className="space-y-3 text-sm text-[#777777]">
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors hover:text-green-600"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="transition-colors hover:text-green-600"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/zone-intervention"
                  className="transition-colors hover:text-green-600"
                >
                  Zone d’intervention
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="font-semibold text-green-800 transition-colors hover:text-green-600"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#171717]">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-[#666666] sm:text-sm">
          © 2026 WLM Plomberie Climatisation — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
