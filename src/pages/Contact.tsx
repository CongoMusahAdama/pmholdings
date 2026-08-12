import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal, { StaggerGroup, StaggerItem } from '../components/ScrollReveal'
import { contactInfo, socialLinks, ventures } from '../data/ventures'
import SocialIconLinks from '../components/SocialIcons'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Contact PM Holdings / Nana Quasi-Wusu (PM) — The Finest MC — for bookings, business inquiries, foundation partnerships, and collaborations in Ghana."
      />

      <section className="bg-off pb-12 pt-24 sm:pb-16 sm:pt-28 md:pb-24 md:pt-32">
        <div className="site-container">
          {/* Page intro — Moneta-style centered header */}
          <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-14">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Connect
            </p>
            <h1 className="font-sans text-[2rem] font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted sm:mt-4 sm:text-base">
              Business inquiries, bookings, foundation partnerships, and collaborations — start
              here.
            </p>
          </ScrollReveal>

          {/* Main card: Get in touch + form */}
          <ScrollReveal>
            <div
              id="form"
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:rounded-[1.75rem]"
            >
              <div className="grid lg:grid-cols-12">
                {/* Left — Get in touch */}
                <div
                  id="business"
                  className="border-b border-line bg-white p-5 sm:p-8 md:p-10 lg:col-span-5 lg:border-b-0 lg:border-r"
                >
                  <StaggerGroup stagger={0.08}>
                    <StaggerItem>
                      <h2 className="font-sans text-2xl font-bold tracking-tight text-ink md:text-3xl">
                        Get in touch
                      </h2>
                      <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                        Reach PM’s team for bookings, consulting, foundation work, and brand
                        collaborations.
                      </p>
                    </StaggerItem>

                    <StaggerItem>
                      <ul className="mt-8 space-y-6">
                        <li className="flex gap-3">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-off">
                            <Mail className="h-4 w-4 text-gold" strokeWidth={1.75} />
                          </span>
                          <div>
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                              Email
                            </p>
                            <a
                              href={`mailto:${contactInfo.email}`}
                              className="mt-1 block text-sm font-medium text-ink transition-colors hover:text-gold"
                            >
                              {contactInfo.email}
                            </a>
                            <a
                              href={`mailto:${contactInfo.booking}`}
                              className="mt-0.5 block text-sm font-light text-muted transition-colors hover:text-gold"
                            >
                              {contactInfo.booking}
                            </a>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-off">
                            <Phone className="h-4 w-4 text-gold" strokeWidth={1.75} />
                          </span>
                          <div>
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                              Phone
                            </p>
                            <a
                              href={`tel:${contactInfo.phone}`}
                              className="mt-1 block text-sm font-medium text-ink transition-colors hover:text-gold"
                            >
                              {contactInfo.phone}
                            </a>
                            <a
                              href={`tel:${contactInfo.phoneAlt}`}
                              className="mt-0.5 block text-sm font-light text-muted transition-colors hover:text-gold"
                            >
                              {contactInfo.phoneAlt}
                            </a>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-off">
                            <MapPin className="h-4 w-4 text-gold" strokeWidth={1.75} />
                          </span>
                          <div>
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                              Location
                            </p>
                            <p className="mt-1 text-sm font-medium text-ink">
                              {contactInfo.location}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </StaggerItem>

                    <StaggerItem>
                      <div id="social" className="mt-10 border-t border-line pt-8">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          Follow Us
                        </p>
                        <SocialIconLinks links={socialLinks} size="lg" className="mt-4 gap-4" />
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="mt-8">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">
                          Ventures
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {ventures.map((v) => (
                            <li key={v.id}>
                              <Link
                                to={v.path}
                                className="inline-block rounded-full border border-line px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-gold hover:text-ink"
                              >
                                {v.shortName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </StaggerItem>
                  </StaggerGroup>
                </div>

                {/* Right — form */}
                <div className="bg-off/40 p-5 sm:p-8 md:p-10 lg:col-span-7">
                  {submitted ? (
                    <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center">
                      <p className="font-sans text-3xl font-bold text-ink">Thank you</p>
                      <div className="my-4 gold-divider" />
                      <p className="max-w-sm text-sm font-light text-muted">
                        Your message has been noted. We’ll be in touch shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-gold-dark"
                      >
                        Send another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Your Name" name="name" placeholder="Full name" required />
                        <Field
                          label="Email address"
                          name="email"
                          type="email"
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                      <Field
                        label="Company / Organization"
                        name="company"
                        placeholder="Optional"
                      />
                      <div>
                        <label
                          htmlFor="inquiry"
                          className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="inquiry"
                          name="inquiry"
                          required
                          className="w-full rounded-xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-gold/40"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          <option value="business">Business / Consulting</option>
                          <option value="booking">Booking / Modeling</option>
                          <option value="foundation">PM Foundation</option>
                          <option value="entertainment">PM Entertainment</option>
                          <option value="nantegh">Nantegh</option>
                          <option value="cyto">CYTO</option>
                          <option value="blacklaa">Blacklaa Movement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full resize-y rounded-xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-gold/40"
                          placeholder="Tell us about your project or inquiry…"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className="bg-ink py-14 md:py-16">
        <div className="site-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
              Ready to book The Finest MC?
            </h2>
            <p className="mt-2 text-sm font-light text-white/60">
              Concerts, corporate events, weddings, festivals, consulting, or foundation
              partnerships.
            </p>
          </div>
          <a
            href={`mailto:${contactInfo.booking}`}
            className="btn-primary w-full gap-2 sm:w-auto"
          >
            Email Booking
          </a>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-transparent bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-gold/40"
      />
    </div>
  )
}
