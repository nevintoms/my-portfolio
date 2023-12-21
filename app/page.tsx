import Navbar from "@/components/navbar/Navbar"
import Title from "@/components/title/Title"
import Experiences from "@/components/experiences/Experiences"
import Projects from "@/components/projects/Projects"
import Footer from "@/components/footer/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Title />
      <Experiences />
      <Projects />
      <Footer />
    </main>
  )
};