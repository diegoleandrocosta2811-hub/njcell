"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import SiteImage from "./SiteImage";
import { usePathname } from "next/navigation";
import { COMPANY_NAME, LOGO_HORIZONTAL, LOGO_ALT, LOGO_TITLE } from "@/lib/company";
import { sitePageGroups, siteMenuLabel } from "@/lib/site-nav";
import WhatsAppButton from "./WhatsAppButton";

const homeNav = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/servicos" },
];

function SitePagesMenu({
  id,
  onNavigate,
  className = "",
}: {
  id: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav
      id={id}
      aria-label="Páginas do site NJCELL"
      className={`rounded-2xl border border-white/15 bg-nj-dark py-2 shadow-2xl ${className}`}
    >
      {sitePageGroups.map((group) => (
        <div key={group.title} className="px-2 py-1">
          <h3 className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-nj-accent">
            {group.title}
          </h3>
          <ul>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
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
    </nav>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const pagesRef = useRef<HTMLDivElement>(null);
  const desktopMenuId = useId();
  const mobileMenuId = useId();
  const mobileNavId = useId();

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

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

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
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-md"
            aria-label={`${COMPANY_NAME} — Página inicial`}
          >
            <SiteImage
              src={LOGO_HORIZONTAL}
              alt=""
              imageTitle={LOGO_TITLE}
              width={320}
              height={213}
              className="h-12 w-auto md:h-14"
            />
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex lg:gap-8"
            aria-label="Navegação principal"
          >
            {isHome ? (
              homeNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <>
                <Link
                  href="/"
                  className="rounded-md text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                  aria-current={pathname === "/" ? "page" : undefined}
                >
                  Início
                </Link>
                <Link
                  href="/#sobre"
                  className="rounded-md text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                >
                  Sobre
                </Link>
                <Link
                  href="/servicos"
                  className="rounded-md text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
                  aria-current={pathname === "/servicos" ? "page" : undefined}
                >
                  Serviços
                </Link>
              </>
            )}

            <div className="relative" ref={pagesRef}>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
                onClick={() => setPagesOpen((open) => !open)}
                aria-expanded={pagesOpen}
                aria-controls={desktopMenuId}
                aria-haspopup="true"
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
                  <SitePagesMenu
                    id={desktopMenuId}
                    onNavigate={() => setPagesOpen(false)}
                  />
                </div>
              )}
            </div>

            <Link
              href="/contato"
              className="rounded-md text-sm font-bold uppercase tracking-wide text-white hover:text-nj-accent"
              aria-current={pathname === "/contato" ? "page" : undefined}
            >
              Contato
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls={mobileNavId}
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
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
            id={mobileNavId}
            className="border-t border-white/10 bg-nj-black py-4 md:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="rounded-md px-2 py-2 font-bold text-white"
                onClick={closeMobile}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Início
              </Link>
              <a href="/#sobre" className="rounded-md px-2 py-2 text-white" onClick={closeMobile}>
                Sobre
              </a>
              <Link
                href="/servicos"
                className="rounded-md px-2 py-2 text-white"
                onClick={closeMobile}
                aria-current={pathname === "/servicos" ? "page" : undefined}
              >
                Serviços
              </Link>

              <button
                type="button"
                className="flex min-h-11 items-center justify-between rounded-md px-2 py-2 text-left font-bold text-white"
                onClick={() => setMobilePagesOpen((open) => !open)}
                aria-expanded={mobilePagesOpen}
                aria-controls={mobileMenuId}
                aria-haspopup="true"
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
                  id={mobileMenuId}
                  className="mx-2 bg-nj-dark"
                  onNavigate={closeMobile}
                />
              )}

              <Link
                href="/contato"
                className="rounded-md px-2 py-2 text-white"
                onClick={closeMobile}
                aria-current={pathname === "/contato" ? "page" : undefined}
              >
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
