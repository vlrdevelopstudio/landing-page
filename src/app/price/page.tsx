import Services from "@/components/Services"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  return (
    <div className="bg-white text-white">
      <Header activeSection="About" />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full mt-24">
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  )
}
