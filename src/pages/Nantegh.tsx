import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import CTA from '../components/CTA'
import { contactInfo } from '../data/ventures'

const trending = [
  {
    src: '/images/modeling-kente.webp',
    title: 'Craft Presence Look',
    brand: 'Nantegh',
    price: 'Inquire',
  },
  {
    src: '/images/portrait-kente.jpg',
    title: 'Kente Edit',
    brand: 'Nantegh',
    price: 'Inquire',
  },
  {
    src: '/images/about.jpg',
    title: 'Editorial Suiting',
    brand: 'Nante / Nantegh',
    price: 'Inquire',
  },
  {
    src: '/images/pm4.jpg',
    title: 'Everyday Smart',
    brand: 'Nantegh',
    price: 'Inquire',
  },
  {
    src: '/images/blaklaaa.jpg',
    title: 'Culture Line',
    brand: 'Nantegh',
    price: 'Inquire',
  },
  {
    src: '/images/portrait-anniversary.jpg',
    title: 'Signature Style',
    brand: 'Nantegh',
    price: 'Inquire',
  },
]

const shopLooks = [
  {
    src: '/images/portrait-kente.jpg',
    title: 'Handmade Finish',
    brand: 'Nante Shoes',
    price: 'Order',
  },
  {
    src: '/images/modeling-kente.webp',
    title: 'Look Smart Set',
    brand: 'Nantegh',
    price: 'Order',
  },
  {
    src: '/images/about.jpg',
    title: 'Walk In Comfort',
    brand: 'Nante',
    price: 'Order',
  },
  {
    src: '/images/pm4.jpg',
    title: 'Daily Presence',
    brand: 'Nantegh',
    price: 'Order',
  },
]

function ProductCard({
  item,
}: {
  item: { src: string; title: string; brand: string; price: string }
}) {
  return (
    <Link
      to="/contact"
      className="group block w-[200px] shrink-0 sm:w-[230px] md:w-[250px]"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#eceae6]">
        <img
          src={item.src}
          alt={item.title}
          className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: 'center 18%' }}
          loading="lazy"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <ShoppingBag className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-3.5 px-0.5">
        <h3 className="font-sans text-[0.95rem] font-semibold tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs text-muted">{item.brand}</p>
        <p className="mt-1.5 text-sm font-medium text-ink">{item.price}</p>
      </div>
    </Link>
  )
}

