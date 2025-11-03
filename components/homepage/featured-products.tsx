import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Kente Cloth Runner",
    vendor: "Adinkra Crafts",
    price: 89.99,
    originalPrice: 120.0,
    rating: 4.9,
    reviews: 45,
    image: "/kente-cloth-colorful-african-textile.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Maasai Beaded Necklace",
    vendor: "Maasai Beadwork",
    price: 45.0,
    rating: 5.0,
    reviews: 32,
    image: "/maasai-beaded-necklace-colorful-traditional.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Wooden Giraffe Sculpture",
    vendor: "Zulu Art Gallery",
    price: 125.0,
    rating: 4.8,
    reviews: 28,
    image: "/wooden-giraffe-sculpture-african-art.jpg",
  },
  {
    id: 4,
    name: "Ankara Print Dress",
    vendor: "Sahara Textiles",
    price: 75.0,
    originalPrice: 95.0,
    rating: 4.7,
    reviews: 56,
    image: "/ankara-print-dress-african-fashion-colorful.jpg",
    badge: "Sale",
  },
  {
    id: 5,
    name: "Shea Butter Gift Set",
    vendor: "Natural Beauty Co",
    price: 35.0,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Bestseller",
  },
  {
    id: 6,
    name: "Mudcloth Pillow Cover",
    vendor: "Adinkra Crafts",
    price: 42.0,
    rating: 4.8,
    reviews: 67,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    name: "Brass Ashanti Stool",
    vendor: "Zulu Art Gallery",
    price: 180.0,
    rating: 5.0,
    reviews: 23,
    image: "/placeholder.svg?height=400&width=400",
    badge: "New",
  },
  {
    id: 8,
    name: "Woven Basket Set",
    vendor: "Sahara Textiles",
    price: 55.0,
    originalPrice: 70.0,
    rating: 4.6,
    reviews: 41,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Sale",
  },
]

export function FeaturedProducts() {
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
          {products.map((product) => (
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
