
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Cpu, 
  Radio, 
  Battery, 
  Globe, 
  Shield, 
  Wifi, 
  Smartphone, 
  RotateCcw,
  Settings,
  Layers,
  Gauge,
  CheckCircle,
  ScanLine,
  Speaker,
  HardDrive,
  Clock,
  Activity
} from 'lucide-react'
import Image from 'next/image'

export default function TechnologySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const specificationSections = [
    {
      title: 'Precisão e Resolução',
      icon: Gauge,
      color: 'text-orange-500',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-500/30',
      features: [
        { icon: Cpu, title: 'Resolução 22 bits', description: 'Alta precisão de conversão A/D' },
        { icon: ScanLine, title: 'Sensibilidade ultra-alta', description: 'Detecção de micro-vibrações' },
        { icon: Layers, title: 'Faixa dinâmica superior', description: 'Amplo espectro de medições' },
        { icon: Globe, title: 'Precisão GPS integrada', description: 'Sincronização sub-milissegundo' }
      ]
    },
    {
      title: 'Conectividade e Comunicação',
      icon: Radio,
      color: 'text-blue-500',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30',
      features: [
        { icon: Wifi, title: 'Redes 3G/4G/5G/Wi-Fi/Bluetooth', description: 'Conectividade universal' },
        { icon: Smartphone, title: 'Alertas automáticos', description: 'E-mail, SMS, WhatsApp' },
        { icon: RotateCcw, title: 'Transmissão tempo real e offline', description: 'Dados sempre disponíveis' },
        { icon: Shield, title: 'Protocolo TCP/IP seguro', description: 'Comunicação criptografada' }
      ]
    },
    {
      title: 'Autonomia e Portabilidade',
      icon: Battery,
      color: 'text-green-500',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30',
      features: [
        { icon: Clock, title: 'Bateria 100h autonomia contínua', description: 'Operação sem supervisão' },
        { icon: Settings, title: 'Peso 1.7kg portátil', description: 'Facilmente transportável' },
        { icon: Layers, title: 'Dimensões compactas', description: 'Design otimizado' },
        { icon: Shield, title: 'Resistência IP67', description: 'Proteção contra intempéries' }
      ]
    },
    {
      title: 'Versatilidade e Aplicações',
      icon: Settings,
      color: 'text-purple-500',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30',
      features: [
        { icon: Layers, title: 'Medições múltiplas', description: '4 metodologias integradas' },
        { icon: Speaker, title: 'Pressão acústica integrada', description: 'Medição de ruído simultânea' },
        { icon: Gauge, title: 'Estudos HVSR/MASW/Refração', description: 'Análises geotécnicas avançadas' },
        { icon: HardDrive, title: 'Armazenamento SD Card flexível', description: 'Dados seguros e acessíveis' }
      ]
    }
  ]

  const competitiveAdvantages = [
    'Único sismógrafo com 22 bits de resolução no mercado brasileiro',
    'Sistema de alertas automáticos via WhatsApp integrado',
    'Conformidade total com NBR 9653:2018, DIN 4150 e BS 7385',
    'Monitoramento remoto 24/7 com dashboard personalizado',
    'Tecnologia italiana com suporte técnico nacional especializado',
    'Relatórios automatizados para órgãos ambientais e reguladores'
  ]

  return (
    <section id="tecnologia" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Tecnologia <span className="gradient-text">Marahvib 2.0</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mini sismógrafo multifuncional com tecnologia italiana de ponta, 
            oferecendo precisão incomparável em monitoramento sismográfico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Equipment Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              <Image
                src="/aparelho 1.png"
                alt="Equipamento Marahvib 2.0"
                fill
                className="object-contain p-8"
              />
              
              {/* Floating specs */}
              <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                22 bits
              </div>
              <div className="absolute bottom-4 left-4 bg-slate-800/90 text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                Made in Italy
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">22</div>
                <div className="text-sm text-gray-400">Resolução</div>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">5G</div>
                <div className="text-sm text-gray-400">Conectividade</div>
              </div>
            </div>
          </motion.div>

          {/* Specifications Cards - Layout Reorganizado */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Primeira linha: Precisão e Conectividade */}
            <div className="grid md:grid-cols-2 gap-6">
              {specificationSections.slice(0, 2).map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + sectionIndex * 0.2 }}
                  className={`bg-slate-900/50 p-6 rounded-xl border ${section.borderColor} hover:bg-slate-900/70 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${section.bgColor} rounded-lg flex items-center justify-center`}>
                      <section.icon className={`w-5 h-5 ${section.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="grid gap-3">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <feature.icon className={`w-4 h-4 ${section.color} mt-1 flex-shrink-0`} />
                        <div>
                          <div className="text-white font-medium text-sm">{feature.title}</div>
                          <div className="text-gray-400 text-xs">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Segunda linha: Versatilidade (Roxo) */}
            {(() => {
              const versatilitySection = specificationSections[3];
              const VersatilityIcon = versatilitySection.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className={`bg-slate-900/50 p-6 rounded-xl border ${versatilitySection.borderColor} hover:bg-slate-900/70 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${versatilitySection.bgColor} rounded-lg flex items-center justify-center`}>
                      <VersatilityIcon className={`w-5 h-5 ${versatilitySection.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {versatilitySection.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {versatilitySection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <feature.icon className={`w-4 h-4 ${versatilitySection.color} mt-1 flex-shrink-0`} />
                        <div>
                          <div className="text-white font-medium text-sm">{feature.title}</div>
                          <div className="text-gray-400 text-xs">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}

            {/* Terceira linha: Autonomia (Verde) */}
            {(() => {
              const autonomySection = specificationSections[2];
              const AutonomyIcon = autonomySection.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className={`bg-slate-900/50 p-6 rounded-xl border ${autonomySection.borderColor} hover:bg-slate-900/70 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${autonomySection.bgColor} rounded-lg flex items-center justify-center`}>
                      <AutonomyIcon className={`w-5 h-5 ${autonomySection.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {autonomySection.title}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {autonomySection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <feature.icon className={`w-4 h-4 ${autonomySection.color} mt-1 flex-shrink-0`} />
                        <div>
                          <div className="text-white font-medium text-sm">{feature.title}</div>
                          <div className="text-gray-400 text-xs">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        </div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-orange-600/10 to-blue-600/10 rounded-2xl p-8 border border-orange-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Shield className="w-6 h-6 text-orange-500 mr-2" />
            Vantagens Competitivas <span className="gradient-text">Exclusivas</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {advantage}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* Technical Specs Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-16 bg-slate-900/30 rounded-2xl p-8 border border-slate-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Especificações Técnicas <span className="gradient-text">Destacadas</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">22</div>
              <div className="text-sm text-gray-400">bits resolução</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
              <div className="text-sm text-gray-400">metodologias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">5G</div>
              <div className="text-sm text-gray-400">Conectividade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">IP67</div>
              <div className="text-sm text-gray-400">resistência</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
