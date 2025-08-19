
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Cookie, Settings, X } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: true,
    marketing: true,
    functional: true
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setShowBanner(true)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(cookieConsent)
        setPreferences(savedPreferences)
        loadScripts(savedPreferences)
      } catch (error) {
        setShowBanner(true)
      }
    }
  }, [])

  const loadScripts = (prefs: typeof preferences) => {
    // Google Analytics
    if (prefs.analytics && typeof window !== 'undefined') {
      // Initialize Google Analytics
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted'
      })
    }

    // Marketing scripts
    if (prefs.marketing) {
      // Load marketing scripts here
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    loadScripts(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(necessaryOnly)
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly))
    loadScripts(necessaryOnly)
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    loadScripts(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const updatePreference = (key: keyof typeof preferences, value: boolean) => {
    if (key === 'necessary') return // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700"
        >
          <div className="container mx-auto max-w-6xl">
            {!showSettings ? (
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-start space-x-3 flex-1">
                  <Cookie className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Utilizamos Cookies
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Usamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. 
                      Ao continuar navegando, você concorda com nossa{' '}
                      <Link href="/politica-cookies" className="text-blue-400 hover:text-blue-300 underline">
                        Política de Cookies
                      </Link>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                    className="border-slate-600 text-white hover:bg-slate-800"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Configurar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={acceptNecessary}
                    className="border-slate-600 text-white hover:bg-slate-800"
                  >
                    Apenas Necessários
                  </Button>
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Aceitar Todos
                  </Button>
                </div>
              </div>
            ) : (
              <Card className="bg-slate-800 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">
                      Configurações de Cookies
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Cookies Necessários</h4>
                        <p className="text-gray-400 text-sm">
                          Essenciais para o funcionamento do site
                        </p>
                      </div>
                      <div className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                        Sempre Ativo
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Cookies de Análise</h4>
                        <p className="text-gray-400 text-sm">
                          Ajudam a entender como os visitantes usam o site
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => updatePreference('analytics', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Cookies de Marketing</h4>
                        <p className="text-gray-400 text-sm">
                          Utilizados para personalizar anúncios
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => updatePreference('marketing', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Cookies Funcionais</h4>
                        <p className="text-gray-400 text-sm">
                          Permitem funcionalidades avançadas do site
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) => updatePreference('functional', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-6">
                    <Button
                      variant="outline"
                      onClick={acceptNecessary}
                      className="border-slate-600 text-white hover:bg-slate-700"
                    >
                      Apenas Necessários
                    </Button>
                    <Button
                      onClick={savePreferences}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Salvar Preferências
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
