'use client';

import {
  Calculator,
  ArrowRight,
  TrendingUp,
  ClipboardList,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

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
  },
  {
    emoji: '🛡️',
    title: 'Sabes si un pedido es rentable ANTES de aceptarlo',
    description:
      'Si un encargo no te da margen, lo ves antes de ir al súper a comprar ingredientes.',
  },
  {
    emoji: '😌',
    title: 'Se acabó el estrés de poner precios',
    description:
      'No más dudas, no más vergüenza. Tienes un número claro y puedes justificarlo si alguien pregunta.',
  },
  {
    emoji: '📈',
    title: 'Más dinero a final de mes',
    description:
      'Reposteras que usan Cakely suben sus precios una media del 20%. Y no pierden clientes.',
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
    <div className='flex flex-col min-h-screen bg-[#FAFAF8]'>
      <Header />

      <main className='flex-grow pt-16'>
        {/* HERO */}
        <section className='py-20 md:py-28'>
          <div className='max-w-6xl mx-auto px-5 md:px-8'>
            <div className='grid md:grid-cols-5 gap-12 items-center'>
              {/* Left — Copy */}
              <div className='text-left md:col-span-2'>
                <h1 className='font-serif text-3xl md:text-5xl text-[#1C1917] leading-[1.1] tracking-tight mb-6'>
                  Estás perdiendo dinero
                  <br />
                  con cada tarta que vendes.
                  <br />
                  <span className='text-[#E8943A] italic'>
                    Y no lo sabes.
                  </span>
                </h1>

                <p className='text-base md:text-lg text-[#44403C] leading-relaxed mb-10'>
                  El 80% de las reposteras cobra menos de lo que le cuesta
                  hacer una tarta. Cakely te dice en 2 minutos cuánto deberías
                  cobrar realmente.
                </p>

                <div className='flex flex-col gap-4 mb-8'>
                  <Link
                    href={registerUrl}
                    className='inline-flex items-center justify-center bg-[#1C1917] hover:bg-[#1C1917]/90 text-white px-6 py-3 text-sm md:text-base font-medium rounded-lg w-full'
                  >
                    Quiero saber mi precio real
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                  <Link
                    href='#problema'
                    className='inline-flex items-center justify-center border border-[#E7E5E4] text-[#44403C] hover:bg-white px-6 py-3 text-sm md:text-base font-medium rounded-lg w-full'
                  >
                    Ver cuánto estás perdiendo
                    <ChevronDown className='ml-2 w-4 h-4' />
                  </Link>
                </div>

                <p className='text-sm text-[#A8A29E] font-medium'>
                  Gratis. Sin tarjeta. En 2 minutos.
                </p>
              </div>

              {/* Right — Video */}
              <div className='md:col-span-3'>
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

        {/* PROBLEM */}
        <section id='problema' className='py-20 md:py-28 bg-white'>
          <div className='max-w-6xl mx-auto px-5 md:px-8'>
            <div className='text-center mb-14'>
              <p className='text-[#E8943A] font-medium text-sm mb-4'>
                Esto es lo que pasa de verdad
              </p>
              <h2 className='font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight'>
                Haces tartas increíbles.
                <br />
                <span className='text-[#E8943A]'>
                  Pero cobras como si fueran gratis.
                </span>
              </h2>
            </div>

            <div className='grid sm:grid-cols-2 gap-5'>
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className='bg-[#FAFAF8] rounded-xl p-6 border border-[#E7E5E4]'
                >
                  <span className='text-2xl mb-3 block'>{point.emoji}</span>
                  <p className='font-semibold text-[#1C1917] text-[15px] mb-1'>
                    {point.title}
                  </p>
                  <p className='text-[#44403C] text-sm leading-relaxed'>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='text-center mt-14'>
              <div className='inline-block bg-[#1C1917] rounded-xl px-8 py-6 max-w-2xl'>
                <p className='text-white font-serif text-lg md:text-xl italic leading-relaxed'>
                  &ldquo;Si te sientes identificada, no es que seas mala con los
                  números. Es que nadie te enseñó esta parte del negocio.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COST BREAKDOWN */}
        <section className='py-20 md:py-28 bg-[#FAFAF8]'>
          <div className='max-w-6xl mx-auto px-5 md:px-8'>
            <div className='text-center mb-14'>
              <p className='text-[#E8943A] font-medium text-sm mb-4'>
                Un ejemplo real
              </p>
              <h2 className='font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight mb-6'>
                Esto es lo que cuesta <span className='italic text-[#E8943A]'>de verdad</span> una tarta de chocolate
              </h2>
              <p className='text-lg text-[#44403C] max-w-2xl mx-auto leading-relaxed'>
                La mayoría de reposteras solo cuentan los ingredientes. Pero una
                tarta tiene costes que nunca ves.
              </p>
            </div>

            <div className='max-w-lg mx-auto'>
              <div className='bg-white rounded-xl shadow-sm border border-[#E7E5E4] p-6 md:p-8'>
                <div className='flex items-center gap-3 pb-5 mb-5 border-b border-[#E7E5E4]'>
                  <div className='w-10 h-10 bg-[#E8943A]/10 rounded-xl flex items-center justify-center text-xl'>
                    🎂
                  </div>
                  <div>
                    <p className='font-semibold text-lg text-[#1C1917]'>
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
                          ? 'border-t-2 border-[#E8943A] mt-2 pt-4'
                          : 'border-b border-[#E7E5E4]'
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          item.highlight
                            ? 'text-[#1C1917] font-bold'
                            : 'text-[#44403C]'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`font-medium ${
                          item.highlight
                            ? 'text-[#E8943A] font-bold text-lg'
                            : 'text-[#1C1917] text-sm'
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>
                  ))}
                </div>

                <div className='mt-6 bg-[#E8943A]/10 rounded-xl p-5 text-center'>
                  <p className='text-sm text-[#44403C] mb-2'>
                    Si la vendiste a €30...
                  </p>
                  <p className='font-serif text-2xl text-[#E8943A] font-bold'>
                    Perdiste €4,60
                  </p>
                  <p className='text-sm text-[#78716C] mt-2'>
                    Trabajaste 3 horas para <span className='font-semibold'>perder dinero</span>.
                  </p>
                </div>

                <div className='mt-5 bg-[#1C1917]/5 rounded-xl p-5 text-center'>
                  <p className='text-sm text-[#44403C] mb-2'>
                    Con Cakely, habrías cobrado
                  </p>
                  <p className='font-serif text-2xl text-[#1C1917] font-bold'>
                    €52,00
                  </p>
                  <p className='text-sm text-[#78716C] mt-2'>
                    Con un margen del <span className='font-semibold'>33% de beneficio</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className='text-center mt-10'>
              <p className='text-[#78716C] text-base mb-6'>
                ¿Cuántas tartas has vendido ya a pérdidas sin saberlo?
              </p>
              <Link
                href={registerUrl}
                className='inline-flex items-center bg-[#1C1917] hover:bg-[#1C1917]/90 text-white px-8 py-3 text-base font-medium rounded-lg'
              >
                Calcular el precio real de mi tarta
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className='py-20 md:py-28 bg-white'>
          <div className='max-w-6xl mx-auto px-5 md:px-8'>
            <div className='text-center mb-14'>
              <p className='text-[#E8943A] font-medium text-sm mb-4'>
                La solución
              </p>
              <h2 className='font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight mb-6'>
                Cakely te dice exactamente
                <br />
                <span className='text-[#E8943A] italic'>cuánto cobrar por cada tarta</span>
              </h2>
              <p className='text-lg text-[#44403C] max-w-2xl mx-auto leading-relaxed'>
                Metes tu receta una vez. Cakely suma los ingredientes, añade tus
                horas, tus gastos fijos, y te da el precio que tienes que cobrar
                para ganar dinero de verdad. Así de simple.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-6'>
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className='bg-[#FAFAF8] rounded-xl p-6 border border-[#E7E5E4] flex gap-4'
                >
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 bg-[#E8943A]/10'>
                    {benefit.emoji}
                  </div>
                  <div>
                    <p className='font-semibold text-[#1C1917] mb-1'>
                      {benefit.title}
                    </p>
                    <p className='text-[#44403C] text-sm leading-relaxed'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id='como-funciona' className='py-20 md:py-28 bg-[#FAFAF8]'>
          <div className='max-w-6xl mx-auto px-5 md:px-8'>
            <div className='text-center mb-16'>
              <p className='text-[#E8943A] font-medium text-sm mb-4'>
                Así de fácil
              </p>
              <h2 className='font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight mb-4'>
                Tu precio real en 3 pasos
              </h2>
              <p className='text-lg text-[#78716C] max-w-xl mx-auto'>
                Sin fórmulas. Sin Excel. Sin dolores de cabeza.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-6 relative'>
              <div className='hidden md:block absolute top-16 left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-px bg-[#E7E5E4] z-0' />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className='text-center relative z-10'
                >
                  <div className='relative inline-flex mb-6'>
                    <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center border border-[#E7E5E4]'>
                      <step.icon className='w-8 h-8 text-[#E8943A]' />
                    </div>
                    <span className='absolute -top-1 -right-1 w-7 h-7 bg-[#1C1917] text-white text-xs font-bold rounded-full flex items-center justify-center'>
                      {step.number}
                    </span>
                  </div>
                  <h3 className='font-sans font-semibold text-xl text-[#1C1917] mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-[#44403C] leading-relaxed text-[15px] max-w-xs mx-auto'>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='text-center mt-14'>
              <Link
                href={registerUrl}
                className='inline-flex items-center bg-[#1C1917] hover:bg-[#1C1917]/90 text-white px-8 py-3 text-base font-medium rounded-lg'
              >
                Quiero saber mi precio real
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className='py-20 md:py-28 bg-white'>
          <div className='max-w-6xl mx-auto px-5 md:px-8'>
            <div className='text-center mb-14'>
              <h2 className='font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight'>
                Reposteras que dejaron de
                <br />
                <span className='text-[#E8943A] italic'>regalar su trabajo</span>
              </h2>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className='bg-[#FAFAF8] rounded-xl p-8 border border-[#E7E5E4]'
                >
                  <blockquote className='text-[#44403C] text-base leading-relaxed mb-6'>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer>
                    <cite className='not-italic font-semibold text-[#1C1917] text-sm block'>
                      {t.name}
                    </cite>
                    <span className='text-[#A8A29E] text-sm'>{t.business}</span>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 md:py-28 bg-[#1C1917]'>
          <div className='max-w-6xl mx-auto px-6 text-center'>
            <h2 className='font-serif text-3xl md:text-4xl text-white tracking-tight'>
              Cada tarta que vendes sin saber tu precio real
              <br className='hidden md:block' />
              <span className='text-[#E8943A] italic'>
                {' '}es dinero que regalas
              </span>
            </h2>
            <p className='text-[#A8A29E] mt-4 text-lg max-w-xl mx-auto'>
              Hoy puede ser la última vez que pongas un precio &ldquo;a ojo&rdquo;.
            </p>
            <p className='text-[#78716C] text-base mt-3 max-w-xl mx-auto'>
              Regístrate gratis. Mete tu primera receta. Y descubre cuánto
              deberías estar cobrando.
            </p>
            <div className='mt-8'>
              <Link
                href={registerUrl}
                className='inline-block bg-white text-[#1C1917] hover:bg-white/90 px-6 py-3 rounded-lg font-medium text-base'
              >
                Quiero saber mi precio real
              </Link>
            </div>
            <p className='text-[#A8A29E] text-sm mt-6'>
              Gratis · Sin tarjeta · 2 minutos
            </p>
            <p className='text-[#78716C] text-sm mt-4'>
              ¿Tienes dudas? Escríbenos a{' '}
              <a
                href='mailto:contacto@cakely.es'
                className='underline underline-offset-2 hover:text-white transition-colors'
              >
                contacto@cakely.es
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
