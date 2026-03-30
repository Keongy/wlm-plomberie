'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Menu, Phone, X} from 'lucide-react';

const navItems = [
  {label: 'À propos', href: '/#about'},
  {label: 'Nos services', href: '/#services'},
  {label: 'Zone d’intervention', href: '/#intervention'},
  {label: 'Devis', href: '/#contact'},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!headerRef.current) return;

      if (!headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-4">
        <Link href="/" className="shrink-0" onClick={closeMenu}>
          <Image
            src="/images/logo-wlm.png"
            alt="WLM Plomberie"
            width={150}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-900 transition hover:text-green-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+33760185561"
            aria-label="Appeler WLM Plomberie"
            className="flex items-center gap-2 rounded-xl px-2 py-2 text-slate-900 transition hover:text-green-600"
          >
            <Phone size={18} strokeWidth={2.2} className="text-green-600" />
            <span className="text-sm font-semibold">07.60.18.55.61</span>
          </a>

          <button
            type="button"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition hover:bg-slate-200 lg:hidden"
          >
            {isOpen ? (
              <X size={20} strokeWidth={2.2} />
            ) : (
              <Menu size={20} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-neutral-200 bg-white transition-all duration-300 ease-out lg:hidden ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 border-t-transparent opacity-0'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1180px] flex-col px-4 py-4 transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-0' : '-translate-y-2'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:text-green-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
