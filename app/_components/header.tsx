import { navLinks } from "@/constants/navLinks"

export function Header() {
    return (
        <header className='mt-5 flex justify-center lg:mt-10'>
            <nav className='flex justify-center items-center gap-6 py-4 px-4 bg-dark-gray w-fit md:w-75 md:h-15 rounded-xl'>
                {navLinks.map((item, index) => (
                    <div className='group relative flex flex-col items-center w-max' key={index}>
                        <a href={item.url}>
                            <item.icon className='size-6 md:size-8 text-white hover:scale-115 transition-all duration-300 ease'/>
                        </a>
                        <span className="opacity-0 absolute text-xs mt-15 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 font-light font-nunito" >
                            {item.title}
                        </span>
                    </div>
                ))}
            </nav>
        </header>
    )
}
