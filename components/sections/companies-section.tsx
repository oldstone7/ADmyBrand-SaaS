"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useEffect, useState } from "react"

const companies = [
  {
    name: "Microsoft",
    wordmark: "Microsoft",
    style: "font-normal tracking-wide"
  },
  {
    name: "Google",
    wordmark: "Google",
    style: "font-normal tracking-normal"
  },
  {
    name: "Amazon",
    wordmark: "amazon",
    style: "font-bold tracking-tight lowercase"
  },
  {
    name: "Meta",
    wordmark: "Meta",
    style: "font-bold tracking-normal"
  },
  {
    name: "Netflix",
    wordmark: "NETFLIX",
    style: "font-bold tracking-widest uppercase"
  },
  {
    name: "Spotify",
    wordmark: "Spotify",
    style: "font-semibold tracking-tight"
  },
  {
    name: "Airbnb",
    wordmark: "airbnb",
    style: "font-normal tracking-wide lowercase"
  },
  {
    name: "Uber",
    wordmark: "Uber",
    style: "font-bold tracking-normal"
  },
  {
    name: "Shopify",
    wordmark: "Shopify",
    style: "font-semibold tracking-normal"
  },
  {
    name: "HubSpot",
    wordmark: "HubSpot",
    style: "font-semibold tracking-normal"
  },
  {
    name: "Salesforce",
    wordmark: "salesforce",
    style: "font-normal tracking-wide lowercase"
  },
  {
    name: "Slack",
    wordmark: "Slack",
    style: "font-bold tracking-normal"
  },
  {
    name: "Zoom",
    wordmark: "Zoom",
    style: "font-semibold tracking-normal"
  },
  {
    name: "Adobe",
    wordmark: "Adobe",
    style: "font-bold tracking-normal"
  },
  {
    name: "Stripe",
    wordmark: "Stripe",
    style: "font-semibold tracking-normal"
  },
  {
    name: "Dropbox",
    wordmark: "Dropbox",
    style: "font-normal tracking-normal"
  },
  {
    name: "Twitter",
    wordmark: "𝕏",
    style: "font-bold tracking-normal text-2xl"
  },
  {
    name: "LinkedIn",
    wordmark: "LinkedIn",
    style: "font-semibold tracking-normal"
  },
  {
    name: "PayPal",
    wordmark: "PayPal",
    style: "font-bold tracking-normal"
  },
  {
    name: "Tesla",
    wordmark: "TESLA",
    style: "font-bold tracking-widest uppercase"
  },
  {
    name: "IBM",
    wordmark: "IBM",
    style: "font-bold tracking-widest uppercase"
  },
  {
    name: "Oracle",
    wordmark: "ORACLE",
    style: "font-bold tracking-wide uppercase"
  },
  {
    name: "SAP",
    wordmark: "SAP",
    style: "font-bold tracking-widest uppercase"
  },
  {
    name: "Vercel",
    wordmark: "▲ Vercel",
    style: "font-medium tracking-normal"
  }
]

const stats = [
  { value: "500+", label: "Companies Trust Us" },
  { value: "100+", label: "Countries Worldwide" },
  { value: "99.9%", label: "Customer Satisfaction" }
]

export function CompaniesSection() {
  // Create seamless loop by tripling the array
  const seamlessCompanies = [...companies, ...companies, ...companies]
  const [isClient, setIsClient] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    setIsClient(true)
    // Set initial width
    const updateWidth = () => {
      if (typeof window !== 'undefined') {
        setContainerWidth(window.innerWidth < 640 ? 116 : window.innerWidth < 1024 ? 152 : 224)
      }
    }
    
    updateWidth()
    
    // Add event listener for window resize
    window.addEventListener('resize', updateWidth)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const containerStyle = {
    width: isClient ? `${seamlessCompanies.length * containerWidth}px` : '100%'
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] bg-clip-text text-transparent">
                500+ Companies
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From startups to Fortune 500 companies, businesses worldwide rely on ADmyBRAND AI 
              to power their marketing success
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Company Logos Carousel */}
        <AnimatedSection delay={0.4} className="mb-16">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
              Join industry leaders who trust ADmyBRAND AI
            </p>
          </div>
          
          <div className="relative overflow-hidden py-12">
            {/* First Row - Left to Right */}
            <div className="flex items-center mb-16">
              <motion.div
                className="flex items-center space-x-4 sm:space-x-8 lg:space-x-16 shrink-0"
                animate={{
                  x: [0, `-${100/3}%`]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
                style={containerStyle}
              >
                {seamlessCompanies.map((company, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex items-center justify-center shrink-0 group cursor-pointer w-24 sm:w-32 lg:w-40"
                  >
                    <span 
                      className={`text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap ${company.style}`}
                      title={company.name}
                    >
                      {company.wordmark}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="flex items-center">
              <motion.div
                className="flex items-center space-x-4 sm:space-x-8 lg:space-x-16 shrink-0"
                animate={{
                  x: [`-${100/3}%`, 0]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 55,
                    ease: "linear",
                  },
                }}
                style={containerStyle}
              >
                {[...seamlessCompanies].reverse().map((company, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex items-center justify-center shrink-0 group cursor-pointer w-24 sm:w-32 lg:w-40"
                  >
                    <span 
                      className={`text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base lg:text-lg whitespace-nowrap ${company.style}`}
                      title={company.name}
                    >
                      {company.wordmark}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Responsive Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-slate-800 via-slate-800/90 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-slate-800 via-slate-800/90 to-transparent pointer-events-none z-10"></div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">
              Ready to join these industry leaders?
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#0ea5e9]/25 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
