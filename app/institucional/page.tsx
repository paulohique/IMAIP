"use client" // This page needs to be a Client Component for the animation hook

import Image from "next/image"
import { useAnimateNumber } from "@/hooks/useAnimateNumber" // Import the new hook

export default function InstitucionalPage() {
  const { currentNumber: yearsOfHistory, ref: yearsRef } = useAnimateNumber({ targetNumber: 83 })
  const { currentNumber: departments, ref: departmentsRef } = useAnimateNumber({ targetNumber: 12 })
  const { currentNumber: specialties, ref: specialtiesRef } = useAnimateNumber({ targetNumber: 16 })

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Institucional</h1>
          <p className="text-xl md:text-2xl font-normal">Há 82 anos servindo Barbacena e Região.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Receba as boas-vindas ao IMAIP</h2>
            <p className="text-lg text-gray-700 mb-6">
              O Instituto Maternidade Assistência à Infância e Policlínica de Barbacena (IMAIP) é uma instituição
              filantrópica que há mais de oito décadas presta servios de saúde à população de Barbacena e região.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Fundado em 1941, o Hospital Policlínica tem como missão oferecer atendimento médico de qualidade, com
              ética, respeito e humanização, contribuindo para a melhoria da saúde e qualidade de vida da população.
            </p>
            <p className="text-lg text-gray-700">
              Nossa visão é ser referência em qualidade de prática médica em Barbacena e região, mantendo uma premissa:
              inovar e crescer, sempre com excelência.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/institutional.png"
              alt="Equipe médica do Hospital Policlínica"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div ref={yearsRef} className="text-5xl font-bold text-teal-600 mb-2">
              {yearsOfHistory}
            </div>
            <div className="text-xl text-gray-600">anos de história</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div ref={departmentsRef} className="text-5xl font-bold text-teal-600 mb-2">
              {departments}
            </div>
            <div className="text-xl text-gray-600">departamentos</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div ref={specialtiesRef} className="text-5xl font-bold text-teal-600 mb-2">
              {specialties}
            </div>
            <div className="text-xl text-gray-600">especialidades</div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Missão</h3>
              <p className="text-gray-700">
                Oferecer atendimento médico de qualidade, com ética, respeito e humanização, contribuindo para a
                melhoria da saúde e qualidade de vida da população.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visão</h3>
              <p className="text-gray-700">
                Ser referência em qualidade de prática médica em Barbacena e região, mantendo uma premissa: inovar e
                crescer, sempre com excelência.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <p className="text-gray-700">
                Ética, respeito, humanização, compromisso, qualidade, inovação e responsabilidade social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
