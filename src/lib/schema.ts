import {
  ADDRESS_NEIGHBORHOOD,
  ADDRESS_POSTAL_CODE,
  ADDRESS_STREET,
  CITY,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  FOUNDED_YEAR,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  LOGO_SQUARE,
  PHONE_RAW,
  SITE_URL,
  STATE,
  WHATSAPP_URL,
} from "./company";
import { entity, entityKnowsAbout } from "./entity";
import { homeFaqs } from "./faqs";
import { LEGAL_LAST_MODIFIED_ISO, SITE_CONTENT_VERSION } from "./site-meta";
import { services } from "./services";
import type { Service } from "./services";
import { allSitePages } from "./site-nav";

/** IDs canônicos — referenciados via @id para evitar duplicação no grafo. */
export const SCHEMA_IDS = {
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
  website: `${SITE_URL}/#website`,
  logo: `${SITE_URL}/#logo`,
  navigation: `${SITE_URL}/#site-navigation`,
  whatsappAction: `${SITE_URL}/#whatsapp-action`,
  serviceCatalog: `${SITE_URL}/#service-catalog`,
  howTo: `${SITE_URL}/#how-to`,
  storeImage: `${SITE_URL}/#store-image`,
} as const;

const SAME_AS_URLS = [INSTAGRAM_URL, GOOGLE_MAPS_URL] as const;

const STORE_IMAGES = [
  "/images/store-main.jpg",
  "/images/store-lab-1.jpg",
  "/images/store-lab-2.jpg",
] as const;

export type FaqItem = { question: string; answer: string };

export type BreadcrumbSchemaItem = {
  name: string;
  path?: string;
};

type JsonLdNode = Record<string, unknown>;

export type { JsonLdNode };

function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function schemaGraph(nodes: JsonLdNode[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

function logoImageObject(): JsonLdNode {
  return {
    "@type": "ImageObject",
    "@id": SCHEMA_IDS.logo,
    url: absoluteUrl(LOGO_SQUARE),
    contentUrl: absoluteUrl(LOGO_SQUARE),
    width: 1024,
    height: 1024,
    caption: `${COMPANY_NAME} ${COMPANY_TAGLINE}`,
  };
}

function postalAddress(): JsonLdNode {
  return {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_STREET,
    addressNeighborhood: ADDRESS_NEIGHBORHOOD,
    addressLocality: CITY,
    addressRegion: STATE,
    postalCode: ADDRESS_POSTAL_CODE,
    addressCountry: "BR",
  };
}

function storeImageObjects(): JsonLdNode[] {
  return STORE_IMAGES.map((src, index) => ({
    "@type": "ImageObject",
    "@id": index === 0 ? SCHEMA_IDS.storeImage : `${SCHEMA_IDS.storeImage}-${index}`,
    url: absoluteUrl(src),
    contentUrl: absoluteUrl(src),
    caption: `Loja e laboratório ${COMPANY_NAME} em ${CITY}`,
  }));
}

function geoCoordinates(): JsonLdNode {
  return {
    "@type": "GeoCoordinates",
    latitude: -23.5015,
    longitude: -47.4526,
  };
}

function openingHoursSpecification(): JsonLdNode[] {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ];
}

function contactPointNodes(): JsonLdNode[] {
  return [
    {
      "@type": "ContactPoint",
      "@id": `${SCHEMA_IDS.localBusiness}/contact-whatsapp`,
      contactType: "customer service",
      telephone: `+${PHONE_RAW}`,
      areaServed: CITY,
      availableLanguage: ["Portuguese", "pt-BR"],
      url: WHATSAPP_URL,
    },
    {
      "@type": "ContactPoint",
      "@id": `${SCHEMA_IDS.localBusiness}/contact-phone`,
      contactType: "customer service",
      telephone: `+${PHONE_RAW}`,
      areaServed: CITY,
      availableLanguage: ["Portuguese", "pt-BR"],
    },
  ];
}

function whatsappPotentialAction(): JsonLdNode {
  return {
    "@type": "CommunicateAction",
    "@id": SCHEMA_IDS.whatsappAction,
    name: "Solicitar orçamento via WhatsApp",
    description: `Fale com a ${COMPANY_NAME} em ${CITY} pelo WhatsApp.`,
    target: {
      "@type": "EntryPoint",
      urlTemplate: WHATSAPP_URL,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  };
}

function howToNode(): JsonLdNode {
  return {
    "@type": "HowTo",
    "@id": SCHEMA_IDS.howTo,
    name: `Como funciona o reparo na ${COMPANY_NAME}`,
    description:
      "Processo de assistência técnica Apple na NJCELL em Sorocaba: diagnóstico, orçamento, reparo e entrega com garantia.",
    inLanguage: "pt-BR",
    step: entity.process.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.name,
      text: step.text,
    })),
  };
}

