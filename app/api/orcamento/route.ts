
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { sendEmail, generateBudgetConfirmationEmail, generateAdminNotificationEmail } from '@/lib/email'

export const dynamic = 'force-dynamic'

const budgetRequestSchema = z.object({
  companyName: z.string().min(1, 'Nome da empresa é obrigatório'),
  cnpj: z.string().optional(),
  contactName: z.string().min(1, 'Nome do contato é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(1, 'Telefone é obrigatório'),
  projectType: z.string().min(1, 'Tipo de projeto é obrigatório'),
  location: z.string().min(1, 'Local é obrigatório'),
  monitoringPeriod: z.string().min(1, 'Período de monitoramento é obrigatório'),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  services: z.array(z.string()).min(1, 'Selecione pelo menos um serviço'),
  projectDetails: z.string().optional(),
  specialRequirements: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate input
    const validatedData = budgetRequestSchema.parse(body)
    
    // Save to database
    const budgetRequest = await prisma.budgetRequest.create({
      data: {
        ...validatedData,
        startDate: validatedData.startDate ? new Date(validatedData.startDate) : null,
        endDate: validatedData.endDate ? new Date(validatedData.endDate) : null,
        status: 'pending',
        priority: 'normal'
      }
    })

    // Send confirmation email to customer
    let customerEmailResult: { success: boolean; messageId?: string; error?: string } = { success: false, error: 'Not sent' }
    try {
      console.log(`📧 Sending confirmation email to customer: ${validatedData.email}`)
      const customerEmail = generateBudgetConfirmationEmail(validatedData)
      customerEmailResult = await sendEmail({
        to: validatedData.email,
        subject: 'Confirmação de Solicitação de Orçamento - SismoPRO',
        html: customerEmail.html,
        text: customerEmail.text
      })
      
      if (customerEmailResult.success) {
        console.log('✅ Customer email sent successfully')
      } else {
        console.error('❌ Customer email failed:', customerEmailResult.error)
      }
    } catch (emailError) {
      console.error('❌ Error sending customer email:', emailError)
      customerEmailResult = { success: false, error: emailError instanceof Error ? emailError.message : 'Unknown error' }
    }

    // Send notification email to admin
    let adminEmailResult: { success: boolean; messageId?: string; error?: string } = { success: false, error: 'Not sent' }
    try {
      const adminEmail = process.env.EMAIL_TO || 'comercial@sismopro.xyz'
      console.log(`📧 Sending notification email to admin: ${adminEmail}`)
      const adminEmailTemplate = generateAdminNotificationEmail(validatedData)
      adminEmailResult = await sendEmail({
        to: adminEmail,
        subject: `🚨 Nova Solicitação de Orçamento - ${validatedData.companyName}`,
        html: adminEmailTemplate.html,
        text: adminEmailTemplate.text
      })
      
      if (adminEmailResult.success) {
        console.log('✅ Admin email sent successfully')
      } else {
        console.error('❌ Admin email failed:', adminEmailResult.error)
      }
    } catch (emailError) {
      console.error('❌ Error sending admin email:', emailError)
      adminEmailResult = { success: false, error: emailError instanceof Error ? emailError.message : 'Unknown error' }
    }
    
    return NextResponse.json(
      { 
        message: 'Solicitação enviada com sucesso! Você receberá uma confirmação por email.',
        id: budgetRequest.id 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Dados inválidos',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }
    
    console.error('Budget request error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
