import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos sempre prontos para atendê-lo. Entre em contato conosco através dos canais abaixo ou visite-nos
            pessoalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
                    <p className="text-gray-600">
                      Hospital Policlínica de Barbacena
                      <br />
                      Largo Mal. Deodoro, 347
                      <br />
                      Centro - Barbacena - MG
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
                    <p className="text-gray-600">
                      <span className="text-xl font-bold text-teal-600">(32) 3339-5656</span>
                      <br />
                      Atendimento e Emergência
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600">
                      contato@policlinica.org.br
                      <br />
                      Para dúvidas e informações
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 7h às 18h</p>
                      <p>Sábado: 7h às 12h</p>
                      <p>Domingo: Fechado</p>
                      <p className="text-teal-600 font-semibold">Emergência: 24 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Mapa interativo será carregado aqui</p>
                    <p className="text-sm mt-2">
                      Largo Mal. Deodoro, 347 - Centro
                      <br />
                      Barbacena - MG
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
