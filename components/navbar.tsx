"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Hind TV
              </motion.div>
            </Link>

            {!isMobile && (
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  Home
                </Link>
                <Link href="/movies" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  Movies
                </Link>
                <Link href="/shows" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  TV Shows
                </Link>
                <Link href="/new" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  New & Popular
                </Link>
                <Link href="/mylist" className="text-sm font-medium hover:text-orange-500 transition-colors">
                  My List
                </Link>
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            {!isMobile ? (
              <>
                {isSearchOpen ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "200px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="relative"
                  >
                    <Input
                      className="bg-gray-900 border-gray-700 focus:border-orange-500 text-sm"
                      placeholder="Search titles..."
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                  </motion.div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                    className="hover:text-orange-500"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" className="hover:text-orange-500">
                  <Bell className="h-5 w-5" />
                </Button>
                <Avatar className="h-8 w-8 border-2 border-transparent hover:border-orange-500 transition-all">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-orange-500"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-900 border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block py-2 text-base font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/movies" className="block py-2 text-base font-medium hover:text-orange-500 transition-colors">
              Movies
            </Link>
            <Link href="/shows" className="block py-2 text-base font-medium hover:text-orange-500 transition-colors">
              TV Shows
            </Link>
            <Link href="/new" className="block py-2 text-base font-medium hover:text-orange-500 transition-colors">
              New & Popular
            </Link>
            <Link href="/mylist" className="block py-2 text-base font-medium hover:text-orange-500 transition-colors">
              My List
            </Link>
            <div className="pt-4 pb-2 border-t border-gray-800 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">User Profile</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="hover:text-orange-500">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-orange-500">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