function serviceCatalogNode(): JsonLdNode {
  return {
    "@type": "OfferCatalog",
    "@id": SCHEMA_IDS.serviceCatalog,
    name: `Serviços de assistência Apple — ${COMPANY_NAME}`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.h1,
        url: absoluteUrl(service.href),
        description: service.seo.description,
        provider: { "@id": SCHEMA_IDS.localBusiness },
      },
    })),
  };
}

/** Entidades globais reutilizadas em todas as páginas indexáveis. */
function coreEntityNodes(): JsonLdNode[] {
  const storeImages = storeImageObjects();

  return [
    logoImageObject(),
    ...storeImages,
    {
      "@type": "Organization",
      "@id": SCHEMA_IDS.organization,
      name: COMPANY_NAME,
      legalName: COMPANY_NAME,
      alternateName: `${COMPANY_NAME} ${COMPANY_TAGLINE}`,
      url: SITE_URL,
      foundingDate: String(FOUNDED_YEAR),
      slogan: COMPANY_TAGLINE,
      description: entity.identity.description,
      knowsAbout: [...entityKnowsAbout],
      logo: { "@id": SCHEMA_IDS.logo },
      image: [
        { "@id": SCHEMA_IDS.logo },
        ...storeImages.map((img) => ({ "@id": img["@id"] as string })),
      ],
      sameAs: [...SAME_AS_URLS],
      contactPoint: [
        { "@id": `${SCHEMA_IDS.localBusiness}/contact-whatsapp` },
        { "@id": `${SCHEMA_IDS.localBusiness}/contact-phone` },
      ],
    },
    ...contactPointNodes(),
    {
      "@type": ["LocalBusiness", "ElectronicsRepairStore"],
      "@id": SCHEMA_IDS.localBusiness,
      name: COMPANY_NAME,
      description: entity.identity.description,
      url: SITE_URL,
      telephone: `+${PHONE_RAW}`,
      parentOrganization: { "@id": SCHEMA_IDS.organization },
      logo: { "@id": SCHEMA_IDS.logo },
      image: [
        { "@id": SCHEMA_IDS.storeImage },
        { "@id": SCHEMA_IDS.logo },
      ],
      address: postalAddress(),
      geo: geoCoordinates(),
      hasMap: GOOGLE_MAPS_URL,
      openingHoursSpecification: openingHoursSpecification(),
      areaServed: [
        { "@type": "City", name: CITY },
        { "@type": "State", name: STATE },
      ],
      knowsAbout: [...entityKnowsAbout],
      sameAs: [...SAME_AS_URLS],
      priceRange: "$$",
      contactPoint: [
        { "@id": `${SCHEMA_IDS.localBusiness}/contact-whatsapp` },
        { "@id": `${SCHEMA_IDS.localBusiness}/contact-phone` },
      ],
      potentialAction: { "@id": SCHEMA_IDS.whatsappAction },
      hasOfferCatalog: { "@id": SCHEMA_IDS.serviceCatalog },
    },
    whatsappPotentialAction(),
    howToNode(),
    serviceCatalogNode(),
    {
      "@type": "WebSite",
      "@id": SCHEMA_IDS.website,
      url: SITE_URL,
      name: COMPANY_NAME,
      description:
        "Assistência técnica Apple em Sorocaba. Conserto de iPhone, MacBook, iPad e Apple Watch.",
      inLanguage: "pt-BR",
      publisher: { "@id": SCHEMA_IDS.organization },
      copyrightHolder: { "@id": SCHEMA_IDS.organization },
      potentialAction: { "@id": SCHEMA_IDS.whatsappAction },
    },
    siteNavigationElement(),
  ];
}

