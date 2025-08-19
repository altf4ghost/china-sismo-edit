
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Award, Globe, Users, Zap, Target, Lightbulb, Shield, Activity } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [animatedValues, setAnimatedValues] = useState({
    precision: 0,
    resolution: 0,
    clients: 0,
    autonomy: 0
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedValues({
          precision: 100,
          resolution: 22,
          clients: 500,
          autonomy: 100
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const AnimatedNumber = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      if (inView) {
        const timer = setInterval(() => {
          setCurrent(prev => {
            if (prev < value) {
              return Math.min(prev + (value / 20), value)
            }
            return value
          })
        }, 50)
        return () => clearInterval(timer)
      }
    }, [inView, value])

    return <span>{prefix}{Math.floor(current)}{suffix}</span>
  }

  const stats = [
    { 
      icon: Award, 
      label: 'Taxa de amostragem', 
      value: 1112,
      suffix: ' Hz/s',
      color: 'text-orange-500',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-500/30'
    },
    { 
      icon: Activity, 
      label: 'Resolução Superior', 
      value: animatedValues.resolution,
      suffix: ' bits',
      color: 'text-blue-500',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    { 
      icon: Users, 
      label: 'RBC Calibração', 
      value: 'RBC',
      suffix: '',
      prefix: '',
      color: 'text-green-500',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30'
    },
    { 
      icon: Zap, 
      label: 'Autonomia Bateria', 
      value: animatedValues.autonomy,
      suffix: 'h',
      color: 'text-purple-500',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Precisão Garantida',
      description: 'Tecnologia italiana com resolução de 22 bits para máxima precisão em medições sismográficas.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-600/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Target,
      title: 'Versatilidade Total',
      description: '4 metodologias integradas em um único equipamento para análises completas do terreno.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Globe,
      title: 'Conectividade 5G',
      description: 'Monitoramento remoto 24/7 com transmissão em tempo real e alertas automáticos.',
      color: 'text-green-500',
      bgColor: 'bg-green-600/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Contínua',
      description: 'Atualização constante de firmware e novas funcionalidades via software.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-600/10',
      borderColor: 'border-purple-500/20'
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Sobre a <span className="gradient-text">SismoPRO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Especialistas em monitoramento sismográfico remoto e offline, 
            oferecendo soluções precisas e confiáveis para empresas como pedreiras, minerações, construtoras e indústrias.
          </p>
        </motion.div>

        {/* Stats Grid Modernizado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`bg-slate-900/50 p-6 rounded-xl border ${stat.borderColor} text-center hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {typeof stat.value === 'string' ? stat.value : <AnimatedNumber value={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Modernizado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-7 h-7 text-orange-500 mr-3" />
                Tecnologia Italiana de Precisão
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Nossa empresa utiliza o revolucionário equipamento <strong className="text-orange-500">Marahvib 2.0</strong>, 
                  um mini sismógrafo multifuncional desenvolvido na Itália com tecnologia de última geração.
                </p>
                <p>
                  Com resolução de <strong className="text-orange-500">22 bits</strong> e capacidade para 
                  <strong className="text-orange-500"> 4 metodologias diferentes</strong> de análise sísmica, 
                  oferecemos precisão superior aos concorrentes do mercado.
                </p>
                <p>
                  Nosso compromisso é fornecer dados confiáveis e análises precisas para garantir 
                  a segurança e conformidade regulamentar de seus projetos.
                </p>
              </div>
            </div>

            {/* Mission & Vision Modernizados */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-orange-500/30 hover:bg-slate-900/70 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-orange-500">Nossa Missão</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fornecer soluções de monitoramento sismográfico de alta precisão, 
                  garantindo segurança e conformidade em projetos industriais.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-blue-500/30 hover:bg-slate-900/70 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-500">Nossa Visão</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ser referência nacional em monitoramento sismográfico, 
                  utilizando tecnologia italiana para elevar padrões do setor.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className={`bg-slate-900/50 p-6 rounded-xl border ${feature.borderColor} hover:bg-slate-900/70 transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${feature.color} mb-2`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
