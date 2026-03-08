"use client";

import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  Users,
  Calculator,
  CalendarCheck,
  BarChartBig,
  UsersRound,
  ArrowRight,
  Quote,
  Star,
  Heart,
  ChefHat,
  Palette,
  FileText,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderLoginButton from "./HeaderLoginButton";
import { MobileMenu } from "@/components/MobileMenu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useUserCountry } from "@/hooks/use-user-country";
import { getRegionalPrices } from "@/lib/pricing";

const appDomain =
  process.env.NEXT_PUBLIC_APP_DOMAIN || "https://app.cakely.es";

const faqs = [
  {
    question: "¿Qué es Cakely y para quién está pensado?",
    answer:
      "Cakely es una herramienta de gestión pensada con cariño para pastelerías artesanales. Te ayuda a organizar pedidos, clientes y recetas desde un solo lugar, de forma sencilla y cercana.",
  },
  {
    question: "¿Puedo empezar a usar Cakely gratis?",
    answer:
      "¡Por supuesto! Nuestro plan gratuito te permite gestionar hasta 10 pedidos al mes, 20 clientes y 5 recetas. Perfecto para empezar sin compromisos y descubrir cómo Cakely puede ayudarte.",
  },
  {
    question: "¿Cuántos pedidos y clientes puedo gestionar en el plan Básico?",
    answer:
      "El plan Básico te permite gestionar hasta 50 pedidos mensuales y un total acumulado de 100 clientes. Ideal para pastelerías que están creciendo y necesitan más espacio.",
  },
  {
    question: "¿Qué ocurre si supero el límite de clientes en el plan Básico?",
    answer:
      "Tus datos siempre están seguros. Simplemente necesitarás pasar al plan Pro para seguir añadiendo nuevos clientes. No perderás ninguna información.",
  },
  {
    question: "¿Puedo usar Cakely desde el móvil?",
    answer:
      "Sí, Cakely está optimizado para usarse desde cualquier dispositivo: móvil, tablet o PC. Tu obrador, siempre en tu bolsillo.",
  },
  {
    question: "¿Cómo me ayuda Cakely a ahorrar tiempo?",
    answer:
      "Centraliza todo lo que hoy tienes disperso entre WhatsApp, notas y hojas de cálculo. Seguimiento de pedidos, historial de clientes, recetas y presupuestos, todo en un mismo lugar.",
  },
  {
    question: "¿Qué incluye el plan Pro?",
    answer:
      "Además de clientes y pedidos ilimitados, tendrás generador de facturas con envío por email, gestión de sucursales, estadísticas avanzadas, generador de presupuestos, insights de fidelidad y soporte prioritario. Todo lo que necesitas para crecer con confianza.",
  },
];

const testimonials = [
  {
    name: "María García",
    business: "La Dulce María, Madrid",
    text: "Desde que uso Cakely, mis mañanas son mucho más tranquilas. Ya no tengo que revisar cinco sitios distintos para saber qué pedidos tengo hoy. Todo está ahí, claro y organizado.",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    business: "Bake & Love, Valencia",
    text: "Lo que más me gusta es que siento que está hecho por alguien que entiende mi trabajo. No es un software frío, es una herramienta que habla mi idioma.",
    rating: 5,
  },
  {
    name: "Carmen Ruiz",
    business: "Dulces de Carmen, Sevilla",
    text: "La calculadora de costes me abrió los ojos. Descubrí que algunos de mis pasteles más populares apenas me dejaban margen. Ahora fijo precios con confianza.",
    rating: 5,
  },
];

