import type { Metadata } from "next";
import Image from "next/image";
import {
  COMPANY_NAME,
  INSTAGRAM_URL,
  LOGO_SQUARE,
  LOGO_TITLE,
  WHATSAPP_ADS_URL,
} from "@/lib/company";
import "./ads.css";

const ADS_IPHONE_IMAGE = "/images/ads-iphone-ios.png";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} — Atendimento para iOS`,
  description:
    "Assistência técnica Apple em Sorocaba. Solicite seu orçamento pelo WhatsApp.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdsLandingPage() {
  return (
    <div className="ads-page">
      <header className="ads-header">
        <Image
          src={LOGO_SQUARE}
          alt={LOGO_TITLE}
          width={160}
          height={160}
          priority
          className="ads-header__logo"
        />
      </header>

      <main className="ads-main">
        <section className="ads-card" aria-labelledby="ads-heading">
          <div className="ads-card__media">
            <Image
              src={ADS_IPHONE_IMAGE}
              alt="Linha de iPhones atendidos pela NJCELL"
              width={900}
              height={760}
              priority
              unoptimized
              sizes="(max-width: 480px) 85vw, 360px"
              className="ads-card__phones"
            />
          </div>

          <div className="ads-card__body">
            <h1 id="ads-heading" className="ads-card__title">
              Atendimento para iOS
            </h1>

            <a
              href={WHATSAPP_ADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ads-cta"
            >
              <WhatsAppIcon />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="ads-footer">
        <Image
          src={LOGO_SQUARE}
          alt=""
          aria-hidden="true"
          width={140}
          height={140}
          className="ads-footer__logo"
        />

        <p className="ads-footer__copy">
          Copyright © {COMPANY_NAME} — Todos os direitos reservados.
        </p>

        <p className="ads-footer__legal">
          Termos de Uso | Políticas de Privacidade
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ads-footer__instagram"
          aria-label={`Instagram da ${COMPANY_NAME} (abre em nova janela)`}
        >
          <InstagramIcon />
        </a>
      </footer>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
