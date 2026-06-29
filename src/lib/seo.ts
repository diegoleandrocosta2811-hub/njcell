import type { Metadata, Viewport } from "next";
import {
  CITY,
  COMPANY_NAME,
  LOGO_SQUARE,
  SITE_URL,
} from "./company";
import type { Service } from "./services";

export type { FaqItem, BreadcrumbSchemaItem } from "./schema";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
};

export const SITE_METADATA_BASE = new URL(SITE_URL);

const DEFAULT_OG_IMAGE = LOGO_SQUARE;
const DEFAULT_OG_WIDTH = 1024;
const DEFAULT_OG_HEIGHT = 1024;

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#040404" },
    { media: "(prefers-color-scheme: light)", color: "#040404" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

function resolveAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return new URL(path, SITE_METADATA_BASE).toString();
}

function inferImageType(url: string): string {
  if (url.endsWith(".png")) return "image/png";
  if (url.endsWith(".webp")) return "image/webp";
  if (url.endsWith(".svg")) return "image/svg+xml";
  return "image/jpeg";
}

function buildOgImages(seo: PageSeo) {
  const imagePath = seo.ogImage ?? DEFAULT_OG_IMAGE;
  const url = resolveAbsoluteUrl(imagePath);

  return [
    {
      url,
      secureUrl: url,
      alt: `${COMPANY_NAME} - Assistência Técnica Apple em ${CITY}`,
      width: seo.ogImageWidth ?? DEFAULT_OG_WIDTH,
      height: seo.ogImageHeight ?? DEFAULT_OG_HEIGHT,
      type: inferImageType(url),
    },
  ];
}

function buildVerificationMeta(): Record<string, string> | undefined {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;

  if (!google && !bing) {
    return undefined;
  }

  const other: Record<string, string> = {};
  if (google) other["google-site-verification"] = google;
  if (bing) other["msvalidate.01"] = bing;
  return other;
}

export function buildMetadata(
  seo: PageSeo,
  options?: { includeCanonical?: boolean },
): Metadata {
  const includeCanonical = options?.includeCanonical ?? true;
  const canonicalPath = seo.path;
  const ogImages = buildOgImages(seo);
  const primaryOgImage = ogImages[0]?.url ?? resolveAbsoluteUrl(DEFAULT_OG_IMAGE);

  return {
    metadataBase: SITE_METADATA_BASE,
    title: seo.title,
    description: seo.description,
    applicationName: COMPANY_NAME,
    authors: [{ name: COMPANY_NAME, url: SITE_URL }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    category: "technology",
    alternates: {
      ...(includeCanonical ? { canonical: canonicalPath } : {}),
      languages: {
        "pt-BR": canonicalPath,
        "x-default": canonicalPath,
      },
      types: {
        "text/plain": resolveAbsoluteUrl("/llms.txt"),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: includeCanonical ? canonicalPath : undefined,
      siteName: COMPANY_NAME,
      locale: "pt_BR",
      type: "website",
      countryName: "Brazil",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [primaryOgImage],
      site: "@njcellrepair",
      creator: "@njcellrepair",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
    formatDetection: {
      telephone: true,
      email: false,
      address: true,
    },
    other: buildVerificationMeta(),
  };
}

export function buildServiceMetadata(service: Service): Metadata {
  const ogImage = service.seo.ogImage ?? service.images?.[0]?.src;

  return buildMetadata({
    ...service.seo,
    ogImage,
    ogImageWidth: service.seo.ogImageWidth ?? 1200,
    ogImageHeight: service.seo.ogImageHeight ?? 630,
  });
}

export const homeSeo: PageSeo = {
  title: "NJCELL | Assistência Técnica iPhone e Mac Sorocaba",
  description:
    "Assistência técnica Apple em Sorocaba. Conserto de iPhone, MacBook e iMac. Troca de tela, bateria, conectores e reparos com atendimento especializado.",
  path: "/",
  ogImage: "/images/store-main.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export const contactSeo: PageSeo = {
  title: "Contato NJCELL | Assistência Apple em Sorocaba",
  description:
    "Fale com a NJCELL em Sorocaba pelo WhatsApp ou visite nossa loja. Assistência técnica para iPhone, MacBook e iMac com agilidade e garantia.",
  path: "/contato",
  ogImage: "/images/store-main.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export const servicosSeo: PageSeo = {
  title: "Serviços de Assistência Apple em Sorocaba | NJCELL",
  description:
    "Todos os serviços da NJCELL em Sorocaba: conserto de iPhone, iPad, MacBook, iMac e Apple Watch. Troca de tela, bateria, conector e reparo em placa com garantia.",
  path: "/servicos",
  ogImage: "/images/hero-devices.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export const privacySeo: PageSeo = {
  title: "Política de Privacidade | NJCELL",
  description:
    "Política de Privacidade da NJCELL em Sorocaba. Saiba como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.",
  path: "/politica-de-privacidade",
  ogImage: "/images/store-main.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export const termsSeo: PageSeo = {
  title: "Termos de Uso | NJCELL",
  description:
    "Termos de Uso do site da NJCELL. Condições para utilização do site e contratação dos serviços de assistência Apple em Sorocaba.",
  path: "/termos-de-uso",
  ogImage: "/images/store-main.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
};

export const notFoundSeo: PageSeo = {
  title: "Página não encontrada | NJCELL",
  description:
    "A página solicitada não foi encontrada. Volte para a home da NJCELL em Sorocaba.",
  path: "/",
};

/** Metadata para 404 — sem canonical para URL inexistente. */
export function buildNotFoundMetadata(): Metadata {
  return {
    ...buildMetadata(notFoundSeo, { includeCanonical: false }),
    robots: {
      index: false,
      follow: true,
    },
  };
}
