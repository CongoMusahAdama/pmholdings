import { useEffect, useId, useRef, useState } from 'react'
import type { SocialLink } from '../data/ventures'

const sizeClass = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
} as const

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.953.93-1.953 1.886v2.26h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
      />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  const gradId = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#000000"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
      />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

export function SocialIcon({
  name,
  size = 'md',
}: {
  name: string
  size?: keyof typeof sizeClass
}) {
  const cls = sizeClass[size]
  switch (name) {
    case 'Facebook':
      return <FacebookIcon className={cls} />
    case 'Instagram':
      return <InstagramIcon className={cls} />
    case 'X':
      return <XIcon className={cls} />
    case 'LinkedIn':
      return <LinkedInIcon className={cls} />
    default:
      return null
  }
}

function SocialAnchor({
  link,
  size,
  onDark,
}: {
  link: SocialLink
  size: keyof typeof sizeClass
  onDark: boolean
}) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      title={link.label ? `${link.name}, ${link.label}` : link.name}
      aria-label={link.name}
      className={`inline-flex shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 ${
        onDark || link.name === 'X' ? 'bg-white p-1.5 shadow-sm' : 'p-0.5'
      }`}
    >
      <SocialIcon name={link.name} size={size} />
    </a>
  )
}

interface SocialIconLinksProps {
  links: SocialLink[]
  size?: keyof typeof sizeClass
  className?: string
  /** Use light chip behind dark icons (e.g. X on dark footer) */
  onDark?: boolean
  /** Auto-scrolling marquee carousel */
  carousel?: boolean
}

export default function SocialIconLinks({
  links,
  size = 'md',
  className = '',
  onDark = false,
  carousel = false,
}: SocialIconLinksProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!carousel || links.length < 2) return
    const track = trackRef.current
    if (!track) return

    let frame = 0
    let x = 0
    const speed = 0.35

    const tick = () => {
      if (!paused) {
        x += speed
        const half = track.scrollWidth / 2
        if (half > 0 && x >= half) x -= half
        track.style.transform = `translate3d(${-x}px, 0, 0)`
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [carousel, paused, links])

  if (!carousel) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {links.map((s) => (
          <SocialAnchor key={`${s.name}-${s.href}`} link={s} size={size} onDark={onDark} />
        ))}
      </div>
    )
  }

  const loop = [...links, ...links, ...links]

  return (
    <div
      className={`relative overflow-hidden ${onDark ? 'w-[11rem]' : 'w-[9.5rem] sm:w-[11rem]'} ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Social links"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div ref={trackRef} className="flex w-max items-center gap-3.5 will-change-transform">
        {loop.map((s, i) => (
          <SocialAnchor
            key={`${s.name}-${s.href}-${i}`}
            link={s}
            size={size}
            onDark={onDark}
          />
        ))}
      </div>
    </div>
  )
}
