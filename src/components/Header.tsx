"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_NAME } from "@/lib/company";
import { appleServices } from "@/lib/services";
import WhatsAppButton from "./WhatsAppButton";

const homeNav = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`z-50 w-full ${
        isHome
          ? "absolute left-0 right-0 top-0 bg-transparent"
          : "sticky top-0 border-b border-white/10 bg-nj-black/95 backdrop-blur-md"
      }`}
    >
      <div className="container-njcell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt={`${COMPANY_NAME} - Assistência técnica Apple em Sorocaba`}
              width={160}
              height={60}
              className="h-11 w-auto md:h-12"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {isHome ? (
              homeNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <>
                <Link
                  href="/"
                  className="text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                >
                  Início
                </Link>
                <Link
                  href="/#sobre"
                  className="text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                >
                  Sobre
                </Link>
                <Link
                  href="/#servicos"
                  className="text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                >
                  Serviços
                </Link>
                {appleServices.slice(0, 4).map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
                <Link
                  href="/contato"
                  className="text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                >
                  Contato
                </Link>
              </>
            )}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 py-4 md:hidden" aria-label="Menu mobile">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-2 py-2 font-bold text-white" onClick={() => setMenuOpen(false)}>
                Início
              </Link>
              <a href="/#sobre" className="px-2 py-2 text-white" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
              <a href="/#servicos" className="px-2 py-2 text-white" onClick={() => setMenuOpen(false)}>
                Serviços
              </a>
              {!isHome &&
                appleServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="px-2 py-2 text-sm text-white/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              <Link href="/contato" className="px-2 py-2 text-white" onClick={() => setMenuOpen(false)}>
                Contato
              </Link>
              <div className="px-2 pt-2">
                <WhatsAppButton label="Solicitar Orçamento" className="w-full text-sm" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
