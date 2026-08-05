import { Link } from 'react-router-dom'
import { brand, contactInfo, socialLinks, ventures } from '../data/ventures'
import BrandLogo from './BrandLogo'
import SocialIconLinks from './SocialIcons'

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="site-container overflow-x-hidden py-8 md:py-14 lg:py-20">
        {/* Mobile: compact brand + 2-col links */}
        <div className="md:hidden">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <BrandLogo className="h-10 w-10" />
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-bold">{brand.fullName}</span>
              <span className="block text-[0.65rem] tracking-[0.14em] text-gold">{brand.handle}</span>
            </div>
          </Link>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6">
            <div className="min-w-0">
              <h3 className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Navigate
              </h3>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-gold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gold">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-gold">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Ventures
              </h3>
              <ul className="space-y-1.5 text-sm text-white/70">
                {ventures.map((v) => (
                  <li key={v.id}>
                    <Link to={v.path} className="hover:text-gold">
                      {v.shortName ?? v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-sm text-white/70 hover:text-gold"
            >
              {contactInfo.phone}
            </a>
            <SocialIconLinks links={socialLinks} size="sm" onDark className="gap-3" />
          </div>

          <p className="mt-5 text-center text-[0.65rem] leading-relaxed text-white/40">
            © {new Date().getFullYear()} {brand.fullName} (PM) · Takoradi
          </p>
        </div>

        {/* Desktop / tablet */}
        <div className="hidden md:block">
          <div className="grid gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-3">
                <BrandLogo className="h-12 w-12" />
                <span className="text-lg font-bold">{brand.fullName}</span>
              </Link>
              <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/65">
                {brand.title}. Broadcaster, humanitarian, fashion model & entertainment consultant.
                {brand.slogan}.
              </p>
              <p className="mt-4 text-xs tracking-[0.16em] text-gold">{brand.handle}</p>
            </div>

            <div className="min-w-0 lg:col-span-2">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Navigate
              </h3>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-gold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gold">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-gold">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gold">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0 lg:col-span-3">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ventures
              </h3>
              <ul className="space-y-2.5 text-sm text-white/70">
                {ventures.map((v) => (
                  <li key={v.id}>
                    <Link to={v.path} className="hover:text-gold">
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 lg:col-span-3">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Connect
              </h3>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-gold">
                    {contactInfo.phone}
                  </a>
                </li>
              </ul>
              <SocialIconLinks
                links={socialLinks}
                size="md"
                onDark
                carousel
                className="mt-5 w-full max-w-[12rem]"
              />
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {brand.fullName} (PM). All rights reserved.
            </p>
            <p className="uppercase tracking-[0.18em]">Takoradi, Ghana</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
