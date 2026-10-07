'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar'
import Hero3D from '@/components/Hero3D'
import About from '@/components/About'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Navbar />
      <Hero3D />
      <About />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}