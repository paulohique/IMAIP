"use client"

import type React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect, useRef } from "react"

// AnimatedNumber component
interface AnimatedNumberProps {
  targetValue: number
  duration?: number
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetValue, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const start = performance.now()
            const animate = (currentTime: number) => {
              const elapsed = currentTime - start
              const progress = Math.min(elapsed / duration, 1)
              setCurrentValue(Math.floor(progress * targetValue))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            requestAnimationFrame(animate)
            observer.disconnect() // Stop observing once animated
          }
        })
      },
      { threshold: 0.5 }, // Trigger when 50% of the element is visible
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [targetValue, duration])

  return <div ref={ref}>{currentValue}</div>
}

export default function InstitucionalPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 font-serif">Institucional</h1>
          <p className="text-xl font-light">Há 82 anos servindo Barbacena e Região.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Fundada em 1942, a Policlínica Barbacena tem sido um pilar da saúde na região, dedicando-se a oferecer
              atendimento médico de excelência e humanizado. Ao longo das décadas, crescemos e nos modernizamos, sempre
              mantendo o compromisso com o bem-estar de nossos pacientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa trajetória é marcada pela inovação, pela busca contínua por novas tecnologias e pela formação de uma
              equipe de profissionais altamente qualificados. Acreditamos que a saúde é um direito fundamental e
              trabalhamos incansavelmente para garantir que todos tenham acesso a um cuidado de qualidade.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/public/images/institutional.png"
              alt="Hospital Building"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center shadow-md">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Missão</h3>
              <p className="text-gray-700">
                Oferecer serviços de saúde de alta qualidade, com foco na excelência do atendimento e na segurança do
                paciente, promovendo o bem-estar e a qualidade de vida da comunidade.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center shadow-md">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser referência em saúde na região, reconhecida pela inovação, humanização e compromisso com a vida,
                expandindo nossos serviços e alcançando um número cada vez maior de pessoas.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center shadow-md">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Valores</h3>
              <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-xs">
                <li>Humanização</li>
                <li>Ética e Transparência</li>
                <li>Excelência</li>
                <li>Inovação</li>
                <li>Compromisso Social</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-teal-600 mb-2">
              <AnimatedNumber targetValue={83} />
            </div>
            <div className="text-xl text-gray-600">anos de história</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-teal-600 mb-2">
              <AnimatedNumber targetValue={12} />
            </div>
            <div className="text-xl text-gray-600">especialidades médicas</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-5xl font-bold text-teal-600 mb-2">
              <AnimatedNumber targetValue={16} />
            </div>
            <div className="text-xl text-gray-600">mil atendimentos/mês</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-teal-600" />
              <span className="text-lg text-gray-700">(32) 3339-5656</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-teal-600" />
              <span className="text-lg text-gray-700">contato@policlinica.org.br</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-teal-600" />
              <span className="text-lg text-gray-700">Rua Exemplo, 123 - Barbacena, MG</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
