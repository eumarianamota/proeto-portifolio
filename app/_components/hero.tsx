import { HomeIcon, ArchiveBoxIcon, BriefcaseIcon, WrenchIcon } from '@heroicons/react/24/outline'
import { RiInstagramLine, RiLinkedinLine, RiGithubLine, RiMailLine } from "@remixicon/react"

import Image from 'next/image'
import profile from "@/public/profile-icon.jpg"

import { About } from './about'
import { Projects } from './projects'
import { Experience } from './experience'
import { Tools } from './tools'
import { Footer } from './footer'

const navLinks = [
    {url: "#", icon: HomeIcon, title: "Início"},
    {url: "#", icon: ArchiveBoxIcon, title: "Projetos"},
    {url: "#", icon: BriefcaseIcon, title: "Experiência"},
    {url: "#", icon: WrenchIcon, title: "Ferramentas"},
]

const socialLinks = [
    {url: "", icon: RiInstagramLine},
    {url: "", icon: RiLinkedinLine},
    {url: "", icon: RiGithubLine},
    {url: "", icon: RiMailLine},
]


export function Hero() {
    return (
        <section className="bg-black w-full h-screen px-10 flex flex-col items-center">
            <header className='mt-5 flex justify-center lg:mt-10'>
                <nav className='flex justify-center gap-6 py-2 bg-dark-gray h-10 w-full md:w-60 rounded-xl'>
                    {navLinks.map((item, index) => (
                        <div className='group relative flex flex-col items-center w-max' key={index}>
                            <a href={item.url}>
                                <item.icon className='size-8 text-white hover:scale-115 transition-all duration-300 ease'/>
                            </a>

                            <span className="opacity-0 absolute text-xs mt-10 -translate-y-2 transition-all duration-300 group-hover:opacity-80 group-hover:translate-y-0 font-medium" >
                                {item.title}
                            </span>
                        </div>
                    ))}
                </nav>
            </header>

            <main className='mt-10 flex flex-col lg:flex-row lg:mt-20'>
                <section className='bg-white w-full rounded-2xl flex flex-col justify-center items-center px-8 py-5 lg:w-90 lg:h-150 lg:py-2 lg:fixed'>
                    <Image 
                        src={profile}
                        alt="Profile picture"
                        width={300}
                        className='rounded-2xl shadow-2xl'
                    />
                    <h2 className='mt-4 text-3xl font-bold text-black lg:mt-8 lg:text-4xl'>Mariana Mota</h2>
                    <p className='mt-8 text-s text-center text-gray lg:mt-8 lg:text-lg'>A Software Engineer who has developed countless innovative solutions.</p>
                    <div className='mt-8 flex justify-center gap-5 lg:mt-8'>
                        {socialLinks.map((item, index) => (
                            <a key={index} href={item.url}> <item.icon className='size-5 text-orange hover:scale-115 transition-all duration-300 ease' /> </a>
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
