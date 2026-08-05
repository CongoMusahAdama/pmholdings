import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Search,
  GraduationCap,
  Users,
  FlaskConical,
  FileSignature,
} from 'lucide-react'

export type RoadmapStep = {
  num: string
  title: string
  body: string
  icon: LucideIcon
}

export const cytoRoadmapSteps: RoadmapStep[] = [
  {
    num: '01',
    title: 'Identify',
    body: 'Spot young professionals with real potential.',
    icon: Search,
  },
  {
    num: '02',
    title: 'Train',
    body: 'Stagecraft, voice, brand, and discipline.',
    icon: GraduationCap,
  },
  {
    num: '03',
    title: 'Mentor',
    body: 'One-on-one guidance from The Finest MC.',
    icon: Users,
  },
  {
    num: '04',
    title: 'Incubate',
    body: 'Practice, polish, and real exposure.',
    icon: FlaskConical,
  },
  {
    num: '05',
    title: 'Sign & Manage',
    body: 'We sign a deal and manage your career.',
    icon: FileSignature,
  },
]

/** Mid-path nodes (steps 1–4). Step 5 lives in the big circle. */
const nodes = [
  { x: 140, y: 155, side: 'above' as const },
  { x: 300, y: 255, side: 'below' as const },
  { x: 460, y: 145, side: 'above' as const },
  { x: 620, y: 260, side: 'below' as const },
]

/** Smooth S-curve into the finale circle */
const PATH =
  'M 60 200 C 120 200, 120 155, 140 155 C 200 155, 240 255, 300 255 C 360 255, 400 145, 460 145 C 520 145, 560 260, 620 260 C 680 260, 720 200, 780 200'

const PATH_DASH =
  'M 60 218 C 120 218, 120 173, 140 173 C 200 173, 240 273, 300 273 C 360 273, 400 163, 460 163 C 520 163, 560 278, 620 278 C 680 278, 720 218, 780 218'

