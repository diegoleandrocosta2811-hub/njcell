export const COMPANY_NAME = "NJCELL";
export const CITY = "Sorocaba";
export const STATE = "SP";
export const CITY_STATE = `${CITY}/${STATE}`;

export const SITE_URL = "https://www.njcell.com";

export const PHONE = "(15) 98112-9962";
export const PHONE_RAW = "5515981129962";

export const WHATSAPP_MESSAGE =
  "Olá, vim do site e gostaria de um atendimento especializado NJCELL!";
export const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ADDRESS =
  "Av. Oito de Outubro, 120 - Jardim do Paço, Sorocaba - SP, 18087-080";
export const ADDRESS_SHORT = "Av. Oito de Outubro, 120 - Jardim do Paço";

export const BUSINESS_HOURS =
  "Segunda a sexta: 9h às 18h | Sábado: 9h às 13h";

export const INSTAGRAM_URL = "https://www.instagram.com/njcellrepair";

export const FOUNDED_YEAR = 2005;
export const WARRANTY_MONTHS = 6;

export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Av.+Oito+de+Outubro,+120+-+Jardim+do+Pa%C3%A7o,+Sorocaba+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const BRANDS = ["iPhone", "MacBook", "iMac", "iPad", "Apple Watch"] as const;
