"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_NAME, LOGO_HORIZONTAL, LOGO_ALT } from "@/lib/company";
import { sitePageGroups, siteMenuLabel } from "@/lib/site-nav";
import WhatsAppButton from "./WhatsAppButton";

const homeNav = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
];

function SitePagesMenu({
  onNavigate,
  className = "",
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`rounded-2xl border border-white/15 bg-nj-dark py-2 shadow-2xl ${className}`}
      role="menu"
    >
      {sitePageGroups.map((group) => (
        <div key={group.title} className="px-2 py-1">
          <p className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-nj-accent">
            {group.title}
          </p>
          <ul>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={onNavigate}
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-white/10 font-semibold text-white"
                        : "text-white/85 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const pagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pagesOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (pagesRef.current && !pagesRef.current.contains(event.target as Node)) {
        setPagesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setPagesOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [pagesOpen]);

  useEffect(() => {
    setPagesOpen(false);
    setMenuOpen(false);
    setMobilePagesOpen(false);
  }, [pathname]);

  const closeMobile = () => {
    setMenuOpen(false);
    setMobilePagesOpen(false);
  };

  return (
    <header
      className={`z-50 w-full ${
        isHome
          ? menuOpen
            ? "absolute left-0 right-0 top-0 border-b border-white/10 bg-nj-black"
            : "absolute left-0 right-0 top-0 bg-transparent"
          : "sticky top-0 border-b border-white/10 bg-nj-black/95 backdrop-blur-md"
      }`}
    >
      <div className="container-njcell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={LOGO_HORIZONTAL}
              alt={LOGO_ALT}
              width={320}
              height={213}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-6 lg:gap-8 md:flex"
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
              </>
            )}

            <div className="relative" ref={pagesRef}>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                onClick={() => setPagesOpen((open) => !open)}
                aria-expanded={pagesOpen}
                aria-haspopup="menu"
              >
                {siteMenuLabel}
                <svg
                  className={`h-4 w-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {pagesOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-72">
                  <SitePagesMenu onNavigate={() => setPagesOpen(false)} />
                </div>
              )}
            </div>

            <Link
              href="/contato"
              className="text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
            >
              Contato
            </Link>
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
          <nav
            className="border-t border-white/10 bg-nj-black py-4 md:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1">
              <Link href="/" className="px-2 py-2 font-bold text-white" onClick={closeMobile}>
                Início
              </Link>
              <a href="/#sobre" className="px-2 py-2 text-white" onClick={closeMobile}>
                Sobre
              </a>
              <a href="/#servicos" className="px-2 py-2 text-white" onClick={closeMobile}>
                Serviços
              </a>

              <button
                type="button"
                className="flex items-center justify-between px-2 py-2 text-left font-bold text-white"
                onClick={() => setMobilePagesOpen((open) => !open)}
                aria-expanded={mobilePagesOpen}
              >
                {siteMenuLabel}
                <svg
                  className={`h-4 w-4 transition-transform ${mobilePagesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobilePagesOpen && (
                <SitePagesMenu
                  className="mx-2 bg-nj-dark"
                  onNavigate={closeMobile}
                />
              )}

              <Link href="/contato" className="px-2 py-2 text-white" onClick={closeMobile}>
                Contato
              </Link>
              <div className="px-2 pt-2">
                <WhatsAppButton label="Solicitar Orçamento" className="w-full" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
