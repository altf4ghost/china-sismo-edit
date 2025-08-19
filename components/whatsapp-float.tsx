
'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "5511999999999" // Número da SismoPRO
  const defaultMessage = "Olá! Gostaria de mais informações sobre os serviços de monitoramento sísmico da SismoPRO."

  const quickMessages = [
    {
      title: "Solicitar Orçamento",
      message: "Olá! Gostaria de solicitar um orçamento para serviços de monitoramento sísmico."
    },
    {
      title: "Suporte Técnico",
      message: "Olá! Preciso de suporte técnico para equipamentos da SismoPRO."
    },
    {
      title: "Informações Gerais",
      message: "Olá! Gostaria de mais informações sobre os serviços da SismoPRO."
    },
    {
      title: "Consultoria",
      message: "Olá! Tenho interesse em consultoria especializada em monitoramento sísmico."
    }
  ]

  const openWhatsApp = (message: string = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 z-40 w-80 md:w-96"
          >
            <Card className="bg-slate-900 border-slate-700 shadow-2xl">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <div>
                      <CardTitle className="text-lg">SismoPRO</CardTitle>
                      <p className="text-sm opacity-90">Suporte via WhatsApp</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-green-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-300 text-sm mb-4">
                  Olá! Como podemos ajudá-lo hoje? Escolha uma opção rápida ou envie sua mensagem:
                </p>
                
                <div className="space-y-2">
                  {quickMessages.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left justify-start border-slate-600 text-white hover:bg-slate-800 text-sm"
                      onClick={() => openWhatsApp(item.message)}
                    >
                      {item.title}
                    </Button>
                  ))}
                  
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                    onClick={() => openWhatsApp()}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Iniciar Conversa
                  </Button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-xs text-gray-400 text-center">
                    Horário de atendimento: Segunda a Sexta, 8h às 18h
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </motion.div>
    </>
  )
}
