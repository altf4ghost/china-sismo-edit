
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

export default function SpecificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [countUp, setCountUp] = useState({
    resolution: 0,
    channels: 0,
    autonomy: 0,
    transdutores: 0
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCountUp({
          resolution: 22,
          channels: 4,
          autonomy: 100,
          transdutores: 3
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [inView])

  // Data for methodology comparison radar chart
  const methodologyData = [
    {
      subject: 'Vibrômetro',
      score: 95,
      fullMark: 100
    },
    {
      subject: 'MASW',
      score: 90,
      fullMark: 100
    },
    {
      subject: 'HVSR',
      score: 92,
      fullMark: 100
    },
    {
      subject: 'HS',
      score: 88,
      fullMark: 100
    },
    {
      subject: 'Refração',
      score: 85,
      fullMark: 100
    },
    {
      subject: 'Monitoramento',
      score: 98,
      fullMark: 100
    }
  ]

  // Data for frequency response
  const frequencyData = [
    { frequency: '0.1Hz', response: 20 },
    { frequency: '1Hz', response: 65 },
    { frequency: '4,5Hz', response: 100 },
    { frequency: '10Hz', response: 95 },
    { frequency: '50Hz', response: 80 },
    { frequency: '100Hz', response: 60 },
    { frequency: '200Hz', response: 40 }
  ]

  const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      if (inView) {
        const timer = setInterval(() => {
          setCurrent(prev => {
            if (prev < value) {
              return Math.min(prev + (value / 30), value)
            }
            return value
          })
        }, 50)
        return () => clearInterval(timer)
      }
    }, [inView, value])

    return <span>{Math.floor(current)}{suffix}</span>
  }

  return (
    <section id="especificacoes" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Especificações <span className="gradient-text">Técnicas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dados técnicos detalhados do equipamento Marahvib 2.0, 
            demonstrando sua superioridade tecnológica.
          </p>
        </motion.div>

        {/* Key Specs with Animated Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <AnimatedNumber value={22} />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Bits de Resolução
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <AnimatedNumber value={4} />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Canais Simultâneos
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <AnimatedNumber value={100} suffix="h" />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Autonomia Bateria
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              <AnimatedNumber value={3} />
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">
              Transdutores Internos 4,5Hz
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Methodology Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Capacidades por Metodologia
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={methodologyData}>
                  <PolarGrid gridType="polygon" stroke="#374151" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fontSize: 11, fill: '#9CA3AF' }}
                  />
                  <PolarRadiusAxis 
                    domain={[0, 100]} 
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Capacidade"
                    dataKey="score"
                    stroke="#FF6A00"
                    fill="#FF6A00"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Avaliação da eficiência em cada metodologia de análise
            </p>
          </motion.div>

          {/* Frequency Response Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Resposta em Frequência
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={frequencyData}>
                  <XAxis 
                    dataKey="frequency" 
                    tick={{ fontSize: 10, fill: '#9CA3AF' }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: '#9CA3AF' }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1E293B',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}
                  />
                  <Bar 
                    dataKey="response" 
                    fill="#FF6A00"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Sensibilidade dos geofones por faixa de frequência (%)
            </p>
          </motion.div>
        </div>

        {/* Methodologies Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-slate-900/30 rounded-2xl p-8 border border-slate-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Metodologias <span className="gradient-text">Disponíveis</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-slate-800/30 p-6 rounded-xl border border-orange-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2L12 22"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-orange-500">
                  HVSR (Horizontal to Vertical Spectral Ratio)
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Análise da razão espectral H/V para caracterização do subsolo e identificação de frequências de ressonância
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-slate-800/30 p-6 rounded-xl border border-blue-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2v20M2 12h20"/>
                    <path d="M8 8l8 8M16 8l-8 8"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-blue-500">
                  MASW (Multichannel Analysis of Surface Waves)
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Análise multicanal de ondas superficiais para determinação do perfil de velocidades de ondas S
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-slate-800/30 p-6 rounded-xl border border-green-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12h18m-9-9v18"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-green-500">
                  Refração Sísmica
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Método geofísico para mapeamento de camadas do subsolo através da análise de tempos de chegada das ondas P
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-slate-800/30 p-6 rounded-xl border border-purple-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-purple-500">
                  Vibrômetro
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Monitoramento contínuo de vibrações para controle de impactos em estruturas e conformidade com normas
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
            <h4 className="text-lg font-semibold text-orange-500 mb-4">
              Aquisição de Dados
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• 369 amostras/segundo (padrão)</li>
              <li>• 1112 amostras/segundo (turbo)</li>
              <li>• Armazenamento em cartão SD</li>
              <li>• Trigger automático inteligente</li>
            </ul>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
            <h4 className="text-lg font-semibold text-orange-500 mb-4">
              Conectividade
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• USB para transferência</li>
              <li>• 4 canais externos</li>
              <li>• Conexão de trigger</li>
              <li>• Transmissão remota</li>
            </ul>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
            <h4 className="text-lg font-semibold text-orange-500 mb-4">
              Precisão e Controle
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• GPS &lt; 0,1ms precisão</li>
              <li>• Bolha niveladora integrada</li>
              <li>• Interface 4 teclas</li>
              <li>• Display LCD 2.7"</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
