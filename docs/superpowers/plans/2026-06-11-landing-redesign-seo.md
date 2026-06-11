# Landing: elevación visual + arquitectura SEO — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevar visualmente la landing de Cakely y crear la arquitectura SEO para posicionar "software/gestión de pedidos" para pastelerías Y panaderías en España.

**Architecture:** La landing (Next.js 15 App Router, Tailwind 4 CSS-first, repo `cakely-landing`) ya implementa el design system. Se añaden: un componente `Reveal` de micro-interacción, elevación del hero, dos páginas verticales (`/software-para-pastelerias`, `/software-para-panaderias`) construidas sobre una plantilla parametrizada por configuración, helpers de JSON-LD, sitemap ampliado y eventos de analytics en CTAs. Spec: `docs/superpowers/specs/2026-06-11-landing-redesign-seo-design.md`.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4 (`@theme` en `globals.css`), lucide-react, Prisma (solo blog/sitemap), Meta Pixel.

**Convenciones del repo:** componentes de sección en `src/components/landing/`, datos/copy centralizados en `src/lib/landing-data.ts`, `appDomain` desde `NEXT_PUBLIC_APP_DOMAIN` (default `https://app.cakely.es`), `baseUrl` desde `NEXT_PUBLIC_LANDING_DOMAIN` (default `https://cakely.es`). No hay test runner: la verificación es `pnpm build` + revisión visual con `pnpm dev`.

---

### Task 1: Componente `Reveal` (fade-in al hacer scroll)

**Files:**
- Create: `src/components/landing/Reveal.tsx`

- [ ] **Step 1: Crear el componente**

```tsx
'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Envuelve contenido con un fade-in + translate-y al entrar en viewport.
 * Respeta prefers-reduced-motion (sin animación, contenido visible).
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Verificar build**

Run: `pnpm build 2>&1 | tail -5`
Expected: build sin errores (el componente aún no se usa; no debe romper nada).

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Reveal.tsx
git commit -m "feat(landing): componente Reveal — fade-in on scroll con prefers-reduced-motion"
```

---

### Task 2: Elevación del Hero

**Files:**
- Modify: `src/components/landing/HeroSection.tsx` (reemplazo completo)

- [ ] **Step 1: Reemplazar `HeroSection.tsx` con la versión elevada**

Cambios respecto a la actual: fondo con gradiente cálido sutil, CTA primario en naranja de marca (antes negro), franja de social proof, y `Reveal` en copy y screenshot.

```tsx
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from './Reveal';

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://app.cakely.es';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Fondo: gradiente cálido sutil sobre el background base */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#FAFAF8]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[480px] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(232,148,58,0.10),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center">
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
              className="bg-[#E8943A] text-white hover:bg-[#C97A2E] px-6 py-3 text-base rounded-lg font-medium transition-colors shadow-sm"
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
            14 días gratis &middot; Cancela cuando quieras
          </p>
        </Reveal>

        {/* Social proof */}
        <Reveal delay={150}>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 mt-12 text-sm text-[#78716C]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#C9A96E]" aria-hidden>★★★★★</span>
              Pastelerías y panaderías de toda España
            </span>
            <span className="hidden md:inline text-[#E7E5E4]" aria-hidden>·</span>
            <span>Sin instalaciones: funciona en el navegador y en el móvil</span>
          </div>
        </Reveal>

        {/* Product screenshot in browser frame */}
        <Reveal delay={250} className="mt-16 max-w-4xl mx-auto">
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
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar visualmente**

Run: `pnpm dev` y abrir `http://localhost:3001` — el hero debe mostrar CTA naranja, gradiente sutil arriba, social proof bajo los CTAs, y fade-in al cargar/scroll.

- [ ] **Step 3: Verificar build**

