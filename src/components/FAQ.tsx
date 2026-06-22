import type { FaqItem } from "@/lib/seo";

type FAQProps = {
  title?: string;
  items: FaqItem[];
};

export default function FAQ({
  title = "Perguntas Frequentes",
  items,
}: FAQProps) {
  return (
    <section className="section-orange py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="container-njcell">
        <h2
          id="faq-heading"
          className="mb-10 text-center text-3xl font-bold text-white md:text-4xl"
        >
          {title}
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="card-dark group p-5 open:shadow-lg"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    className="text-nj-accent transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
