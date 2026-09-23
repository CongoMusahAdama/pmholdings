import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CalendarDays,
  Camera,
  Megaphone,
  Mic2,
  Palette,
  Sparkles,
  Users,
  Video,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import AnimatedHeading from '../components/AnimatedHeading'
import AnimatedStats from '../components/AnimatedStats'
import CTA from '../components/CTA'
import { bookMcHref, notableEvents } from '../data/ventures'
import { entertainmentLineup } from '../data/upcoming'
import { stageVideos, workLists } from '../data/videos'
import { SocialVideoCard } from '../components/VideoEmbeds'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    title: 'Events',
    body: 'End-to-end event planning and production — concerts, corporate, brand moments, and community gatherings in Takoradi and beyond.',
    icon: CalendarDays,
  },
  {
    title: 'PR',
    body: 'Public relations that place brands, talent, and campaigns in the right rooms — with a clear, professional voice.',
    icon: Megaphone,
  },
  {
    title: 'Advertising & Product Activations',
    body: 'Campaigns and on-ground activations that introduce products to real audiences — memorable, measured, and well run.',
    icon: Sparkles,
  },
  {
    title: 'Talent Management',
    body: 'Through Cyto GH — nurture, groom, and polish creatives for professional careers. Craft, branding, and industry readiness.',
    icon: Users,
  },
  {
    title: 'Voice Overs',
    body: 'Commercial, documentary, and brand voice work — clear delivery with the presence of The Finest MC.',
    icon: Mic2,
  },
  {
    title: 'Videography',
    body: 'Event coverage, brand films, and campaign content produced with a live-entertainment eye.',
    icon: Video,
  },
  {
    title: 'Photography',
    body: 'Event, portrait, and campaign photography that holds the moment — stage, street, and studio.',
    icon: Camera,
  },
  {
    title: 'Branding',
    body: 'Identity, look, and story for talent and businesses — so the work is seen the way it should be remembered.',
    icon: Palette,
  },
]

const signatureStages = [
  {
    name: 'Made In Taadi',
    role: 'Host / MC',
    image: '/images/press/made-in-taadi-mc-1.jpg',
  },
  {
    name: 'TGMA Xperience',
    role: 'Host / MC',
    image: '/images/press/tgma-host-ameyaw.jpg',
  },
  {
    name: 'Indomie Fest',
    role: 'Host / MC',
    image: '/images/c5.jpg',
  },
  {
    name: 'Bhim Festival',
    role: 'Hypeman / MC',
    image: '/images/events/bhim-festival.jpg',
  },
]

const stats = [
  { value: 15, suffix: '+', label: 'Years as MC' },
  { value: 1000, suffix: '+', label: 'Events Hosted' },
  { value: 8, suffix: '+', label: 'Industry Awards' },
  { value: 'Y97.9FM', label: 'On-Air Home' },
]

