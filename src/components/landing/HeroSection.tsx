import Link from 'next/link';
import Image from 'next/image';
import { TrackedCtaLink } from './TrackedCtaLink';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

export function HeroSection() {
  return (
    <section className="relative isolate pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Fondo: gradiente cálido sutil sobre el background base */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#FAFAF8]" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[480px] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(232,148,58,0.10),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Animación CSS pura (no gatea en hidratación — LCP friendly) */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1917] tracking-tight leading-[1.1]">
            Gestiona tu pastelería
            <br />
            <span className="italic text-[#E8943A]">sin perder la cabeza</span>
          </h1>

          <p className="text-lg md:text-xl text-[#78716C] max-w-xl mx-auto mt-6">
            Pedidos, clientes, recetas y costes. Todo en un lugar pensado para
            pastelerías artesanales.
          </p>

          <div className="flex gap-3 justify-center items-center mt-10">
            <TrackedCtaLink
              href={`${appDomain}/empezar-prueba`}
              contentName="home-hero"
              className="bg-[#E8943A] text-white hover:bg-[#C97A2E] px-6 py-3 text-base rounded-lg font-medium transition-colors shadow-sm"
            >
              Prueba gratis 14 días
            </TrackedCtaLink>
            <Link
              href="#funciones"
              className="text-[#44403C] hover:text-[#1C1917] text-base font-medium underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#1C1917] transition-colors"
            >
              Ver funciones
            </Link>
          </div>

          <p className="text-sm text-[#A8A29E] mt-6 text-center">
            14 días gratis &middot; Cancela cuando quieras
          </p>
        </div>

        {/* Social proof */}
        <div
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 mt-12 text-sm text-[#78716C] animate-in fade-in duration-700 fill-mode-backwards"
          style={{ animationDelay: '200ms' }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-[#C9A96E]" aria-hidden>★★★★★</span>
            Pastelerías y panaderías de toda España
          </span>
          <span className="hidden md:inline text-[#E7E5E4]" aria-hidden>·</span>
          <span>Sin instalaciones: funciona en el navegador y en el móvil</span>
        </div>

        {/* Product screenshot in browser frame — SIN animación (elemento LCP) */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#F5F5F4] h-10 rounded-t-xl border border-[#E7E5E4] flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
            <div className="flex-1 mx-3 h-5 bg-white/80 rounded-md" />
          </div>
          <Image
            src="/img/hero.png"
            alt="Panel de control de Cakely mostrando pedidos, clientes y recetas"
            width={1200}
            height={750}
            className="w-full h-auto rounded-b-xl border border-t-0 border-[#E7E5E4] shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
