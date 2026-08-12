import { Link } from 'react-router-dom'
import { Sparkles, Camera, Megaphone, Shirt } from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import CTA from '../components/CTA'

const categories = [
  {
    title: 'Fashion & Runway',
    body: 'Stage and fashion-week presence — including stages like Taadi Fashion Weekend — with composure and brand fluency.',
    icon: Shirt,
    image: '/images/modeling-kente.webp',
  },
  {
    title: 'Editorial Energy',
    body: 'Camera-ready presence shaped by years as a broadcaster, host, and public figure.',
    icon: Camera,
    image: '/images/portrait-suit.webp',
  },
  {
    title: 'Brand Appearances',
    body: 'Campaigns and activations where image, voice, and cultural credibility work together.',
    icon: Megaphone,
    image: '/images/portrait-kente.jpg',
  },
]

const portfolio = [
  {
    src: '/images/modeling-kente.webp',
    alt: 'Nana Quasi-Wusu (PM) in kente fashion look',
    label: 'Kente Editorial',
  },
  {
    src: '/images/portrait-kente.jpg',
    alt: 'PM portrait in traditional fashion',
    label: 'Cultural Presence',
  },
  {
    src: '/images/portrait-suit.webp',
    alt: 'PM in tailored suit portrait',
    label: 'Tailored Look',
  },
  {
    src: '/images/press-portrait-2.jpg',
    alt: 'PM press portrait',
    label: 'Press Portrait',
  },
  {
    src: '/images/portrait-broadcast.jpg',
    alt: 'PM broadcast portrait',
    label: 'On-Camera',
  },
  {
    src: '/images/portrait-anniversary.jpg',
    alt: 'PM anniversary portrait',
    label: 'Signature Style',
  },
  {
    src: '/images/pm4.jpg',
    alt: 'Nana Quasi-Wusu (PM) fashion presence',
    label: 'Lifestyle',
  },
  {
    src: '/images/about.jpg',
    alt: 'PM portrait for modeling portfolio',
    label: 'Portrait',
  },
]

const stats = [
  { value: 'Runway', label: 'Fashion weekends' },
  { value: 'Editorial', label: 'Camera presence' },
  { value: 'Brand', label: 'Campaign energy' },
  { value: 'Identity', label: 'African pride' },
]

export default function Modeling() {
  return (
    <>
      <SEO
        title="Modeling"
        path="/modeling"
        description="Modeling under PM Holdings — Nana Quasi-Wusu (PM), fashion model, broadcaster and The Finest MC. Runway, editorial presence, and brand appearances."
      />

      {/* Photo hero */}
      <section className="relative min-h-[52svh] overflow-hidden bg-ink md:min-h-[58svh]">
        <img
          src="/images/modeling-kente.webp"
          alt="Nana Quasi-Wusu (PM) — fashion modeling"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="site-container relative z-10 flex min-h-[52svh] flex-col justify-end pb-10 pt-20 sm:pb-12 sm:pt-24 md:min-h-[58svh] md:pb-14 md:pt-28">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold sm:mb-4">
              Fashion & Presence
            </p>
            <h1 className="font-sans text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Modeling with identity
            </h1>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/80 sm:mt-5 sm:text-base md:text-lg">
              Runway, editorial, and brand presence — the same excellence PM brings to radio and the
              stage, translated into image.
            </p>
            <div className="action-row mt-8">
              <Link to="/contact" className="btn-primary gap-2">
                Book PM
              </Link>
              <a href="#portfolio" className="btn-ghost-light gap-2">
                View Portfolio
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Look strip */}
      <section className="border-b border-line bg-white">
        <div className="site-container grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-7 text-center md:py-8">
              <p className="font-sans text-xl font-bold text-ink md:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Presence as craft */}
      <section id="overview" className="bg-white py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src="/images/portrait-suit.webp"
                alt="PM — tailored modeling portrait"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                style={{ objectPosition: 'center 18%' }}
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-7" stagger={0.08}>
            <StaggerItem>
              <p className="eyebrow mb-3">Overview</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Presence as craft
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  Alongside broadcasting and elite MC work, Nana Quasi-Wusu works as a fashion model
                  — bringing posture, confidence, and cultural presence to runway and brand moments.
                  Image is part of his broader craft: communicator, style figure, and advocate for
                  African pride.
                </p>
                <p>
                  From fashion weekends to campaign energy, his modeling sits naturally beside
                  Nantegh and the Blaklaaa call — style with identity, never empty glamour.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/nantegh"
                  className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
                >
                  Nantegh Fashion
                </Link>
                <Link
                  to="/blacklaa"
                  className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
                >
                  Blaklaaa Movement
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Work categories */}
      <section id="categories" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Focus
            </p>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Work categories
            </h2>
            <p className="mt-3 text-base font-light text-muted">
              Three lanes where image, voice, and culture meet.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid gap-4 md:grid-cols-3" alternate stagger={0.06}>
            {categories.map((cat) => (
              <StaggerItem key={cat.title}>
                <article className="group relative aspect-[3/4] overflow-hidden bg-ink">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <cat.icon className="mb-3 h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h3 className="font-sans text-xl font-bold text-white">{cat.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-white/70">
                      {cat.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Portfolio
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Selected imagery
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <p className="text-base font-light text-muted">
                Fashion looks, portraits, and on-camera presence — style with identity.
              </p>
            </ScrollReveal>
          </div>

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
            {portfolio.map((shot, i) => (
              <ScrollReveal
                key={shot.src}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={(i % 4) * 0.04}
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <div className="overflow-hidden bg-ink">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  {shot.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Style bridge */}
      <section className="bg-ink py-16 md:py-20">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src="/images/portrait-kente.jpg"
                alt="PM cultural fashion look"
                className="aspect-[4/3] w-full object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </ScrollReveal>
          <StaggerGroup className="lg:col-span-7" stagger={0.08}>
            <StaggerItem>
              <Sparkles className="mb-4 h-7 w-7 text-gold" strokeWidth={1.5} />
            </StaggerItem>
            <StaggerItem>
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Style House
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
                Made-in-Ghana energy, camera-ready craft
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/70">
                Modeling for PM is never just a look — it connects to Nantegh fashion, Blaklaaa
                pride, and the same excellence that defines every stage he owns.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-7">
                <Link to="/contact" className="btn-primary">
                  Booking Inquiry
                </Link>
                <Link to="/nantegh" className="btn-ghost-light">
                  Shop Nantegh
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Booking & Collaborations"
        subtitle="Campaign, fashion, and appearance inquiries."
        primaryLabel="Book PM"
        primaryTo="/contact"
        secondaryLabel="Nantegh Fashion"
        secondaryTo="/nantegh"
      />
    </>
  )
}
