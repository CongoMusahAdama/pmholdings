import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const DOTS = 12

export default function PageLoader() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(false)
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (prevPath.current === pathname) return
    prevPath.current = pathname

    setActive(true)
    const done = window.setTimeout(() => setActive(false), 1000)
    return () => window.clearTimeout(done)
  }, [pathname])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f0f0f0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          aria-busy="true"
          role="status"
        >
          <span className="sr-only">Loading</span>
          <div className="page-spinner" aria-hidden>
            {Array.from({ length: DOTS }, (_, i) => {
              const t = i / DOTS
              const size = 12 - t * 9.5
              const opacity = Math.max(0.12, 1 - t * 0.9)
              return (
                <span
                  key={i}
                  className="page-spinner__arm"
                  style={{ transform: `rotate(${i * (360 / DOTS)}deg)` }}
                >
                  <span
                    className="page-spinner__dot"
                    style={{
                      width: size,
                      height: size,
                      opacity,
                    }}
                  />
                </span>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
