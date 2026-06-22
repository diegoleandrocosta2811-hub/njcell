import type { Metadata } from "next";
import { getServiceOrNotFound } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getServiceOrNotFound("assistencia-tecnica-celular-sorocaba");

export const metadata: Metadata = buildMetadata(service.seo);

export default function AssistenciaTecnicaPage() {
  return <ServicePageTemplate service={service} />;
}
