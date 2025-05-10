import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Cakely",
  description: "Conoce cómo tratamos tus datos personales y tus derechos.",
};

export default function PrivacyPolicyPage() {
  const appName = "Cakely";
  const companyName = "Cakely";
  const contactEmail = "contacto@cakely.es";
  const effectiveDate = "5 de Mayo de 2025";

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
      <article className="prose prose-sm sm:prose-base lg:prose-lg prose-blue max-w-none dark:prose-invert">
        <h1>Política de Privacidad</h1>
        <p>
          <strong>Fecha de Entrada en Vigor:</strong> {effectiveDate}
        </p>

        <h2>1. Introducción</h2>
        <p>
          Bienvenido/a a {appName}. Tu privacidad es importante para nosotros.
          Esta Política de Privacidad explica cómo {companyName}{" "}
          (&quot;nosotros&quot;, &quot;nuestro&quot;) recopila, utiliza,
          comparte y protege tu información personal cuando utilizas nuestra
          aplicación web y servicios relacionados (el &quot;Servicio&quot;),
          accesible desde https://app.cakely.es.
        </p>
        <p>
          Al utilizar nuestro Servicio, aceptas la recopilación y el uso de
          información de acuerdo con esta política. Si no estás de acuerdo con
          los términos, por favor, no utilices el Servicio.
        </p>

        <h2>2. Responsable del Tratamiento</h2>
        <p>El responsable del tratamiento de tus datos personales es:</p>
        <ul>
          <li>
            <strong>Nombre/Razón Social:</strong> {companyName}
          </li>
          <li>
            <strong>Email de Contacto:</strong> {contactEmail}
          </li>
        </ul>

        <h2>3. Información que Recopilamos</h2>
        <p>
          Podemos recopilar y procesar los siguientes tipos de información sobre
          ti:
        </p>
        <ul>
          <li>
            <strong>Información de Identificación Personal:</strong> Nombre,
            dirección de correo electrónico, que proporcionas al registrarte o
            iniciar sesión, incluso a través de proveedores de terceros como
            Google o GitHub.
          </li>
          <li>
            <strong>Información del Negocio:</strong> Nombre del negocio, logo
            (URL si la subes), configuración operativa, datos de miembros del
            equipo (emails al invitar), y otros datos que introduzcas
            relacionados con tu negocio.
          </li>
          <li>
            <strong>Datos Operativos Introducidos:</strong> Información sobre
            tus clientes (nombre, contacto, notas), pedidos (descripción,
            fechas, precios, estado), ingredientes (nombres, precios,
            proveedores) y recetas (ingredientes, costes, notas). Eres
            responsable de asegurar que tienes permiso para introducir datos de
            terceros (como tus clientes) en la plataforma.
          </li>
          <li>
            <strong>Información de Autenticación de Terceros:</strong> Si te
            conectas a servicios como Google Calendar, podemos almacenar tokens
            de acceso/refresco necesarios para proporcionar la integración,
            siempre con tu consentimiento explícito durante el proceso de
            conexión.
          </li>
          <li>
            <strong>Información Técnica y de Uso:</strong> Dirección IP, tipo de
            navegador, sistema operativo, páginas visitadas dentro del Servicio,
            tiempo empleado, identificadores de dispositivo, y otros datos de
            diagnóstico recopilados automáticamente al usar el Servicio
            (posiblemente a través de cookies o servicios de analítica como
            Vercel Analytics).
          </li>
          <li>
            <strong>Información de Pago (Gestionada por Terceros):</strong>{" "}
            **No** almacenamos directamente los detalles completos de tu tarjeta
            de crédito/débito. Si te suscribes a un plan de pago, la gestión se
            realiza a través de nuestra pasarela de pago (ej: Stripe, Paddle)
            que tiene sus propias políticas de privacidad. Solo almacenamos la
            información necesaria para gestionar tu suscripción (ej: ID de
            cliente de Stripe, estado de la suscripción, plan).
          </li>
          <li>
            <strong>Cookies y Tecnologías Similares:</strong> Utilizamos cookies
            para el funcionamiento esencial, seguridad, análisis y
            personalización. Consulta nuestra [Enlace a Política de Cookies -
            ¡DEBES CREARLA!] para más detalles.
          </li>
        </ul>

        <h2>4. Cómo Utilizamos tu Información</h2>
        <p>
          Utilizamos la información recopilada para los siguientes propósitos y
          bajo las siguientes bases legales:
        </p>
        <ul>
          <li>
            <strong>
              Proveer y Mantener el Servicio (Base Legal: Ejecución de
              Contrato):
            </strong>{" "}
            Para crear y gestionar tu cuenta, procesar tus pedidos y clientes,
            calcular costes, permitir la colaboración, y operar las
            funcionalidades principales de {appName}.
          </li>
          <li>
            <strong>
              Autenticación y Seguridad (Base Legal: Ejecución de Contrato,
              Interés Legítimo):
            </strong>{" "}
            Para verificar tu identidad, proteger tu cuenta y prevenir fraudes.
          </li>
          <li>
            <strong>
              Comunicación (Base Legal: Ejecución de Contrato, Interés Legítimo,
              Consentimiento):
            </strong>{" "}
            Para enviarte notificaciones importantes sobre el servicio
            (mantenimiento, cambios en términos), responder a tus consultas de
            soporte, y enviarte comunicaciones de marketing (solo si has dado tu
            consentimiento explícito).
          </li>
          <li>
            <strong>
              Procesamiento de Pagos y Suscripciones (Base Legal: Ejecución de
              Contrato):
            </strong>{" "}
            Para gestionar tu suscripción, facturación y pagos a través de
            nuestra pasarela de pago.
          </li>
          <li>
            <strong>
              Integración con Google Calendar (Base Legal: Consentimiento):
            </strong>{" "}
            Para crear/modificar/eliminar eventos en tu calendario relacionados
            con los pedidos, basándonos en el permiso que nos otorgaste.
          </li>
          <li>
            <strong>
              Análisis y Mejora del Servicio (Base Legal: Interés Legítimo,
              Consentimiento para cookies no esenciales):
            </strong>{" "}
            Para entender cómo se utiliza nuestro Servicio, monitorizar el
            rendimiento, corregir errores y mejorar la experiencia del usuario.
          </li>
          <li>
            <strong>Cumplimiento Legal (Base Legal: Obligación Legal):</strong>{" "}
            Para cumplir con leyes, regulaciones, procesos legales o solicitudes
            gubernamentales aplicables.
          </li>
        </ul>

        <h2>5. Cómo Compartimos tu Información</h2>
        <p>
          No vendemos tu información personal. Podemos compartir tu información
          solo en las siguientes circunstancias limitadas:
        </p>
        <ul>
          <li>
            <strong>Proveedores de Servicios:</strong> Con empresas terceras que
            nos ayudan a operar el Servicio, como:
            <ul>
              <li>
                Pasarela de Pagos (ej: Stripe) para procesar suscripciones.
              </li>
              <li>
                Proveedor de Email Transaccional (ej: Resend) para enviar
                notificaciones e invitaciones.
              </li>
              <li>
                Proveedor de Autenticación OAuth (Google, GitHub) para el inicio
                de sesión.
              </li>
              <li>
                Proveedor de Almacenamiento de Imágenes (ej: ImageKit) para
                logos/fotos.
              </li>
              <li>Proveedor de Hosting (ej: Vercel).</li>
              <li>Herramientas de Análisis (ej: Vercel Analytics).</li>
            </ul>
            Estos proveedores solo tienen acceso a la información necesaria para
            realizar sus tareas y están obligados contractualmente a protegerla.
          </li>
          <li>
            <strong>Colaboradores Invitados (Dentro de tu Negocio):</strong> Si
            invitas a colaboradores, compartirás con ellos la información del
            negocio (pedidos, clientes, recetas, etc.) según el rol que les
            asignes.
          </li>
          <li>
            <strong>Requisitos Legales:</strong> Si creemos de buena fe que es
            necesario para cumplir con una obligación legal, proteger nuestros
            derechos o seguridad, investigar fraudes o responder a una solicitud
            gubernamental.
          </li>
          <li>
            <strong>Transferencias de Negocio:</strong> En caso de fusión,
            adquisición o venta de activos, tu información podría ser
            transferida como parte del acuerdo, notificándote previamente si
            aplica.
          </li>
        </ul>

        <h2>6. Transferencias Internacionales de Datos</h2>
        <p>
          Algunos de nuestros proveedores de servicios pueden estar ubicados
          fuera del Espacio Económico Europeo (EEE). En tales casos, nos
          aseguramos de que existan las garantías adecuadas para proteger tus
          datos, como las Cláusulas Contractuales Tipo aprobadas por la Comisión
          Europea o decisiones de adecuación.
        </p>

        <h2>7. Retención de Datos</h2>
        <p>
          Conservaremos tu información personal solo durante el tiempo necesario
          para los fines establecidos en esta política, para cumplir con
          nuestras obligaciones legales (ej: facturación), resolver disputas y
          hacer cumplir nuestros acuerdos. Los datos de tu negocio (pedidos,
          clientes, etc.) se conservarán mientras tu cuenta esté activa o según
          sea necesario para proporcionarte el Servicio. Puedes solicitar la
          eliminación de tu cuenta y datos asociados.
        </p>

        <h2>8. Tus Derechos de Protección de Datos (GDPR y LOPDGDD)</h2>
        <p>Tienes derecho a:</p>
        <ul>
          <li>Acceder a tus datos personales.</li>
          <li>Rectificar datos inexactos o incompletos.</li>
          <li>
            Solicitar la supresión (eliminación) de tus datos (&quot;derecho al
            olvido&quot;).
          </li>
          <li>Solicitar la limitación del tratamiento de tus datos.</li>
          <li>
            Oponerte al tratamiento de tus datos (ej: para marketing directo).
          </li>
          <li>Solicitar la portabilidad de tus datos.</li>
          <li>
            Retirar tu consentimiento en cualquier momento, sin que afecte a la
            licitud del tratamiento previo.
          </li>
          <li>
            Presentar una reclamación ante la Agencia Española de Protección de
            Datos (AEPD) si consideras que tus derechos han sido vulnerados.
          </li>
        </ul>
        <p>
          Puedes ejercer la mayoría de estos derechos a través de la
          configuración de tu cuenta en el Servicio (si aplica) o contactándonos
          directamente en {contactEmail}. Verificaremos tu identidad antes de
          procesar tu solicitud.
        </p>

        <h2>9. Seguridad de los Datos</h2>
        <p>
          Tomamos medidas de seguridad técnicas y organizativas razonables para
          proteger tu información personal contra el acceso no autorizado, la
          alteración, la divulgación o la destrucción. Sin embargo, ningún
          método de transmisión por Internet o almacenamiento electrónico es
          100% seguro.
        </p>

        <h2>10. Cookies</h2>
        <p>
          Utilizamos cookies y tecnologías similares. Para más información sobre
          cómo las usamos y tus opciones, consulta nuestra [Enlace a Política de
          Cookies - ¡DEBES CREARLA!].
        </p>

        <h2>11. Privacidad de los Niños</h2>
        <p>
          Nuestro Servicio no está dirigido a menores de [Indicar edad mínima,
          ej: 14 o 16 años según LOPDGDD/GDPR para consentimiento]. No
          recopilamos conscientemente información personal de menores de esa
          edad. Si descubrimos que lo hemos hecho, tomaremos medidas para
          eliminarla.
        </p>

        <h2>12. Cambios a esta Política de Privacidad</h2>
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. Te
          notificaremos cualquier cambio publicando la nueva política en esta
          página y actualizando la &quot;Fecha de Entrada en Vigor&quot;. Te
          recomendamos revisar esta política periódicamente.
        </p>

        <h2>13. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad, puedes
          contactarnos en: {contactEmail}.
        </p>
      </article>
    </div>
  );
}
