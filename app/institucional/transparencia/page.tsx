"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Tipos de documentos
type Document = {
  id: string
  title: string
  description: string
  fileName: string
  fileUrl: string
}

// Dados de exemplo - você pode substituir pelos seus documentos reais
const convenioDocuments: Document[] = [
  {
    id: "1",
    title: "Contrato Unimed 2024",
    description: "Contrato de prestação de serviços com operadora Unimed para o ano de 2024",
    fileName: "contrato_unimed_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "2",
    title: "Contrato SUS 2024",
    description: "Termo de cooperação com Sistema Único de Saúde para atendimentos públicos",
    fileName: "contrato_sus_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "3",
    title: "Tabela de Preços Convênios",
    description: "Tabela atualizada de valores praticados para convênios médicos",
    fileName: "tabela_precos_convenios_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "4",
    title: "Contrato Bradesco Saúde 2024",
    description: "Acordo de prestação de serviços com Bradesco Saúde",
    fileName: "contrato_bradesco_saude_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "5",
    title: "Contrato Amil 2024",
    description: "Contrato de credenciamento com operadora Amil",
    fileName: "contrato_amil_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "6",
    title: "Contrato Porto Seguro Saúde 2024",
    description: "Acordo com Porto Seguro para atendimentos ambulatoriais e emergenciais",
    fileName: "contrato_porto_seguro_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "7",
    title: "Tabela CBHPM Atualizada",
    description: "Classificação Brasileira Hierarquizada de Procedimentos Médicos - Versão 2024",
    fileName: "tabela_cbhpm_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "8",
    title: "Contrato Sulamerica 2024",
    description: "Termo de credenciamento com Sulamerica Saúde",
    fileName: "contrato_sulamerica_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "9",
    title: "Aditivo Contratual Unimed - 1º Termo",
    description: "Primeiro aditivo ao contrato Unimed com atualizações de valores",
    fileName: "aditivo_unimed_termo1_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "10",
    title: "Relatório de Faturamento Convênios - Q1",
    description: "Relatório consolidado de faturamento do primeiro trimestre",
    fileName: "relatorio_faturamento_q1_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "11",
    title: "Contrato Prevent Senior 2024",
    description: "Acordo de prestação de serviços com Prevent Senior",
    fileName: "contrato_prevent_senior_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "12",
    title: "Contrato Golden Cross 2024",
    description: "Termo de credenciamento com Golden Cross",
    fileName: "contrato_golden_cross_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "13",
    title: "Manual de Procedimentos Convênios",
    description: "Manual com procedimentos para autorização e faturamento de convênios",
    fileName: "manual_procedimentos_convenios_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "14",
    title: "Contrato CASSI 2024",
    description: "Acordo com Caixa de Assistência dos Funcionários do Banco do Brasil",
    fileName: "contrato_cassi_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "15",
    title: "Relatório de Inadimplência Convênios",
    description: "Relatório de inadimplência dos convênios médicos - Semestre 1",
    fileName: "relatorio_inadimplencia_s1_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "16",
    title: "Contrato Hapvida 2024",
    description: "Termo de prestação de serviços com Hapvida",
    fileName: "contrato_hapvida_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "17",
    title: "Tabela de Honorários Médicos",
    description: "Tabela referencial de honorários para procedimentos médicos",
    fileName: "tabela_honorarios_medicos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "18",
    title: "Contrato NotreDame Intermédica 2024",
    description: "Acordo de credenciamento com NotreDame Intermédica",
    fileName: "contrato_notredame_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "19",
    title: "Política de Relacionamento com Operadoras",
    description: "Documento norteador das relações com operadoras de saúde",
    fileName: "politica_relacionamento_operadoras_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "20",
    title: "Contrato São Francisco Saúde 2024",
    description: "Termo de cooperação com São Francisco Saúde",
    fileName: "contrato_sao_francisco_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "21",
    title: "Aditivo Contratual SUS - 2º Termo",
    description: "Segundo aditivo ao termo de cooperação com SUS",
    fileName: "aditivo_sus_termo2_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "22",
    title: "Relatório de Atendimentos SUS",
    description: "Relatório de produção ambulatorial e hospitalar pelo SUS",
    fileName: "relatorio_atendimentos_sus_2024.pdf",
    fileUrl: "#",
  },
]

