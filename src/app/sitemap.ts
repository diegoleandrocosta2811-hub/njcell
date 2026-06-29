import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";
import { SITE_CONTENT_VERSION } from "@/lib/site-meta";
import { services } from "@/lib/services";

const lastModified = new Date(SITE_CONTENT_VERSION);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/servicos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
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
  }));

  const aiFiles: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/llms-full.txt`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/ai.txt`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  return [...staticPages, ...servicePages, ...aiFiles];
}
