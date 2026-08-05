import { Link } from 'react-router-dom'
import {
  HandMetal,
  BookOpen,
  Heart,
  Briefcase,
  MapPin,
  Radio,
  Users,
  Trees,
  Castle,
  Waves,
  Ship,
} from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import CTA from '../components/CTA'

const goals = [
  {
    title: 'Proud to Be Black',
    body: 'BLAKLAAA is a cultural call — celebrating Black identity with confidence, excellence, and joy.',
    icon: HandMetal,
  },
  {
    title: 'African Knowledge',
    body: 'Promoting African history, culture, and connection between nations — fighting ignorance with education on air and on the ground.',
    icon: BookOpen,
  },
  {
    title: 'Against Skin Bleaching',
    body: 'A standing campaign for natural beauty and self-love — echoed in A Walk With PM and foundation programmes.',
    icon: Heart,
  },
  {
    title: 'Legal Hustlers',
    body: 'Empowering youth to build legitimate pathways to success — discipline, craft, and purpose over shortcuts.',
    icon: Briefcase,
  },
]

const destinations = [
  {
    name: 'Kakum National Park',
    region: 'Central Region',
    body: 'Rainforest trails and Ghana’s iconic canopy walkway — BlakTrip in the trees, learning conservation and heritage side by side.',
    image: '/images/blaklass45.jpg',
    icon: Trees,
    tag: 'Visited',
  },
  {
    name: 'Western Coast Beaches',
    region: 'Busua · Butre · Ahanta',
    body: 'Palm-lined shores, fishing communities, and open ocean — where BlakTrip walks the sand and the movement breathes free.',
    image: '/images/blakla1.jpg',
    icon: Waves,
    tag: 'Visited',
  },
  {
    name: 'Cape Coast Castle',
    region: 'Central Region',
    body: 'UNESCO heritage and the Door of No Return — confronting history so pride is rooted in truth, not forgetting.',
    image: '/images/blaklaa2.jpg',
    icon: Castle,
    tag: 'Heritage Route',
  },
  {
    name: 'Elmina Castle',
    region: 'Central Region',
    body: 'Africa’s oldest European building south of the Sahara — a powerful stop on BlakTrip’s coastal education route.',
    image: '/images/blaklaaa.jpg',
    icon: Castle,
    tag: 'Heritage Route',
  },
  {
    name: 'Nzulezo Stilt Village',
    region: 'Western Region',
    body: 'A canoe journey through the Amansuri wetlands to a community built on water — living culture, not a postcard.',
    image: '/images/blaklaa3.jpg',
    icon: Ship,
    tag: 'Western Circuit',
  },
  {
    name: 'Fort Batenstein & Dixcove',
    region: 'Western Region',
    body: 'Hilltop forts, fishing towns, and coastal views near Butre — history and community on Ghana’s western shore.',
    image: '/images/blakla1.jpg',
    icon: MapPin,
    tag: 'Western Circuit',
  },
]

const programmes = [
  {
    title: 'BlakTrip',
    body: 'Twice-yearly curated journeys to Ghana’s beautiful sites — beaches, forests, forts, and living culture — with a vision to extend across Africa.',
    icon: MapPin,
  },
  {
    title: 'On-Air African Focus',
    body: 'Segments like Tym With PM and Aben a Aben on The DrYve (Y97.9FM, 3–7 PM) that teach African heroes, culture, and continental awareness.',
    icon: Radio,
  },
  {
    title: 'Community Force',
    body: 'A solid fan army and movement that shows up — for culture, for causes, and for excellence wherever PM leads.',
    icon: Users,
  },
]

const moments = [
  {
    src: '/images/blakla1.jpg',
    alt: 'BlakTrip coastal walk — Blaklaaa Movement',
    label: 'Coastal Walk',
  },
  {
    src: '/images/blaklass45.jpg',
    alt: 'Blaklaaa at Kakum National Park canopy walkway',
    label: 'Kakum Canopy',
  },
  {
    src: '/images/blaklaa2.jpg',
    alt: 'BlakTrip group experience',
    label: 'BlakTrip Crew',
  },
  {
    src: '/images/blaklaa3.jpg',
    alt: 'Blaklaaa Movement energy on BlakTrip',
    label: 'Trip Energy',
  },
  {
    src: '/images/blaklaaa.jpg',
    alt: 'Blaklaaa Movement community gathering',
    label: 'The Movement',
  },
  {
    src: '/images/pm4.jpg',
    alt: 'Nana Quasi-Wusu (PM) — Blaklaaa founder',
    label: 'The Finest MC',
  },
]