const intervencaoDocuments: Document[] = [
  {
    id: "1",
    title: "Relatório de Glosas - Janeiro 2024",
    description: "Relatório detalhado de glosas e justificativas do mês de janeiro",
    fileName: "relatorio_glosas_jan_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "2",
    title: "Protocolo de Intervenções",
    description: "Documento com protocolos e diretrizes para intervenções médicas",
    fileName: "protocolo_intervencoes_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "3",
    title: "Análise de Glosas - 1º Trimestre",
    description: "Análise consolidada de glosas do primeiro trimestre de 2024",
    fileName: "analise_glosas_q1_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "4",
    title: "Relatório de Glosas - Fevereiro 2024",
    description: "Relatório mensal de glosas e contestações - Fevereiro",
    fileName: "relatorio_glosas_fev_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "5",
    title: "Relatório de Glosas - Março 2024",
    description: "Relatório mensal de glosas e contestações - Março",
    fileName: "relatorio_glosas_mar_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "6",
    title: "Protocolo de Auditoria Médica",
    description: "Diretrizes para auditoria médica e análise de contas",
    fileName: "protocolo_auditoria_medica_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "7",
    title: "Manual de Recursos e Contestações",
    description: "Manual para elaboração de recursos contra glosas",
    fileName: "manual_recursos_contestacoes_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "8",
    title: "Relatório de Glosas - Abril 2024",
    description: "Relatório mensal de glosas e justificativas - Abril",
    fileName: "relatorio_glosas_abr_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "9",
    title: "Indicadores de Glosas - 1º Semestre",
    description: "Análise estatística de glosas do primeiro semestre",
    fileName: "indicadores_glosas_s1_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "10",
    title: "Protocolo de Intervenção Cirúrgica",
    description: "Diretrizes específicas para intervenções cirúrgicas",
    fileName: "protocolo_intervencao_cirurgica_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "11",
    title: "Relatório de Glosas - Maio 2024",
    description: "Relatório mensal de glosas e contestações - Maio",
    fileName: "relatorio_glosas_mai_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "12",
    title: "Plano de Ação Redução de Glosas",
    description: "Estratégias para redução do índice de glosas",
    fileName: "plano_acao_reducao_glosas_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "13",
    title: "Relatório de Glosas - Junho 2024",
    description: "Relatório mensal de glosas e justificativas - Junho",
    fileName: "relatorio_glosas_jun_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "14",
    title: "Manual de Codificação CID-10",
    description: "Guia para correta codificação de diagnósticos",
    fileName: "manual_codificacao_cid10_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "15",
    title: "Protocolo de Intervenção em UTI",
    description: "Diretrizes para intervenções em Unidade de Terapia Intensiva",
    fileName: "protocolo_intervencao_uti_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "16",
    title: "Análise de Glosas por Operadora",
    description: "Relatório comparativo de glosas segregado por operadora",
    fileName: "analise_glosas_operadoras_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "17",
    title: "Protocolo de Documentação Médica",
    description: "Normas para preenchimento adequado de prontuários e laudos",
    fileName: "protocolo_documentacao_medica_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "18",
    title: "Relatório de Recursos Deferidos",
    description: "Relatório de recursos contra glosas que foram aceitos",
    fileName: "relatorio_recursos_deferidos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "19",
    title: "Manual de Prevenção de Glosas",
    description: "Guia de boas práticas para evitar glosas",
    fileName: "manual_prevencao_glosas_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "20",
    title: "Protocolo de Intervenção Emergencial",
    description: "Diretrizes para atendimentos de emergência e trauma",
    fileName: "protocolo_intervencao_emergencial_2024.pdf",
    fileUrl: "#",
  },
]

