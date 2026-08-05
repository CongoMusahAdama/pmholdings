import { Link } from 'react-router-dom'
import {
  Mic2,
  Music2,
  MapPin,
  Sparkles,
  Users,
  GraduationCap,
  CheckCircle2,
  Disc3,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import CytoRoadmap from '../components/CytoRoadmap'
import CTA from '../components/CTA'

const pillars = [
  {
    title: 'Groom',
    body: 'Shape voice, image, and discipline — so raw musical gift shows up like a real artiste.',
    icon: Sparkles,
    tone: 'gold' as const,
  },
  {
    title: 'Mentor',
    body: 'One-on-one guidance from PM — song craft, brand, ethics, and the decisions that build music careers.',
    icon: Users,
    tone: 'ink' as const,
  },
  {
    title: 'Train',
    body: 'Structured practice for singers and music artistes — vocal readiness, performance, and industry polish.',
    icon: GraduationCap,
    tone: 'white' as const,
  },
]

const focus = [
  {
    title: 'Singers & Vocalists',
    body: 'Purposeful development for singing and recorded music — not MC work.',
    icon: Mic2,
    image: '/images/talent4.jpg',
  },
  {
    title: 'Music Artistes',
    body: 'Songwriting, performance, and artiste branding built for a real catalogue.',
    icon: Music2,
    image: '/images/talent3.jpg',
  },
  {
    title: 'Recording Path',
    body: 'From incubation to signed deals — releases, videos, and career management.',
    icon: Disc3,
    image: '/images/talent23.jpg',
  },
  {
    title: 'Western Region Focus',
    body: 'Growing Ghana’s music scene where PM is rooted — starting at home.',
    icon: MapPin,
    image: '/images/talent67.jpg',
  },
]

const checklist = [
  'Vocal & performance polish',
  'Song craft & music identity',
  'Artiste brand & visibility',
  'Ethics of the music business',
  'Release & monetisation pathways',
  'Industry introductions & debuts',
]

const talentGallery = [
  { src: '/images/talent5.jpg', alt: 'Cyto grooming and mentoring session with PM' },
  { src: '/images/talent7.jpg', alt: 'PM with young professionals under Cyto' },
  { src: '/images/talent.jpg', alt: 'PM mentoring emerging talent' },
  { src: '/images/talent1.jpg', alt: 'Young talent in mentorship moment' },
  { src: '/images/talent4.jpg', alt: 'Emerging professional in training session' },
  { src: '/images/talent3.jpg', alt: 'Cyto incubation and collaboration' },
  { src: '/images/talent6.jpg', alt: 'Community mentorship with Cyto talent' },
  { src: '/images/talent23.jpg', alt: 'Young creatives celebrating together' },
  { src: '/images/talent67.jpg', alt: 'Cyto talent connection' },
]

export default function Cyto() {
  return (
    <>
      <SEO
        title="Cyto Records"
        description="Cyto Records — music-first talent house by Nana Quasi-Wusu (PM). We develop singers and music artistes purposefully for music — not MC work. Talent rules. Passion conquers."
      />

      {/* Hero */}
      <section className="relative min-h-[48svh] overflow-hidden bg-ink md:min-h-[52svh]">
        <img
          src="/images/talent7.jpg"
          alt="Cyto Records — music talent incubation with Nana Quasi-Wusu (PM)"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 22%' }}
        />
        <div className="absolute inset-0 bg-black/58" />

        <div className="site-container relative z-10 flex min-h-[48svh] flex-col justify-end pb-10 pt-20 sm:pb-12 sm:pt-24 md:min-h-[52svh] md:pb-14 md:pt-28">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Cyto Records · Music First
            </p>
            <h1 className="font-sans text-[1.85rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              We develop singers and music artistes.
            </h1>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/80 sm:mt-5 sm:text-base md:text-lg">
              Talent rules. Passion conquers. Cyto is purposeful music development — singing,
              song craft, and artiste careers — not MC training.
            </p>
            <div className="action-row mt-8">
              <Link to="/contact" className="btn-primary">
                Apply to Join
              </Link>
              <a href="#artiste" className="btn-ghost-light">
                Meet Tinuabrus
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Groom / Mentor / Train strips */}
      <section id="pillars">
        <StaggerGroup className="grid md:grid-cols-3" alternate stagger={0.06}>
          {pillars.map((pillar) => {
            const isGold = pillar.tone === 'gold'
            const isInk = pillar.tone === 'ink'
            return (
              <StaggerItem key={pillar.title}>
                <div
                  className={`h-full px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 ${
                    isGold
                      ? 'bg-gold'
                      : isInk
                        ? 'bg-ink'
                        : 'border-y border-line bg-white md:border-x md:border-y-0'
                  }`}
                >
                  <pillar.icon
                    className={`h-8 w-8 ${isGold ? 'text-ink' : 'text-gold'}`}
                    strokeWidth={1.5}
                  />
                  <h2
                    className={`mt-5 font-sans text-2xl font-bold ${
                      isGold ? 'text-ink' : isInk ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {pillar.title}
                  </h2>
                  <p
                    className={`mt-3 text-sm font-light leading-relaxed ${
                      isGold ? 'text-ink/75' : isInk ? 'text-white/70' : 'text-muted'
                    }`}
                  >
                    {pillar.body}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-white py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/talent5.jpg"
                alt="Cyto mentoring and training young professionals"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-6" stagger={0.08}>
            <StaggerItem>
              <p className="eyebrow mb-3">What Cyto Does</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Building career-ready music artistes
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  Cyto Records is Nana Quasi-Wusu’s music incubation house — where singers and
                  music artistes are groomed, mentored, and trained for real industry work. Not
                  hobby energy. Professional standards.
                </p>
                <p>
                  This lane is purposefully for music — singing, songs, and artiste careers. MC
                  and hypeman development lives under PM Entertainment and The Finest MasterClass,
                  not Cyto.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-light text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Horizontal S-curve roadmap card */}
      <section id="process" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Roadmap
            </p>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              How incubation works
            </h2>
            <p className="mt-3 max-w-lg text-base font-light text-muted">
              Identify. Train. Mentor. Incubate. Then sign a deal — and we manage you.
            </p>
          </ScrollReveal>

          <CytoRoadmap />

          <ScrollReveal delay={0.15} className="mt-10 text-center md:mt-12">
            <p className="mx-auto max-w-xl text-sm font-light text-muted">
              Ready talent doesn’t walk alone — once signed, Cyto and PM Entertainment manage your
              path: bookings, positioning, and career growth.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-dark"
            >
              Start the Process
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Who we develop */}
      <section id="focus" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Focus
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Who we develop
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <p className="text-base font-light text-muted">
                Music lanes only — singers and artistes groomed for releases, stages, and lasting
                careers.
              </p>
            </ScrollReveal>
          </div>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" alternate stagger={0.05}>
            {focus.map((item) => (
              <StaggerItem key={item.title}>
                <article className="group relative aspect-[3/4] overflow-hidden bg-ink">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <item.icon className="mb-3 h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h3 className="font-sans text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs font-light leading-relaxed text-white/70">
                      {item.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Tinuabrus — music artiste spotlight */}
      <section id="artiste" className="bg-off py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/talent1.jpg"
                alt="Tinuabrus — Cyto Records music artiste developed for singing"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-6" stagger={0.08}>
            <StaggerItem>
              <p className="eyebrow mb-3">Artiste Spotlight</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Tinuabrus
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  With Tinuabrus, the work is purposeful music development — singing, songs, and
                  artiste identity. Not MC training.
                </p>
                <p>
                  Cyto invests in the music lane: voice, craft, brand, and the path from incubation
                  to signed career management under Cyto and PM Entertainment.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-6 space-y-2.5 text-sm text-ink/85">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  Developed as a music artiste / singer
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  Mentored for songs, performance, and artiste brand
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  MC &amp; hypeman lanes stay with PM Entertainment
                </li>
              </ul>
            </StaggerItem>
            <StaggerItem>
              <Link to="/contact" className="btn-primary mt-8">
                Inquire About Cyto
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Talent gallery */}
      <section id="talent" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              In the Room
            </p>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Moments from the music process
            </h2>
            <p className="mt-3 text-base font-light text-muted">
              Real sessions. Real music talent. Cyto grooming the next generation of artistes.
            </p>
          </ScrollReveal>

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
            {talentGallery.map((shot, i) => (
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship bridge */}
      <section className="bg-ink py-16 md:py-20">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src="/images/talent.jpg"
                alt="PM mentoring music talent under Cyto Records"
                className="aspect-[4/3] w-full object-cover"
                style={{ objectPosition: 'center 30%' }}
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
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
                Guided for music careers
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/70">
                Cyto’s lane is music — vocal craft, performance, brand visibility, releases, and
                ethics of the business. Looking for MC or hypeman training? That’s The Finest
                MasterClass under PM Entertainment.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-7">
                <Link to="/contact" className="btn-primary">
                  Apply Now
                </Link>
                <Link to="/pm-entertainment#masterclass" className="btn-ghost-light">
                  MC MasterClass
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Ready for a music career?"
        subtitle="Apply to Cyto Records — purposeful grooming and mentorship for singers and music artistes."
        primaryLabel="Apply / Inquire"
        primaryTo="/contact"
        secondaryLabel="PM Entertainment"
        secondaryTo="/pm-entertainment"
      />
    </>
  )
}
