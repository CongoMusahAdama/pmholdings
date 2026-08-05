import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  Mic2,
  Radio,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import BrandLogo from '../components/BrandLogo'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import { awards, brand, ventures } from '../data/ventures'
import { hostedEvents } from '../data/events'

const featuredEventIds = [
  'made-in-taadi-2025',
  'tgma-xperience',
  'bhim-festival',
  'western-gospel-2024',
  'mtn-worship',
  'finest-experience',
  'finest-masterclass',
  'dreams-vibes',
  'western-content-creators',
] as const

const featuredEvents = featuredEventIds
  .map((id) => hostedEvents.find((e) => e.id === id))
  .filter((e): e is (typeof hostedEvents)[number] => Boolean(e))

const glanceStats = [
  { value: '15+', label: 'Years as MC / Hypeman' },
  { value: '1000+', label: 'Events Hosted' },
]

const pillars = [
  {
    title: 'Broadcast & Stage',
    body: 'From The DrYve on Y97.9FM to 1,000+ live events — voice, presence, and command that define The Finest MC.',
    to: '/about#overview',
    icon: Radio,
    variant: 'white' as const,
  },
  {
    title: 'Purpose First',
    body: 'PM Foundation turns giving into structure — scholarships, outreaches, and campaigns that lift communities.',
    to: '/pm-foundation',
    icon: HeartHandshake,
    variant: 'gold' as const,
  },
  {
    title: 'Culture & Craft',
    body: 'Blaklaaa pride, Made-in-Ghana fashion, and talent incubation — excellence with identity.',
    to: '/blacklaa',
    icon: Sparkles,
    variant: 'dark' as const,
  },
]

const focusAreas = [
  {
    num: '01',
    title: 'Broadcasting',
    body: 'The DrYve of Your Lyfe — Y97.9FM, weekdays 3–7 PM.',
    to: '/about#overview',
  },
  {
    num: '02',
    title: 'MC & Hypeman',
    body: 'National stages, festivals, awards, and corporate nights.',
    to: '/pm-entertainment',
  },
  {
    num: '03',
    title: 'Consulting',
    body: 'PM Entertainment Consult — bookings, talent, masterclasses.',
    to: '/pm-entertainment',
  },
  {
    num: '04',
    title: 'Philanthropy',
    body: 'PM Foundation — service to humanity across communities.',
    to: '/pm-foundation',
  },
]

const ventureOrder = [
  'entertainment',
  'foundation',
  'nantegh',
  'cyto',
  'blacklaa',
  'modeling',
] as const

