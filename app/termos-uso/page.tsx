
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertTriangle, Scale, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso - SismoPRO',
  description: 'Termos de Uso dos serviços da SismoPRO',
}

export default function TermosUso() {
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
            <FileText className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Termos de Uso</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Estes Termos de Uso estabelecem as condições gerais para utilização dos serviços da SismoPRO - Soluções em Monitoramento Sísmico.
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
              <Scale className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Ao acessar e utilizar os serviços da SismoPRO, você concorda integralmente com estes Termos de Uso. 
                Se você não concordar com algum destes termos, não utilize nossos serviços.
              </p>
              <p>
                Estes termos constituem um acordo legal entre você e a SismoPRO.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">2. Definições</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>SismoPRO:</strong> Empresa prestadora de serviços de monitoramento sísmico</li>
                <li><strong>Usuário:</strong> Pessoa física ou jurídica que acessa nossos serviços</li>
                <li><strong>Serviços:</strong> Monitoramento sísmico, consultoria técnica, venda e locação de equipamentos</li>
                <li><strong>Plataforma:</strong> Site, aplicações e sistemas da SismoPRO</li>
                <li><strong>Dados:</strong> Informações coletadas através de equipamentos de monitoramento</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">3. Descrição dos Serviços</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>A SismoPRO oferece os seguintes serviços:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Monitoramento Sísmico:</strong> Coleta e análise de dados sísmicos em tempo real</li>
                <li><strong>Consultoria Técnica:</strong> Assessoria especializada em projetos sísmicos</li>
                <li><strong>Venda de Equipamentos:</strong> Fornecimento de equipamentos de monitoramento</li>
                <li><strong>Locação de Equipamentos:</strong> Aluguel de equipamentos para projetos específicos</li>
                <li><strong>Treinamento:</strong> Capacitação técnica para operação de equipamentos</li>
                <li><strong>Relatórios Técnicos:</strong> Elaboração de documentos técnicos especializados</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">4. Responsabilidades do Usuário</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Ao utilizar nossos serviços, você se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer informações precisas e atualizadas</li>
                <li>Utilizar os serviços conforme sua finalidade</li>
                <li>Cumprir todas as leis e regulamentações aplicáveis</li>
                <li>Manter a confidencialidade dos dados de acesso</li>
                <li>Não interferir no funcionamento da plataforma</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
                <li>Reportar qualquer uso indevido ou violação de segurança</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">5. Responsabilidades da SismoPRO</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>A SismoPRO se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer serviços de qualidade e dentro dos padrões técnicos</li>
                <li>Manter a confidencialidade dos dados dos clientes</li>
                <li>Providenciar suporte técnico adequado</li>
                <li>Cumprir prazos acordados contratualmente</li>
                <li>Manter a segurança e integridade dos dados</li>
                <li>Informar sobre alterações nos serviços</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">6. Limitações de Responsabilidade</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>A SismoPRO não se responsabiliza por:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Danos decorrentes do uso inadequado dos equipamentos</li>
                <li>Interrupções de serviço por causas externas (força maior)</li>
                <li>Decisões tomadas com base nos dados fornecidos</li>
                <li>Danos indiretos ou consequenciais</li>
                <li>Perda de dados por fatores externos</li>
                <li>Incompatibilidade com sistemas de terceiros</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">7. Propriedade Intelectual</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Todos os direitos de propriedade intelectual sobre os serviços, software, 
                metodologias e materiais da SismoPRO são de propriedade exclusiva da empresa.
              </p>
              <p>
                É vedado ao usuário reproduzir, distribuir ou modificar qualquer conteúdo 
                sem autorização expressa por escrito.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">8. Pagamentos e Cancelamentos</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p><strong>Pagamentos:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Os valores dos serviços são definidos em proposta comercial</li>
                <li>Pagamentos devem ser realizados conforme cronograma acordado</li>
                <li>Atrasos podem resultar em suspensão dos serviços</li>
              </ul>
              <p><strong>Cancelamentos:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancelamentos devem ser comunicados com 30 dias de antecedência</li>
                <li>Equipamentos locados devem ser devolvidos em perfeito estado</li>
                <li>Serviços já executados não são reembolsáveis</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">9. Confidencialidade</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Ambas as partes se comprometem a manter sigilo sobre informações confidenciais 
                trocadas durante a prestação dos serviços.
              </p>
              <p>
                Os dados coletados durante o monitoramento são de propriedade do cliente, 
                cabendo à SismoPRO apenas o direito de processamento conforme acordado.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">10. Disposições Gerais</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Estes termos são regidos pela legislação brasileira. Qualquer controvérsia 
                será resolvida no foro da comarca de São Paulo/SP.
              </p>
              <p>
                A SismoPRO reserva-se o direito de alterar estes termos mediante notificação 
                prévia de 30 dias.
              </p>
              <p>
                Se alguma disposição destes termos for considerada inválida, as demais 
                permanecerão em vigor.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">11. Contato</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Para esclarecimentos sobre estes termos:</p>
              <div className="bg-slate-800 rounded-lg p-4 space-y-2">
                <p><strong>SismoPRO - Soluções em Monitoramento Sísmico</strong></p>
                <p>Email: juridico@sismopro.xyz</p>
                <p>Telefone: (11) 3456-7890</p>
                <p>Endereço: [Endereço da empresa]</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
