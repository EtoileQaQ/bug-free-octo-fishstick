'use client'

import { motion } from 'framer-motion'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const expertises = [
  {
    titre: 'Stratégie d’influence',
    texte:
      'Cartographier les rapports de force, structurer les coalitions utiles et installer une présence durable dans les débats décisifs.'
  },
  {
    titre: 'Intelligence politique',
    texte:
      'Décoder les institutions, les calendriers et les signaux faibles pour éclairer les décisions des dirigeants et des organisations.'
  },
  {
    titre: 'Leadership de pensée',
    texte:
      'Transformer les convictions en positions publiques crédibles, différenciantes et capables de déplacer les cadres du débat.'
  }
]

export function Approche() {
  return (
    <section id="approche" className="bg-white px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionEyebrow>Notre approche</SectionEyebrow>
            <SectionTitle className="mt-5">
              Conseil, influence et <em className="text-ciel-dark">sciences sociales</em>
            </SectionTitle>
          </div>

          <p className="max-w-2xl text-base leading-8 text-grey md:text-lg">
            Spin & Strategy accompagne les organisations qui veulent faire exister leurs idées dans
            l'espace public, au croisement de la stratégie, du politique, de l'influence et de la recherche.
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
          className="mt-16 grid gap-px bg-rule lg:grid-cols-3"
        >
          {expertises.map((expertise) => (
            <motion.article
              key={expertise.titre}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white px-[2.2rem] py-10 before:absolute before:left-[2.2rem] before:top-8 before:h-0.5 before:w-6 before:bg-ciel"
            >
              <h3 className="mt-8 font-display text-3xl font-semibold leading-tight">{expertise.titre}</h3>
              <p className="mt-5 text-sm leading-7 text-grey">{expertise.texte}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
