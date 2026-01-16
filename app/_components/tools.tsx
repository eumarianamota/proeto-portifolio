import Image from "next/image"

const experiences = [
    {title: "Javascript", description:"Linguagem de programação", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    {title:"Typescript", description:"Linguagem de programação", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
    {title:"Python", description:"Linguagem de programação", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},

    {title:"Tailwind", description:"Framework de estilização", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
    {title:"Next", description:"Framework de desenvolvimento", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"},

    {title:"Git", description:"Versionamento de código", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
    {title:"Linux", description:"Sistema operacional", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},

    {title:"Figma", description:"Ferramenta de design", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},
]

export function Tools() {
    return (
        <section className="mt-10 overflow-hidden lg:w-150 xl:w-200">
            <h1>PRINCIPAIS <span className="text-gray">FERRAMENTAS</span></h1>

            <div className="flex flex-row justify-center flex-wrap gap-5 lg:gap-10 lg:justify-start">
                {experiences.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 w-50">
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={50}
                            height={50}
                            className=""
                        />

                        <div>
                            <h3>{item.title}</h3>
                            <p className="text-s text-gray-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}