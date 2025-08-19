
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Building2, Pickaxe, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    id: 1,
    name: "Carlos Roberto Silva",
    position: "Engenheiro de Obras",
    company: "Construtora Pedra Fundamental",
    rating: 5,
    text: "O monitoramento sísmico da SismoPRO foi essencial para nossa obra próxima ao metrô. A precisão dos dados e o suporte técnico excepcional nos permitiram completar o projeto sem intercorrências.",
    icon: Building2,
    industry: "Construção Civil"
  },
  {
    id: 2,
    name: "Ana Paula Santos",
    position: "Gerente de Segurança",
    company: "Mineração Vale Verde",
    rating: 5,
    text: "Utilizamos os equipamentos da SismoPRO há 3 anos em nossas operações de desmonte. A confiabilidade e a facilidade de uso são impressionantes. Recomendo fortemente!",
    icon: Pickaxe,
    industry: "Mineração"
  },
  {
    id: 3,
    name: "José Eduardo Martins",
    position: "Diretor de Projetos",
    company: "Infraestrutura Brasil",
    rating: 5,
    text: "A consultoria especializada da SismoPRO fez toda a diferença em nosso projeto de túnel. Os relatórios detalhados e a análise precisa nos deram a segurança necessária para prosseguir.",
    icon: Wrench,
    industry: "Infraestrutura"
  },
  {
    id: 4,
    name: "Maria Fernanda Costa",
    position: "Coordenadora Ambiental",
    company: "EcoMineral Ltda",
    rating: 5,
    text: "O sistema de monitoramento em tempo real da SismoPRO nos ajudou a manter total conformidade com as regulamentações ambientais. Excelente investimento!",
    icon: Building2,
    industry: "Meio Ambiente"
  },
  {
    id: 5,
    name: "Roberto Almeida",
    position: "Supervisor de Operações",
    company: "Pedreira São Paulo",
    rating: 5,
    text: "Com mais de 20 anos na área, posso afirmar que os equipamentos da SismoPRO são os mais confiáveis que já utilizei. A assistência técnica é nota 10!",
    icon: Pickaxe,
    industry: "Mineração"
  },
  {
    id: 6,
    name: "Luiza Oliveira",
    position: "Engenheira Civil",
    company: "Construções Modernas",
    rating: 5,
    text: "O curso de treinamento oferecido pela SismoPRO foi fundamental para nossa equipe. Agora operamos com total segurança e confiança nos equipamentos.",
    icon: Building2,
    industry: "Construção"
  }
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A confiança de nossos clientes é nosso maior patrimônio. Veja depoimentos reais de empresas que confiam na SismoPRO.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-6 h-6 text-blue-400 mr-2" />
                      <div className="flex">{renderStars(testimonial.rating)}</div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <Avatar className="w-12 h-12 bg-blue-600 mr-4">
                        <AvatarFallback className="bg-blue-600 text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-400 text-xs">
                          {testimonial.position}
                        </p>
                        <div className="flex items-center mt-1">
                          <IconComponent className="w-3 h-3 text-gray-400 mr-1" />
                          <p className="text-gray-400 text-xs">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
