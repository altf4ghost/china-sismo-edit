

import { Suspense } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TechnologySection from '@/components/technology-section'
import ServicesSection from '@/components/services-section'
import SpecificationsSection from '@/components/specifications-section'
import ApplicationsSection from '@/components/applications-section'
import TestimonialsSection from '@/components/testimonials-section'
import BudgetSection from '@/components/budget-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <ServicesSection />
        <Suspense fallback={<div>Carregando especificações...</div>}>
          <SpecificationsSection />
        </Suspense>
        <ApplicationsSection />
        <TestimonialsSection />
        <BudgetSection />
      </div>
      
      <Footer />
    </main>
  )
}

