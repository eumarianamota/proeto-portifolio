export function Footer() {
    return (
        <section id="footer" className="mt-10 overflow-x-hidden lg:w-150 xl:w-200 mb-10">
            <h1>VAMOS <span className="text-gray">CONVERSAR</span></h1>

            <form className="px-2">
                <div className="flex flex-col xl:flex-row justify-start gap-5 xl:gap-10 mb-5 w-full">
                    <div className="flex flex-col justify-start gap-2">
                        <label className="text-white opacity-70" htmlFor="nome">Nome</label>
                        <input className="w-full xl:w-90 bg-gray py-2 px-2 rounded-md" type="text" name="name" id="name" placeholder="Seu nome" required/>
                    </div>

                    <div className="flex flex-col justify-start gap-2">
                        <label className="text-white opacity-70"  htmlFor="email">Email</label>
                        <input className="w-full xl:w-90 bg-gray py-2 px-2 rounded-md" type="email" name="email" id="email"  placeholder="Seu@gmail.com" required/> 
                    </div>
                </div>

                <div className="flex flex-col justify-start gap-2">
                    <label className="text-white opacity-70"  htmlFor="mensagem">Mensagem</label>
                    <textarea className=" w-full xl:w-190 h-30 bg-gray py-2 px-2 rounded-md" name="message" id="message" placeholder="Sua mensagem" required></textarea>
                </div>

                <button className="bg-green text-black rounded-xl w-full xl:w-190 py-2 px-2 mt-5" type="submit">ENVIAR MENSAGEN</button>
            </form>
        </section>
    )
}