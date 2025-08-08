"use client"

import { useState, useEffect } from "react"
import { Calculator, Users, Zap, TrendingUp } from 'lucide-react'
import { GlassCard } from "./glass-card"
import { EnhancedButton } from "./enhanced-button"

interface CalculatorState {
  teamSize: number
  campaigns: number
  features: string[]
  billingCycle: 'monthly' | 'yearly'
}

const featureOptions = [
  { id: 'ai-insights', name: 'Advanced AI Insights', price: 20 },
  { id: 'automation', name: 'Marketing Automation', price: 15 },
  { id: 'analytics', name: 'Advanced Analytics', price: 10 },
  { id: 'integrations', name: 'Premium Integrations', price: 25 },
  { id: 'support', name: 'Priority Support', price: 30 },
  { id: 'white-label', name: 'White Label Solution', price: 50 }
]

export function PricingCalculator() {
  const [state, setState] = useState<CalculatorState>({
    teamSize: 5,
    campaigns: 10,
    features: [],
    billingCycle: 'monthly'
  })

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let basePrice = 29 // Starter price
    
    // Team size pricing
    if (state.teamSize > 10) {
      basePrice = 199 // Enterprise
    } else if (state.teamSize > 1) {
      basePrice = 79 // Professional
    }

    // Campaign volume multiplier
    const campaignMultiplier = Math.max(1, Math.floor(state.campaigns / 10))
    basePrice *= campaignMultiplier

    // Add feature costs
    const featureCost = state.features.reduce((total, featureId) => {
      const feature = featureOptions.find(f => f.id === featureId)
      return total + (feature?.price || 0)
    }, 0)

    let finalPrice = basePrice + featureCost

    // Yearly discount
    if (state.billingCycle === 'yearly') {
      finalPrice *= 9.6 // 20% discount fr 12 m, 0.8 * 12
    }

    setTotalPrice(Math.round(finalPrice))
  }, [state])

  const updateState = (updates: Partial<CalculatorState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }

  const toggleFeature = (featureId: string) => {
    setState(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-6 h-6 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">Pricing Calculator</h3>
        </div>
        <p className="text-gray-300">
          Customize your plan and see real-time pricing
        </p>
      </div>

      {/* Team Size */}
      <GlassCard className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-400" />
            <label className="text-white font-medium">Team Size: {state.teamSize} members</label>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={state.teamSize}
            onChange={(e) => updateState({ teamSize: parseInt(e.target.value) })}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>1</span>
            <span>50+</span>
          </div>
        </div>
      </GlassCard>

      {/* Campaign Volume */}
      <GlassCard className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <label className="text-white font-medium">Monthly Campaigns: {state.campaigns}</label>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={state.campaigns}
            onChange={(e) => updateState({ campaigns: parseInt(e.target.value) })}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>1</span>
            <span>100+</span>
          </div>
        </div>
      </GlassCard>

      {/* Features */}
      <GlassCard className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h4 className="text-white font-medium">Additional Features</h4>
          </div>
          <div className="grid gap-3">
            {featureOptions.map((feature) => (
              <label key={feature.id} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={state.features.includes(feature.id)}
                  onChange={() => toggleFeature(feature.id)}
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
                />
                <span className="text-white flex-1">{feature.name}</span>
                <span className="text-purple-400 font-medium">+${feature.price}/mo</span>
              </label>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Billing Cycle */}
      <GlassCard className="p-6">
        <div className="space-y-4">
          <h4 className="text-white font-medium">Billing Cycle</h4>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="billing"
                checked={state.billingCycle === 'monthly'}
                onChange={() => updateState({ billingCycle: 'monthly' })}
                className="w-4 h-4 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-white">Monthly</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="billing"
                checked={state.billingCycle === 'yearly'}
                onChange={() => updateState({ billingCycle: 'yearly' })}
                className="w-4 h-4 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-white">Yearly</span>
              <span className="text-green-400 text-sm">(Save 20%)</span>
            </label>
          </div>
        </div>
      </GlassCard>

      {/* Total Price */}
      <GlassCard className="p-6 text-center">
        <div className="space-y-4">
          <div>
            <div className="text-4xl font-bold text-white">${totalPrice}</div>
            <div className="text-gray-400">per {state.billingCycle === 'yearly' ? 'year' : 'month'}</div>
          </div>
          {state.billingCycle === 'yearly' && (
            <div className="text-green-400 text-sm">
              You save ${Math.round(totalPrice * 0.25)} per year!
            </div>
          )}
          <EnhancedButton variant="premium" size="lg" className="w-full">
            Get Started with This Plan
          </EnhancedButton>
        </div>
      </GlassCard>
    </div>
  )
}
