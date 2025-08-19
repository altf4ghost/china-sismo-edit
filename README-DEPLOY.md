# SismoPRO - Guia Completo de Deploy

## 📋 Visão Geral
Este é o pacote completo do projeto SismoPRO, um sistema web para monitoramento sísmico desenvolvido em Next.js com banco de dados PostgreSQL (Supabase) e sistema de email integrado.

## 🚀 Deploy Rápido no Vercel

### 1. Pré-requisitos
- Conta no [Vercel](https://vercel.com)
- Conta no [Supabase](https://supabase.com)
- Conta Gmail com senha de app configurada

### 2. Configuração do Banco de Dados (Supabase)

1. Acesse [Supabase](https://supabase.com) e crie um novo projeto
2. Anote as credenciais:
   - `Database URL` (Settings > Database > Connection string)
   - `Project URL` (Settings > API > Project URL)
   - `Anon Key` (Settings > API > Project API keys > anon public)
   - `Service Role Key` (Settings > API > Project API keys > service_role)

3. Execute as migrações do banco:
   ```bash
   cd app
   npm install
   npx prisma db push
   npx prisma db seed
   ```

### 3. Configuração do Email

1. Acesse sua conta Gmail
2. Ative a autenticação de 2 fatores
3. Gere uma senha de app:
   - Conta Google > Segurança > Senhas de app
   - Selecione "Email" e "Outro dispositivo personalizado"
   - Anote a senha gerada (16 caracteres)

### 4. Deploy no Vercel

1. Faça upload do projeto para GitHub/GitLab
2. Conecte o repositório no Vercel
3. Configure as variáveis de ambiente (ver seção abaixo)
4. Deploy automático será executado

## 🔧 Variáveis de Ambiente

Configure estas variáveis no painel do Vercel (Settings > Environment Variables):

### Banco de Dados
```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

### Autenticação
```
NEXTAUTH_URL=https://seu-dominio.vercel.app
NEXTAUTH_SECRET=sua-chave-secreta-aqui-min-32-chars
```

### Email
```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-16-chars
EMAIL_FROM=noreply@seu-dominio.com
```

### Supabase
```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
```

### Aplicação
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://seu-dominio.vercel.app
VERCEL_ENV=production
```

## 📁 Estrutura do Projeto

```
sismopro-website/
├── app/                    # Aplicação Next.js principal
│   ├── app/               # App Router (Next.js 13+)
│   ├── components/        # Componentes React
│   ├── lib/              # Utilitários e configurações
│   ├── prisma/           # Schema e migrações do banco
│   ├── public/           # Arquivos estáticos
│   ├── scripts/          # Scripts de seed e utilitários
│   └── types/            # Definições TypeScript
├── .deploy/              # Arquivos de deploy
└── docs/                 # Documentação adicional
```

## 🛠️ Comandos Úteis

### Desenvolvimento Local
```bash
cd app
npm install
npm run dev
```

### Build de Produção
```bash
npm run build:production
npm start
```

### Banco de Dados
```bash
npx prisma db push      # Aplicar schema
npx prisma db seed      # Popular dados iniciais
npx prisma studio       # Interface visual do banco
```

## 🔍 Verificação Pós-Deploy

1. **Teste de Conectividade**
   - Acesse a URL do deploy
   - Verifique se a página inicial carrega

2. **Teste de Autenticação**
   - Tente fazer login/registro
   - Verifique se o JWT está funcionando

3. **Teste de Email**
   - Execute o teste de email: `node test-email-final.js`
   - Verifique se emails são enviados corretamente

4. **Teste de Banco**
   - Verifique se dados são salvos/carregados
   - Teste operações CRUD básicas

## 🚨 Troubleshooting

### Erro de Build
- Verifique se todas as dependências estão instaladas
- Execute `npm run type-check` para verificar erros TypeScript

### Erro de Banco
- Confirme se DATABASE_URL está correta
- Verifique se as migrações foram aplicadas: `npx prisma db push`

### Erro de Email
- Confirme se EMAIL_PASS é a senha de app (não a senha normal)
- Verifique se a autenticação de 2 fatores está ativa no Gmail

### Erro de Autenticação
- Confirme se NEXTAUTH_SECRET tem pelo menos 32 caracteres
- Verifique se NEXTAUTH_URL corresponde ao domínio real

## 📞 Suporte

Para problemas técnicos:
1. Verifique os logs do Vercel (Functions > View Function Logs)
2. Consulte a documentação do Next.js e Supabase
3. Verifique se todas as variáveis de ambiente estão configuradas

## 🔐 Segurança

- Nunca commite arquivos `.env` no repositório
- Use senhas fortes para NEXTAUTH_SECRET
- Mantenha as chaves do Supabase seguras
- Configure CORS adequadamente no Supabase

## 📈 Monitoramento

- Use o painel do Vercel para monitorar performance
- Configure alertas no Supabase para uso do banco
- Monitore logs de erro regularmente

---

**Versão:** 1.0.0  
**Data:** Julho 2025  
**Desenvolvido para:** Deploy em produção
