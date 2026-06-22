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

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
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
            >
              <div className="mb-3 flex items-center justify-between">
                <GoogleLogo />
                <div className="flex gap-0.5 text-yellow-400" aria-label={`${item.rating} estrelas`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="text-sm font-bold text-gray-900">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
