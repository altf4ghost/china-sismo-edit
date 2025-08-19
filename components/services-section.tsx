
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Monitor,
  Activity, 
  Users, 
  Settings, 
  BarChart3, 
  Shield, 
  Clock,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Monitor,
      title: 'Locação de Sismógrafo de Engenharia Remoto',
      description: 'Equipamento de monitoramento sísmico de alta precisão disponível para locação com suporte técnico especializado.',
      features: ['Equipamento Marahvib 2.0', 'Suporte técnico 24/7', 'Instalação e configuração', 'Análise de dados incluída'],
      isPrimary: true
    },
    {
      icon: Activity,
      title: 'Monitoramento Sismográfico',
      description: 'Monitoramento contínuo de vibrações com alertas em tempo real e relatórios detalhados.',
      features: ['Monitoramento 24/7', 'Alertas automáticos', 'Dashboard em tempo real', 'Conformidade regulamentar']
    },
    {
      icon: Users,
      title: 'Consultoria Especializada',
      description: 'Consultoria técnica especializada para projetos de mineração, construção e indústria.',
      features: ['Análise de viabilidade', 'Dimensionamento', 'Estudos de impacto', 'Assessoria técnica']
    },
    {
      icon: Settings,
      title: 'Instalação e Configuração',
      description: 'Instalação profissional e configuração completa dos equipamentos de monitoramento.',
      features: ['Instalação técnica', 'Calibração precisa', 'Treinamento equipe', 'Suporte completo']
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados',
      description: 'Análise detalhada dos dados coletados com relatórios técnicos e recomendações.',
      features: ['Relatórios técnicos', 'Análise FFT', 'Gráficos interativos', 'Recomendações']
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: 'Conformidade Regulamentar',
      description: 'Garantimos que todos os monitoramentos estejam em conformidade com NBR 9653:2018, DIN 4150 e BS 7385.'
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Suporte técnico disponível 24 horas por dia, 7 dias por semana para emergências e dúvidas.'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('orcamento')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="servicos" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em monitoramento sismográfico, 
            desde a consultoria inicial até o suporte contínuo.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`rounded-xl p-8 border hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 min-h-[320px] flex flex-col ${
                service.isPrimary 
                  ? 'bg-gradient-to-br from-orange-600/20 to-blue-600/20 border-orange-500/50' 
                  : 'bg-slate-800/50 border-slate-700/50'
              }`}
            >
              {service.isPrimary && (
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SERVIÇO PRINCIPAL
                  </span>
                </div>
              )}
              
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  service.isPrimary ? 'bg-orange-600/30' : 'bg-orange-600/20'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.isPrimary ? 'text-orange-400' : 'text-orange-500'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold ${
                  service.isPrimary ? 'text-orange-100' : 'text-white'
                }`}>
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-300">
                    <div className={`w-2 h-2 rounded-full ${
                      service.isPrimary ? 'bg-orange-400' : 'bg-orange-500'
                    }`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className="flex items-start space-x-4 bg-slate-950/50 p-6 rounded-xl border border-slate-700/30"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                <service.icon className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-orange-600/20 to-orange-700/20 rounded-2xl p-8 border border-orange-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para discutir suas necessidades específicas. 
            Nossa equipe está pronta para desenvolver a solução ideal para seu projeto.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Falar com Especialista</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
