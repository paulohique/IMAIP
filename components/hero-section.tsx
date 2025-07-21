"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Phone, Heart, Clock, Zap, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isBarVisible, setIsBarVisible] = useState(false)
  const [barWidth, setBarWidth] = useState(0)
  const [showScheduleTooltip, setShowScheduleTooltip] = useState(false)

  useEffect(() => {
    // Trigger the bar animation after component mounts
    const timer = setTimeout(() => {
      setIsBarVisible(true)
      // Animate width from 0 to 100%
      let width = 0
      const interval = setInterval(() => {
        width += 2
        setBarWidth(width)
        if (width >= 100) {
          clearInterval(interval)
        }
      }, 20)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="inicio" className="relative">
      {/* Hero Image Section */}
      <div className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hospital-facade-real.png"
            alt="Fachada do Hospital Policlínica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up text-left">
              {"Hospital Policlínica"}{" "}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold animate-fade-in-up animation-delay-200">
              82 ANOS DE HISTÓRIA
            </p>
            <p className="text-lg mb-8 opacity-90 animate-fade-in-up animation-delay-400">
              Acolher, Conhecer, Cuidar, Acompanhar
            </p>
            <p className="text-base mb-8 max-w-2xl animate-fade-in-up animation-delay-600">
              Há mais de oito décadas cuidando da saúde da população de Barbacena e região. Oferecemos atendimento
              médico de qualidade com uma equipe especializada e infraestrutura moderna.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-800">
              <Link href="/#agendamento">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="#">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Resultados de Exames
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Info Bar */}
      <div className="relative z-20 -mt-1">
        <div
          className={`bg-teal-600 text-white transition-all duration-1000 ease-out rounded-b-2xl ${
            isBarVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: `${barWidth}%` }}
        >
          <div className="container mx-auto px-4 py-8 overflow-visible">
            <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8 space-y-6 md:space-y-0">
              {/* Medical Treatment */}
              <div className="flex items-center space-x-3 animate-slide-in-left flex-1 justify-center md:justify-start">
                <div className="bg-white/20 p-3 rounded-full">
                  <Heart className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Tratamento</h3>
                  <p className="text-sm opacity-90">Médico</p>
                </div>
              </div>

              {/* Center Links - Uniform styling */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-slide-in-up animation-delay-300 flex-1">
                <div className="flex items-center space-x-3 px-4 py-2">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">RAIO-X (24H)</span>
                </div>
                <div
                  className="relative flex items-center space-x-3 px-4 py-2 cursor-pointer"
                  onMouseEnter={() => setShowScheduleTooltip(true)}
                  onMouseLeave={() => setShowScheduleTooltip(false)}
                >
                  <div className="bg-white/20 p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">HORÁRIO DE FUNCIONAMENTO</span>

                  {/* Tooltip */}
                  {showScheduleTooltip && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-teal-700 text-white p-4 rounded-lg shadow-xl z-[99999] min-w-[200px] animate-slide-in-up overflow-visible">
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Emergência:</span>
                          <span className="font-medium text-yellow-200">24 horas</span>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-teal-700"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="flex items-center justify-center md:justify-end space-x-3 animate-slide-in-right animation-delay-600 flex-1">
                <div className="text-right">
                  <p className="text-sm opacity-90">Emergência</p>
                  <p className="font-bold text-lg">(32)3339-5656</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="relative z-10 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="#agendamento"
              className="bg-teal-600 text-white p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl animate-slide-up animation-delay-1000 block"
            >
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Agendamento</h3>
                  <p className="text-sm opacity-90">Online</p>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="bg-teal-600 text-white p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl animate-slide-up animation-delay-1200 block"
            >
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Resultados</h3>
                  <p className="text-sm opacity-90">de Exames</p>
                </div>
              </div>
            </Link>
            <Link
              href="/contato"
              className="bg-teal-600 text-white p-6 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl animate-slide-up animation-delay-1400 block"
            >
              <div className="flex items-center space-x-3">
                <Mail className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Contato</h3>
                  <p className="text-sm opacity-90">Fale Conosco</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
