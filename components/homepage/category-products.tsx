"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/mock-data"
import { useRef } from "react"

interface CategoryProductsProps {
  category: string
  title: string
}

export function CategoryProducts({ category, title }: CategoryProductsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categoryProducts = products.filter((product) => product.category === category)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  if (categoryProducts.length === 0) return null

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="text-muted-foreground">Browse our {category.toLowerCase()} collection</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="hidden sm:flex">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="hidden sm:flex">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoryProducts.map((product) => (
            <Card
              key={product.id}
              className="group flex-shrink-0 w-[280px] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge
                    className="absolute top-3 left-3"
                    variant={product.badge === "Sale" ? "destructive" : "default"}
                  >
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="space-y-1">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{product.vendor}</p>
                </div>

                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button size="icon" variant="outline">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/products?category=${category}`}>
            <Button variant="outline" className="bg-transparent">
              View All {category}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
