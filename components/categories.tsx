"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Film, Tv, Heart, Award, Flame, Clock } from "lucide-react"

const categories = [
  { name: "Action", icon: <Flame className="h-5 w-5" />, color: "from-red-500 to-orange-500" },
  { name: "Drama", icon: <Award className="h-5 w-5" />, color: "from-blue-500 to-purple-500" },
  { name: "Romance", icon: <Heart className="h-5 w-5" />, color: "from-pink-500 to-red-500" },
  { name: "Comedy", icon: <Tv className="h-5 w-5" />, color: "from-green-500 to-teal-500" },
  { name: "Thriller", icon: <Clock className="h-5 w-5" />, color: "from-yellow-500 to-amber-500" },
  { name: "Classics", icon: <Film className="h-5 w-5" />, color: "from-purple-500 to-indigo-500" },
]

export function Categories() {
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
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {categories.map((category) => (
          <motion.div key={category.name} variants={item}>
            <Link href={`/category/${category.name.toLowerCase()}`}>
              <motion.div
                className={`bg-gradient-to-br ${category.color} rounded-lg p-6 h-32 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
