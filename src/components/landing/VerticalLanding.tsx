import Link from 'next/link';
import Image from 'next/image';
import { TrackedCtaLink } from './TrackedCtaLink';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Header } from './Header';
import { Footer } from './Footer';
import { PricingSection } from './PricingSection';
import { Reveal } from './Reveal';
import type { VerticalConfig } from '@/lib/verticals';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

export function VerticalLanding({ vertical }: { vertical: VerticalConfig }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero del vertical — animación CSS pura, sin Reveal (LCP) */}
        <section className="relative isolate pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#FAFAF8]" />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[480px] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(232,148,58,0.10),transparent_60%)]"
          />
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-700">
              <h1 className="font-serif text-4xl md:text-6xl text-[#1C1917] tracking-tight leading-[1.1]">
                {vertical.heroTitle}
                <br />
                <span className="italic text-[#E8943A]">
                  {vertical.heroAccent}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#78716C] max-w-xl mx-auto mt-6">
                {vertical.heroSubtitle}
              </p>
              <div className="flex gap-3 justify-center items-center mt-10">
                <TrackedCtaLink
                  href={`${appDomain}/empezar-prueba`}
                  contentName={`${vertical.slug}-hero`}
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
              <p className="text-sm text-[#A8A29E] mt-6">
                14 días gratis &middot; Cancela cuando quieras
              </p>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-[#F5F5F4] h-10 rounded-t-xl border border-[#E7E5E4] flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E7E5E4]" />
                <div className="flex-1 mx-3 h-5 bg-white/80 rounded-md" />
              </div>
              <Image
                src="/img/hero.png"
                alt={`Cakely gestionando los pedidos de una de las ${vertical.name} que lo usan`}
                width={1200}
                height={750}
                className="w-full h-auto rounded-b-xl border border-t-0 border-[#E7E5E4] shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Dolores / beneficios */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
                {vertical.painsTitle}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
              {vertical.pains.map((pain, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="p-6 rounded-xl bg-[#FAFAF8] border border-[#E7E5E4] h-full">
                    <h3 className="font-sans font-semibold text-[#1C1917] text-base">
                      {pain.title}
                    </h3>
                    <p className="text-[#78716C] mt-2 text-sm leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features del vertical */}
        <section id="funciones" className="py-20 md:py-28 bg-[#FAFAF8]">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
                {vertical.featuresTitle}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              {vertical.features.map((feature, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="p-6 rounded-xl bg-white border border-[#E7E5E4] hover:shadow-sm transition-shadow h-full">
                    <div className="w-10 h-10 rounded-lg bg-[#FBE4C8] flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#C97A2E]" />
                    </div>
                    <h3 className="font-sans font-semibold text-[#1C1917] mt-4 text-base">
                      {feature.title}
                    </h3>
                    <p className="text-[#78716C] mt-2 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing reutilizado de la home */}
        <PricingSection />

        {/* FAQ del vertical */}
        <section id="faq" className="py-20 md:py-28 bg-[#FAFAF8]">
          <div className="container max-w-2xl mx-auto px-6">
            <Reveal className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
                Preguntas frecuentes de {vertical.name}
              </h2>
            </Reveal>
            <Accordion type="single" collapsible className="mt-12">
              {vertical.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-[#E7E5E4] bg-transparent rounded-none shadow-none"
                >
                  <AccordionTrigger className="py-5 text-left font-medium text-[#1C1917] text-base hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[#78716C] text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 md:py-28 bg-[#1C1917]">
          <div className="container max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
              {vertical.ctaTitle}
            </h2>
            <p className="text-[#A8A29E] mt-4 text-lg max-w-md mx-auto">
              Pruébalo gratis 14 días. Cancela cuando quieras.
            </p>
            <div className="mt-8">
              <TrackedCtaLink
                href={`${appDomain}/empezar-prueba`}
                contentName={`${vertical.slug}-final`}
                className="inline-block bg-white text-[#1C1917] hover:bg-white/90 px-6 py-3 rounded-lg font-medium text-base transition-colors"
              >
                Empezar ahora
              </TrackedCtaLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
