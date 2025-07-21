"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function NewsCarousel() {
  const newsItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "Nova Unidade de Atendimento Pediátrico",
      description:
        "Inauguramos uma moderna unidade dedicada ao cuidado infantil, com equipamentos de ponta e equipe especializada.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "Campanha de Vacinação Contra a Gripe",
      description: "Participe da nossa campanha anual de vacinação. Proteja-se e proteja sua família!",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      title: "Tecnologia Avançada em Diagnóstico por Imagem",
      description:
        "Investimos em novos equipamentos de ressonância magnética e tomografia para diagnósticos mais precisos.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600",
      title: "Semana da Saúde e Bem-Estar",
      description: "Participe de palestras e workshops gratuitos sobre alimentação saudável e prevenção de doenças.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    }, 5000) // Change slide every 5 seconds
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [newsItems.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)
    startAutoPlay() // Reset autoplay timer on manual interaction
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
    startAutoPlay() // Reset autoplay timer on manual interaction
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    startAutoPlay() // Reset autoplay timer on manual interaction
  }

  return (
    <section id="atualizacoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Últimas Atualizações e Notícias</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das novidades, eventos e informações importantes do Hospital Policlínica.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-base opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
