"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Info, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full h-[70vh] rounded-xl overflow-hidden mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />

      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Featured Movie"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 z-20 p-8 md:p-16 w-full md:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white">Dil Dhadakne Do</h1>
          <p className="text-lg text-gray-200 mb-6 line-clamp-2 md:line-clamp-3">
            A dysfunctional family invites their relatives and friends on a cruise trip to celebrate the parents' 30th
            wedding anniversary. However, buried resentments and love affairs surface during the journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 gap-2" size="lg">
              <Play className="h-5 w-5" /> Play
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 gap-2" size="lg">
              <Info className="h-5 w-5" /> More Info
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
