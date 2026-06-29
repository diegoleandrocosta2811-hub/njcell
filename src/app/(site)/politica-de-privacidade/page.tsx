import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { privacyPolicy } from "@/lib/legal";
import { buildMetadata, privacySeo } from "@/lib/seo";
import { buildPrivacySchemaGraph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(privacySeo);

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPageTemplate
      title={privacyPolicy.title}
      subtitle={privacyPolicy.subtitle}
      lastUpdated={privacyPolicy.lastUpdated}
      breadcrumbLabel="Política de Privacidade"
      sections={privacyPolicy.sections}
      schema={buildPrivacySchemaGraph()}
    />
  );
}