const contratosDocuments: Document[] = [
  {
    id: "1",
    title: "Contrato de Prestação de Serviços Médicos",
    description: "Modelo de contrato utilizado para prestadores de serviços médicos",
    fileName: "modelo_contrato_medicos.pdf",
    fileUrl: "#",
  },
  {
    id: "2",
    title: "Contrato de Fornecimento de Equipamentos",
    description: "Contrato com fornecedores de equipamentos médico-hospitalares",
    fileName: "contrato_equipamentos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "3",
    title: "Contratos de Terceirização",
    description: "Documentos referentes aos serviços terceirizados do hospital",
    fileName: "contratos_terceirizacao_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "4",
    title: "Contrato de Locação de Equipamentos Médicos",
    description: "Acordo de locação de equipamentos de imagem e diagnóstico",
    fileName: "contrato_locacao_equipamentos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "5",
    title: "Contrato de Fornecimento de Medicamentos",
    description: "Acordo com distribuidoras de medicamentos e insumos farmacêuticos",
    fileName: "contrato_medicamentos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "6",
    title: "Contrato de Serviços de Limpeza",
    description: "Termo de prestação de serviços de limpeza e higienização hospitalar",
    fileName: "contrato_limpeza_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "7",
    title: "Contrato de Serviços de Segurança",
    description: "Acordo de prestação de serviços de segurança patrimonial",
    fileName: "contrato_seguranca_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "8",
    title: "Contrato de Manutenção Predial",
    description: "Termo de prestação de serviços de manutenção predial e elétrica",
    fileName: "contrato_manutencao_predial_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "9",
    title: "Contrato de Serviços de TI",
    description: "Acordo de suporte técnico e infraestrutura de tecnologia da informação",
    fileName: "contrato_ti_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "10",
    title: "Contrato de Fornecimento de Gases Medicinais",
    description: "Acordo de fornecimento de oxigênio e gases medicinais",
    fileName: "contrato_gases_medicinais_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "11",
    title: "Contrato de Serviços de Alimentação",
    description: "Termo de prestação de serviços de nutrição e alimentação hospitalar",
    fileName: "contrato_alimentacao_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "12",
    title: "Contrato de Serviços de Lavanderia",
    description: "Acordo de lavagem e higienização de roupas hospitalares",
    fileName: "contrato_lavanderia_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "13",
    title: "Contrato de Gestão de Resíduos",
    description: "Termo de coleta e destinação de resíduos hospitalares",
    fileName: "contrato_residuos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "14",
    title: "Contrato de Assessoria Jurídica",
    description: "Acordo de prestação de serviços jurídicos e consultoria legal",
    fileName: "contrato_assessoria_juridica_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "15",
    title: "Contrato de Auditoria Externa",
    description: "Termo de contratação de auditoria contábil e financeira",
    fileName: "contrato_auditoria_externa_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "16",
    title: "Contrato de Serviços de Laboratório",
    description: "Acordo de prestação de serviços de análises clínicas",
    fileName: "contrato_laboratorio_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "17",
    title: "Contrato de Manutenção de Equipamentos Médicos",
    description: "Termo de manutenção preventiva e corretiva de equipamentos",
    fileName: "contrato_manutencao_equipamentos_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "18",
    title: "Contrato de Fornecimento de Material Cirúrgico",
    description: "Acordo de fornecimento de materiais e instrumentais cirúrgicos",
    fileName: "contrato_material_cirurgico_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "19",
    title: "Contrato de Serviços de Radiologia",
    description: "Termo de prestação de serviços de diagnóstico por imagem",
    fileName: "contrato_radiologia_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "20",
    title: "Contrato de Locação de Software Hospitalar",
    description: "Acordo de licenciamento de sistema de gestão hospitalar",
    fileName: "contrato_software_hospitalar_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "21",
    title: "Contrato de Serviços de Engenharia Clínica",
    description: "Termo de assessoria em engenharia e tecnologia médico-hospitalar",
    fileName: "contrato_engenharia_clinica_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "22",
    title: "Contrato de Fornecimento de Órteses e Próteses",
    description: "Acordo de fornecimento de materiais especiais (OPME)",
    fileName: "contrato_orteses_proteses_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "23",
    title: "Contrato de Transporte de Pacientes",
    description: "Termo de prestação de serviços de ambulância e remoção",
    fileName: "contrato_transporte_pacientes_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "24",
    title: "Contrato de Serviços Contábeis",
    description: "Acordo de prestação de serviços de contabilidade",
    fileName: "contrato_contabilidade_2024.pdf",
    fileUrl: "#",
  },
  {
    id: "25",
    title: "Contrato de Seguro Patrimonial",
    description: "Apólice de seguro contra danos ao patrimônio hospitalar",
    fileName: "contrato_seguro_patrimonial_2024.pdf",
    fileUrl: "#",
  },
]

const attendanceData = [
  { month: "Jan", atendimentos: 1200 },
  { month: "Fev", atendimentos: 1400 },
  { month: "Mar", atendimentos: 1300 },
  { month: "Abr", atendimentos: 1600 },
  { month: "Mai", atendimentos: 1800 },
  { month: "Jun", atendimentos: 1700 },
]

const specialtyData = [
  { name: "Cardiologia", value: 25 },
  { name: "Ortopedia", value: 20 },
  { name: "Pediatria", value: 18 },
  { name: "Ginecologia", value: 15 },
  { name: "Outros", value: 22 },
]

const satisfactionData = [
  { month: "Jan", satisfacao: 4.2 },
  { month: "Fev", satisfacao: 4.3 },
  { month: "Mar", satisfacao: 4.5 },
  { month: "Abr", satisfacao: 4.4 },
  { month: "Mai", satisfacao: 4.6 },
  { month: "Jun", satisfacao: 4.7 },
]

