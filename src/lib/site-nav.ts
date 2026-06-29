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
      { label: "Serviços", href: "/servicos" },
      { label: "Contato", href: "/contato" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
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
