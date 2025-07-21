"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    })
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold">Contato</h1>
          <p className="text-xl md:text-2xl font-normal">Mande mensagem ou ligue para mais informações</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <div className="flex flex-col items-center space-y-2">
              {" "}
              {/* Changed to flex-col and items-center for vertical centering */}
              <div className="bg-teal-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-center">
                {" "}
                {/* Added text-center for text alignment */}
                <h3 className="text-lg font-semibold mb-2">Endereço</h3>
                <p className="text-gray-600">
                  Largo Mal. Deodoro, s/nº - Centro,
                  <br />
                  Barbacena - MG
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <div className="flex flex-col items-center space-y-2">
              {" "}
              {/* Changed to flex-col and items-center for vertical centering */}
              <div className="bg-teal-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-center">
                {" "}
                {/* Added text-center for text alignment */}
                <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600">(32) 3339-56566</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <div className="flex flex-col items-center space-y-2">
              {" "}
              {/* Changed to flex-col and items-center for vertical centering */}
              <div className="bg-teal-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-center">
                {" "}
                {/* Added text-center for text alignment */}
                <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                <p className="text-gray-600">trabalheconosco@imaip.org.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Nossa Localização</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full">
                {/* This would be replaced with an actual Google Maps embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Mapa interativo será carregado aqui</p>
                    <p className="text-sm mt-2">
                      Largo Mal. Deodoro, s/nº - Centro
                      <br />
                      Barbacena - MG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu nome
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu e-mail
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Sua mensagem (opcional)
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} />
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
