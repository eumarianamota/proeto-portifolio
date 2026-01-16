import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { ArrowRightCircle } from "lucide-react"

// const options = [
//     {icon: BriefcaseIcon, title: "DYNAMIC, ANIMATION, MOTION DESIGN", icon2: ArrowRightCircle},
//     {icon: BriefcaseIcon, title: "DYNAMIC, ANIMATION, MOTION DESIGN", icon2: ArrowRightCircle},
// ]

export function About() {
    return (
        <section className="mt-10 overflow-x-hidden lg:w-150 xl:w-200 lg:mt-0">
            <div className="text-center lg:text-start lg:max-w-150">
                <h1>FRONT-END <span className="text-gray">DEVELOPER</span></h1>
                <p className="text-gray-400 mt-5 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel reprehenderit sunt ducimus excepturi atque, eius numquam officia tenetur inventore.</p>
            </div>

            <div className="mt-10 flex flex-col gap-5 md:flex-row lg:flex-col xl:flex-row">
                <div className="bg-orange rounded-xl px-5 py-5">
                    < BriefcaseIcon className="size-8 text-white"/>
                    <h3 className="mt-5 mb-5 text-2xl font-bold">DYNAMIC, ANIMATION, MOTION DESIGN</h3>
                    < ArrowRightCircle className="size-8 text-white text-right ml-auto"/>
                </div>

                <div className="bg-green rounded-xl px-5 py-5">
                    < BriefcaseIcon className="size-8 text-black"/>
                    <h3 className="mt-5 mb-5 text-2xl font-bold text-black">DYNAMIC, ANIMATION, MOTION DESIGN</h3>
                    < ArrowRightCircle className="size-8 text-black text-right ml-auto"/>
                </div>
            </div>
        </section>
    )
}