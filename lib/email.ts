
import nodemailer from 'nodemailer'

// Create transporter with robust configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'sismopro.system@gmail.com',
    pass: process.env.EMAIL_PASS || ''
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateLimit: 14 // messages per second
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail(options: EmailOptions, retries = 3): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Verify transporter connection before sending
      await transporter.verify()
      
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || `"SismoPRO" <${process.env.EMAIL_USER || 'sismopro.system@gmail.com'}>`,
        replyTo: process.env.EMAIL_TO || 'comercial@sismopro.xyz',
        ...options
      })
      
      console.log(`✅ Email sent successfully (attempt ${attempt}):`, info.messageId)
      return { success: true, messageId: info.messageId }
      
    } catch (error) {
      console.error(`❌ Email sending failed (attempt ${attempt}/${retries}):`, error)
      
      if (attempt === retries) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return { success: false, error: errorMessage }
      }
      
      // Wait before retrying (exponential backoff)
      const waitTime = Math.pow(2, attempt) * 1000
      console.log(`⏳ Retrying in ${waitTime}ms...`)
      await delay(waitTime)
    }
  }
  
  return { success: false, error: 'Max retries exceeded' }
}

export function generateBudgetConfirmationEmail(data: any) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmação de Orçamento - SismoPRO</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px 20px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .header p { color: #e5e7eb; margin: 10px 0 0 0; }
        .content { padding: 30px 20px; }
        .section { margin-bottom: 25px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6; }
        .section h2 { color: #1e40af; margin-top: 0; font-size: 18px; }
        .info-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .info-label { font-weight: bold; color: #374151; }
        .info-value { color: #6b7280; }
        .services { background-color: #dbeafe; padding: 15px; border-radius: 6px; margin: 15px 0; }
        .service-item { background-color: white; padding: 8px 12px; margin: 5px 0; border-radius: 4px; border-left: 3px solid #3b82f6; }
        .footer { background-color: #1f2937; color: #9ca3af; padding: 20px; text-align: center; }
        .footer a { color: #60a5fa; text-decoration: none; }
        .status-badge { background-color: #fbbf24; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; }
        @media (max-width: 600px) {
          .info-row { flex-direction: column; }
          .container { margin: 0; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SismoPRO</h1>
          <p>Confirmação de Solicitação de Orçamento</p>
        </div>
        
        <div class="content">
          <h2>Olá, ${data.contactName}!</h2>
          <p>Recebemos sua solicitação de orçamento e nossa equipe técnica entrará em contato em breve.</p>
          
          <div class="section">
            <h2>📋 Dados da Empresa</h2>
            <div class="info-row">
              <span class="info-label">Empresa:</span>
              <span class="info-value">${data.companyName}</span>
            </div>
            ${data.cnpj ? `
            <div class="info-row">
              <span class="info-label">CNPJ:</span>
              <span class="info-value">${data.cnpj}</span>
            </div>
            ` : ''}
            <div class="info-row">
              <span class="info-label">Contato:</span>
              <span class="info-value">${data.contactName}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">${data.email}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Telefone:</span>
              <span class="info-value">${data.phone}</span>
            </div>
          </div>
          
          <div class="section">
            <h2>🎯 Dados do Projeto</h2>
            <div class="info-row">
              <span class="info-label">Tipo de Projeto:</span>
              <span class="info-value">${data.projectType}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Local:</span>
              <span class="info-value">${data.location}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Período de Monitoramento:</span>
              <span class="info-value">${data.monitoringPeriod}</span>
            </div>
            ${data.startDate ? `
            <div class="info-row">
              <span class="info-label">Data de Início:</span>
              <span class="info-value">${new Date(data.startDate).toLocaleDateString('pt-BR')}</span>
            </div>
            ` : ''}
          </div>
          
          <div class="section">
            <h2>⚙️ Serviços Solicitados</h2>
            <div class="services">
              ${data.services.map((service: string) => `<div class="service-item">• ${service}</div>`).join('')}
            </div>
          </div>
          
          ${data.projectDetails ? `
          <div class="section">
            <h2>📝 Detalhes do Projeto</h2>
            <p style="background-color: white; padding: 15px; border-radius: 6px; margin: 0;">${data.projectDetails}</p>
          </div>
          ` : ''}
          
          <div class="section">
            <h2>⏱️ Próximos Passos</h2>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Nossa equipe técnica analisará sua solicitação</li>
              <li>Entraremos em contato em até 24 horas úteis</li>
              <li>Agendaremos uma reunião técnica, se necessário</li>
              <li>Elaboraremos uma proposta personalizada</li>
            </ul>
          </div>
          
          <div style="background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #047857; margin-top: 0;">📞 Precisa de Atendimento Imediato?</h3>
            <p style="margin: 10px 0;">Entre em contato conosco:</p>
            <p style="margin: 5px 0;"><strong>Telefone:</strong> (11) 3456-7890</p>
            <p style="margin: 5px 0;"><strong>WhatsApp:</strong> (11) 99988-7766</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> comercial@sismopro.xyz</p>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>SismoPRO - Soluções Profissionais em Monitoramento Sísmico</strong></p>
          <p>Líder em tecnologia de monitoramento sísmico no Brasil</p>
          <p>
            <a href="https://sismopro.xyz">www.sismopro.xyz</a> | 
            <a href="mailto:comercial@sismopro.xyz">comercial@sismopro.xyz</a>
          </p>
          <p style="font-size: 12px; color: #6b7280; margin-top: 15px;">
            Este email foi enviado automaticamente. Por favor, não responda diretamente.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
  
  const text = `
    SismoPRO - Confirmação de Orçamento
    
    Olá, ${data.contactName}!
    
    Recebemos sua solicitação de orçamento para ${data.companyName}.
    
    Dados do Projeto:
    - Tipo: ${data.projectType}
    - Local: ${data.location}
    - Período: ${data.monitoringPeriod}
    
    Serviços: ${data.services.join(', ')}
    
    Nossa equipe entrará em contato em até 24 horas úteis.
    
    Atenciosamente,
    Equipe SismoPRO
    
    Contato: (11) 3456-7890
    Email: comercial@sismopro.xyz
    Site: https://sismopro.xyz
  `
  
  return { html, text }
}

export function generateAdminNotificationEmail(data: any) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background-color: #1e40af; padding: 20px; text-align: center; color: white; }
        .content { padding: 20px; }
        .section { margin-bottom: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; }
        .urgent { border-left: 4px solid #ef4444; background-color: #fef2f2; }
        .info-row { margin: 8px 0; }
        .label { font-weight: bold; color: #374151; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 Nova Solicitação de Orçamento</h1>
          <p>SismoPRO - Admin Dashboard</p>
        </div>
        
        <div class="content">
          <div class="section urgent">
            <h2>⚡ Ação Necessária</h2>
            <p>Uma nova solicitação de orçamento foi recebida e requer sua atenção.</p>
          </div>
          
          <div class="section">
            <h3>📋 Informações da Empresa</h3>
            <div class="info-row"><span class="label">Empresa:</span> ${data.companyName}</div>
            <div class="info-row"><span class="label">Contato:</span> ${data.contactName}</div>
            <div class="info-row"><span class="label">Email:</span> ${data.email}</div>
            <div class="info-row"><span class="label">Telefone:</span> ${data.phone}</div>
          </div>
          
          <div class="section">
            <h3>🎯 Projeto</h3>
            <div class="info-row"><span class="label">Tipo:</span> ${data.projectType}</div>
            <div class="info-row"><span class="label">Local:</span> ${data.location}</div>
            <div class="info-row"><span class="label">Serviços:</span> ${data.services.join(', ')}</div>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://sismopro.xyz/admin/dashboard" 
               style="background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Ver no Dashboard Admin
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
  
  return { html, text: `Nova solicitação de orçamento de ${data.companyName} - ${data.contactName}` }
}
