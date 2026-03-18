'use client';

import { Button } from '@/components/ui/button';
import {
  Calculator,
  Heart,
  Quote,
  Star,
  ArrowRight,
  TrendingUp,
  ClipboardList,
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

const registerUrl = `${appDomain}/auth/register`;

interface PainPoint {
  emoji: string;
  title: string;
  description: string;
}

interface Benefit {
  emoji: string;
  title: string;
  description: string;
  accent: string;
}

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

const painPoints: PainPoint[] = [
  {
    emoji: '💸',
    title: 'Pones precios mirando a la competencia',
    description: 'Sin saber si ella gana o pierde dinero',
  },
  {
    emoji: '⏰',
    title: '9 horas de trabajo por 60€',
    description: 'Una tarta de boda que sale a menos de 7€/hora',
  },
  {
    emoji: '😰',
    title: 'Te da vergüenza subir precios',
    description: 'Porque no sabes cómo justificarlo con datos',
  },
  {
    emoji: '📱',
    title: 'Los pedidos en notas de voz y WhatsApp',
    description: 'Y siempre hay algo que se te olvida',
  },
  {
    emoji: '🤷',
    title: 'A fin de mes no sabes si ganaste',
    description: 'Solo sabes que estuviste muy ocupada',
  },
  {
    emoji: '📉',
    title: 'Algunas tartas te salen a pérdidas',
    description: 'Y no lo sabes hasta que ya es tarde',
  },
];

const benefits: Benefit[] = [
  {
    emoji: '💰',
    title: 'Cobras lo que mereces',
    description:
      'Nunca más un precio a ojo. Siempre basado en tus costes reales.',
    accent: '#C9A96E',
  },
  {
    emoji: '📊',
    title: 'Ves el margen antes de aceptar',
    description:
      'Si el pedido no es rentable, lo sabes antes de comprar los ingredientes.',
    accent: '#8B9E7E',
  },
  {
    emoji: '📋',
    title: 'Pedidos sin caos',
    description: 'Quién encargó qué, para cuándo, cuánto paga y cuánto falta.',
    accent: '#D4A0A0',
  },
  {
    emoji: '👥',
    title: 'Clientes organizados',
    description: 'Historial completo sin buscar en WhatsApp.',
    accent: '#C9A96E',
  },
  {
    emoji: '🧾',
    title: 'Facturas en un clic',
    description: 'Sin Word, sin plantillas, sin perder tiempo.',
    accent: '#8B9E7E',
  },
  {
    emoji: '📈',
    title: 'Sabes qué mes va bien',
    description: 'Y qué productos son los más rentables de tu negocio.',
    accent: '#D4A0A0',
  },
];

const steps: Step[] = [
  {
    number: '1',
    icon: ClipboardList,
    title: 'Metes tu receta',
    description:
      'Ingredientes, cantidades y lo que pagas por cada uno. Una vez. Cakely lo guarda.',
  },
  {
    number: '2',
    icon: Calculator,
    title: 'Le dices cuánto tardas',
    description:
      'Cakely añade el valor de tus horas y tus costes fijos (luz, gas, local).',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Ves tu precio real',
    description:
      'Precio mínimo, recomendado y margen de beneficio. Tú decides qué cobrar, pero ya sabes lo que hay debajo.',
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'Subí precios un 20% después de ver lo que realmente me costaba cada tarta. Pensaba que iba a perder clientes. No perdí ninguno.',
    name: 'Laura M.',
    business: 'Repostera autónoma · Madrid',
  },
  {
    quote:
      'Antes tardaba una tarde en hacer el presupuesto de una boda. Ahora son 5 minutos y el cliente lo recibe por email directamente.',
    name: 'Cristina R.',
    business: 'Pastelería artesanal · Valencia',
  },
  {
    quote:
      'Lo que más me sorprendió fue ver que mis tartas de fondant me salían a pérdidas. Las tenía mal calculadas desde siempre.',
    name: 'Ana P.',
    business: 'Repostera a domicilio · Sevilla',
  },
];

export default function PrecioRealPage() {
  return (
    <div className='flex flex-col min-h-screen bg-[#FFF8F0]'>
      {/* ═══════════════════════════════════════════
          MINIMAL TOP BAR — no navigation distractions
      ═══════════════════════════════════════════ */}
      <header className='sticky top-0 z-50 bg-white border-b border-[#E8DDD0]'>
        <div className='max-w-6xl mx-auto px-5 py-3 flex justify-between items-center'>
          <Link href='/' className='flex items-center gap-2.5'>
            <Image
              src='/img/splash_logo.PNG'
              alt='Logo Cakely'
              width={120}
              height={120}
            />
          </Link>
          <Button
            size='sm'
            className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white rounded-full px-5 font-medium transition-all duration-300'
            asChild
          >
            <Link href={registerUrl}>Empieza gratis →</Link>
          </Button>
        </div>
      </header>

      <main className='flex-grow'>
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════ */}
        <section className='relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24'>
          {/* Warm gradient background */}
          <div className='absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-[#FAF0E6] to-[#F2D1D1]/20' />

          {/* Decorative blobs */}
          <div className='absolute top-20 -left-16 w-64 h-64 bg-[#F2D1D1]/30 blob-1 animate-float-slow' />
          <div className='absolute top-32 -right-20 w-80 h-80 bg-[#8B9E7E]/10 blob-2 animate-float' />
          <div className='absolute bottom-16 left-1/3 w-40 h-40 bg-[#C9A96E]/12 blob-3 animate-float-slow' />

          {/* Subtle texture */}
          <div className='absolute inset-0 texture-grain' />

          <div className='max-w-6xl mx-auto px-5 relative z-10 w-full'>
            <div className='grid md:grid-cols-5 gap-12 items-center'>
              {/* Left — Copy */}
              <div className='text-left md:col-span-2'>

                {/* Headline */}
                <h1
                  className='font-serif text-4xl md:text-5xl text-[#3D2519] leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100'
                >
                  Llevas meses haciendo tartas.
                  <br />
                  <span className='text-[#D4A0A0] italic'>
                    Puede que también lleves meses perdiendo dinero.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className='text-lg text-[#5C3D2E]/70 leading-relaxed mb-10 opacity-0 animate-fade-in-up animate-delay-200'>
                  Cakely calcula el precio real de cada tarta con tus ingredientes y
                  tus costes. Sin Excel. Sin adivinanzas.
                </p>

                {/* CTAs */}
                <div className='flex flex-col gap-4 mb-8 opacity-0 animate-fade-in-up animate-delay-300'>
                  <Button
                    size='lg'
                    className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-8 py-6 text-base font-semibold rounded-full shadow-warm-lg transition-all duration-300 hover:shadow-warm-xl'
                    asChild
                  >
                    <Link href={registerUrl}>
                      → Calcula el precio de tu primera tarta gratis
                    </Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-[#E8DDD0] text-[#5C3D2E] hover:bg-[#FAF0E6] px-8 py-6 text-base font-medium rounded-full'
                    asChild
                  >
                    <Link href='#como-funciona'>
                      Ver cómo funciona
                      <ChevronDown className='ml-2 w-4 h-4' />
                    </Link>
                  </Button>
                </div>

                {/* Trust signals */}
                <p className='text-sm text-[#A89888] font-medium opacity-0 animate-fade-in-up animate-delay-400'>
                  ✓ Sin tarjeta de crédito &nbsp;·&nbsp; ✓ Gratis para empezar
                  &nbsp;·&nbsp; ✓ En 2 minutos
                </p>
              </div>

              {/* Right — Video */}
              <div className='relative opacity-0 animate-fade-in-up animate-delay-300 md:col-span-3'>
                <video
                  src='/img/quote_video.mp4'
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-1/2 h-auto mx-auto block rounded-3xl'
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — DOLOR
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FAF0E6]'>
          <div className='absolute inset-0 texture-grain' />
          <div className='absolute top-0 right-0 w-64 h-64 bg-[#D4A0A0]/10 blob-2' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4'>
                ¿Te suena alguna de estas?
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight'>
                El problema que nadie te enseñó a resolver
              </h2>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className='bg-[#FFFDF9] rounded-2xl p-6 border border-[#E8DDD0]/60 card-organic shadow-warm'
                >
                  <span className='text-2xl mb-3 block'>{point.emoji}</span>
                  <p className='font-semibold text-[#3D2519] text-[15px] mb-1'>
                    {point.title}
                  </p>
                  <p className='text-[#5C3D2E]/60 text-sm leading-relaxed'>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className='text-center mt-14'>
              <div className='inline-block bg-[#3D2519] rounded-2xl px-8 py-6 max-w-2xl'>
                <p className='text-white font-serif text-lg md:text-xl italic leading-relaxed'>
                  &ldquo;Si esto te suena, no es que seas mala gestora. Es que
                  nadie te enseñó la parte de negocio. Cakely sí.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — SOLUCIÓN (mock calculator card)
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FFF8F0]'>
          <div className='absolute bottom-0 left-0 w-72 h-72 bg-[#8B9E7E]/6 blob-1' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#8B9E7E] font-medium text-sm uppercase tracking-widest mb-4'>
                La solución
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6'>
                Cakely hace los números por ti
              </h2>
              <p className='text-lg text-[#5C3D2E]/70 max-w-2xl mx-auto leading-relaxed'>
                Introduces los ingredientes de tu receta una vez. Cakely suma
                costes, añade tus horas, tus gastos fijos, y te dice exactamente
                cuánto cobrar para ganar dinero de verdad.
              </p>
            </div>

            {/* Mock calculator UI card */}
            <div className='max-w-2xl mx-auto'>
              <div className='bg-[#FFFDF9] rounded-2xl shadow-warm-xl border border-[#E8DDD0]/60 p-6 md:p-8'>
                {/* Card header */}
                <div className='flex items-center gap-3 pb-5 mb-5 border-b border-[#E8DDD0]'>
                  <div className='w-10 h-10 bg-[#F2D1D1]/40 rounded-xl flex items-center justify-center text-xl'>
                    🎂
                  </div>
                  <div>
                    <p className='font-serif text-lg text-[#3D2519] font-semibold'>
                      Tarta de chocolate y frambuesa
                    </p>
                    <p className='text-sm text-[#A89888]'>
                      Calculo de costes · 12 raciones
                    </p>
                  </div>
                </div>

                {/* Two column layout */}
                <div className='grid sm:grid-cols-2 gap-6'>
                  {/* Left: cost breakdown */}
                  <div>
                    <p className='text-xs font-semibold text-[#A89888] uppercase tracking-widest mb-4'>
                      Desglose de costes
                    </p>
                    <div className='space-y-3'>
                      {[
                        { label: 'Ingredientes', value: '€12.40' },
                        { label: 'Tu tiempo (3h)', value: '€18.00' },
                        { label: 'Gastos fijos', value: '€4.20' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className='flex justify-between items-center py-2.5 border-b border-[#E8DDD0]/50'
                        >
                          <span className='text-[#5C3D2E]/80 text-sm'>
                            {item.label}
                          </span>
                          <span className='font-medium text-[#3D2519] text-sm'>
                            {item.value}
                          </span>
                        </div>
                      ))}
                      <div className='flex justify-between items-center py-2.5'>
                        <span className='text-[#3D2519] font-semibold text-sm'>
                          Total costes
                        </span>
                        <span className='font-bold text-[#3D2519]'>
                          €34.60
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: recommended price */}
                  <div className='bg-[#FAF0E6] rounded-xl p-5 flex flex-col justify-between'>
                    <div>
                      <p className='text-xs font-semibold text-[#A89888] uppercase tracking-widest mb-4'>
                        Tu precio
                      </p>
                      <div className='mb-4'>
                        <p className='text-xs text-[#A89888] mb-1'>
                          Precio mínimo
                        </p>
                        <p className='font-serif text-2xl text-[#C9A96E] font-semibold'>
                          €41.50
                        </p>
                      </div>
                      <div className='mb-5'>
                        <p className='text-xs text-[#A89888] mb-1'>
                          Precio recomendado
                        </p>
                        <p className='font-serif text-4xl text-[#3D2519] font-bold leading-none'>
                          €52.00
                        </p>
                      </div>
                    </div>
                    <div className='inline-flex items-center gap-2 bg-[#8B9E7E]/10 text-[#8B9E7E] rounded-full px-3 py-1.5 self-start'>
                      <TrendingUp className='w-3.5 h-3.5' />
                      <span className='text-xs font-semibold'>
                        Tu margen: 33%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — BENEFICIOS
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FAF0E6]'>
          <div className='absolute inset-0 texture-grain' />
          <div className='absolute top-20 right-10 w-48 h-48 bg-[#F2D1D1]/15 blob-3 animate-float-slow' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#C9A96E] font-medium text-sm uppercase tracking-widest mb-4'>
                Beneficios
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight'>
                Lo que cambia cuando sabes lo que vales
              </h2>
            </div>

            <div className='grid sm:grid-cols-2 gap-6'>
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className='bg-[#FFFDF9] rounded-2xl p-6 border border-[#E8DDD0]/60 card-organic flex gap-4'
                >
                  <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0'
                    style={{ backgroundColor: `${benefit.accent}15` }}
                  >
                    {benefit.emoji}
                  </div>
                  <div>
                    <p className='font-semibold text-[#3D2519] mb-1'>
                      {benefit.title}
                    </p>
                    <p className='text-[#5C3D2E]/70 text-sm leading-relaxed'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5 — CÓMO FUNCIONA
        ═══════════════════════════════════════════ */}
        <section
          id='como-funciona'
          className='relative py-20 md:py-28 bg-[#FFF8F0]'
        >
          <div className='absolute top-0 right-0 w-56 h-56 bg-[#8B9E7E]/6 blob-2' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-16'>
              <p className='text-[#8B9E7E] font-medium text-sm uppercase tracking-widest mb-4'>
                Cómo funciona
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-4'>
                Tres pasos y ya tienes tu precio
              </h2>
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-6 relative'>
              {/* Connector lines on desktop */}
              <div className='hidden md:block absolute top-16 left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-px bg-[#E8DDD0] z-0' />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className='text-center relative z-10 group'
                >
                  {/* Step number + icon */}
                  <div className='relative inline-flex mb-6'>
                    <div className='w-20 h-20 bg-[#FFFDF9] rounded-full shadow-warm-lg flex items-center justify-center border-2 border-[#E8DDD0] group-hover:border-[#8B9E7E]/50 transition-colors duration-300'>
                      <step.icon className='w-8 h-8 text-[#8B9E7E]' />
                    </div>
                    <span className='absolute -top-1 -right-1 w-7 h-7 bg-[#8B9E7E] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-warm'>
                      {step.number}
                    </span>
                  </div>
                  <h3 className='font-serif text-xl text-[#3D2519] mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-[#5C3D2E]/70 leading-relaxed text-[15px] max-w-xs mx-auto'>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='text-center mt-14'>
              <Button
                size='lg'
                className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-10 py-6 text-base font-semibold rounded-full shadow-warm-lg transition-all duration-300 hover:shadow-warm-xl'
                asChild
              >
                <Link href={registerUrl}>
                  Empieza gratis ahora
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — TESTIMONIALS
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FAF0E6]'>
          <div className='absolute inset-0 texture-grain' />
          <div className='absolute top-12 left-8 w-48 h-48 bg-[#F2D1D1]/15 blob-3 animate-float-slow' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4'>
                Lo que dicen nuestras usuarias
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight'>
                Reposteras que ya saben lo que valen
              </h2>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className='bg-[#FFFDF9] rounded-2xl p-7 border border-[#E8DDD0]/60 shadow-warm card-organic'
                >
                  <Quote className='w-8 h-8 text-[#D4A0A0] mb-4' />
                  <div className='flex items-center gap-1 mb-4'>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className='w-4 h-4 fill-[#C9A96E] text-[#C9A96E]'
                      />
                    ))}
                  </div>
                  <p className='text-[#5C3D2E]/80 leading-relaxed text-[15px] italic mb-6'>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className='font-semibold text-[#3D2519] text-sm'>
                      {t.name}
                    </p>
                    <p className='text-[#A89888] text-sm'>{t.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 7 — CTA FINAL (dark)
        ═══════════════════════════════════════════ */}
        <section className='relative py-24 md:py-32 bg-[#3D2519] overflow-hidden'>
          {/* Decorative blobs */}
          <div className='absolute top-0 left-0 w-80 h-80 bg-[#8B9E7E]/10 blob-1 -translate-x-1/3 -translate-y-1/3' />
          <div className='absolute bottom-0 right-0 w-72 h-72 bg-[#F2D1D1]/8 blob-2 translate-x-1/4 translate-y-1/4' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5C3D2E]/40 blob-3' />

          <div className='max-w-3xl mx-auto px-5 text-center relative z-10'>
            <Heart className='w-10 h-10 text-[#8B9E7E] mx-auto mb-6' />
            <h2 className='font-serif text-3xl md:text-5xl text-white leading-tight mb-6'>
              Tu próxima tarta puede ser la primera
              <br className='hidden md:block' />
              <span className='text-[#8B9E7E] italic'>
                {' '}
                en la que sepas exactamente cuánto ganas
              </span>
            </h2>
            <p className='text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed'>
              Empieza gratis. Sin tarjeta. En menos de 2 minutos ya tienes tu
              primera receta calculada.
            </p>
            <Button
              size='lg'
              className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-10 py-6 text-base font-semibold rounded-full shadow-warm-xl transition-all duration-300 hover:scale-105'
              asChild
            >
              <Link href={registerUrl}>
                → Calcular el precio de mi primera tarta
              </Link>
            </Button>
            <p className='text-white/40 text-sm mt-6'>
              ¿Tienes dudas? Escríbenos a{' '}
              <a
                href='mailto:hola@cakely.es'
                className='underline underline-offset-2 hover:text-white/60 transition-colors'
              >
                hola@cakely.es
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════
          MINIMAL FOOTER
      ═══════════════════════════════════════════ */}
      <footer className='bg-[#3D2519] border-t border-white/10'>
        <div className='max-w-5xl mx-auto px-5 py-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <Link href='/' className='flex items-center gap-2.5'>
              <Image
                src='/img/splash_logo.PNG'
                alt='Logo Cakely'
                width={100}
                height={100}
              />
            </Link>
            <div className='flex items-center gap-6'>
              <Link
                href='/privacidad'
                className='text-white/40 hover:text-white/70 transition-colors text-sm'
              >
                Privacidad
              </Link>
              <Link
                href='/terminos'
                className='text-white/40 hover:text-white/70 transition-colors text-sm'
              >
                Términos
              </Link>
            </div>
          </div>
          <p className='text-white/30 text-xs text-center mt-6'>
            © 2025 Cakely · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
