import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SEO from '../components/SEO'
import CTA from '../components/CTA'
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from '../data/gallery'

const heroSlides = [
  { src: '/images/c5.jpg', position: '72% 18%', label: 'Indomie Fest' },
  { src: '/images/mc4.jpg', position: '50% 20%', label: 'Stage Energy' },
  { src: '/images/about.jpg', position: '55% 15%', label: 'Portrait' },
  { src: '/images/press/tgma-host-ameyaw.jpg', position: '50% 20%', label: 'TGMA Host' },
  { src: '/images/press/made-in-taadi-mc-1.jpg', position: '40% 20%', label: 'Made In Taadi' },
  { src: '/images/blaklaaa.jpg', position: '50% 30%', label: 'Blaklaaa' },
]

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>('All')
  const [active, setActive] = useState<GalleryItem | null>(null)
  const [slide, setSlide] = useState(0)

  const items = useMemo(
    () =>
      filter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  )

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: galleryItems.length }
    for (const cat of galleryCategories) {
      if (cat === 'All') continue
      map[cat] = galleryItems.filter((i) => i.category === cat).length
    }
    return map
  }, [])

  const activeIndex = active ? items.findIndex((i) => i.id === active.id) : -1

  const goPrev = () => {
    if (activeIndex < 0 || items.length === 0) return
    setActive(items[(activeIndex - 1 + items.length) % items.length])
  }

  const goNext = () => {
    if (activeIndex < 0 || items.length === 0) return
    setActive(items[(activeIndex + 1) % items.length])
  }

  // Hero carousel autoplay
  useEffect(() => {
    heroSlides.forEach((s) => {
      const img = new Image()
      img.src = s.src
    })
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((i) => (i + 1) % heroSlides.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft') {
        setActive((current) => {
          if (!current) return current
          const idx = items.findIndex((i) => i.id === current.id)
          if (idx < 0 || items.length === 0) return current
          return items[(idx - 1 + items.length) % items.length]
        })
      }
      if (e.key === 'ArrowRight') {
        setActive((current) => {
          if (!current) return current
          const idx = items.findIndex((i) => i.id === current.id)
          if (idx < 0 || items.length === 0) return current
          return items[(idx + 1) % items.length]
        })
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, items])

  return (
    <>
      <SEO
        title="Gallery"
        path="/gallery"
        description="PM Holdings gallery — photos of Nana Quasi-Wusu (PM): broadcasting, events, PM Foundation outreach, fashion, and Blaklaaa Movement moments."
      />

      {/* Gallery hero — clean full-bleed like venture pages */}
      <section className="relative min-h-[52svh] overflow-hidden bg-ink md:min-h-[58svh]">
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <motion.div
              key={s.src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === slide ? 1 : 0, scale: i === slide ? 1 : 1.04 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ zIndex: i === slide ? 1 : 0 }}
              aria-hidden={i !== slide}
            >
              <img
                src={s.src}
                alt={i === slide ? `${s.label} — Nana Quasi-Wusu (PM)` : ''}
                className="h-full w-full object-cover"
                style={{ objectPosition: s.position }}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 z-[2] bg-black/55" />

        <div className="site-container relative z-10 flex min-h-[52svh] flex-col justify-end pb-10 pt-20 sm:pb-12 md:min-h-[58svh] md:pb-14 md:pt-28">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Visual Archive
              </p>
              <h1 className="font-sans text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                The Gallery
              </h1>
              <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-white/75 sm:mt-4 sm:text-base md:text-lg">
                Stages, radio, foundation, fashion, and culture — {galleryItems.length} moments from
                the story of Nana Quasi-Wusu (PM).
              </p>
              <div className="action-row mt-6 sm:mt-7">
                <a href="#collection" className="btn-primary">
                  Browse Moments
                </a>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={heroSlides[slide].label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[0.68rem]"
                >
                  {String(slide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  <span className="mx-2 text-white/30">—</span>
                  {heroSlides[slide].label}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <div className="flex items-center justify-between gap-3 sm:justify-start md:justify-end">
              <div className="flex gap-1.5">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setSlide(i)}
                    aria-label={`Go to ${s.label}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide ? 'w-7 bg-gold' : 'w-1.5 bg-white/35 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setSlide((i) => (i - 1 + heroSlides.length) % heroSlides.length)
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-gold hover:text-gold"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSlide((i) => (i + 1) % heroSlides.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-gold hover:text-gold"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + animated grid */}
      <section id="collection" className="relative bg-ink">
        <div className="sticky top-[4.25rem] z-30 border-b border-white/10 bg-ink/95 backdrop-blur-xl sm:top-[4.75rem] lg:top-[8.5rem]">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 md:px-6 md:py-4">
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold/90">
                Filter moments
              </p>
              <div
                className="flex items-center gap-1.5 overflow-x-auto overscroll-x-contain pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Gallery categories"
              >
                {galleryCategories.map((cat) => {
                  const isActive = filter === cat
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setFilter(cat)}
                      className="relative min-h-10 shrink-0 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-colors sm:px-4 sm:py-2.5 sm:text-[0.68rem]"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="gallery-filter-pill"
                          className="absolute inset-0 bg-gold"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative z-10 inline-flex items-center gap-2 ${
                          isActive ? 'text-ink' : 'text-white/65 hover:text-white'
                        }`}
                      >
                        {cat}
                        <span
                          className={`min-w-[1.4rem] text-center text-[0.6rem] tabular-nums ${
                            isActive ? 'text-ink/70' : 'text-white/35'
                          }`}
                        >
                          {counts[cat] ?? 0}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
            <p className="hidden shrink-0 text-right text-xs text-white/40 sm:block">
              <span className="font-semibold text-gold">{items.length}</span> showing
            </p>
          </div>
          <motion.div
            key={filter}
            className="h-[2px] bg-gold"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Full-bleed grid with scroll-in animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-2 gap-[3px] bg-ink sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                className="group relative aspect-[4/5] w-full overflow-hidden bg-black"
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2, margin: '0px 0px -40px 0px' }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i % 10, 9) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center 18%' }}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="pointer-events-none absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {items.length === 0 && (
          <div className="bg-[#f7f5f0] py-20 text-center">
            <p className="text-muted">No images in this category yet.</p>
            <button type="button" onClick={() => setFilter('All')} className="btn-primary mt-6">
              View All
            </button>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 bg-[#f7f5f0] py-12">
          <Link to="/about#events" className="btn-primary">
            See Event Stages
          </Link>
          <Link to="/contact" className="btn-ghost">
            Book PM
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/94 p-2 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-white text-ink shadow-lg transition hover:bg-gold hover:text-white md:right-8 md:top-8"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    goPrev()
                  }}
                  className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-white transition hover:border-gold hover:text-gold md:left-6"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    goNext()
                  }}
                  className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-white transition hover:border-gold hover:text-gold md:right-6"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              key={active.id}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="relative flex max-h-[94svh] w-full max-w-6xl flex-col overflow-hidden bg-ink md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[70svh] w-full object-contain md:max-h-[94svh]"
                />
              </div>
              <div className="flex w-full shrink-0 flex-col justify-between border-t border-white/10 p-5 md:w-[260px] md:border-l md:border-t-0 md:p-6 lg:w-[300px]">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
                    {active.category}
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-bold text-white md:text-2xl">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                    {active.alt}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <p className="text-xs text-white/40">
                    {activeIndex + 1} / {items.length}
                  </p>
                  <Link
                    to="/contact"
                    className="bg-gold px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-gold-dark"
                    onClick={() => setActive(null)}
                  >
                    Book PM
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA
        title="Want PM at Your Next Moment?"
        subtitle="Bookings, brand shoots, foundation partnerships, and collaborations."
        primaryLabel="Contact Now"
        primaryTo="/contact"
        secondaryLabel="About PM"
        secondaryTo="/about"
      />
    </>
  )
}
