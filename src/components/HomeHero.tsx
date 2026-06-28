import WhatsAppButton from "./WhatsAppButton";
import { WARRANTY_MONTHS } from "@/lib/company";

const HERO_BG = "/images/hero-bg.png";
const HERO_BG_MOBILE = "/images/hero-bg-mobile.png";
const HERO_MOBILE_ASPECT = "682 / 1024";

export default function HomeHero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-nj-black text-white"
      aria-labelledby="hero-heading"
    >
      {/* Tablet e desktop — fundo atrás do texto */}
      <div
        className="absolute inset-0 hidden bg-cover bg-no-repeat md:block md:bg-[72%_center] lg:bg-right"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-black/92 md:via-black/60 md:to-black/10 lg:from-black/85 lg:via-black/35 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="hero-container relative z-10 max-md:pb-0 pt-24 md:flex md:min-h-[88svh] md:items-center md:pb-14 md:pt-28 lg:min-h-[92vh] lg:pb-16">
        <div className="w-full max-w-2xl text-center md:mx-auto lg:mx-0 lg:text-left">
          <h1
            id="hero-heading"
            className="mb-5 text-[2rem] font-extrabold leading-[1.12] tracking-tight md:mb-6 md:text-5xl md:font-bold md:leading-tight md:tracking-normal lg:mb-6 lg:text-[3.25rem] lg:leading-[1.15]"
          >
            Soluções rápidas para seu{" "}
            <span className="font-extrabold text-nj-accent md:font-bold">iPhone</span> e{" "}
            <span className="font-extrabold text-nj-accent md:font-bold">Mac</span> em Sorocaba
          </h1>
          <p className="mx-auto mb-7 max-w-xl text-[1.0625rem] font-medium leading-[1.65] text-white/95 md:mb-7 md:text-xl md:font-normal md:leading-relaxed md:text-gray-200 lg:mx-0 lg:mb-8">
            Na NJCELL, seu aparelho Apple não fica parado! Fazemos substituição
            de tela, bateria e câmeras em{" "}
            <strong className="font-bold text-nj-accent">até 30 minutos</strong>, sempre com
            peças de qualidade e{" "}
            <strong className="font-bold text-nj-accent">
              garantia de {WARRANTY_MONTHS} meses
            </strong>
            .
          </p>
          <div className="flex justify-center lg:justify-start">
            <WhatsAppButton
              label="Solicitar Orçamento!"
              className="max-md:px-7 max-md:py-3.5 max-md:text-lg max-md:font-bold"
            />
          </div>
        </div>
      </div>

      {/* Mobile — raposa + bancada, logo abaixo do botão */}
      <div
        className="relative -mt-4 w-full bg-contain bg-top bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url('${HERO_BG_MOBILE}')`,
          aspectRatio: HERO_MOBILE_ASPECT,
        }}
        role="img"
        aria-label="Mascote NJCELL em assistência técnica Apple em Sorocaba"
      />
    </section>
  );
}
