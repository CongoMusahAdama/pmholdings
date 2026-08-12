import { Link } from 'react-router-dom'
import { CheckCircle2, GraduationCap, HeartHandshake, Play, Users } from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import CTA from '../components/CTA'
import { contactInfo } from '../data/ventures'

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
  { src: '/images/donation-kith.jpg', alt: 'Dine With The Street outreach', label: 'Dine With The Street' },
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

const causes = [
  {
    title: 'Dine With The Street',
    body: 'Feeding, care, and dignity for communities on the street — 7+ editions and 1000+ kids reached.',
    image: '/images/donation-kith.jpg',
    tag: '1000+ kids',
  },
  {
    title: 'A Pint 4 A Life',
    body: 'Annual blood donation drives mobilising communities to give blood and save lives.',
    image: '/images/foundation.jpg',
    tag: 'Annual drive',
  },
  {
    title: 'Scholarships & Love Trip',
    body: 'Education support for brilliant but needy students, plus outreaches to the aged, widows, and vulnerable.',
    image: '/images/foundation1.jpg',
    tag: 'Ongoing',
  },
]

export default function PMFoundation() {
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
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="site-container relative z-10 flex min-h-[70svh] flex-col justify-end pb-14 pt-24 md:min-h-[78svh] md:pb-16 md:pt-28">
          <ScrollReveal className="max-w-3xl">
            <h1 className="font-sans text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              Help people. Our main goal is service.
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              Scholarships, community care, youth empowerment, and cultural pride — founded on
              PM’s 30th birthday with co-founder Joycelyn Odeebea Ampofo.
            </p>
            <div className="action-row mt-8">
              <Link to="/contact" className="btn-primary">
                Donate / Partner
              </Link>
              <a href="#mission" className="btn-ghost-light">
                Discover
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three feature strips */}
      <section className="grid md:grid-cols-3">
        <div className="bg-gold px-8 py-10 md:px-10 md:py-12">
          <GraduationCap className="h-8 w-8 text-ink" strokeWidth={1.5} />
          <h2 className="mt-5 font-sans text-2xl font-bold text-ink">Education</h2>
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
          <h2 className="mt-5 font-sans text-2xl font-bold text-white">Become a Volunteer</h2>
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
            <h2 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
              Driven by compassion, guided by humanity
            </h2>
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
                <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                  Impact through kindness
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p className="text-sm font-light leading-relaxed text-white/65 md:text-base">
                  From Dine With The Street to A Pint 4 A Life, every outreach is proof that
                  excellence serves people — not just stages.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-dark"
                >
                  Donate Now
                </Link>
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
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                See the work. Feel the impact.
              </h2>
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

      {/* Causes */}
      <section id="causes" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Our Causes
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                You can help lots of people by giving something.
              </h2>
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
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex w-fit items-center gap-2 bg-ink px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold hover:text-ink"
                    >
                      Support
                      <HeartHandshake className="h-3.5 w-3.5" />
                    </Link>
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
            <h2 className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">Get Involved</h2>
            <div className="mx-auto my-5 gold-divider" />
            <p className="text-base font-light leading-relaxed text-muted">
              Donate, partner, or volunteer. Call{' '}
              <a href={`tel:${contactInfo.phone}`} className="font-medium text-gold hover:text-ink">
                {contactInfo.phone}
              </a>{' '}
              or reach out via the contact page. Follow{' '}
              <span className="text-ink">@pm__foundation</span> for updates.
            </p>
            <div className="action-row mt-8 justify-center">
              <a href={`tel:${contactInfo.phone}`} className="btn-primary">
                Call to Support
              </a>
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
    </>
  )
}
