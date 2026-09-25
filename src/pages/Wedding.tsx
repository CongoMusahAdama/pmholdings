import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SEO from '../components/SEO'
import CTA from '../components/CTA'
import AnimatedHeading from '../components/AnimatedHeading'
import { weddingChapters, weddingPhotos, type WeddingPhoto } from '../data/weddingAlbum'

export default function Wedding() {
  const [active, setActive] = useState<WeddingPhoto | null>(null)
  const activeIndex = active ? weddingPhotos.findIndex((photo) => photo.id === active.id) : -1

  const go = (step: number) => {
    if (weddingPhotos.length === 0) return
    const next = (activeIndex + step + weddingPhotos.length) % weddingPhotos.length
    setActive(weddingPhotos[next])
  }

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowLeft') {
        setActive((current) => {
          if (!current) return current
          const index = weddingPhotos.findIndex((photo) => photo.id === current.id)
          return weddingPhotos[(index - 1 + weddingPhotos.length) % weddingPhotos.length]
        })
      }
      if (event.key === 'ArrowRight') {
        setActive((current) => {
          if (!current) return current
          const index = weddingPhotos.findIndex((photo) => photo.id === current.id)
          return weddingPhotos[(index + 1) % weddingPhotos.length]
        })
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <>
      <SEO
        title="Wedding Album"
        path="/wedding"
        description="Wedding album of Nana Quasi-Wusu (PM), #Blaklaaav22, 7th May 2022 — pre-wedding pictures, traditional marriage, church wedding, and reception."
        image="/images/wedding/church-01.jpg"
      />

      <section className="relative min-h-[52svh] overflow-hidden bg-ink md:min-h-[58svh]">
        <img
          src="/images/wedding/church-01.jpg"
          alt="Church wedding of Nana Quasi-Wusu (PM), 7th May 2022"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="site-container relative z-10 flex min-h-[52svh] flex-col justify-end pb-10 pt-20 sm:pb-12 md:min-h-[58svh] md:pb-14 md:pt-28">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            #Blaklaaav22 · 7th May 2022
          </p>
          <AnimatedHeading
            text="Wedding Album"
            className="font-sans text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-white/75 sm:mt-4 sm:text-base md:text-lg">
            Pre-wedding pictures, traditional marriage, church wedding, and reception.
          </p>
          <div className="action-row mt-6 sm:mt-7">
            <a href="#pre-wedding" className="btn-primary">
              Open the Album
            </a>
            <Link to="/gallery" className="btn-ghost-light">
              Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <nav className="sticky top-[4.25rem] z-30 border-b border-white/10 bg-ink/95 backdrop-blur-xl sm:top-[4.75rem] lg:top-[8.5rem]">
        <div className="site-container flex gap-1.5 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {weddingChapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="shrink-0 px-3.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-gold sm:text-[0.68rem]"
            >
              {chapter.title}
              <span className="ml-2 text-white/35">{chapter.photos.length}</span>
            </a>
          ))}
        </div>
      </nav>

      {weddingChapters.map((chapter) => (
        <section key={chapter.id} id={chapter.id} className="bg-ink">
          <div className="site-container py-8 md:py-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              {chapter.title}
            </p>
            {chapter.photos.length === 0 && (
              <p className="mt-3 max-w-md text-sm font-light text-white/55">
                Reception photographs from the day will be added here.
              </p>
            )}
          </div>
          {chapter.photos.length > 0 && (
            <div className="grid grid-cols-2 gap-[3px] sm:grid-cols-3 lg:grid-cols-4">
              {chapter.photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActive(photo)}
                  className="group relative aspect-[4/5] overflow-hidden bg-black"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 18%' }}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      ))}

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
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-white text-ink"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                go(-1)
              }}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white md:left-6"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                go(1)
              }}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white md:right-6"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={active.id}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              className="relative flex max-h-[94svh] w-full max-w-6xl flex-col overflow-hidden bg-ink md:flex-row"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[70svh] w-full object-contain md:max-h-[94svh]"
                />
              </div>
              <div className="w-full shrink-0 border-t border-white/10 p-5 md:w-[260px] md:border-l md:border-t-0 md:p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
                  #Blaklaaav22
                </p>
                <h3 className="mt-2 font-sans text-xl font-bold text-white">{active.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/55">{active.alt}</p>
                <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
                  {activeIndex + 1} / {weddingPhotos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA
        title="Book PM for Your Day"
        subtitle="Weddings, traditional ceremonies, and celebrations."
        primaryLabel="Contact Now"
        primaryTo="/contact"
        secondaryLabel="Full Gallery"
        secondaryTo="/gallery"
      />
    </>
  )
}
