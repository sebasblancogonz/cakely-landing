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
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || "https://app.cakely.es";
const basicPriceId = process.env.STRIPE_PRICE_ID_BASICO_MONTHLY!;
const proPriceId = process.env.STRIPE_PRICE_ID_PRO_MONTHLY!;

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 font-bold text-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              C
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Cakely
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Características
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Beneficios
            </a>
            <a
              href="#precios"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Precios
            </a>
            <Button
              variant="outline"
              className="border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
            >
              Iniciar Sesión
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-16 w-32 h-32 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-cyan-200 to-emerald-300 rounded-full opacity-50 animate-pulse delay-500"></div>

          <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                Más de 500+ pasteleros confían en nosotros
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 animate-fade-in">
                <span className="text-gray-900">Transforma el</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  caos en control
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
                La plataforma todo-en-uno que convierte tu pastelería artesanal
                en un negocio organizado, rentable y escalable.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-7 text-lg font-semibold rounded-xl"
                >
                  <Link
                    href={`${appDomain}/empezar-prueba?priceId=${proPriceId}`}
                  >
                    Comenzar Gratis
                  </Link>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <p className="text-sm text-gray-500 mb-20 font-medium">
                🎂 Sin tarjeta de crédito • ⚡ Configuración en 60 segundos • 🔒
                Datos seguros
              </p>

              {/* Hero Image */}
              <div className="relative max-w-7xl mx-auto animate-fade-in">
                <div className="bg-white rounded-3xl shadow-2xl p-2 border border-gray-100">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
                    <div className="text-center relative z-10">
                      <Image
                        src="/img/hero.png"
                        alt="Cakely CRM para Repostería"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        width={1200}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Los problemas que conoces
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                    ¿Te suena familiar?
                  </h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      emoji: "😰",
                      text: "Perder pedidos importantes entre WhatsApp, notas y papeles",
                      color: "from-red-50 to-red-100 border-red-200",
                    },
                    {
                      emoji: "🤷‍♀️",
                      text: "No saber si realmente estás ganando dinero con cada pastel",
                      color: "from-orange-50 to-orange-100 border-orange-200",
                    },
                    {
                      emoji: "📅",
                      text: "Calendario caótico con fechas tachadas y sobrescritas",
                      color: "from-yellow-50 to-yellow-100 border-yellow-200",
                    },
                    {
                      emoji: "🔥",
                      text: "Estrés constante por posibles errores u olvidos",
                      color: "from-purple-50 to-purple-100 border-purple-200",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r ${item.color} border hover:scale-105 transition-transform`}
                    >
                      <span className="text-3xl">{item.emoji}</span>
                      <p className="text-gray-800 font-medium text-lg">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                    La solución está aquí
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cakely convierte el caos en claridad. Un sistema pensado por
                    y para profesionales de la repostería que entiende tus
                    necesidades únicas.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl h-96 flex items-center justify-center">
                      <div className="text-center">
                        <ClipboardList className="w-20 h-20 mx-auto text-emerald-600 mb-6" />
                        <h4 className="text-gray-800 font-bold text-xl mb-2">
                          Pedidos Organizados
                        </h4>
                        <p className="text-gray-600">Todo en su lugar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                Características Principales
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Herramientas que
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  cambian el juego
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Cada función diseñada para resolver problemas reales de tu día a
                día
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: ClipboardList,
                  title: "Gestión Visual de Pedidos",
                  description:
                    "Panel centralizado con calendario inteligente. Ve el estado de cada pedido, fechas de entrega y detalles críticos de un vistazo.",
                  color: "from-emerald-500 to-emerald-600",
                  bgColor: "from-emerald-50 to-emerald-100",
                },
                {
                  icon: Calculator,
                  title: "Calculadora de Costes",
                  description:
                    "Define ingredientes, crea recetas y calcula automáticamente costes reales. Conoce tus márgenes y fija precios con confianza.",
                  color: "from-teal-500 to-teal-600",
                  bgColor: "from-teal-50 to-teal-100",
                },
                {
                  icon: Users,
                  title: "CRM para Pasteleros",
                  description:
                    "Base de datos de clientes con historial, preferencias, alergias y notas importantes. Nunca olvides un detalle.",
                  color: "from-cyan-500 to-cyan-600",
                  bgColor: "from-cyan-50 to-cyan-100",
                },
                {
                  icon: UsersRound,
                  title: "Trabajo en Equipo",
                  description:
                    "Invita a tu equipo, asigna roles y colabora en tiempo real. Comunicación clara y responsabilidades definidas.",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100",
                },
                {
                  icon: CalendarCheck,
                  title: "Sincronización Calendario",
                  description:
                    "Integración automática con Google Calendar. Fechas de entrega sincronizadas para ti y tu equipo.",
                  color: "from-indigo-500 to-indigo-600",
                  bgColor: "from-indigo-50 to-indigo-100",
                },
                {
                  icon: BarChartBig,
                  title: "Analytics Inteligente",
                  description:
                    "Métricas clave de tu negocio, generador de presupuestos y reportes que te ayudan a crecer estratégicamente.",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Los resultados que
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  vas a experimentar
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Ahorra 10+ Horas/Semana",
                  description:
                    "Automatiza tareas repetitivas y encuentra información al instante. Más tiempo para lo que amas: crear.",
                },
                {
                  icon: ShieldCheck,
                  title: "Cero Errores Costosos",
                  description:
                    "Información centralizada y alertas inteligentes. Cada detalle bajo control para entregas perfectas.",
                },
                {
                  icon: Euro,
                  title: "Incrementa Márgenes 20%",
                  description:
                    "Costes precisos y pricing estratégico. Descubre qué productos son realmente rentables.",
                },
                {
                  icon: FolderKanban,
                  title: "Negocio Escalable",
                  description:
                    "Sistemas que crecen contigo. Desde emprendedor hasta equipo completo sin perder control.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform p-6"
                >
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors shadow-lg">
                    <benefit.icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="precios"
          className="py-24 md:py-32 bg-gradient-to-br from-emerald-50 to-teal-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Planes que se adaptan
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  a tu crecimiento
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Empieza gratis y escala cuando estés listo
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-emerald-300 rounded-3xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Esencial
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-2">
                    Perfecto para comenzar tu transformación
                  </CardDescription>
                  <div className="mt-8">
                    <span className="text-6xl font-black text-gray-900">
                      19€
                    </span>
                    <span className="text-2xl text-gray-500">/mes</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 font-medium">
                    (o 190€/año, ¡ahorra 2 meses!)
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "✅ Gestión de hasta pedidos (limitado)",
                    "✅ Base de Datos de Clientes (limitado)",
                    "✅ Estadísticas Básicas",
                    "✅ Integración Google Calendar",
                    "👤 1 Usuario incluido",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-6 text-lg font-semibold rounded-xl">
                    <Link
                      href={`${appDomain}/empezar-prueba?priceId=${basicPriceId}`}
                    >
                      Empezar Gratis 14 Días
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-emerald-400 bg-white scale-110 rounded-3xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    💎 RECOMENDADO
                  </span>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Profesional
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-2">
                    Para negocios serios que buscan crecer
                  </CardDescription>
                  <div className="mt-8">
                    <span className="text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      49€
                    </span>
                    <span className="text-2xl text-gray-500">/mes</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 font-medium">
                    (o 490€/año, ¡ahorra 2 meses!)
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "🚀 Todo lo de Esencial",
                    "♾️ Recetas e Ingredientes Ilimitados",
                    "👥 Gestión de Equipo Completa",
                    "📊 Estadísticas Avanzadas",
                    "🎯 Generador de Presupuestos",
                    "👨‍👩‍👧‍👦 Hasta 5 Usuarios incluidos",
                    "⚡ Soporte Prioritario",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span
                        className={`text-gray-700 text-lg ${
                          index === 0 || index === 2 || index === 5
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 text-lg font-semibold shadow-xl rounded-xl">
                    <Link
                      href={`${appDomain}/empezar-prueba?priceId=${proPriceId}`}
                    >
                      Empezar Gratis 14 Días
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 text-lg mb-4">
                ✨ 14 días gratis • 🚫 Sin tarjeta de crédito • ⚡ Cancela
                cuando quieras
              </p>
              <p className="text-gray-500">
                Todos los precios incluyen IVA • Soporte en español • Datos
                protegidos en Europa
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                C
              </div>
              <span className="text-3xl font-bold text-white">Cakely</span>
            </div>
            <p className="text-gray-400 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              La revolución digital que tu pastelería necesitaba. Transforma el
              caos en control y el estrés en crecimiento.
            </p>
            <div className="flex justify-center gap-8 mb-10">
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Términos
              </Link>
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Privacidad
              </Link>
              <Link
                href="/contacto"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Contacto
              </Link>
            </div>
            <p className="text-gray-500">
              © {new Date().getFullYear()} Cakely. Hecho con ❤️ para
              profesionales de la repostería.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
