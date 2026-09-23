import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Building2,
  CheckCircle2,
  Copy,
  GraduationCap,
  HeartHandshake,
  Play,
  Users,
  X,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import AnimatedHeading from '../components/AnimatedHeading'
import CTA from '../components/CTA'
import { contactInfo, whatsappHref } from '../data/ventures'
import { foundationLineup } from '../data/upcoming'

const checklist = [
  'Scholarships for needy students',
  'Dine With The Street outreaches',
  'A Pint 4 A Life blood drives',
  'Love Trip community care',
  'Youth empowerment programmes',
  'Anti–skin bleaching campaigns',
  'Made-in-Ghana advocacy',
  'Orphanage & prison visits',
]

const impactMoments = [
  { src: '/images/dine-street/dine-01.jpg', alt: 'Dine With The Street community gathering with PM', label: 'Dine With The Street' },
  { src: '/images/dine-street/dine-02.jpg', alt: 'Haircut during Dine With The Street outreach', label: 'Haircuts' },
  { src: '/images/dine-street/dine-03.jpg', alt: 'Crowd gathered for Dine With The Street', label: 'Community' },
  { src: '/images/dine-street/dine-04.jpg', alt: 'Children seated for a meal at Dine With The Street', label: 'Feeding' },
  { src: '/images/dine-street/dine-05.jpg', alt: 'Children eating at Dine With The Street', label: 'Meals' },
  { src: '/images/dine-street/dine-06.jpg', alt: 'Care packs at Dine With The Street', label: 'Care Packs' },
  { src: '/images/dine-street/dine-07.jpg', alt: 'Serving meals at Dine With The Street', label: 'Serving' },
  { src: '/images/dine-street/dine-08.jpg', alt: 'PM with children at Dine With The Street', label: 'With the kids' },
  { src: '/images/dine-street/dine-09.jpg', alt: 'Haircut and care at Dine With The Street', label: 'Dignity' },
  { src: '/images/dine-street/dine-10.jpg', alt: 'A child enjoying a meal at Dine With The Street', label: 'Care' },
  { src: '/images/dine-street/dine-11.jpg', alt: 'Dine With The Street community outreach', label: 'Outreach' },
  { src: '/images/dine-street/dine-12.jpg', alt: 'Dine With The Street on the ground', label: 'On the street' },
  { src: '/images/dine-street/dine-13.jpg', alt: 'Children seated at Dine With The Street', label: 'Together' },
  { src: '/images/donation-kith.jpg', alt: 'Donation at Kith’s Mental Home', label: 'Kith’s Mental Home' },
  { src: '/images/foundation.jpg', alt: 'A Pint 4 A Life blood drive', label: 'A Pint 4 A Life' },
  { src: '/images/foundation1.jpg', alt: 'PM Foundation community support', label: 'Community Care' },
  { src: '/images/foundation2.jpg', alt: 'Foundation volunteers at work', label: 'Volunteers' },
  { src: '/images/foundation5.jpg', alt: 'Love Trip outreach moment', label: 'Love Trip' },
  { src: '/images/foundation6.jpg', alt: 'PM Foundation giving initiative', label: 'Giving' },
  { src: '/images/foundation8.jpg', alt: 'Foundation field work', label: 'On the Ground' },
  { src: '/images/foundation10.jpg', alt: 'Scholarship and youth support', label: 'Youth Support' },
  { src: '/images/foundation14.jpg', alt: 'Foundation outreach in Takoradi', label: 'Takoradi' },
  { src: '/images/foundation16.jpg', alt: 'PM Foundation beneficiaries', label: 'Impact' },
  { src: '/images/foundation23.jpg', alt: 'Community celebration with PM Foundation', label: 'Community' },
  { src: '/images/foundation45.jpg', alt: 'Foundation team and partners', label: 'Partners' },
  { src: '/images/donation-1.jpg', alt: 'Donation distribution', label: 'Donations' },
  { src: '/images/donation-2.jpg', alt: 'Foundation donation moment', label: 'Care Packs' },
  { src: '/images/foundation60.jpg', alt: 'PM Foundation programme', label: 'Programmes' },
  { src: '/images/foundation90.jpg', alt: 'Service to humanity in action', label: 'Service' },
]

