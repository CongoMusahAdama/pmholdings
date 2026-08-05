import ScrollReveal from './ScrollReveal'
import BrandLogo from './BrandLogo'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  logo?: string
  logoAlt?: string
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  logo,
  logoAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pb-14 pt-14 md:pb-20 md:pt-16">
      <div className="site-container relative">
        <ScrollReveal>
          <div className="mb-6 flex items-center gap-4">
            {logo && (
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-lg md:h-20 md:w-20">
                <BrandLogo src={logo} alt={logoAlt ?? title} className="h-full w-full" />
              </span>
            )}
            {eyebrow && (
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                {eyebrow}
              </p>
            )}
          </div>
          <h1 className="max-w-4xl font-sans text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="my-6 gold-divider" />
          {subtitle && (
            <p className="max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
