import { MovieList } from "@/components/movie-list"
import { HeroSection } from "@/components/hero-section"
import { Categories } from "@/components/categories"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 pb-16">
        <HeroSection />
        <h2 className="text-2xl font-bold mt-16 mb-6">Trending Now</h2>
        <MovieList category="trending" />
        <h2 className="text-2xl font-bold mt-16 mb-6">New Releases</h2>
        <MovieList category="new" />
        <Categories />
        <h2 className="text-2xl font-bold mt-16 mb-6">Popular in Drama</h2>
        <MovieList category="drama" />
      </main>
      <Footer />
    </div>
  )
}
