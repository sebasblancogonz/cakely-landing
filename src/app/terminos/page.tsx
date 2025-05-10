import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Cakely",
  description: "Términos y condiciones de uso de nuestro servicio.",
};

export default function TermsOfServicePage() {
  const appName = "Cakely";
  const companyName = "Cakely";
  const contactEmail = "contacto@cakely.es";
  const effectiveDate = "5 de Mayo de 2025";
  const jurisdictionCity = "[Ciudad para Jurisdicción, ej: Madrid]";
  const pricingUrl = "/#precios";
  const privacyPolicyUrl = "/privacidad";

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
      <article className="prose prose-sm sm:prose-base lg:prose-lg prose-blue max-w-none dark:prose-invert">
        <h1>Términos y Condiciones de Uso</h1>
        <p>
          <strong>Fecha de Entrada en Vigor:</strong> {effectiveDate}
        </p>

        <h2>1. Aceptación de los Términos</h2>
        <p>
          Bienvenido/a a {appName} (el &quot;Servicio&quot;), operado por{" "}
          {companyName} (&quot;Nosotros&quot;). Estos Términos y Condiciones
          (&quot;Términos&quot;) rigen tu acceso y uso del Servicio. Al
          registrarte, acceder o utilizar nuestro Servicio, confirmas que has
          leído, entendido y aceptado estar vinculado por estos Términos y
          nuestra <Link href={privacyPolicyUrl}>Política de Privacidad</Link>.
          Si no estás de acuerdo con alguno de estos términos, no debes utilizar
          el Servicio.
        </p>

        <h2>2. Descripción del Servicio</h2>
        <p>
          {appName} es una plataforma de software como servicio (SaaS) diseñada
          para ayudar a [tu público objetivo, ej: pastelerías, obradores,
          pequeños negocios de comida] a gestionar [funciones principales, ej:
          pedidos, clientes, recetas, costes, colaboradores e integración con
          calendarios]. Las características y funcionalidades específicas
          disponibles pueden depender del plan de suscripción contratado.
        </p>

        <h2>3. Cuentas de Usuario y Negocio</h2>
        <ol>
          <li>
            <strong>Registro:</strong> Para usar la mayoría de las
            funcionalidades, debes registrar una cuenta de usuario y, si aplica,
            asociarla a una cuenta de Negocio. Te comprometes a proporcionar
            información veraz, actual y completa durante el registro y a
            mantenerla actualizada.
          </li>
          <li>
            <strong>Responsabilidad de la Cuenta:</strong> Eres responsable de
            mantener la confidencialidad de tu contraseña y cuenta, y de todas
            las actividades que ocurran bajo tu cuenta. Notifícanos
            inmediatamente sobre cualquier uso no autorizado.
          </li>
          <li>
            <strong>Cuentas de Negocio y Roles:</strong> El Servicio opera bajo
            un modelo de negocio. La persona que crea el negocio o es designada
            como tal actúa como &quot;Propietario&quot; (Owner). El Propietario
            puede invitar a otros usuarios como &quot;Colaboradores&quot; (ej:
            Admin, Editor) asignándoles roles con diferentes niveles de acceso y
            permisos, según se describa en la documentación o interfaz del
            Servicio. El Propietario del Negocio es responsable final de la
            gestión de sus Colaboradores y del uso que estos hagan del Servicio.
          </li>
          <li>
            <strong>Elegibilidad:</strong> Debes tener la edad legal y la
            capacidad para formar un contrato vinculante para usar el Servicio.
          </li>
        </ol>

        <h2>4. Suscripciones, Pagos y Pruebas</h2>
        <ol>
          <li>
            <strong>Planes:</strong> Ofrecemos diferentes planes de suscripción
            con distintas características y límites, detallados en nuestra
            página de precios ([<Link href={pricingUrl}>ver planes</Link>]).
          </li>
          <li>
            <strong>Pago:</strong> Las tarifas se facturarán de forma recurrente
            (mensual o anual) por adelantado a través de nuestra pasarela de
            pago segura ([Menciona Stripe/Paddle/LemonSqueezy]). Al suscribirte,
            autorizas estos cargos recurrentes.
          </li>
          <li>
            <strong>Impuestos:</strong> Todos los precios se muestran [Indica si
            con o sin IVA, ej: con IVA incluido]. Eres responsable de cualquier
            otro impuesto aplicable.
          </li>
          <li>
            <strong>Renovación Automática:</strong> Tu suscripción se renovará
            automáticamente al final de cada ciclo de facturación, a menos que
            la canceles antes de la fecha de renovación a través de [Indica
            cómo: ej: del portal de cliente de Stripe, tu sección de Ajustes].
          </li>
          <li>
            <strong>Prueba Gratuita:</strong> Podemos ofrecer periodos de prueba
            gratuita. Al finalizar la prueba, se te cobrará automáticamente la
            tarifa del plan seleccionado, a menos que canceles antes.
          </li>
          <li>
            <strong>Cambios de Precio:</strong> Nos reservamos el derecho de
            modificar las tarifas de suscripción. Te notificaremos con
            antelación razonable (ej: 30 días) cualquier cambio de precio, que
            aplicará al siguiente ciclo de renovación.
          </li>
          <li>
            <strong>Reembolsos:</strong> Generalmente, los pagos no son
            reembolsables, incluyendo los periodos parciales. Consulta
            excepciones según la ley aplicable.
          </li>
        </ol>

        <h2>5. Licencia de Uso</h2>
        <p>
          Sujeto a tu cumplimiento de estos Términos y al pago de las tarifas
          aplicables, te otorgamos una licencia limitada, no exclusiva,
          intransferible y revocable para acceder y utilizar el Servicio para
          tus fines comerciales internos durante el periodo de suscripción
          activo.
        </p>

        <h2>6. Contenido y Datos del Usuario</h2>
        <ol>
          <li>
            <strong>Propiedad:</strong> Tú retienes la propiedad de todos los
            datos e información que introduces en el Servicio (datos de
            clientes, recetas, pedidos, etc.) (&quot;Contenido del
            Usuario&quot;).
          </li>
          <li>
            <strong>Licencia para Operar:</strong> Nos otorgas una licencia
            mundial, libre de regalías y no exclusiva para usar, reproducir,
            modificar (ej: para formato), distribuir y mostrar tu Contenido del
            Usuario únicamente con el propósito de operar, mantener y mejorar el
            Servicio para ti y tus colaboradores autorizados.
          </li>
          <li>
            <strong>Responsabilidad:</strong> Eres el único responsable de la
            exactitud, legalidad y adecuación de tu Contenido del Usuario.
            Garantizas que tienes los derechos necesarios para cargar y procesar
            dichos datos, especialmente si incluyen información personal de
            terceros (tus clientes).
          </li>
          <li>
            <strong>Privacidad:</strong> El tratamiento de los datos personales
            incluidos en tu Contenido del Usuario se rige por nuestra{" "}
            <Link href={privacyPolicyUrl}>Política de Privacidad</Link>.
          </li>
        </ol>

        <h2>7. Uso Aceptable</h2>
        <p>
          Te comprometes a no utilizar el Servicio para ningún propósito ilegal
          o prohibido por estos Términos. Esto incluye, entre otros:
        </p>
        <ul>
          <li>Violar leyes o regulaciones aplicables.</li>
          <li>Infringir derechos de propiedad intelectual de terceros.</li>
          <li>Transmitir virus, malware o código dañino.</li>
          <li>
            Intentar obtener acceso no autorizado a nuestros sistemas o cuentas
            de otros usuarios.
          </li>
          <li>
            Realizar actividades que sobrecarguen o interfieran con la
            infraestructura del Servicio.
          </li>
          <li>Usar el Servicio para enviar spam o correo no solicitado.</li>
        </ul>

        <h2>8. Propiedad Intelectual</h2>
        <p>
          El Servicio, incluyendo su software, diseño, interfaz, textos,
          gráficos, logos, marcas (ej: {appName}) y todo el contenido
          proporcionado por Nosotros, es de nuestra propiedad exclusiva o de
          nuestros licenciantes y está protegido por leyes de propiedad
          intelectual e industrial. La licencia de uso otorgada no te transfiere
          ningún derecho de propiedad.
        </p>

        <h2>9. Servicios de Terceros</h2>
        <p>
          El Servicio puede integrarse o depender de servicios de terceros (ej:
          Google Calendar, ImageKit, Stripe, proveedores de hosting). No somos
          responsables de la disponibilidad, funcionalidad o políticas de
          privacidad de estos servicios de terceros. Tu uso de dichos servicios
          se rige por sus propios términos y condiciones.
        </p>

        <h2>10. Terminación</h2>
        <ol>
          <li>
            <strong>Por el Usuario:</strong> Puedes cancelar tu suscripción y/o
            eliminar tu cuenta en cualquier momento a través de [Indica cómo:
            ej: la sección de Ajustes o contactándonos]. La cancelación de la
            suscripción suele ser efectiva al final del periodo de facturación
            actual.
          </li>
          <li>
            <strong>Por Nosotros:</strong> Podemos suspender o terminar tu
            acceso al Servicio (previo aviso si es razonable) si: (a) incumples
            grave o repetidamente estos Términos, (b) no pagas las tarifas de
            suscripción aplicables después de un periodo de gracia, (c) tu uso
            del Servicio supone un riesgo de seguridad o legal, (d) estamos
            obligados por ley, o (e) decidimos discontinuar el Servicio (con
            aviso previo).
          </li>
          <li>
            <strong>Efectos:</strong> Tras la terminación, tu licencia de uso
            finaliza. Podrás tener un periodo limitado para exportar tu
            Contenido del Usuario (especifícalo si lo ofreces). Nos reservamos
            el derecho de eliminar tu Contenido del Usuario después de un
            periodo razonable tras la terminación, de acuerdo con nuestra
            Política de Privacidad y la ley.
          </li>
        </ol>

        <h2>11. Exclusión de Garantías</h2>
        <p>
          El Servicio se proporciona &quot;TAL CUAL&quot; y &quot;SEGÚN
          DISPONIBILIDAD&quot;, sin garantías de ningún tipo, ya sean expresas o
          implícitas. No garantizamos que el Servicio sea ininterrumpido,
          seguro, libre de errores o que satisfaga todas tus necesidades
          específicas.
        </p>

        <h2>12. Limitación de Responsabilidad</h2>
        <p>
          En la máxima medida permitida por la ley aplicable, {companyName} (y
          sus afiliados, directores, empleados, agentes) no será responsable por
          ningún daño indirecto, incidental, especial, consecuente o punitivo,
          incluyendo, entre otros, pérdida de beneficios, datos, uso, fondo de
          comercio u otras pérdidas intangibles, resultantes de (i) tu acceso o
          uso o incapacidad de acceder o usar el Servicio; (ii) cualquier
          conducta o contenido de terceros en el Servicio; (iii) cualquier
          contenido obtenido del Servicio; y (iv) acceso no autorizado, uso o
          alteración de tus transmisiones o contenido, ya sea basado en
          garantía, contrato, agravio (incluyendo negligencia) o cualquier otra
          teoría legal. [CONSULTA LEGALMENTE EL LÍMITE MÁXIMO DE RESPONSABILIDAD
          DIRECTA PERMITIDO].
        </p>

        <h2>13. Indemnización</h2>
        <p>
          Aceptas defender, indemnizar y eximir de responsabilidad a{" "}
          {companyName} y sus licenciatarios y licenciantes, y sus empleados,
          contratistas, agentes, funcionarios y directores, de y contra
          cualquier reclamación, daño, obligación, pérdida, responsabilidad,
          costo o deuda, y gastos (incluidos, entre otros, los honorarios de
          abogados), resultantes o derivados de a) tu uso y acceso al Servicio,
          por ti o cualquier persona que use tu cuenta y contraseña; b) un
          incumplimiento de estos Términos, o c) Contenido del Usuario publicado
          en el Servicio.
        </p>

        <h2>14. Modificaciones de los Términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos Términos en cualquier
          momento. Te notificaremos los cambios materiales publicando los nuevos
          términos en el Servicio o enviándote una notificación por correo
          electrónico con una antelación razonable (ej: 15-30 días). El uso
          continuado del Servicio después de la fecha de entrada en vigor de los
          cambios constituirá tu aceptación de los mismos.
        </p>

        <h2>15. Ley Aplicable y Jurisdicción</h2>
        <p>
          Estos Términos se regirán e interpretarán de acuerdo con la
          legislación española. Cualquier disputa que surja en relación con
          estos Términos estará sujeta a la jurisdicción exclusiva de los
          tribunales de la ciudad de [{jurisdictionCity}], España, renunciando a
          cualquier otro fuero que pudiera corresponder.
        </p>

        <h2>16. Varios</h2>
        <p>
          Estos Términos (junto con la Política de Privacidad y cualquier otro
          acuerdo legal publicado) constituyen el acuerdo completo entre tú y
          nosotros con respecto al Servicio. Si alguna disposición de estos
          Términos es considerada inválida por un tribunal, las disposiciones
          restantes permanecerán en pleno vigor y efecto. Nuestra incapacidad
          para hacer cumplir cualquier derecho o disposición no se considerará
          una renuncia a esos derechos.
        </p>

        <h2>17. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre estos Términos y Condiciones, por
          favor contáctanos en: {contactEmail}.
        </p>
      </article>
    </div>
  );
}
