import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Stethoscope,
  Activity,
  UserCheck,
  Scissors,
  Pill,
  TreesIcon as Lungs,
  Thermometer,
} from "lucide-react"
import Link from "next/link"

export default function EspecialidadesPage() {
  const specialties = [
    {
      icon: Heart,
      name: "Cardiologia",
      description: "Diagnóstico e tratamento de doenças do coração e sistema cardiovascular.",
    },
    {
      icon: Brain,
      name: "Neurologia",
      description: "Cuidados especializados para o sistema nervoso, cérebro e medula espinhal.",
    },
    {
      icon: Eye,
      name: "Oftalmologia",
      description: "Tratamento de doenças e distúrbios relacionados aos olhos e à visão.",
    },
    { icon: Bone, name: "Ortopedia", description: "Cuidados com ossos, articulações, ligamentos, tendões e músculos." },
    { icon: Baby, name: "Pediatria", description: "Atendimento médico especializado para crianças e adolescentes." },
    {
      icon: Stethoscope,
      name: "Clínica Geral",
      description: "Atendimento médico geral para diagnóstico e tratamento de diversas condições.",
    },
    {
      icon: Activity,
      name: "Anestesiologia",
      description: "Administração de anestésicos durante procedimentos cirúrgicos e controle da dor.",
    },
    {
      icon: UserCheck,
      name: "Assistência Social",
      description: "Apoio social e orientação para pacientes e familiares.",
    },
    {
      icon: Scissors,
      name: "Cirurgia Geral",
      description: "Procedimentos cirúrgicos para tratamento de diversas condições.",
    },
    { icon: Pill, name: "Dermatologia", description: "Diagnóstico e tratamento de doenças da pele, cabelos e unhas." },
    { icon: Lungs, name: "Pneumologia", description: "Tratamento de doenças respiratórias e pulmonares." },
    { icon: Thermometer, name: "Endocrinologia", description: "Cuidados com distúrbios hormonais e metabólicos." },
  ]

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Especialidades</h1>
          <p className="text-xl md:text-2xl font-normal">
            Conheça todas as especialidades médicas disponíveis em nosso hospital
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Clínica de Especialidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Com um Corpo Clínico que reúne os maiores médicos especialistas da região, o Hospital Policlínica de
            Barbacena possui a Clínica de Especialidades, oportunizando à população o acesso aos melhores profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialties.map((specialty, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <specialty.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-teal-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agende sua consulta</h3>
              <p className="text-gray-700 mb-6">
                Para agendar uma consulta com qualquer uma de nossas especialidades, entre em contato pelo telefone ou
                utilize nosso sistema de agendamento online.
              </p>
              <div className="text-xl font-bold text-teal-600 mb-2">(32) 3339-5656</div>
            </div>
            <div className="text-center lg:text-right">
              <Link href="/#agendamento">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Agendar Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
