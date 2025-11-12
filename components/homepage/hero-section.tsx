"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    title: "Discover Quality Products from Global Vendors",
    description:
      "Shop unique items from talented vendors worldwide. Find everything from electronics to fashion, all in one place.",
    image: "/modern-ecommerce-shopping-experience.jpg",
    cta: "Start Shopping",
  },
  {
    id: 2,
    title: "Connect with Trusted Sellers",
    description: "Browse thousands of products from verified vendors. Enjoy secure payments and worldwide delivery.",
    image: "/online-shopping-delivery-packages.jpg",
    cta: "Explore Products",
  },
  {
    id: 3,
    title: "Great Deals Every Day",
    description: "Discover amazing products at competitive prices. New arrivals and special offers updated daily.",
    image: "/shopping-deals-discounts-sale.jpg",
    cta: "Shop Now",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="max-w-2xl space-y-6 text-white py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">{heroSlides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button size="lg" className="text-base w-full sm:w-auto">
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/vendor/register">
              <Button
                size="lg"
                variant="outline"
                className="text-base w-full sm:w-auto bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20"
              >
                Become a Vendor
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-white/90 backdrop-blur hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