export default function TransparenciaPage() {
  const [activeTab, setActiveTab] = useState<"convenio" | "intervencao" | "contratos" | "indicadores">("convenio")

  const getDocuments = () => {
    switch (activeTab) {
      case "convenio":
        return convenioDocuments
      case "intervencao":
        return intervencaoDocuments
      case "contratos":
        return contratosDocuments
      case "indicadores":
        return []
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Transparência</h1>
          <p className="text-xl md:text-2xl font-normal">Compromisso com a ética e a responsabilidade.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Princípios de Transparência</h2>
          <p className="text-lg text-gray-700 mb-6">
            No Hospital Policlínica, a transparência é um pilar fundamental da nossa gestão. Estamos comprometidos em
            fornecer informações claras e acessíveis sobre nossas operações, finanças e governança, garantindo a
            confiança de nossos pacientes, colaboradores e da comunidade.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Acreditamos que a prestação de contas é essencial para a construção de um relacionamento sólido e duradouro.
            Por isso, disponibilizamos aqui dados relevantes sobre nossa atuação, sempre em conformidade com as melhores
            práticas e regulamentações vigentes.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {activeTab === "indicadores" ? "Indicadores e Gráficos" : "Documentos Disponíveis"}
            </h3>

            {/* Tabs Menu */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("convenio")}
                className={`px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === "convenio"
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-600 hover:text-teal-600 hover:border-gray-300"
                }`}
              >
                Documentos de Convênio
              </button>
              <button
                onClick={() => setActiveTab("intervencao")}
                className={`px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === "intervencao"
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-600 hover:text-teal-600 hover:border-gray-300"
                }`}
              >
                Intervenção e Glosas
              </button>
              <button
                onClick={() => setActiveTab("contratos")}
                className={`px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === "contratos"
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-600 hover:text-teal-600 hover:border-gray-300"
                }`}
              >
                Contratos
              </button>
              <button
                onClick={() => setActiveTab("indicadores")}
                className={`px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === "indicadores"
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-600 hover:text-teal-600 hover:border-gray-300"
                }`}
              >
                Indicadores e Gráficos
              </button>
            </div>

            {activeTab === "indicadores" ? (
              // Seção de Gráficos
              <div className="space-y-8">
                {/* Gráfico 1: Atendimentos Mensais */}
                <Card>
                  <CardHeader>
                    <CardTitle>Atendimentos Mensais</CardTitle>
                    <CardDescription>Volume de atendimentos realizados nos últimos 6 meses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        atendimentos: {
                          label: "Atendimentos",
                          color: "#0d9488",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={attendanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="atendimentos" fill="#0d9488" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Gráfico 2: Distribuição por Especialidade */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribuição de Atendimentos por Especialidade</CardTitle>
                    <CardDescription>Percentual de atendimentos por área médica</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: {
                          label: "Percentual",
                          color: "#0d9488",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={specialtyData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#0d9488"
                            label={(entry) => `${entry.name}: ${entry.value}%`}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Gráfico 3: Índice de Satisfação */}
                <Card>
                  <CardHeader>
                    <CardTitle>Índice de Satisfação dos Pacientes</CardTitle>
                    <CardDescription>Avaliação média mensal (escala de 0 a 5)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        satisfacao: {
                          label: "Satisfação",
                          color: "#0d9488",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={satisfactionData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, 5]} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="satisfacao"
                            stroke="#0d9488"
                            strokeWidth={3}
                            dot={{ fill: "#0d9488", r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Card informativo sobre os dados */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-teal-900 mb-2">Sobre os Indicadores</h4>
                  <p className="text-gray-700">
                    Os gráficos apresentados são atualizados mensalmente e refletem nosso compromisso com a
                    transparência na prestação de contas. Para informações mais detalhadas ou períodos específicos,
                    entre em contato conosco através dos nossos canais de atendimento.
                  </p>
                </div>
              </div>
            ) : (
              // Seção de Documentos
              <div className="space-y-4">
                {getDocuments().map((doc) => (
                  <div
                    key={doc.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors items-center"
                  >
                    {/* Coluna 1: Título e Descrição */}
                    <div className="md:col-span-5">
                      <h4 className="font-semibold text-gray-900 mb-1">{doc.title}</h4>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                    </div>

                    {/* Coluna 2: Nome do Arquivo */}
                    <div className="md:col-span-4">
                      <p className="text-sm text-gray-700 font-mono bg-white px-3 py-2 rounded border border-gray-200">
                        {doc.fileName}
                      </p>
                    </div>

                    {/* Coluna 3: Botão de Download */}
                    <div className="md:col-span-3 flex justify-end">
                      <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white w-full md:w-auto">
                        <a href={doc.fileUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-900 mb-2">Precisa de mais informações?</h3>
            <p className="text-gray-700">
              Para mais informações ou dúvidas sobre os documentos, entre em contato conosco através dos nossos canais
              de atendimento.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
