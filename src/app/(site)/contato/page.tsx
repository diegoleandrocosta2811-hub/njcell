import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import {
  ADDRESS,
  BUSINESS_HOURS,
  CITY,
  COMPANY_NAME,
  INSTAGRAM_URL,
  PHONE,
  PHONE_RAW,
  WHATSAPP_URL,
} from "@/lib/company";
import { buildMetadata, contactSeo, localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(contactSeo);

export default function ContatoPage() {
  const contactSchema = {
    ...localBusinessSchema(),
    "@type": ["LocalBusiness", "ContactPage"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${PHONE_RAW}`,
      contactType: "customer service",
      areaServed: CITY,
      availableLanguage: "Portuguese",
    },
  };

  return (
    <>
      <StructuredData data={contactSchema} />

      <Hero
        title="Fale com a NJCELL em Sorocaba"
        subtitle="Tire dúvidas, solicite orçamento ou agende seu atendimento. Estamos prontos para ajudar com iPhone, MacBook e iMac."
      />

      <div className="section-black py-8">
        <div className="container-njcell">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Contato" },
            ]}
          />

          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-300">
            A {COMPANY_NAME} está localizada em {CITY} e atende por WhatsApp,
            telefone e presencialmente em nossa loja especializada em Apple.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Telefone", content: <a href={`tel:+${PHONE_RAW}`} className="text-nj-green hover:underline">{PHONE}</a> },
              { title: "WhatsApp", content: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-nj-green hover:underline">Enviar mensagem</a> },
              { title: "Instagram", content: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-nj-green hover:underline">@njcellrepair</a> },
              { title: "Horário", content: <p className="text-sm text-gray-300">{BUSINESS_HOURS}</p> },
            ].map((item) => (
              <article key={item.title} className="card-dark p-6 text-center">
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                {item.content}
              </article>
            ))}
          </div>

          <div className="card-dark mt-8 p-6 text-center">
            <h3 className="mb-2 font-bold text-white">Endereço</h3>
            <address className="not-italic text-gray-300">{ADDRESS}</address>
          </div>
        </div>
      </div>

      <HomeContact />
      <CTASection />
    </>
  );
}
