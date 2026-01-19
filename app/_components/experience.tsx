const experiences = [
    {title: "Estágio em Suporte Técnico", description: "Resolução de problemas técnicos e suporte ao usuário, unindo teoria acadêmica e prática para reportar falhas e garantir a melhor experiência de atendimento."},
    {title: "Monitora do Pet Saúde", description: "Atuo no PET Saúde Digital com foco na coleta e organização de dados para otimização do SUS. Adquirindo experiência prática em converter dados reais em insights para a saúde, trabalhando em conjunto com profissionais de diversas áreas."},
    {title: "Organização do DevFest", description: "Atuei como uma das organizadoras do DevFest Piauí, promovendo a conexão entre desenvolvedores e auxiliando na gestão de um evento focado em troca de conhecimento e fortalecimento da comunidade regional."},
    {title: "Estágio em Inteligência Artificial", description: "Estagiária em IA e Automação com foco em implementação de workflows no n8n e estudo aplicado de LLMs para a otimização de processos e produtividade."},
]

export function Experience() {
    return (
        <section id="experience" className="mt-10 overflow-x-hidden lg:w-150 xl:w-200">
            <h1>MINHAS <span className="text-gray">EXPERIÊNCIAS</span></h1>

            <div className="flex flex-col gap-8">
                {experiences.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title} </h3>
                        <p className="text-s text-gray-400 lg:text-xl text-justify"> {item.description} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}