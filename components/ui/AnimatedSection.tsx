'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export function AnimatedSection({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
