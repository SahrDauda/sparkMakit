"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { vendors } from "@/lib/mock-data"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export function FeaturedVendors() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth
      const newScrollLeft =
        direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })

      const newIndex =
        direction === "left" ? Math.max(0, currentIndex - 1) : Math.min(vendors.length - 1, currentIndex + 1)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Vendors</h2>
          <p className="text-muted-foreground text-lg">Meet our trusted sellers</p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <Link key={vendor.id} href={`/vendor/${vendor.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={vendor.image || "/placeholder.svg"}
                        alt={vendor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                          {vendor.name}
                        </h3>
                        {vendor.verified && (
                          <Badge variant="secondary" className="text-xs flex-shrink-0">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{vendor.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{vendor.rating}</span>
                      <span className="text-muted-foreground">({vendor.reviews})</span>
                    </div>
                    <span className="text-muted-foreground">{vendor.products} products</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {vendors.map((vendor) => (
              <Link key={vendor.id} href={`/vendor/${vendor.id}`} className="snap-start flex-shrink-0 w-[85%]">
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={vendor.image || "/placeholder.svg"}
                          alt={vendor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                            {vendor.name}
                          </h3>
                          {vendor.verified && (
                            <Badge variant="secondary" className="text-xs flex-shrink-0">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{vendor.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{vendor.rating}</span>
                        <span className="text-muted-foreground">({vendor.reviews})</span>
                      </div>
                      <span className="text-muted-foreground">{vendor.products} products</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-md bg-background"
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-md bg-background"
            onClick={() => scroll("right")}
            disabled={currentIndex === vendors.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {vendors.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setCurrentIndex(index)
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: index * scrollRef.current.offsetWidth,
                      behavior: "smooth",
                    })
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
