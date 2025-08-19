
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mountain, 
  Building2, 
  Factory, 
  Train, 
  Truck,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Dam,
  Construction,
  Zap,
  Fuel,
  Landmark,
  Leaf,
  Radio,
  Waves
} from 'lucide-react'

export default function ApplicationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const applications = [
    {
      icon: Mountain,
      title: 'Mineração',
      description: 'Monitoramento de detonações e operações subterrâneas com controle preciso de vibrações.',
      useCases: [
        'Controle de vibrações',
        'Segurança ambiental',
        'Conformidade ambiental'
      ],
      color: 'text-orange-400'
    },
    {
      icon: Building2,
      title: 'Construção Civil',
      description: 'Acompanhamento de grandes obras e fundações garantindo a integridade estrutural.',
      useCases: [
        'Demolições controladas',
        'Fundações profundas',
        'Estruturas sensíveis'
      ],
      color: 'text-blue-400'
    },
    {
      icon: Dam,
      title: 'Barragens',
      description: 'Monitoramento de microtremores em barragens para garantir estabilidade e segurança.',
      useCases: [
        'Barragens de rejeito',
        'Hidrelétricas',
        'Estabilidade estrutural'
      ],
      color: 'text-cyan-400'
    },
    {
      icon: Construction,
      title: 'Infraestrutura',
      description: 'Monitoramento de túneis, ferrovias e rodovias para preservar a integridade das estruturas.',
      useCases: [
        'Túneis urbanos',
        'Linhas férreas',
        'Viadutos e pontes'
      ],
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'Energia',
      description: 'Monitoramento em usinas e plataformas de petróleo para operações seguras e eficientes.',
      useCases: [
        'Usinas eólicas',
        'Plataformas offshore',
        'Usinas termoelétricas'
      ],
      color: 'text-yellow-400'
    },
    {
      icon: Factory,
      title: 'Indústria',
      description: 'Monitoramento de vibrações em processos industriais e equipamentos para garantir operações seguras.',
      useCases: [
        'Máquinas pesadas',
        'Processos produtivos',
        'Controle de qualidade'
      ],
      color: 'text-red-400'
    },
    {
      icon: Fuel,
      title: 'Dutos',
      description: 'Monitoramento de gasodutos, minerodutos e oleodutos para prevenção de vazamentos.',
      useCases: [
        'Monitoramento contínuo',
        'Detecção de vazamentos',
        'Manutenção preventiva'
      ],
      color: 'text-green-400'
    },
    {
      icon: Landmark,
      title: 'Patrimônio',
      description: 'Proteção de monumentos e estruturas históricas durante obras e atividades próximas.',
      useCases: [
        'Preservação cultural',
        'Obras próximas',
        'Restauração segura'
      ],
      color: 'text-amber-400'
    },
    {
      icon: Leaf,
      title: 'Meio Ambiente',
      description: 'Monitoramento de impacto ambiental em diversas atividades industriais e urbanas.',
      useCases: [
        'Fracking',
        'Perturbações',
        'Estudos geológicos'
      ],
      color: 'text-emerald-400'
    }
  ]

  const specificApplications = [
    'Antenas',
    'Ativações',
    'Cavernas',
    'Detonações',
    'Fábricas',
    'Máquinas',
    'Pedreiras',
    'Usinas'
  ]

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Conformidade Regulamentar',
      description: 'Garantia de atendimento às normas NBR 9653:2018, DIN 4150 e BS 7385.'
    },
    {
      icon: AlertTriangle,
      title: 'Alertas em Tempo Real',
      description: 'Notificações imediatas quando limites de vibração são ultrapassados.'
    },
    {
      icon: CheckCircle,
      title: 'Relatórios Detalhados',
      description: 'Documentação completa para órgãos ambientais e reguladores.'
    }
  ]

  return (
    <section id="aplicacoes" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Aplicações e <span className="gradient-text">Setores</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nossa tecnologia atende diversos setores, oferecendo soluções precisas 
            para cada necessidade específica de monitoramento.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {applications.map((application, index) => (
            <motion.div
              key={application.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 min-h-[280px] flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  application.color.includes('orange') ? 'bg-orange-500/20' :
                  application.color.includes('blue') ? 'bg-blue-500/20' :
                  application.color.includes('cyan') ? 'bg-cyan-500/20' :
                  application.color.includes('purple') ? 'bg-purple-500/20' :
                  application.color.includes('yellow') ? 'bg-yellow-500/20' :
                  application.color.includes('red') ? 'bg-red-500/20' :
                  application.color.includes('green') ? 'bg-green-500/20' :
                  application.color.includes('amber') ? 'bg-amber-500/20' :
                  application.color.includes('emerald') ? 'bg-emerald-500/20' :
                  'bg-slate-700/50'
                }`}>
                  <application.icon className={`w-6 h-6 ${application.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {application.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                {application.description}
              </p>
              
              <div className="space-y-2 mt-auto">
                {application.useCases.map((useCase, useCaseIndex) => (
                  <div 
                    key={useCaseIndex} 
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <div className={`w-2 h-2 rounded-full ${application.color.replace('text-', 'bg-')}`}></div>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specific Applications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Aplicações <span className="gradient-text">Específicas</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {specificApplications.map((app, index) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 rounded-xl p-4 border border-orange-500/30 hover:border-orange-500/50 hover:from-orange-600/30 hover:to-orange-700/30 transition-all duration-300 text-center group"
              >
                <div className="w-8 h-8 mx-auto mb-2 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                  <Waves className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-sm font-medium text-white">{app}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-950/50 rounded-2xl p-8 border border-slate-700/30"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Benefícios para sua Empresa
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Case Examples */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-orange-600/10 to-orange-700/10 rounded-2xl p-8 border border-orange-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Casos de Sucesso
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mountain className="w-5 h-5 text-orange-500" />
                <h4 className="text-lg font-semibold text-orange-500">
                  Mineração de Grande Porte
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                Monitoramento contínuo em operação próxima a área urbana, 
                garantindo conformidade com limites ambientais.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4" />
                <span>40% redução de custos</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Dam className="w-5 h-5 text-cyan-500" />
                <h4 className="text-lg font-semibold text-cyan-500">
                  Barragem Hidrelétrica
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                Monitoramento estrutural contínuo com alertas em tempo real 
                para garantir a estabilidade da estrutura.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 monitoramento</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-amber-500" />
                <h4 className="text-lg font-semibold text-amber-500">
                  Patrimônio Histórico
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                Proteção de edifícios históricos durante construção de túnel, 
                com relatórios para órgãos de patrimônio.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4" />
                <span>100% conformidade</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
