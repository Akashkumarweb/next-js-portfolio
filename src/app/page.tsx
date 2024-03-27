import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import SkillCarousel from '@/app/components/SkillCarousel'
import Work from '@/app/components/Work'
import Header from '@/app/components/Header/Header'
import Portfolio from '@/app/components/Portfolio'
import Skills from '@/app/components/Skills/Skills'
import Testimonials from '@/app/components/Testimonials'
import Contact from './components/Contact'
import './globals.css'

export default function Home() {

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillCarousel />
        <Work />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}


