import Image from "next/image"
import { tools } from "@/constants/tools"


export function Tools() {
    return (
        <section id="tools" className="pt-10 overflow-hidden lg:w-150 xl:w-200">
            <h1 data-aos="fade-down-right">PRINCIPAIS <span className="text-gray">FERRAMENTAS</span></h1>

            <div className="flex flex-row justify-center flex-wrap gap-5 lg:gap-10 lg:justify-start">
                {tools.map((item, index) => (
                    <div data-aos="zoom-in" key={index} className="flex items-center gap-5 w-50 cursor-default hover:scale-105 transition transform duration-300">
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={50}
                            height={50}
                        />

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
