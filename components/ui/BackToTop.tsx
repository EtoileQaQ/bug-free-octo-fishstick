'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'

export function BackToTop() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 520)
  })

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Retour en haut de page"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          whileHover={{
            backgroundColor: 'var(--ciel)',
            borderColor: 'var(--ciel)',
            y: -3
          }}
          whileTap={{ y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center border border-[rgba(82,194,230,0.55)] bg-ink text-xl leading-none text-white shadow-[0_18px_45px_rgba(13,27,46,0.28)] md:bottom-8 md:right-8"
        >
          <span aria-hidden="true">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