Run: `pnpm build 2>&1 | tail -5`
Expected: build sin errores.

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/HeroSection.tsx
git commit -m "feat(landing): hero elevado — CTA naranja de marca, gradiente cálido, social proof, reveal"
```

---

### Task 3: Pulido de Features, Testimonials y CTA

**Files:**
- Modify: `src/components/landing/FeaturesSection.tsx` (reemplazo completo)
- Modify: `src/components/landing/TestimonialsSection.tsx` (añadir estrellas gold)
- Modify: `src/components/landing/CtaSection.tsx` (copy "sin tarjeta" → coherente con el hero)

- [ ] **Step 1: FeaturesSection con cards hover + Reveal**

```tsx
import { FEATURES } from '@/lib/landing-data';
import { Reveal } from './Reveal';

export function FeaturesSection() {
  return (
    <section id="funciones" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] tracking-tight">
            Todo lo que necesitas para tu obrador
          </h2>
          <p className="text-[#78716C] mt-3 text-lg max-w-lg mx-auto">
            Cada herramienta resuelve un problema real de tu día a día.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {FEATURES.map((feature, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="p-6 rounded-xl border border-transparent hover:border-[#E7E5E4] hover:bg-[#FAFAF8] hover:shadow-sm transition-all h-full">
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
  );
}
```

- [ ] **Step 2: TestimonialsSection — estrellas gold**

Leer el archivo actual (`src/components/landing/TestimonialsSection.tsx`, 36 líneas) y, manteniendo su estructura y los datos de `TESTIMONIALS`, añadir sobre la cita de cada testimonio una fila de estrellas:

```tsx
<div className="text-[#C9A96E] text-sm tracking-wider" aria-hidden>
  ★★★★★
</div>
```

y envolver cada card en `<Reveal delay={i * 80}>` (importando `import { Reveal } from './Reveal';`). No cambiar el copy de los testimonios.

- [ ] **Step 3: CtaSection — copy coherente**

En `src/components/landing/CtaSection.tsx`, reemplazar la línea:

```tsx
          Empieza gratis. Sin tarjeta, sin compromisos.
```

por:

```tsx
          Pruébalo gratis 14 días. Cancela cuando quieras.
```

(El hero ya retiró la promesa "sin tarjeta" en `b7cc2cd`; esta sección quedó desincronizada.)

- [ ] **Step 4: Verificar build + visual**

Run: `pnpm build 2>&1 | tail -5` → sin errores. En `pnpm dev`: cards de features con hover, testimonios con estrellas, CTA final sin "sin tarjeta".

- [ ] **Step 5: Commit**

```bash
git add src/components/landing/FeaturesSection.tsx src/components/landing/TestimonialsSection.tsx src/components/landing/CtaSection.tsx
git commit -m "feat(landing): pulido de features/testimonios/CTA — hover cards, estrellas gold, copy coherente"
```

---

### Task 4: Configuración de verticales (copy completo)

**Files:**
- Create: `src/lib/verticals.ts`

- [ ] **Step 1: Crear `src/lib/verticals.ts`**

Sigue el patrón de `landing-data.ts` (datos centralizados, iconos lucide-react). Contiene el tipo y las dos configuraciones completas:

```ts
import {
  CalendarDays,
  ClipboardList,
  Users,
  ChefHat,
  Receipt,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

export interface VerticalFaq {
  question: string;
  answer: string;
}

export interface VerticalPain {
  title: string;
  description: string;
}

export interface VerticalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface VerticalConfig {
  slug: string;
  /** Nombre del vertical en plural y minúsculas: "panaderías" */
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroAccent: string;
  heroSubtitle: string;
  painsTitle: string;
  pains: VerticalPain[];
  featuresTitle: string;
  features: VerticalFeature[];
  faqs: VerticalFaq[];
  ctaTitle: string;
}

export const PANADERIAS: VerticalConfig = {
  slug: 'software-para-panaderias',
  name: 'panaderías',
  metaTitle: 'Software para panaderías — gestión de pedidos y encargos | Cakely',
  metaDescription:
    'Gestiona los encargos, clientes y producción de tu panadería sin libretas ni hojas de cálculo. Cakely organiza tu obrador: pedidos, recetas, facturas y cobros en un solo lugar.',
  heroTitle: 'El software de gestión para panaderías',
  heroAccent: 'que entiende tu obrador',
  heroSubtitle:
    'Encargos, clientes, producción y cobros. Deja la libreta: organiza tu panadería desde el móvil o el ordenador.',
  painsTitle: 'Te suena, ¿verdad?',
  pains: [
    {
      title: 'Encargos apuntados en una libreta',
      description:
        'Pedidos que entran por WhatsApp, por teléfono o en el mostrador y acaban en papeles que se pierden. Con Cakely cada encargo queda registrado con su fecha de recogida.',
    },
    {
      title: 'La producción del fin de semana, de memoria',
      description:
        'El calendario de Cakely te dice qué tienes que producir cada día: cuántos encargos, de qué y para quién. Sin sorpresas el sábado por la mañana.',
    },
    {
      title: 'Cobros pendientes difíciles de seguir',
      description:
        'Señales, pagos a cuenta y "ya te lo pago al recoger". Cakely lleva el estado de cobro de cada encargo para que no se te escape ninguno.',
    },
    {
      title: 'Los costes, en la cabeza',
      description:
        'Recetas con escandallo: ingredientes, cantidades y coste real por pieza. Sabrás qué margen deja cada producto antes de ponerle precio.',
    },
  ],
  featuresTitle: 'Pensado para el día a día de una panadería',
  features: [
    {
      icon: ClipboardList,
      title: 'Encargos con fecha de recogida',
      description:
        'Registra cada encargo en segundos: producto, cantidad, cliente y cuándo lo recogen. Estados claros: pendiente, preparando, listo, entregado.',
    },
    {
      icon: CalendarDays,
      title: 'Calendario de producción',
      description:
        'Vista semanal y mensual de todo lo que sale del obrador. Planifica la producción según los encargos reales.',
    },
    {
      icon: Users,
      title: 'Clientes con historial',
      description:
        'Quién encarga, qué encarga y cada cuánto. El cliente del roscón de todos los años, localizado en un clic.',
    },
    {
      icon: ChefHat,
      title: 'Recetas y escandallos',
      description:
        'Coste por barra, por pieza o por encargo. Precios de ingredientes actualizados y margen calculado automáticamente.',
    },
    {
      icon: Receipt,
      title: 'Facturas y cobros',
      description:
        'Factura los encargos que lo necesiten y controla pagos parciales y señales sin hojas de cálculo.',
    },
    {
      icon: BarChart3,
      title: 'Estadísticas del negocio',
      description:
        'Qué se vende más, qué meses son fuertes y cuánto factura tu panadería. Decisiones con datos, no con sensaciones.',
    },
  ],
  faqs: [
    {
      question: '¿Sirve Cakely para una panadería con obrador propio?',
      answer:
        'Sí. Cakely está pensado para negocios artesanales que trabajan con encargos: panaderías, pastelerías y obradores. Gestiona los encargos con fecha de recogida, la producción diaria y los cobros, que es donde una panadería pierde más tiempo.',
    },
    {
      question: '¿Puedo controlar los encargos del fin de semana?',
      answer:
        'Sí. El calendario te muestra todos los encargos por día de recogida, así sabes exactamente qué producir cada mañana. También puedes filtrar por estado: pendiente, preparando, listo o entregado.',
    },
    {
      question: '¿Necesito instalar algo?',
      answer:
        'No. Cakely funciona en el navegador y tiene app móvil. Puedes apuntar un encargo desde el mostrador con el móvil y verlo en el ordenador del obrador.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer:
        'Hay un plan gratuito para empezar y planes de pago desde menos de lo que cuesta una barra de pan al día. Puedes probar cualquier plan gratis durante 14 días.',
    },
    {
      question: '¿Pueden usarlo varias personas del equipo?',
      answer:
        'Sí. Puedes invitar a tu equipo con distintos permisos: quien atiende el mostrador registra encargos y quien lleva el obrador ve la producción del día.',
    },
  ],
  ctaTitle: 'Tu panadería merece estar organizada',
};

export const PASTELERIAS: VerticalConfig = {
  slug: 'software-para-pastelerias',
  name: 'pastelerías',
  metaTitle: 'Software para pastelerías — pedidos, presupuestos y recetas | Cakely',
  metaDescription:
    'El programa de gestión para pastelerías artesanales: pedidos de tartas personalizadas, presupuestos, recetas con escandallo, clientes y facturas. Pruébalo gratis 14 días.',
  heroTitle: 'El software de gestión para pastelerías',
  heroAccent: 'hecho para tartas con nombre y apellido',
  heroSubtitle:
    'Pedidos personalizados, presupuestos, recetas y clientes. Todo lo que tu pastelería necesita, sin hojas de cálculo.',
  painsTitle: 'Si tienes una pastelería, esto te pasa',
  pains: [
    {
      title: 'Cada tarta es un mundo (y un hilo de WhatsApp)',
      description:
        'Sabores, pisos, alergias, dedicatoria, foto de referencia... Cakely guarda cada detalle del pedido con sus imágenes para que nada se pierda entre mensajes.',
    },
    {
      title: 'Presupuestos a ojo',
      description:
        'La calculadora de presupuestos usa tus recetas y costes reales: ingredientes, horas de trabajo y margen. Envía el presupuesto al cliente con un enlace y conviértelo en pedido al aceptarlo.',
    },
    {
      title: 'Fechas de entrega que se acumulan',
      description:
        'El calendario te enseña la semana de un vistazo y el tablero kanban el estado de cada pedido: pendiente, preparando, listo o entregado.',
    },
    {
      title: 'No saber si una tarta te deja margen',
      description:
        'Recetas con escandallo completo: coste de ingredientes y de tu tiempo. Pon precios con datos, no con intuición.',
    },
  ],
  featuresTitle: 'Pensado para pastelería artesanal',
  features: [
    {
      icon: ClipboardList,
      title: 'Pedidos personalizados',
      description:
        'Cada pedido con su personalización, imágenes de referencia, fecha de entrega y estado. Historial completo por cliente.',
    },
    {
      icon: Receipt,
      title: 'Presupuestos que se aceptan solos',
      description:
        'Genera presupuestos desde tus recetas, envíalos por enlace y conviértelos en pedido cuando el cliente acepte.',
    },
    {
      icon: ChefHat,
      title: 'Recetas con escandallo',
      description:
        'Ingredientes, cantidades, horas de trabajo y coste total. Sabrás el margen de cada tarta antes de hornearla.',
    },
    {
      icon: CalendarDays,
      title: 'Calendario de entregas',
      description:
        'Las entregas de la semana y del mes de un vistazo, con integración con Google Calendar.',
    },
    {
      icon: Users,
      title: 'Clientes que repiten',
      description:
        'Historial de pedidos, preferencias y datos de contacto protegidos. El cumpleaños del año pasado, a un clic.',
    },
    {
      icon: BarChart3,
      title: 'Estadísticas del negocio',
      description:
        'Ingresos, productos más vendidos y métodos de pago. Tu pastelería en números claros.',
    },
  ],
  faqs: [
    {
      question: '¿Cakely sirve para pedidos de tartas personalizadas?',
      answer:
        'Sí, es su especialidad. Cada pedido guarda la personalización completa (sabores, tamaños, dedicatoria, alergias) e imágenes de referencia, con fecha de entrega y estado de pago.',
    },
    {
      question: '¿Puedo hacer presupuestos con mis costes reales?',
      answer:
        'Sí. Defines tus recetas con ingredientes y horas de trabajo, y la calculadora genera presupuestos con el coste y margen reales. El cliente lo recibe por enlace y puede aceptarlo online.',
    },
    {
      question: '¿Necesito instalar algo?',
      answer:
        'No. Cakely funciona en el navegador y tiene app móvil para iOS y Android. Tus datos están sincronizados en todos los dispositivos.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer:
        'Hay un plan gratuito para empezar y planes de pago según el tamaño de tu negocio. Puedes probar cualquier plan gratis durante 14 días.',
    },
    {
      question: '¿Qué pasa con los datos de mis clientes?',
      answer:
        'Los datos personales de tus clientes se guardan cifrados y cumplimos el RGPD. Solo tú y tu equipo tenéis acceso.',
    },
  ],
  ctaTitle: 'Tu pastelería merece estar organizada',
};

export const VERTICALS: VerticalConfig[] = [PASTELERIAS, PANADERIAS];
```

- [ ] **Step 2: Verificar build**

Run: `pnpm build 2>&1 | tail -5`
Expected: build sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/lib/verticals.ts
git commit -m "feat(seo): configuración de verticales pastelerías/panaderías con copy completo"
```

---

### Task 5: Helpers de JSON-LD

**Files:**
- Create: `src/lib/structured-data.ts`

- [ ] **Step 1: Crear `src/lib/structured-data.ts`**

```ts
import type { VerticalFaq } from './verticals';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cakely',
    url: baseUrl,
    logo: `${baseUrl}/img/logo.webp`,
  };
}

export function softwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Cakely',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description:
      'Software de gestión de pedidos, clientes, recetas y facturas para pastelerías y panaderías artesanales.',
    url: baseUrl,
    inLanguage: 'es',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Plan gratuito disponible; prueba de 14 días en planes de pago.',
    },
  };
}

export function faqPageJsonLd(faqs: VerticalFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}

/** Serializa JSON-LD para dangerouslySetInnerHTML escapando `<` (XSS). */
export function jsonLdScriptProps(data: object) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    },
  } as const;
}
```

- [ ] **Step 2: Verificar build**

Run: `pnpm build 2>&1 | tail -5`
Expected: build sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/lib/structured-data.ts
git commit -m "feat(seo): helpers JSON-LD — Organization, SoftwareApplication, FAQPage, Breadcrumb"
```

---

### Task 6: Plantilla `VerticalLanding`

**Files:**
- Create: `src/components/landing/VerticalLanding.tsx`

- [ ] **Step 1: Crear la plantilla**

Reutiliza `Header`, `PricingSection`, `Footer` y `Reveal` existentes; las secciones específicas del vertical (hero, dolores, features, FAQ, CTA) se renderizan desde la config. La FAQ usa el mismo `Accordion` de `@/components/ui/accordion` que `FaqSection`.

```tsx
import Link from 'next/link';
import Image from 'next/image';
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
        {/* Hero del vertical */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#FAFAF8]" />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[480px] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(232,148,58,0.10),transparent_60%)]"
          />
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal className="text-center">
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
                <Link
                  href={`${appDomain}/empezar-prueba`}
                  className="bg-[#E8943A] text-white hover:bg-[#C97A2E] px-6 py-3 text-base rounded-lg font-medium transition-colors shadow-sm"
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
              <p className="text-sm text-[#A8A29E] mt-6">
                14 días gratis &middot; Cancela cuando quieras
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-16 max-w-4xl mx-auto">
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
            </Reveal>
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
              <Link
                href={`${appDomain}/empezar-prueba`}
                className="inline-block bg-white text-[#1C1917] hover:bg-white/90 px-6 py-3 rounded-lg font-medium text-base"
              >
                Empezar ahora
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

> Nota: `FaqSection` de la home usa `Accordion` con `"use client"` en su propio archivo; aquí `Accordion` ya es client component (lo marca `accordion.tsx` de shadcn/ui), así que `VerticalLanding` puede seguir siendo server component.

- [ ] **Step 2: Verificar build**

Run: `pnpm build 2>&1 | tail -5`
Expected: build sin errores (la plantilla aún no tiene página que la use).

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/VerticalLanding.tsx
git commit -m "feat(seo): plantilla VerticalLanding parametrizada por configuración"
```

---

### Task 7: Páginas verticales con metadata + JSON-LD

**Files:**
- Create: `src/app/software-para-pastelerias/page.tsx`
- Create: `src/app/software-para-panaderias/page.tsx`

- [ ] **Step 1: Crear `src/app/software-para-panaderias/page.tsx`**

```tsx
import type { Metadata } from 'next';
import { VerticalLanding } from '@/components/landing/VerticalLanding';
import { PANADERIAS } from '@/lib/verticals';
import {
  faqPageJsonLd,
  breadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export const metadata: Metadata = {
  title: PANADERIAS.metaTitle,
  description: PANADERIAS.metaDescription,
  alternates: { canonical: `${baseUrl}/${PANADERIAS.slug}` },
  openGraph: {
    title: PANADERIAS.metaTitle,
    description: PANADERIAS.metaDescription,
    url: `${baseUrl}/${PANADERIAS.slug}`,
    type: 'website',
  },
};

export default function SoftwareParaPanaderiasPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd(PANADERIAS.faqs))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Software para panaderías', path: `/${PANADERIAS.slug}` },
          ])
        )}
      />
      <VerticalLanding vertical={PANADERIAS} />
    </>
  );
}
```

- [ ] **Step 2: Crear `src/app/software-para-pastelerias/page.tsx`**

Idéntica estructura con la otra config (se repite completo a propósito — el engineer puede leer tasks fuera de orden):

```tsx
import type { Metadata } from 'next';
import { VerticalLanding } from '@/components/landing/VerticalLanding';
import { PASTELERIAS } from '@/lib/verticals';
import {
  faqPageJsonLd,
  breadcrumbJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

export const metadata: Metadata = {
  title: PASTELERIAS.metaTitle,
  description: PASTELERIAS.metaDescription,
  alternates: { canonical: `${baseUrl}/${PASTELERIAS.slug}` },
  openGraph: {
    title: PASTELERIAS.metaTitle,
    description: PASTELERIAS.metaDescription,
    url: `${baseUrl}/${PASTELERIAS.slug}`,
    type: 'website',
  },
};

export default function SoftwareParaPasteleriasPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd(PASTELERIAS.faqs))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Software para pastelerías', path: `/${PASTELERIAS.slug}` },
          ])
        )}
      />
      <VerticalLanding vertical={PASTELERIAS} />
    </>
  );
}
```

- [ ] **Step 3: Verificar en dev**

Run: `pnpm dev` y abrir `http://localhost:3001/software-para-panaderias` y `http://localhost:3001/software-para-pastelerias`.
Expected: ambas renderizan hero + dolores + features + pricing + FAQ + CTA. Ver el HTML fuente (`view-source:`) y comprobar que los dos `<script type="application/ld+json">` están presentes.

