import {
  CalendarDays,
  ClipboardList,
  Users,
  ChefHat,
  Receipt,
  BarChart3,
  Globe,
  Images,
  Quote,
  PenLine,
  AtSign,
  Search,
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
    'Gestiona los encargos, clientes y producción de tu panadería sin libretas ni hojas de cálculo. Cakely organiza tu obrador: pedidos, recetas, costes y cobros en un solo lugar.',
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
      title: 'Cobros y pagos',
      description:
        'Controla pagos parciales, señales y lo que queda pendiente de cada encargo sin hojas de cálculo.',
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
    'El programa de gestión para pastelerías artesanales: pedidos de tartas personalizadas, presupuestos, recetas con escandallo, clientes y cobros. Pruébalo gratis 14 días.',
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
    {
      question:
        '¿Qué diferencia hay entre Cakely y llevar la pastelería en Excel o WhatsApp?',
      answer:
        'Excel y WhatsApp reparten la información en mil sitios: el pedido en un chat, el precio en una hoja y la fecha en tu cabeza. Cakely lo junta todo — pedidos, costes, clientes, cobros y calendario — y calcula márgenes por ti, sin fórmulas ni buscar en conversaciones de hace tres semanas.',
    },
    {
      question: '¿Incluye Cakely una página web para mi pastelería?',
      answer:
        'Sí. El plan Pro incluye tu propia página web pública con tu historia, galería de fotos, testimonios y datos de contacto, editable desde el panel sin saber programar. Perfecta para el enlace de tu bio de Instagram.',
    },
  ],
  ctaTitle: 'Tu pastelería merece estar organizada',
};

export const WEB_PASTELERIAS: VerticalConfig = {
  slug: 'pagina-web-para-pastelerias',
  name: 'pastelerías',
  metaTitle:
    'Página web para tu pastelería — sin programar y sin pagar un diseño | Cakely',
  metaDescription:
    'Crea la página web de tu pastelería en una tarde: tu historia, galería de fotos, testimonios y contacto. Incluida en Cakely, sin programar y sin coste de desarrollo web.',
  heroTitle: 'La página web de tu pastelería',
  heroAccent: 'lista en una tarde, sin programar',
  heroSubtitle:
    'Tu historia, tus creaciones, testimonios y contacto en una página pública propia. Incluida con Cakely: la editas desde el panel y la enlazas en tu bio de Instagram.',
  painsTitle: '¿Por qué tu pastelería aún no tiene web?',
  pains: [
    {
      title: 'Un desarrollo web cuesta cientos de euros',
      description:
        'Entre diseño, dominio, hosting y mantenimiento, una web de encargo se va fácilmente a más de 1.000 €. La página de Cakely viene incluida en tu plan: cero coste de desarrollo y cero mantenimiento técnico.',
    },
    {
      title: 'Instagram no es una página web',
      description:
        'Tu perfil vive dentro de una app y no aparece bien en Google. Con una página propia, quien busca una pastelería como la tuya te encuentra — y desde ahí puede escribirte o llamarte.',
    },
    {
      title: 'No tienes tiempo de mantener una web',
      description:
        'Cambias una foto, un testimonio o el teléfono desde el panel de Cakely y la página se actualiza al momento. Sin tocar código, sin depender de nadie.',
    },
    {
      title: 'Tu información está desperdigada',
      description:
        'El teléfono en Instagram, las fotos en el móvil, las reseñas en WhatsApp. Tu página lo reúne todo en un solo enlace que puedes compartir donde quieras.',
    },
  ],
  featuresTitle: 'Lo que incluye tu página',
  features: [
    {
      icon: Globe,
      title: 'Tu página pública propia',
      description:
        'Una dirección para tu pastelería con tu nombre, tu eslogan y tu historia. Lista para compartir en redes, WhatsApp o tarjetas.',
    },
    {
      icon: PenLine,
      title: 'Editor sin código',
      description:
        'Todo se edita desde el panel de Cakely con formularios sencillos. Si sabes usar Instagram, sabes editar tu web.',
    },
    {
      icon: Images,
      title: 'Galería de tus creaciones',
      description:
        'Sube fotos de tus tartas y trabajos favoritos. Tu escaparate abierto las 24 horas.',
    },
    {
      icon: Quote,
      title: 'Testimonios de clientes',
      description:
        'Muestra las opiniones de quienes ya te han comprado. Nada convence más a un cliente nuevo.',
    },
    {
      icon: AtSign,
      title: 'Perfecta para tu bio',
      description:
        'Un solo enlace con todo: historia, fotos, testimonios y contacto. Ideal para la bio de Instagram o TikTok.',
    },
    {
      icon: Search,
      title: 'Visible en Google',
      description:
        'Tu página es pública e indexable: quien busque tu pastelería por nombre podrá encontrarla fuera de las redes sociales.',
    },
  ],
  faqs: [
    {
      question: '¿Cuánto cuesta hacer la página web de mi pastelería con Cakely?',
      answer:
        'La página web está incluida en el plan Pro de Cakely, junto con la gestión de pedidos, presupuestos, recetas y cobros. No pagas diseño, ni desarrollo, ni hosting aparte. Puedes probarlo gratis 14 días y cancelar cuando quieras dentro de ese período sin que se te cobre nada.',
    },
    {
      question: '¿Necesito saber programar o diseñar?',
      answer:
        'No. Rellenas tus datos en el panel de Cakely — eslogan, historia, fotos, testimonios y contacto — y la página se genera con un diseño cuidado. Cualquier cambio se publica al instante.',
    },
    {
      question: '¿Qué secciones incluye la página?',
      answer:
        'Tu nombre y eslogan, la historia de tu pastelería, una galería de fotos de tus creaciones, testimonios de clientes y tus datos de contacto: email, teléfono e Instagram.',
    },
    {
      question: '¿Puedo usarla como enlace de mi bio de Instagram?',
      answer:
        'Sí, es uno de sus usos principales: un único enlace con toda tu información, mucho más completo que un link-in-bio genérico y con tu marca.',
    },
    {
      question: '¿La página aparece en Google?',
      answer:
        'Sí. Es una página pública e indexable, así que tus clientes pueden encontrarte buscando el nombre de tu pastelería, sin necesidad de tener cuenta en ninguna red social.',
    },
  ],
  ctaTitle: 'Tu pastelería merece una web tan bonita como tus tartas',
};

export const VERTICALS: VerticalConfig[] = [PASTELERIAS, PANADERIAS];
