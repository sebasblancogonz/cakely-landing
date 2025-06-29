import { Home } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Asegúrate de que la ruta a tus componentes sea correcta
import { Button } from "@/components/ui/button"; // Asegúrate de que la ruta a tus componentes sea correcta

export default const CookiePolicyPage = () => {
  const contactEmail = "contacto@cakely.es";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Política de Cookies
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Última actualización: 29 de junio de 2025
          </p>
        </div>

        <Card className="shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
          <CardContent className="p-8 md:p-10">
            {/* La clase `prose-h2:mt-12` aumenta el espacio entre secciones */}
            <article className="prose prose-slate prose-sm sm:prose-base max-w-none dark:prose-invert prose-h2:mt-12 prose-h2:first:mt-0 prose-code:bg-slate-100 prose-code:dark:bg-slate-800 prose-code:p-1 prose-code:rounded-md">
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Una cookie es un pequeño fichero de texto que se almacena en tu
                navegador cuando visitas casi cualquier página web. Su utilidad
                es que la web sea capaz de recordar tu visita cuando vuelvas a
                navegar por esa página. Las cookies suelen almacenar información
                de carácter técnico, preferencias personales, personalización de
                contenidos, estadísticas de uso, enlaces a redes sociales,
                acceso a cuentas de usuario, etc. El objetivo de la cookie es
                adaptar el contenido de la web a tu perfil y necesidades.
              </p>

              <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
              <p>
                En Cakely, utilizamos cookies propias y de terceros para
                distintos fines. A continuación, se detallan las categorías de
                cookies que usamos:
              </p>
              {/* La clase `space-y-2` añade espacio entre los elementos de la lista */}
              <ul className="space-y-2">
                <li>
                  <strong>Cookies Esenciales o Técnicas:</strong> Son
                  fundamentales para que puedas navegar por el sitio y utilizar
                  sus funciones. Sin estas cookies, los servicios que has
                  solicitado (como mantener tu sesión iniciada o gestionar tu
                  suscripción) no se pueden proporcionar. Estas cookies no
                  recopilan información sobre ti que pueda ser utilizada para
                  fines de marketing.
                </li>
                <li>
                  <strong>Cookies de Preferencias o Personalización:</strong>{" "}
                  Estas cookies permiten que el sitio recuerde la información
                  que cambia la forma en que la página se comporta o el aspecto
                  que tiene, como tu idioma preferido o la configuración de la
                  apariencia (ej. modo claro/oscuro). Perder la información
                  almacenada en una cookie de preferencias puede hacer que la
                  experiencia del sitio web sea menos funcional, pero no debe
                  impedir su funcionamiento.
                </li>
                <li>
                  <strong>Cookies de Análisis o Rendimiento:</strong> Nos ayudan
                  a entender cómo interactúan los visitantes con nuestro sitio
                  web. Recopilan información de forma anónima y la utilizan para
                  elaborar informes y ayudarnos a mejorar la plataforma. Por
                  ejemplo, nos permiten contar las visitas, identificar qué
                  páginas son más populares y analizar cómo navegan los usuarios
                  por el servicio.
                </li>
              </ul>

              <h2>3. Detalle de las Cookies Utilizadas</h2>
              <p>
                A continuación, te mostramos una tabla con las cookies que
                puedes encontrar en nuestro sitio:
              </p>

              {/* Contenedor de la tabla con bordes redondeados y borde general */}
              <div className="my-6 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden not-prose">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="p-4 text-left font-medium text-slate-700 dark:text-slate-300">
                        Cookie
                      </th>
                      <th className="p-4 text-left font-medium text-slate-700 dark:text-slate-300">
                        Proveedor
                      </th>
                      <th className="p-4 text-left font-medium text-slate-700 dark:text-slate-300">
                        Propósito
                      </th>
                      <th className="p-4 text-left font-medium text-slate-700 dark:text-slate-300">
                        Duración
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    <tr>
                      <td className="p-4">
                        <code className="bg-slate-100 dark:bg-slate-800 p-1 rounded-md">
                          auth.session
                        </code>
                      </td>
                      <td className="p-4">Propia (Cakely)</td>
                      <td className="p-4">
                        Esencial: Mantiene la sesión del usuario activa.
                      </td>
                      <td className="p-4">Sesión</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <code className="bg-slate-100 dark:bg-slate-800 p-1 rounded-md">
                          theme
                        </code>
                      </td>
                      <td className="p-4">Propia (Cakely)</td>
                      <td className="p-4">
                        Preferencia: Almacena el tema visual (claro/oscuro).
                      </td>
                      <td className="p-4">1 año</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <code className="bg-slate-100 dark:bg-slate-800 p-1 rounded-md">
                          _ga, _gid
                        </code>
                      </td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">
                        Análisis: Genera un ID de usuario único para
                        estadísticas.
                      </td>
                      <td className="p-4">2 años</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <code className="bg-slate-100 dark:bg-slate-800 p-1 rounded-md">
                          __stripe_mid
                        </code>
                      </td>
                      <td className="p-4">Stripe</td>
                      <td className="p-4">
                        Esencial: Prevención de fraude en el procesamiento de
                        pagos.
                      </td>
                      <td className="p-4">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm">
                *Esta lista es ejemplificativa y puede ser actualizada a medida
                que nuestros servicios evolucionen.
              </p>

              <h2>4. Cookies de Terceros</h2>
              <p>
                Además de nuestras propias cookies, también podemos utilizar
                varias cookies de terceros para informar sobre estadísticas de
                uso del servicio, procesar pagos y facilitar integraciones.
                Estos terceros, como Google (para Analytics y Auth), Stripe
                (para pagos) o Vercel (para analítica), tienen sus propias
                políticas de cookies y privacidad. Te recomendamos revisarlas.
              </p>

              <h2>5. ¿Cómo puedes gestionar o deshabilitar las cookies?</h2>
              <p>
                Tienes el derecho a elegir si aceptas o rechazas las cookies.
                Además del panel de consentimiento que te mostramos al visitar
                nuestro sitio por primera vez, puedes modificar las preferencias
                de cookies en la configuración de tu navegador en cualquier
                momento.
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2>6. Cambios en la Política de Cookies</h2>
              <p>
                Podemos actualizar esta Política de Cookies de vez en cuando. Te
                notificaremos cualquier cambio publicando la nueva política en
                esta página y actualizando la fecha de &quot;Última
                actualización&quot; en la parte superior.
              </p>

              <h2>7. Contacto</h2>
              <p>
                Si tienes alguna pregunta sobre nuestro uso de cookies, puedes
                contactarnos en:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400"
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
