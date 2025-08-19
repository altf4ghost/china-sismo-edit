
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import AuthProvider from '@/components/auth-provider'
import WhatsAppFloat from '@/components/whatsapp-float'
import CookieBanner from '@/components/cookie-banner'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SismoPRO - Soluções Profissionais em Monitoramento Sísmico',
    template: '%s | SismoPRO'
  },
  description: 'Líder em monitoramento sísmico no Brasil. Equipamentos de alta precisão, consultoria especializada e soluções completas para mineração, construção civil e infraestrutura.',
  keywords: [
    'monitoramento sísmico',
    'sismógrafo',
    'vibração',
    'mineração',
    'construção civil',
    'desmonte de rochas',
    'análise sísmica',
    'equipamentos sísmicos',
    'consultoria técnica',
    'Brasil'
  ],
  authors: [{ name: 'SismoPRO' }],
  creator: 'SismoPRO',
  publisher: 'SismoPRO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sismopro.xyz',
    title: 'SismoPRO - Soluções Profissionais em Monitoramento Sísmico',
    description: 'Líder em monitoramento sísmico no Brasil. Equipamentos de alta precisão, consultoria especializada e soluções completas.',
    siteName: 'SismoPRO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SismoPRO - Monitoramento Sísmico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SismoPRO - Soluções Profissionais em Monitoramento Sísmico',
    description: 'Líder em monitoramento sísmico no Brasil. Equipamentos de alta precisão e consultoria especializada.',
    images: ['/og-image.jpg'],
    creator: '@sismopro',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Monitoramento Sísmico e Equipamentos Técnicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://sismopro.xyz/#organization",
                  "name": "SismoPRO",
                  "url": "https://i.ytimg.com/vi/rvtygG4n6ew/maxresdefault.jpg?v=6611bcc1",
                  "logo": "https://www.ecoticias.com/wp-content/uploads/2022/01/EHII_Simapro_Herramienta.jpg",
                  "description": "Líder em monitoramento sísmico no Brasil",
                  "sameAs": [
                    "https://www.linkedin.com/company/sismopro",
                    "https://www.instagram.com/sismopro"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+55-11-9999-9999",
                    "contactType": "customer service",
                    "areaServed": "BR",
                    "availableLanguage": "Portuguese"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://sismopro.xyz/#website",
                  "url": "https://sismopro.xyz",
                  "name": "SismoPRO",
                  "description": "Soluções Profissionais em Monitoramento Sísmico",
                  "publisher": {
                    "@id": "https://sismopro.xyz/#organization"
                  },
                  "inLanguage": "pt-BR"
                },
                {
                  "@type": "Service",
                  "name": "Monitoramento Sísmico",
                  "provider": {
                    "@id": "https://sismopro.xyz/#organization"
                  },
                  "description": "Serviços completos de monitoramento sísmico para mineração, construção civil e infraestrutura",
                  "areaServed": "BR",
                  "serviceType": "Monitoramento Sísmico"
                }
              ]
            })
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <WhatsAppFloat />
            <CookieBanner />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
