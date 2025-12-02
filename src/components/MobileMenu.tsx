"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || "https://app.cakely.es";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa - solo visible en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil */}
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <div
            className="fixed inset-0 top-[72px] bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menú deslizante */}
          <div className="fixed right-0 top-[72px] bottom-0 w-72 bg-white z-50 shadow-2xl overflow-y-auto">
            <nav className="flex flex-col p-6 gap-1">
              <Link
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Características
              </Link>
              <Link
                href="#benefits"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Beneficios
              </Link>
              <Link
                href="#precios"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Precios
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Blog
              </Link>
              <Link
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                FAQ
              </Link>
              
              {/* Separador */}
              <div className="border-t border-gray-200 my-4"></div>
              
              {/* Botón de iniciar sesión */}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 text-base font-semibold rounded-xl"
              >
                <Link href={`${appDomain}/login`} onClick={() => setIsOpen(false)}>
                  Iniciar sesión
                </Link>
              </Button>
              
              {/* Botón de registro */}
              <Button
                asChild
                variant="outline"
                className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 text-base font-semibold rounded-xl mt-2"
              >
                <Link href={`${appDomain}/registro`} onClick={() => setIsOpen(false)}>
                  Crear cuenta gratis
                </Link>
              </Button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
