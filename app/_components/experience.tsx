const experiences = [
    {title: "Trabalh aqui", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, molestias repellat vel corrupti perspiciatis eaque maiores voluptate minima amet facilis officiis, aspernatur tempora quo labore illo eos, tempore dolor repellendus?rem"},
    {title: "Trabalh aqui", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, molestias repellat vel corrupti perspiciatis eaque maiores voluptate minima amet facilis officiis, aspernatur tempora quo labore illo eos, tempore dolor repellendus?rem"},
    {title: "Trabalh aqui", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, molestias repellat vel corrupti perspiciatis eaque maiores voluptate minima amet facilis officiis, aspernatur tempora quo labore illo eos, tempore dolor repellendus?rem"},
]


export function Experience() {
    return (
        <section className="mt-10 overflow-x-hidden lg:w-150 xl:w-200">
            <h1>MINHAS <span className="text-gray">EXPERIÊNCIAS</span></h1>

            <div className="flex flex-col gap-8">
                {experiences.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title} </h3>
                        <p className="text-s text-gray-400 lg:text-xl"> {item.description} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}