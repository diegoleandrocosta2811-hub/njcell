import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";
import { SITE_CONTENT_VERSION } from "@/lib/site-meta";
import { services } from "@/lib/services";

const lastModified = new Date(SITE_CONTENT_VERSION);
const siteOgImage = `${SITE_URL}/images/hero-bg.png`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [siteOgImage],
    },
    {
      url: `${SITE_URL}/servicos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [siteOgImage],
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [siteOgImage],
    },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/termos-de-uso`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}${service.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
    images: service.images?.map((image) => `${SITE_URL}${image.src}`),
  }));

  return [...staticPages, ...servicePages];
}