const whoWeAreTags = [
  'Transparent',
  'Community First',
  'Scholarships',
  'Blood Drives',
  'Youth Empowerment',
  'Made in Ghana',
]

const donationTypes = [
  'Scholarships',
  'Dine With The Street',
  'A Pint 4 A Life',
  'Love Trip / Community care',
  'General support',
] as const

const donateAmounts = ['50', '100', '250', '500']

const causes = [
  {
    title: 'Dine With The Street',
    body: 'Feeding, care, and dignity for communities on the street — 7+ editions and 1000+ kids reached. Every December.',
    image: '/images/dine-street/dine-01.jpg',
    tag: 'December',
  },
  {
    title: 'A Pint 4 A Life',
    body: 'Annual blood donation drives each March — mobilising communities to give blood and save lives.',
    image: '/images/foundation.jpg',
    tag: 'March',
  },
  {
    title: 'Scholarships & Love Trip',
    body: 'Education support for brilliant but needy students, plus outreaches to the aged, widows, and vulnerable.',
    image: '/images/foundation1.jpg',
    tag: 'Ongoing',
  },
]

export default function PMFoundation() {
  const [donateOpen, setDonateOpen] = useState(false)
  const [donateType, setDonateType] = useState<string>(donationTypes[4])

  function openDonate(type?: string) {
    if (type) setDonateType(type)
    setDonateOpen(true)
  }

  return (
    <>
      <SEO
        title="PM Foundation"
        path="/pm-foundation"
        description="PM Foundation under PM Holdings — award-winning NGO by Nana Quasi-Wusu (PM) supporting the less privileged, scholarships, youth empowerment, Made-in-Ghana advocacy, and campaigns against skin bleaching."
      />

      {/* Charity-style hero */}
      <section className="relative min-h-[70svh] overflow-hidden bg-ink md:min-h-[78svh]">
        <img
          src="/images/foundation3.jpg"
          alt="PM Foundation community outreach"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="site-container relative z-10 flex min-h-[70svh] flex-col justify-end pb-14 pt-24 md:min-h-[78svh] md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <AnimatedHeading
              text="Help people. Our main goal is service."
              className="font-sans text-[1.85rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
            />
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              Scholarships, community care, youth empowerment, and cultural pride — founded on
              PM’s 30th birthday with co-founder Joycelyn Odeebea Ampofo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => openDonate()} className="btn-donate">
                Donate
              </button>
              <a href="#mission" className="btn-ghost-light">
                Discover
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three feature strips */}
      <section className="grid md:grid-cols-3">
        <div className="bg-gold px-8 py-10 md:px-10 md:py-12">
          <GraduationCap className="h-8 w-8 text-ink" strokeWidth={1.5} />
          <AnimatedHeading
            as="h2"
            text="Education"
            className="mt-5 font-sans text-2xl font-bold text-ink"
          />
          <p className="mt-3 text-sm font-light leading-relaxed text-ink/75">
            Scholarships and support for brilliant but needy students across communities.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-70"
          >
            Discover
          </Link>
        </div>

        <div className="bg-ink px-8 py-10 md:px-10 md:py-12">
          <Users className="h-8 w-8 text-gold" strokeWidth={1.5} />
          <AnimatedHeading
            as="h2"
            text="Become a Volunteer"
            className="mt-5 font-sans text-2xl font-bold text-white"
          />
          <p className="mt-3 text-sm font-light leading-relaxed text-white/65">
            Join outreaches, blood drives, and Love Trip missions that put service into action.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold"
          >
            Join the Foundation
          </Link>
        </div>

        <a
          href="#causes"
          className="group relative min-h-[220px] overflow-hidden bg-soft md:min-h-0"
        >
          <img
            src="/images/foundation5.jpg"
            alt="PM Foundation in the field"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-0.5 h-6 w-6 fill-ink" />
            </span>
          </span>
        </a>
      </section>

      {/* About / mission — Who We Are */}
      <section id="mission" className="bg-white py-16 md:py-24">
        <div className="site-container grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="mb-3 inline-flex rounded-full bg-gold/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Who We Are
            </p>
            <AnimatedHeading
              as="h2"
              text="Driven by compassion, guided by humanity"
              className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-[2.75rem]"
            />
            <div className="relative mt-8 overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/foundation18.jpg"
                alt="PM Foundation with the community"
                className="aspect-[16/11] w-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
                {whoWeAreTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold text-ink shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div id="focus" className="rounded-[1.5rem] border border-line bg-off p-7 md:p-9">
              <h3 className="font-sans text-xl font-bold text-ink md:text-2xl">
                Help people — our main goals
              </h3>
              <div className="mt-5 space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  Growing up, Nana Quasi-Wusu watched his father (the late Rtd. Spt. Kwadwo Owusu)
                  pay school fees for brilliant but needy children, and his mother Evelyn Nsiah gift
                  the aged, widows, and orphans. Giving became a lifestyle.
                </p>
                <p>
                  Formalized as PM Foundation on his 30th birthday with co-founder Joycelyn Odeebea
                  Ampofo, the foundation stands with the less privileged, empowers youth, promotes
                  Made in Ghana, and campaigns against skin bleaching.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </div>
                ))}
              </div>

              <div className="action-row mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold hover:text-ink"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-gold"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact — Brightaid-style */}
      <section id="impact" className="bg-white pb-16 md:pb-24">
        <div className="site-container">
          <div className="overflow-hidden rounded-[1.75rem] bg-ink md:rounded-[2rem]">
            <div className="grid gap-6 px-6 pb-6 pt-10 md:grid-cols-2 md:items-end md:gap-10 md:px-10 md:pb-8 md:pt-12 lg:px-12">
              <ScrollReveal>
                <AnimatedHeading
                  as="h2"
                  text="Impact through kindness"
                  className="font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p className="text-sm font-light leading-relaxed text-white/65 md:text-base">
                  From Dine With The Street to A Pint 4 A Life, every outreach is proof that
                  excellence serves people — not just stages.
                </p>
                <button
                  type="button"
                  onClick={() => openDonate()}
                  className="btn-donate mt-5"
                >
                  Donate
                </button>
              </ScrollReveal>
            </div>

            <div className="relative mx-4 mb-4 overflow-hidden rounded-[1.25rem] md:mx-6 md:mb-6 md:rounded-[1.5rem] lg:mx-8 lg:mb-8">
              <img
                src="/images/foundation45.jpg"
                alt="PM Foundation impact in the community"
                className="aspect-[21/9] w-full object-cover md:aspect-[2.4/1]"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/70 p-4 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-sm sm:rounded-2xl sm:p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  Community reach
                </p>
                <p className="mt-2 font-sans text-2xl font-bold text-white md:text-3xl">1000+</p>
                <p className="mt-1 text-sm text-white/70">Kids reached via Dine With The Street</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[72%] rounded-full bg-gold" />
                </div>
                <div className="mt-2 flex justify-between text-[0.65rem] text-white/55">
                  <span>7+ editions</span>
                  <span>72% of yearly goal</span>
                </div>
                <p className="mt-3 text-xs font-light text-white/60">
                  Help restore dignity across Takoradi communities — scholarships, food, and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work gallery — for sponsors */}
      <section id="gallery" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                In The Field
              </p>
              <AnimatedHeading
                as="h2"
                text="See the work. Feel the impact."
                className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
              />
              <p className="mt-3 text-base font-light text-muted">
                Moments from outreaches, blood drives, and community care — what sponsors and
                partners help make possible.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-ink"
              >
                Full Gallery
              </Link>
            </ScrollReveal>
          </div>

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
            {impactMoments.map((shot, i) => {
              const aspects = [
                'aspect-[3/4]',
                'aspect-square',
                'aspect-[4/5]',
                'aspect-[3/5]',
                'aspect-[5/6]',
              ]
              return (
                <figure
                  key={shot.src}
                  className="group relative mb-3 break-inside-avoid overflow-hidden rounded-xl bg-ink sm:mb-4"
                >
                  <div className={`relative overflow-hidden ${aspects[i % aspects.length]}`}>
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: 'center 25%' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-black/75 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold">
                      {shot.label}
                    </figcaption>
                  </div>
                </figure>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming lineup */}
      <section id="upcoming" className="bg-ink py-14 md:py-16">
        <div className="site-container">
          <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            On the calendar
          </p>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {foundationLineup.map((event) => (
              <article key={event.id} className="flex gap-5">
                <img
                  src={event.image}
                  alt={`${event.title} — ${event.month}`}
                  className="h-28 w-28 shrink-0 rounded-[1.1rem] object-cover sm:h-32 sm:w-36"
                  style={{ objectPosition: 'center 25%' }}
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
                  <button
                    type="button"
                    onClick={() => openDonate(event.title)}
                    className="mt-4 inline-flex text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-white"
                  >
                    {event.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section id="causes" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Our Causes
              </p>
              <AnimatedHeading
                as="h2"
                text="You can help lots of people by giving something."
                className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <a
                href="#get-involved"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-ink"
              >
                More Causes
              </a>
            </ScrollReveal>
          </div>

          <StaggerGroup className="grid gap-5 md:grid-cols-3" alternate stagger={0.06}>
            {causes.map((cause) => (
              <StaggerItem key={cause.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-[var(--shadow-soft)]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: 'center 25%' }}
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[0.68rem] font-bold text-ink">
                      {cause.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-sans text-xl font-bold tracking-tight text-ink md:text-2xl">
                      {cause.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
                      {cause.body}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        openDonate(
                          cause.title.startsWith('Scholarships')
                            ? 'Scholarships'
                            : cause.title,
                        )
                      }
                      className="btn-donate mt-6 !min-h-11 !px-7 !text-[0.72rem] !shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                    >
                      Donate
                    </button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Get involved */}
      <section id="get-involved" className="bg-white py-16 md:py-20">
        <div className="site-container">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              as="h2"
              text="Get Involved"
              className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl"
            />
            <div className="mx-auto my-5 gold-divider" />
            <p className="text-base font-light leading-relaxed text-muted">
              Donate, partner, or volunteer. Call{' '}
              <a href={`tel:${contactInfo.phone}`} className="font-medium text-gold hover:text-ink">
                {contactInfo.phone}
              </a>{' '}
              or reach out via the contact page. Follow{' '}
              <span className="text-ink">@pm__foundation</span> for updates.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => openDonate()} className="btn-donate">
                Donate
              </button>
              <Link to="/contact" className="btn-ghost">
                Partner With Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA
        title="Support the Mission"
        subtitle="Join PM Foundation in serving humanity — one community, one student, one life at a time."
        primaryLabel="Contact Foundation"
        primaryTo="/contact"
        secondaryLabel="About PM"
        secondaryTo="/about"
      />

      <AnimatePresence>
        {donateOpen && (
          <DonateDialog
            selected={donateType}
            onSelect={setDonateType}
            onClose={() => setDonateOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function DonateDialog({
  selected,
  onSelect,
  onClose,
}: {
  selected: string
  onSelect: (value: string) => void
  onClose: () => void
}) {
  const [amount, setAmount] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const bank = contactInfo.bank
  const accountLines = [
    bank.name && `Bank: ${bank.name}`,
    `Account name: ${bank.accountName}`,
    bank.accountNumber && `Account number: ${bank.accountNumber}`,
    bank.branch && `Branch: ${bank.branch}`,
  ].filter(Boolean)

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(accountLines.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  const notifyHref = whatsappHref(
    [
      'Hello PM,',
      '',
      'I want to donate to PM Foundation by bank transfer.',
      `Cause: ${selected}`,
      amount.trim() ? `Amount: GHS ${amount.trim()}` : 'Amount: I will confirm shortly',
      '',
      ...accountLines,
      '',
      'I will make the transfer to this bank account.',
    ].join('\n'),
  )

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <motion.button
        type="button"
        aria-label="Close donate"
        className="absolute inset-0 bg-ink/60 backdrop-blur-[6px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-title"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-h-[92svh] w-full max-w-[28rem] flex-col overflow-hidden rounded-t-[1.75rem] bg-white shadow-[0_30px_80px_rgba(17,17,17,0.28)] sm:rounded-[1.75rem]"
      >
        <div className="relative overflow-hidden bg-ink px-6 pb-7 pt-6 text-white">
          <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-gold/20" />
          <div className="absolute -bottom-12 left-10 h-28 w-28 rounded-full bg-gold/10" />
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5">
                <img
                  src="/logos/foundation.png"
                  alt="PM Foundation"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
                  Give with purpose
                </p>
                <h2 id="donate-title" className="mt-1 font-sans text-xl font-bold leading-tight">
                  Support PM Foundation
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="relative mt-4 max-w-sm text-sm font-light leading-relaxed text-white/70">
            Transfer to the Foundation bank account, then send a note on WhatsApp so we can thank
            you.
          </p>
        </div>

        <div className="overflow-y-auto px-6 py-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Choose a cause
          </p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {donationTypes.map((type) => {
              const active = selected === type
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => onSelect(type)}
                  className={`rounded-xl border px-3.5 py-3 text-left text-[0.8rem] font-semibold leading-snug transition-all ${
                    active
                      ? 'border-gold bg-gold text-ink shadow-[0_8px_20px_rgba(201,162,39,0.28)]'
                      : 'border-line bg-off text-ink hover:border-gold/50'
                  }`}
                >
                  {type}
                </button>
              )
            })}
          </div>

          <div className="relative mt-5 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#faf7f0] to-white p-5">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gold" />
            <div className="flex items-center justify-between gap-3 pl-2">
              <div className="flex items-center gap-2 text-gold">
                <Building2 className="h-4 w-4" strokeWidth={1.75} />
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                  Bank account
                </p>
              </div>
              <button
                type="button"
                onClick={copyAccount}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <dl className="mt-4 space-y-3 pl-2">
              {bank.name ? (
                <div>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    Bank
                  </dt>
                  <dd className="mt-0.5 font-sans text-sm font-semibold text-ink">{bank.name}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  Account name
                </dt>
                <dd className="mt-0.5 font-sans text-sm font-semibold text-ink">
                  {bank.accountName}
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  Account number
                </dt>
                <dd className="mt-1 font-sans text-2xl font-bold tracking-[0.04em] text-ink">
                  {bank.accountNumber || 'Ask on WhatsApp'}
                </dd>
              </div>
              {bank.branch ? (
                <div>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    Branch
                  </dt>
                  <dd className="mt-0.5 font-sans text-sm font-semibold text-ink">{bank.branch}</dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-4 pl-2 text-xs font-light text-muted">
              Use <span className="font-medium text-ink">{selected}</span> as your transfer
              reference.
            </p>
          </div>

          <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Amount (optional)
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {donateAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  amount === value
                    ? 'bg-ink text-white'
                    : 'bg-off text-muted hover:text-ink'
                }`}
              >
                GHS {value}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center rounded-2xl border border-line bg-off px-4 focus-within:border-gold/50">
            <span className="text-sm font-bold text-gold">GHS</span>
            <input
              type="number"
              min="1"
              inputMode="decimal"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent px-3 py-3.5 text-sm font-medium text-ink outline-none"
            />
          </div>

          <a
            href={notifyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-donate mt-5 w-full"
          >
            <HeartHandshake className="h-4 w-4" />
            Confirm on WhatsApp
          </a>
          <p className="mt-3 pb-1 text-center text-[0.7rem] font-light text-muted">
            We’ll confirm your gift and share the impact.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
