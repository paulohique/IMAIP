export default function HistoriaPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Nossa História</h1>
          <p className="text-xl md:text-2xl font-normal">Conheça a trajetória do Hospital Policlínica.</p>
        </div>
      </div>

      {/* History Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Uma Jornada de Cuidado e Inovação</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="font-bold">1941</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fundação</h3>
                  <p className="text-gray-700">
                    Fundação do Instituto Maternidade Assistência à Infância e Policlínica de Barbacena (IMAIP) como uma
                    instituição filantrópica para atender a população local.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="font-bold">1960</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expansão</h3>
                  <p className="text-gray-700">
                    Ampliação das instalações e aumento do número de leitos para atender a crescente demanda da região.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="font-bold">1985</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modernização</h3>
                  <p className="text-gray-700">
                    Implementação de novas tecnologias e equipamentos médicos de última geração.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="font-bold">2010</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Renovação</h3>
                  <p className="text-gray-700">
                    Reforma completa das instalações e ampliação dos serviços oferecidos à comunidade.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="font-bold">Hoje</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Referência Regional</h3>
                  <p className="text-gray-700">
                    O Hospital Policlínica se consolida como referência em qualidade de atendimento médico em Barbacena
                    e região, mantendo seu compromisso com a excelência e humanização.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
