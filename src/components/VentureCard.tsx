import { Link } from 'react-router-dom'
import type { Venture } from '../data/ventures'

interface VentureCardProps {
  venture: Venture
  image: string
  index: number
}

export default function VentureCard({ venture, image, index }: VentureCardProps) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={venture.path}
      className="group grid overflow-hidden border border-line bg-white transition-colors duration-300 hover:border-ink sm:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-auto sm:min-h-[280px]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: 'center 18%' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/35 transition-colors duration-300 group-hover:bg-ink/25" />
        <span className="absolute left-4 top-4 flex h-16 w-16 items-center justify-center bg-white p-1.5 shadow-md md:h-[4.5rem] md:w-[4.5rem]">
          <img
            src={venture.logo}
            alt=""
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </span>
        <span className="absolute bottom-4 left-4 font-sans text-4xl font-bold tracking-tight text-white/25 md:text-5xl">
          {num}
        </span>
      </div>

      <div className="flex flex-col justify-between px-6 py-7 md:px-8 md:py-8">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
            {venture.category}
          </p>
          <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-ink md:text-[1.65rem]">
            {venture.name}
          </h3>
          <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink/45">
            {venture.tagline}
          </p>
          <p className="mt-5 line-clamp-3 text-sm font-light leading-relaxed text-muted">
            {venture.description}
          </p>
        </div>

        <span className="mt-8 inline-flex items-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-gold">
          Explore
        </span>
      </div>
    </Link>
  )
}