- [ ] **Step 4: Verificar build**

Run: `pnpm build 2>&1 | tail -8`
Expected: build sin errores; ambas rutas listadas como estáticas (`○`).

- [ ] **Step 5: Commit**

```bash
git add src/app/software-para-pastelerias src/app/software-para-panaderias
git commit -m "feat(seo): páginas verticales /software-para-pastelerias y /software-para-panaderias"
```

---

### Task 8: JSON-LD y keywords de panadería en la home

**Files:**
- Modify: `src/app/layout.tsx` (keywords + title)
- Modify: `src/app/page.tsx` (scripts JSON-LD)

- [ ] **Step 1: Ampliar keywords y title en `src/app/layout.tsx`**

En el objeto `metadata`, actualizar `title` y añadir keywords de panadería al array existente (líneas 24-37 aprox.). El title pasa a cubrir ambos verticales sin perder "pastelerías" como primera mención:

```ts
  title: "Cakely – Gestión de pedidos para pastelerías y panaderías",
```

Y dentro del array `keywords`, añadir al final:

```ts
    "gestión pedidos panadería",
    "software para panaderías",
    "programa para panaderías",
    "gestión encargos panadería",
```

Actualizar igualmente los `title`/`description` de `openGraph` y `twitter` para mencionar "pastelerías y panaderías" (mismo patrón que el title principal).

