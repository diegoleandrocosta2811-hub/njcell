import type { FaqItem } from "@/lib/seo";

type FAQProps = {
  title?: string;
  items: FaqItem[];
  headingId?: string;
};

export default function FAQ({
  title = "Perguntas Frequentes",
  items,
  headingId = "faq-heading",
}: FAQProps) {
  return (
    <section className="section-orange py-16 md:py-20" aria-labelledby={headingId}>
      <div className="container-njcell">
        <h2
          id={headingId}
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
              <summary className="cursor-pointer list-none rounded-md text-lg font-semibold text-white marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nj-accent [&::-webkit-details-marker]:hidden">
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
              <div className="mt-4 leading-relaxed text-gray-200">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
