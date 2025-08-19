
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Cookie, Settings, Eye, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Cookies - SismoPRO',
  description: 'Política de Cookies da SismoPRO',
}

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Site
          </Link>
          
          <div className="flex items-center mb-6">
            <Cookie className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Política de Cookies</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Esta Política de Cookies explica como a SismoPRO utiliza cookies e tecnologias similares em nosso site.
          </p>
          
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mt-6">
            <p className="text-blue-300 text-sm">
              <strong>Última atualização:</strong> 08 de Janeiro de 2025
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center mb-4">
              <Cookie className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">1. O que são Cookies?</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Cookies são pequenos arquivos de texto enviados pelo site ao seu navegador e 
                armazenados no seu dispositivo (computador, tablet ou celular).
              </p>
              <p>
                Eles permitem que o site reconheça seu dispositivo e armazene informações sobre 
                suas preferências e ações anteriores.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">2. Como Utilizamos Cookies</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Utilizamos cookies para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Garantir o funcionamento adequado do site</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como você utiliza nosso site</li>
                <li>Melhorar a experiência do usuário</li>
                <li>Fornecer conteúdo personalizado</li>
                <li>Medir a eficácia de nossas campanhas</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">3. Tipos de Cookies</h2>
            </div>
            <div className="text-gray-300 space-y-6">
              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Cookies Essenciais</h3>
                <p className="text-sm">
                  Necessários para o funcionamento básico do site. Não podem ser desativados.
                </p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Cookies de sessão e autenticação</li>
                  <li>Cookies de segurança</li>
                  <li>Cookies de funcionalidade básica</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Cookies de Funcionalidade</h3>
                <p className="text-sm">
                  Melhoram a experiência do usuário lembrando preferências e configurações.
                </p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Preferências de idioma</li>
                  <li>Configurações de visualização</li>
                  <li>Informações de formulários</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Cookies de Analytics</h3>
                <p className="text-sm">
                  Coletam informações sobre como o site é utilizado para melhorias.
                </p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Google Analytics</li>
                  <li>Métricas de performance</li>
                  <li>Dados de navegação</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Cookies de Marketing</h3>
                <p className="text-sm">
                  Utilizados para exibir conteúdo personalizado e medir campanhas.
                </p>
                <ul className="list-disc list-inside text-sm mt-2 ml-4">
                  <li>Remarketing</li>
                  <li>Publicidade direcionada</li>
                  <li>Análise de conversões</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">4. Cookies de Terceiros</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Nosso site pode utilizar cookies de terceiros para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Análise de tráfego e comportamento</li>
                <li><strong>Google Maps:</strong> Funcionalidade de mapas</li>
                <li><strong>YouTube:</strong> Reprodução de vídeos incorporados</li>
                <li><strong>Redes Sociais:</strong> Integração com plataformas sociais</li>
              </ul>
              <p>
                Estes cookies são controlados pelos respectivos terceiros e sujeitos às suas próprias políticas de privacidade.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">5. Gerenciamento de Cookies</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Você pode gerenciar cookies através de:</p>
              
              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Configurações do Navegador</h3>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li><strong>Chrome:</strong> Configurações → Privacidade e Segurança → Cookies</li>
                  <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                  <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                  <li><strong>Edge:</strong> Configurações → Privacidade → Cookies</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Opt-out de Analytics</h3>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Opt-out Browser Add-on</a></li>
                  <li>Configurações de anúncios: <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Google Ads Settings</a></li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Atenção:</strong> Desativar cookies pode afetar a funcionalidade do site e sua experiência de navegação.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">6. Tempo de Armazenamento</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Os cookies são armazenados por diferentes períodos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies de Sessão:</strong> Excluídos ao fechar o navegador</li>
                <li><strong>Cookies Persistentes:</strong> Armazenados por períodos específicos</li>
                <li><strong>Cookies Essenciais:</strong> Até 1 ano</li>
                <li><strong>Cookies de Analytics:</strong> Até 2 anos</li>
                <li><strong>Cookies de Marketing:</strong> Até 1 ano</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">7. Alterações nesta Política</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Esta Política de Cookies pode ser atualizada periodicamente. As alterações serão 
                comunicadas através do site.
              </p>
              <p>
                Recomendamos que revise esta política regularmente para estar sempre informado 
                sobre como utilizamos cookies.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Cookie className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">8. Contato</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Para dúvidas sobre cookies:</p>
              <div className="bg-slate-800 rounded-lg p-4 space-y-2">
                <p>Email: privacidade@sismopro.xyz</p>
                <p>Telefone: (11) 3456-7890</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
