import Link from 'next/link';
import Image from 'next/image';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Centered copy */}
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-[#1C1917] tracking-tight leading-[1.1]">
            Gestiona tu pastelería
            <br />
            <span className="italic text-[#E8943A]">sin perder la cabeza</span>
          </h1>

          <p className="text-lg md:text-xl text-[#78716C] max-w-xl mx-auto mt-6">
            Pedidos, clientes, recetas y facturas. Todo en un lugar pensado para
            pastelerías artesanales.
          </p>

          <div className="flex gap-3 justify-center items-center mt-10">
            <Link
              href={`${appDomain}/empezar-prueba`}
              className="bg-[#1C1917] text-white hover:bg-[#1C1917]/90 px-6 py-3 text-base rounded-lg font-medium transition-colors"
            >
              Prueba gratis 14 días
            </Link>
            <Link
              href="#funciones"
              className="text-[#44403C] hover:text-[#1C1917] text-base font-medium underline underline-offset-4 decoration-[#E7E5E4] hover:decoration-[#1C1917] transition-colors"
            >
              Ver funciones
            </Link>
          </div>

          <p className="text-sm text-[#A8A29E] mt-6 text-center">
            Sin tarjeta de crédito &middot; Cancela cuando quieras
          </p>
        </div>

        {/* Product screenshot in browser frame */}
        <div className="mt-16 max-w-4xl mx-auto">
          {/* Browser chrome */}
          <div className="bg-[#F5F5F4] h-10 rounded-t-xl border border-[#E7E5E4] flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
            <div className="flex-1 mx-3 h-5 bg-white/80 rounded-md" />
          </div>

          {/* Screenshot */}
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
