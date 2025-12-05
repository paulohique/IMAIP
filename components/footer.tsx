import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-start space-x-3 mb-4">
              <div className="relative h-10 w-auto flex-shrink-0">
                <Image
                  src="/images/logo-circle.png"
                  alt="Hospital Policlínica"
                  height={40}
                  width={40}
                  className="object-contain"
                />
              </div>
              <p className="text-sm opacity-80">
                Cuidando da saúde da população de Barbacena e região há mais de oito décadas, com tradição, qualidade e
                humanização no atendimento.
              </p>
            </div>
            <div className="flex space-x-3">
              <Link href="#" className="bg-teal-700 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-teal-700 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="bg-teal-700 p-2 rounded-full hover:bg-teal-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Principal
                </Link>
              </li>
              <li>
                <Link href="/institucional" className="opacity-80 hover:opacity-100 transition-opacity">
                  Institucional
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="opacity-80 hover:opacity-100 transition-opacity">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link href="/contato" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="opacity-80">Consultas Médicas</span>
              </li>
              <li>
                <span className="opacity-80">Exames Laboratoriais</span>
              </li>
              <li>
                <span className="opacity-80">Cirurgias</span>
              </li>
              <li>
                <span className="opacity-80">Pronto Atendimento</span>
              </li>
              <li>
                <span className="opacity-80">Internação</span>
              </li>
              {/* <li>
                <span className="opacity-80">Portal do Paciente</span>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 opacity-80" />
                <span className="opacity-80">
                  Largo Mal. Deodoro, 347
                  <br />
                  Centro - Barbacena - MG
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">(32) 3339-5656</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="opacity-80">trabalheconosco@imaip.org.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Hospital Policlínica de Barbacena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
