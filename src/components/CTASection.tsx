import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Precisa de assistência Apple em Sorocaba?",
  description = "Fale com a NJCELL pelo WhatsApp e receba atendimento especializado para iPhone e MacBook. Diagnóstico e orçamento sem compromisso.",
}: CTASectionProps) {
  return (
    <section className="section-black py-16 md:py-20" aria-labelledby="cta-heading">
      <div className="container-njcell text-center">
        <h2 id="cta-heading" className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">{description}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton label="Solicitar Orçamento!" />
          <Link href="/contato" className="font-semibold text-nj-accent hover:underline">
            Ver contato e localização →
          </Link>
        </div>
      </div>
    </section>
  );
}
