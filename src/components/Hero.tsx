import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [
  {
    src: '/images/hero/home-mc.jpg',
    label: 'The Finest MC',
    caption: 'Broadcast & Stage Presence',
    position: '72% 14%',
  },
  {
    src: '/images/hero/home-foundation.jpg',
    label: 'PM Foundation',
    caption: 'Donation & Community Service',
    position: 'center 42%',
  },
  {
    src: '/images/hero/home-fashion.jpg',
    label: 'Fashion & Modeling',
    caption: 'Style, Culture, Presence',
    position: '68% 18%',
  },
  {
    src: '/images/hero/home-stage.jpg',
    label: 'Live Entertainment',
    caption: '15 Years of Excellence',
    position: '62% 16%',
  },
  {
    src: '/images/hero/home-blaklaaa.jpg',
    label: 'Blaklaaa Movement',
    caption: 'Proud to Be Black',
    position: 'center 48%',
  },
]

const SLIDE_MS = 5200

interface HeroProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaTo?: string
}

const ease = [0.22, 1, 0.36, 1] as const

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.18,
    },
  },
}

const titleWord = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export default function Hero({
  title = 'Welcome to Nana Quasi-Wusu',
  subtitle = 'The Finest MC — award-winning broadcaster, professional hypeman, humanitarian, fashion model, and entertainment consultant from Takoradi, Ghana.',
  ctaLabel = 'Read More',
  ctaTo = '/about',
}: HeroProps) {
  const [index, setIndex] = useState(0)
  const words = title.trim().split(/\s+/)
  const active = slides[index]

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.src
    })
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [index])

  return (
    <div>
      <section id="hero" className="relative min-h-[72svh] overflow-hidden bg-ink md:min-h-[82svh]">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={active.src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              <img
                src={active.src}
                alt={`${active.label} — Nana Quasi-Wusu (PM)`}
                className="h-full w-full object-cover"
                style={{ objectPosition: active.position }}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/55 via-black/28 to-black/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-gradient-to-t from-black/45 to-transparent" />

        <div className="site-container relative z-[3] flex min-h-[72svh] flex-col justify-center py-16 md:min-h-[82svh] md:py-20">
          <div className="max-w-xl text-left md:max-w-lg lg:max-w-xl">
            <motion.h1
              className="font-sans text-[1.85rem] font-bold uppercase leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.15rem]"
              variants={titleContainer}
              initial="hidden"
              animate="show"
              aria-label={title}
            >
              {words.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="mr-[0.28em] inline-block overflow-hidden last:mr-0"
                >
                  <motion.span className="inline-block" variants={titleWord}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="mt-4 max-w-md text-sm font-light leading-relaxed text-white md:mt-5 md:text-base"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.9, ease }}
              className="mt-7"
            >
              <Link to={ctaTo} className="btn-primary">
                {ctaLabel}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="site-container absolute inset-x-0 bottom-0 z-[4] pb-6 md:pb-8">
          <div className="flex items-end justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease }}
                className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70 sm:block"
              >
                <span className="text-gold">{String(index + 1).padStart(2, '0')}</span>
                <span className="mx-2 text-white/35">/</span>
                <span className="text-white/45">
                  {String(slides.length).padStart(2, '0')}
                </span>
                <span className="mx-3 text-white/25">—</span>
                {active.label}
              </motion.p>
            </AnimatePresence>

            <div
              className="ml-auto flex items-center gap-2"
              role="tablist"
              aria-label="Hero slides"
            >
              {slides.map((slide, i) => {
                const isActive = i === index
                return (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${slide.label}`}
                    onClick={() => setIndex(i)}
                    className={`relative h-1 overflow-hidden rounded-full transition-all duration-300 ${
                      isActive ? 'w-10 bg-white/25' : 'w-5 bg-white/30 hover:bg-white/50'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        key={index}
                        className="absolute inset-y-0 left-0 w-full origin-left bg-gold"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
