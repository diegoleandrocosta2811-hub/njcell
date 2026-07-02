import { ADDRESS, COMPANY_NAME, GOOGLE_MAPS_URL } from "@/lib/company";
import type { GoogleReviewsData } from "./types";
import { formatReviewAuthorName } from "./format";

const PLACES_TEXT_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const FIELD_MASK =
  "places.id,places.googleMapsUri,places.rating,places.userRatingCount,places.reviews";

type PlacesTextSearchResponse = {
  places?: Array<{
    id?: string;
    googleMapsUri?: string;
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      rating?: number;
      text?: { text?: string };
      publishTime?: string;
      authorAttribution?: {
        displayName?: string;
        photoUri?: string;
        uri?: string;
      };
    }>;
  }>;
};

function normalizePlaceId(id: string): string {
  return id.startsWith("places/") ? id.slice("places/".length) : id;
}

export async function fetchGoogleReviewsFromPlacesApi(
  apiKey: string,
): Promise<GoogleReviewsData | null> {
  const response = await fetch(PLACES_TEXT_SEARCH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify({
      textQuery: `${COMPANY_NAME} Apple Repair, ${ADDRESS}`,
      languageCode: "pt-BR",
      regionCode: "BR",
    }),
    next: { revalidate: 86_400 },
  });

  if (!response.ok) {
    console.error(
      `[reviews] Places API error ${response.status}: ${await response.text()}`,
    );
    return null;
  }

  const payload = (await response.json()) as PlacesTextSearchResponse;
  const place = payload.places?.[0];

  if (!place?.id || place.rating == null || place.userRatingCount == null) {
    return null;
  }

  const reviews =
    place.reviews
      ?.map((review) => {
        const text = review.text?.text?.trim();
        const author = review.authorAttribution?.displayName?.trim();
        if (!text || !author || !review.rating) return null;

        return {
          author: formatReviewAuthorName(author),
          rating: review.rating,
          text,
          publishedAt: review.publishTime ?? new Date().toISOString(),
          photoUrl: review.authorAttribution?.photoUri,
          profileUrl: review.authorAttribution?.uri,
        };
      })
      .filter((review): review is NonNullable<typeof review> => Boolean(review)) ??
    [];

  return {
    placeId: normalizePlaceId(place.id),
    googleMapsUri: place.googleMapsUri ?? GOOGLE_MAPS_URL,
    summary: {
      rating: place.rating,
      userRatingCount: place.userRatingCount,
    },
    reviews,
    syncedAt: new Date().toISOString(),
  };
}
