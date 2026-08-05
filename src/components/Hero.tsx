import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const slides = [
  {
    src: '/images/portrait-suit.webp',
    label: 'The Finest MC',
    caption: 'MasterClass & Mentorship',
    position: '68% 28%',
  },
  {
    src: '/images/donation-kith.jpg',
    label: 'PM Foundation',
    caption: 'Donation & Community Service',
    position: '72% 22%',
  },
  {
    src: '/images/modeling-kente.webp',
    label: 'Fashion & Modeling',
    caption: 'Style, Culture, Presence',
    position: '70% 18%',
  },
  {
    src: '/images/hero-celebration.webp',
    label: 'Live Entertainment',
    caption: '15 Years of Excellence',
    position: '78% 30%',
  },
  {
    src: '/images/blaklaaa.jpg',
    label: 'Blaklaaa Movement',
    caption: 'Proud to Be Black',
    position: '50% 35%',
  },
]

interface HeroProps {
  eyebrow?: string
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
  eyebrow = 'Excellence Is My Hallmark',
  title = 'Welcome to Nana Quasi-Wusu',
  subtitle = 'The Finest MC — award-winning broadcaster, professional hypeman, humanitarian, fashion model, and entertainment consultant from Takoradi, Ghana.',
  ctaLabel = 'Read More',
  ctaTo = '/about',
}: HeroProps) {
  const [index, setIndex] = useState(0)
  const words = title.trim().split(/\s+/)

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.src
    })
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div>
      <section id="hero" className="relative min-h-[72svh] overflow-hidden bg-ink md:min-h-[78svh]">
        <div className="absolute inset-0">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: i === index ? 1 : 0,
                scale: i === index ? 1 : 1.05,
              }}
              transition={{ duration: 1.15, ease }}
              style={{ zIndex: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              <img
                src={slide.src}
                alt={i === index ? `${slide.label} — Nana Quasi-Wusu (PM)` : ''}
                className="h-full w-full object-cover"
                style={{ objectPosition: slide.position }}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 z-[2] bg-black/40" />

        <div className="site-container relative z-[3] flex min-h-[72svh] flex-col justify-center py-16 md:min-h-[78svh] md:py-20">
          <div className="max-w-xl text-left md:max-w-lg lg:max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold md:mb-4"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              className="font-sans text-[1.85rem] font-bold uppercase leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.15rem]"
              variants={titleContainer}
              initial="hidden"
              animate="show"
              aria-label={title}
            >
              {words.map((word, i) => (
                <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden last:mr-0">
                  <motion.span className="inline-block" variants={titleWord}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.div
              className="mt-4 h-[2px] origin-left bg-gold md:mt-5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, delay: 0.55, ease }}
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="mt-4 max-w-md text-sm font-light leading-relaxed text-white md:mt-5 md:text-base"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.9, ease }}
              className="action-row mt-7"
            >
              <Link to={ctaTo} className="btn-primary">
                {ctaLabel}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
