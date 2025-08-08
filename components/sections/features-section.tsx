"use client"

import { useState, useEffect, useRef } from "react"
import { Brain, BarChart3, Zap, Target, Users, TrendingUp, Sparkles, Shield } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedSection, AnimatedList } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations and predictions powered by advanced machine learning algorithms.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep dive into your marketing performance with comprehensive analytics and reporting tools.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Automate repetitive tasks and workflows to focus on strategy and creative work.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with AI-driven audience segmentation.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using built-in collaboration and project management tools.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuously optimize your campaigns with real-time performance monitoring and suggestions.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
    color: "from-slate-500 to-gray-500"
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "Get personalized recommendations for content, timing, and strategy based on your data.",
    color: "from-violet-500 to-purple-500"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" aria-hidden="true" />
            <span className="text-sm font-medium text-white">Powerful Features</span>
          </div>
          <h2 id="features-heading" className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Dominate Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools gives you everything you need to create, 
            manage, and optimize successful marketing campaigns.
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.article
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer min-h-[280px] flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="space-y-2 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.article>
            )
          })}
        </AnimatedList>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="inline-block p-8 max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Power?
              </h3>
              <p className="text-gray-300 mb-6">
                Join thousands of marketers who are already using ADmyBRAND AI to transform their campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start your free trial of ADmyBRAND AI"
                >
                  Start Free Trial
                </motion.button>
                <motion.button 
                  className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Schedule a demo of ADmyBRAND AI"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