export default function PMEntertainment() {
  return (
    <>
      <SEO
        title="PM Entertainment Consult"
        path="/pm-entertainment"
        description="PM Entertainment Consult is an events, PR, advertising and product activations, talent management, voice-overs, videography, photography and branding company based in Takoradi."
      />

      {/* Photo hero */}
      <section className="relative min-h-[72svh] overflow-hidden bg-ink md:min-h-[82svh]">
        <img
          src="/images/mc.jpg"
          alt="Nana Quasi-Wusu (PM) hosting live on stage"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 18%' }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="site-container relative z-10 flex min-h-[72svh] flex-col justify-end pb-14 pt-24 md:min-h-[82svh] md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <motion.p
              className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              PM Entertainment Consult
            </motion.p>
            <AnimatedHeading
              text="Entertainment built on excellence"
              className="font-sans text-[1.85rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.4rem]"
            />
            <motion.p
              className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease }}
            >
              PM Entertainment Consult is an events, PR, advertising and product activations,
              talent management, voice-overs, videography, photography and branding company based
              in Takoradi.
            </motion.p>
            <motion.div
              className="action-row mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.7, ease }}
            >
              <a href={bookMcHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book The Finest MC
              </a>
              <a href="#services" className="btn-ghost-light gap-2">
                View Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="site-container">
          <AnimatedStats stats={stats} />
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="bg-white py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/ev1.jpg"
                alt="PM Entertainment — live stage hosting"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-6" stagger={0.08}>
            <StaggerItem>
              <p className="eyebrow mb-3">What We Do</p>
            </StaggerItem>
            <AnimatedHeading
              as="h2"
              text="Events. PR. Brand. Content."
              className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
            />
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  PM Entertainment Consult is an events, PR, advertising and product activations,
                  talent management, voice-overs, videography, photography and branding company
                  based in Takoradi — the entertainment and communications house of Nana Quasi-Wusu
                  (PM).
                </p>
                <p>
                  From live events to campaigns and creative content, the practice serves brands,
                  talent, and organisations across the Western Region and Ghana. Slogan:{' '}
                  <span className="font-medium text-gold">Excellence is My Hallmark.</span>
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-line bg-off p-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-black/5">
                  <img
                    src="/logos/pm-entertainment.jpg"
                    alt="PM Entertainment Consult"
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <p className="font-sans text-sm font-bold text-ink">PM Entertainment Consult</p>
                  <p className="mt-0.5 text-xs text-muted">Excellence is My Hallmark</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Services
            </p>
            <AnimatedHeading
              as="h2"
              text="What the company delivers"
              className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl"
            />
            <p className="mt-3 text-base font-light text-muted">
              Events, PR, advertising, activations, talent, voice, film, photo, and branding —
              from Takoradi.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" alternate stagger={0.05}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <article className="flex h-full flex-col rounded-[1.25rem] border border-line bg-white p-6 transition-colors hover:border-ink/20 md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-ink">
                    <service.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-bold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted">{service.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Annual lineup */}
      <section id="lineup" className="bg-ink py-14 md:py-16">
        <div className="site-container">
          <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            The lineup
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {entertainmentLineup.map((event) => (
              <article key={event.id} className="flex gap-5">
                <img
                  src={event.image}
                  alt={`${event.title} — ${event.month}`}
                  className="h-28 w-28 shrink-0 rounded-[1.1rem] object-cover sm:h-32 sm:w-36"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    {event.month}
                  </p>
                  <h2 className="mt-1 font-sans text-xl font-bold tracking-tight text-white md:text-2xl">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/65">
                    {event.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signature stages */}
      <section id="events" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Selected Stages
              </p>
              <AnimatedHeading
                as="h2"
                text="Where The Finest MC commands"
                className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <p className="text-base font-light text-muted">
                Concerts, awards, festivals, and corporate nights — a sample of stages that define
                the craft.
              </p>
            </ScrollReveal>
          </div>

          <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" alternate stagger={0.05}>
            {signatureStages.map((stage) => (
              <StaggerItem key={stage.name}>
                <article className="group relative aspect-[3/4] overflow-hidden bg-ink">
                  <img
                    src={stage.image}
                    alt={`${stage.name} — ${stage.role}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 18%' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-x-0 bottom-0 bg-black/75 p-4">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      {stage.role}
                    </p>
                    <h3 className="mt-1 font-sans text-base font-bold text-white md:text-lg">
                      {stage.name}
                    </h3>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {notableEvents.slice(0, 9).map((event, i) => (
                <div
                  key={event}
                  className="flex items-center justify-between border border-line px-4 py-3.5"
                >
                  <span className="text-sm text-muted">{event}</span>
                  <span className="font-sans text-sm font-bold text-gold/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/about#watch"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
              >
                See All Stages
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="watch" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Bookings
            </p>
            <AnimatedHeading
              as="h2"
              text="Corporate, concerts & year-end"
              className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl"
            />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {workLists.map((list) => (
              <article
                key={list.id}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-white"
              >
                <div className="border-b border-line bg-ink px-5 py-4">
                  <p className="font-sans text-base font-bold text-white">{list.label}</p>
                </div>
                <ol className="divide-y divide-line">
                  {list.items.map((item, i) => (
                    <li key={item} className="flex gap-3 px-5 py-3">
                      <span className="font-sans text-xs font-bold text-gold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-medium text-ink">{item}</p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stageVideos.map((video) => (
              <SocialVideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* MasterClass spotlight */}
      <section id="masterclass" className="bg-ink py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/masterclass-1.jpg"
                alt="The Finest MasterClass with Nana Quasi-Wusu (PM)"
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </ScrollReveal>
          <StaggerGroup className="lg:col-span-7" stagger={0.08}>
            <StaggerItem>
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Mentorship
              </p>
            </StaggerItem>
            <AnimatedHeading
              as="h2"
              text="The Finest MasterClass"
              className="font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
            />
            <StaggerItem>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70">
                Intensive training through Cyto GH, the talent house of PM Entertainment Consult —
                for aspiring MCs, hypemen, and public speakers. Stagecraft, monetisation, brand
                visibility, and the ethics of the craft. Build professionals, not hobbyists.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-8">
                <Link to="/contact" className="btn-primary">
                  Inquire About MasterClass
                </Link>
                <Link to="/cyto" className="btn-ghost-light">
                  Cyto Talent
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Book The Finest MC"
        subtitle="Concerts, corporate events, weddings, festivals, consulting, or masterclass partnerships."
        primaryLabel="Book MC on WhatsApp"
        primaryTo={bookMcHref}
        secondaryLabel="Talent Incubation"
        secondaryTo="/cyto"
      />
    </>
  )
}
