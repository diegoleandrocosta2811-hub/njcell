import { existsSync, readFileSync } from "fs";
import path from "path";
import { cache } from "react";
import { fetchGoogleReviewsFromPlacesApi } from "./fetch-from-places-api";
import type { GoogleReviewsData } from "./types";

const REVIEWS_FILE = path.join(process.cwd(), "data", "google-reviews.json");

function readReviewsFile(): GoogleReviewsData | null {
  if (!existsSync(REVIEWS_FILE)) return null;

  try {
    const parsed = JSON.parse(readFileSync(REVIEWS_FILE, "utf8")) as GoogleReviewsData;
    if (
      !parsed?.summary?.rating ||
      !parsed.summary.userRatingCount ||
      !Array.isArray(parsed.reviews)
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

async function loadGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (apiKey) {
    const live = await fetchGoogleReviewsFromPlacesApi(apiKey);
    if (live) return live;
  }

  return readReviewsFile();
}

/** Avaliações do Perfil da Empresa no Google — cache por request + revalidate diário na API. */
export const getGoogleReviews = cache(loadGoogleReviews);

export function hasGoogleReviews(
  data: GoogleReviewsData | null,
): data is GoogleReviewsData {
  return Boolean(data?.summary.userRatingCount && data.reviews.length > 0);
}
