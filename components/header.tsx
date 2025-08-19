
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToSection('inicio')
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">SismoPRO</span>
              <Activity className="w-5 h-5 text-orange-500 floating-icon" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('tecnologia')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Tecnologia
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('aplicacoes')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Aplicações
            </button>
            <button
              onClick={() => scrollToSection('orcamento')}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              Orçamento
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => window.location.href = 'https://www.sismopro.pro'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Dashboard
            </Button>
            <Button 
              onClick={() => scrollToSection('orcamento')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-orange-500 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('tecnologia')}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Tecnologia
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('aplicacoes')}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Aplicações
              </button>
              <button
                onClick={() => scrollToSection('orcamento')}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-left"
              >
                Orçamento
              </button>
              <div className="space-y-3 pt-4">
                <Button 
                  onClick={() => {
                    window.location.href = 'https://www.sismopro.pro'
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg w-full"
                >
                  Dashboard
                </Button>
                <Button 
                  onClick={() => {
                    scrollToSection('orcamento')
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg w-full"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
