import {
  ClipboardList,
  Users,
  Calculator,
  CalendarCheck,
  BarChartBig,
} from 'lucide-react';

export const NAV_LINKS = [
  { href: '#funciones', label: 'Funciones' },
  { href: '#precios', label: 'Precios' },
  { href: '/blog', label: 'Blog' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const FEATURES = [
  {
    icon: ClipboardList,
    title: 'Pedidos bajo control',
    description:
      'Ve todos tus pedidos, su estado y fecha de entrega en un solo panel. Olvídate de buscar entre WhatsApp y notas.',
  },
  {
    icon: Calculator,
    title: 'Costes reales por receta',
    description:
      'Calcula al céntimo lo que te cuesta cada creación. Fija precios sabiendo exactamente tu margen.',
  },
  {
    icon: Users,
    title: 'Clientes organizados',
    description:
      'Historial de pedidos, preferencias y alergias. Cada detalle guardado para que el trato sea siempre personal.',
  },
  {
    icon: CalendarCheck,
    title: 'Calendario integrado',
    description:
      'Sincronización con Google Calendar. Las entregas siempre visibles para ti y tu equipo.',
  },
  {
    icon: BarChartBig,
    title: 'Datos de tu negocio',
    description:
      'Métricas claras sobre ventas, clientes y productos. Las decisiones importantes se toman con datos.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'María García',
    business: 'La Dulce María — Madrid',
    text: 'Mis mañanas son mucho más tranquilas. Ya no tengo que revisar cinco sitios distintos para saber qué pedidos tengo hoy.',
  },
  {
    name: 'Laura Fernández',
    business: 'Bake & Love — Valencia',
    text: 'Siento que está hecho por alguien que entiende mi trabajo. No es un software frío, es una herramienta que habla mi idioma.',
  },
  {
    name: 'Carmen Ruiz',
    business: 'Dulces de Carmen — Sevilla',
    text: 'La calculadora de costes me abrió los ojos. Descubrí que algunos de mis pasteles más populares apenas me dejaban margen.',
  },
] as const;

export const FAQS = [
  {
    question: '¿Qué es Cakely?',
    answer:
      'Una herramienta de gestión para pastelerías artesanales. Organiza pedidos, clientes y recetas desde un solo lugar.',
  },
  {
    question: '¿Puedo empezar gratis?',
    answer:
      'Sí. El plan gratuito incluye hasta 10 pedidos al mes, 20 clientes y 5 recetas. Sin tarjeta de crédito.',
  },
  {
    question: '¿Funciona desde el móvil?',
    answer:
      'Sí, Cakely está optimizado para móvil, tablet y PC. Tu obrador, siempre en tu bolsillo.',
  },
  {
    question: '¿Qué incluye el plan Pro?',
    answer:
      'Pedidos, clientes y recetas ilimitados. Asistente IA que responde con los datos de tu negocio, gestión de sucursales, estadísticas avanzadas, generador de presupuestos, mini-web pública para tu negocio y soporte prioritario.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Sí. Los datos están cifrados y alojados en servidores europeos, cumpliendo con el RGPD.',
  },
] as const;

export const PRICING_FEATURES = {
  free: [
    '10 pedidos al mes',
    '20 clientes',
    '5 recetas',
    'Analíticas básicas',
    'Google Calendar',
  ],
  basico: [
    '50 pedidos al mes',
    '100 clientes',
    'Inventario y escaneo de recibos',
    'Estadísticas completas',
    'Google Calendar',
  ],
  pro: [
    'Sin límites',
    'Hasta 5 usuarios',
    'Asistente IA con tus datos',
    'Gestión de sucursales',
    'Mini-web pública de tu negocio',
    'Generador de presupuestos',
    'Soporte prioritario',
  ],
} as const;

/**
 * Comparativa completa de planes para la sección de tabla bajo la PricingSection.
 * Fuente de verdad: `config/plans.ts` del dashboard. Cualquier cambio allí debe
 * reflejarse aquí — son repos separados, no hay import compartido.
 *
 * VITALICIO se omite: no está a la venta para usuarios nuevos.
 */
export type PlanColumn = 'free' | 'basico' | 'pro';

export const PLAN_COMPARISON = {
  groups: [
    {
      label: 'Cuotas',
      rows: [
        { label: 'Pedidos al mes', free: '10', basico: '50', pro: 'Sin límite' },
        { label: 'Clientes', free: '20', basico: '100', pro: 'Sin límite' },
        { label: 'Recetas', free: '5', basico: '5', pro: 'Sin límite' },
        { label: 'Usuarios en equipo', free: '1', basico: '1', pro: '5' },
        { label: 'Sedes', free: '1', basico: '1', pro: '5' },
        { label: 'Gastos al mes', free: '20', basico: '100', pro: 'Sin límite' },
      ],
    },
    {
      label: 'Funciones',
      rows: [
        { label: 'Analíticas básicas', free: true, basico: true, pro: true },
        { label: 'Estadísticas', free: false, basico: true, pro: true },
        { label: 'Estadísticas avanzadas', free: false, basico: false, pro: true },
        { label: 'Múltiples usuarios', free: false, basico: false, pro: true },
        { label: 'Sedes / sucursales', free: false, basico: false, pro: true },
        { label: 'Inventario', free: false, basico: true, pro: true },
        { label: 'Gastos', free: true, basico: true, pro: true },
        { label: 'Escaneo de recibos', free: false, basico: true, pro: true },
        { label: 'Calculadora de presupuestos', free: false, basico: false, pro: true },
        { label: 'Asistente IA con los datos de tu negocio', free: false, basico: false, pro: true },
        { label: 'Soporte prioritario', free: false, basico: false, pro: true },
        { label: 'Mini-web pública de tu negocio', free: false, basico: false, pro: true },
      ],
    },
  ],
} as const;

export const FOOTER_LINKS = {
  producto: [
    { href: '#funciones', label: 'Funciones' },
    { href: '#precios', label: 'Precios' },
    { href: '/blog', label: 'Blog' },
    { href: '/software-para-pastelerias', label: 'Software para pastelerías' },
    { href: '/software-para-panaderias', label: 'Software para panaderías' },
    { href: '/pagina-web-para-pastelerias', label: 'Página web para pastelerías' },
    { href: '/calcular-presupuesto-tarta', label: 'Calculadora de precios de tartas' },
  ],
  legal: [
    { href: '/terminos', label: 'Términos' },
    { href: '/privacidad', label: 'Privacidad' },
    { href: '/privacidad/cookies', label: 'Cookies' },
  ],
  contacto: [
    { href: 'mailto:contacto@cakely.es', label: 'contacto@cakely.es' },
    { href: '/contacto', label: 'Contacto' },
  ],
} as const;
