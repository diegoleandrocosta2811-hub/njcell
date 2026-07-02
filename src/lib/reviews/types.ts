export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  publishedAt: string;
  photoUrl?: string;
  profileUrl?: string;
};

export type GoogleReviewsSummary = {
  rating: number;
  userRatingCount: number;
};

export type GoogleReviewsData = {
  placeId: string;
  googleMapsUri: string;
  summary: GoogleReviewsSummary;
  reviews: GoogleReview[];
  syncedAt: string;
};
