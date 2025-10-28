import About from "@/components/About"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="bg-white text-white">
      <Header />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full mt-24">
          <About />
        </div>
      </main>
      <Footer />
    </div>
  )
}
