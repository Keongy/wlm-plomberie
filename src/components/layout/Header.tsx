'use client';

import Link from 'next/link';
import {Menu, Phone} from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1080px] items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="WLM Plomberie"
            width={120}
            height={40}
            className="h-14 w-auto"
          />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="tel:+33600000000"
            aria-label="Appeler WLM Plomberie"
            className="flex items-center gap-2 px-2 py-2 text-slate-900 transition hover:text-green-600"
          >
            <Phone size={18} strokeWidth={2.2} className="text-green-600" />
            <span className="text-sm font-semibold">07.60.18.55.61</span>
          </a>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition hover:bg-slate-200"
          >
            <Menu size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
}
