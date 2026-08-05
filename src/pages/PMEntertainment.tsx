import { Link } from 'react-router-dom'
import {
  Mic2,
  Sparkles,
  Users,
  GraduationCap,
  Map,
  CalendarDays,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import CTA from '../components/CTA'
import { notableEvents } from '../data/ventures'

const services = [
  {
    title: 'Professional MC & Hypeman',
    body: 'Elite stage hosting for concerts, corporate galas, weddings, festivals, and brand activations — delivered with the hallmark: Excellence.',
    icon: Mic2,
  },
  {
    title: 'Entertainment Consulting',
    body: 'Strategic guidance for artists, brands, and event organisers — from concept and talent direction to audience experience.',
    icon: Sparkles,
  },
  {
    title: 'Talent Management',
    body: 'Developing and positioning creatives for professional careers — stagecraft, branding, and industry readiness.',
    icon: Users,
  },
  {
    title: 'The Finest MasterClass',
    body: 'Intensive training for MCs, hypemen, and public speakers — mentorship, monetisation, brand visibility, and ethics of the craft.',
    icon: GraduationCap,
  },
  {
    title: 'BlakTrip Experiences',
    body: 'Curated travel experiences exploring Ghana’s sites twice yearly, with a vision to extend across Africa.',
    icon: Map,
  },
  {
    title: 'Event Coordination',
    body: 'Production support rooted in years as Event Coordinator for Y97.9FM Takoradi and national stages.',
    icon: CalendarDays,
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
  { value: '15+', label: 'Years as MC' },
  { value: '1000+', label: 'Events Hosted' },
  { value: '8+', label: 'Industry Awards' },
  { value: 'Y97.9FM', label: 'On-Air Home' },
]

export default function PMEntertainment() {
  return (
    <>
      <SEO
        title="PM Entertainment"
        description="PM Entertainment Consult by Nana Quasi-Wusu (PM) — professional MC/hypeman bookings, entertainment consulting, talent management, The Finest MasterClass, and BlakTrip."
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
          <ScrollReveal className="max-w-3xl">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              PM Entertainment Consult
            </p>
            <h1 className="font-sans text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.4rem]">
              Entertainment built on excellence
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              Elite MC & hypeman bookings, consulting, talent development, and The Finest MasterClass
              — the professional home of The Finest MC.
            </p>
            <div className="action-row mt-8">
              <Link to="/contact" className="btn-primary">
                Book The Finest MC
              </Link>
              <a href="#services" className="btn-ghost-light gap-2">
                View Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-line bg-white">
        <div className="site-container grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-7 text-center md:py-8">
              <p className="font-sans text-2xl font-bold text-ink md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
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
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Stage command. Industry fluency. Purpose.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  PM Entertainment Consult is Nana Quasi-Wusu’s entertainment company — the engine
                  behind elite MC/hypeman bookings, consulting, talent development, and cultural
                  experiences. With over fifteen years as a professional MC and a parallel career in
                  broadcasting, PM brings unmatched stage command.
                </p>
                <p>
                  The practice strengthens Ghana’s creative industry — especially in the Western
                  Region — by building confident, skilled, and ethical communicators. Slogan:{' '}
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
            <h2 className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Capabilities built for the stage
            </h2>
            <p className="mt-3 text-base font-light text-muted">
              Bookings, consulting, mentorship, and cultural experiences — one professional standard.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" alternate stagger={0.05}>
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

      {/* Signature stages */}
      <section id="events" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Selected Stages
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Where The Finest MC commands
              </h2>
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
                to="/about#events"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
              >
                See All Stages
              </Link>
            </div>
          </ScrollReveal>
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
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                The Finest MasterClass
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70">
                Intensive training for aspiring MCs, hypemen, and public speakers — stagecraft,
                monetisation, brand visibility, and the ethics of the craft. Build professionals,
                not hobbyists.
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
        primaryLabel="Booking Inquiry"
        primaryTo="/contact"
        secondaryLabel="Talent Incubation"
        secondaryTo="/cyto"
      />
    </>
  )
}
