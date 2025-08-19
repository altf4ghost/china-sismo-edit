# SismoPRO - Sistema de Análise de Vibrações

Sistema completo para análise de conformidade com normas técnicas ABNT, DIN, ISO e CETESB.

## 🚀 Deploy para Produção

### 1. Configuração do GitHub

Como há limitações de permissão no token atual, você precisará:

1. Criar um novo repositório no GitHub manualmente:
   - Acesse: https://github.com/new
   - Nome: `sismopro-website`
   - Descrição: "Sistema de Análise de Vibrações - VibraScope"
   - Público ou Privado (sua escolha)

2. Conectar o repositório local:
```bash
cd /home/ubuntu/sismopro-website
git remote add origin https://github.com/SEU_USUARIO/sismopro-website.git
git branch -M main
git push -u origin main
```

### 2. Configuração do Vercel

1. Acesse: https://vercel.com/dashboard
2. Clique em "New Project"
3. Conecte seu repositório GitHub `sismopro-website`
4. Configure as variáveis de ambiente:

**Variáveis obrigatórias no Vercel:**
```
DATABASE_URL=postgresql://role_138738a11b:1DlbRFjpNSIxcsRlsFs6HhcwFM4hx777@db-138738a11b.db001.hosteddb.reai.io:5432/138738a11b
NEXTAUTH_URL=https://seu-dominio.vercel.app
NEXTAUTH_SECRET=a47ab7b3bcafa1118aa6b885a1e434a0c150dc0839c8054787b985e6e58b8349
NODE_ENV=production
```

**Variáveis opcionais (configure conforme necessário):**
```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
EMAIL_FROM=noreply@seudominio.com
```

### 3. Configuração do Supabase (Opcional)

Se quiser migrar para Supabase:

1. Acesse: https://app.supabase.com
2. Crie um novo projeto
3. Vá em Settings > Database
4. Copie a Connection String
5. Adicione as variáveis no Vercel:
```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
SUPABASE_SERVICE_ROLE_KEY=sua-chave-de-servico
```

### 4. Build e Deploy

O projeto está configurado com:
- ✅ Scripts de build otimizados
- ✅ Configuração do Vercel
- ✅ Variáveis de ambiente preparadas
- ✅ TypeScript configurado
- ✅ Prisma configurado

**Para deploy local:**
```bash
cd /home/ubuntu/sismopro-website/app
npm install
npm run build:production
```

**Para deploy no Vercel:**
1. Instale a CLI do Vercel: `npm i -g vercel`
2. Execute: `npm run deploy:vercel`

## 📁 Estrutura do Projeto

```
sismopro-website/
├── app/                    # Aplicação Next.js
│   ├── .env.local         # Variáveis de produção
│   ├── .env.example       # Exemplo de configuração
│   ├── package.json       # Dependências e scripts
│   ├── vercel.json        # Configuração Vercel
│   └── ...
└── README.md              # Este arquivo
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build:production

# Verificar tipos
npm run type-check

# Banco de dados
npm run db:push
npm run db:seed
npm run db:studio

# Deploy
npm run deploy:vercel
```

## 📝 Próximos Passos

1. ✅ Criar repositório no GitHub
2. ✅ Configurar Vercel com variáveis de ambiente
3. ✅ Fazer primeiro deploy
4. ⏳ Configurar domínio personalizado (opcional)
5. ⏳ Configurar email SMTP (opcional)
6. ⏳ Migrar para Supabase (opcional)

## 🛠️ Tecnologias

- **Framework:** Next.js 14
- **Database:** PostgreSQL (atual) / Supabase (opcional)
- **Auth:** NextAuth.js
- **Styling:** Tailwind CSS
- **ORM:** Prisma
- **Deploy:** Vercel
- **TypeScript:** Configurado
