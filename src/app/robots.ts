import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";
import { services } from "@/lib/services";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
