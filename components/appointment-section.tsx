"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone } from "lucide-react"
import Link from "next/link"

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Appointment request:", formData)
  }

  const specialties = [
    "Cardiologia",
    "Neurologia",
    "Oftalmologia",
    "Ortopedia",
    "Pediatria",
    "Clínica Geral",
    "Dermatologia",
    "Ginecologia",
  ]

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]

  return (
    <section id="agendamento" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Agende sua Consulta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Facilite seu atendimento agendando sua consulta online. Nossa equipe entrará em contato para confirmar o
            horário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Appointment Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-teal-600" />
                <span>Formulário de Agendamento</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specialty">Especialidade</Label>
                  <Select
                    value={formData.specialty}
                    onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Data Preferida</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Horário Preferido</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Observações (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva brevemente o motivo da consulta ou observações importantes"
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" size="lg">
                  Solicitar Agendamento
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-semibold">Agendamento por Telefone</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Você também pode agendar sua consulta ligando diretamente para nosso atendimento.
                </p>
                <div className="text-2xl font-bold text-teal-600 mb-2">(32) 3339-5656</div>
                <p className="text-sm text-gray-500">
                  Segunda a Sexta: 7h às 18h
                  <br />
                  Sábado: 7h às 12h
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-semibold">Horários de Funcionamento</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900 mb-1">Setor Administrativo:</p>
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">7h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{""}</span>
                    <span className="font-medium">{""}</span>
                  </div>
                  <p className="font-semibold text-gray-900 mt-4 mb-1">Setor Hospitalar:</p>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span>Emergência:</span>
                    <span className="font-medium text-teal-600">24 horas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-semibold">Portal do Paciente</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Acesse seus exames, histórico médico e agende consultas pelo nosso portal online.
                </p>
                <Link href="#">
                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  >
                    Acessar Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
