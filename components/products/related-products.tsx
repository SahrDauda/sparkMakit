import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import { products } from "@/lib/mock-data"

interface RelatedProductsProps {
  currentProductId: string
  category?: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Filter products by category if available, exclude current product
  const relatedProducts = products
    .filter((p) => p.id !== currentProductId && (!category || p.category === category))
    .slice(0, 4)
  // </CHANGE>

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
