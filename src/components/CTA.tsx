import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { StaggerGroup, StaggerItem } from './ScrollReveal'

function isExternal(to: string) {
  return /^(https?:|mailto:|tel:)/i.test(to)
}

function CtaLink({ to, className, children }: { to: string; className: string; children: ReactNode }) {
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

interface CTAProps {
  id?: string
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTA({
  id = 'connect',
  title = 'Let’s Build Something Meaningful',
  subtitle = 'Whether it’s a collaboration, booking, foundation partnership, or brand inquiry — reach out.',
  primaryLabel = 'Get in Touch',
  primaryTo = '/contact',
  secondaryLabel = 'View Ventures',
  secondaryTo = '/#ventures',
}: CTAProps) {
  return (
    <section id={id} className="bg-white py-14 md:py-24">
      <StaggerGroup className="site-container text-center" stagger={0.12}>
        <StaggerItem>
          <p className="eyebrow mb-3">Connect</p>
        </StaggerItem>
        <StaggerItem>
          <h2 className="mx-auto max-w-3xl font-sans text-[1.75rem] font-bold leading-tight text-ink sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="mx-auto my-5 gold-divider md:my-6" />
        </StaggerItem>
        <StaggerItem>
          <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-muted sm:text-base">
            {subtitle}
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="action-row mx-auto mt-8 max-w-md justify-center sm:max-w-none">
            <CtaLink to={primaryTo} className="btn-primary">
              {primaryLabel}
            </CtaLink>
            {secondaryLabel && secondaryTo && (
              <CtaLink to={secondaryTo} className="btn-ghost">
                {secondaryLabel}
              </CtaLink>
            )}
          </div>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
