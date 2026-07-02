import { BUSINESS_HOURS as BUSINESS_HOURS_LABEL } from "./business-hours";

export const COMPANY_NAME = "NJCELL";
export const COMPANY_TAGLINE = "Apple Repair";

export const LOGO_HORIZONTAL = "/logo-njcell-apple-repair-horizontal.jpg";
export const LOGO_SQUARE = "/logo-njcell-apple-repair.jpg";
export const LOGO_ALT =
  "NJCELL Apple Repair - Assistência técnica Apple em Sorocaba";
export const LOGO_TITLE = "NJCELL Apple Repair Sorocaba - Assistência técnica Apple";
export const CITY = "Sorocaba";
export const STATE = "SP";
export const CITY_STATE = `${CITY}/${STATE}`;

export const SITE_URL = "https://www.njcell.com.br";

export const PHONE = "(15) 98112-9962";
export const PHONE_RAW = "5515981129962";

export const WHATSAPP_MESSAGE =
  "Olá, vim do site e gostaria de um atendimento especializado NJCELL!";
export const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ADDRESS =
  "Rua Vinte e Oito de Outubro, 120 - Jardim do Paço, Sorocaba - SP, 18087-080";
export const ADDRESS_SHORT = "Rua Vinte e Oito de Outubro, 120 - Jardim do Paço";

export const BUSINESS_HOURS = BUSINESS_HOURS_LABEL;

export const INSTAGRAM_URL = "https://www.instagram.com/njcellrepair";

/** Knowledge Graph ID do Perfil da Empresa (extraído do link oficial de compartilhamento). */
export const GOOGLE_BUSINESS_KGMID = "/g/11pb3skc3v";

/** Link curto de compartilhamento do Perfil da Empresa no Google. */
export const GOOGLE_MAPS_SHARE_URL = "https://share.google/Ts8lm56yf8IODSo2E";

/** URL canônica do perfil no Google Maps (NAP + sameAs + schema). */
export const GOOGLE_MAPS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim() ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "NJCELL Apple Repair Sorocaba",
  )}&kgmid=${encodeURIComponent(GOOGLE_BUSINESS_KGMID)}`;

export const ADDRESS_NEIGHBORHOOD = "Jardim do Paço";
export const ADDRESS_POSTAL_CODE = "18087-080";
export const ADDRESS_STREET = "Rua Vinte e Oito de Outubro, 120";

export const FOUNDED_YEAR = 2005;
export const WARRANTY_MONTHS = 6;

export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Rua+Vinte+e+Oito+de+Outubro,+120+-+Jardim+do+Pa%C3%A7o,+Sorocaba+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const BRANDS = ["iPhone", "MacBook", "iPad", "Apple Watch"] as const;
