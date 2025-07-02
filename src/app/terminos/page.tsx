import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Cakely",
  description: "Términos y condiciones de uso de nuestro servicio.",
};

export default function TermsOfServicePage() {
  const contactEmail = "contacto@cakely.es";
  const effectiveDate = "5 de Mayo de 2025";
  const pricingUrl = "/#precios";
  const privacyPolicyUrl = "/privacidad";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Fecha de Entrada en Vigor: {effectiveDate}
          </p>
        </div>

        <Card className="shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
          <CardContent className="p-8 md:p-10">
            <article className="prose prose-slate prose-sm sm:prose-base max-w-none dark:prose-invert prose-h2:mt-12 prose-h2:first:mt-0 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-emerald-500">
              <h2>1. Aceptación de los Términos</h2>
              <p>
                Bienvenido/a a Cakely (el &quot;Servicio&quot;). Estos Términos
                y Condiciones (&quot;Términos&quot;) rigen tu acceso y uso del
                Servicio. Al registrarte, acceder o utilizar nuestro Servicio,
                confirmas que has leído, entendido y aceptado estar vinculado
                por estos Términos y nuestra{" "}
                <Link href={privacyPolicyUrl}>Política de Privacidad</Link>. Si
                no estás de acuerdo con alguno de estos términos, no debes
                utilizar el Servicio.
              </p>

              <h2>2. Descripción del Servicio</h2>
              <p>
                Cakely es una plataforma de software como servicio (SaaS)
                diseñada para ayudar a pastelerías, obradores y pequeños
                negocios de comida a gestionar pedidos, clientes, recetas,
                costes, colaboradores e integración con calendarios. Las
                características y funcionalidades específicas disponibles pueden
                depender del plan de suscripción contratado.
              </p>

              <h2>3. Cuentas de Usuario y Negocio</h2>
              <ol className="space-y-4">
                <li>
                  <strong>Registro:</strong> Para usar la mayoría de las
                  funcionalidades, debes registrar una cuenta de usuario y, si
                  aplica, asociarla a una cuenta de Negocio. Te comprometes a
                  proporcionar información veraz, actual y completa durante el
                  registro y a mantenerla actualizada.
                </li>
                <li>
                  <strong>Responsabilidad de la Cuenta:</strong> Eres
                  responsable de mantener la confidencialidad de tu contraseña y
                  cuenta, y de todas las actividades que ocurran bajo tu cuenta.
                  Notifícanos inmediatamente sobre cualquier uso no autorizado.
                </li>
                <li>
                  <strong>Cuentas de Negocio y Roles:</strong> El Servicio opera
                  bajo un modelo de negocio. La persona que crea el negocio o es
                  designada como tal actúa como &quot;Propietario&quot; (Owner).
                  El Propietario puede invitar a otros usuarios como
                  &quot;Colaboradores&quot; (ej: Admin, Editor) asignándoles
                  roles con diferentes niveles de acceso y permisos. El
                  Propietario del Negocio es responsable final de la gestión de
                  sus Colaboradores y del uso que estos hagan del Servicio.
                </li>
                <li>
                  <strong>Elegibilidad:</strong> Debes tener la edad legal y la
                  capacidad para formar un contrato vinculante para usar el
                  Servicio.
                </li>
              </ol>

              <h2>4. Suscripciones, Pagos y Pruebas</h2>
              <ol className="space-y-4">
                <li>
                  <strong>Planes:</strong> Ofrecemos diferentes planes de
                  suscripción con distintas características y límites,
                  detallados en nuestra página de precios (
                  <Link href={pricingUrl}>ver planes</Link>).
                </li>
                <li>
                  <strong>Pago:</strong> Las tarifas se facturarán de forma
                  recurrente (mensual o anual) por adelantado a través de
                  nuestra pasarela de pago segura (Stripe). Al suscribirte,
                  autorizas estos cargos recurrentes.
                </li>
                <li>
                  <strong>Impuestos:</strong> Todos los precios se muestran con
                  IVA incluido. Eres responsable de cualquier otro impuesto
                  aplicable.
                </li>
                <li>
                  <strong>Renovación Automática:</strong> Tu suscripción se
                  renovará automáticamente al final de cada ciclo de
                  facturación, a menos que la canceles antes de la fecha de
                  renovación a través de tu sección de Ajustes.
                </li>
                <li>
                  <strong>Prueba Gratuita:</strong> Podemos ofrecer periodos de
                  prueba gratuita. Al finalizar la prueba, se te cobrará
                  automáticamente la tarifa del plan seleccionado, a menos que
                  canceles antes.
                </li>
                <li>
                  <strong>Cambios de Precio:</strong> Nos reservamos el derecho
                  de modificar las tarifas de suscripción. Te notificaremos con
                  30 días de antelación cualquier cambio de precio, que aplicará
                  al siguiente ciclo de renovación.
                </li>
                <li>
                  <strong>Reembolsos:</strong> Generalmente, los pagos no son
                  reembolsables, incluyendo los periodos parciales, salvo que la
                  ley aplicable indique lo contrario.
                </li>
              </ol>

              <h2>5. Licencia de Uso</h2>
              <p>
                Sujeto a tu cumplimiento de estos Términos y al pago de las
                tarifas aplicables, te otorgamos una licencia limitada, no
                exclusiva, intransferible y revocable para acceder y utilizar el
                Servicio para tus fines comerciales internos durante el periodo
                de suscripción activo.
              </p>

              <h2>6. Contenido y Datos del Usuario</h2>
              <ol className="space-y-4">
                <li>
                  <strong>Propiedad:</strong> Tú retienes la propiedad de todos
                  los datos e información que introduces en el Servicio (datos
                  de clientes, recetas, pedidos, etc.) (&quot;Contenido del
                  Usuario&quot;).
                </li>
                <li>
                  <strong>Licencia para Operar:</strong> Nos otorgas una
                  licencia mundial, libre de regalías y no exclusiva para usar,
                  reproducir y modificar tu Contenido del Usuario únicamente con
                  el propósito de operar, mantener y mejorar el Servicio para
                  ti.
                </li>
                <li>
                  <strong>Responsabilidad:</strong> Eres el único responsable de
                  la exactitud y legalidad de tu Contenido del Usuario.
                  Garantizas que tienes los derechos necesarios para cargar
                  dichos datos, especialmente si incluyen información personal
                  de terceros (tus clientes).
                </li>
              </ol>

              <h2>7. Uso Aceptable</h2>
              <p>
                Te comprometes a no utilizar el Servicio para ningún propósito
                ilegal o prohibido por estos Términos. Esto incluye, entre
                otros:
              </p>
              <ul className="space-y-2">
                <li>Violar leyes o regulaciones aplicables.</li>
                <li>
                  Infringir derechos de propiedad intelectual de terceros.
                </li>
                <li>Transmitir virus, malware o código dañino.</li>
                <li>
                  Intentar obtener acceso no autorizado a nuestros sistemas.
                </li>
                <li>
                  Realizar actividades que interfieran con la infraestructura.
                </li>
              </ul>

              <h2>8. Propiedad Intelectual</h2>
              <p>
                El Servicio, incluyendo su software, diseño, interfaz, logos y
                marcas (ej: Cakely), es de nuestra propiedad exclusiva y está
                protegido por leyes de propiedad intelectual.
              </p>

              <h2>9. Terminación</h2>
              <ol className="space-y-4">
                <li>
                  <strong>Por el Usuario:</strong> Puedes cancelar tu
                  suscripción y/o eliminar tu cuenta en cualquier momento a
                  través de la sección de Ajustes.
                </li>
                <li>
                  <strong>Por Nosotros:</strong> Podemos suspender o terminar tu
                  acceso si incumples gravemente estos Términos, no pagas las
                  tarifas, o si tu uso supone un riesgo de seguridad o legal.
                </li>
                <li>
                  <strong>Efectos:</strong> Tras la terminación, tu licencia de
                  uso finaliza. Nos reservamos el derecho de eliminar tu
                  Contenido del Usuario después de un periodo razonable, de
                  acuerdo con nuestra Política de Privacidad.
                </li>
              </ol>

              <h2>
                10. Exclusión de Garantías y Limitación de Responsabilidad
              </h2>
              <p>
                El Servicio se proporciona &quot;TAL CUAL&quot;, sin garantías
                de ningún tipo. En la máxima medida permitida por la ley, Cakely
                Solutions S.L. no será responsable por ningún daño indirecto,
                incidental o consecuente derivado del uso del Servicio.
              </p>

              <h2>11. Modificaciones de los Términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos. Te
                notificaremos los cambios materiales con una antelación
                razonable. El uso continuado del Servicio después de los cambios
                constituirá tu aceptación de los mismos.
              </p>

              <h2>12. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos Términos se regirán por la legislación española. Cualquier
                disputa estará sujeta a la jurisdicción exclusiva de los
                tribunales de la ciudad de Madrid, España.
              </p>

              <h2>13. Contacto</h2>
              <p>
                Si tienes alguna pregunta sobre estos Términos, contáctanos en:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  {contactEmail}
                </a>
                .
              </p>
            </article>
          </CardContent>
          <CardFooter className="p-8 pt-0">
            <div className="w-full flex justify-center pt-8 border-t border-slate-200 dark:border-slate-800">
              <Button
                variant="outline"
                asChild
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600/40 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Volver a la Página Principal
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
