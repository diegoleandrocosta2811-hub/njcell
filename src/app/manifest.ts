import type { MetadataRoute } from "next";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  LOGO_SQUARE,
  SITE_URL,
} from "@/lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_NAME} ${COMPANY_TAGLINE}`,
    short_name: COMPANY_NAME,
    description:
      "Assistência técnica Apple em Sorocaba. Conserto de iPhone, MacBook, iPad e Apple Watch.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#040404",
    theme_color: "#040404",
    lang: "pt-BR",
    dir: "ltr",
    orientation: "portrait-primary",
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: LOGO_SQUARE,
        sizes: "1024x1024",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    id: SITE_URL,
  };
}
