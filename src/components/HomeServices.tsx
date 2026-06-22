import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

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
          className="mb-12 text-center text-3xl font-bold leading-snug text-white md:text-4xl"
        >
          Tela danificada? Bateria viciada?
          <br />
          A gente resolve!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="card-dark flex flex-col overflow-hidden p-6 md:p-8">
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/service-iphone.png"
                alt="Conserto de iPhone em Sorocaba"
                width={200}
                height={280}
                className="h-48 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">iPhone</h3>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-nj-accent">
              iOS
            </p>
            <p className="mb-6 flex-1 leading-relaxed text-gray-300">
              Substituição de tela e bateria, recuperação de placa, câmera,
              conector Lightning e ajustes gerais para todos os modelos de iPhone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton label="Solicitar Orçamento!" className="text-sm" />
              <Link
                href="/conserto-iphone-sorocaba"
                className="text-center text-sm font-semibold text-nj-accent hover:underline"
              >
                Saiba mais sobre iPhone →
              </Link>
            </div>
          </article>

          <article className="card-dark flex flex-col overflow-hidden p-6 md:p-8">
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/service-mac.png"
                alt="Assistência MacBook em Sorocaba"
                width={280}
                height={200}
                className="h-48 w-auto object-contain"
              />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Mac & MacBook</h3>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-nj-accent">
              macOS
            </p>
            <p className="mb-6 flex-1 leading-relaxed text-gray-300">
              Upgrade de memória, substituição de componentes, formatação,
              teclado, tela, bateria e ajustes gerais para MacBook e iMac.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton label="Solicitar Orçamento!" className="text-sm" />
              <Link
                href="/assistencia-macbook-sorocaba"
                className="text-center text-sm font-semibold text-nj-accent hover:underline"
              >
                Saiba mais sobre Mac →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
