import type { Metadata } from "next";
import LegalPageTemplate from "@/components/LegalPageTemplate";
import { termsOfUse } from "@/lib/legal";
import { buildMetadata, termsSeo } from "@/lib/seo";
import { buildTermsSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(termsSeo);

export default function TermosDeUsoPage() {
  return (
    <LegalPageTemplate
      title={termsOfUse.title}
      subtitle={termsOfUse.subtitle}
      lastUpdated={termsOfUse.lastUpdated}
      breadcrumbLabel="Termos de Uso"
      sections={termsOfUse.sections}
      schema={buildTermsSchemaGraph()}
    />
  );
}
