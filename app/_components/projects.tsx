import { RiArrowRightUpLine } from "@remixicon/react"
import Image from "next/image"
import projeto1 from "@/public/projeto-1.png"
import projeto2 from "@/public/projeto-2.png"
import projeto3 from "@/public/projeto-3.png"


const projects = [
    {
        image: projeto1,
        title: "Mentis - Landing Page",
        description: "Uma landing page criada para promover um coletivo de saúde mental, destacando sua abordagem, serviços e equipe responsável.",
        url: "https://mentis-iota.vercel.app/"
    },
    {
        image: projeto2,
        title: "PetCare - Landing Page",
        description: "Uma landing page desenvolvida para promover um petshop local e converter visitantes em clientes.",
        url: "https://petshop-page.vercel.app/"
    },
    {
        image: projeto3,
        title: "Terra Azul - Landing Page",
        description: "Uma landing page projetada para uma empresa especializada em regularização fundiária.",
        url: "https://terra-azul.vercel.app/"
    },
]

export function Projects() {
    return (
        <section id="projects" className="mt-10 overflow-x-hidden lg:w-150 xl:w-200">
            <h1>PROJETOS<span className="text-gray"> RECENTES</span></h1>

            <div className="flex flex-col gap-5">
                {projects.map((item, index) => (
                        <a key={index} target="_blank" href={item.url} className="flex gap-5 py-2 px-2 rounded-2xl items-center hover:scale-98 hover:brightness-125 transition transform duration-300">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl w-25 lg:w-30"
                            />

                            <div className="w-full">
                                < RiArrowRightUpLine className="size-5 text-orange text-right ml-auto mb-auto"/>
                                <h3>{item.title}</h3>
                                <p className="text-s hidden sm:flex text-gray-400 mt-2 lg:text-xl">{item.description}</p>   
                            </div>
                        </a>
                ))}
            </div>
        </section>
    )
}