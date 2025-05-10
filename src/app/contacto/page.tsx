import { Metadata } from "next";
import Link from "next/link";
import { Mail, Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const appName = "Cakely";
const contactEmail = "contacto@cakely.es";
export const metadata: Metadata = {
  title: `Contacto - ${appName}`,
  description: `Ponte en contacto con el equipo de ${appName} para preguntas, soporte o feedback.`,
};

export default function ContactPage() {
  return (
    <div className='w-full h-lvh bg-[url("/img/background.svg")] bg-cover'>
      <div className="container mx-auto max-w-3xl px-4 py-10 md:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-8 sm:text-4xl lg:mb-12">
          Contacta con Nosotros
        </h1>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>¿Necesitas Ayuda o Tienes Preguntas?</CardTitle>
            <CardDescription>
              Estamos aquí para ayudarte. Utiliza la siguiente información para
              ponerte en contacto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Correo Electrónico</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  La forma recomendada para soporte y consultas generales.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm font-medium text-primary hover:underline break-all"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <p className="text-sm text-center text-muted-foreground pt-4 border-t">
              Normalmente respondemos a los correos electrónicos en 1-2 días
              laborables.
            </p>
            <div className="flex justify-center pt-6 border-t mt-6">
              <Button variant="outline" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Volver a la Página Principal
                </Link>
              </Button>
            </div>
            {/* Placeholder para Futuro Formulario */}
            {/*
             <div className="pt-4 border-t">
                 <h3 className="font-semibold mb-2">O envíanos un mensaje:</h3>
                 // Aquí iría un <ContactForm />
                 <p className="text-sm text-muted-foreground">(Formulario no disponible actualmente)</p>
             </div>
             */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
