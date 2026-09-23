import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export type StatItem = {
  value: number | string
  label: string
  suffix?: string
}

const ease = [0.22, 1, 0.36, 1] as const

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function StatCell({
  stat,
  index,
  active,
}: {
  stat: StatItem
  index: number
  active: boolean
}) {
  const numeric = typeof stat.value === 'number'
  const counted = useCountUp(numeric ? (stat.value as number) : 0, active && numeric)

  return (
    <motion.div
      className="relative px-4 py-8 text-center sm:px-6 md:py-10"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <p className="font-sans text-[2rem] font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
        {numeric ? (
          <>
            {counted.toLocaleString()}
            <span className="text-gold">{stat.suffix ?? ''}</span>
          </>
        ) : (
          <span className="tracking-tight">{stat.value}</span>
        )}
      </p>
      <p className="mt-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
        {stat.label}
      </p>
    </motion.div>
  )
}

export default function AnimatedStats({
  stats,
  className = '',
}: {
  stats: StatItem[]
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 divide-y divide-line border-y border-line md:grid-cols-4 md:divide-x md:divide-y-0 ${className}`}
    >
      {stats.map((stat, i) => (
        <StatCell key={stat.label} stat={stat} index={i} active={inView} />
      ))}
    </div>
  )
}
