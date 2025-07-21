import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Brain, Eye, Bone, Baby, Stethoscope } from "lucide-react"

export function SpecialtiesSection() {
  const specialties = [
    { icon: Heart, name: "Cardiologia", description: "Cuidados especializados do coração" },
    { icon: Brain, name: "Neurologia", description: "Tratamento do sistema nervoso" },
    { icon: Eye, name: "Oftalmologia", description: "Cuidados com a visão" },
    { icon: Bone, name: "Ortopedia", description: "Tratamento de ossos e articulações" },
    { icon: Baby, name: "Pediatria", description: "Cuidados especializados infantis" },
    { icon: Stethoscope, name: "Clínica Geral", description: "Atendimento médico geral" },
  ]

  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Especialidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com um corpo clínico especializado nas principais áreas médicas, oferecendo atendimento de
            qualidade em diversas especialidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specialties.map((specialty, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <specialty.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                <p className="text-sm text-gray-600">{specialty.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/especialidades">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Ver Todas as Especialidades
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