export default function CytoRoadmap({ steps = cytoRoadmapSteps }: { steps?: RoadmapStep[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const finale = steps[4]
  const FinaleIcon = finale.icon

  return (
    <>
      {/* Desktop / tablet — horizontal S-curve card */}
      <div
        ref={ref}
        className="relative mx-auto hidden overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141414] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:block md:px-8 md:py-10 lg:px-10"
      >
        {/* Soft concentric rings behind finale */}
        <div
          className="pointer-events-none absolute -right-8 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-gold/15 lg:h-[26rem] lg:w-[26rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-2 top-1/2 h-[16rem] w-[16rem] -translate-y-1/2 rounded-full border border-gold/20 lg:h-[19rem] lg:w-[19rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-6 top-1/2 h-[10rem] w-[10rem] -translate-y-1/2 rounded-full border border-gold/25 lg:right-10 lg:h-[12rem] lg:w-[12rem]"
          aria-hidden
        />

        <motion.div
          className="relative mb-2 flex items-baseline gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-sans text-5xl font-bold leading-none text-gold lg:text-6xl">
            5
          </span>
          <span className="font-sans text-lg font-bold uppercase tracking-[0.18em] text-white lg:text-xl">
            Steps of incubation
          </span>
        </motion.div>

        <div className="relative mt-2 aspect-[1200/420] w-full">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 400"
            fill="none"
            aria-hidden
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d={PATH_DASH}
              stroke="#d4af37"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.55 } : {}}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            />
            <motion.path
              d={PATH}
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {/* Steps 1–4 along the curve */}
          {steps.slice(0, 4).map((step, i) => {
            const node = nodes[i]
            const delay = 0.45 + i * 0.18
            const isAbove = node.side === 'above'

            return (
              <div key={step.title}>
                <motion.div
                  className="absolute z-20"
                  style={{
                    left: `${(node.x / 1000) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay, type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <div className="h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.2)] lg:h-4 lg:w-4" />
                </motion.div>

                <motion.div
                  className="absolute z-10 w-[8.5rem] lg:w-[10rem]"
                  style={{
                    left: `${(node.x / 1000) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
                    transform: isAbove
                      ? 'translate(-50%, calc(-100% - 1.1rem))'
                      : 'translate(-50%, 1.1rem)',
                    textAlign: 'center',
                  }}
                  initial={{ opacity: 0, y: isAbove ? 10 : -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: delay + 0.08, duration: 0.45 }}
                >
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    {step.num}
                  </p>
                  <h3 className="mt-0.5 font-sans text-sm font-bold uppercase tracking-wide text-white lg:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[0.7rem] font-light leading-snug text-white/55">
                    {step.body}
                  </p>
                </motion.div>
              </div>
            )
          })}

          {/* Finale circle — Sign & Manage */}
          <motion.div
            className="absolute right-[2%] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center justify-center lg:right-[4%]"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1.15, type: 'spring', stiffness: 180, damping: 16 }}
          >
            <motion.div
              className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gold px-4 text-center lg:h-44 lg:w-44"
              animate={
                inView
                  ? {
                      boxShadow: [
                        '0 0 0 0 rgba(212,175,55,0)',
                        '0 0 0 14px rgba(212,175,55,0.18)',
                        '0 0 0 0 rgba(212,175,55,0)',
                      ],
                    }
                  : undefined
              }
              transition={{ delay: 1.5, duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FinaleIcon className="mb-2 h-7 w-7 text-ink lg:h-8 lg:w-8" strokeWidth={1.5} />
              <p className="font-sans text-sm font-bold uppercase leading-tight tracking-wide text-ink lg:text-base">
                {finale.title}
              </p>
              <p className="mt-1 text-[0.65rem] font-light leading-snug text-ink/70">
                {finale.body}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile — stacked journey cards into gold finale */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#141414] px-4 py-7 sm:px-5">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full border border-gold/15"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-10 bottom-24 h-32 w-32 rounded-full border border-white/5"
            aria-hidden
          />

          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Roadmap
            </p>
            <div className="mt-2 flex items-end gap-2.5">
              <span className="font-sans text-5xl font-bold leading-none text-gold">5</span>
              <span className="pb-1 font-sans text-sm font-bold uppercase leading-snug tracking-[0.14em] text-white">
                Steps of
                <br />
                incubation
              </span>
            </div>
          </motion.div>

          <ol className="relative space-y-3">
            <div
              className="absolute bottom-36 left-[1.65rem] top-4 w-px bg-white/20"
              aria-hidden
            />

            {steps.slice(0, 4).map((step, i) => {
              const Icon = step.icon
              const fromLeft = i % 2 === 0
              return (
                <motion.li
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, x: fromLeft ? -40 : 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-stretch gap-3">
                    <div className="relative z-10 flex w-8 shrink-0 flex-col items-center pt-4">
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.18)]" />
                    </div>
                    <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                          <Icon className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
                              {step.num}
                            </span>
                            <span className="h-px flex-1 bg-white/10" />
                          </div>
                          <h3 className="mt-1 font-sans text-base font-bold uppercase tracking-wide text-white">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm font-light leading-relaxed text-white/60">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>

          <motion.div
            className="relative mt-6"
            initial={{ opacity: 0, y: 28, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto flex max-w-[17rem] flex-col items-center">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[13.5rem] w-[13.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30"
                aria-hidden
              />
              <motion.div
                className="relative flex aspect-square w-full max-w-[10.5rem] flex-col items-center justify-center rounded-full bg-gold px-5 text-center shadow-[0_16px_40px_rgba(212,175,55,0.28)]"
                animate={{
                  boxShadow: [
                    '0 16px 40px rgba(212,175,55,0.22)',
                    '0 16px 40px rgba(212,175,55,0.4), 0 0 0 10px rgba(212,175,55,0.12)',
                    '0 16px 40px rgba(212,175,55,0.22)',
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="mb-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-ink/55">
                  {finale.num}
                </span>
                <FinaleIcon className="mb-1.5 h-6 w-6 text-ink" strokeWidth={1.5} />
                <p className="font-sans text-[0.85rem] font-bold uppercase leading-tight tracking-wide text-ink">
                  {finale.title}
                </p>
                <p className="mt-1.5 text-[0.68rem] font-light leading-snug text-ink/70">
                  {finale.body}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
