type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
  label?: string;
};

export default function StarRating({
  rating,
  max = 5,
  className = "text-yellow-400",
  label,
}: StarRatingProps) {
  const rounded = Math.round(rating);

  return (
    <div
      className={`flex gap-0.5 ${className}`}
      role="img"
      aria-label={label ?? `${rating} de ${max} estrelas`}
    >
      {Array.from({ length: max }).map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < rounded ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
