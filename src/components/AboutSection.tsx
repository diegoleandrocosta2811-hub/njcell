import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { FOUNDED_YEAR } from "@/lib/company";

export default function AboutSection() {
  return (
    <section id="sobre" className="section-orange py-16 md:py-20" aria-labelledby="about-heading">
      <div className="container-njcell">
        <div className="card-dark overflow-hidden p-6 md:p-10">
          <h2
            id="about-heading"
            className="mb-8 text-center text-3xl font-bold text-white md:text-4xl"
          >
            Confiança e qualidade sempre!
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
              <Image
                src="/images/store-main.jpg"
                alt="Interior da loja NJCELL em Sorocaba"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative min-h-[130px] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/store-lab-1.jpg"
                    alt="Laboratório técnico NJCELL para reparo de iPhone e Mac"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
                <div className="relative min-h-[130px] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/store-lab-2.jpg"
                    alt="Bancada técnica NJCELL especializada em Apple"
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
              </div>

              <p className="leading-relaxed text-gray-200">
                Desde {FOUNDED_YEAR}, somos referência em Sorocaba e região quando
                o assunto é cuidado com <strong className="text-white">iPhones e Macs</strong>.
                Nossa equipe é formada por especialistas em eletrônica, preparados
                para resolver desde os problemas mais simples até os mais avançados,
                sempre com transparência, confiança e agilidade.
              </p>

              <div>
                <WhatsAppButton label="Solicitar Orçamento!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
