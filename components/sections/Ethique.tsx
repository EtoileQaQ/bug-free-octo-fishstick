'use client'

import { motion } from 'framer-motion'
import valeurs from '@/data/valeurs.json'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function Ethique() {
  return (
    <section id="ethique" className="bg-ink px-5 py-24 text-white md:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionEyebrow>Éthique</SectionEyebrow>
          <SectionTitle className="mt-5 max-w-3xl text-white">
            Une pratique exigeante de <em className="text-ciel">l'influence</em>
          </SectionTitle>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection delay={0.1}>
            <p className="max-w-xl text-lg font-light leading-9 text-white/55">
              Notre conseil repose sur une conviction simple : l'influence n'a de valeur que si elle
              sert des positions assumées, une méthode robuste et une relation de confiance inscrite
              dans la durée.
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
                  staggerChildren: 0.12
                }
              }
            }}
            className="grid gap-8"
          >
            {valeurs.map((valeur) => (
              <motion.article
                key={valeur.label}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="border-l-2 border-ciel pl-6"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ciel">
                  {valeur.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/50">{valeur.texte}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
