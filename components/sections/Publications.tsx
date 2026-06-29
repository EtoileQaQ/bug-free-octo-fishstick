'use client'

import { motion } from 'framer-motion'
import publications from '@/data/publications.json'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Publications() {
  return (
    <section id="analyses" className="bg-ciel-pale px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Analyses</SectionEyebrow>
            <SectionTitle className="mt-5">
              Nos dernières <em className="text-ciel-dark">publications</em>
            </SectionTitle>
          </div>

          <a
            href="#"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ciel-dark hover:text-ink"
          >
            Toutes nos analyses →
          </a>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {publications.map((publication) => (
            <motion.a
              key={publication.id}
              href={publication.lien}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ borderTopColor: 'var(--ciel)', y: -4 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-[26rem] flex-col border-t-2 border-transparent bg-white p-8"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ciel-dark">
                {publication.tag}
              </p>
              <h3 className="mt-8 font-display text-3xl font-semibold leading-tight">{publication.titre}</h3>
              <p className="mt-5 flex-1 text-sm leading-7 text-grey">{publication.extrait}</p>
              <p className="mt-8 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-grey">
                {publication.date}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
