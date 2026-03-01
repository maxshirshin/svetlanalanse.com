interface CloudinaryImageProps {
  /** Cloudinary public ID (e.g., "gallery/breath-of-fire") */
  publicId: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width in pixels — used for responsive sizing */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Cloudinary cloud name — defaults to placeholder */
  cloudName?: string;
  /** Additional CSS classes */
  className?: string;
  /** Additional Cloudinary transformations (e.g., "e_sharpen:100") */
  transforms?: string;
}

/**
 * Renders an optimised image from Cloudinary with automatic format
 * selection (AVIF/WebP) and quality optimisation.
 *
 * Usage:
 * ```tsx
 * <CloudinaryImage
 *   publicId="gallery/breath-of-fire"
 *   alt="Breath of Fire — watercolour botanical painting"
 *   width={800}
 * />
 * ```
 *
 * TODO: Replace CLOUD_NAME with your actual Cloudinary cloud name.
 */
const DEFAULT_CLOUD_NAME = "CLOUD_NAME";

export function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  cloudName = DEFAULT_CLOUD_NAME,
  className = "",
  transforms = "",
}: CloudinaryImageProps) {
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

  // Build transformation string
  const parts = ["f_auto", "q_auto"];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (transforms) parts.push(transforms);

  const transformStr = parts.join(",");
  const src = `${baseUrl}/${transformStr}/${publicId}`;

  // Generate srcSet for responsive images
  const srcSet = width
    ? [0.5, 1, 1.5, 2]
        .map((scale) => {
          const w = Math.round(width * scale);
          const t = parts
            .filter((p) => !p.startsWith("w_"))
            .concat([`w_${w}`])
            .join(",");
          return `${baseUrl}/${t}/${publicId} ${w}w`;
        })
        .join(", ")
    : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={width ? `(max-width: ${width}px) 100vw, ${width}px` : undefined}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
