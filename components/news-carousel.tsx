"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function NewsCarousel() {
  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }))

  const newsItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "Novos Equipamentos de Raio X 24H",
      description:
        "Investimos em tecnologia de ponta para diagnósticos mais precisos e rápidos, disponíveis 24 horas por dia.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "Campanha de Vacinação contra a Gripe",
      description: "Participe da nossa campanha anual de vacinação e proteja-se. Agende seu horário online!",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      title: "Atendimento Pediátrico Ampliado",
      description: "Nossa equipe de pediatras agora com horários estendidos para melhor atender seus filhos.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600",
      title: "Parceria com Convênios Locais",
      description: "Expandimos nossa rede de convênios para oferecer mais opções de atendimento à comunidade.",
    },
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleDotClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index)
        plugin.current.reset() // Reset autoplay when manually navigating
      }
    },
    [api],
  )

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {" "}
      {/* Increased vertical padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Últimas Atualizações e Notícias
        </h2>
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto" // Increased max-width
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {newsItems.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="overflow-hidden rounded-lg shadow-lg">
                  <CardContent className="p-0 flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 h-72 md:h-96">
                      {" "}
                      {/* Increased height */}
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index + 1 === current ? "bg-teal-600" : "bg-gray-300"}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
