import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

const relatedProducts = [
  {
    id: 2,
    name: "Maasai Beaded Necklace",
    vendor: "Maasai Beadwork",
    price: 45.0,
    rating: 5.0,
    reviews: 32,
    image: "/maasai-beaded-necklace-colorful-traditional.jpg",
  },
  {
    id: 6,
    name: "Mudcloth Pillow Cover",
    vendor: "Adinkra Crafts",
    price: 42.0,
    rating: 4.8,
    reviews: 67,
    image: "/african-textiles-colorful-fabrics-patterns.jpg",
  },
  {
    id: 9,
    name: "Batik Wall Hanging",
    vendor: "Adinkra Crafts",
    price: 95.0,
    rating: 4.7,
    reviews: 34,
    image: "/african-textiles-colorful-fabrics-patterns.jpg",
  },
  {
    id: 4,
    name: "Ankara Print Dress",
    vendor: "Sahara Textiles",
    price: 75.0,
    rating: 4.7,
    reviews: 56,
    image: "/ankara-print-dress-african-fashion-colorful.jpg",
  },
]

export function RelatedProducts() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">You May Also Like</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
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
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <Button size="icon" variant="outline">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
