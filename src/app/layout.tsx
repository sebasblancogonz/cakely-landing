import { Suspense } from "react";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Loader2 } from "lucide-react";

export const metadata = {
  title: "Cakely – Gestión de pedidos para pastelerías",
  description:
    "Gestiona pedidos, clientes y recetas en tu pastelería sin complicaciones. Cakely te ayuda a organizar tu negocio de repostería de forma sencilla y profesional.",
  keywords: [
    "gestión pedidos pastelería",
    "software para pastelerías",
    "app para reposterías",
    "organizar pedidos tartas",
    "gestionar clientes pastelería",
    "agenda para pastelerías",
    "cakely app repostería",
  ],
  authors: [{ name: "Cakely", url: "https://cakely.es" }],
  creator: "Cakely",
  metadataBase: new URL("https://cakely.es"),
  openGraph: {
    title: "Cakely – Gestión de pedidos para pastelerías",
    description:
      "Organiza los pedidos de tu pastelería, lleva el control de tus clientes y haz crecer tu negocio de repostería con Cakely.",
    url: "https://cakely.es",
    siteName: "Cakely",
    images: [
      {
        url: "https://cakely.es/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Cakely – Gestión de pedidos para pastelerías",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cakely – Gestión de pedidos para pastelerías",
    description: "Organiza los pedidos de tu pastelería, lleva el control de tus clientes y haz crecer tu negocio de repostería con Cakely.",
    images: ["https://cakely.es/img/logo.png"],
    creator: "@cakely_app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen w-full flex-col">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
      <Analytics />
    </html>
  );
}
