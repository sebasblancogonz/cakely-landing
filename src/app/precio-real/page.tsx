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

const registerUrl = `${appDomain}/empezar-prueba`;

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
    emoji: '🧮',
    title: 'Sumas ingredientes... y ya está',
    description:
      'Pero no cuentas las 3 horas de decoración, ni la luz del horno, ni el gas, ni tu tiempo comprando.',
  },
  {
    emoji: '👀',
    title: 'Miras lo que cobra la de al lado',
    description:
      'Y pones un precio parecido. Sin saber si ella gana dinero o también está perdiendo.',
  },
  {
    emoji: '😬',
    title: 'Te da miedo cobrar más',
    description:
      'Porque "es solo una tarta" o "la gente no va a pagar eso". Así que cobras menos y trabajas más.',
  },
  {
    emoji: '📱',
    title: 'Tus pedidos viven en WhatsApp',
    description:
      'Un audio por aquí, una foto por allá. Y cuando llega el día, siempre falta un detalle.',
  },
];

const consequences = [
  {
    number: '€12,40',
    label: 'en ingredientes',
  },
  {
    number: '€18,00',
    label: 'tu tiempo (3 horas)',
  },
  {
    number: '€4,20',
    label: 'gastos fijos (luz, gas...)',
  },
  {
    number: '€34,60',
    label: 'COSTE REAL de esa tarta',
    highlight: true,
  },
];

const benefits: Benefit[] = [
  {
    emoji: '💰',
    title: 'Cobras lo que de verdad vale tu trabajo',
    description:
      'Nunca más un precio "a ojo". Cada tarta tiene su precio basado en datos reales, no en intuición.',
    accent: '#C9A96E',
  },
  {
    emoji: '🛡️',
    title: 'Sabes si un pedido es rentable ANTES de aceptarlo',
    description:
      'Si un encargo no te da margen, lo ves antes de ir al súper a comprar ingredientes.',
    accent: '#8B9E7E',
  },
  {
    emoji: '😌',
    title: 'Se acabó el estrés de poner precios',
    description:
      'No más dudas, no más vergüenza. Tienes un número claro y puedes justificarlo si alguien pregunta.',
    accent: '#D4A0A0',
  },
  {
    emoji: '📈',
    title: 'Más dinero a final de mes',
    description:
      'Reposteras que usan Cakely suben sus precios una media del 20%. Y no pierden clientes.',
    accent: '#C9A96E',
  },
];

const steps: Step[] = [
  {
    number: '1',
    icon: ClipboardList,
    title: 'Mete tu receta',
    description:
      'Ingredientes, cantidades y lo que te cuestan. Lo haces una vez y Cakely lo guarda para siempre.',
  },
  {
    number: '2',
    icon: Calculator,
    title: 'Añade tu tiempo y gastos',
    description:
      'Cakely suma el valor de tus horas, la luz, el gas, el local... todo lo que siempre se te olvida contar.',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Obtén tu precio real',
    description:
      'Precio mínimo, precio recomendado y tu margen de beneficio. Tú decides cuánto cobras, pero ahora sabes lo que hay debajo.',
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      'Subí precios un 20% después de ver lo que realmente me costaba cada tarta. Pensaba que iba a perder clientes. No perdí ni uno.',
    name: 'Laura M.',
    business: 'Repostera autónoma · Madrid',
  },
  {
    quote:
      'Lo que más me impactó fue descubrir que mis tartas de fondant me salían a pérdidas. Las tenía mal calculadas desde siempre.',
    name: 'Ana P.',
    business: 'Repostera a domicilio · Sevilla',
  },
  {
    quote:
      'Antes tardaba una tarde entera en hacer el presupuesto de una boda. Ahora son 5 minutos y el cliente lo recibe por email.',
    name: 'Cristina R.',
    business: 'Pastelería artesanal · Valencia',
  },
];

