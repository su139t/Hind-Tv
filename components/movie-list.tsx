"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface Movie {
  id: number
  title: string
  image: string
  year: number
  rating: string
  duration: string
}

const movieData: Record<string, Movie[]> = {
  trending: [
    {
      id: 1,
      title: "Jab We Met",
      image: "/placeholder.svg?height=400&width=300",
      year: 2007,
      rating: "PG-13",
      duration: "2h 18m",
    },
    {
      id: 2,
      title: "Kabhi Khushi Kabhie Gham",
      image: "/placeholder.svg?height=400&width=300",
      year: 2001,
      rating: "PG",
      duration: "3h 30m",
    },
    {
      id: 3,
      title: "Zindagi Na Milegi Dobara",
      image: "/placeholder.svg?height=400&width=300",
      year: 2011,
      rating: "PG-13",
      duration: "2h 35m",
    },
    {
      id: 4,
      title: "3 Idiots",
      image: "/placeholder.svg?height=400&width=300",
      year: 2009,
      rating: "PG-13",
      duration: "2h 50m",
    },
    {
      id: 5,
      title: "Bajrangi Bhaijaan",
      image: "/placeholder.svg?height=400&width=300",
      year: 2015,
      rating: "PG",
      duration: "2h 43m",
    },
    {
      id: 6,
      title: "Queen",
      image: "/placeholder.svg?height=400&width=300",
      year: 2014,
      rating: "PG-13",
      duration: "2h 26m",
    },
  ],
  new: [
    {
      id: 7,
      title: "Pathaan",
      image: "/placeholder.svg?height=400&width=300",
      year: 2023,
      rating: "PG-13",
      duration: "2h 26m",
    },
    {
      id: 8,
      title: "Animal",
      image: "/placeholder.svg?height=400&width=300",
      year: 2023,
      rating: "R",
      duration: "3h 21m",
    },
    {
      id: 9,
      title: "Rocky Aur Rani Kii Prem Kahaani",
      image: "/placeholder.svg?height=400&width=300",
      year: 2023,
      rating: "PG-13",
      duration: "2h 49m",
    },
    {
      id: 10,
      title: "Jawan",
      image: "/placeholder.svg?height=400&width=300",
      year: 2023,
      rating: "PG-13",
      duration: "2h 49m",
    },
    {
      id: 11,
      title: "Dunki",
      image: "/placeholder.svg?height=400&width=300",
      year: 2023,
      rating: "PG-13",
      duration: "2h 41m",
    },
    {
      id: 12,
      title: "Tiger 3",
      image: "/placeholder.svg?height=400&width=300",
      year: 2023,
      rating: "PG-13",
      duration: "2h 36m",
    },
  ],
  drama: [
    {
      id: 13,
      title: "Gangubai Kathiawadi",
      image: "/placeholder.svg?height=400&width=300",
      year: 2022,
      rating: "R",
      duration: "2h 34m",
    },
    {
      id: 14,
      title: "Gully Boy",
      image: "/placeholder.svg?height=400&width=300",
      year: 2019,
      rating: "PG-13",
      duration: "2h 33m",
    },
    {
      id: 15,
      title: "Raazi",
      image: "/placeholder.svg?height=400&width=300",
      year: 2018,
      rating: "PG-13",
      duration: "2h 18m",
    },
    {
      id: 16,
      title: "Dear Zindagi",
      image: "/placeholder.svg?height=400&width=300",
      year: 2016,
      rating: "PG-13",
      duration: "2h 31m",
    },
    {
      id: 17,
      title: "Barfi!",
      image: "/placeholder.svg?height=400&width=300",
      year: 2012,
      rating: "PG",
      duration: "2h 31m",
    },
    {
      id: 18,
      title: "Udaan",
      image: "/placeholder.svg?height=400&width=300",
      year: 2010,
      rating: "PG-13",
      duration: "2h 14m",
    },
  ],
}

export function MovieList({ category }: { category: string }) {
  const isMobile = useMobile()
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const movies = movieData[category] || []

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            className="relative group"
            variants={item}
            onMouseEnter={() => setHoveredId(movie.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link href={`/movie/${movie.id}`}>
              <motion.div
                className="relative aspect-[2/3] rounded-md overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {hoveredId === movie.id && !isMobile && (
                  <motion.div
                    className="absolute inset-0 bg-black/70 flex flex-col justify-between p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:text-orange-500 hover:bg-black/50"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div>
                      <Button className="w-full bg-white hover:bg-gray-200 text-black mb-2 h-8 text-xs gap-1">
                        <Play className="h-3 w-3" /> Play
                      </Button>

                      <div className="text-xs text-gray-300 flex items-center justify-between">
                        <span>{movie.year}</span>
                        <span>{movie.rating}</span>
                        <span>{movie.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              <h3 className="mt-2 text-sm font-medium line-clamp-1">{movie.title}</h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
