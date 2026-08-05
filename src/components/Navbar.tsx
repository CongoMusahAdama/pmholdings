import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { brand, contactInfo, getLogoForPath, getSocialsForPath, ventures } from '../data/ventures'
import { navPages } from '../data/navSections'
import BrandLogo from './BrandLogo'
import SocialIconLinks from './SocialIcons'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const socials = getSocialsForPath(location.pathname)
  const activePage = navPages.find((p) => p.to === location.pathname)
  const activeLogo = getLogoForPath(location.pathname)
  const activeVenture = ventures.find((v) => v.path === location.pathname)
  const topMessage = activePage
    ? `${activePage.label} — ${activePage.description}`
    : 'Excellence is My Hallmark — Book The Finest MC for your next event'

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setMobileExpanded(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (mobileOpen) {
      setMobileExpanded(location.pathname)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen, location.pathname])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Tier 1 */}
      <div className="hidden border-b border-line bg-soft lg:block">
        <div className="site-container flex h-9 items-center justify-between">
          <p className="truncate pr-4 text-[0.72rem] text-muted">{topMessage}</p>
          <SocialIconLinks links={socials} size="sm" carousel className="gap-3.5" />
        </div>
      </div>

      {/* Tier 2 */}
      <div className="border-b border-line bg-white">
        <div className="site-container flex items-center justify-between gap-3 py-3 sm:gap-6 sm:py-4 md:py-5">
          <Link to="/" className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            <BrandLogo
              src={activeLogo}
              alt={activeVenture?.name ?? 'PM — The Finest MC'}
              className="h-11 w-11 shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
            <div className="min-w-0 leading-tight">
              <span className="block truncate font-sans text-base font-bold tracking-tight text-ink sm:text-xl md:text-2xl">
                {activeVenture?.name ?? brand.fullName}
              </span>
              <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted sm:block lg:text-gold">
                {activeVenture?.tagline ?? brand.title}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            <ContactBlock
              icon={<Phone className="h-4 w-4" />}
              label="Contact Now"
              value={contactInfo.phone}
              href={`tel:${contactInfo.phone}`}
            />
            <ContactBlock
              icon={<MapPin className="h-4 w-4" />}
              label="Our Location"
              value={brand.location}
            />
            <ContactBlock
              icon={<Mail className="h-4 w-4" />}
              label="Mail Us"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle className="border-transparent lg:border-line" />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tier 3 — gold nav + mega menus */}
      <div className="relative hidden bg-gold lg:block">
        <div className="site-container flex h-14 items-center justify-between gap-4">
          <nav className="flex flex-1 items-center gap-0.5">
            {navPages.map((page) => {
              const isOpen = openMenu === page.to
              const isActive = location.pathname === page.to

              return (
                <div
                  key={page.to}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(page.to)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <NavLink
                    to={page.to}
                    end={page.to === '/'}
                    className={`inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] transition-colors xl:px-3.5 ${
                      isActive || isOpen
                        ? 'bg-white text-ink'
                        : 'text-ink hover:bg-white/25'
                    }`}
                  >
                    {page.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </NavLink>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 w-[320px] pt-0"
                      >
                        <div className="overflow-hidden rounded-b-xl border border-line bg-white shadow-[0_20px_50px_rgba(17,17,17,0.15)]">
                          <div className="border-b border-line bg-off px-5 py-4">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
                              {page.label}
                            </p>
                            <p className="mt-1 text-sm text-muted">{page.description}</p>
                          </div>
                          <ul className="py-2">
                            {page.sections.map((section) => (
                              <li key={section.id}>
                                <Link
                                  to={`${page.to}#${section.id}`}
                                  className="flex items-center justify-between px-5 py-2.5 text-sm text-ink transition-colors hover:bg-gold/10 hover:text-gold"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  <span>{section.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="border-t border-line px-5 py-3">
                            <Link
                              to={page.to}
                              className="text-xs font-bold uppercase tracking-[0.14em] text-gold hover:text-gold-dark"
                              onClick={() => setOpenMenu(null)}
                            >
                              Open full page →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center bg-white px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile — tap a page to reveal its sections */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-white lg:hidden"
          >
            <nav
              className="site-container max-h-[min(78svh,36rem)] overflow-y-auto overscroll-contain py-1 pb-5"
              aria-label="Mobile"
            >
              <ul>
                {navPages.map((page) => {
                  const active = location.pathname === page.to
                  const expanded = mobileExpanded === page.to
                  const hasSections = page.sections.length > 0

                  return (
                    <li key={page.to} className="border-b border-line">
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between gap-3 py-3.5 text-left ${
                          active || expanded ? 'text-gold' : 'text-ink'
                        }`}
                        onClick={() =>
                          setMobileExpanded((cur) => (cur === page.to ? null : page.to))
                        }
                        aria-expanded={expanded}
                      >
                        <span className="text-[0.8rem] font-semibold uppercase tracking-[0.12em]">
                          {page.label}
                        </span>
                        {hasSections && (
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                              expanded ? 'rotate-180 text-gold' : ''
                            }`}
                          />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && hasSections && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <li>
                              <Link
                                to={page.to}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 pl-1 text-sm font-medium text-ink hover:text-gold"
                              >
                                Open {page.label}
                              </Link>
                            </li>
                            {page.sections.map((section) => (
                              <li key={section.id}>
                                <Link
                                  to={`${page.to}#${section.id}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 pl-1 text-sm text-muted hover:text-gold"
                                >
                                  {section.label}
                                </Link>
                              </li>
                            ))}
                            <li className="h-2" aria-hidden />
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-5 w-full"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function ContactBlock({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-[0.7rem] font-medium text-muted">{label}</span>
        <span className="block text-sm font-semibold text-ink">{value}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 transition-opacity hover:opacity-80">
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-3">{content}</div>
}