- [ ] **Step 2: JSON-LD en `src/app/page.tsx`**

```tsx
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { PlanComparisonTable } from '@/components/landing/PlanComparisonTable';
import { FaqSection } from '@/components/landing/FaqSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { Footer } from '@/components/landing/Footer';
import { VerticalsTeaser } from '@/components/landing/VerticalsTeaser';
import {
  organizationJsonLd,
  softwareApplicationJsonLd,
  jsonLdScriptProps,
} from '@/lib/structured-data';

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <script {...jsonLdScriptProps(organizationJsonLd())} />
      <script {...jsonLdScriptProps(softwareApplicationJsonLd())} />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <VerticalsTeaser />
        <TestimonialsSection />
        <PricingSection />
        <PlanComparisonTable />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
```

(`VerticalsTeaser` se crea en el siguiente step.)

- [ ] **Step 3: Crear `src/components/landing/VerticalsTeaser.tsx`**

Bloque de presentación de verticales en la home con enlaces internos (clave para el SEO de las páginas nuevas):

```tsx
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
```

- [ ] **Step 4: Verificar build + visual**

Run: `pnpm build 2>&1 | tail -5` → sin errores. En dev: la home muestra el bloque de verticales entre features y testimonios, y los enlaces llevan a las páginas nuevas.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx src/components/landing/VerticalsTeaser.tsx
git commit -m "feat(seo): home — JSON-LD, keywords de panadería y bloque de verticales con enlaces internos"
```

---

### Task 9: Enlaces internos en Footer y sitemap

**Files:**
- Modify: `src/lib/landing-data.ts` (FOOTER_LINKS.producto, línea ~173)
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Añadir verticales a `FOOTER_LINKS.producto`**

En `src/lib/landing-data.ts`, dentro de `FOOTER_LINKS.producto`, añadir al final del array:

```ts
  { href: '/software-para-pastelerias', label: 'Software para pastelerías' },
  { href: '/software-para-panaderias', label: 'Software para panaderías' },
