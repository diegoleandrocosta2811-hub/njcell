import Link from "next/link";
import dynamic from "next/dynamic";
import SiteImage from "./SiteImage";
import type { Service } from "@/lib/services";
import { getServiceBySlug } from "@/lib/services";
import { serviceFaqs } from "@/lib/faqs";
import { buildServiceSchemaGraph } from "@/lib/schema";
import Breadcrumbs from "./Breadcrumbs";
import Hero from "./Hero";
import StructuredData from "./StructuredData";
import WhatsAppButton from "./WhatsAppButton";

const FAQ = dynamic(() => import("./FAQ"));
const CTASection = dynamic(() => import("./CTASection"));

type ServicePageTemplateProps = {
  service: Service;
};

export default function ServicePageTemplate({
  service,
}: ServicePageTemplateProps) {
  const faqs = serviceFaqs[service.slug] ?? [];
  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  const schemas = buildServiceSchemaGraph(service, faqs);

  return (
    <>
      <StructuredData data={schemas} />

      <Hero title={service.h1} subtitle={service.description} />

      <section className="section-black py-12 md:py-16">
        <div className="container-njcell">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: service.shortTitle },
            ]}
          />

          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <section aria-labelledby="service-intro-heading">
                <h2 id="service-intro-heading" className="sr-only">
                  Sobre {service.shortTitle} na NJCELL
                </h2>
                <div className="space-y-6">
                {service.intro.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-200">
                    {paragraph}
                  </p>
                ))}
              </div>
              </section>

              {service.images && service.images.length > 0 && (
                <div
                  className={`mt-10 grid gap-4 ${service.images.length > 1 ? "sm:grid-cols-2" : ""}`}
                >
                  {service.images.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden rounded-2xl border border-white/10"
                    >
                      <SiteImage
                        src={image.src}
                        alt={image.alt}
                        imageTitle={image.title ?? image.alt}
                        width={800}
                        height={1000}
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      {(image.caption ?? image.title ?? image.alt) && (
                        <figcaption className="border-t border-white/10 bg-nj-dark px-4 py-3 text-sm text-gray-200">
                          {image.caption ?? image.title ?? image.alt}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              <section className="mt-10" aria-labelledby="symptoms-heading">
                <h2
                  id="symptoms-heading"
                  className="mb-4 text-2xl font-bold text-white"
                >
                  Sinais de que você precisa deste serviço
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.symptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="card-dark flex items-start gap-3 px-4 py-3 text-gray-200"
                    >
                      <span className="mt-0.5 text-nj-green" aria-hidden="true">
                        ✓
                      </span>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10" aria-labelledby="highlights-heading">
                <h2
                  id="highlights-heading"
                  className="mb-4 text-2xl font-bold text-white"
                >
                  Por que fazer na NJCELL em Sorocaba
                </h2>
                <ul className="space-y-3">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-gray-200"
                    >
                      <span className="font-bold text-nj-accent" aria-hidden="true">
                        →
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className="lg:col-span-1" aria-labelledby="quote-heading">
              <div className="card-dark sticky top-24 p-6">
                <h2 id="quote-heading" className="mb-4 text-xl font-bold text-white">
                  Solicite um orçamento
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-200">
                  Fale com nossa equipe pelo WhatsApp para {service.shortTitle.toLowerCase()} em
                  Sorocaba.
                </p>
                <WhatsAppButton label="Chamar no WhatsApp" className="w-full text-sm" />

                {relatedServices.length > 0 && (
                  <nav
                    className="mt-8 border-t border-white/10 pt-6"
                    aria-label="Serviços relacionados"
                  >
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-nj-accent">
                      Serviços relacionados
                    </h3>
                    <ul className="space-y-2">
                      {relatedServices.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={related.href}
                            className="text-sm font-medium text-white hover:text-nj-accent"
                          >
                            {related.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <div className="deferred-section">
          <FAQ items={faqs} headingId={`${service.slug}-faq-heading`} />
        </div>
      )}
      <div className="deferred-section">
        <CTASection
          title={`Precisa de ${service.shortTitle.toLowerCase()} em Sorocaba?`}
          headingId={`${service.slug}-cta-heading`}
        />
      </div>
    </>
  );
}
