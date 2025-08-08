"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade"
  duration?: number
  stagger?: number
}

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.8,
  stagger = 0.1
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    fade: { opacity: 0 }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: variants[direction],
    visible: { 
      x: 0, 
      y: 0, 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      <motion.div variants={itemVariants}>
        {children}
      </motion.div>
    </motion.div>
  )
}

export function AnimatedList({ 
  children, 
  className = "", 
  delay = 0,
  stagger = 0.1 
}: {
  children: React.ReactNode[]
  className?: string
  delay?: number
  stagger?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children) ? children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      )) : (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}
