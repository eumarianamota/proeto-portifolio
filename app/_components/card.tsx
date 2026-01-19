import Image from "next/image"
import profile from "@/public/profile-icon.jpg"
import { socialLinks } from "@/constants/socialLinks"

export function Card() {
    return (
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
    )
}