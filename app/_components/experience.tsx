import { experiences } from "@/constants/experiences"

export function Experience() {
    return (
        <section id="experience" className="mt-10 overflow-x-hidden lg:w-150 xl:w-200">
            <h1>MINHAS <span className="text-gray">EXPERIÊNCIAS</span></h1>

            <div className="flex flex-col gap-8">
                {experiences.map((item, index) => (
                    <div className="cursor-default" key={index}>
                        <h3>{item.title} </h3>
                        <p> {item.description} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