```

(Respetar la forma exacta de los objetos existentes del array — comprobar si usan `href/label` u otra forma antes de editar.)

- [ ] **Step 2: Añadir las rutas al sitemap**

En `src/app/sitemap.ts`, dentro del array `staticPages`, añadir tras la entrada de `baseUrl` (la home):

```ts
    {
      url: `${baseUrl}/software-para-pastelerias`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software-para-panaderias`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
```

- [ ] **Step 3: Verificar build y sitemap**

Run: `pnpm build 2>&1 | tail -5` → sin errores.
Run en dev: `curl -s http://localhost:3001/sitemap.xml | grep software-para` → deben aparecer las dos URLs.

- [ ] **Step 4: Commit**

```bash
git add src/lib/landing-data.ts src/app/sitemap.ts
git commit -m "feat(seo): verticales en footer y sitemap"
```

---

### Task 10: Eventos de analytics en CTAs

**Files:**
- Create: `src/components/landing/TrackedCtaLink.tsx`
- Modify: `src/components/landing/HeroSection.tsx` (CTA principal)
- Modify: `src/components/landing/VerticalLanding.tsx` (CTAs de hero y final)
- Modify: `src/components/landing/CtaSection.tsx` (CTA final home)

- [ ] **Step 1: Crear `TrackedCtaLink`**

Client component que dispara un evento `Lead` de Meta Pixel con el nombre de la página de entrada antes de navegar. El Pixel ya se inicializa en `src/components/analytics/MetaPixel.tsx` (window.fbq).

```tsx
'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Link de CTA que registra un evento Lead en Meta Pixel con la página
 * de origen, para poder medir conversión por página de entrada.
 */
export function TrackedCtaLink({
  href,
  contentName,
  className,
  children,
}: {
  href: string;
  contentName: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        window.fbq?.('track', 'Lead', { content_name: contentName });
      }}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Usarlo en los CTAs**

En `HeroSection.tsx`, reemplazar el `<Link>` del CTA principal por:

```tsx
<TrackedCtaLink
  href={`${appDomain}/empezar-prueba`}
  contentName="home-hero"
  className="bg-[#E8943A] text-white hover:bg-[#C97A2E] px-6 py-3 text-base rounded-lg font-medium transition-colors shadow-sm"
>
  Prueba gratis 14 días
</TrackedCtaLink>
```

(con `import { TrackedCtaLink } from './TrackedCtaLink';`).

En `VerticalLanding.tsx`, mismo reemplazo en los dos CTAs con `contentName={`${vertical.slug}-hero`}` y `contentName={`${vertical.slug}-final`}` respectivamente.

En `CtaSection.tsx`, reemplazar el `<Link>` por `TrackedCtaLink` con `contentName="home-final"` (mismas clases).

- [ ] **Step 3: Verificar build**

Run: `pnpm build 2>&1 | tail -5`
Expected: sin errores. En dev con la consola abierta: clic en un CTA no debe lanzar errores aunque `fbq` no esté cargado (optional chaining).

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/TrackedCtaLink.tsx src/components/landing/HeroSection.tsx src/components/landing/VerticalLanding.tsx src/components/landing/CtaSection.tsx
git commit -m "feat(analytics): evento Lead por CTA con página de origen"
```

---

### Task 11: Verificación final

**Files:** ninguno (solo verificación)

- [ ] **Step 1: Build de producción completo**

Run: `pnpm build`
Expected: sin errores ni warnings nuevos; `/`, `/software-para-pastelerias` y `/software-para-panaderias` en el listado de rutas.

- [ ] **Step 2: Revisión responsive**

En `pnpm dev`, revisar home y los dos verticales en viewport móvil (375px), tablet (768px) y desktop (1280px). Comprobar: hero legible, grids colapsan a 1 columna en móvil, CTAs accesibles con el pulgar.

- [ ] **Step 3: Validar JSON-LD (manual, post-deploy o con HTML local)**

Copiar el HTML de `view-source:http://localhost:3001/software-para-panaderias` en https://search.google.com/test/rich-results (o https://validator.schema.org/ pegando los bloques JSON-LD).
Expected: FAQPage y BreadcrumbList válidos sin errores.

- [ ] **Step 4: Lighthouse**

Run (con `pnpm build && pnpm start` en otro terminal):
`npx lighthouse http://localhost:3001/software-para-panaderias --only-categories=performance,seo --chrome-flags="--headless" --quiet | grep -A 2 "Performance\|SEO"`
Expected: Performance ≥ 90, SEO ≥ 90. Repetir para `/` y `/software-para-pastelerias`.

- [ ] **Step 5: Checklist post-deploy (documentar, no ejecutar aquí)**

Añadir al final del PR/commit message un recordatorio:
- Enviar el sitemap actualizado en Google Search Console.
- Solicitar indexación de las 2 URLs nuevas en GSC.
- Verificar rich results de FAQ en GSC a los ~7 días.

---

## Self-review (hecho al escribir el plan)

- **Cobertura del spec:** elevación visual (Tasks 1-3), plantilla + verticales (Tasks 4-7), JSON-LD home (Task 8), enlazado interno + sitemap (Tasks 8-9), analytics (Task 10), criterios de verificación (Task 11). El blog/fase 2 y hreflang quedan fuera, como dice el spec.
- **Tipos consistentes:** `VerticalConfig`/`VerticalFaq` definidos en Task 4 y consumidos en Tasks 5-8 con los mismos nombres.
- **Sin placeholders:** todo el copy de verticales está escrito; los dos archivos de página se repiten completos.
- **Nota para el ejecutor:** `TestimonialsSection.tsx` y `landing-data.ts` (FOOTER_LINKS) se modifican leyendo primero su contenido actual — los steps indican el cambio exacto a insertar pero la estructura circundante debe respetarse tal cual esté.
