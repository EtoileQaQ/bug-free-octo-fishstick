import type { ReactNode } from 'react'

interface SectionEyebrowProps {
  children: ReactNode
  className?: string
}

export function SectionEyebrow({ children, className = '' }: SectionEyebrowProps) {
  return (
    <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ciel ${className}`}>
      {children}
    </p>
  )
}
