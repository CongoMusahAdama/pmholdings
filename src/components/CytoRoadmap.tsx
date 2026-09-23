import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Identify',
    body: 'Spot talent with a real gift — any lane.',
  },
  {
    num: '02',
    title: 'Train',
    body: 'Craft, presence, brand, and discipline.',
  },
  {
    num: '03',
    title: 'Mentor',
    body: 'One-on-one guidance from PM.',
  },
  {
    num: '04',
    title: 'Incubate',
    body: 'Practice, polish, and real exposure.',
  },
  {
    num: '05',
    title: 'Walk With You',
    body: 'We stay with the gift as it becomes a career.',
  },
]

export default function CytoRoadmap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[1.75rem] bg-ink px-6 py-9 text-white sm:px-10 sm:py-11 md:px-12 md:py-12"
    >
      <motion.p
        className="flex items-baseline gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        <span className="font-sans text-4xl font-bold leading-none text-gold md:text-5xl">5</span>
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white">
          Steps of incubation
        </span>
      </motion.p>

      <ol className="relative mt-10 hidden md:grid md:grid-cols-5">
        <span
          className="absolute left-[10%] right-[10%] top-[1.15rem] h-px bg-gold/35"
          aria-hidden
        />
        {steps.map((step, i) => {
          const last = i === steps.length - 1
          return (
            <motion.li
              key={step.title}
              className="relative flex flex-col items-center px-3 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 + i * 0.07 }}
            >
              <span
                className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-[0.68rem] font-bold ${
                  last ? 'bg-gold text-ink' : 'bg-ink text-gold ring-1 ring-gold'
                }`}
              >
                {step.num}
              </span>
              <h3 className="mt-5 font-sans text-sm font-bold tracking-tight text-white lg:text-base">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[11rem] text-[0.8rem] font-light leading-relaxed text-white/60">
                {step.body}
              </p>
            </motion.li>
          )
        })}
      </ol>

      <ol className="relative mt-9 md:hidden">
        <span
          className="absolute bottom-5 left-[1.15rem] top-3 w-px bg-gold/30"
          aria-hidden
        />
        {steps.map((step, i) => {
          const last = i === steps.length - 1
          return (
            <motion.li
              key={step.title}
              className="relative flex gap-4 py-3.5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <span
                className={`relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.68rem] font-bold ${
                  last ? 'bg-gold text-ink' : 'bg-ink text-gold ring-1 ring-gold'
                }`}
              >
                {step.num}
              </span>
              <div className="min-w-0 pt-1">
                <h3 className="font-sans text-base font-bold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-light leading-relaxed text-white/60">
                  {step.body}
                </p>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
