import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react'
import { motion, type Variants } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
  /** Softer, slower entrance for section headers */
  breathe?: boolean
}

const ease = [0.22, 1, 0.36, 1] as const

const getVariants = (
  direction: ScrollRevealProps['direction'],
  breathe: boolean,
): Variants => {
  const distance = breathe ? 32 : 48
  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }
  const offset = offsets[direction ?? 'up']

  return {
    hidden: {
      opacity: 0,
      scale: breathe ? 0.96 : 0.94,
      ...offset,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    },
  }
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  breathe = false,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction, breathe)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12, margin: '0px 0px -6% 0px' }}
      transition={{
        duration: breathe ? 0.9 : 0.7,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  /** Reveal on its own when scrolled into view (not parent-staggered) */
  independent?: boolean
  delay?: number
}

function itemOffset(direction: StaggerItemProps['direction']) {
  if (direction === 'left') return { x: -56, y: 18 }
  if (direction === 'right') return { x: 56, y: 18 }
  return { x: 0, y: 44 }
}

/** Staggered container for children that use StaggerItem */
export function StaggerGroup({
  children,
  className = '',
  delay = 0,
  stagger = 0.12,
  /** Alternate left / right fade as each card scrolls into view */
  alternate = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  alternate?: boolean
}) {
  if (alternate) {
    let cardIndex = 0
    return (
      <div className={className}>
        {Children.map(children, (child) => {
          if (!isValidElement(child) || child.type !== StaggerItem) return child
          const props = child.props as StaggerItemProps
          const i = cardIndex++
          return cloneElement(child as ReactElement<StaggerItemProps>, {
            direction: props.direction ?? (i % 2 === 0 ? 'left' : 'right'),
            independent: props.independent ?? true,
            delay: props.delay ?? delay + i * Math.min(stagger, 0.06),
          })
        })}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -4% 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  independent = false,
  delay = 0,
}: StaggerItemProps) {
  const offset = itemOffset(direction)
  const hidden = {
    opacity: 0,
    scale: 0.94,
    ...offset,
  }
  const visible = {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
  }

  if (independent) {
    return (
      <motion.div
        className={`h-full ${className}`}
        initial={hidden}
        whileInView={visible}
        viewport={{ once: true, amount: 0.18, margin: '0px 0px -8% 0px' }}
        transition={{
          duration: 0.72,
          delay,
          ease,
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`h-full ${className}`}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: {
            duration: 0.65,
            ease,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