export default function Blacklaa() {
  return (
    <>
      <SEO
        title="Blaklaaa Movement"
        description="Blaklaaa Movement by Nana Quasi-Wusu (PM) — Proud to be Black. Pan-African pride, BlakTrip tourism experiences across Ghana, anti-skin-bleaching campaigns, and youth empowerment."
      />

      {/* Photo hero */}
      <section className="relative min-h-[52svh] overflow-hidden bg-ink md:min-h-[58svh]">
        <img
          src="/images/blakla1.jpg"
          alt="BlakTrip — Blaklaaa Movement exploring Ghana’s coast"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="site-container relative z-10 flex min-h-[52svh] flex-col justify-end pb-10 pt-20 sm:pb-12 sm:pt-24 md:min-h-[58svh] md:pb-14 md:pt-28">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold sm:mb-4">
              Proud to Be Black
            </p>
            <h1 className="font-sans text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Blaklaaa Movement
            </h1>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/80 sm:mt-5 sm:text-base md:text-lg">
              A Pan-African call for identity, culture, and youth power — lived on air, in community,
              and on the road with BlakTrip.
            </p>
            <div className="action-row mt-8">
              <Link to="/contact" className="btn-primary gap-2">
                Join the Movement
              </Link>
              <a href="#places" className="btn-ghost-light gap-2">
                Places We’ve Been
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Goal strips */}
      <section id="goals" className="grid sm:grid-cols-2 lg:grid-cols-4">
        {goals.map((goal, i) => {
          const tones = ['bg-gold text-ink', 'bg-ink text-white', 'bg-white text-ink border-y border-line lg:border-y-0 lg:border-x', 'bg-off text-ink'] as const
          const tone = tones[i % tones.length]
          const isGold = i === 0
          const isInk = i === 1
          return (
            <div key={goal.title} className={`px-7 py-9 md:px-8 md:py-10 ${tone}`}>
              <goal.icon
                className={`h-7 w-7 ${isGold ? 'text-ink' : isInk ? 'text-gold' : 'text-gold'}`}
                strokeWidth={1.5}
              />
              <h2 className="mt-4 font-sans text-xl font-bold tracking-tight">{goal.title}</h2>
              <p
                className={`mt-3 text-sm font-light leading-relaxed ${
                  isGold ? 'text-ink/75' : isInk ? 'text-white/70' : 'text-muted'
                }`}
              >
                {goal.body}
              </p>
            </div>
          )
        })}
      </section>

      {/* The Call */}
      <section id="call" className="bg-white py-16 md:py-24">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="lg:col-span-6">
            <div className="overflow-hidden">
              <img
                src="/images/blaklaaa.jpg"
                alt="Blaklaaa Movement community with Nana Quasi-Wusu (PM)"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </ScrollReveal>

          <StaggerGroup className="lg:col-span-6" stagger={0.08}>
            <StaggerItem>
              <p className="eyebrow mb-3">The Call</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Pride backed by understanding
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="my-5 gold-divider" />
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 text-base font-light leading-relaxed text-muted">
                <p>
                  Nana Quasi-Wusu originated the popular jargon{' '}
                  <span className="font-medium text-gold">BLAKLAAA</span> — Proud to be Black. What
                  started as a phrase became a movement: a community and Pan-African organisation
                  that campaigns against skin bleaching, promotes African history and culture,
                  champions Made-in-Africa goods, and empowers youth as legal hustlers.
                </p>
                <p>
                  Through radio education on The DrYve, BlakTrip travel experiences, and community
                  presence, Blaklaaa builds bridges of knowledge — so pride is backed by
                  understanding.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <Link
                to="/pm-foundation"
                className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold"
              >
                PM Foundation
              </Link>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Places visited — BlakTrip destinations */}
      <section id="places" className="bg-off py-16 md:py-24">
        <div className="site-container">
          <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-12 lg:items-end">
            <ScrollReveal className="lg:col-span-7">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                BlakTrip Destinations
              </p>
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                Places we’ve walked
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08} className="lg:col-span-5">
              <p className="text-base font-light text-muted">
                Twice a year, BlakTrip takes the movement to Ghana’s sites — coast, canopy, castles,
                and living culture — with eyes on the wider continent.
              </p>
            </ScrollReveal>
          </div>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" alternate stagger={0.05}>
            {destinations.map((place) => (
              <StaggerItem key={place.name}>
                <article className="group relative flex h-full flex-col overflow-hidden bg-ink">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: 'center 35%' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <span className="absolute left-4 top-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {place.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <place.icon className="mb-3 h-5 w-5 text-gold" strokeWidth={1.5} />
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {place.region}
                    </p>
                    <h3 className="mt-1 font-sans text-xl font-bold text-white">{place.name}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-white/65">
                      {place.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BlakTrip / programmes */}
      <section id="programmes" className="bg-white py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              In Action
            </p>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-ink md:text-4xl">
              How the movement shows up
            </h2>
            <p className="mt-3 text-base font-light text-muted">
              On the road, on air, and in community — pride that moves.
            </p>
          </ScrollReveal>

          <StaggerGroup className="grid gap-5 md:grid-cols-3" alternate stagger={0.06}>
            {programmes.map((item) => (
              <StaggerItem key={item.title}>
                <article className="flex h-full flex-col border border-line bg-off p-7 md:p-8">
                  <item.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-5 font-sans text-xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted">{item.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Moments gallery */}
      <section id="gallery" className="bg-ink py-16 md:py-24">
        <div className="site-container">
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Gallery
            </p>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
              BlakTrip moments
            </h2>
            <p className="mt-3 text-base font-light text-white/60">
              Community, culture, and Ghana’s places — Blaklaaa on the move.
            </p>
          </ScrollReveal>

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
            {moments.map((shot, i) => (
              <ScrollReveal
                key={shot.src + shot.label}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={(i % 3) * 0.04}
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
                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                  {shot.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join band */}
      <section className="bg-gold py-12 sm:py-14 md:py-16">
        <div className="site-container flex flex-col items-stretch justify-between gap-5 sm:gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-sans text-xl font-bold tracking-tight text-ink sm:text-2xl md:text-3xl">
              Ready for the next BlakTrip?
            </h2>
            <p className="mt-2 text-sm font-light text-ink/75">
              Community, campaigns, and curated journeys across Ghana — Proud to be Black.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black sm:w-auto"
          >
            Get Involved
          </Link>
        </div>
      </section>

      <CTA
        title="Join the Movement"
        subtitle="Community, BlakTrip, campaigns, and collaborations — Proud to be Black."
        primaryLabel="Get Involved"
        primaryTo="/contact"
        secondaryLabel="PM Foundation"
        secondaryTo="/pm-foundation"
      />
    </>
  )
}
