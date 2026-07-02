/** Exibe nome público: primeiro nome + inicial do sobrenome. */
export function formatReviewAuthorName(displayName: string): string {
  const trimmed = displayName.trim();
  if (!trimmed) return "Cliente";

  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0];

  const first = parts[0];
  const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
  return `${first} ${lastInitial}.`;
}

export function formatRatingValue(rating: number): string {
  return rating.toLocaleString("pt-BR", {
    minimumFractionDigits: rating % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  });
}

export function formatReviewCount(count: number): string {
  return count.toLocaleString("pt-BR");
}
