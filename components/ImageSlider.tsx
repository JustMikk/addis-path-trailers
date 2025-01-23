"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3",
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Slide ${currentIndex + 1}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

