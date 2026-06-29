import Breadcrumbs from "./Breadcrumbs";
import Hero from "./Hero";
import StructuredData from "./StructuredData";
import type { LegalSection } from "@/lib/legal";
import type { JsonLdNode } from "@/lib/schema";

type LegalPageTemplateProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  breadcrumbLabel: string;
  sections: LegalSection[];
  schema: JsonLdNode;
};

export default function LegalPageTemplate({
  title,
  subtitle,
  lastUpdated,
  breadcrumbLabel,
  sections,
  schema,
}: LegalPageTemplateProps) {
  return (
    <>
      <StructuredData data={schema} />

      <Hero
        title={title}
        subtitle={subtitle}
        headingId={`legal-hero-${breadcrumbLabel.toLowerCase().replace(/\s+/g, "-")}`}
      />

      <section className="section-black py-12 md:py-16">
        <div className="container-njcell">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: breadcrumbLabel },
            ]}
          />

          <p className="mb-10 text-center text-sm text-gray-400">
            Última atualização: {lastUpdated}
          </p>

          <article className="mx-auto max-w-3xl space-y-8">
            {sections.map((section, index) => (
              <section key={section.title} aria-labelledby={`legal-section-${index}`}>
                <h2
                  id={`legal-section-${index}`}
                  className="mb-4 text-xl font-bold text-white md:text-2xl"
                >
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
