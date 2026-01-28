import { RiArrowRightUpLine } from "@remixicon/react"
import Image from "next/image"
import { projects } from "@/constants/projects"

export function Projects() {
    return (
        <section id="projects" className="pt-10 overflow-hidden lg:w-150 xl:w-200">
            <h1 data-aos="fade-down-right">PROJETOS<span className="text-gray"> RECENTES</span></h1>

            <div className="flex flex-col gap-5">
                {projects.map((item, index) => (
                        <a data-aos="zoom-in" key={index} target="_blank" href={item.url} className="flex gap-5 py-2 px-2 rounded-2xl items-center hover:scale-98 transition transform duration-300">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl w-25 lg:w-30"
                            />

                            <div className="w-full">
                                < RiArrowRightUpLine className="size-5 text-orange text-right ml-auto mb-auto"/>
                                <h3>{item.title}</h3>
                                <p className="hidden sm:flex">{item.description}</p>   
                            </div>
                        </a>
                ))}
            </div>
        </section>
    )
}
