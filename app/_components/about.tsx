import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { ArrowRightCircle } from "lucide-react"

export function About() {
    return (
        <section id="about" className="mt-10 overflow-hidden lg:w-150 xl:w-200 lg:mt-0">
            <div className="text-center lg:text-start lg:w-150 xl:w-180">
                <h1>FRONT-END <span className="text-gray">DEVELOPER</span></h1>
                <p className="text-gray-400 mt-5 lg:text-lg">Sou desenvolvedora Frontend e gosto de criar interfaces que sejam bonitas e, acima de tudo, funcionais, usando tecnologias como Next.js e Tailwind CSS. Além de construir projetos para a web, tenho mergulhado nos estudos de Dados porque acredito que entender os números ajuda a construir experiências melhores para o usuário.

                <br/> <br/>Estou sempre em busca de aprendizado e me sinto motivada por projetos onde eu possa unir código, design e uma boa lógica de programação.</p>
            </div>

            <div className="mt-10 flex flex-col gap-5 md:flex-row lg:flex-col xl:flex-row">
                <div className="bg-orange rounded-xl px-5 py-5 hover:scale-98 hover:brightness-90 transition transform duration-300">
                    < BriefcaseIcon className="size-8 text-white"/>
                    <h3 className="mt-5 mb-5 text-2xl font-bold">CONHEÇA MEUS PROJETOS FRONT-END</h3>
                    < ArrowRightCircle className="size-8 text-white text-right ml-auto"/>
                </div>

                <div className="bg-green rounded-xl px-5 py-5 hover:scale-98 hover:brightness-90 transition transform duration-300">
                    <a target="_blank" href="https://github.com/eumarianamota/data-science-studies">
                        < BriefcaseIcon className="size-8 text-black"/>
                        <h3 className="mt-5 mb-5 text-2xl font-bold text-black">UM POUCO SOBRE MEUS ESTUDOS EM DADOS</h3>
                        < ArrowRightCircle className="size-8 text-black text-right ml-auto"/>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}