"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react'
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { GlassCard } from "@/components/ui/glass-card"
import { DemoVideo } from "@/components/ui/demo-video"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWatchDemo = () => {
    setShowDemoModal(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge with top margin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4"
            >
              <GlassCard className="inline-flex items-center gap-2 px-4 py-2 w-fit border-[#0ea5e9]/30 bg-[#0ea5e9]/10">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">AI-Powered Marketing Suite</span>
              </GlassCard>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <motion.span 
                  className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Transform Your
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#0ea5e9] bg-clip-text text-transparent block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Marketing Game
                </motion.span>
              </h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Harness the power of AI to create, optimize, and scale your marketing campaigns. 
                Get insights that matter, automation that works, and results that speak for themselves.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <EnhancedButton variant="premium" size="xl" className="group bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] hover:from-[#0284c7] hover:to-[#7c3aed]">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </EnhancedButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <EnhancedButton 
                  variant="glass" 
                  size="xl" 
                  className="group border-[#0ea5e9]/30 hover:border-[#0ea5e9]/50"
                  onClick={handleWatchDemo}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </EnhancedButton>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              {[
                { value: "10K+", label: "Active Users" },
                { value: "95%", label: "Success Rate" },
                { value: "24/7", label: "AI Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <GlassCard className="p-6 space-y-4 border-[#0ea5e9]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-8 h-8 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Zap className="w-4 h-4 text-white" />
                      </motion.div>
                      <span className="text-white font-semibold">ADmyBRAND AI</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="bg-gradient-to-r from-[#0ea5e9]/20 to-[#8b5cf6]/20 p-4 rounded-lg border border-[#0ea5e9]/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 1 }}
                        >
                          $127K
                        </motion.div>
                        <div className="text-sm text-gray-300">Revenue</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-green-500/20 to-[#0ea5e9]/20 p-4 rounded-lg border border-green-500/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                        >
                          +23%
                        </motion.div>
                        <div className="text-sm text-gray-300">Growth</div>
                      </motion.div>
                    </div>
                    
                    {/* Mock Chart */}
                    <div className="h-32 bg-gradient-to-r from-[#0ea5e9]/10 to-[#8b5cf6]/10 rounded-lg flex items-end justify-between p-4 border border-[#0ea5e9]/20">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-t from-[#0ea5e9] to-[#8b5cf6] rounded-t"
                          style={{ width: '12px' }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1.4 + i * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <GlassCard className="p-3 border-[#0ea5e9]/30 bg-[#0ea5e9]/10">
                  <Target className="w-6 h-6 text-[#0ea5e9]" />
                </GlassCard>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <GlassCard className="p-3 border-yellow-400/30 bg-yellow-400/10">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Demo Video Modal - Only renders modals, no visible content */}
      <DemoVideo 
        showModal={showDemoModal}
        onCloseModal={() => setShowDemoModal(false)}
      />
    </section>
  )
}
