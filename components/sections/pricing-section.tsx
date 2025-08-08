"use client"

import { useState } from "react"
import { Check, Star, Zap, Crown, Calculator } from 'lucide-react'
import { GlassCard } from "@/components/ui/glass-card"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { Modal } from "@/components/ui/modal"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Up to 5 campaigns",
      "Basic AI insights",
      "Email support",
      "Standard templates",
      "Basic analytics",
      "1 team member"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing marketing teams",
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: Star,
    color: "from-purple-500 to-pink-500",
    features: [
      "Unlimited campaigns",
      "Advanced AI insights",
      "Priority support",
      "Custom templates",
      "Advanced analytics",
      "Up to 10 team members",
      "A/B testing",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Everything in Professional",
      "White-label solution",
      "Dedicated account manager",
      "Custom AI models",
      "Advanced security",
      "Unlimited team members",
      "API access",
      "Custom reporting",
      "SLA guarantee"
    ],
    popular: false
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <GlassCard className="p-1 flex items-center">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                !isYearly 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                isYearly 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </GlassCard>
        </div>

        {/* Interactive Calculator Button with increased margin */}
        <div className="text-center mb-16">
          <EnhancedButton
            variant="glass"
            size="lg"
            onClick={() => setShowCalculator(true)}
            className="group"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Try Our Interactive Pricing Calculator
          </EnhancedButton>
        </div>

        {/* Pricing Cards with increased top margin */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const originalPrice = isYearly ? plan.monthlyPrice * 12 : null
            
            return (
              <div
                key={plan.name}
                className={`relative transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-purple-500/40 shadow-xl scale-105 z-10 rounded-2xl' : 'rounded-2xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <GlassCard 
                  className={`p-8 h-full ${
                    plan.popular 
                      ? 'border-purple-500/50 bg-white/15' 
                      : ''
                  }`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${plan.color} p-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        <p className="text-gray-400 text-sm">{plan.description}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-white">${price}</span>
                        <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                      {isYearly && originalPrice && (
                        <div className="text-sm text-gray-500">
                          <span className="line-through">${originalPrice}/year</span>
                          <span className="text-green-400 ml-2">Save ${originalPrice - price}</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-green-400" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <EnhancedButton
                        variant={plan.popular ? "premium" : "glass"}
                        size="lg"
                        className="w-full"
                      >
                        {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                      </EnhancedButton>
                    </div>
                  </div>
                </GlassCard>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Pricing Calculator Modal */}
        <Modal
          isOpen={showCalculator}
          onClose={() => setShowCalculator(false)}
          className="max-w-2xl"
        >
          <PricingCalculator />
        </Modal>
      </div>
    </section>
  )
}
