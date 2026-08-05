interface MediaImageProps {
  src: string
  alt: string
  aspect?: 'portrait' | 'landscape' | 'square' | 'wide'
  className?: string
  objectPosition?: string
}

const aspectMap = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
}

export default function MediaImage({
  src,
  alt,
  aspect = 'portrait',
  className = '',
  objectPosition = 'center',
}: MediaImageProps) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-soft shadow-[var(--shadow-soft)] ${aspectMap[aspect]} ${
        className.includes('rounded') ? '' : 'rounded-md'
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
      />
    </div>
  )
}
