"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Principal", href: "/" },
    { name: "Institucional", href: "/institucional" },
    { name: "Especialidades", href: "/especialidades" },
    { name: "Contato", href: "/contato" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-teal-600 text-white py-2 px-2 transition-all duration-300 ${isScrolled ? "py-1" : "py-2"}`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1 hover:text-teal-200 transition-colors">
              <MapPin className="h-4 w-4" />
              <span>Largo Mal. Deodoro, 347 - Centro, Barbacena - MG</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 hover:text-teal-200 transition-colors cursor-pointer">
              <Phone className="h-4 w-4" />
              <span>(32) 3339-5656</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-teal-200 transition-colors cursor-pointer">
              <Mail className="h-4 w-4" />
              <span>trabalheconosco@imaip.org.br</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"}`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "py-3" : "py-4"}`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <div className="relative h-12 w-48 flex items-center">
                <Image
                  src="/images/logo-complete.png"
                  alt="Hospital Policlínica"
                  height={48}
                  width={200}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="#">
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent transition-all duration-300 hover:scale-105"
                >
                  Portal do Paciente
                </Button>
              </Link>
              <Link href="/#agendamento">
                <Button className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Agendar Consulta
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-300">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`py-2 font-medium transition-all duration-300 hover:scale-105 animate-slide-in-right ${
                        isActive(item.href) ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-teal-600 text-teal-600 bg-transparent hover:bg-teal-50 transition-all duration-300"
                    >
                      Portal do Paciente
                    </Button>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 transition-all duration-300">
                      Agendar Consulta
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