function siteNavigationElement(): JsonLdNode {
  return {
    "@type": "SiteNavigationElement",
    "@id": SCHEMA_IDS.navigation,
    name: "Navegação principal",
    isPartOf: { "@id": SCHEMA_IDS.website },
    hasPart: allSitePages.map((item) => ({
      "@type": "SiteNavigationElement",
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  };
}

function breadcrumbNode(
  path: string,
  items: BreadcrumbSchemaItem[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

function webPageNode(input: {
  path: string;
  name: string;
  description: string;
  types?: string[];
  breadcrumbId?: string;
  dateModified?: string;
}): JsonLdNode {
  const pageUrl = absoluteUrl(input.path);

  return {
    "@type": input.types ?? ["WebPage"],
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.localBusiness },
    inLanguage: "pt-BR",
    dateModified: input.dateModified ?? SITE_CONTENT_VERSION,
    ...(input.breadcrumbId
      ? { breadcrumb: { "@id": input.breadcrumbId } }
      : {}),
  };
}

function serviceImageObject(
  servicePath: string,
  imageSrc: string,
  caption: string,
): JsonLdNode {
  return {
    "@type": "ImageObject",
    "@id": `${absoluteUrl(servicePath)}#service-image`,
    url: absoluteUrl(imageSrc),
    contentUrl: absoluteUrl(imageSrc),
    width: 800,
    height: 1000,
    caption,
  };
}

function repairServiceNode(service: Service): JsonLdNode {
  const serviceUrl = absoluteUrl(service.href);
  const primaryImage = service.images?.[0];

  return {
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.h1,
    description: service.seo.description,
    url: serviceUrl,
    serviceType: service.shortTitle,
    category: "Assistência técnica e reparo Apple",
    brand: { "@type": "Brand", name: "Apple" },
    provider: { "@id": SCHEMA_IDS.localBusiness },
    areaServed: { "@type": "City", name: CITY },
    ...(primaryImage
      ? {
          image: { "@id": `${serviceUrl}#service-image` },
        }
      : {}),
    potentialAction: { "@id": SCHEMA_IDS.whatsappAction },
  };
}

function faqPageNode(path: string, faqs: FaqItem[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    isPartOf: { "@id": `${absoluteUrl(path)}#webpage` },
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

/** Home — entidades globais + WebPage + FAQ + HowTo. */
export function buildHomeSchemaGraph(): JsonLdNode {
  const breadcrumb = breadcrumbNode("/", [{ name: "Início", path: "/" }]);

  return schemaGraph([
    ...coreEntityNodes(),
    breadcrumb,
    webPageNode({
      path: "/",
      name: "NJCELL | Assistência Técnica iPhone e Mac Sorocaba",
      description: entity.identity.description,
      breadcrumbId: breadcrumb["@id"] as string,
    }),
    faqPageNode("/", homeFaqs),
  ]);
}

/** Contato — WebPage + ContactPage + breadcrumbs. */
export function buildContactSchemaGraph(): JsonLdNode {
  const breadcrumb = breadcrumbNode("/contato", [
    { name: "Início", path: "/" },
    { name: "Contato" },
  ]);

  return schemaGraph([
    ...coreEntityNodes(),
    breadcrumb,
    webPageNode({
      path: "/contato",
      name: "Contato NJCELL | Assistência Apple em Sorocaba",
      description:
        "Fale com a NJCELL em Sorocaba pelo WhatsApp ou visite nossa loja. Assistência técnica para iPhone, MacBook e iMac com agilidade e garantia.",
      types: ["WebPage", "ContactPage"],
      breadcrumbId: breadcrumb["@id"] as string,
    }),
  ]);
}

/** Página de serviço — Service + FAQ (quando visível) + imagem + breadcrumbs. */
export function buildServiceSchemaGraph(
  service: Service,
  faqs: FaqItem[],
): JsonLdNode {
  const breadcrumb = breadcrumbNode(service.href, [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: service.shortTitle },
  ]);

  const nodes: JsonLdNode[] = [
    ...coreEntityNodes(),
    breadcrumb,
    webPageNode({
      path: service.href,
      name: service.seo.title,
      description: service.seo.description,
      breadcrumbId: breadcrumb["@id"] as string,
    }),
    repairServiceNode(service),
  ];

  const primaryImage = service.images?.[0];
  if (primaryImage) {
    nodes.push(
      serviceImageObject(
        service.href,
        primaryImage.src,
        primaryImage.caption ?? primaryImage.alt,
      ),
    );
  }

  if (faqs.length > 0) {
    nodes.push(faqPageNode(service.href, faqs));
  }

  return schemaGraph(nodes);
}

function buildGenericPageSchemaGraph(
  path: string,
  name: string,
  description: string,
  breadcrumbTrail: BreadcrumbSchemaItem[],
  dateModified?: string,
): JsonLdNode {
  const breadcrumb = breadcrumbNode(path, breadcrumbTrail);

  return schemaGraph([
    ...coreEntityNodes(),
    breadcrumb,
    webPageNode({
      path,
      name,
      description,
      breadcrumbId: breadcrumb["@id"] as string,
      dateModified,
    }),
  ]);
}

/** Política de Privacidade — WebPage institucional. */
export function buildPrivacySchemaGraph(): JsonLdNode {
  return buildGenericPageSchemaGraph(
    "/politica-de-privacidade",
    "Política de Privacidade | NJCELL",
    "Política de Privacidade da NJCELL em Sorocaba. Saiba como tratamos dados pessoais em conformidade com a LGPD.",
    [
      { name: "Início", path: "/" },
      { name: "Política de Privacidade" },
    ],
    LEGAL_LAST_MODIFIED_ISO,
  );
}

/** Termos de Uso — WebPage institucional. */
export function buildTermsSchemaGraph(): JsonLdNode {
  return buildGenericPageSchemaGraph(
    "/termos-de-uso",
    "Termos de Uso | NJCELL",
    "Termos de Uso do site da NJCELL. Condições para utilização do site e serviços de assistência Apple em Sorocaba.",
    [
      { name: "Início", path: "/" },
      { name: "Termos de Uso" },
    ],
    LEGAL_LAST_MODIFIED_ISO,
  );
}

/** Hub de serviços — WebPage + ItemList. */
export function buildServicosSchemaGraph(): JsonLdNode {
  const path = "/servicos";
  const breadcrumb = breadcrumbNode(path, [
    { name: "Início", path: "/" },
    { name: "Serviços" },
  ]);

  return schemaGraph([
    ...coreEntityNodes(),
    breadcrumb,
    webPageNode({
      path,
      name: "Serviços de Assistência Apple em Sorocaba | NJCELL",
      description:
        "Lista completa dos serviços da NJCELL em Sorocaba: iPhone, iPad, MacBook, iMac e Apple Watch. Troca de tela, bateria, conector e reparo em placa.",
      breadcrumbId: breadcrumb["@id"] as string,
    }),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(path)}#service-list`,
      name: `Serviços de assistência Apple — ${COMPANY_NAME}`,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.h1,
          url: absoluteUrl(service.href),
          description: service.seo.description,
          provider: { "@id": SCHEMA_IDS.localBusiness },
        },
      })),
    },
  ]);
}

/** Validação estrutural dos nós do grafo JSON-LD. */
export function validateSchemaGraph(graph: JsonLdNode): string[] {
  const errors: string[] = [];

  if (graph["@context"] !== "https://schema.org") {
    errors.push("@context deve ser https://schema.org");
  }

  const nodes = graph["@graph"];
  if (!Array.isArray(nodes) || nodes.length === 0) {
    errors.push("@graph deve ser um array não vazio");
    return errors;
  }

  const ids = new Set<string>();

  for (const node of nodes as JsonLdNode[]) {
    const id = node["@id"];
    if (typeof id === "string") {
      if (ids.has(id)) {
        errors.push(`@id duplicado: ${id}`);
      }
      ids.add(id);
    }

    if (!node["@type"]) {
      errors.push(`Nó sem @type: ${String(id ?? "sem id")}`);
    }
  }

  const requiredIds = [
    SCHEMA_IDS.organization,
    SCHEMA_IDS.localBusiness,
    SCHEMA_IDS.website,
    SCHEMA_IDS.logo,
  ];

  for (const requiredId of requiredIds) {
    if (!ids.has(requiredId)) {
      errors.push(`Entidade obrigatória ausente: ${requiredId}`);
    }
  }

  return errors;
}
