import project from "@/public/project.jpg"
import { RiArrowRightUpLine } from "@remixicon/react"
import Image from "next/image"

const projects = [
    {
        image: project,
        title: "Projeto 1",
        description: "Descrição do projeto aqui"
    },
    {
        image: project,
        title: "Projeto 2",
        description: "Descrição do projeto aqui"
    },
    {
        image: project,
        title: "Projeto 3",
        description: "Descrição do projeto aqui"
    },
    {
        image: project,
        title: "Projeto 4",
        description: "Descrição do projeto aqui"
    },
]

export function Projects() {
    return (
        <section className="mt-10 overflow-x-hidden lg:w-150 xl:w-200">
            <h1>PROJETOS<span className="text-gray"> RECENTES</span></h1>

            <div className="flex flex-col gap-5">
                {projects.map((item, index) => (
                    <div key={index} className="flex gap-5 py-2 px-2 rounded-2xl">
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="rounded-xl w-25 lg:w-30"
                        />

                        <div className="w-full">
                            < RiArrowRightUpLine className="hidden sm:flex size-5 text-orange text-right ml-auto mb-auto"/>
                            <h3>{item.title}</h3>
                            <p className="text-s text-gray-400 lg:text-xl">{item.description}</p>   
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}