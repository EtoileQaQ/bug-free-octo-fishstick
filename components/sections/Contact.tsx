'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const initialForm = {
  nom: '',
  organisation: '',
  email: '',
  objet: 'Leadership de pensée',
  message: ''
}

const contactDetails = [
  { label: 'Siège', value: 'Paris, France' },
  { label: 'Email', value: 'contact@spin-strategy.fr' },
  { label: 'Présence internationale', value: 'Paris · Bruxelles · Washington' }
]

export function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  function updateField(field: keyof typeof initialForm, value: string) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitState('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Contact request failed')
      }

      setSubmitState('success')
      setFormData(initialForm)
    } catch {
      setSubmitState('error')
    }
  }

  const fieldClass =
    'w-full border border-rule bg-white px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-[rgba(107,122,141,0.6)] focus:border-ciel'

  return (
    <section id="contact" className="bg-ciel-pale px-5 py-24 md:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <AnimatedSection>
          <SectionEyebrow>Contact</SectionEyebrow>
          <SectionTitle className="mt-5">
            Parlons de vos <em className="text-ciel-dark">idées</em>
          </SectionTitle>
          <p className="mt-7 max-w-md text-base leading-8 text-grey">
            Une mission commence par une conversation confidentielle sur vos enjeux, vos contraintes
            et les rapports de force qui entourent votre prise de parole.
          </p>

          <div className="mt-12 grid gap-7">
            {contactDetails.map((detail) => (
              <div key={detail.label}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ciel">
                  {detail.label}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{detail.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="bg-white p-6 md:p-10">
          {submitState === 'success' ? (
            <div className="flex min-h-[28rem] flex-col justify-center">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ciel">
                Message envoyé
              </p>
              <h3 className="mt-5 font-display text-4xl font-semibold leading-tight">
                Merci pour votre message.
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-7 text-grey">
                Notre équipe reviendra vers vous rapidement pour organiser un premier échange.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-grey">
                  Nom
                  <input
                    required
                    value={formData.nom}
                    onChange={(event) => updateField('nom', event.target.value)}
                    className={fieldClass}
                    placeholder="Votre nom"
                  />
                </label>
                <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-grey">
                  Organisation
                  <input
                    value={formData.organisation}
                    onChange={(event) => updateField('organisation', event.target.value)}
                    className={fieldClass}
                    placeholder="Entreprise ou institution"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-grey">
                Email
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className={fieldClass}
                  placeholder="vous@organisation.fr"
                />
              </label>

              <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-grey">
                Objet
                <select
                  value={formData.objet}
                  onChange={(event) => updateField('objet', event.target.value)}
                  className={fieldClass}
                >
                  <option>Leadership de pensée</option>
                  <option>Intelligence politique</option>
                  <option>Stratégie d&apos;influence</option>
                  <option>Demande presse</option>
                </select>
              </label>

              <label className="grid gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-grey">
                Message
                <textarea
                  required
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  className={`${fieldClass} min-h-44 resize-y`}
                  placeholder="Présentez brièvement votre sujet."
                />
              </label>

              {submitState === 'error' && (
                <p className="text-sm text-ciel-dark">
                  Une erreur est survenue. Merci de réessayer dans quelques instants.
                </p>
              )}

              <motion.button
                type="submit"
                disabled={submitState === 'loading'}
                whileHover={submitState === 'loading' ? undefined : { backgroundColor: 'var(--ciel-dark)' }}
                className="mt-3 bg-ink px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitState === 'loading' ? 'Envoi en cours...' : 'Envoyer →'}
              </motion.button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
