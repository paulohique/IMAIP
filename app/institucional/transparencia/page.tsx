export default function TransparenciaPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Transparência</h1>
          <p className="text-xl md:text-2xl font-normal">Compromisso com a ética e a responsabilidade.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Princípios de Transparência</h2>
          <p className="text-lg text-gray-700 mb-6">
            No Hospital Policlínica, a transparência é um pilar fundamental da nossa gestão. Estamos comprometidos em
            fornecer informações claras e acessíveis sobre nossas operações, finanças e governança, garantindo a
            confiança de nossos pacientes, colaboradores e da comunidade.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Acreditamos que a prestação de contas é essencial para a construção de um relacionamento sólido e duradouro.
            Por isso, disponibilizamos aqui dados relevantes sobre nossa atuação, sempre em conformidade com as melhores
            práticas e regulamentações vigentes.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Documentos e Relatórios</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Relatórios Anuais de Atividades</li>
            <li>Demonstrativos Financeiros</li>
            <li>Certificações e Acreditações</li>
            <li>Políticas de Privacidade e Ética</li>
            <li>Informações sobre Convênios e Parcerias</li>
          </ul>
          <p className="text-lg text-gray-700 mt-6">
            Para mais informações ou dúvidas, entre em contato conosco através dos nossos canais de atendimento.
          </p>
        </div>
      </div>
    </>
  )
}
