
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade - SismoPRO',
  description: 'Política de Privacidade da SismoPRO em conformidade com a LGPD',
}

export default function PoliticaPrivacidade() {
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
            <Shield className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-4xl font-bold text-white">Política de Privacidade</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Esta Política de Privacidade descreve como a SismoPRO coleta, usa e protege suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
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
              <Eye className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">1. Informações que Coletamos</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Coletamos as seguintes informações quando você utiliza nossos serviços:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dados de Identificação:</strong> Nome, e-mail, telefone, CNPJ/CPF</li>
                <li><strong>Dados Profissionais:</strong> Empresa, cargo, área de atuação</li>
                <li><strong>Dados de Projetos:</strong> Informações sobre projetos de monitoramento sísmico</li>
                <li><strong>Dados de Navegação:</strong> Cookies, IP, páginas visitadas, tempo de sessão</li>
                <li><strong>Dados de Comunicação:</strong> Mensagens enviadas através de formulários</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">2. Como Utilizamos suas Informações</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Processar e responder a suas solicitações de orçamento</li>
                <li>Fornecer suporte técnico e atendimento ao cliente</li>
                <li>Enviar informações sobre nossos produtos e serviços</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">3. Base Legal para Tratamento</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Fundamentamos o tratamento de dados pessoais nas seguintes bases legais:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consentimento:</strong> Para envio de comunicações promocionais</li>
                <li><strong>Execução de contrato:</strong> Para prestação de serviços contratados</li>
                <li><strong>Interesse legítimo:</strong> Para melhorias dos serviços e segurança</li>
                <li><strong>Cumprimento de obrigação legal:</strong> Para atendimento às normas regulamentares</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">4. Compartilhamento de Dados</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Não compartilhamos suas informações pessoais com terceiros, exceto:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Com prestadores de serviços essenciais (hospedagem, e-mail, analytics)</li>
                <li>Quando exigido por lei ou autoridades competentes</li>
                <li>Para proteção dos direitos, propriedade ou segurança da empresa</li>
                <li>Com seu consentimento explícito</li>
              </ul>
              <p>Todos os terceiros são contratualmente obrigados a proteger suas informações.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">5. Seus Direitos</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Confirmação:</strong> Saber se tratamos seus dados</li>
                <li><strong>Acesso:</strong> Obter cópia dos seus dados</li>
                <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou incorretos</li>
                <li><strong>Exclusão:</strong> Solicitar exclusão dos dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento em certas situações</li>
                <li><strong>Revisão:</strong> Solicitar revisão de decisões automatizadas</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">6. Segurança dos Dados</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Implementamos medidas de segurança técnicas e organizacionais:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso e autenticação</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares e seguros</li>
                <li>Treinamento da equipe sobre proteção de dados</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">7. Retenção de Dados</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Mantemos seus dados pelo tempo necessário para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cumprir a finalidade para qual foram coletados</li>
                <li>Atender obrigações legais e regulatórias</li>
                <li>Exercer direitos em processos judiciais</li>
              </ul>
              <p>Após esse período, os dados são excluídos de forma segura.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">8. Contato</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta política:</p>
              <div className="bg-slate-800 rounded-lg p-4 space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Email: privacidade@sismopro.xyz</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Telefone: (11) 3456-7890</span>
                </div>
                <p className="text-sm text-gray-400">
                  Prazo de resposta: até 15 dias úteis
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-2xl font-bold text-white">9. Alterações</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                Esta política pode ser alterada periodicamente. Alterações significativas serão comunicadas através do site e/ou por e-mail.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
