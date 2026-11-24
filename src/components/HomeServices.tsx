import type { ReactNode } from "react";
import SiteImage from "./SiteImage";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

const DEVICE_FLOAT_CLASS =
  "pointer-events-none absolute inset-x-0 top-0 z-20 flex h-40 -translate-y-1 items-end justify-center px-3 sm:h-44 sm:-translate-y-2 md:h-48 md:-translate-y-3";

const DEVICE_IMAGE_CLASS =
  "relative z-30 h-[118%] w-auto max-w-[94%] object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.55)]";

const CARD_BODY_CLASS =
  "card-dark relative z-0 flex min-h-full flex-1 flex-col px-6 pb-6 pt-44 sm:px-8 sm:pb-8 sm:pt-48 md:pt-52";

function DeviceFloat({ children }: { children: ReactNode }) {
  return (
    <div className={DEVICE_FLOAT_CLASS}>
      <div
        className="absolute bottom-1 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-black/50 blur-xl"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

function ServiceCardLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-nj-accent transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nj-accent"
    >
      <span>{children}</span>
      <span aria-hidden="true" className="shrink-0">
        →
      </span>
    </Link>
  );
}

export default function HomeServices() {
  return (
    <section
      id="servicos"
      className="section-black py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="container-njcell">
        <h2
          id="services-heading"
          className="mb-14 text-center text-3xl font-bold leading-snug text-white md:mb-16 md:text-4xl"
        >
          Tela danificada? Bateria viciada?
          <br />
          A gente resolve!
        </h2>

        <div className="grid items-stretch gap-10 pt-4 md:grid-cols-2 md:gap-8 md:pt-6">
          <article className="relative flex h-full flex-col overflow-visible">
            <DeviceFloat>
              <SiteImage
                src="/images/iphone-njcell-assistencia-tecnica-sorocaba.png"
                alt="Conserto de iPhone em Sorocaba"
                imageTitle="Conserto de iPhone Sorocaba - NJCELL"
                width={432}
                height={557}
                sizes="(max-width: 768px) 80vw, 380px"
                className={DEVICE_IMAGE_CLASS}
              />
            </DeviceFloat>

            <div className={CARD_BODY_CLASS}>
              <h3 className="mb-2 text-2xl font-bold text-white">iPhone</h3>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-nj-accent">
                iOS
              </p>
              <p className="mb-6 flex-1 leading-relaxed text-gray-300">
              Substituição de tela, vidro, tampa traseira e câmeras, bateria, recuperação de placa,
              Face ID, conectores Tipo C e Lightning. Ajustes gerais para todos os modelos de
              iPhones.
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <WhatsAppButton label="Solicitar Orçamento!" />
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  <ServiceCardLink href="/conserto-iphone-sorocaba">
                    Saiba mais sobre iPhone
                  </ServiceCardLink>
                </div>
              </div>
            </div>
          </article>

          <article className="relative flex h-full flex-col overflow-visible">
            <DeviceFloat>
              <SiteImage
                src="/images/conserto-ipad-sorocaba-njcell.png"
                alt="Conserto de iPad em Sorocaba"
                imageTitle="Conserto de iPad Sorocaba - NJCELL"
                width={505}
                height={555}
                sizes="(max-width: 768px) 80vw, 380px"
                className={DEVICE_IMAGE_CLASS}
              />
            </DeviceFloat>

            <div className={CARD_BODY_CLASS}>
              <h3 className="mb-2 text-2xl font-bold text-white">iPad e Apple Watch</h3>
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-nj-accent">
                iPadOS & watchOS
              </p>
              <p className="mb-6 flex-1 leading-relaxed text-gray-300">
                Troca de tela de iPad e Apple Watch, troca de bateria de iPad e Apple Watch,
                conector, componentes e ajustes gerais.
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <WhatsAppButton label="Solicitar Orçamento!" />
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  <ServiceCardLink href="/conserto-ipad-sorocaba">
                    Conserto iPad
                  </ServiceCardLink>
                  <ServiceCardLink href="/conserto-apple-watch-sorocaba">
                    Apple Watch
                  </ServiceCardLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
