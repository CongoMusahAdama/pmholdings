import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

type AnimatedHeadingProps = {
  text: string
  mutedText?: string
  className?: string
  mutedClassName?: string
  as?: 'h1' | 'h2'
  delay?: number
  mode?: 'mount' | 'view'
}

export default function AnimatedHeading({
  text,
  mutedText,
  className = '',
  mutedClassName = 'text-muted/55',
  as = 'h1',
  delay,
  mode,
}: AnimatedHeadingProps) {
  const resolvedMode = mode ?? (as === 'h2' ? 'view' : 'mount')
  const resolvedDelay = delay ?? (resolvedMode === 'view' ? 0.05 : 0.15)
  const words = text.trim().split(/\s+/)
  const mutedWords = mutedText?.trim().split(/\s+/) ?? []
  const Tag = as === 'h2' ? motion.h2 : motion.h1

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: resolvedMode === 'view' ? 0.045 : 0.055,
        delayChildren: resolvedDelay,
      },
    },
  }

  const word = {
    hidden: { opacity: 0, y: resolvedMode === 'view' ? 22 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: resolvedMode === 'view' ? 0.55 : 0.62, ease },
    },
  }

  const aria = mutedText ? `${text} ${mutedText}` : text

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      {...(resolvedMode === 'mount'
        ? { animate: 'show' }
        : {
            whileInView: 'show',
            viewport: { once: true, amount: 0.45, margin: '0px 0px -8% 0px' },
          })}
      aria-label={aria}
    >
      {words.map((w, i) => (
        <span key={`t-${w}-${i}`} className="mr-[0.28em] inline-block overflow-hidden last:mr-0">
          <motion.span className="inline-block" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
      {mutedWords.length > 0 && (
        <>
          {' '}
          {mutedWords.map((w, i) => (
            <span
              key={`m-${w}-${i}`}
              className={`mr-[0.28em] inline-block overflow-hidden last:mr-0 ${mutedClassName}`}
            >
              <motion.span className="inline-block" variants={word}>
                {w}
              </motion.span>
            </span>
          ))}
        </>
      )}
    </Tag>
  )
}
