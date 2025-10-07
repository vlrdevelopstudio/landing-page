import Header from "@/components/Header";
import HomeBanner from "@/components/HomeBanner";
import Services from "@/components/Services";
import Projects from "@/components/Project";
import About from "@/components/About";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <HomeBanner />
        <Services />
        <Projects />
        <About />
        <FaqSection />
        <Footer />
        <main>{children}</main>
      </body>
    </html>
  );
}
