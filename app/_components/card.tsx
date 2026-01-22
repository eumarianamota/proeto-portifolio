import Image from "next/image"
import profile from "@/public/profile-icon.jpg"
import { socialLinks } from "@/constants/socialLinks"

export function Card() {
    return (
        <section className='bg-white w-full rounded-2xl flex flex-col gap-10 justify-center items-center px-5 py-5 lg:w-90 lg:py-10 lg:fixed'>
            
            <Image 
                src={profile}
                alt="Profile picture"
                width={300}
                className='rounded-2xl shadow-2xl'
            />
            
            <h2>Mariana Mota</h2>

            <p className='text-black text-center'>Desenvolvedora em constante evolução, focada em transformar ideias em interfaces funcionais e elegantes.</p>

            <div className='flex justify-center gap-5'>
                {socialLinks.map((item, index) => (
                    <a target='_blank' key={index} href={item.url}> <item.icon className='size-6 text-orange hover:scale-115 transition-all duration-300 ease' /> </a>
                ))}
            </div>
        </section>
    )
}
