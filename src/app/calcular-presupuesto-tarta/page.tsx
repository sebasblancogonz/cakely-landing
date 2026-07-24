import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CalculadoraTarta } from '@/components/landing/CalculadoraTarta';
import {
  faqPageJsonLd,
  breadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export const metadata: Metadata = {
  title: 'Calculadora de precios de tartas gratis | ¿Cuánto cobrar? — Cakely',
  description:
    'Calcula gratis cuánto deberías cobrar por una tarta: ingredientes, mano de obra, gastos y margen. Sin registro. Descubre por qué la regla del ×3 te hace perder dinero.',
  alternates: { canonical: `${baseUrl}/calcular-presupuesto-tarta` },
  openGraph: {
    title: 'Calculadora de precios de tartas gratis — Cakely',
    description:
      'Descubre en 30 segundos cuánto deberías cobrar por tus tartas, con desglose de costes y margen.',
    url: `${baseUrl}/calcular-presupuesto-tarta`,
    type: 'website',
    images: [
      {
        url: 'https://cakely.es/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora de precios de tartas de Cakely',
      },
    ],
  },
};

const FAQS = [
  {
    question: '¿Cuánto debería cobrar por una tarta personalizada?',
    answer:
      'Depende de tus costes reales: ingredientes, horas de trabajo, gastos del obrador y el margen que quieras. Como referencia de mercado, en España una tarta personalizada suele moverse entre 6 y 10 € por ración, y las tartas con fondant o modelado 3D en la parte alta del rango. La forma fiable de calcularlo es el escandallo completo, no una regla rápida.',
  },
  {
    question: '¿Cómo se calcula el precio de una tarta paso a paso?',
    answer:
      'Suma el coste exacto de los ingredientes de la receta, el packaging, las horas de trabajo multiplicadas por tu tarifa por hora, y un porcentaje de gastos generales (luz, alquiler, maquinaria). Ese es tu coste total. Después aplica tu margen sobre el precio de venta (precio = coste ÷ (1 − margen)) y añade el IVA al final.',
  },
  {
    question: '¿Funciona la regla de multiplicar los ingredientes por 3?',
    answer:
      'No como método principal. El ×3 asume que los ingredientes son un tercio del precio, algo que casi nunca se cumple en repostería creativa: en una tarta decorada la mano de obra es el 50-60 % del coste. Con ingredientes baratos y muchas horas de decoración, el ×3 te hace regalar tu trabajo. Úsala como mucho de referencia rápida, nunca como precio final.',
  },
  {
    question: '¿Qué margen de beneficio debo aplicar?',
    answer:
      'En pastelería artesanal es habitual un margen del 20-30 % sobre el precio de venta. Ojo con confundir margen con markup: un 25 % de recargo sobre el coste solo deja un 20 % de margen real. La fórmula correcta es precio = coste ÷ (1 − margen).',
  },
  {
    question: '¿Debo cobrar mis horas de trabajo aunque trabaje desde casa?',
    answer:
      'Siempre. La mano de obra es un coste, no un extra: calcula tu tarifa dividiendo el sueldo mensual que quieres entre tus horas productivas al mes, y multiplícala por las horas reales de cada encargo (incluyendo diseño, compras y limpieza). No cobrarlas es la principal causa de vender tartas a pérdida.',
  },
];

export default function CalcularPresupuestoTartaPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd(FAQS))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            {
              name: 'Calculadora de precios de tartas',
              path: '/calcular-presupuesto-tarta',
            },
          ])
        )}
      />
      <Header />
      <main className="bg-[#FAFAF8]">
        {/* Hero + calculadora */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight">
              ¿Cuánto deberías cobrar por tu tarta?
            </h1>
            <p className="mt-4 text-lg text-[#44403C]/70 max-w-xl mx-auto">
              Calculadora gratuita de presupuestos para repostería: ingredientes,
              mano de obra, gastos y margen en 30 segundos. Sin registro.
            </p>
          </div>
          <CalculadoraTarta />
        </section>

        {/* Cómo se calcula */}
        <section className="py-16 px-6 bg-white border-y border-[#E7E5E4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#1C1917] mb-6">
              Cómo se calcula el precio de una tarta (bien hecho)
            </h2>
            <ol className="space-y-4 text-[#44403C] list-decimal list-inside">
              <li>
                <strong>Escandallo de ingredientes:</strong> el coste exacto de
                cada ingrediente en la cantidad que usa tu receta, no una
                estimación a ojo.
              </li>
              <li>
                <strong>Mano de obra, siempre:</strong> tus horas reales
                (elaboración, decoración, diseño, compras y limpieza) por una
                tarifa digna. Es el coste más olvidado y el que más dinero te
                hace perder.
              </li>
              <li>
                <strong>Gastos generales:</strong> luz, alquiler, maquinaria y
                packaging repartidos entre tus elaboraciones (un 15-20 % sobre
                el coste directo es habitual).
              </li>
              <li>
                <strong>Margen sobre el precio de venta:</strong> precio = coste
                ÷ (1 − margen). Y el IVA se añade al final, nunca lo absorbas.
              </li>
            </ol>

            <div className="mt-8 p-5 rounded-2xl bg-[#FED7AA]/20 border border-[#E8943A]/20">
              <h3 className="font-semibold text-[#1C1917] mb-2">
                ⚠️ La trampa de la regla del ×3
              </h3>
              <p className="text-[#44403C] text-sm">
                Multiplicar los ingredientes por 3 solo funciona cuando la
                materia prima es un tercio del precio — casi nunca en repostería
                creativa. Ejemplo real: una tarta con 3 € de ingredientes y 4
                horas de decoración saldría a 9 € por la regla del ×3… cobrando
                tu trabajo a menos de 2 € la hora. Por eso las herramientas
                profesionales usan el escandallo completo.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#1C1917] mb-8">
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-2xl border border-[#E7E5E4] p-5"
                >
                  <summary className="font-medium text-[#1C1917] cursor-pointer list-none flex justify-between items-center gap-4">
                    {faq.question}
                    <span className="text-[#E8943A] group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[#44403C]/80">{faq.answer}</p>
                </details>
              ))}
            </div>

            <p className="mt-10 text-sm text-[#44403C]/70 text-center">
              ¿Tienes una pastelería o vendes desde casa? Descubre el{' '}
              <Link
                href="/software-para-pastelerias"
                className="text-[#E8943A] hover:underline"
              >
                software de gestión para pastelerías
              </Link>{' '}
              o lee más sobre precios y finanzas en{' '}
              <Link href="/blog" className="text-[#E8943A] hover:underline">
                nuestro blog
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
