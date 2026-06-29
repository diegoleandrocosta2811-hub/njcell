const testimonials = [
  {
    name: "Marcos A.",
    text: "Trocaram o flex da câmera frontal do meu iPhone, ficou como novo novamente. Recomendo a NJCELL em Sorocaba.",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    text: "Fizeram a substituição de tela do meu iPhone em menos de 1h30, serviço impecável. Super recomendo!",
    rating: 5,
  },
  {
    name: "Ricardo M.",
    text: "Levei meu MacBook lento e resolveram com upgrade de memória. Atendimento profissional e preço justo.",
    rating: 5,
  },
  {
    name: "Camila S.",
    text: "Bateria do iPhone trocada rapidamente, com garantia e explicação clara. Melhor assistência Apple da região.",
    rating: 5,
  },
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-nj-accent"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M7.17 6A5.17 5.17 0 002 11.17V18h5.17v-6.83H5.17V11A2 2 0 017.17 9H9V6H7.17zm9.66 0A5.17 5.17 0 0012 11.17V18h5.17v-6.83H17.83V11a2 2 0 012-2h1.83V6h-1.83z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="section-black py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="container-njcell">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="h-1 w-12 bg-nj-accent" aria-hidden="true" />
          <h2
            id="testimonials-heading"
            className="text-2xl font-bold text-white md:text-3xl"
          >
            O que dizem nossos clientes:
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl bg-white p-6 text-left shadow-lg"
              cite="depoimento de cliente"
            >
              <div className="mb-3 flex items-center justify-between">
                <QuoteIcon />
                <div
                  className="flex gap-0.5 text-yellow-600"
                  role="img"
                  aria-label={`${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-800">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="text-sm font-bold text-gray-900">
                <cite className="not-italic">{item.name}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
