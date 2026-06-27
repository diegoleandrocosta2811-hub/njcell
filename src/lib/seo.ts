import type { Metadata } from "next";
import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  INSTAGRAM_URL,
  PHONE,
  PHONE_RAW,
  SITE_URL,
  LOGO_SQUARE,
  STATE,
  WHATSAPP_URL,
} from "./company";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata(seo: PageSeo): Metadata {
  const canonical = `${SITE_URL}${seo.path}`;
  const ogImage = seo.ogImage ?? `${SITE_URL}${LOGO_SQUARE}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: COMPANY_NAME,
      locale: "pt_BR",
      type: "website",
      images: [{ url: ogImage, alt: `${COMPANY_NAME} - Assistência Técnica em ${CITY}` }],
    },
    robots: { index: true, follow: true },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    description:
      "Assistência técnica Apple em Sorocaba. Conserto de iPhone, MacBook e iMac. Troca de tela, bateria, conectores e reparos em placa.",
    url: SITE_URL,
    telephone: `+${PHONE_RAW}`,
    image: `${SITE_URL}${LOGO_SQUARE}`,
    logo: `${SITE_URL}${LOGO_SQUARE}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Oito de Outubro, 120",
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: "18087-080",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.5015,
      longitude: -47.4526,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: CITY,
    },
    sameAs: [INSTAGRAM_URL, WHATSAPP_URL],
    priceRange: "$$",
  };
}

export type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function serviceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY_NAME,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS,
        addressLocality: CITY,
        addressRegion: STATE,
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "City",
      name: CITY,
    },
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const homeSeo: PageSeo = {
  title: "NJCELL | Assistência Técnica iPhone e Mac Sorocaba",
  description:
    "Assistência técnica Apple em Sorocaba. Conserto de iPhone, MacBook e iMac. Troca de tela, bateria, conectores e reparos com atendimento especializado.",
  path: "/",
};

export const contactSeo: PageSeo = {
  title: "Contato NJCELL | Assistência Apple em Sorocaba",
  description:
    "Fale com a NJCELL em Sorocaba pelo WhatsApp ou visite nossa loja. Assistência técnica para iPhone, MacBook e iMac com agilidade e garantia.",
  path: "/contato",
};
