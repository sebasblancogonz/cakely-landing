import { Suspense } from "react";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Loader2 } from "lucide-react";

export const metadata = {
  title: "Cakely – CRM para Repostería",
  description:
    "Cakely es un software de gestión de pedidos y clientes para pastelerías modernas. Organiza tu negocio de repostería de forma fácil y eficiente.",
  keywords: [
    "CRM para repostería",
    "gestión de pedidos",
    "software pastelería",
    "CRM panaderías",
    "cakely",
    "gestión clientes repostería",
    "CRM para negocios de tartas y galletas",
  ],
  authors: [{ name: "Cakely", url: "https://cakely.es" }],
  creator: "Cakely",
  metadataBase: new URL("https://cakely.es"),
  openGraph: {
    title: "Cakely – CRM para Repostería",
    description:
      "Gestiona clientes y pedidos de tu pastelería con facilidad usando Cakely.",
    url: "https://cakely.es",
    siteName: "Cakely",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Cakely – CRM para repostería",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cakely – CRM para Repostería",
    description: "Simplifica la gestión de tu pastelería con Cakely.",
    images: ["/logo.webp"],
    creator: "@cakelyapp",
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
