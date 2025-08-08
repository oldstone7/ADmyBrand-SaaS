"use client"

import { ContactForm } from "@/components/ui/contact-form"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">Contact Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Ready to Get
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Started?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Let's discuss how ADmyBRAND AI can transform your marketing strategy. 
                Our team is here to help you succeed.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <p className="text-gray-400">hello@admybrand.ai</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Visit Us</h3>
                    <p className="text-gray-400">San Francisco, CA</p>
                    <p className="text-sm text-gray-500">Schedule an appointment</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Live Chat</h3>
                    <p className="text-gray-400">Available 24/7</p>
                    <p className="text-sm text-gray-500">Instant support when you need it</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
