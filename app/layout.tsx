import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Spin & Strategy | Rendre le pouvoir aux idées',
  description:
    "Cabinet de conseil alliant politique, influence, stratégie et sciences sociales au service du leadership de pensée.",
  metadataBase: new URL('https://spin-strategy.fr'),
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
