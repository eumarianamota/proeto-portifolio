import { About } from "./_components/about"
import { Card } from "./_components/card"
import { Experience } from "./_components/experience"
import { Footer } from "./_components/footer"
import { Header } from "./_components/header"
import { Projects } from "./_components/projects"
import { Tools } from "./_components/tools"

export default function Home() {
  return (
    <section className="bg-black w-full h-screen px-10 flex flex-col items-center scroll-smooth">
      <header>
        <Header />
      </header>
      <main className="mt-10 flex flex-col lg:flex-row lg:mt-20">
        <section>
          < Card />
        </section>

        <section className="lg:ml-100">
          < About />
          < Projects />
          < Experience />
          < Tools />
          < Footer />
        </section>
      </main>
    </section>
  )
}
