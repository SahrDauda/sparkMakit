import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { products } from "@/lib/mock-data"

export function FeaturedProducts() {
  // Take first 8 products for homepage
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Trending Products</h2>
            <p className="text-muted-foreground text-lg">Discover what's popular this week</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            View All Products
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
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
                  <Link href={`/product/${product.id}`}>
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

        <div className="text-center md:hidden">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
