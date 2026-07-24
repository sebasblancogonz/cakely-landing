import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Página no encontrada — Cakely',
};

const SUGGESTIONS = [
  { href: '/', label: 'Volver al inicio' },
  { href: '/blog', label: 'Leer el blog' },
  {
    href: '/calcular-presupuesto-tarta',
    label: 'Calcular el precio de una tarta',
  },
  { href: '/contacto', label: 'Contactar con nosotros' },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-[#FAFAF8] min-h-[60vh] flex items-center">
        <div className="container max-w-2xl mx-auto px-6 py-24 text-center">
          <p className="text-7xl mb-6" aria-hidden="true">
            🎂
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight">
            Esta página se ha quemado en el horno
          </h1>
          <p className="mt-4 text-lg text-[#44403C]/70">
            La dirección que buscas no existe o ha cambiado de sitio (error
            404). Prueba con una de estas:
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {SUGGESTIONS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-block px-5 py-2.5 rounded-full border border-[#E7E5E4] bg-white text-[#1C1917] hover:border-[#E8943A] hover:text-[#E8943A] transition-colors text-sm font-medium"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
