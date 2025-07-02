import React from "react";
import { Mail, Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

const appName = "Cakely";
const contactEmail = "contacto@cakely.es";

export const metadata: Metadata = {
  title: `Contacto - ${appName}`,
  description: `Ponte en contacto con el equipo de ${appName} para preguntas, soporte o feedback.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Contacta con Nosotros
          </h1>
          <p className="text-slate-600">
            Estamos aquí para ayudarte con todas tus necesidades
          </p>
        </div>

        <Card className="shadow-sm border border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">
              ¿Necesitas Ayuda o Tienes Preguntas?
            </CardTitle>
            <CardDescription>
              Estamos aquí para ayudarte. Utiliza la siguiente información para
              ponerte en contacto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">
                  Correo Electrónico
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  La forma recomendada para soporte y consultas generales.
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center px-3 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-md hover:bg-emerald-600 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600">
                Normalmente respondemos a los correos electrónicos en 1-2 días
                laborables.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                asChild
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Volver a la Página Principal
                </Link>
              </Button>
            </div>

            {/* Placeholder para Futuro Formulario */}
            {/*
             <div className="pt-6 border-t border-slate-200">
                 <h3 className="font-semibold mb-2 text-slate-800">O envíanos un mensaje:</h3>
                 // Aquí iría un <ContactForm />
                 <p className="text-sm text-slate-500">(Formulario no disponible actualmente)</p>
             </div>
             */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
