import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/landing-data";

export function Footer() {
  return (
    <footer className="py-12 bg-[#1C1917] border-t border-white/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/img/logo-white.webp"
                alt="Cakely"
                width={70}
                height={70}
              />
            </div>
            <p className="text-sm text-[#A8A29E] mt-3">
              Software de gestión para pastelerías artesanales.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Producto</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.producto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Contacto</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.contacto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8A29E] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#A8A29E]">&copy; 2026 Cakely</span>
            <span className="text-sm text-[#A8A29E]">Hecho en España</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
