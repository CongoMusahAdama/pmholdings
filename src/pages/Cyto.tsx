import { Link } from 'react-router-dom'
import {
  Mic2,
  Music2,
  Sparkles,
  Users,
  GraduationCap,
  CheckCircle2,
  Camera,
  Crown,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import AnimatedHeading from '../components/AnimatedHeading'
import AnimatedStats from '../components/AnimatedStats'
import CytoRoadmap from '../components/CytoRoadmap'
import CTA from '../components/CTA'

const pillars = [
  {
    title: 'Nurture',
    body: 'Protect the gift, then give it room to grow — with care, structure, and real attention.',
    icon: Sparkles,
    tone: 'gold' as const,
  },
  {
    title: 'Groom',
    body: 'Shape craft, image, and discipline so talent shows up like a professional, not a hobby.',
    icon: Users,
    tone: 'ink' as const,
  },
  {
    title: 'Polish',
    body: 'Refine presence, delivery, and standards until every gift is the best version of itself.',
    icon: GraduationCap,
    tone: 'white' as const,
  },
]

const talentTypes = [
  'Presenters',
  'MCs',
  'Hypemen',
  'Dancers',
  'Bloggers',
  'Artistes',
  'Musicians',
  'Models',
  'Beauty pageant',
  'Public speakers',
  'Content creators',
]

const focus = [
  {
    title: 'Stage & Voice',
    body: 'Presenters, MCs, hypemen, and public speakers — presence, delivery, and command.',
    icon: Mic2,
    image: '/images/talent4.jpg',
  },
  {
    title: 'Music & Movement',
    body: 'Artistes, musicians, and dancers — performance, catalogue, and stage craft.',
    icon: Music2,
    image: '/images/talent3.jpg',
  },
  {
    title: 'Digital Storytellers',
    body: 'Bloggers and content creators — voice, visibility, and a brand that lasts.',
    icon: Camera,
    image: '/images/talent23.jpg',
  },
  {
    title: 'Fashion & Pageant',
    body: 'Models and beauty pageant talent — poise, image, and professional presence.',
    icon: Crown,
    image: '/images/talent67.jpg',
  },
]

const checklist = [
  'Craft, presence & delivery',
  'Personal brand & image',
  'Discipline & professional ethics',
  'Stage and camera readiness',
  'Mentorship from PM',
  'Industry introductions & exposure',
]

const stats = [
  { value: 35, suffix: '+', label: 'Talents nurtured' },
  { value: 'Bluk', label: 'Current beneficiary' },
  { value: 11, suffix: '+', label: 'Talent lanes' },
  { value: 'PM', label: 'Hands-on mentorship' },
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
        title="Cyto GH"
        path="/cyto"
        description="Cyto GH under PM Holdings — nurture, groom, and polish talents to become the best version of every gift they carry. 35+ presenters, MCs, hypemen, dancers, bloggers, artistes, musicians, models, beauty pageant, public speakers, and content creators. Current beneficiary: Bluk."
      />

      <section className="relative min-h-[48svh] overflow-hidden bg-ink md:min-h-[52svh]">
        <img
          src="/images/talent7.jpg"
          alt="Cyto — nurturing, grooming, and polishing talent with Nana Quasi-Wusu (PM)"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 22%' }}
        />
        <div className="absolute inset-0 bg-black/58" />

        <div className="site-container relative z-10 flex min-h-[48svh] flex-col justify-end pb-10 pt-20 sm:pb-12 sm:pt-24 md:min-h-[52svh] md:pb-14 md:pt-28">
          <div className="max-w-3xl">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Cyto GH · Talent House
            </p>
            <AnimatedHeading
              text="Nurture, groom, and polish every gift."
              className="font-sans text-[1.85rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            />
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/80 sm:mt-5 sm:text-base md:text-lg">
              Talent rules. Passion conquers. Cyto helps talents become the best version of every
              gift they carry — 35+ already through this initiative.
            </p>
            <div className="action-row mt-8">
              <Link to="/contact" className="btn-primary">
                Apply to Join
              </Link>
              <a href="#artiste" className="btn-ghost-light">
                Meet Bluk
              </a>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-white">
        <div className="site-container">
          <AnimatedStats stats={stats} />
        </div>
      </section>

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
            <AnimatedHeading
              as="h2"
              text="The best version of every gift they carry"
              className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
            />
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  Cyto exists to nurture, groom, and polish talents — so each person becomes the
                  best version of the gift they carry. Not hobby energy. Professional standards.
                </p>
                <p>
                  About 35+ talents have already benefited from this initiative — presenters, MCs,
                  hypemen, dancers, bloggers, artistes, musicians, models, beauty pageant talent,
                  public speakers, content creators, and more.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-6 flex flex-wrap gap-2">
                {talentTypes.map((type) => (
                  <li
                    key={type}
                    className="rounded-full border border-line bg-off px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink"
                  >
                    {type}
                  </li>
                ))}
              </ul>
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

      <section id="process" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Roadmap
            </p>
            <AnimatedHeading
              as="h2"
              text="How grooming works"
              className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl"
            />
            <p className="mt-3 max-w-lg text-base font-light text-muted">
              Identify. Train. Mentor. Incubate. Then walk with you as the gift becomes a career.
            </p>
          </ScrollReveal>

          <CytoRoadmap />

          <ScrollReveal delay={0.15} className="mt-10 text-center md:mt-12">
            <p className="mx-auto max-w-xl text-sm font-light text-muted">
              Ready talent doesn’t walk alone — Cyto and PM Entertainment stay with you on
              bookings, positioning, and growth.
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

      <section id="focus" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-12 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Who We Develop
              </p>
              <AnimatedHeading
                as="h2"
                text="Every gift. One standard."
                className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <p className="text-base font-light text-muted">
                From the mic to the lens, the dance floor to the pageant stage — Cyto grooms the
                gift you already carry.
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

      <section id="artiste" className="bg-off py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/talent1.jpg"
                alt="Bluk — current Cyto beneficiary"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-6" stagger={0.08}>
            <StaggerItem>
              <p className="eyebrow mb-3">Current Beneficiary</p>
            </StaggerItem>
            <AnimatedHeading
              as="h2"
              text="Bluk"
              className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
            />
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  Bluk is the current talent under Cyto — being nurtured, groomed, and polished to
                  become the best version of the gift they carry.
                </p>
                <p>
                  One of 35+ who have come through this house. The work is personal: craft,
                  character, visibility, and a path that can last.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <ul className="mt-6 space-y-2.5 text-sm text-ink/85">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  Currently being nurtured under Cyto
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  Groomed and polished for professional work
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  Mentored by Nana Quasi-Wusu (PM)
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

      <section id="talent" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              In the Room
            </p>
            <AnimatedHeading
              as="h2"
              text="Moments from the process"
              className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl"
            />
            <p className="mt-3 text-base font-light text-muted">
              Real sessions. Real gifts. Cyto grooming the next generation of professionals.
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

      <section className="bg-ink py-16 md:py-20">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <ScrollReveal className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src="/images/talent.jpg"
                alt="PM mentoring talent under Cyto"
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
            <AnimatedHeading
              as="h2"
              text="Guided until the gift is ready"
              className="font-sans text-3xl font-bold tracking-tight text-white md:text-4xl"
            />
            <StaggerItem>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/70">
                Cyto walks with talent from raw gift to polished professional — voice, movement,
                brand, camera, and character. The same standard, whatever the lane.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="action-row mt-7">
                <Link to="/contact" className="btn-primary">
                  Apply Now
                </Link>
                <Link to="/pm-entertainment" className="btn-ghost-light">
                  PM Entertainment
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <CTA
        title="Ready to grow your gift?"
        subtitle="Apply to Cyto — nurture, grooming, and polish for presenters, MCs, artistes, models, creators, and more."
        primaryLabel="Apply / Inquire"
        primaryTo="/contact"
        secondaryLabel="PM Entertainment"
        secondaryTo="/pm-entertainment"
      />
    </>
  )
}
