import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import AnimatedHeading from '../components/AnimatedHeading'
import { getHonour, honours } from '../data/awards'

export default function Honour() {
  const { id = '' } = useParams()
  const found = getHonour(id)

  if (!found) return <Navigate to="/about#awards" replace />

  const { honour, index, prev, next } = found
  const wins = honour.categories.filter((c) => c.result === 'Won').length
  const noms = honour.categories.filter((c) => c.result === 'Nominee').length
  const summary = [
    wins > 0 ? `${wins} win${wins === 1 ? '' : 's'}` : null,
    noms > 0 ? `${noms} nomination${noms === 1 ? '' : 's'}` : null,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <>
      <SEO
        title={honour.body}
        path={`/about/awards/${honour.id}`}
        description={`${honour.body} (${honour.years}) — ${summary || 'Honour'}. Nana Quasi-Wusu (PM), The Finest MC.`}
      />

      <section className="bg-ink pb-16 pt-16 text-white md:pb-20 md:pt-24">
        <div className="site-container">
          <Link
            to="/about#awards"
            className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            All awards
          </Link>
          <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            {String(index + 1).padStart(2, '0')} / {String(honours.length).padStart(2, '0')} ·{' '}
            {honour.years}
          </p>
          <AnimatedHeading
            text={honour.body}
            className="mt-4 max-w-3xl font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          />
          {summary ? (
            <p className="mt-5 text-base font-light text-white/65 md:text-lg">{summary}</p>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="site-container max-w-3xl">
          <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Categories
          </p>
          <ul className="divide-y divide-line overflow-hidden rounded-[1.5rem] border border-line">
            {honour.categories.map((cat) => (
              <li key={cat.name} className="flex items-start justify-between gap-4 px-6 py-5 md:px-7">
                <p className="font-sans text-base font-semibold leading-snug text-ink md:text-lg">
                  {cat.name}
                </p>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
                    cat.result === 'Won'
                      ? 'bg-gold text-ink'
                      : 'border border-line bg-off text-muted'
                  }`}
                >
                  {cat.result}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex items-start justify-between gap-6 border-t border-line pt-8">
            <Link
              to={`/about/awards/${prev.id}`}
              className="group max-w-[45%] text-left"
            >
              <p className="inline-flex items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                <ChevronLeft className="h-3.5 w-3.5" />
                Previous
              </p>
              <p className="mt-2 font-sans text-sm font-bold leading-snug text-ink transition-colors group-hover:text-gold">
                {prev.body}
              </p>
            </Link>
            <Link to={`/about/awards/${next.id}`} className="group max-w-[45%] text-right">
              <p className="inline-flex items-center justify-end gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Next
                <ChevronRight className="h-3.5 w-3.5" />
              </p>
              <p className="mt-2 font-sans text-sm font-bold leading-snug text-ink transition-colors group-hover:text-gold">
                {next.body}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
