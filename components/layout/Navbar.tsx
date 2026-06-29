'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { label: 'Notre approche', href: '#approche' },
  { label: 'Offres', href: '#offres' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Analyses', href: '#analyses' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Éthique', href: '#ethique' }
]

export function Navbar() {
  const { scrollY } = useScroll()
  const borderColor = useTransform(
    scrollY,
    [0, 20],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.06)']
  )

  return (
    <motion.header
      style={{ borderBottomColor: borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b bg-[rgba(13,27,46,0.96)] backdrop-blur"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <a href="#" className="block shrink-0" aria-label="Spin & Strategy">
          <Image
            src="/logo.png"
            alt="Spin & Strategy"
            width={420}
            height={124}
            priority
            className="h-20 w-auto object-contain md:h-24"
          />
        </a>

        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.75rem] font-medium uppercase tracking-[0.14em] text-white/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="border border-[rgba(82,194,230,0.6)] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:bg-ciel"
        >
          Nous contacter
        </a>
      </nav>
    </motion.header>
  )
}
