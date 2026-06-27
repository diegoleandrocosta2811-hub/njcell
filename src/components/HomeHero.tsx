import Image from "next/image";
import SiteImage from "./SiteImage";
import WhatsAppButton from "./WhatsAppButton";
import { WARRANTY_MONTHS } from "@/lib/company";

export default function HomeHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] overflow-hidden bg-nj-black text-white"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center opacity-40"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />

      <div className="container-njcell relative z-10 flex min-h-[92vh] items-center pb-16 pt-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <h1
              id="hero-heading"
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              Soluções rápidas para seu{" "}
              <span className="text-nj-accent">iPhone</span> e{" "}
              <span className="text-nj-accent">Mac</span> em Sorocaba
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl lg:mx-0">
              Na NJCELL, seu aparelho Apple não fica parado! Fazemos substituição
              de tela, bateria e câmeras em{" "}
              <strong className="text-white">até 30 minutos</strong>, sempre com
              peças de qualidade e garantia de {WARRANTY_MONTHS} meses.
            </p>
            <div className="flex justify-center lg:justify-start">
              <WhatsAppButton label="Solicitar Orçamento!" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[5/3] w-full">
              <SiteImage
                src="/images/assistencia-macbook-sorocaba-njcell.png"
                alt="MacBook em assistência técnica na NJCELL Sorocaba"
                imageTitle="Assistência técnica MacBook Sorocaba - NJCELL"
                fill
                className="object-contain object-center drop-shadow-2xl"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
              />
              <div className="absolute -bottom-2 right-0 w-[38%] sm:w-[34%]">
                <SiteImage
                  src="/images/iphone-njcell-assistencia-tecnica-sorocaba.png"
                  alt="iPhone em conserto na NJCELL Sorocaba"
                  imageTitle="Conserto de iPhone Sorocaba - NJCELL"
                  width={432}
                  height={557}
                  className="h-auto w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
