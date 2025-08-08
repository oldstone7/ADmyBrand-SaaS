"use client"

import { Users, Award, Target, Zap, TrendingUp, Shield, Globe, Heart } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedSection, AnimatedList } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { value: "50K+", label: "Happy Customers", icon: Users },
  { value: "99.9%", label: "Uptime", icon: Shield },
  { value: "150+", label: "Countries", icon: Globe },
  { value: "5 Years", label: "Experience", icon: Award }
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to democratize AI-powered marketing, making advanced tools accessible to businesses of all sizes.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Every feature we build starts with understanding our customers' challenges and creating solutions that truly matter.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly pushing the boundaries of what's possible with AI and marketing technology.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Your data security and privacy are paramount. We maintain the highest standards of protection and compliance.",
    color: "from-orange-500 to-red-500"
  }
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image: "/Sarah-Chen.jpg?height=400&width=400&text=Sarah+Chen",
    bio: "Former VP of Marketing at TechCorp, 15+ years in AI and marketing automation."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder", 
    image: "/Michael-Rodriguez.jpg?height=600&width=600&text=Michael+Rodriguez",
    bio: "Ex-Google AI researcher, PhD in Machine Learning from Stanford University."
  },
  {
    name: "Emily Johnson",
    role: "Head of Product",
    image: "/Emily-Johnson.jpeg?height=400&width=400&text=Emily+Johnson",
    bio: "Product leader with 10+ years building SaaS platforms for Fortune 500 companies."
  }
]

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900" id="about">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Heart className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-white">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Empowering Marketers
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              with AI Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded in 2019, ADmyBRAND AI has grown from a simple idea to a comprehensive 
            AI-powered marketing platform trusted by thousands of businesses worldwide.
          </p>
        </AnimatedSection>

        {/* Company Story */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  It all started when our founders, Sarah and Michael, were frustrated with the 
                  complexity and cost of existing marketing tools. They envisioned a platform 
                  that would make AI-powered marketing accessible to everyone.
                </p>
                <p>
                  Today, ADmyBRAND AI serves over 50,000 customers across 150+ countries, 
                  from solo entrepreneurs to Fortune 500 companies. We've processed over 
                  10 million campaigns and helped our customers achieve an average ROI 
                  increase of 300%.
                </p>
                <p>
                  But we're just getting started. Our vision is to become the world's most 
                  trusted AI marketing platform, continuously innovating to help businesses 
                  grow and succeed in the digital age.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        className="text-center space-y-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection delay={0.4} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Values</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="p-6 h-full text-center space-y-4 min-h-[280px] flex flex-col">
                    <motion.div 
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${value.color} p-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="space-y-2 flex-1 flex flex-col">
                      <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {value.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* Team */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Meet Our Leadership</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our experienced team combines deep technical expertise with a passion for helping businesses succeed.
            </p>
          </div>
          
          <AnimatedList className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" stagger={0.2}>
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 text-center space-y-4 h-full">
                  <div className="relative w-24 h-24 mx-auto">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-2 border-white/20"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                    <p className="text-purple-400 font-medium">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatedList>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.8} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Join Our Journey</h3>
                <p className="text-gray-300">
                  We're always looking for talented individuals who share our passion for 
                  innovation and helping businesses succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button 
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Careers
                  </motion.button>
                  <motion.button 
                    className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Culture
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
