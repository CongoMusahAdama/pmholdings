import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type Variant = 'white' | 'gold' | 'dark'

interface FeatureCardProps {
  title: string
  body: string
  to: string
  icon: LucideIcon
  variant?: Variant
  image?: string
  imageAlt?: string
}

const variants: Record<
  Variant,
  {
    fill: string
    icon: string
    title: string
    body: string
    btn: string
    showCircle?: boolean
  }
> = {
  white: {
    fill: 'bg-white',
    icon: 'text-ink',
    title: 'text-ink',
    body: 'text-muted',
    btn: 'border border-black/10 bg-white text-ink hover:border-gold hover:text-gold',
  },
  gold: {
    fill: 'bg-gold',
    icon: 'text-ink',
    title: 'text-ink',
    body: 'text-ink/75',
    btn: 'bg-[#e8c96a] text-ink hover:bg-[#f0d78a]',
    showCircle: true,
  },
  dark: {
    fill: 'bg-ink',
    icon: 'text-gold',
    title: 'text-white',
    body: 'text-white/65',
    btn: 'border border-gold/40 bg-[#1a1a1a] text-gold hover:border-gold',
  },
}

export default function FeatureCard({
  title,
  body,
  to,
  icon: Icon,
  variant = 'white',
  image,
  imageAlt,
}: FeatureCardProps) {
  const v = variants[variant]

  return (
    <motion.div
      className="group relative h-full min-h-[220px] md:min-h-[230px]"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 flex flex-col drop-shadow-[0_12px_28px_rgba(17,17,17,0.08)] transition-shadow duration-300 group-hover:drop-shadow-[0_18px_36px_rgba(17,17,17,0.14)]">
        <div className={`relative min-h-0 flex-1 overflow-hidden rounded-t-[1.25rem] ${v.fill}`}>
          {v.showCircle && (
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-10 h-36 w-36 rounded-full bg-gold-dark/30"
            />
          )}
        </div>
        <div className="flex h-[2.85rem] shrink-0">
          <div className="w-[9.25rem] shrink-0" />
          <div className={`relative flex-1 ${v.fill}`}>
            <span
              aria-hidden
              className={`absolute -left-3.5 top-0 h-3.5 w-3.5 ${v.fill}`}
              style={{
                WebkitMaskImage: 'radial-gradient(circle at 0 100%, transparent 13px, #000 14px)',
                maskImage: 'radial-gradient(circle at 0 100%, transparent 13px, #000 14px)',
              }}
            />
            <span aria-hidden className={`absolute inset-0 rounded-br-[1.25rem] ${v.fill}`} />
          </div>
        </div>
      </div>

      <div className="relative flex h-full flex-col p-5 pb-14 md:p-6 md:pb-14">
        {image ? (
          <div className="-mx-0.5 mb-0.5 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={imageAlt ?? title}
              className="h-20 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center 28%' }}
            />
          </div>
        ) : (
          <Icon className={`h-7 w-7 ${v.icon}`} strokeWidth={1.45} />
        )}
        <h3 className={`mt-3.5 font-sans text-lg font-bold tracking-tight md:text-xl ${v.title}`}>
          {title}
        </h3>
        <p className={`mt-2 line-clamp-3 text-[0.8125rem] font-light leading-relaxed ${v.body}`}>
          {body}
        </p>
      </div>

      <Link
        to={to}
        className={`absolute bottom-1 left-1 inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold shadow-md transition-all ${v.btn}`}
      >
        Learn More
      </Link>
    </motion.div>
  )
}
