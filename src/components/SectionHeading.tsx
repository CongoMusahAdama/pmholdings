import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import AnimatedHeading from './AnimatedHeading'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'split'
  className?: string
  titleClassName?: string
  eyebrowIcon?: ReactNode
}

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.02 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

const divider = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.75, ease, delay: 0.12 },
  },
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  titleClassName = '',
  eyebrowIcon,
}: SectionHeadingProps) {
  if (align === 'split') {
    return (
      <motion.div
        className={`mb-14 grid items-end gap-8 md:mb-16 lg:grid-cols-12 lg:gap-10 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={container}
      >
        <div className="lg:col-span-7">
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className="mb-3 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold sm:text-[0.72rem] sm:tracking-[0.28em]"
            >
              {eyebrowIcon}
              {eyebrow}
            </motion.p>
          )}
          <AnimatedHeading
            as="h2"
            text={title}
            className={`max-w-xl font-sans text-[1.85rem] font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.35rem] ${titleClassName}`}
          />
        </div>
        <div className="lg:col-span-5">
          {description && (
            <motion.p
              variants={fadeUp}
              className="text-base font-light leading-relaxed text-muted md:text-lg"
            >
              {description}
            </motion.p>
          )}
          <motion.div
            variants={divider}
            className="mt-5 h-[2px] w-12 origin-left bg-gold"
          />
        </div>
      </motion.div>
    )
  }

  const centered = align === 'center'

  return (
    <motion.div
      className={`${centered ? 'mx-auto mb-12 max-w-2xl text-center md:mb-14' : 'mb-10'} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold sm:text-[0.72rem] sm:tracking-[0.28em]"
        >
          {eyebrowIcon}
          {eyebrow}
        </motion.p>
      )}
      <AnimatedHeading
        as="h2"
        text={title}
        className={`font-sans text-[1.75rem] font-bold leading-tight tracking-tight text-ink md:text-4xl lg:text-[2.65rem] ${
          centered ? '' : 'max-w-xl'
        } ${titleClassName}`}
      />
      <motion.div
        variants={divider}
        className={`my-5 h-[2px] w-12 bg-gold ${centered ? 'mx-auto origin-center' : 'origin-left'}`}
      />
      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-base font-light leading-relaxed text-muted md:text-lg ${
            centered ? '' : 'max-w-lg'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
