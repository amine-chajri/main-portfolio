import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimateIn from './components/AnimateIn'

export default function App() {
  return (
    <>
      {/* Decorative background */}
      <div className="grid-bg" />
      <div className="glow-orb glow-orb--green" />
      <div className="glow-orb glow-orb--purple" />

      <Navbar />

      <main>
        <Hero />

        <AnimateIn>
          <About />
        </AnimateIn>

        <AnimateIn delay={100}>
          <Skills />
        </AnimateIn>

        <AnimateIn delay={100}>
          <Projects />
        </AnimateIn>

        <AnimateIn delay={100}>
          <Experience />
        </AnimateIn>

        <AnimateIn delay={100}>
          <Contact />
        </AnimateIn>
      </main>

      <Footer />
    </>
  )
}
