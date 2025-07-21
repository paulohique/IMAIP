import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export function InsuranceSection() {
  const insuranceLogos = [
    {
      name: "Unimed",
      logo: "/images/unimed-convenio.jpeg",
    },
    {
      name: "SUS",
      logo: "/images/sus.jpeg",
    },
    {
      name: "Bradesco Saúde",
      logo: "/images/bradesco-saude.jpeg",
    },
    {
      name: "Amil",
      logo: "/images/amil.png",
    },
    {
      name: "Sul América",
      logo: "/images/sulametrica.png",
    },
    {
      name: "NotreDame",
      logo: "/images/notredame.png",
    },
  ]

  return (
    <section id="convenios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Convênios Aceitos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais convênios médicos da região para facilitar seu acesso aos nossos serviços de
            saúde.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {insuranceLogos.map((insurance, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center justify-center h-32">
                {" "}
                {/* Increased height for better spacing */}
                <img
                  src={insurance.logo || "/placeholder.svg"}
                  alt={`Logo ${insurance.name}`}
                  className="h-20 w-full object-contain grayscale hover:grayscale-0 transition-all" // Adjusted size and object-fit
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-teal-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-900">Atendimento Particular</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Também oferecemos atendimento particular com valores acessíveis e facilidades de pagamento para todos os
                nossos serviços.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Consultas com valores especiais</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Parcelamento em até 12x</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Desconto para pagamento à vista</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Link href="#">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Consultar Valores
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