export default function Index() {
  const { region } = useUserCountry();
  const prices = getRegionalPrices(region);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F0]">
      {/* ─── Header ─── */}
      <header className="fixed top-0 w-full z-50 bg-[#FFF8F0]/90 backdrop-blur-md border-b border-[#E8DDD0]/60">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/logo.webp"
              alt="Logo Cakely"
              width={52}
              height={52}
            />
          </Link>
          <nav className="flex items-center gap-1">
            {[
              { href: "#servicios", label: "Servicios" },
              { href: "#como-funciona", label: "Cómo funciona" },
              { href: "#precios", label: "Precios" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden md:inline-block px-4 py-2 text-[#5C3D2E] hover:text-[#8B9E7E] transition-colors font-medium text-[15px] rounded-full hover:bg-[#8B9E7E]/8"
              >
                {link.label}
              </Link>
            ))}
            <div className="hidden md:block ml-3">
              <HeaderLoginButton />
            </div>
            <MobileMenu />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* ═══════════════════════════════════════════
            HERO SECTION
            Emotional, warm, inviting
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0] via-[#FAF0E6] to-[#F2D1D1]/20"></div>

          {/* Organic decorative blobs */}
          <div className="absolute top-32 -left-16 w-64 h-64 bg-[#F2D1D1]/30 blob-1 animate-float-slow"></div>
          <div className="absolute top-48 -right-20 w-80 h-80 bg-[#8B9E7E]/10 blob-2 animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#C9A96E]/12 blob-3 animate-float-slow"></div>

          {/* Subtle texture */}
          <div className="absolute inset-0 texture-grain"></div>

          <div className="max-w-6xl mx-auto px-5 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Copy */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#FFFDF9] border border-[#E8DDD0] text-[#8B9E7E] px-5 py-2.5 rounded-full text-sm font-medium shadow-warm">
                  <Heart className="w-4 h-4 fill-[#D4A0A0] text-[#D4A0A0]" />
                  Hecho para pasteleros de verdad
                </div>

                <h1 className="font-serif text-[2.75rem] md:text-6xl lg:text-[4rem] leading-[1.1] tracking-tight">
                  <span className="text-[#3D2519]">Tu pastelería,</span>
                  <br />
                  <span className="text-[#8B9E7E]">organizada</span>
                  <br />
                  <span className="text-[#3D2519] italic">con cariño</span>
                </h1>

                <p className="text-lg md:text-xl text-[#5C3D2E]/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Dedica más tiempo a crear y menos a gestionar. Cakely reúne
                  tus pedidos, clientes y recetas en un solo lugar, para que
                  puedas enfocarte en lo que amas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-8 py-6 text-base font-semibold rounded-full shadow-warm-lg transition-all duration-300 hover:shadow-warm-xl"
                    asChild
                  >
                    <Link href={`${appDomain}/empezar-prueba`}>
                      Prueba Cakely gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#E8DDD0] text-[#5C3D2E] hover:bg-[#FAF0E6] px-8 py-6 text-base font-medium rounded-full"
                    asChild
                  >
                    <Link href="#como-funciona">Ver cómo funciona</Link>
                  </Button>
                </div>

                <p className="text-sm text-[#A89888] font-medium">
                  Sin tarjeta de crédito · Configuración en 60 segundos · Datos
                  seguros en Europa
                </p>
              </div>

              {/* Right: Hero visual */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Organic frame around hero image */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#F2D1D1]/40 via-[#FAF0E6] to-[#8B9E7E]/20 rounded-[2rem] rotate-2"></div>
                  <div className="relative bg-[#FFFDF9] rounded-[1.5rem] shadow-warm-xl p-3 border border-[#E8DDD0]/50">
                    {/*
                      TODO: Reemplazar con fotografía real de productos
                      (luz natural, composición cercana, pasteles artesanales).
                      Ejemplo: mesa de trabajo con tartas decoradas,
                      ingredientes naturales y luz de ventana.
                    */}
                    <Image
                      src="/img/hero.png"
                      alt="Panel de gestión de Cakely para tu pastelería"
                      className="rounded-[1rem] w-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F2D1D1]/60 blob-1 animate-float flex items-center justify-center">
                    <ChefHat className="w-7 h-7 text-[#D4A0A0]" />
                  </div>
                  <div className="absolute -bottom-3 -left-5 w-14 h-14 bg-[#8B9E7E]/20 blob-2 animate-float-slow flex items-center justify-center">
                    <Palette className="w-6 h-6 text-[#8B9E7E]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            EMPATHY / PROBLEM SECTION
            Warm, understanding, not aggressive
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 bg-[#FFFDF9]">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center mb-16">
              <p className="text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4">
                Te entendemos
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6">
                Sabemos cómo se siente
              </h2>
              <p className="text-lg text-[#5C3D2E]/70 max-w-2xl mx-auto leading-relaxed">
                Gestionar una pastelería artesanal es apasionante, pero también
                puede ser agotador cuando todo está disperso.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[
                {
                  text: "Pedidos repartidos entre WhatsApp, notas y papeles que se pierden",
                  bg: "bg-[#FFF8F0]",
                  border: "border-[#F2D1D1]/60",
                },
                {
                  text: "No saber si realmente estás ganando dinero con cada receta",
                  bg: "bg-[#FAF0E6]",
                  border: "border-[#C9A96E]/30",
                },
                {
                  text: "Un calendario lleno de tachones y fechas que se solapan",
                  bg: "bg-[#FFF8F0]",
                  border: "border-[#E8DDD0]",
                },
                {
                  text: "La sensación de que algo se te va a olvidar en cualquier momento",
                  bg: "bg-[#FAF0E6]",
                  border: "border-[#D4A0A0]/30",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.bg} ${item.border} border rounded-2xl p-6 card-organic`}
                >
                  <p className="text-[#5C3D2E] leading-relaxed text-[15px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <div className="inline-block bg-[#8B9E7E]/10 border border-[#8B9E7E]/20 rounded-2xl px-8 py-5">
                <p className="text-[#5C3D2E] text-lg font-serif italic">
                  &ldquo;Si esto te suena, Cakely se hizo pensando en ti.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SERVICES / FEATURES SECTION
            Organic cards, warm feel
        ═══════════════════════════════════════════ */}
        <section id="servicios" className="relative py-20 md:py-28 bg-[#FFF8F0]">
          {/* Organic background decoration */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F2D1D1]/15 blob-2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#8B9E7E]/8 blob-1 translate-y-1/3"></div>

          <div className="max-w-6xl mx-auto px-5 relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#8B9E7E] font-medium text-sm uppercase tracking-widest mb-4">
                Qué te ofrece Cakely
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6">
                Todo lo que necesitas,
                <br />
                <span className="text-[#8B9E7E]">nada que te sobre</span>
              </h2>
              <p className="text-lg text-[#5C3D2E]/70 max-w-2xl mx-auto">
                Cada herramienta pensada para resolver un problema real de tu
                día a día
              </p>
            </div>

            {/* Feature cards with organic layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  title: "Gestión de pedidos",
                  description:
                    "Un panel claro donde ves todos tus pedidos, su estado y sus fechas de entrega. Sin sorpresas, sin olvidos.",
                  accent: "#8B9E7E",
                  bgAccent: "#8B9E7E",
                },
                {
                  icon: Calculator,
                  title: "Costes y márgenes",
                  description:
                    "Define ingredientes, crea recetas y conoce al céntimo cuánto te cuesta cada creación. Fija precios con confianza.",
                  accent: "#C9A96E",
                  bgAccent: "#C9A96E",
                },
                {
                  icon: Users,
                  title: "Tus clientes, cerca",
                  description:
                    "Historial de pedidos, preferencias, alergias y notas especiales. Cada cliente se siente único porque recuerdas cada detalle.",
                  accent: "#D4A0A0",
                  bgAccent: "#D4A0A0",
                },
                {
                  icon: UsersRound,
                  title: "Equipo coordinado",
                  description:
                    "Invita a tu equipo, asigna responsabilidades y trabaja con la tranquilidad de saber que todos están alineados.",
                  accent: "#8B9E7E",
                  bgAccent: "#8B9E7E",
                },
                {
                  icon: CalendarCheck,
                  title: "Calendario sincronizado",
                  description:
                    "Integración automática con Google Calendar. Las fechas de entrega siempre visibles para ti y tu equipo.",
                  accent: "#C9A96E",
                  bgAccent: "#C9A96E",
                },
                {
                  icon: BarChartBig,
                  title: "Estadísticas claras",
                  description:
                    "Métricas de tu negocio que te ayudan a tomar decisiones. Saber es poder, y con Cakely, sabes.",
                  accent: "#D4A0A0",
                  bgAccent: "#D4A0A0",
                },
                {
                  icon: FileText,
                  title: "Generador de facturas",
                  description:
                    "Crea facturas completas y simplificadas conforme a la normativa española. Descárgalas en PDF o envíalas por email.",
                  accent: "#8B9E7E",
                  bgAccent: "#8B9E7E",
                },
                {
                  icon: Store,
                  title: "Gestión de sucursales",
                  description:
                    "Configura y administra varias sedes desde un solo panel. Cada sucursal con sus propios ajustes y datos.",
                  accent: "#C9A96E",
                  bgAccent: "#C9A96E",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#FFFDF9] rounded-2xl p-7 border border-[#E8DDD0]/60 card-organic group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.bgAccent}15` }}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: feature.accent }}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#3D2519] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5C3D2E]/70 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS
            Simple steps, organic feel
        ═══════════════════════════════════════════ */}
        <section
          id="como-funciona"
          className="relative py-20 md:py-28 bg-[#FAF0E6]"
        >
          <div className="absolute inset-0 texture-grain"></div>

          <div className="max-w-5xl mx-auto px-5 relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#C9A96E] font-medium text-sm uppercase tracking-widest mb-4">
                Paso a paso
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6">
                Así de sencillo
              </h2>
              <p className="text-lg text-[#5C3D2E]/70 max-w-xl mx-auto">
                Empieza a organizar tu pastelería en tres pasos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  step: "1",
                  title: "Crea tu cuenta",
                  description:
                    "Regístrate gratis en menos de un minuto. Sin tarjeta, sin compromisos, sin complicaciones.",
                  icon: Heart,
                },
                {
                  step: "2",
                  title: "Organiza tu obrador",
                  description:
                    "Añade tus recetas, clientes y pedidos. Cakely se adapta a tu forma de trabajar, no al revés.",
                  icon: ChefHat,
                },
                {
                  step: "3",
                  title: "Disfruta del control",
                  description:
                    "Ve tu negocio con claridad: qué pedidos tienes, cuánto ganas y quiénes son tus mejores clientes.",
                  icon: Star,
                },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  {/* Step number with organic shape */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-[#FFFDF9] rounded-full shadow-warm flex items-center justify-center border-2 border-[#E8DDD0] group-hover:border-[#8B9E7E]/40 transition-colors duration-300">
                      <item.icon className="w-8 h-8 text-[#8B9E7E]" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-[#8B9E7E] text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#3D2519] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#5C3D2E]/70 leading-relaxed text-[15px] max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Button
                size="lg"
                className="bg-[#8B9E7E] hover:bg-[#6B7F5E] text-white px-10 py-6 text-base font-semibold rounded-full shadow-warm-lg transition-all duration-300"
                asChild
              >
                <Link href={`${appDomain}/empezar-prueba`}>
                  Empieza tu historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TESTIMONIALS
            Warm, human, trustworthy
        ═══════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 bg-[#FFFDF9]">
          <div className="absolute top-12 left-8 w-48 h-48 bg-[#F2D1D1]/15 blob-3 animate-float-slow"></div>

          <div className="max-w-6xl mx-auto px-5 relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4">
                Nuestra comunidad
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6">
                Lo que dicen quienes
                <br />
                <span className="text-[#8B9E7E]">ya confían en Cakely</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#FFF8F0] rounded-2xl p-7 border border-[#E8DDD0]/50 card-organic relative"
                >
                  <Quote className="w-8 h-8 text-[#F2D1D1] mb-4" />
                  <p className="text-[#5C3D2E]/80 leading-relaxed text-[15px] mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-[#3D2519] text-sm">
                      {t.name}
                    </p>
                    <p className="text-[#A89888] text-sm">{t.business}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PRICING SECTION
            Warm redesign, same plans
        ═══════════════════════════════════════════ */}
        <section id="precios" className="relative py-20 md:py-28 bg-[#FFF8F0]">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B9E7E]/6 blob-1"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F2D1D1]/10 blob-2"></div>

          <div className="max-w-6xl mx-auto px-5 relative z-10">
            <div className="text-center mb-16">
              <p className="text-[#8B9E7E] font-medium text-sm uppercase tracking-widest mb-4">
                Planes
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight mb-6">
                Crece a tu ritmo
              </h2>
              <p className="text-lg text-[#5C3D2E]/70 max-w-xl mx-auto">
                Empieza gratis y escala cuando estés lista. Sin presiones, sin
                letra pequeña.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
              {/* Free Plan */}
              <div className="bg-[#FFFDF9] rounded-2xl border border-[#E8DDD0] p-8 card-organic">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-[#3D2519] mb-2">
                    Gratuito
                  </h3>
                  <p className="text-sm text-[#A89888]">
                    Para empezar sin compromisos
                  </p>
                </div>
                <div className="mb-6">
                  <span className="font-serif text-5xl text-[#3D2519]">{prices.free.display}</span>
                  <span className="text-[#A89888] text-lg ml-1">{prices.free.interval}</span>
                </div>
                <p className="text-xs text-[#8B9E7E] font-medium mb-6">
                  Siempre gratis
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Hasta 10 pedidos al mes",
                    "Hasta 20 clientes",
                    "Hasta 5 recetas",
                    "Analíticas básicas",
                    "Google Calendar",
                    "1 usuario",
                  ].map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[#5C3D2E]/80 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B9E7E] mt-2 shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#5C3D2E] hover:bg-[#3D2519] text-white py-5 rounded-full font-medium transition-all duration-300"
                  asChild
                >
                  <Link href={`${appDomain}/registro`}>Comenzar gratis</Link>
                </Button>
              </div>

              {/* Basic Plan */}
              <div className="bg-[#FFFDF9] rounded-2xl border border-[#E8DDD0] p-8 card-organic">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-[#3D2519] mb-2">
                    Básico
                  </h3>
                  <p className="text-sm text-[#A89888]">
                    Para pastelerías en crecimiento
                  </p>
                </div>
                <div className="mb-6">
                  <span className="font-serif text-5xl text-[#3D2519]">
                    {prices.basico.display.monthly}
                  </span>
                  <span className="text-[#A89888] text-lg ml-1">/mes</span>
                </div>
                <p className="text-xs text-[#C9A96E] font-medium mb-6">
                  {prices.basico.display.yearly} — {prices.basico.display.yearlySavings}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Todo lo del plan Gratuito",
                    "Hasta 50 pedidos al mes",
                    "Hasta 100 clientes",
                    "Generador de facturas",
                    "Estadísticas completas",
                    "Google Calendar",
                    "1 usuario",
                  ].map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-sm ${j === 0 ? "text-[#8B9E7E] font-medium" : "text-[#5C3D2E]/80"}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B9E7E] mt-2 shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#5C3D2E] hover:bg-[#3D2519] text-white py-5 rounded-full font-medium transition-all duration-300"
                  asChild
                >
                  <Link
                    href={`${appDomain}/empezar-prueba?priceId=${prices.basico.stripeIds.monthly}`}
                  >
                    Probar 14 días gratis
                  </Link>
                </Button>
              </div>

              {/* Pro Plan — Highlighted */}
              <div className="relative bg-[#3D2519] rounded-2xl p-8 card-organic text-white">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C9A96E] text-[#3D2519] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide whitespace-nowrap">
                    RECOMENDADO
                  </span>
                </div>
                <div className="mb-6 pt-2">
                  <h3 className="font-serif text-2xl mb-2">Pro</h3>
                  <p className="text-sm text-white/60">
                    Para negocios que quieren crecer
                  </p>
                </div>
                <div className="mb-6">
                  <span className="font-serif text-5xl text-[#C9A96E]">
                    {prices.pro.display.monthly}
                  </span>
                  <span className="text-white/60 text-lg ml-1">/mes</span>
                </div>
                <p className="text-xs text-[#C9A96E] font-medium mb-6">
                  {prices.pro.display.yearly} — {prices.pro.display.yearlySavings}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Todo lo del plan Básico",
                    "Pedidos, clientes y recetas ilimitados",
                    "Hasta 5 usuarios",
                    "Generador de facturas con envío por email",
                    "Gestión de sucursales",
                    "Estadísticas avanzadas",
                    "Generador de presupuestos",
                    "Insights de fidelidad",
                    "Soporte prioritario",
                  ].map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-3 text-sm ${j === 0 ? "text-[#C9A96E] font-medium" : "text-white/80"}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-2 shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#C9A96E] hover:bg-[#B89558] text-[#3D2519] py-5 rounded-full font-semibold transition-all duration-300 shadow-warm-lg"
                  asChild
                >
                  <Link
                    href={`${appDomain}/empezar-prueba?priceId=${prices.pro.stripeIds.monthly}`}
                  >
                    Probar 14 días gratis
                  </Link>
                </Button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[#A89888] text-sm">
                {prices.footerText}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ SECTION
            Warm accordion
        ═══════════════════════════════════════════ */}
        <section id="faq" className="relative py-20 md:py-28 bg-[#FAF0E6]">
          <div className="absolute inset-0 texture-grain"></div>
          <div className="absolute top-20 right-10 w-36 h-36 bg-[#F2D1D1]/20 blob-1 animate-float-slow"></div>

          <div className="max-w-3xl mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <p className="text-[#D4A0A0] font-medium text-sm uppercase tracking-widest mb-4">
                Dudas frecuentes
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-[#3D2519] leading-tight">
                Preguntas frecuentes
              </h2>
            </div>

            <Accordion type="multiple" className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-[#FFFDF9] border border-[#E8DDD0]/60 rounded-xl overflow-hidden shadow-warm"
                >
                  <AccordionTrigger
                    style={{ textDecoration: "none" }}
                    className="flex w-full justify-between items-center px-6 py-4 text-left text-base font-medium text-[#3D2519] hover:text-[#8B9E7E] transition-colors"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-[#5C3D2E]/75 text-[15px] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FINAL CTA SECTION
            Emotional, warm, inviting
        ═══════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 bg-[#3D2519] overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#5C3D2E] blob-1 -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5C3D2E] blob-2 translate-x-1/4 translate-y-1/4"></div>

          <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
            <Heart className="w-10 h-10 text-[#C9A96E] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
              Tu próximo paso
              <br />
              <span className="text-[#C9A96E] italic">comienza aquí</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Únete a la comunidad de pasteleros que ya gestionan su negocio con
              amor y profesionalidad. Tu pastelería merece la tranquilidad que
              Cakely te ofrece.
            </p>
            <Button
              size="lg"
              className="bg-[#C9A96E] hover:bg-[#B89558] text-[#3D2519] px-10 py-6 text-base font-semibold rounded-full shadow-warm-xl transition-all duration-300"
              asChild
            >
              <Link href={`${appDomain}/empezar-prueba`}>
                Prueba Cakely gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-white/40 text-sm mt-6">
              Sin tarjeta de crédito · Empieza en 60 segundos
            </p>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════
          FOOTER
          Warm, intimate, close
      ═══════════════════════════════════════════ */}
      <footer className="py-14 bg-[#3D2519] border-t border-[#5C3D2E]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/img/logo-white.webp"
              alt="Logo Cakely"
              width={52}
              height={52}
              className="mb-5"
            />
            <p className="text-white/50 mb-8 max-w-md text-sm leading-relaxed">
              Hecho con cariño para quienes crean con las manos. Cakely es tu
              compañero en cada pedido, cada receta y cada cliente.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { href: "/terminos", label: "Términos" },
                { href: "/privacidad", label: "Privacidad" },
                { href: "/contacto", label: "Contacto" },
                { href: "/privacidad/cookies", label: "Cookies" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-[#C9A96E] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Cakely. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
