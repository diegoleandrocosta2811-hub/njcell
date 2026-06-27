import type { Metadata } from "next";
import { getServiceOrNotFound } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getServiceOrNotFound("troca-de-bateria-apple-watch-sorocaba");

export const metadata: Metadata = buildMetadata(service.seo);

export default function TrocaDeBateriaAppleWatchPage() {
  return <ServicePageTemplate service={service} />;
}
