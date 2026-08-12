import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  HeartHandshake,
  Mic2,
  Radio,
  Shirt,
  Sparkles,
  Star,
} from 'lucide-react'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import MediaImage from '../components/MediaImage'
import CTA from '../components/CTA'
import FeatureCard from '../components/FeatureCard'
import VentureCard from '../components/VentureCard'
import BrandLogo from '../components/BrandLogo'
import StagesCarousel from '../components/StagesCarousel'
import { brand, ventures } from '../data/ventures'

const featureCards = [
  {
    title: 'PM Entertainment',
    body: 'Elite MC & hypeman bookings, consulting, and The Finest MasterClass for aspiring communicators.',
    to: '/pm-entertainment',
    icon: Mic2,
    variant: 'white' as const,
  },
  {
    title: 'PM Foundation',
    body: 'Scholarships, Dine With The Street, blood drives, and service to humanity across communities.',
    to: '/pm-foundation',
    icon: HeartHandshake,
    variant: 'gold' as const,
  },
  {
    title: 'Blaklaaa Movement',
    body: 'Proud to be Black — culture, identity, youth empowerment, and Made-in-Africa pride.',
    to: '/blacklaa',
    icon: Sparkles,
    variant: 'dark' as const,
    image: '/images/blaklaaa.jpg',
    imageAlt: 'Blaklaaa Movement community with Nana Quasi-Wusu (PM)',
  },
]

const signatureStages = [
  {
    name: 'Made In Taadi',
    role: 'Host / MC',
    year: '4th time',
    image: '/images/press/made-in-taadi-mc-1.jpg',
  },
  {
    name: 'Indomie Fest',
    role: 'Host / MC',
    year: 'Live stage',
    image: '/images/c5.jpg',
  },
  {
    name: 'TGMA Xperience',
    role: 'Host / MC',
    year: '2025',
    image: '/images/press/tgma-host-ameyaw.jpg',
  },
  {
    name: 'Bhim Festival',
    role: 'Hypeman / MC',
    year: '2024',
    image: '/images/events/bhim-festival.jpg',
  },
  {
    name: 'Western Gospel Awards',
    role: 'Official Host',
    year: '2023, 2024',
    image: '/images/events/western-gospel.jpg',
  },
]

const ventureImages: Record<string, string> = {
  entertainment: '/images/hero-celebration.webp',
  foundation: '/images/donation-kith.jpg',
  nantegh: '/images/modeling-kente.webp',
  cyto: '/images/portrait-suit.webp',
  blacklaa: '/images/blaklaaa.jpg',
  modeling: '/images/modeling-kente.webp',
}

const ventureOrder = [
  'entertainment',
  'foundation',
  'nantegh',
  'cyto',
  'blacklaa',
  'modeling',
] as const

const ventureCards = ventureOrder
  .map((id) => ventures.find((v) => v.id === id))
  .filter((v): v is (typeof ventures)[number] => Boolean(v))
  .map((venture) => ({
    venture,
    image: ventureImages[venture.id] ?? '/images/portrait-suit.webp',
  }))

