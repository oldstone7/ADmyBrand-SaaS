"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "What makes ADmyBRAND AI different from other marketing platforms?",
    answer: "ADmyBRAND AI combines advanced artificial intelligence with intuitive design to provide predictive insights, automated optimization, and personalized recommendations. Our platform learns from your data to continuously improve campaign performance, while our glassmorphism UI ensures a premium user experience."
  },
  {
    question: "How quickly can I see results with ADmyBRAND AI?",
    answer: "Most users see significant improvements within the first 30 days. Our AI algorithms start optimizing your campaigns immediately, and you'll begin receiving actionable insights within hours of setup. The platform's machine learning capabilities improve over time, delivering even better results as it learns from your data."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore all our AI-powered tools, create campaigns, and see the results for yourself before making any commitment."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our Professional and Enterprise plans include priority support and dedicated account managers. We also offer comprehensive documentation, video tutorials, and regular webinars."
  },
  {
    question: "Can I integrate ADmyBRAND AI with my existing tools?",
    answer: "We offer integrations with over 100+ popular marketing tools including Google Analytics, Facebook Ads, Salesforce, HubSpot, Mailchimp, and many more. Our API also allows for custom integrations to fit your specific workflow needs."
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer: "Security is our top priority. We use bank-level encryption, comply with GDPR and CCPA regulations, and maintain SOC 2 Type II certification. Your data is stored in secure, redundant data centers with regular security audits and monitoring."
  },
  {
    question: "What happens if I need to cancel my subscription?",
    answer: "You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data. We also offer a 30-day money-back guarantee if you're not satisfied."
  },
  {
    question: "Do you offer training for new users?",
    answer: "Yes! We provide comprehensive onboarding for all new users, including personalized training sessions for Professional and Enterprise customers. We also offer regular webinars, a knowledge base, video tutorials, and a community forum where users can share best practices."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-white/10 mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <GlassCard className="inline-block p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you get the most out of ADmyBRAND AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                Contact Support
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
