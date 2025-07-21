"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Clock, Award, Stethoscope } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado com foco no bem-estar do paciente e família.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais qualificados e experientes em diversas especialidades médicas.",
    },
    {
      icon: Shield,
      title: "Segurança e Qualidade",
      description: "Protocolos rigorosos de segurança e qualidade em todos os procedimentos.",
    },
    {
      icon: Clock,
      title: "Atendimento 24h",
      description: "Pronto atendimento disponível 24 horas para emergências médicas.",
    },
    {
      icon: Award,
      title: "82 Anos de Tradição",
      description: "Décadas de experiência e confiança da comunidade de Barbacena.",
    },
    {
      icon: Stethoscope,
      title: "Tecnologia Avançada",
      description: "Equipamentos modernos e tecnologia de ponta para diagnósticos precisos.",
    },
  ]

  return (
    <section ref={sectionRef} id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Por que escolher o Hospital Policlínica?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso compromisso é oferecer atendimento médico de excelência, combinando tradição, inovação e cuidado
            humanizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-500 hover-lift cursor-pointer ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg transition-all duration-300 hover:bg-teal-200 hover:scale-110">
                    <service.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
