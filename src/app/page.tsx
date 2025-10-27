"use client"
import { useState, useEffect, useRef } from "react"
import Header from "@/components/Header"
import HomeBanner from "@/components/HomeBanner"
import Services from "@/components/Services"
import Projects from "@/components/Project"
import FaqSection from "@/components/FaqSection"
import Footer from "@/components/Footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = {
    HomeBanner: useRef(null),
    Services: useRef(null),
    Project: useRef(null),
    About: useRef(null),
  }

  useEffect(() => {
    const observerOptions = {
      root: null, // relative to viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% dari section harus terlihat
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set state ke id dari section yang terlihat
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Amati setiap section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    // Cleanup saat komponen di-unmount
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, []) // Hanya jalan sekali saat mount

  return (
    <html lang="en">
      <body className="bg-white text-white">
        <Header activeSection={activeSection} />
        <main>
          <section id="HomeBanner" ref={sectionRefs.HomeBanner}>
            <HomeBanner />
          </section>
          <section id="Services" ref={sectionRefs.Services}>
            <Services />
          </section>
          <section id="Project" ref={sectionRefs.Project}>
            <Projects limit={2} />
          </section>
        </main>
        <FaqSection />
        <Footer />
      </body>
    </html>
  )
}
