'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderLoginButton from '@/app/HeaderLoginButton';
import { MobileMenu } from '@/components/MobileMenu';
import { NAV_LINKS } from '@/lib/landing-data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-[background-color,border-color] duration-200 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-sm border-b border-[#E7E5E4]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/img/logo.webp"
            alt="Logo Cakely"
            width={70}
            height={70}
          />
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden md:inline-block px-3 py-2 text-sm text-[#44403C] hover:text-[#1C1917] transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
          <div className="hidden md:block ml-4">
            <HeaderLoginButton />
          </div>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
