'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import equipe from '@/data/equipe.json'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

type Membre = {
  id: string
  nom: string
  role: string
  bio: string
  photo: string | null
}

const membres = equipe as Membre[]

function PersonPlaceholder() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 160"
      className="absolute left-1/2 top-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 text-ciel opacity-25"
      fill="none"
    >
      <circle cx="60" cy="48" r="28" stroke="currentColor" strokeWidth="6" />
      <path d="M22 137c6-32 21-48 38-48s32 16 38 48" stroke="currentColor" strokeWidth="6" />
    </svg>
  )
}

export function Equipe() {
  return (
    <section id="equipe" className="bg-white px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionEyebrow>Équipe</SectionEyebrow>
          <SectionTitle className="mt-5 max-w-3xl">
            Une équipe au croisement du <em className="text-ciel-dark">politique</em> et de la stratégie
          </SectionTitle>
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
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {membres.map((membre) => (
            <motion.article
              key={membre.id}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ciel-pale">
                {membre.photo ? (
                  <Image
                    src={membre.photo}
                    alt={`Portrait de ${membre.nom}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <PersonPlaceholder />
                )}
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">{membre.nom}</h3>
              <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-wide text-ciel-dark">
                {membre.role}
              </p>
              <p className="mt-4 text-[0.81rem] leading-6 text-grey">{membre.bio}</p>
            </motion.article>
          ))}

          <motion.article
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-full flex-col justify-between bg-ink p-8 text-white"
          >
            <p className="font-display text-4xl font-normal italic leading-tight text-white/15">
              Rejoignez l&apos;aventure
            </p>
            <div className="mt-16">
              <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-ciel">
                Analyste politique – Stage
              </p>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Nous accueillons les profils curieux, rigoureux et attentifs aux idées qui transforment le débat public.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
