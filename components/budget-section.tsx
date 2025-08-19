
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, User, Mail, Phone, MapPin, Calendar, FileText, Send, Loader2, CheckCircle, Clock, Star, Award, CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'

const projectTypes = [
  'Mineração',
  'Construção Civil',
  'Barragens',
  'Infraestrutura',
  'Energia',
  'Indústria',
  'Dutos',
  'Patrimônio',
  'Meio Ambiente',
  'Outros'
]

const monitoringPeriods = [
  '1-3 meses',
  '3-6 meses',
  '6-12 meses',
  '1-2 anos',
  'Mais de 2 anos',
  'Indefinido'
]

const services = [
  'Locação de Sismógrafo Marahvib',
  'Sistema de Alertas Automáticos',
  'Relatórios Personalizados',
  'Monitoramento HVSR',
  'Suporte Técnico Completo',
  'Consultoria Técnica'
]

interface FormData {
  companyName: string
  cnpj: string
  contactName: string
  email: string
  phone: string
  projectType: string
  location: string
  monitoringPeriod: string
  startDate: string
  endDate: string
  services: string[]
  projectDetails: string
  specialRequirements: string
}

export default function BudgetSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    cnpj: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    monitoringPeriod: '',
    startDate: '',
    endDate: '',
    services: [],
    projectDetails: '',
    specialRequirements: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validation
      if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.projectType || !formData.location || !formData.monitoringPeriod) {
        toast({
          title: "Erro de Validação",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive"
        })
        return
      }

      const response = await fetch('/api/orcamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar orçamento')
      }

      toast({
        title: "Orçamento Enviado!",
        description: "Recebemos sua solicitação. Entraremos em contato em até 24 horas.",
        variant: "default"
      })

      // Reset form
      setFormData({
        companyName: '',
        cnpj: '',
        contactName: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        monitoringPeriod: '',
        startDate: '',
        endDate: '',
        services: [],
        projectDetails: '',
        specialRequirements: ''
      })

    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar orçamento. Tente novamente.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="orcamento" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Receba uma proposta personalizada para suas necessidades de monitoramento sísmico. 
            Nossa equipe está pronta para atender você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Seção 1 - Informações do Projeto */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Building className="w-6 h-6 text-orange-500 mr-2" />
                    Informações do Projeto
                  </h3>
                  
                  {/* Dados da Empresa */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-4">Dados da Empresa</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-gray-300">
                          Nome da Empresa <span className="text-red-400">*</span>
                        </Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="companyName"
                            type="text"
                            placeholder="Digite o nome da empresa"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cnpj" className="text-gray-300">CNPJ</Label>
                        <Input
                          id="cnpj"
                          type="text"
                          placeholder="00.000.000/0000-00"
                          value={formData.cnpj}
                          onChange={(e) => handleInputChange('cnpj', e.target.value)}
                          className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactName" className="text-gray-300">
                          Nome do Contato <span className="text-red-400">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="contactName"
                            type="text"
                            placeholder="Digite o nome do contato"
                            value={formData.contactName}
                            onChange={(e) => handleInputChange('contactName', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          E-mail <span className="text-red-400">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="contato@empresa.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="phone" className="text-gray-300">
                          Telefone <span className="text-red-400">*</span>
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dados do Projeto */}
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Dados do Projeto</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-gray-300">
                          Tipo de Projeto <span className="text-red-400">*</span>
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                            <SelectValue placeholder="Selecione o tipo de projeto" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-gray-300">
                          Localização <span className="text-red-400">*</span>
                        </Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="location"
                            type="text"
                            placeholder="Cidade, Estado"
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="monitoringPeriod" className="text-gray-300">
                          Período de Monitoramento <span className="text-red-400">*</span>
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('monitoringPeriod', value)}>
                          <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                            <SelectValue placeholder="Selecione o período" />
                          </SelectTrigger>
                          <SelectContent>
                            {monitoringPeriods.map((period) => (
                              <SelectItem key={period} value={period}>{period}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="text-gray-300">Data de Início</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => handleInputChange('startDate', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="endDate" className="text-gray-300">Data de Término</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            id="endDate"
                            type="date"
                            value={formData.endDate}
                            onChange={(e) => handleInputChange('endDate', e.target.value)}
                            className="pl-10 bg-slate-900/50 border-slate-600 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seção 2 - Serviços de Interesse */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Serviços de Interesse
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-3">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          className="border-slate-600 text-orange-500"
                        />
                        <Label htmlFor={service} className="text-gray-300 cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seção 3 - Detalhes */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <FileText className="w-6 h-6 text-orange-500 mr-2" />
                    Detalhes
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectDetails" className="text-gray-300">
                        Detalhes do Projeto
                      </Label>
                      <Textarea
                        id="projectDetails"
                        placeholder="Descreva os detalhes do seu projeto de monitoramento sísmico..."
                        value={formData.projectDetails}
                        onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400 min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements" className="text-gray-300">
                        Requisitos Especiais
                      </Label>
                      <Textarea
                        id="specialRequirements"
                        placeholder="Descreva requisitos especiais ou informações adicionais..."
                        value={formData.specialRequirements}
                        onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando Orçamento...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Solicitar Orçamento
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Nossas Garantias */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Award className="w-5 h-5 text-orange-500 mr-2" />
                  Nossas Garantias
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Resposta Rápida</p>
                      <p className="text-gray-400 text-sm">até 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Sem Compromisso</p>
                      <p className="text-gray-400 text-sm">orçamento gratuito</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Suporte Especializado</p>
                      <p className="text-gray-400 text-sm">13+ anos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Qualidade Garantida</p>
                      <p className="text-gray-400 text-sm">tecnologia italiana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Por que SismoPRO? */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Por que SismoPRO?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    <p className="text-gray-300 text-sm">Equipamento Marahvib de 22 bits</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    <p className="text-gray-300 text-sm">Alertas automáticos via WhatsApp</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    <p className="text-gray-300 text-sm">Relatórios automatizados</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    <p className="text-gray-300 text-sm">Dashboard personalizado</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    <p className="text-gray-300 text-sm">Suporte técnico 24/7</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    <p className="text-gray-300 text-sm">Conformidade com todas as normas</p>
                  </div>
                </div>
              </div>

              {/* Contato Direto */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contato Direto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-white font-medium">Telefone</p>
                      <p className="text-gray-400 text-sm">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400 text-sm">comercial@sismopro.xyz</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nosso Processo */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Nosso Processo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Análise da Solicitação</p>
                      <p className="text-gray-400 text-sm">2-4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Proposta Técnica</p>
                      <p className="text-gray-400 text-sm">8-12 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Apresentação</p>
                      <p className="text-gray-400 text-sm">24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
