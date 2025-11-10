import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { products } from "@/lib/mock-data"

export function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {product.badge && (
              <Badge className="absolute top-3 left-3" variant={product.badge === "Sale" ? "destructive" : "default"}>
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
  )
}
