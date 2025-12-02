"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || "https://app.cakely.es";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Duración de la animación
  };

  const menuContent =
    (isOpen || isClosing) && mounted ? (
      <div style={{ position: "fixed", inset: 0, zIndex: 99999 }}>
        {/* Overlay */}
        <div
          onClick={handleClose}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            animation: isClosing
              ? "fadeOut 0.3s ease-out"
              : "fadeIn 0.3s ease-out",
          }}
        />

        {/* Panel del menú */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "280px",
            maxWidth: "85vw",
            backgroundColor: "white",
            boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.15)",
            animation: isClosing
              ? "slideOutRight 0.3s ease-out"
              : "slideInRight 0.3s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              Menú
            </span>
            <button
              onClick={handleClose}
              style={{
                padding: "8px",
                color: "#6b7280",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Contenido scrolleable */}
          <div
            style={{
              height: "calc(100% - 73px)",
              overflowY: "auto",
              padding: "20px",
            }}
          >
            {/* Links */}
            <div style={{ marginBottom: "24px" }}>
              {[
                { href: "#features", label: "Características" },
                { href: "#benefits", label: "Beneficios" },
                { href: "#precios", label: "Precios" },
                { href: "/blog", label: "Blog" },
                { href: "#faq", label: "FAQ" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                  style={{
                    display: "block",
                    padding: "14px 16px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#374151",
                    textDecoration: "none",
                    borderRadius: "8px",
                    marginBottom: "6px",
                    transition: "all 0.2s ease",
                    animation: `slideUp 0.3s ease-out ${
                      index * 0.05
                    }s backwards`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0fdf4";
                    e.currentTarget.style.color = "#059669";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#374151";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Separador */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#e5e7eb",
                marginBottom: "24px",
                animation: "slideUp 0.3s ease-out 0.25s backwards",
              }}
            />

            {/* Botones */}
            <div>
              <Link
                href={`${appDomain}/login`}
                onClick={handleClose}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px 16px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  backgroundColor: "#059669",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  transition: "all 0.2s ease",
                  animation: "slideUp 0.3s ease-out 0.3s backwards",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#047857";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#059669";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Iniciar sesión
              </Link>

              <Link
                href={`${appDomain}/registro`}
                onClick={handleClose}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "13px 16px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#059669",
                  backgroundColor: "white",
                  border: "2px solid #059669",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "12px",
                  transition: "all 0.2s ease",
                  animation: "slideUp 0.3s ease-out 0.35s backwards",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f0fdf4";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Crear cuenta gratis
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Estilos de animación */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Portal para el menú */}
      {mounted && menuContent && createPortal(menuContent, document.body)}
    </div>
  );
}