function ShopCarousel({
  items,
}: {
  items: { src: string; title: string; brand: string; price: string }[]
}) {
  const ref = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const id = window.setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 12) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: 260, behavior: 'smooth' })
      }
    }, 4200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="relative">
      <div className="absolute -top-14 right-0 z-10 flex gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eceae6] text-ink transition-colors hover:bg-ink hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eceae6] text-ink transition-colors hover:bg-ink hover:text-white"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <ProductCard key={item.src + item.title} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Nantegh() {
  return (
    <>
      <SEO
        title="Nantegh"
        description="Nantegh / Nante — Made-in-Ghana fashion and handmade footwear under Nana Quasi-Wusu (PM). Look smart, walk in comfort."
      />

      {/* Store welcome bar */}
      <div className="bg-ink py-2.5 text-center">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold">
          Welcome to the Nantegh shop · Look Smart · Walk In Comfort
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-[78svh] overflow-hidden bg-ink md:min-h-[88svh]">
        <img
          src="/images/modeling-kente.webp"
          alt="Nantegh shop — Look Smart Collection"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="site-container relative z-10 flex min-h-[78svh] flex-col items-center justify-center pb-16 pt-24 text-center md:min-h-[88svh]">
          <ScrollReveal>
            <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-white">
              Nantegh
            </p>
            <p className="mb-8 text-[0.62rem] font-medium uppercase tracking-[0.3em] text-white/70">
              Men essentials · Handmade in Ghana
            </p>
            <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Look Smart Collection
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/85 md:text-base">
              Originally handmade footwear and fashion presence — crafted to look smart and walk
              in comfort.
            </p>
            <a
              href="#shop"
              className="mt-9 inline-flex items-center gap-2 border-b border-white/80 pb-1 text-[0.8rem] font-semibold tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
            >
              Shop all
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="bg-white py-14 md:py-20">
        <div className="site-container">
          <h2 className="mb-10 font-sans text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
            Trending now
          </h2>
          <ShopCarousel items={trending} />
        </div>
      </section>

      {/* Shop the look */}
      <section id="shop" className="bg-white pb-16 pt-4 md:pb-24 md:pt-6">
        <div className="site-container">
          <h2 className="mb-8 font-sans text-3xl font-bold tracking-tight text-ink md:mb-10 md:text-4xl">
            Shop the look
          </h2>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <ScrollReveal className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl bg-[#eceae6]">
                <img
                  src="/images/portrait-kente.jpg"
                  alt="Featured Nantegh look"
                  className="aspect-[3/4] w-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-sans text-base font-semibold text-ink">Featured Look</p>
                  <p className="text-xs text-muted">Nantegh · Made in Ghana</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-gold"
                >
                  Inquire
                </Link>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7 lg:pt-2">
              <p className="mb-8 max-w-md text-sm font-light leading-relaxed text-muted">
                Build the look — handmade finishing, durable comfort, and presence that carries
                cultural pride.
              </p>
              <ShopCarousel items={shopLooks} />
            </div>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section className="bg-[#f5f4f1] py-14 md:py-16">
        <div className="site-container grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Footwear', src: '/images/portrait-kente.jpg', href: '/contact' },
            { title: 'Style & Presence', src: '/images/modeling-kente.webp', href: '/modeling' },
            { title: 'Culture Edit', src: '/images/blaklaaa.jpg', href: '/blacklaa' },
          ].map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:aspect-[3/4]"
            >
              <img
                src={cat.src}
                alt={cat.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-black/35" />
              <span className="absolute inset-x-0 bottom-0 p-5">
                <span className="font-sans text-lg font-bold text-white">{cat.title}</span>
                <span className="mt-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  Shop
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section id="story" className="bg-ink py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about.jpg"
                alt="Nantegh mission"
                className="aspect-square w-full object-cover"
                style={{ objectPosition: 'center 18%' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our Mission
            </h2>
            <div className="mt-5 space-y-4 text-base font-light leading-relaxed text-white/70">
              <p>
                Nantegh is Nana Quasi-Wusu’s fashion house — Made-in-Ghana craft with international
                finishing. Through Nante Shoes (est. 2014), the brand delivers originally handmade
                footwear built for comfort and presence.
              </p>
              <p>
                Look smart. Walk in comfort. Style as identity — for every age, every stage.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold"
            >
              Shop all
            </Link>
            <p className="mt-5 text-xs text-white/45">
              <a
                href={contactInfo.nanteInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-white"
              >
                @nante_shoes
              </a>
              {' · '}
              <a href={`mailto:${contactInfo.nanteEmail}`} className="text-gold hover:text-white">
                {contactInfo.nanteEmail}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="aesthetic" className="bg-white py-12 md:py-14">
        <div className="site-container grid gap-8 border-t border-line pt-10 md:grid-cols-3">
          {[
            { title: 'Made in Ghana', body: 'Local craft, international finish.' },
            { title: 'Handmade', body: 'Originally handmade for lasting comfort.' },
            { title: 'Presence', body: 'Fashion as identity and confidence.' },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-sans text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm font-light text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Ready to Order?"
        subtitle="Stockists, custom orders, and collaboration inquiries for Nantegh / Nante."
        primaryLabel="Place Inquiry"
        primaryTo="/contact"
        secondaryLabel="Modeling"
        secondaryTo="/modeling"
      />
    </>
  )
}
