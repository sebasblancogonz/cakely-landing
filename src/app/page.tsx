"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ClipboardList,
  Users,
  Euro,
  UsersRound,
  BarChartBig,
  CalendarCheck,
  Calculator,
  FolderKanban,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderLoginButton from "./HeaderLoginButton";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/img/logo.webp"
            alt="Logo Cakely"
            width={32}
            height={32}
          />
          <span className="text-xl">Cakely</span>
        </Link>
        <nav className="flex flex-row">
          <HeaderLoginButton />
        </nav>
      </header>

      <main className="flex-grow">
        <section className="w-fullbg-gradient-to-br from-background to-muted/30">
          <div className="p-0 py-16 md:py-24 lg:py-32 xl:py-40 mx-auto px-4 md:px-6 text-center bg-[url('/img/background.svg')] bg-cover">
            <div className="flex flex-col items-center py-12">
              <h1 className="py-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                ¿Cansado del caos en los pedidos?
                <br className="hidden sm:block" />
                Organiza tu pastelería de forma inteligente.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Deja atrás las libretas y las hojas de cálculo. Nuestra
                herramienta digital te ayuda a visualizar tus entregas, conocer
                la rentabilidad de tus productos y colaborar eficientemente.
              </p>
              <div className="space-x-4 space-y-4 py-4">
                <Button size="lg" asChild>
                  <Link href="/signup?source=landing_hero">
                    Prueba Gratis 14 Días
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Descubre Más</Link>
                </Button>
              </div>
              <p className="py-4 text-xs text-muted-foreground">
                Sin compromiso. No se requiere tarjeta.
              </p>
            </div>
            <div className="mt-12 mx-auto w-full max-w-4xl">
              <Image
                src="/img/hero.png"
                alt="Vista del Dashboard"
                width={1200}
                height={675}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-y-12 lg:gap-x-8">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Sabemos lo que es...
                </h2>
                <ul className="list-none space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span>
                      Perder detalles importantes de un pedido entre notas y
                      mensajes. 📝
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      Dudar si un pastel personalizado te está dando beneficios
                      reales. 🤔
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      Olvidar una entrega o tener el calendario lleno de
                      tachones. 🗓️
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      Que la comunicación con tu equipo sobre un pedido sea un
                      lío. 💬
                    </span>
                  </li>
                </ul>
                <p className="max-w-[600px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  <strong>Por eso hemos creado Cakely.</strong>
                  <br />
                  Un espacio digital diseñado para obradores como el tuyo, que
                  te devuelve el control y la tranquilidad.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/img/orders.png"
                  alt="Organización"
                  width={550}
                  height={310}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-20 lg:py-28 bg-muted/40  bg-[url('/img/background.svg')] bg-cover"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Características
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Descubre todo lo que puedes hacer
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Herramientas pensadas para simplificar la gestión diaria de tu
                negocio de repostería.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 rounded-lg border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <ClipboardList className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">
                    Gestión de Pedidos Visual
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Centraliza todos tus encargos. Consulta fechas, detalles,
                  estado de pago y producción de un vistazo en un calendario o
                  listado intuitivo. ¡Que no se te escape nada!
                </p>
              </div>
              <div className="grid gap-1 rounded-lg border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">
                    Control de Costes y Recetas
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Define tus ingredientes y recetas. Calcula automáticamente el
                  coste, asigna precios con confianza y conoce tu margen real.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Ficha de Clientes (CRM)</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guarda la información relevante de tus clientes: datos,
                  historial, preferencias, alergias... Todo accesible al
                  instante.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <UsersRound className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Colaboración en Equipo</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Invita a tu equipo, asigna roles (Admin, Editor) y trabajad
                  juntos de forma organizada. (Plan Profesional).
                </p>
              </div>
              <div className="grid gap-1 rounded-lg border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarCheck className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">
                    Integración Google Calendar
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Añade automáticamente las fechas de entrega a tu Google
                  Calendar y al de tu equipo para una planificación sin fisuras.
                </p>
              </div>
              <div className="grid gap-1 rounded-lg border bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <BarChartBig className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">
                    Visión General (Próximamente)
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Obtén estadísticas clave de tu negocio y genera presupuestos
                  fácilmente (¡próximamente!).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="w-full py-12 md:py-20 lg:py-28 border-t bg-background"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10 sm:text-4xl lg:mb-12">
              Más que un Software, tu Aliado Estratégico
            </h2>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Recupera Tu Tiempo</h3>
                <p className="text-sm text-muted-foreground px-2">
                  Deja de buscar datos en libretas o mensajes. Centraliza
                  pedidos, clientes y recetas para dedicar tus horas a lo que
                  realmente importa: hornear.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Pedidos Sin Sorpresas</h3>
                <p className="text-sm text-muted-foreground px-2">
                  Alergias, detalles de decoración, fechas... Ten toda la
                  información crítica accesible para evitar errores costosos y
                  asegurar la satisfacción del cliente.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Euro className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Controla Tu Rentabilidad
                </h3>
                <p className="text-sm text-muted-foreground px-2">
                  Calcula el coste exacto de tus recetas con precios
                  actualizados. Fija precios justos, entiende qué productos son
                  más rentables y toma decisiones basadas en datos.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <FolderKanban className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Todo Tu Negocio Organizado
                </h3>
                <p className="text-sm text-muted-foreground px-2">
                  Desde el primer contacto con el cliente hasta la entrega final
                  y la gestión de tu equipo. Ten una visión clara de tu negocio
                  en un panel de control intuitivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="precios"
          className="w-full py-12 md:py-20 lg:py-28 border-t  bg-[url('/img/background.svg')] bg-cover"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10 sm:text-4xl">
              Planes simples para cada tamaño de obrador
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="flex flex-col">
                <CardHeader className="pb-4 h-[112px]">
                  <CardTitle>Esencial</CardTitle>
                  <CardDescription>
                    Perfecto para empezar a organizarte.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">
                    19€
                    <span className="text-xl font-normal text-muted-foreground">
                      /mes
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    (o 190€/año, ¡2 meses gratis!)
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Gestión de Pedidos</li>
                    <li>Gestión de Clientes</li>
                    <li>Recetas e Ingredientes (limitado)</li>
                    <li>Cálculo de Costes Básico</li>
                    <li>Integración Google Calendar</li>
                    <li>
                      <strong>1 Usuario</strong>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup?plan=esencial">
                      Empezar Prueba Gratis
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary shadow-lg">
                <CardHeader className="pb-4 h-[112px]">
                  <div className="text-xs uppercase text-primary font-semibold">
                    Más Popular
                  </div>
                  <CardTitle>Profesional</CardTitle>
                  <CardDescription>
                    Ideal para equipos y negocios en crecimiento.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">
                    49€
                    <span className="text-xl font-normal text-muted-foreground">
                      /mes
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    (o 490€/año, ¡2 meses gratis!)
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong>Todo lo de Esencial</strong>
                    </li>
                    <li>
                      Recetas e Ingredientes <strong>Ilimitados</strong>
                    </li>
                    <li>
                      <strong>Gestión de Colaboradores</strong>
                    </li>
                    <li>
                      Cálculo de Costes <strong>Avanzado</strong>
                    </li>
                    <li>(Próximamente) Analytics y Presupuestos</li>
                    <li>
                      <strong>Hasta 3 Usuarios incluidos</strong>
                    </li>
                    <li>Soporte Prioritario</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/signup?plan=profesional">
                      Empezar Prueba Gratis
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Todos los precios incluyen IVA. Cancela cuando quieras.
            </p>
          </div>
        </section>

        {/* --- Sección FAQ (Opcional) --- */}
        {/* <section className="w-full py-12 md:py-20 lg:py-28 border-t">...</section> */}
      </main>

      <footer className="py-6 border-t bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Cakely. Todos los derechos reservados.
          </span>
          <nav className="flex gap-4 mt-2 md:mt-0">
            <Link href="/terminos" className="hover:text-foreground">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-foreground">
              Privacidad
            </Link>
            <Link href="/contacto" className="hover:text-foreground">
              Contacto
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

const Icons = {
  google: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 5A10 10 0 0 0 5.94 15.05M19 8.95A10 10 0 0 1 8.95 19M19 8.95A5 5 0 0 0 15.05 5M5.94 15.05A5 5 0 0 1 5 19M5.94 15.05A10 10 0 0 0 19 8.95M5 19A10 10 0 0 0 15.05 5M5 19A5 5 0 0 0 8.95 19" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};
