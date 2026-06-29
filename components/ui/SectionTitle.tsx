import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`font-display text-[clamp(2.4rem,4vw,4rem)] font-normal italic leading-[0.95] ${className}`}>
      {children}
    </h2>
  )
}
