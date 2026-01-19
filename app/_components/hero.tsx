import { HomeIcon, ArchiveBoxIcon, BriefcaseIcon, WrenchIcon } from '@heroicons/react/24/outline'
import { RiInstagramLine, RiLinkedinLine, RiGithubLine, RiMailLine, RiWhatsappLine } from "@remixicon/react"

import Image from 'next/image'
import profile from "@/public/profile-icon.jpg"

import { About } from './about'
import { Projects } from './projects'
import { Experience } from './experience'
import { Tools } from './tools'
import { Footer } from './footer'
import { PhoneIcon } from '@heroicons/react/24/outline'


const navLinks = [
    {url: "#about", icon: HomeIcon, title: "Início"},
    {url: "#projects", icon: ArchiveBoxIcon, title: "Projetos"},
    {url: "#experience", icon: BriefcaseIcon, title: "Experiência"},
    {url: "#tools", icon: WrenchIcon, title: "Ferramentas"},
    {url: "#footer", icon: PhoneIcon, title: "Contato"},
]

const socialLinks = [
    {url: "https://www.instagram.com/eumariana.dev/", icon: RiInstagramLine},
    {url: "https://wa.me/5586999641994", icon: RiWhatsappLine},
    {url: "https://www.linkedin.com/in/eumarianamota/", icon: RiLinkedinLine},
    {url: "https://github.com/eumarianamota", icon: RiGithubLine},
    {url: "https://mailto:eumarianamota@gmail.com", icon: RiMailLine},
]


export function Hero() {
    return (
        <section className="bg-black w-full h-screen px-10 flex flex-col items-center">
            <header className='mt-5 flex justify-center lg:mt-10'>
                <nav className='flex justify-center items-center gap-6 py-4 px-4 bg-dark-gray w-fit md:w-75 md:h-15 rounded-xl'>
                    {navLinks.map((item, index) => (
                        <div className='group relative flex flex-col items-center w-max' key={index}>
                            <a href={item.url}>
                                <item.icon className='size-6 md:size-8 text-white hover:scale-115 transition-all duration-300 ease'/>
                            </a>

                            <span className="opacity-0 absolute text-xs mt-15 -translate-y-2 transition-all duration-300 group-hover:opacity-80 group-hover:translate-y-0 font-medium" >
                                {item.title}
                            </span>
                        </div>
                    ))}
                </nav>
            </header>

            <main className='mt-10 flex flex-col lg:flex-row lg:mt-20'>
                <section className='bg-white w-full rounded-2xl flex flex-col justify-center items-center px-8 py-5 lg:w-90 lg:py-10 lg:fixed'>
                    <Image 
                        src={profile}
                        alt="Profile picture"
                        width={300}
                        className='rounded-2xl shadow-2xl'
                    />
                    <h2 className='mt-4 text-3xl font-bold text-black lg:mt-8 lg:text-4xl'>Mariana Mota</h2>
                    <p className='mt-8 text-s text-center text-gray lg:mt-8 lg:text-lg'>Desenvolvedora em constante evolução, focada em transformar ideias em interfaces funcionais e elegantes.</p>
                    <div className='mt-8 flex justify-center gap-5'>
                        {socialLinks.map((item, index) => (
                            <a target='_blank' key={index} href={item.url}> <item.icon className='size-6 text-orange hover:scale-115 transition-all duration-300 ease' /> </a>
                        ))}
                    </div>
                </section>

                <section className='lg:ml-100'>
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
