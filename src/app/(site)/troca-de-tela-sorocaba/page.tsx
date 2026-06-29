import type { Metadata } from "next";
import { getServiceOrNotFound } from "@/lib/services";
import { buildServiceMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getServiceOrNotFound("troca-de-tela-sorocaba");

export const metadata: Metadata = buildServiceMetadata(service);

export default function TrocaDeTelaPage() {
  return <ServicePageTemplate service={service} />;
}
