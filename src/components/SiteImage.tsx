import Image, { type ImageProps } from "next/image";

type SiteImageProps = ImageProps & {
  /** Tooltip e título SEO da imagem. Usa o alt quando omitido. */
  imageTitle?: string;
  caption?: string;
  figureClassName?: string;
};

export default function SiteImage({
  alt,
  imageTitle,
  caption,
  figureClassName,
  className,
  priority,
  loading,
  quality = 80,
  ...props
}: SiteImageProps) {
  const title =
    imageTitle ?? (typeof alt === "string" && alt.length > 0 ? alt : undefined);

  const image = (
    <Image
      {...props}
      alt={alt}
      title={title}
      className={className}
      priority={priority}
      loading={priority ? undefined : (loading ?? "lazy")}
      quality={quality}
      placeholder={props.placeholder ?? "empty"}
    />
  );

  if (!caption) {
    return image;
  }

  return (
    <figure className={figureClassName}>
      {image}
      <figcaption className="mt-2 text-center text-sm text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}
