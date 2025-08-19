
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'comercial@sismopro.xyz' },
    update: {},
    create: {
      email: 'comercial@sismopro.xyz',
      name: 'Administrador SismoPRO',
      password: hashedPassword,
      role: 'admin'
    }
  })

  console.log('✅ Usuário admin criado:', adminUser.email)

  // Create sample testimonials
  const testimonials = [
    {
      name: "Carlos Roberto Silva",
      position: "Engenheiro de Obras",
      company: "Construtora Pedra Fundamental",
      industry: "Construção Civil",
      rating: 5,
      text: "O monitoramento sísmico da SismoPRO foi essencial para nossa obra próxima ao metrô. A precisão dos dados e o suporte técnico excepcional nos permitiram completar o projeto sem intercorrências.",
      active: true,
      order: 1
    },
    {
      name: "Ana Paula Santos",
      position: "Gerente de Segurança",
      company: "Mineração Vale Verde",
      industry: "Mineração",
      rating: 5,
      text: "Utilizamos os equipamentos da SismoPRO há 3 anos em nossas operações de desmonte. A confiabilidade e a facilidade de uso são impressionantes. Recomendo fortemente!",
      active: true,
      order: 2
    },
    {
      name: "José Eduardo Martins",
      position: "Diretor de Projetos",
      company: "Infraestrutura Brasil",
      industry: "Infraestrutura",
      rating: 5,
      text: "A consultoria especializada da SismoPRO fez toda a diferença em nosso projeto de túnel. Os relatórios detalhados e a análise precisa nos deram a segurança necessária para prosseguir.",
      active: true,
      order: 3
    },
    {
      name: "Maria Fernanda Costa",
      position: "Coordenadora Ambiental",
      company: "EcoMineral Ltda",
      industry: "Meio Ambiente",
      rating: 5,
      text: "O sistema de monitoramento em tempo real da SismoPRO nos ajudou a manter total conformidade com as regulamentações ambientais. Excelente investimento!",
      active: true,
      order: 4
    },
    {
      name: "Roberto Almeida",
      position: "Supervisor de Operações",
      company: "Pedreira São Paulo",
      industry: "Mineração",
      rating: 5,
      text: "Com mais de 20 anos na área, posso afirmar que os equipamentos da SismoPRO são os mais confiáveis que já utilizei. A assistência técnica é nota 10!",
      active: true,
      order: 5
    },
    {
      name: "Luiza Oliveira",
      position: "Engenheira Civil",
      company: "Construções Modernas",
      industry: "Construção",
      rating: 5,
      text: "O curso de treinamento oferecido pela SismoPRO foi fundamental para nossa equipe. Agora operamos com total segurança e confiança nos equipamentos.",
      active: true,
      order: 6
    }
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial
    })
  }

  console.log('✅ Testemunhais criados')

  // Create sample budget requests for demo
  const sampleBudgetRequests = [
    {
      companyName: "Mineração Exemplo Ltda",
      cnpj: "12.345.678/0001-99",
      contactName: "João Silva",
      email: "joao@mineracaoexemplo.com",
      phone: "(11) 98765-4321",
      projectType: "Mineração de Ferro",
      location: "Minas Gerais",
      monitoringPeriod: "6 meses",
      services: ["Monitoramento em Tempo Real", "Consultoria Técnica", "Relatórios Personalizados"],
      projectDetails: "Projeto de expansão da mina com necessidade de monitoramento sísmico durante operações de desmonte.",
      status: "pending",
      priority: "high"
    },
    {
      companyName: "Construtora Demo S.A.",
      contactName: "Maria Santos",
      email: "maria@construtorademo.com.br",
      phone: "(11) 91234-5678",
      projectType: "Construção de Túnel",
      location: "São Paulo - SP",
      monitoringPeriod: "12 meses",
      services: ["Locação de Equipamentos", "Monitoramento em Tempo Real", "Treinamento da Equipe"],
      projectDetails: "Construção de túnel próximo a área residencial, necessário monitoramento contínuo.",
      status: "reviewed",
      priority: "urgent"
    }
  ]

  for (const request of sampleBudgetRequests) {
    await prisma.budgetRequest.create({
      data: {
        ...request,
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now
      }
    })
  }

  console.log('✅ Solicitações de orçamento de exemplo criadas')
  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
