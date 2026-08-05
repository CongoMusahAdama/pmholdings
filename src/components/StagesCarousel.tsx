import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export interface StageItem {
  name: string
  role: string
  year: string
  image: string
}

interface StagesCarouselProps {
  stages: StageItem[]
}

/** Seamless auto-scrolling stage strip — no manual swap needed. */
export default function StagesCarousel({ stages }: StagesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  // Duplicate once so the loop can wrap without a jump
  const loop = [...stages, ...stages]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    let x = 0
    const speed = 0.45 // px per frame ~27px/s

    const tick = () => {
      if (!paused) {
        x += speed
        const half = track.scrollWidth / 2
        if (half > 0 && x >= half) x -= half
        track.style.transform = `translate3d(${-x}px, 0, 0)`
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused, stages])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-3 will-change-transform md:gap-4"
      >
        {loop.map((stage, i) => (
          <Link
            key={`${stage.name}-${i}`}
            to="/about#events"
            tabIndex={i < stages.length ? 0 : -1}
            aria-hidden={i >= stages.length}
            className="group relative aspect-[3/4] w-[72vw] max-w-[280px] shrink-0 overflow-hidden bg-ink sm:w-[240px] md:w-[260px] lg:w-[280px]"
          >
            <img
              src={stage.image}
              alt={i < stages.length ? `${stage.name}, ${stage.role}` : ''}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center 18%' }}
              loading="lazy"
              draggable={false}
            />
            <span className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/35" />
            <span className="absolute inset-x-0 bottom-0 bg-black/75 p-4 md:p-5">
              <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold">
                {stage.role}
              </span>
              <span className="mt-1 block font-sans text-base font-bold leading-snug text-white md:text-lg">
                {stage.name}
              </span>
              <span className="mt-1 block text-xs text-white/55">{stage.year}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
