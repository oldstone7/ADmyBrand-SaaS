"use client"

import { Calendar, Clock, ArrowRight, BookOpen, FileText, Video, Headphones, Download } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { AnimatedSection, AnimatedList } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 AI Marketing Strategies That Actually Work in 2024",
    excerpt: "Discover the most effective AI-powered marketing strategies that top companies are using to drive growth and engagement.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Strategy",
    image: "/placeholder.svg?height=300&width=500&text=AI+Marketing+Strategies",
    featured: true
  },
  {
    id: 2,
    title: "How to Automate Your Email Campaigns with AI",
    excerpt: "Learn step-by-step how to set up intelligent email automation that adapts to customer behavior and preferences.",
    author: "Mike Johnson",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Tutorial",
    image: "/placeholder.svg?height=200&width=350&text=Email+Automation"
  },
  {
    id: 3,
    title: "The Future of Personalized Marketing",
    excerpt: "Explore how AI is revolutionizing personalized marketing and what it means for customer experience.",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Insights",
    image: "/placeholder.svg?height=200&width=350&text=Personalization"
  }
]

const resources = [
  {
    type: "guide",
    icon: BookOpen,
    title: "Complete Guide to AI Marketing",
    description: "Everything you need to know about implementing AI in your marketing strategy",
    downloadCount: "2.3K downloads",
    color: "from-[#0ea5e9] to-cyan-500",
    fileSize: "2.4 MB PDF"
  },
  {
    type: "template",
    icon: FileText,
    title: "Campaign Planning Templates",
    description: "Ready-to-use templates for planning and executing successful campaigns",
    downloadCount: "1.8K downloads",
    color: "from-green-500 to-emerald-500",
    fileSize: "1.2 MB ZIP"
  },
  {
    type: "webinar",
    icon: Video,
    title: "AI Marketing Masterclass",
    description: "90-minute deep dive into advanced AI marketing techniques and best practices",
    downloadCount: "950 views",
    color: "from-[#8b5cf6] to-pink-500",
    fileSize: "45 min video"
  },
  {
    type: "podcast",
    icon: Headphones,
    title: "Marketing AI Podcast Series",
    description: "Weekly episodes featuring industry experts and real-world case studies",
    downloadCount: "5.2K subscribers",
    color: "from-orange-500 to-red-500",
    fileSize: "Audio series"
  }
]

export function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <BookOpen className="w-4 h-4 text-[#0ea5e9]" />
            <span className="text-sm font-medium text-white">Resources & Insights</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Learn & Grow with
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#0ea5e9] bg-clip-text text-transparent">
              Expert Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest articles, guides, and resources on AI-powered marketing.
          </p>
        </AnimatedSection>

        {/* Featured Blog Post */}
        <AnimatedSection delay={0.2} className="mb-16">
          <GlassCard className="p-8 lg:p-12 overflow-hidden border-[#0ea5e9]/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="px-3 py-1 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-full text-sm font-medium border border-[#8b5cf6]/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    Featured
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded-full text-sm font-medium border border-[#0ea5e9]/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    {blogPosts[0].category}
                  </motion.span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <span>By {blogPosts[0].author}</span>
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <EnhancedButton variant="premium" size="lg" className="group bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6]">
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </EnhancedButton>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gradient-to-br from-[#8b5cf6]/20 to-[#0ea5e9]/20 rounded-xl overflow-hidden border border-[#0ea5e9]/20">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Recent Articles */}
        <AnimatedSection delay={0.4} className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Recent Articles</h3>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <EnhancedButton variant="glass" className="border-[#0ea5e9]/30 hover:border-[#0ea5e9]/50">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </EnhancedButton>
            </motion.div>
          </div>
          
          <AnimatedList className="grid md:grid-cols-2 gap-6" stagger={0.2}>
            {blogPosts.slice(1).map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer overflow-hidden border-[#0ea5e9]/20 min-h-[490px] flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={350}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="space-y-3 flex-1 flex flex-col">
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="px-2 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded text-xs font-medium border border-[#0ea5e9]/30">
                          {post.category}
                        </span>
                      </motion.div>
                      
                      <h4 className="text-xl font-semibold text-white group-hover:text-[#0ea5e9] transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                        <span>{post.author}</span>
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatedList>
        </AnimatedSection>

        {/* Resources Grid */}
        <AnimatedSection delay={0.6}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Free Resources</h3>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <EnhancedButton variant="glass" className="border-[#0ea5e9]/30 hover:border-[#0ea5e9]/50">
                Browse All Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </EnhancedButton>
            </motion.div>
          </div>
          
          <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={resource.type}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="p-6 h-full group cursor-pointer text-center min-h-[380px] flex flex-col border-[#0ea5e9]/20">
                    <div className="space-y-4 flex-1 flex flex-col">
                      <motion.div 
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${resource.color} p-4`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="space-y-2 flex-1 flex flex-col">
                        <h4 className="text-lg font-semibold text-white group-hover:text-[#0ea5e9] transition-colors">
                          {resource.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed flex-1">
                          {resource.description}
                        </p>
                        <div className="space-y-1 mt-auto">
                          <p className="text-[#0ea5e9] text-xs font-medium">
                            {resource.downloadCount}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {resource.fileSize}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto"
                      >
                        <EnhancedButton variant="glass" size="sm" className="w-full border-[#0ea5e9]/30 hover:border-[#0ea5e9]/50">
                          <Download className="w-4 h-4 mr-2" />
                          {resource.type === 'webinar' ? 'Watch' : 'Download'}
                        </EnhancedButton>
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </AnimatedList>
        </AnimatedSection>

        {/* Newsletter CTA */}
        <AnimatedSection delay={0.8} className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-8 max-w-2xl mx-auto border-[#0ea5e9]/20">
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Never Miss an Update
                </motion.h3>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Get the latest AI marketing insights, tips, and resources delivered to your inbox weekly.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-[#0ea5e9]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all duration-300"
                    aria-label="Email address for newsletter subscription"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <EnhancedButton variant="premium" className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6]">
                      Subscribe
                    </EnhancedButton>
                  </motion.div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
