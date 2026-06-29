import {
  ADDRESS,
  BRANDS,
  BUSINESS_HOURS,
  CITY,
  CITY_STATE,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  FOUNDED_YEAR,
  INSTAGRAM_URL,
  PHONE,
  PHONE_RAW,
  SITE_URL,
  STATE,
  WARRANTY_MONTHS,
  WHATSAPP_URL,
} from "./company";
import { homeFaqs } from "./faqs";
import { services } from "./services";

/** Entidade canônica da NJCELL — fonte única para IA, llms.txt e JSON-LD. */
export const entity = {
  identity: {
    name: COMPANY_NAME,
    tagline: COMPANY_TAGLINE,
    legalName: COMPANY_NAME,
    alternateName: `${COMPANY_NAME} ${COMPANY_TAGLINE}`,
    foundedYear: FOUNDED_YEAR,
    canonicalUrl: SITE_URL,
    description:
      "Assistência técnica especializada em produtos Apple em Sorocaba/SP, com loja física, diagnóstico transparente e reparos para iPhone, iPad, MacBook, iMac e Apple Watch.",
  },
  location: {
    city: CITY,
    state: STATE,
    cityState: CITY_STATE,
    country: "Brasil",
    address: ADDRESS,
    areaServed: `${CITY} e região`,
    coordinates: { latitude: -23.5015, longitude: -47.4526 },
  },
  contact: {
    phone: PHONE,
    phoneE164: `+${PHONE_RAW}`,
    whatsapp: WHATSAPP_URL,
    instagram: INSTAGRAM_URL,
    hours: BUSINESS_HOURS,
  },
  brands: [...BRANDS] as string[],
  devices: ["iPhone", "iPad", "MacBook", "iMac", "Apple Watch"] as const,
  specialties: [
    "Troca de tela e vidro de iPhone",
    "Troca de bateria",
    "Troca de conector de carga",
    "Reparo em placa e microsoldagem",
    "Reparo Face ID",
    "Troca de câmeras",
    "Troca de tampa traseira",
    "Assistência MacBook",
    "Conserto de iPad",
    "Conserto de Apple Watch",
  ],
  differentiators: [
    "Reparos em até 30 minutos na maioria dos serviços de iPhone",
    `Garantia de ${WARRANTY_MONTHS} meses nos serviços realizados`,
    "Diagnóstico antes de qualquer intervenção",
    "Orçamento transparente sem compromisso",
    "Loja física em Sorocaba com equipe especializada Apple",
    `Atuação desde ${FOUNDED_YEAR} em Sorocaba e região`,
  ],
  warranty: {
    months: WARRANTY_MONTHS,
    summary: `Garantia de ${WARRANTY_MONTHS} meses conforme o tipo de reparo e peça utilizada, informada no orçamento.`,
  },
  process: [
    {
      step: 1,
      name: "Diagnóstico",
      text: "Recebemos o aparelho e identificamos a causa do problema com equipamentos adequados.",
    },
    {
      step: 2,
      name: "Orçamento",
      text: "Apresentamos o valor e o prazo antes de iniciar qualquer reparo. Sem surpresas.",
    },
    {
      step: 3,
      name: "Reparo",
      text: "Executamos o serviço com peças de qualidade e técnicos especializados em Apple.",
    },
    {
      step: 4,
      name: "Teste e entrega",
      text: "Testamos o aparelho após o reparo e entregamos com garantia de 6 meses.",
    },
  ],
  services: services.map((service) => ({
    name: service.h1,
    shortName: service.shortTitle,
    url: `${SITE_URL}${service.href}`,
    path: service.href,
    description: service.seo.description,
  })),
  faqs: homeFaqs,
} as const;

export const entityKnowsAbout = [
  "Assistência técnica Apple",
  "Conserto de iPhone",
  "Conserto de MacBook",
  "Conserto de iPad",
  "Conserto de Apple Watch",
  "Troca de tela",
  "Troca de bateria",
  "Reparo em placa",
  "Microsoldagem",
  "Reparo Face ID",
  `Assistência técnica em ${CITY}`,
] as const;
