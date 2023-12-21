import Navbar from "@/components/navbar/Navbar"
import Title from "@/components/title/Title"
import Experiences from "@/components/experiences/Experiences"
import Projects from "@/components/projects/Projects"
import Footer from "@/components/footer/Footer"
import Contact from "@/components/contact/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-96 md:w-[35rem] px-5">
        <Title />
        <Experiences />
        {/* <Projects /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  )
};