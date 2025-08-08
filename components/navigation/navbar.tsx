"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap, ArrowRight } from 'lucide-react'
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { GlassCard } from "@/components/ui/glass-card"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-2' 
            : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <GlassCard 
            className={`transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/15 backdrop-blur-xl border-white/30' 
                : 'bg-white/10 backdrop-blur-md border-white/20'
            }`}
          >
            <div className="flex items-center justify-between px-4 lg:px-6 py-4">
              {/* Logo */}
              <motion.div 
                className="flex items-center gap-3 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ADmyBRAND AI</span>
              </motion.div>

              {/* Desktop Navigation - Hidden on smaller screens, shown on xl+ */}
              <div className="hidden xl:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Tablet Navigation - Condensed version for lg-xl screens */}
              <div className="hidden lg:flex xl:hidden items-center gap-4">
                {navItems.slice(0, 3).map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  More
                </motion.button>
              </div>

              {/* Desktop CTA - Full version for xl+ */}
              <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
                <motion.button
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <EnhancedButton variant="premium" size="sm" className="group whitespace-nowrap">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </EnhancedButton>
                </motion.div>
              </div>

              {/* Tablet CTA - Condensed version for lg-xl screens */}
              <div className="hidden lg:flex xl:hidden items-center gap-2 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <EnhancedButton variant="premium" size="sm" className="text-sm px-4">
                    Get Started
                  </EnhancedButton>
                </motion.div>
              </div>

              {/* Mobile Menu Button - Shown on lg and smaller */}
              <motion.button
                className="lg:hidden text-white p-2 flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </GlassCard>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              className="fixed top-20 left-4 right-4 z-50 lg:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <GlassCard className="p-6 bg-white/15 backdrop-blur-xl border-white/30">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  <div className="pt-4 border-t border-white/20 space-y-3">
                    <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2">
                      Sign In
                    </button>
                    <EnhancedButton variant="premium" size="sm" className="w-full">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </EnhancedButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
