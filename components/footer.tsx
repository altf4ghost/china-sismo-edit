
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">SismoPRO</h3>
            <p className="text-gray-300 mb-6">
              Líder em soluções de monitoramento sísmico no Brasil, oferecendo tecnologia de ponta e consultoria especializada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/sismopro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/sismopro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@sismopro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Monitoramento em Tempo Real
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Locação de Equipamentos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Consultoria Técnica
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Relatórios Personalizados
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Treinamento da Equipe
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Informações Legais</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/politica-privacidade" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">São Paulo, SP</p>
                  <p className="text-gray-400 text-sm">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(11) 9999-9999</p>
                  <p className="text-gray-400 text-sm">WhatsApp: (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">comercial@sismopro.xyz</p>
                  <p className="text-gray-400 text-sm">suporte@sismopro.xyz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg - Sex: 8h às 18h</p>
                  <p className="text-gray-400 text-sm">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SismoPRO. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Desenvolvido com tecnologia de ponta para monitoramento sísmico
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
