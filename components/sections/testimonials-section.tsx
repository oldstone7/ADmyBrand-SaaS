"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Building2, Users, Globe } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    companySize: "500+ employees",
    industry: "Technology",
    image: "/professional-woman-smiling.png",
    rating: 5,
    content: "ADmyBRAND AI has completely transformed our marketing strategy. The AI insights are incredibly accurate and have helped us increase our ROI by 300%. The automation features save us hours every week.",
    results: "+300% ROI increase"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupBoost",
    companySize: "50+ employees",
    industry: "SaaS",
    image: "/professional-man-smiling.png",
    rating: 5,
    content: "As a startup, we needed powerful marketing tools without the enterprise price tag. ADmyBRAND AI delivered exactly that. The results speak for themselves - we've grown our user base by 500% in just 6 months.",
    results: "+500% user growth"
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "GrowthLabs",
    companySize: "200+ employees",
    industry: "Marketing Agency",
    image: "/professional-woman-glasses.png",
    rating: 5,
    content: "The level of automation and intelligence in this platform is remarkable. It's like having a team of marketing experts working 24/7. Our campaign performance has never been better.",
    results: "+250% campaign performance"
  },
  {
    name: "David Thompson",
    role: "VP of Marketing",
    company: "ScaleUp Solutions",
    companySize: "1000+ employees",
    industry: "Enterprise",
    image: "/professional-bearded-man.png",
    rating: 5,
    content: "We've tried many marketing platforms, but none come close to ADmyBRAND AI. The predictive analytics and smart recommendations have revolutionized how we approach our campaigns.",
    results: "+180% lead quality"
  },
  {
    name: "Lisa Park",
    role: "Marketing Consultant",
    company: "Park Marketing Agency",
    companySize: "25+ employees",
    industry: "Consulting",
    image: "/professional-asian-woman.png",
    rating: 5,
    content: "I recommend ADmyBRAND AI to all my clients. The platform is intuitive, powerful, and delivers consistent results. The customer support is also exceptional - they truly care about your success.",
    results: "+400% client satisfaction"
  }
]

const companyLogos = [
  "Microsoft", "Shopify", "HubSpot", "Salesforce", "Stripe", "Airbnb"
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Customer Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Loved by Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#0ea5e9] bg-clip-text text-transparent">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how teams around the world are transforming their marketing with ADmyBRAND AI.
          </p>
        </div>

        {/* Company Trust Bar */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6 border-[#0ea5e9]/20 bg-white/5">
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm">
                Trusted by marketing teams at companies like:
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company}
                  className="text-gray-400 font-semibold text-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <GlassCard className="p-8 text-center space-y-6 border-[#0ea5e9]/20">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Results Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm font-medium">{testimonial.results}</span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                        <div className="text-sm text-[#0ea5e9]">{testimonial.company}</div>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            <span>{testimonial.industry}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{testimonial.companySize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0ea5e9] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">150+</div>
            <div className="text-sm text-gray-400">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}
