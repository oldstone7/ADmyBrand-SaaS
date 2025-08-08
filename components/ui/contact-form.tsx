"use client"

import { useState } from "react"
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { GlassCard } from "./glass-card"
import { EnhancedButton } from "./enhanced-button"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <GlassCard className="p-8 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
          <p className="text-gray-300">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
          </div>
          <p className="text-gray-300">
            Ready to transform your marketing? Let's talk about your needs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <User className="w-4 h-4" />
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-white/20 focus:ring-purple-500'
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <Mail className="w-4 h-4" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-white/20 focus:ring-purple-500'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Company Field */}
          <div className="space-y-2">
            <label className="text-white font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Your company name"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <MessageSquare className="w-4 h-4" />
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                errors.message 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-white/20 focus:ring-purple-500'
              }`}
              placeholder="Tell us about your marketing goals and how we can help..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <EnhancedButton
            type="submit"
            variant="premium"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </EnhancedButton>
        </form>

        {/* Contact Info */}
        <div className="pt-6 border-t border-white/10">
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>hello@admybrand.ai</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MessageSquare className="w-4 h-4" />
              <span>Live chat available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
