import Image from "next/image";
import { ADDRESS, MAP_EMBED_URL, PHONE, WHATSAPP_URL } from "@/lib/company";

export default function HomeContact() {
  return (
    <section
      id="contato"
      className="section-orange py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-njcell">
        <h2
          id="contact-heading"
          className="mb-10 text-center text-3xl font-bold text-white md:text-4xl"
        >
          Venha nos fazer uma visita!
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border-4 border-white/20 shadow-xl">
            <iframe
              src={MAP_EMBED_URL}
              title="Localização da NJCELL em Sorocaba"
              className="h-[320px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-6">
            <div className="relative min-h-[200px] overflow-hidden rounded-3xl">
              <Image
                src="/images/store-lab-2.jpg"
                alt="Área técnica da NJCELL em Sorocaba"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>

            <div className="card-dark p-6 md:p-8">
              <div className="mb-5 flex items-start gap-4">
                <span className="text-2xl" aria-hidden="true">💬</span>
                <div>
                  <p className="mb-1 font-bold text-white">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-nj-green hover:underline"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl" aria-hidden="true">📍</span>
                <div>
                  <p className="mb-1 font-bold text-white">Endereço</p>
                  <address className="not-italic leading-relaxed text-gray-300">
                    {ADDRESS}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
