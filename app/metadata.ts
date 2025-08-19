import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://sismopro-website.vercel.app'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'SismoPRO - Sistema de Análise de Vibrações',
    template: '%s | SismoPRO'
  },
  description: 'Sistema completo para análise de conformidade com normas técnicas ABNT, DIN, ISO e CETESB. VibraScope - Plataforma profissional de análise de vibrações.',
  keywords: [
    'análise de vibrações',
    'ABNT',
    'DIN',
    'ISO',
    'CETESB',
    'VibraScope',
    'SismoPRO',
    'conformidade técnica',
    'monitoramento sísmico'
  ],
  authors: [{ name: 'SismoPRO Team' }],
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
    url: baseUrl,
    title: 'SismoPRO - Sistema de Análise de Vibrações',
    description: 'Sistema completo para análise de conformidade com normas técnicas ABNT, DIN, ISO e CETESB.',
    siteName: 'SismoPRO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SismoPRO - Sistema de Análise de Vibrações',
    description: 'Sistema completo para análise de conformidade com normas técnicas ABNT, DIN, ISO e CETESB.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}
