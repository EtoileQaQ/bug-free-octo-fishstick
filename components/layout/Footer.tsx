import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-ink px-5 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <a href="#" className="block" aria-label="Spin & Strategy">
          <Image
            src="/logo.png"
            alt="Spin & Strategy"
            width={230}
            height={55}
            className="h-11 w-auto object-contain"
          />
        </a>

        <p className="text-xs text-white/45">© 2026 Spin & Strategy. Tous droits réservés.</p>

        <div className="flex items-center gap-5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/55">
          <a href="#" className="hover:text-white">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
