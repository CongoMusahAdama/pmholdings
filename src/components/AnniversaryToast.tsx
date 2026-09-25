import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const ANNIVERSARY = '2026-09-25'

const collage = [
  { src: '/images/pm4.jpg', x: 30, y: 80 },
  { src: '/images/hero-celebration.webp', x: 320, y: 80 },
  { src: '/images/portrait-anniversary.jpg', x: 30, y: 250 },
  { src: '/images/pm-15-years.webp', x: 320, y: 250 },
]

function isAnniversaryDay() {
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Africa/Accra',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
  return today === ANNIVERSARY
}

function PhotoSixteen({ className }: { className?: string }) {
  return (
    <svg
      viewBox="30 80 580 340"
      className={className}
      role="img"
      aria-label="16"
    >
      <defs>
        <mask id="pm-sixteen-mask">
          <rect x="30" y="80" width="580" height="340" fill="black" />
          <text
            x="320"
            y="400"
            textAnchor="middle"
            fill="white"
            fontFamily="Manrope, sans-serif"
            fontWeight="800"
            fontSize="480"
            letterSpacing="-20"
          >
            16
          </text>
        </mask>
      </defs>
      <g mask="url(#pm-sixteen-mask)">
        <g className="anniversary-photos">
          {collage.map((shot) => (
            <image
              key={shot.src}
              href={shot.src}
              x={shot.x}
              y={shot.y}
              width="290"
              height="170"
              preserveAspectRatio="xMidYMid slice"
            />
          ))}
        </g>
      </g>
    </svg>
  )
}

export default function AnniversaryToast() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  useEffect(() => {
    if (!isAnniversaryDay()) return
    const timer = window.setTimeout(() => setOpen(true), 500)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    const timer = window.setTimeout(() => setOpen(false), 6500)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(timer)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="anniversary-title"
          className="fixed inset-0 z-[120] overflow-hidden bg-[#111111] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-ink md:right-8 md:top-8"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex h-full flex-col px-5 pb-3 pt-14 md:flex-row md:items-center md:gap-10 md:px-14 md:py-10 lg:gap-14 lg:px-20">
            <motion.div
              className="shrink-0 md:w-[min(34%,26rem)]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold">
                25 September
              </p>
              <h2
                id="anniversary-title"
                className="mt-3 max-w-[11ch] font-sans text-[2.05rem] font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:max-w-[12ch] md:text-6xl lg:text-7xl"
              >
                It’s Our 16 Year Anniversary
              </h2>
              <p className="mt-3 max-w-sm text-sm font-light leading-snug text-white/75 sm:text-lg md:mt-6 md:max-w-md md:leading-relaxed">
                Sixteen years of The Finest MC. The voice, the stages, and a hallmark that still holds.
              </p>
            </motion.div>

            <div className="flex min-h-0 flex-1 items-end justify-center overflow-hidden md:h-full md:items-center md:justify-end">
              <motion.div
                className="flex h-full min-h-0 w-full items-end justify-center md:items-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9, x: 36 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <PhotoSixteen className="h-auto w-[148vw] max-h-full max-w-none shrink-0 md:w-[min(100%,calc(76vh*580/340))] md:max-h-none md:max-w-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
