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
    }, 300);
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
            backgroundColor: "rgba(28, 25, 23, 0.4)",
            animation: isClosing
              ? "fadeOut 0.3s ease-out"
              : "fadeIn 0.3s ease-out",
          }}
        />

        {/* Panel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "300px",
            maxWidth: "85vw",
            backgroundColor: "#FAFAF8",
            boxShadow: "-8px 0 30px rgba(28, 25, 23, 0.1)",
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
              padding: "20px 24px",
              borderBottom: "1px solid #E7E5E4",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#1C1917",
              }}
            >
              Menú
            </span>
            <button
              onClick={handleClose}
              style={{
                padding: "8px",
                color: "#A8A29E",
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

          {/* Content */}
          <div
            style={{
              height: "calc(100% - 73px)",
              overflowY: "auto",
              padding: "24px",
            }}
          >
            {/* Links */}
            <div style={{ marginBottom: "24px" }}>
              {[
                { href: "#funciones", label: "Funciones" },
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
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#44403C",
                    textDecoration: "none",
                    borderRadius: "12px",
                    marginBottom: "4px",
                    transition: "all 0.2s ease",
                    animation: `slideUp 0.3s ease-out ${
                      index * 0.05
                    }s backwards`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F5F5F4";
                    e.currentTarget.style.color = "#E8943A";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#44403C";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#E7E5E4",
                marginBottom: "24px",
                animation: "slideUp 0.3s ease-out 0.25s backwards",
              }}
            />

            {/* Buttons */}
            <div>
              <Link
                href={`${appDomain}/empezar-prueba`}
                onClick={handleClose}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px 16px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "white",
                  backgroundColor: "#1C1917",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "8px",
                  marginBottom: "12px",
                  transition: "all 0.2s ease",
                  animation: "slideUp 0.3s ease-out 0.3s backwards",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                Prueba gratis 14 días
              </Link>

              <Link
                href={`${appDomain}/login`}
                onClick={handleClose}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "13px 16px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#44403C",
                  backgroundColor: "transparent",
                  border: "1.5px solid #E7E5E4",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  animation: "slideUp 0.3s ease-out 0.35s backwards",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F5F5F4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#44403C] hover:text-[#E8943A] transition-colors"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {mounted && menuContent && createPortal(menuContent, document.body)}
    </div>
  );
}
