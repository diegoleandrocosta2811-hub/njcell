import WhatsAppButton from "./WhatsAppButton";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section
      className="section-orange py-20 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container-njcell">
        <div className="card-dark mx-auto max-w-4xl p-8 text-center md:p-12">
          <h1
            id="hero-heading"
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">{subtitle}</p>
          <WhatsAppButton label="Solicitar Orçamento!" />
        </div>
      </div>
    </section>
  );
}
