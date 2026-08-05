import BrandLogo from './BrandLogo'

interface PlaceholderImageProps {
  label: string
  aspect?: 'portrait' | 'landscape' | 'square' | 'wide' | 'hero'
  className?: string
}

const aspectMap = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
  hero: 'aspect-[4/5] md:aspect-[3/4]',
}

export default function PlaceholderImage({
  label,
  aspect = 'portrait',
  className = '',
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-soft shadow-[var(--shadow-soft)] ${aspectMap[aspect]} ${className.includes('rounded') ? '' : 'rounded-md'} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <BrandLogo className="h-16 w-16 md:h-20 md:w-20" />
        <span className="max-w-[13rem] text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted">
          {label}
        </span>
      </div>
    </div>
  )
}
