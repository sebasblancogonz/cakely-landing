import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { VERTICALS } from '@/lib/verticals';

export function VerticalsTeaser() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Hecho para tu tipo de negocio
          </h2>
          <p className="text-[#78716C] mt-3 text-lg max-w-lg mx-auto">
            Cakely habla el idioma de tu obrador.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-3xl mx-auto">
          {VERTICALS.map((vertical, i) => (
            <Reveal key={vertical.slug} delay={i * 80}>
              <Link
                href={`/${vertical.slug}`}
                className="group block p-6 rounded-xl bg-white border border-[#E7E5E4] hover:border-[#E8943A]/40 hover:shadow-sm transition-all h-full"
              >
                <h3 className="font-serif text-xl text-[#1C1917] capitalize">
                  {vertical.name}
                </h3>
                <p className="text-[#78716C] mt-2 text-sm leading-relaxed">
                  {vertical.heroSubtitle}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#C97A2E] group-hover:gap-2.5 transition-all">
                  Ver cómo funciona <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
