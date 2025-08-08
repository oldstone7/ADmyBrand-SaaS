"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl"
  opacity?: "low" | "medium" | "high"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, blur = "md", opacity = "medium", ...props }, ref) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    }

    const opacityClasses = {
      low: "bg-white/5 border-white/10",
      medium: "bg-white/10 border-white/20",
      high: "bg-white/20 border-white/30",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border backdrop-blur-md transition-all duration-300",
          blurClasses[blur],
          opacityClasses[opacity],
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
