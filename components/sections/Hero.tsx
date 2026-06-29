'use client'

import { motion } from 'framer-motion'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

const stats = [
  ['2019', 'Fondé à Paris'],
  ['+100', 'Clients accompagnés'],
  ['EU · US', 'Présence internationale']
]

const ghostWords = [
  { label: 'Stratégie', className: 'text-white/[0.05]' },
  { label: 'Politique', className: 'text-white/[0.05]' },
  { label: 'Influence', className: 'text-[rgba(82,194,230,0.12)]' }
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[rgba(82,194,230,0.3)] to-transparent lg:block" />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 pb-12 pt-36 md:px-8 lg:pr-16">
          <SectionEyebrow>Conseil · Politique · Influence</SectionEyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-8 max-w-3xl font-display text-[clamp(3rem,4.8vw,4.5rem)] font-normal italic leading-[0.92]"
          >
            Rendre le pouvoir aux <em className="text-ciel">idées</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-7 max-w-xl text-lg font-light leading-8 text-white"
          >
            Premier cabinet de conseil alliant les métiers du politique et de l'influence avec le conseil
            en stratégie et les sciences sociales, au service du leadership de pensée.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ backgroundColor: 'var(--ciel-dark)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            href="#approche"
            className="mt-10 inline-flex w-fit items-center gap-3 bg-ciel px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white"
          >
            Découvrir notre approche <span aria-hidden="true">→</span>
          </motion.a>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
            className="mt-16 grid grid-cols-1 gap-6 border-t border-[rgba(255,255,255,0.08)] pt-8 sm:grid-cols-3"
          >
            {stats.map(([value, label]) => (
              <motion.div
                key={value}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-3xl font-semibold italic text-white">{value}</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/45">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="hidden select-none flex-col justify-center gap-8 px-8 lg:flex"
          aria-hidden="true"
        >
          {ghostWords.map((word) => (
            <motion.p
              key={word.label}
              whileHover={{
                color: 'rgba(82,194,230,0.22)',
                textShadow: '0 0 34px rgba(82,194,230,0.18)'
              }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`font-display text-[clamp(3.5rem,7vw,6.5rem)] font-normal italic leading-none ${word.className}`}
            >
              {word.label}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
