"use client"

import { useState } from "react"
import { Play, Pause, Volume2, Maximize, X, BarChart3, TrendingUp, Users, Zap } from 'lucide-react'
import { GlassCard } from "./glass-card"
import { EnhancedButton } from "./enhanced-button"
import { Modal } from "./modal"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface DemoVideoProps {
  onPlayClick?: () => void
  showModal?: boolean
  onCloseModal?: () => void
}

export function DemoVideo({ onPlayClick, showModal = false, onCloseModal }: DemoVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const totalTime = 120 // 2 minutes demo

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    onPlayClick?.()
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * totalTime
    setCurrentTime(newTime)
  }

  // Simulate video progress when playing
  useState(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalTime) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const DemoPlayer = ({ isFullscreen = false }) => (
    <div className={`relative ${isFullscreen ? 'w-full h-full' : 'aspect-video'} bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden group`}>
      {/* Video Placeholder with Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ 
            scale: isPlaying ? [1, 1.05, 1] : 1,
            rotate: isPlaying ? [0, 2, -2, 0] : 0
          }}
          transition={{ 
            duration: isPlaying ? 4 : 0,
            repeat: isPlaying ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="w-full h-full relative"
        >
          <Image
            src="/placeholder.svg?height=400&width=600&text=ADmyBRAND+AI+Demo"
            alt="ADmyBRAND AI Demo Video"
            fill
            className="object-cover rounded-xl"
            priority
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Demo UI Elements */}
          <div className="absolute inset-0 p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mt-8"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Dashboard Elements */}
      <AnimatePresence>
        {isPlaying && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-semibold">Campaign Performance</span>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-green-400 text-xl font-bold"
              >
                +127% ROI
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-semibold">AI Insights</span>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="text-blue-400 text-xl font-bold"
              >
                23 Recommendations
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-16 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm font-semibold">Automation Status</span>
                </div>
                <span className="text-green-400 text-sm font-medium">Active</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                />
              </div>
              <div className="text-xs text-gray-300">Processing 1,247 leads automatically</div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 3,
                  delay: 2 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full"
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Play/Pause Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
        >
          <motion.div
            animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <button onClick={togglePlay} className="text-white hover:text-purple-400 transition-colors">
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <div className="flex-1 flex items-center gap-2">
            <span className="text-white text-sm">{formatTime(currentTime)}</span>
            <div 
              className="flex-1 h-1 bg-white/30 rounded-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <motion.div 
                className="h-full bg-purple-500 rounded-full"
                animate={{ width: `${(currentTime / totalTime) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-white text-sm">{formatTime(totalTime)}</span>
          </div>

          <button className="text-white hover:text-purple-400 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
          
          {!isFullscreen && (
            <button 
              onClick={() => setShowFullscreen(true)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              <Maximize className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )

  // Only render modals, no content on the page itself
  return (
    <>
      {/* Fullscreen Modal */}
      <Modal
        isOpen={showFullscreen}
        onClose={() => setShowFullscreen(false)}
        className="max-w-6xl h-[80vh]"
      >
        <div className="h-full">
          <DemoPlayer isFullscreen />
        </div>
      </Modal>

      {/* Demo Modal triggered from Hero */}
      <Modal
        isOpen={showModal}
        onClose={onCloseModal || (() => {})}
        className="max-w-4xl"
        title="ADmyBRAND AI Demo"
      >
        <DemoPlayer />
      </Modal>
    </>
  )
}
