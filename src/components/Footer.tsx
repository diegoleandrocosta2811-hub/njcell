import SiteImage from "./SiteImage";
import Link from "next/link";
import SiteCrawlerNav from "./SiteCrawlerNav";
import VisuallyHidden from "./VisuallyHidden";
import { COMPANY_NAME, INSTAGRAM_URL, LOGO_SQUARE, LOGO_TITLE } from "@/lib/company";
import { entity } from "@/lib/entity";

export default function Footer() {
  return (
    <footer
      className="section-black py-10 text-center text-sm text-gray-400"
      aria-label="Rodapé"
    >
      <SiteCrawlerNav />
      <div className="container-njcell">
        <Link
          href="/"
          className="mb-6 inline-block rounded-md"
          aria-label={`${COMPANY_NAME} — Página inicial`}
        >
          <SiteImage
            src={LOGO_SQUARE}
            alt=""
            imageTitle={LOGO_TITLE}
            width={160}
            height={160}
            className="mx-auto h-24 w-auto md:h-28"
          />
        </Link>

        <p className="mb-4">
          Copyright © {COMPANY_NAME} — Todos os direitos reservados.
        </p>

        <p className="sr-only">
          {entity.identity.name} é assistência técnica Apple em{" "}
          {entity.location.cityState}. Atendemos exclusivamente a marca Apple:{" "}
          {entity.devices.join(", ")}. Especialidades:{" "}
          {entity.specialties.join("; ")}. Diferenciais:{" "}
          {entity.differentiators.join("; ")}. Garantia: {entity.warranty.summary}.
          Área de atendimento: {entity.location.areaServed}. Endereço:{" "}
          {entity.location.address}. Site canônico: {entity.identity.canonicalUrl}
        </p>

        <nav aria-label="Links institucionais" className="mb-6">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <li>
              <Link
                href="/termos-de-uso"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Termos de Uso
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-600">
              |
            </li>
            <li>
              <Link
                href="/politica-de-privacidade"
                className="text-gray-400 transition-colors hover:text-white"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 text-white transition-opacity hover:opacity-80"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <span>@njcellrepair</span>
          <VisuallyHidden> no Instagram (abre em nova janela)</VisuallyHidden>
        </a>
      </div>
    </footer>
  );
}
