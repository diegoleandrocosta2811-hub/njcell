import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import { entity } from "@/lib/entity";
import { buildMetadata, servicosSeo } from "@/lib/seo";
import { buildServicosSchemaGraph } from "@/lib/schema";
import { serviceCatalogGroups } from "@/lib/services";

export const metadata: Metadata = buildMetadata(servicosSeo);

export default function ServicosPage() {
  return (
    <>
      <StructuredData data={buildServicosSchemaGraph()} />

      <Hero
        title="Serviços de assistência Apple em Sorocaba"
        subtitle="Diagnóstico, troca de peças e reparos especializados para iPhone, iPad, MacBook, iMac e Apple Watch na NJCELL."
        headingId="servicos-hero-heading"
      />

      <section
        className="section-black py-12 md:py-16"
        aria-labelledby="servicos-catalog-heading"
      >
        <div className="container-njcell">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Serviços" },
            ]}
          />

          <h2 id="servicos-catalog-heading" className="sr-only">
            Catálogo de serviços NJCELL
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-200">
            {entity.identity.description} Atendemos exclusivamente a marca Apple,
            com garantia de {entity.warranty.months} meses e loja física em{" "}
            {entity.location.cityState}.
          </p>

          <div className="space-y-12">
            {serviceCatalogGroups.map((group) => (
              <section key={group.title} aria-labelledby={`group-${group.slug}`}>
                <h2
                  id={`group-${group.slug}`}
                  className="mb-2 text-2xl font-bold text-white md:text-3xl"
                >
                  {group.title}
                </h2>
                <p className="mb-6 text-gray-300">{group.description}</p>

                <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <article className="card-dark flex h-full flex-col p-5">
                        <h3 className="mb-2 text-lg font-bold text-white">
                          <Link
                            href={service.href}
                            className="transition-colors hover:text-nj-accent"
                          >
                            {service.title}
                          </Link>
                        </h3>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-200">
                          {service.description}
                        </p>
                        <Link
                          href={service.href}
                          className="inline-flex min-h-11 items-center text-sm font-semibold text-nj-accent hover:underline"
                        >
                          Saiba mais →
                        </Link>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Precisa de assistência Apple em Sorocaba?"
        headingId="servicos-cta-heading"
      />
    </>
  );
}
