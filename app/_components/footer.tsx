import { socialLinks } from "@/constants/socialLinks"

export function Footer() {
    return (
        <section id="footer" className="pt-10 pb-20 overflow-hidden lg:w-150 xl:w-200">
            <h1 data-aos="fade-down-right">CONTATO</h1>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center lg:justify-start gap-5 sm:gap-20">
                <div data-aos="zoom-in" className="max-w-100">
                    <h3>Sobre mim</h3>
                    <p className="text-xs text-justify">Desenvolvedora em constante evolução, focada em transformar ideias em interfaces funcionais e elegantes.</p>
                </div>

                <div data-aos="zoom-in">
                    <h3>Social</h3>
                    <div className="flex gap-5 mt-3">
                        {socialLinks.map((items, index) => (
                            <a  key={index} target="_blank" href={items.url}> <items.icon className="size-6 opacity-80"/></a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
