import Link from "next/link";
import StarRating from "@/components/StarRating";
import { GOOGLE_MAPS_URL } from "@/lib/company";
import {
  formatRatingValue,
  formatReviewCount,
} from "@/lib/reviews/format";
import type { GoogleReviewsData } from "@/lib/reviews/types";

type HeroGoogleReviewsProps = {
  data: GoogleReviewsData;
};

export default function HeroGoogleReviews({ data }: HeroGoogleReviewsProps) {
  const featuredReview =
    data.reviews.find((review) => review.text.length >= 40) ?? data.reviews[0];

  if (!featuredReview) return null;

  const mapsUrl = data.googleMapsUri || GOOGLE_MAPS_URL;

  return (
    <aside
      className="mx-auto mb-7 max-w-xl rounded-2xl border border-white/10 bg-black/35 p-4 text-left backdrop-blur-sm md:mb-8 lg:mx-0"
      aria-label="Avaliações de clientes no Google"
    >
      <Link
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-md transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nj-accent"
      >
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <StarRating
            rating={data.summary.rating}
            className="text-lg text-yellow-400"
            label={`${formatRatingValue(data.summary.rating)} de 5 estrelas no Google`}
          />
          <p className="text-sm font-semibold text-white">
            {formatRatingValue(data.summary.rating)} ·{" "}
            {formatReviewCount(data.summary.userRatingCount)} avaliações no Google
          </p>
        </div>

        <blockquote className="border-l-2 border-nj-accent pl-3">
          <p className="text-sm leading-relaxed text-gray-200 group-hover:text-white">
            &ldquo;{featuredReview.text}&rdquo;
          </p>
          <footer className="mt-2 text-xs font-semibold text-gray-300 group-hover:text-white">
            <cite className="not-italic">{featuredReview.author}</cite>
            <span aria-hidden="true"> · </span>
            <span>Google</span>
          </footer>
        </blockquote>
      </Link>
    </aside>
  );
}
