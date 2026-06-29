import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Approche } from '@/components/sections/Approche'
import { Contact } from '@/components/sections/Contact'
import { Equipe } from '@/components/sections/Equipe'
import { Ethique } from '@/components/sections/Ethique'
import { Hero } from '@/components/sections/Hero'
import { Offres } from '@/components/sections/Offres'
import { Publications } from '@/components/sections/Publications'
import { RetoursExperience } from '@/components/sections/RetoursExperience'
import { BackToTop } from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Approche />
        <Offres />
        <RetoursExperience />
        <Publications />
        <Equipe />
        <Ethique />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