export default function PrecioRealPage() {
  return (
    <div className='flex flex-col min-h-screen bg-[#FFF8F0]'>
      {/* ═══════════════════════════════════════════
          MINIMAL TOP BAR
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
            <Link href={registerUrl}>Descubre tu precio real →</Link>
          </Button>
        </div>
      </header>

      <main className='flex-grow'>
        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO
        ═══════════════════════════════════════════ */}
        <section className='relative min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24'>
          <div className='absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-[#FAF0E6] to-[#F2D1D1]/20' />

          <div className='absolute top-20 -left-16 w-64 h-64 bg-[#F2D1D1]/30 blob-1 animate-float-slow' />
          <div className='absolute top-32 -right-20 w-80 h-80 bg-[#8B9E7E]/10 blob-2 animate-float' />
          <div className='absolute bottom-16 left-1/3 w-40 h-40 bg-[#C9A96E]/12 blob-3 animate-float-slow' />

          <div className='absolute inset-0 texture-grain' />

          <div className='max-w-6xl mx-auto px-5 relative z-10 w-full'>
            <div className='grid md:grid-cols-5 gap-12 items-center'>
              {/* Left — Copy */}
              <div className='text-left md:col-span-2'>
                {/* Headline */}
                <h1 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100'>
                  Estás perdiendo dinero
                  <br />
                  con cada tarta que vendes.
                  <br />
                  <span className='text-[#D4A0A0] italic'>
                    Y no lo sabes.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className='text-base md:text-lg text-[#5C3D2E]/70 leading-relaxed mb-10 opacity-0 animate-fade-in-up animate-delay-200'>
                  El 80% de las reposteras cobra menos de lo que le cuesta
                  hacer una tarta. Cakely te dice en 2 minutos cuánto deberías
                  cobrar realmente.
                </p>

                {/* CTAs */}
                <div className='flex flex-col gap-4 mb-8 opacity-0 animate-fade-in-up animate-delay-300'>
                  <Button
                    size='lg'
                    className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-6 py-5 text-sm md:text-base font-semibold rounded-full shadow-warm-lg transition-all duration-300 hover:shadow-warm-xl w-full'
                    asChild
                  >
                    <Link href={registerUrl}>
                      Quiero saber mi precio real
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-[#E8DDD0] text-[#5C3D2E] hover:bg-[#FAF0E6] px-6 py-5 text-sm md:text-base font-medium rounded-full w-full'
                    asChild
                  >
                    <Link href='#problema'>
                      Ver cuánto estás perdiendo
                      <ChevronDown className='ml-2 w-4 h-4' />
                    </Link>
                  </Button>
                </div>

                {/* Trust signals */}
                <p className='text-sm text-[#A89888] font-medium opacity-0 animate-fade-in-up animate-delay-400'>
                  Gratis. Sin tarjeta. En 2 minutos.
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
            SECTION 2 — PROBLEMA
        ═══════════════════════════════════════════ */}
        <section id='problema' className='relative py-20 md:py-28 bg-[#FAF0E6]'>
          <div className='absolute inset-0 texture-grain' />
          <div className='absolute top-0 right-0 w-64 h-64 bg-[#D4A0A0]/10 blob-2' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4'>
                Esto es lo que pasa de verdad
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight'>
                Haces tartas increíbles.
                <br />
                <span className='text-[#D4A0A0]'>
                  Pero cobras como si fueran gratis.
                </span>
              </h2>
            </div>

            <div className='grid sm:grid-cols-2 gap-5'>
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

            <div className='text-center mt-14'>
              <div className='inline-block bg-[#3D2519] rounded-2xl px-8 py-6 max-w-2xl'>
                <p className='text-white font-serif text-lg md:text-xl italic leading-relaxed'>
                  &ldquo;Si te sientes identificada, no es que seas mala con los
                  números. Es que nadie te enseñó esta parte del negocio.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 — CONSECUENCIAS
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FFF8F0]'>
          <div className='absolute bottom-0 left-0 w-72 h-72 bg-[#D4A0A0]/6 blob-1' />

          <div className='max-w-4xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4'>
                Un ejemplo real
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6'>
                Esto es lo que cuesta <span className='italic text-[#D4A0A0]'>de verdad</span> una tarta de chocolate
              </h2>
              <p className='text-lg text-[#5C3D2E]/70 max-w-2xl mx-auto leading-relaxed'>
                La mayoría de reposteras solo cuentan los ingredientes. Pero una
                tarta tiene costes que nunca ves.
              </p>
            </div>

            <div className='max-w-lg mx-auto'>
              <div className='bg-[#FFFDF9] rounded-2xl shadow-warm-xl border border-[#E8DDD0]/60 p-6 md:p-8'>
                <div className='flex items-center gap-3 pb-5 mb-5 border-b border-[#E8DDD0]'>
                  <div className='w-10 h-10 bg-[#F2D1D1]/40 rounded-xl flex items-center justify-center text-xl'>
                    🎂
                  </div>
                  <div>
                    <p className='font-serif text-lg text-[#3D2519] font-semibold'>
                      Tarta de chocolate · 12 raciones
                    </p>
                  </div>
                </div>

                <div className='space-y-3'>
                  {consequences.map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center py-3 ${
                        item.highlight
                          ? 'border-t-2 border-[#D4A0A0] mt-2 pt-4'
                          : 'border-b border-[#E8DDD0]/50'
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          item.highlight
                            ? 'text-[#3D2519] font-bold'
                            : 'text-[#5C3D2E]/80'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`font-medium ${
                          item.highlight
                            ? 'text-[#D4A0A0] font-bold text-lg'
                            : 'text-[#3D2519] text-sm'
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>
                  ))}
                </div>

                <div className='mt-6 bg-[#D4A0A0]/10 rounded-xl p-5 text-center'>
                  <p className='text-sm text-[#5C3D2E]/70 mb-2'>
                    Si la vendiste a €30...
                  </p>
                  <p className='font-serif text-2xl text-[#D4A0A0] font-bold'>
                    Perdiste €4,60
                  </p>
                  <p className='text-sm text-[#5C3D2E]/60 mt-2'>
                    Trabajaste 3 horas para <span className='font-semibold'>perder dinero</span>.
                  </p>
                </div>

                <div className='mt-5 bg-[#8B9E7E]/10 rounded-xl p-5 text-center'>
                  <p className='text-sm text-[#5C3D2E]/70 mb-2'>
                    Con Cakely, habrías cobrado
                  </p>
                  <p className='font-serif text-2xl text-[#8B9E7E] font-bold'>
                    €52,00
                  </p>
                  <p className='text-sm text-[#5C3D2E]/60 mt-2'>
                    Con un margen del <span className='font-semibold'>33% de beneficio</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className='text-center mt-10'>
              <p className='text-[#5C3D2E]/60 text-base mb-6'>
                ¿Cuántas tartas has vendido ya a pérdidas sin saberlo?
              </p>
              <Button
                size='lg'
                className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-10 py-6 text-base font-semibold rounded-full shadow-warm-lg transition-all duration-300 hover:shadow-warm-xl'
                asChild
              >
                <Link href={registerUrl}>
                  Calcular el precio real de mi tarta
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 — SOLUCIÓN
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FAF0E6]'>
          <div className='absolute inset-0 texture-grain' />
          <div className='absolute top-20 right-10 w-48 h-48 bg-[#8B9E7E]/10 blob-3 animate-float-slow' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#8B9E7E] font-medium text-sm uppercase tracking-widest mb-4'>
                La solución
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6'>
                Cakely te dice exactamente
                <br />
                <span className='text-[#8B9E7E] italic'>cuánto cobrar por cada tarta</span>
              </h2>
              <p className='text-lg text-[#5C3D2E]/70 max-w-2xl mx-auto leading-relaxed'>
                Metes tu receta una vez. Cakely suma los ingredientes, añade tus
                horas, tus gastos fijos, y te da el precio que tienes que cobrar
                para ganar dinero de verdad. Así de simple.
              </p>
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
                Así de fácil
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-4'>
                Tu precio real en 3 pasos
              </h2>
              <p className='text-lg text-[#5C3D2E]/60 max-w-xl mx-auto'>
                Sin fórmulas. Sin Excel. Sin dolores de cabeza.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-6 relative'>
              <div className='hidden md:block absolute top-16 left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-px bg-[#E8DDD0] z-0' />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className='text-center relative z-10 group'
                >
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
                  Quiero saber mi precio real
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6 — TESTIMONIOS
        ═══════════════════════════════════════════ */}
        <section className='relative py-20 md:py-28 bg-[#FAF0E6]'>
          <div className='absolute inset-0 texture-grain' />
          <div className='absolute top-12 left-8 w-48 h-48 bg-[#F2D1D1]/15 blob-3 animate-float-slow' />

          <div className='max-w-5xl mx-auto px-5 relative z-10'>
            <div className='text-center mb-14'>
              <p className='text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4'>
                Les pasaba lo mismo que a ti
              </p>
              <h2 className='font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight'>
                Reposteras que dejaron de
                <br />
                <span className='text-[#D4A0A0] italic'>regalar su trabajo</span>
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
            SECTION 7 — CTA FINAL
        ═══════════════════════════════════════════ */}
        <section className='relative py-24 md:py-32 bg-[#3D2519] overflow-hidden'>
          <div className='absolute top-0 left-0 w-80 h-80 bg-[#8B9E7E]/10 blob-1 -translate-x-1/3 -translate-y-1/3' />
          <div className='absolute bottom-0 right-0 w-72 h-72 bg-[#F2D1D1]/8 blob-2 translate-x-1/4 translate-y-1/4' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5C3D2E]/40 blob-3' />

          <div className='max-w-3xl mx-auto px-5 text-center relative z-10'>
            <Heart className='w-10 h-10 text-[#8B9E7E] mx-auto mb-6' />
            <h2 className='font-serif text-3xl md:text-5xl text-white leading-tight mb-6'>
              Cada tarta que vendes sin saber tu precio real
              <br className='hidden md:block' />
              <span className='text-[#8B9E7E] italic'>
                {' '}
                es dinero que regalas
              </span>
            </h2>
            <p className='text-white/60 text-lg mb-4 max-w-xl mx-auto leading-relaxed'>
              Hoy puedes ser la última vez que pongas un precio &ldquo;a ojo&rdquo;.
            </p>
            <p className='text-white/40 text-base mb-10 max-w-xl mx-auto'>
              Regístrate gratis. Mete tu primera receta. Y descubre cuánto
              deberías estar cobrando.
            </p>
            <Button
              size='lg'
              className='bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-10 py-6 text-base font-semibold rounded-full shadow-warm-xl transition-all duration-300 hover:scale-105'
              asChild
            >
              <Link href={registerUrl}>
                Quiero saber mi precio real →
              </Link>
            </Button>
            <p className='text-white/50 text-sm mt-6 font-medium'>
              Gratis · Sin tarjeta · 2 minutos
            </p>
            <p className='text-white/30 text-sm mt-4'>
              ¿Tienes dudas? Escríbenos a{' '}
              <a
                href='mailto:contacto@cakely.es'
                className='underline underline-offset-2 hover:text-white/60 transition-colors'
              >
                contacto@cakely.es
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
