"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa - solo visible en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
        aria-label="Abrir menú"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú móvil */}
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <div
            className="fixed inset-0 top-[72px] bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menú deslizante */}
          <div className="fixed right-0 top-[72px] bottom-0 w-64 bg-white z-50 md:hidden shadow-2xl">
            <nav className="flex flex-col p-6 gap-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Inicio
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                Blog
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
