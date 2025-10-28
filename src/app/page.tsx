"use client"
// import { useState, useEffect, useRef } from "react"
import Header from "@/components/Header"
import HomeBanner from "@/components/HomeBanner"
import Services from "@/components/Services"
import Projects from "@/components/Project"
import FaqSection from "@/components/FaqSection"
import Footer from "@/components/Footer"

export default function Home() {
  

  return (
    <html lang="en">
      <body className="bg-white text-white">
        <Header />
        <main>
          <section id="HomeBanner">
            <HomeBanner />
          </section>
          <section id="Services">
            <Services />
          </section>
          <section id="Project">
            <Projects limit={2} />
          </section>
        </main>
        <FaqSection />
        <Footer />
      </body>
    </html>
  )
}