const orderedVentures = ventureOrder
  .map((id) => ventures.find((v) => v.id === id))
  .filter((v): v is (typeof ventures)[number] => Boolean(v))

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Nana Quasi-Wusu (PM), The Finest MC — award-winning Ghanaian broadcaster, professional MC/hypeman, humanitarian, fashion model, and founder of PM Foundation and PM Entertainment Consult."
      />

      {/* Centered intro — reference-style hero */}
      <section className="bg-white pb-10 pt-14 md:pb-12 md:pt-20">
        <div className="site-container text-center">
          <ScrollReveal>
            <div className="mb-7 flex justify-center">
              <BrandLogo className="h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40" />
            </div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-gold md:text-base md:tracking-[0.36em]">
              About {brand.stageName}
            </p>
            <h1 className="mx-auto max-w-4xl font-sans text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              Excellence is My Hallmark.{' '}
              <span className="text-muted/55">Purpose drives everything else.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted md:text-lg">
              Nana Quasi-Wusu — professionally known as PM, The Finest MC. Broadcaster, hypeman,
              humanitarian, fashion model, and entertainment consultant from Takoradi, Ghana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Dual feature cards */}
      <section id="overview" className="bg-white pb-16 md:pb-24">
        <div className="site-container">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <ScrollReveal>
              <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[2rem] bg-ink p-8 text-white md:min-h-[480px] md:p-10 lg:rounded-[2.5rem]">
                <div>
                  <p className="mb-4 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
                    <Mic2 className="h-3.5 w-3.5" />
                    The Finest MC
                  </p>
                  <h2 className="font-sans text-3xl font-bold leading-tight md:text-4xl lg:text-[2.65rem]">
                    Strategy on air.
                    <br />
                    Energy on stage.
                  </h2>
                  <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-white/70 md:text-base">
                    From Y97.9FM’s The DrYve to TGMA, Bhim Fest, and Made In Taadi — PM builds
                    moments with polish, presence, and purpose. Civil engineer by training. Hallmark
                    entertainer by craft.
                  </p>
                  <div className="action-row mt-8">
                    <Link to="/contact" className="btn-primary gap-2">
                      Book PM
                    </Link>
                    <Link to="/gallery" className="btn-ghost-light gap-2">
                      See Gallery
                    </Link>
                  </div>
                </div>

                <div
                  id="honours"
                  className="mt-10 flex items-center gap-4 rounded-2xl border border-white/15 p-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Star className="h-5 w-5 fill-gold" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      Selected Honour
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white/90">
                      {awards[0]?.split(' — ')[0] ?? 'National Communications Awards'}
                    </p>
                    <Link
                      to="/#ventures"
                      className="mt-1 inline-flex items-center gap-1 text-xs text-white/50 transition-colors hover:text-gold"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-soft md:min-h-[480px] lg:rounded-[2.5rem]">
                <img
                  src="/images/about.jpg"
                  alt="Nana Quasi-Wusu (PM) — solo portrait in Kente"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/20" />

                <div
                  id="at-a-glance"
                  className="absolute inset-x-4 bottom-4 flex flex-col gap-3 sm:inset-x-6 sm:bottom-6 sm:flex-row"
                >
                  {glanceStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)] sm:p-5"
                    >
                      <p className="font-sans text-3xl font-bold text-gold md:text-4xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium leading-snug text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Biography — before impact pillars */}
      <section id="biography" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-12 grid gap-6 md:mb-14 lg:grid-cols-12 lg:items-end lg:gap-10">
            <ScrollReveal className="lg:col-span-6">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Biography
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
                The story behind{' '}
                <span className="text-muted/55">The Finest MC</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-6">
              <p className="text-base font-light leading-relaxed text-muted md:text-lg">
                Award-winning media personality, professional MC, hypeman, public speaker, fashion
                model, and humanitarian — based in Takoradi, felt nationwide.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <ScrollReveal className="space-y-5 text-base font-light leading-[1.85] text-muted lg:col-span-7 md:text-lg">
              <p>
                Nana Quasi-Wusu, popularly known as PM and celebrated as The Finest MC, is one of
                Ghana’s most distinctive voices in broadcasting and live entertainment. A multiple
                award-winning media personality, he has built a career defined by energy,
                professionalism, and purpose.
              </p>
              <p>
                Trained as a Civil Engineer, PM entered radio on 21 April 2014 at Y97.9FM under the
                guidance of Mr Julius Hamenoo, rising from producer to presenter. He has hosted
                flagship shows including Roots & Revival, Y Campus Express, and currently The DrYve
                of Your Lyfe. In 2020 he became Radio Personality of the Year at the National
                Communications Awards — the first broadcaster outside Greater Accra to win that
                honour.
              </p>
              <p>
                Parallel to broadcasting, PM has spent over fifteen years as a professional MC and
                hypeman, hosting 1,000+ events. Through PM Entertainment Consult he guides talent
                and stages masterclasses. Giving became structure on his 30th birthday through PM
                Foundation, co-founded with Joycelyn Odeebea Ampofo — alongside Blaklaaa and
                fashion work through Nantegh.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-5">
              <blockquote className="rounded-[1.75rem] bg-ink p-8 text-white md:p-9">
                <p className="font-sans text-2xl font-bold leading-snug md:text-[1.65rem]">
                  “Excellence is my hallmark — purpose, passion, and impact in everything I do.”
                </p>
                <cite className="mt-6 block text-[0.68rem] not-italic font-semibold uppercase tracking-[0.2em] text-gold">
                  — {brand.fullName} (PM)
                </cite>
              </blockquote>

              <ul className="mt-5 space-y-3">
                {awards.slice(0, 3).map((award) => (
                  <li
                    key={award}
                    className="rounded-2xl border border-line bg-off px-5 py-4 text-xs font-light leading-relaxed text-muted"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy / pillars — impact */}
      <section id="pillars" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-5xl">
              Built on craft.{' '}
              <span className="text-muted/55">Driven by impact.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-light text-muted">
              Three lanes that shape how PM shows up — on air, on stage, and in community.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid gap-5 md:grid-cols-3 md:gap-6" alternate stagger={0.06}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <FeatureCard
                  title={pillar.title}
                  body={pillar.body}
                  to={pillar.to}
                  icon={pillar.icon}
                  variant={pillar.variant}
                  image={pillar.image}
                  imageAlt={pillar.imageAlt}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Focus lanes — numbered strip */}
      <section className="bg-ink py-16 md:py-20">
        <div className="site-container">
          <ScrollReveal className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              What He Does
            </p>
            <h2 className="font-sans text-2xl font-bold text-white md:text-3xl">
              Four lanes. One hallmark.
            </h2>
          </ScrollReveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0" alternate stagger={0.05}>
            {focusAreas.map((area) => (
              <StaggerItem key={area.num}>
                <Link
                  to={area.to}
                  className="group flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-gold hover:bg-white/[0.06] md:p-7 lg:border-y lg:border-l-0 lg:border-r lg:first:border-l"
                >
                  <span className="font-sans text-4xl font-bold tracking-tight text-gold/90 md:text-5xl">
                    {area.num}
                  </span>
                  <span className="mt-6 h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-5 font-sans text-lg font-bold text-white md:text-xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-white/55">
                    {area.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold opacity-80 transition-opacity group-hover:opacity-100">
                    Explore
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Ventures — service-style card grid */}
      <section id="ventures" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Ventures
            </p>
            <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.75rem]">
              Everything he builds under one hallmark
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-muted">
              Entertainment, philanthropy, fashion, talent, culture, and modeling — six brands
              shaped by excellence and purpose.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" alternate stagger={0.05}>
            {orderedVentures.map((venture, i) =>
              i === orderedVentures.length - 1 ? (
                <StaggerItem key="ventures-cta">
                  <article className="flex h-full flex-col rounded-[1.25rem] bg-ink p-5 md:p-6">
                    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white p-1">
                      <img
                        src={venture.logo}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    <h3 className="mt-4 font-sans text-lg font-bold tracking-tight text-white">
                      {venture.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-white/60">
                      {venture.description}
                    </p>
                    <Link
                      to={venture.path}
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.68rem] font-semibold text-ink transition-colors hover:bg-gold"
                    >
                      Explore
                    </Link>
                  </article>
                </StaggerItem>
              ) : (
                <StaggerItem key={venture.id}>
                  <article className="flex h-full flex-col rounded-[1.25rem] border border-line bg-white p-5 md:p-6">
                    <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-off p-1 ring-1 ring-black/5">
                      <img
                        src={venture.logo}
                        alt=""
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    <h3 className="mt-4 font-sans text-lg font-bold tracking-tight text-ink">
                      {venture.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm font-light leading-relaxed text-muted">
                      {venture.description}
                    </p>
                    <Link
                      to={venture.path}
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink/12 bg-white px-4 py-2 text-[0.68rem] font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
                    >
                      Explore
                    </Link>
                  </article>
                </StaggerItem>
              ),
            )}
          </StaggerGroup>
        </div>
      </section>

      {/* Stages */}
      <section id="events" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Stages
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-5xl">
                Events he’s been{' '}
                <span className="text-muted/55">invited to</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <p className="text-base font-light leading-relaxed text-muted">
                From TGMA Xperience and Bhim Festival to Western Gospel Awards, MTN worship nights,
                and his own Finest Experience.
              </p>
            </ScrollReveal>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
            {featuredEvents.map((event, i) => {
              const aspects = [
                'aspect-[3/4]',
                'aspect-[4/5]',
                'aspect-square',
                'aspect-[3/5]',
                'aspect-[5/6]',
                'aspect-[4/3]',
              ]
              const aspect = aspects[i % aspects.length]

              return (
                <article
                  key={event.id}
                  className="group mb-4 break-inside-avoid overflow-hidden rounded-[1.25rem] bg-ink sm:mb-5"
                >
                  {event.flyer && (
                    <div className={`relative overflow-hidden ${aspect}`}>
                      <img
                        src={event.flyer}
                        alt={`${event.name} — Nana Quasi-Wusu (PM)`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: 'center 18%' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-gold">
                        {event.category}
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold">
                          {event.role}
                          {event.year ? `, ${event.year}` : ''}
                        </p>
                        <h3 className="mt-1 font-sans text-lg font-bold leading-snug text-white md:text-xl">
                          {event.name}
                        </h3>
                        {event.location && (
                          <p className="mt-1 text-xs text-white/55">{event.location}</p>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="inline-flex items-center gap-2 text-sm font-light text-muted">
                <Users className="h-4 w-4 text-gold" />
                Plus Made In Taadi, Storm Reigns, and 1,000+ more stages nationwide.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-gold"
              >
                See More Photos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA
        title="Ready to Collaborate?"
        subtitle="Bookings, consulting, foundation partnerships, and brand collaborations — let’s talk."
        primaryLabel="Contact"
        primaryTo="/contact"
        secondaryLabel="PM Foundation"
        secondaryTo="/pm-foundation"
      />
    </>
  )
}
