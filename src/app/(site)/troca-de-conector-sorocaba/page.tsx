import type { Metadata } from "next";
import { getServiceOrNotFound } from "@/lib/services";
import { buildServiceMetadata } from "@/lib/seo";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getServiceOrNotFound("troca-de-conector-sorocaba");

export const metadata: Metadata = buildServiceMetadata(service);

export default function TrocaDeConectorPage() {
  return <ServicePageTemplate service={service} />;
}
