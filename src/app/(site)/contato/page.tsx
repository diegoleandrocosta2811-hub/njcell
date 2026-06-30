import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import VisuallyHidden from "@/components/VisuallyHidden";
import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_RAW,
  WHATSAPP_URL,
} from "@/lib/company";
import { buildMetadata, contactSeo } from "@/lib/seo";
import { buildContactSchemaGraph } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(contactSeo);

const contactCards = [
  {
    title: "Telefone",
    content: (
      <a href={`tel:+${PHONE_RAW}`} className="text-nj-green hover:underline">
        {PHONE}
      </a>
    ),
  },
  {
    title: "WhatsApp",
    content: (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-nj-green hover:underline"
      >
        Enviar mensagem
        <VisuallyHidden> (abre em nova janela)</VisuallyHidden>
      </a>
    ),
  },
  {
    title: "Instagram",
    content: (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-nj-green hover:underline"
      >
        @njcellrepair
        <VisuallyHidden> (abre em nova janela)</VisuallyHidden>
      </a>
    ),
  },
  {
    title: "Google Maps",
    content: (
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-nj-green hover:underline"
      >
        Ver no mapa
        <VisuallyHidden> (abre em nova janela)</VisuallyHidden>
      </a>
    ),
  },
  {
    title: "Horário",
    content: <p className="text-sm text-gray-200">{BUSINESS_HOURS}</p>,
  },
] as const;

export default function ContatoPage() {
  return (
    <>
      <StructuredData data={buildContactSchemaGraph()} />

      <Hero
        title="Fale com a NJCELL em Sorocaba"
        subtitle="Tire dúvidas, solicite orçamento ou agende seu atendimento. Estamos prontos para ajudar com iPhone, MacBook e iPad."
        headingId="contato-hero-heading"
      />

      <section className="section-black py-8" aria-labelledby="contato-info-heading">
        <div className="container-njcell">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Contato" },
            ]}
          />

          <h2 id="contato-info-heading" className="sr-only">
            Informações de contato
          </h2>

          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-200">
            A {COMPANY_NAME} está localizada em {CITY} e atende por WhatsApp,
            telefone e presencialmente em nossa loja especializada em Apple.
          </p>

          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-5">
            {contactCards.map((item) => (
              <li key={item.title}>
                <article className="card-dark h-full p-6 text-center">
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  {item.content}
                </article>
              </li>
            ))}
          </ul>

          <div className="card-dark mt-8 p-6 text-center">
            <h3 className="mb-2 font-bold text-white">Endereço</h3>
            <address className="not-italic text-gray-200">{ADDRESS}</address>
          </div>
        </div>
      </section>

      <HomeContact />
      <CTASection headingId="contato-cta-heading" />
    </>
  );
}
