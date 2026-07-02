import Link from "next/link";
import StarRating from "@/components/StarRating";
import { GOOGLE_MAPS_URL } from "@/lib/company";
import { formatGoogleReviewsHeadline } from "@/lib/reviews/format";
import type { GoogleReviewsData } from "@/lib/reviews/types";

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

type TestimonialsProps = {
  data: GoogleReviewsData;
};

export default function Testimonials({ data }: TestimonialsProps) {
  const mapsUrl = data.googleMapsUri || GOOGLE_MAPS_URL;

  return (
    <section className="section-black py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="container-njcell">
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-1 w-12 bg-nj-accent" aria-hidden="true" />
            <h2
              id="testimonials-heading"
              className="text-2xl font-bold text-white md:text-3xl"
            >
              O que dizem nossos clientes:
            </h2>
          </div>

          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center justify-center gap-2 rounded-md text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nj-accent"
          >
            <StarRating rating={data.summary.rating} className="text-yellow-400" />
            <span>
              {formatGoogleReviewsHeadline(
                data.summary.rating,
                data.summary.userRatingCount,
              )}
            </span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {data.reviews.map((item) => (
            <blockquote
              key={`${item.author}-${item.publishedAt}`}
              className="rounded-2xl bg-white p-6 text-left shadow-lg"
              cite={mapsUrl}
            >
              <div className="mb-3 flex items-center justify-between">
                <QuoteIcon />
                <StarRating rating={item.rating} className="text-yellow-600" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-800">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="text-sm font-bold text-gray-900">
                <cite className="not-italic">{item.author}</cite>
                <span className="ml-2 text-xs font-medium text-gray-500">· Google</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
