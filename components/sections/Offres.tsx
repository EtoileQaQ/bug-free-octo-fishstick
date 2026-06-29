'use client'

import { motion } from 'framer-motion'
import offres from '@/data/offres.json'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'

type Offre = {
  id: string
  titre: string
  items: string[]
}

const offresData = offres as Offre[]

export function Offres() {
  return (
    <section id="offres" className="bg-ciel-pale px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionEyebrow>Ce que nous proposons</SectionEyebrow>
            <SectionTitle className="mt-5">
              Des expertises pour rendre les <em className="text-ciel-dark">idées opérantes</em>
            </SectionTitle>
          </div>

          <p className="max-w-2xl text-base leading-8 text-grey md:text-lg">
            Spin & Strategy intervient de la conception stratégique à l'action d'influence, en combinant
            analyse politique, gouvernance, prospective et maîtrise du risque réputationnel.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="mt-16 grid gap-px bg-rule md:grid-cols-2 lg:grid-cols-3"
        >
          {offresData.map((offre) => (
            <motion.article
              key={offre.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ciel-dark">
                {offre.titre}
              </p>

              <ul className="mt-7 grid gap-4">
                {offre.items.map((item) => (
                  <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6 text-grey">
                    <span aria-hidden="true" className="mt-2 block h-px w-4 bg-ciel" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
