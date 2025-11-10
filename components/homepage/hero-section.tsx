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
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative">
          {/* Carousel Container */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px]">
            {/* Text Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="text-base w-full sm:w-auto">
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  Become a Vendor
                </Button>
              </div>
            </div>

            {/* Hero Image Carousel */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={heroSlides[currentSlide].image || "/placeholder.svg"}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
