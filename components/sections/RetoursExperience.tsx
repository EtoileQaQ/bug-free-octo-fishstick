'use client'

import { motion } from 'framer-motion'
import retoursExperience from '@/data/retours-experience.json'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'

type RetourExperience = {
  id: string
  label: string
  titre: string
  texte: string
}

const retours = retoursExperience as RetourExperience[]

export function RetoursExperience() {
  return (
    <section id="experience" className="bg-ink px-5 py-24 text-white md:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionEyebrow>Retours d&apos;expérience</SectionEyebrow>
            <SectionTitle className="mt-5 text-white">
              Des missions au service d&apos;un <em className="text-ciel">impact mesurable</em>
            </SectionTitle>
          </div>

          <p className="max-w-2xl text-base font-light leading-8 text-white/55 md:text-lg">
            Les interventions du cabinet se construisent dans la discrétion, avec des livrables utiles
            aux décisions de direction générale et aux séquences d&apos;influence à fort enjeu.
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
                staggerChildren: 0.15
              }
            }
          }}
          className="mt-16 grid gap-px bg-[rgba(255,255,255,0.08)] lg:grid-cols-3"
        >
          {retours.map((retour) => (
            <motion.article
              key={retour.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink p-8"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ciel">
                {retour.label}
              </p>
              <h3 className="mt-8 font-display text-3xl font-semibold leading-tight text-white">
                {retour.titre}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/50">{retour.texte}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
