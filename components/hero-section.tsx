
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Activity, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SeismicWaveChart from '@/components/seismic-wave-chart'

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTechnology = () => {
    const element = document.getElementById('tecnologia')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated waves */}
      <div className="absolute inset-0 wave-bg opacity-30"></div>
      
      {/* Animated seismic lines */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 seismic-line opacity-60" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-2/3 left-0 w-full h-0.5 seismic-line opacity-40" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Monitoramento{' '}
              <span className="gradient-text">Sismográfico</span>{' '}
              de Precisão
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Tecnologia italiana de ponta com resolução de 22 bits para 
              monitoramento sismográfico profissional em mineração, construção e indústria.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <Activity className="w-5 h-5 text-orange-500" />
                <span className="font-medium">4 Metodologias</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="font-medium">100h Autonomia</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-5 h-5 text-orange-500" />
                <span className="font-medium">22 Bits Resolução</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToTechnology}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Conhecer Tecnologia
              </Button>
            </motion.div>
          </motion.div>

          {/* Seismic Wave Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-semibold text-white">Monitoramento em Tempo Real</h3>
              </div>
              <SeismicWaveChart />
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <span>4,5Hz</span>
                <span>Resolução: 22 bits</span>
                <span>Status: Ativo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
