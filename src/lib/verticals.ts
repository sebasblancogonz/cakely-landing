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
