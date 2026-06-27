import { appleServices } from "./services";

export const siteMenuLabel = "Nossos Serviços";

export type SiteNavItem = {
  label: string;
  href: string;
};

export const sitePageGroups: { title: string; items: SiteNavItem[] }[] = [
  {
    title: "Principal",
    items: [
      { label: "Início", href: "/" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Serviços",
    items: appleServices.map((service) => ({
      label: service.title,
      href: service.href,
    })),
  },
];

export const allSitePages = sitePageGroups.flatMap((group) => group.items);
