import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { fetchGoogleReviewsFromPlacesApi } from "../src/lib/reviews/fetch-from-places-api";

async function main() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (!apiKey) {
    console.log("⊘ sync:reviews ignorado — defina GOOGLE_PLACES_API_KEY");
    return;
  }

  const data = await fetchGoogleReviewsFromPlacesApi(apiKey);

  if (!data) {
    console.error("✗ Não foi possível sincronizar avaliações do Google Places API");
    process.exit(1);
  }

  const outputDir = path.join(process.cwd(), "data");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(
    path.join(outputDir, "google-reviews.json"),
    `${JSON.stringify(data, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `✓ ${data.reviews.length} avaliações sincronizadas (${data.summary.rating} · ${data.summary.userRatingCount} total)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
