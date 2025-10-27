import Project from "@/components/Project"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ProjectsPage() {
  return (
    <div className="bg-white text-white">
      <Header activeSection="Project" />
      <main className="flex min-h-screen flex-col items-center">
        <div className="w-full mt-24">
          <Project showViewAll={false} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