const skills = [
  'Broadcasting',
  'MC / Hypeman',
  'Public Speaking',
  'Talent Management',
  'Fashion',
  'Philanthropy',
  'Consulting',
  'Mentorship',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        path="/"
        description="PM Holdings — Nana Quasi-Wusu (PM), The Finest MC. Award-winning Ghanaian broadcaster, professional MC/hypeman, humanitarian and fashion model. Home of PM Foundation, PM Entertainment, Cyto Records, Blaklaaa, Nantegh and Modeling in Takoradi, Ghana."
      />

      <Hero />

      {/* Featured lanes — sit below hero, compact */}
      <section id="features" className="scroll-mt-28 bg-white pb-12 pt-8 md:pb-16 md:pt-10">
        <div className="site-container">
          <StaggerGroup className="grid gap-4 md:grid-cols-3 md:gap-5" alternate stagger={0.06}>
            {featureCards.map((card) => (
              <StaggerItem key={card.title}>
                <FeatureCard
                  title={card.title}
                  body={card.body}
                  to={card.to}
                  icon={card.icon}
                  variant={card.variant}
                  image={card.image}
                  imageAlt={card.imageAlt}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* About PM */}
      <section id="about-teaser" className="bg-white py-20 md:py-28">
        <div className="site-container grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <StaggerGroup className="flex max-w-xl flex-col justify-center" stagger={0.11}>
            <StaggerItem>
              <p className="eyebrow mb-3">About PM</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.45rem]">
                Welcome to the World of The Finest MC
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-[1.85] text-muted">
                <p>
                  Nana Quasi-Wusu, popularly known as PM, is an award-winning Ghanaian broadcaster,
                  professional MC & hypeman, humanitarian, fashion model, and entertainment
                  consultant based in Takoradi.
                </p>
                <p>
                  He hosts The DrYve on Y97.9FM, has hosted 1,000+ events nationwide, founded PM
                  Foundation and PM Entertainment Consult, and champions Blaklaaa — Proud to be
                  Black — alongside fashion work through Nantegh.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-7">
                <Link to="/about" className="btn-primary">
                  Read Full Bio
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <ScrollReveal delay={0.12} direction="left" className="h-full self-stretch">
            <div className="h-[300px] overflow-hidden rounded-2xl sm:h-[340px] lg:h-full">
              <img
                src="/images/about.jpg"
                alt="Nana Quasi-Wusu (PM) — solo portrait in Kente"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* On Air — The DrYve */}
      <section id="on-air" className="scroll-mt-28 bg-white py-10 md:py-14">
        <div className="site-container">
          <div className="grid overflow-hidden border border-line lg:grid-cols-12">
            <ScrollReveal className="relative bg-ink lg:col-span-5" breathe>
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[280px]">
                <img
                  src="/images/pm2.jpg"
                  alt="Nana Quasi-Wusu (PM) on air at Y97.9FM"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-gold px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
                  </span>
                  Live
                </span>
              </div>
            </ScrollReveal>

            <StaggerGroup
              className="flex flex-col justify-center bg-off px-6 py-8 sm:px-8 md:py-9 lg:col-span-7 lg:px-10"
              delay={0.06}
              stagger={0.07}
            >
              <StaggerItem>
                <p className="eyebrow mb-2">On Air</p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-sans text-2xl font-bold leading-tight text-ink md:text-[1.85rem] lg:text-[2.05rem]">
                  The DrYve of Your Lyfe
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-3 max-w-lg text-sm font-light leading-relaxed text-muted">
                  Drive-time energy, culture, and conversation — weekdays on Y97.9FM Takoradi with
                  Nana Quasi-Wusu (PM).
                </p>
              </StaggerItem>
              <StaggerItem>
                <dl className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-line py-3.5 text-sm">
                  <div className="flex items-baseline gap-2">
                    <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      Station
                    </dt>
                    <dd className="font-semibold text-ink">Y97.9FM</dd>
                  </div>
                  <div className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden />
                  <div className="flex items-baseline gap-2">
                    <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      Show
                    </dt>
                    <dd className="font-semibold text-ink">The DrYve</dd>
                  </div>
                  <div className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden />
                  <div className="flex items-baseline gap-2">
                    <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      Airtime
                    </dt>
                    <dd className="font-semibold text-ink">Weekdays 3–7 PM</dd>
                  </div>
                </dl>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link to="/about" className="btn-primary !px-6 !py-3">
                    Meet The Broadcaster
                  </Link>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
                  >
                    <Radio className="h-3.5 w-3.5 text-gold" />
                    Studio Moments
                  </Link>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Impact / Who We Are */}
      <section id="impact" className="bg-[#fcfcf9] py-20 md:py-28">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <StaggerGroup className="grid gap-4" stagger={0.12}>
            <StaggerItem>
              <MediaImage
                src="/images/donation-kith.jpg"
                alt="PM Foundation donation outreach — Nana Quasi-Wusu (PM)"
                aspect="wide"
                className="rounded-3xl"
                objectPosition="top"
              />
            </StaggerItem>
            <div className="grid grid-cols-2 gap-4">
              <StaggerItem>
                <div className="breathe flex h-full flex-col justify-center rounded-3xl bg-gold p-7 text-white shadow-[var(--shadow-card)]">
                  <CheckCircle2 className="mb-4 h-8 w-8" strokeWidth={1.75} />
                  <p className="font-sans text-4xl font-bold md:text-5xl">1000+</p>
                  <p className="mt-2 text-sm font-medium leading-snug text-white/90">
                    Events Hosted Nationwide
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <MediaImage
                  src="/images/modeling-kente.webp"
                  alt="Nana Quasi-Wusu (PM) in traditional fashion / modeling look"
                  aspect="square"
                  className="rounded-3xl"
                  objectPosition="center top"
                />
              </StaggerItem>
            </div>
          </StaggerGroup>

          <StaggerGroup className="max-w-xl" delay={0.08} stagger={0.1}>
            <StaggerItem>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                <Sparkles className="h-4 w-4" />
                Who We Are?
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.65rem]">
                Excellence with purpose across entertainment & impact
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 text-base font-light leading-[1.85] text-muted">
                Nana Quasi-Wusu (PM), The Finest MC, is an award-winning broadcaster, professional
                hypeman, humanitarian, and fashion model. From The DrYve on Y97.9FM to 1,000+ staged
                events, PM Foundation outreach, and Blaklaaa cultural pride — he builds with
                excellence and impact.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gold-dark"
                >
                  More About Us
                </Link>
                <div className="flex items-center gap-3">
                  <BrandLogo className="h-12 w-12 rounded-full" />
                  <span>
                    <span className="block text-sm font-bold text-ink">{brand.fullName}</span>
                    <span className="block text-xs text-muted">
                      {brand.title} & Founder
                    </span>
                  </span>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
                  <div className="mb-3 flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold" />
                    ))}
                  </div>
                  <p className="font-sans text-3xl font-bold text-ink">8+ / 56+</p>
                  <p className="mt-1 text-sm text-muted">Awards & industry nominations</p>
                </div>
                <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)]">
                  <p className="mb-3 text-sm font-bold text-ink">Premium skills</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-off px-3 py-1 text-[0.7rem] font-medium text-ink/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Signature Stages */}
      <section id="stages" className="bg-white py-20 md:py-28">
        <div className="site-container">
          <SectionHeading
            align="split"
            eyebrow="Signature Stages"
            eyebrowIcon={<Mic2 className="h-3.5 w-3.5" />}
            title="Where The Finest MC Commands"
            description="From Made In Taadi and Indomie Fest to TGMA, Bhim Festival, and Western Gospel Awards — stages that define his craft."
          />

          <StagesCarousel stages={signatureStages} />

          <ScrollReveal delay={0.12}>
            <div className="action-row mt-10 justify-center">
              <Link to="/about#events" className="btn-primary">
                See All Stages
              </Link>
              <Link to="/gallery" className="btn-ghost">
                View Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming — Western Content Creators */}
      <section id="upcoming" className="bg-[#f6f4ef] py-20 md:py-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-5" breathe>
            <div className="overflow-hidden border border-line bg-white shadow-[var(--shadow-soft)]">
              <img
                src="/images/events/western-content-creators.jpg"
                alt="Western Content Creators Seminar 2026 — PM Entertainment Consult"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-7" delay={0.08} stagger={0.1}>
            <StaggerItem>
              <p className="eyebrow mb-3">Upcoming</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl">
                Western Content Creators Seminar
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-xl text-base font-light leading-relaxed text-muted">
                PM Entertainment Consult presents #WCCS2026 — a Western Region seminar for content
                creators. Building craft, community, and opportunity across media and digital
                storytelling.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <img
                  src="/logos/pm-entertainment.jpg"
                  alt="PM Entertainment Consult"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Organised by
                  </p>
                  <p className="font-sans text-sm font-bold text-ink">PM Entertainment Consult</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-8">
                <a href="tel:0549179923" className="btn-primary">
                  Enquire / Sponsor
                </a>
                <Link to="/pm-entertainment" className="btn-ghost">
                  About PEC
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted">
                Sponsorship &amp; enquiries: 0549179923 / 0242903049
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Talent spotlight — Emily Adade Boateng */}
      <section id="talent-spotlight" className="bg-white py-20 md:py-28">
        <div className="site-container">
          <SectionHeading
            align="split"
            eyebrow="Talent Spotlight"
            eyebrowIcon={<Sparkles className="h-3.5 w-3.5" />}
            title="Emily Adade Boateng — Defender"
            description="PM Entertainment Consult’s signed gospel talent. Her first major project under PEC, Defender, is out with an official music video."
          />

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <ScrollReveal className="lg:col-span-7" breathe>
              <div className="overflow-hidden border border-line bg-ink shadow-[var(--shadow-card)]">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/eByEmMEnzOM"
                    title="Emily Adade Boateng — Defender (Official Music Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            <StaggerGroup className="lg:col-span-5" delay={0.1} stagger={0.1}>
              <StaggerItem>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  Under PM Entertainment Consult
                </p>
              </StaggerItem>
              <StaggerItem>
                <h3 className="mt-2 font-sans text-2xl font-bold text-ink md:text-3xl">
                  Mentoring the next voice
                </h3>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-4 text-base font-light leading-relaxed text-muted">
                  Emily Adade Boateng is a rising gospel artiste from the Western Region, signed to
                  PM Entertainment Consult. Defender marks a new chapter — faith, craft, and stage
                  presence guided by The Finest MC’s talent lane.
                </p>
              </StaggerItem>
              <StaggerItem>
                <ul className="mt-6 space-y-2 text-sm text-ink/80">
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    First major release under PEC
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    Official video directed by Nana Kofi Akromah
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold">•</span>
                    Stream on Spotify, Apple Music, Boomplay &amp; more
                  </li>
                </ul>
              </StaggerItem>
              <StaggerItem>
                <div className="action-row mt-8">
                  <a
                    href="https://www.youtube.com/watch?v=eByEmMEnzOM"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Watch on YouTube
                  </a>
                  <Link to="/pm-entertainment" className="btn-ghost">
                    PEC Talent
                  </Link>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* All ventures */}
      <section id="ventures" className="scroll-mt-28 bg-off py-24 md:py-32">
        <div className="site-container">
          <div className="mb-14 grid gap-8 border-b border-ink/10 pb-10 md:mb-16 md:grid-cols-[1.4fr_0.8fr] md:items-end md:gap-12">
            <ScrollReveal breathe>
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Ventures
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-5xl">
                Everything He Builds
              </h2>
              <div className="my-5 gold-divider" />
              <p className="max-w-xl text-base font-light leading-relaxed text-muted">
                Entertainment excellence, community impact, Made-in-Ghana fashion, talent
                incubation, cultural pride, and modeling presence — one portfolio of purpose.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-sm text-muted md:text-right">
                <span className="font-semibold text-ink">{ventureCards.length}</span> brands, one
                hallmark
              </p>
            </ScrollReveal>
          </div>

          <StaggerGroup className="grid gap-5 lg:grid-cols-2 lg:gap-6" alternate stagger={0.06}>
            {ventureCards.map((item, i) => (
              <StaggerItem key={item.venture.id}>
                <VentureCard venture={item.venture} image={item.image} index={i} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Gallery teaser */}
      <section id="gallery-teaser" className="bg-white py-20 md:py-28">
        <div className="site-container">
          <SectionHeading
            align="split"
            eyebrow="Gallery"
            eyebrowIcon={<Sparkles className="h-3.5 w-3.5" />}
            title="Moments From The Journey"
            description="Radio, stages, outreach, fashion, and culture — explore the full photo story of Nana Quasi-Wusu (PM)."
          />
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" alternate stagger={0.05}>
            {[
              { src: '/images/pm4.jpg', label: 'Portrait' },
              { src: '/images/pm2.jpg', label: 'Broadcasting' },
              { src: '/images/blaklaaa.jpg', label: 'Culture' },
              { src: '/images/donation-kith.jpg', label: 'Foundation' },
            ].map((shot) => (
              <StaggerItem key={shot.src}>
                <Link
                  to="/gallery"
                  className="group relative block overflow-hidden rounded-[1.35rem] shadow-[var(--shadow-soft)]"
                >
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/75 px-4 py-4">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {shot.label}
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <ScrollReveal delay={0.15}>
            <div className="mt-10 text-center">
              <Link to="/gallery" className="btn-primary">
                Open Full Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fashion / modeling highlight */}
      <section id="fashion" className="bg-off py-20 md:py-28">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="right" breathe>
            <MediaImage
              src="/images/modeling-kente.webp"
              alt="Nana Quasi-Wusu (PM) fashion and modeling"
              aspect="landscape"
              className="rounded-3xl"
              objectPosition="center top"
            />
          </ScrollReveal>

          <StaggerGroup delay={0.08} stagger={0.11}>
            <StaggerItem>
              <p className="eyebrow mb-3">Fashion & Style</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold text-ink md:text-4xl">
                Nantegh & Modeling
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <p className="text-base font-light leading-relaxed text-muted">
                From handmade Made-in-Ghana craft under Nantegh to personal fashion modeling —
                presence, identity, and style that match the excellence PM brings to every stage.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-8">
                <Link to="/nantegh" className="btn-primary gap-2">
                  <Shirt className="h-4 w-4" />
                  Nantegh
                </Link>
                <Link to="/modeling" className="btn-ghost">
                  Modeling
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Ready to Work With PM?"
        subtitle="Bookings, consulting, foundation partnerships, and brand collaborations."
        primaryLabel="Contact Now"
        primaryTo="/contact"
        secondaryLabel="About PM"
        secondaryTo="/about"
      />
    </>
  )
}
