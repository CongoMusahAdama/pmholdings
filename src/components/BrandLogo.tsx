interface BrandLogoProps {
  src?: string
  alt?: string
  className?: string
}

export default function BrandLogo({
  src = '/logos/pm.jpg',
  alt = 'Nana Quasi-Wusu (PM) — The Finest MC',
  className = 'h-11 w-11',
}: BrandLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      loading="eager"
    />
  )
}
