import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        ciel: 'var(--ciel)',
        'ciel-dark': 'var(--ciel-dark)',
        'ciel-pale': 'var(--ciel-pale)',
        grey: 'var(--grey)',
        rule: 'var(--rule)'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      }
    }
  },
  plugins: []
}

export default config
