"use client"

import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { CompaniesSection } from "@/components/sections/companies-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/sections/footer"
import { ContactSection } from "@/components/sections/contact-section"
import { BlogSection } from "@/components/sections/blog-section"
import { AboutSection } from "@/components/sections/about-section"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <CompaniesSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <TestimonialsSection />
        <section id="resources">
          <BlogSection />
        </section>
        <FAQSection />   
        <AboutSection />
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  )
}
