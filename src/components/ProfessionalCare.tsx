import Image from "next/image";

const features = [
  {
    title: "Entrega rápida",
    description:
      "Reparos em iPhone e MacBook concluídos em até 30 minutos na maioria dos serviços.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Peças de Qualidade",
    description:
      "Utilizamos peças compatíveis com padrão Apple para garantir desempenho e durabilidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    title: "Confiança Total",
    description:
      "Garantia de 6 meses, orçamento transparente e equipe especializada em produtos Apple.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProfessionalCare() {
  return (
    <section className="section-orange py-16 md:py-20" aria-labelledby="care-heading">
      <div className="container-njcell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2
              id="care-heading"
              className="mb-10 text-3xl font-bold leading-tight text-white md:text-4xl"
            >
              Seus dispositivos Apple merecem cuidado profissional
            </h2>

            <div className="space-y-8">
              {features.map((feature) => (
                <article key={feature.title} className="flex gap-4">
                  <div className="shrink-0 text-white" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-white/90">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/store-lab-1.jpg"
              alt="iPhone e MacBook em assistência técnica na NJCELL Sorocaba"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
