import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const topProducts = [
  {
    id: 1,
    name: "Kente Cloth Runner",
    sales: 45,
    revenue: "$4,049.55",
    image: "/kente-cloth-colorful-african-textile.jpg",
  },
  {
    id: 2,
    name: "Mudcloth Pillow Cover",
    sales: 38,
    revenue: "$1,596.00",
    image: "/african-textiles-colorful-fabrics-patterns.jpg",
  },
  {
    id: 3,
    name: "Batik Wall Hanging",
    sales: 29,
    revenue: "$2,755.00",
    image: "/african-textiles-colorful-fabrics-patterns.jpg",
  },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={product.id} className="flex items-center gap-4">
            <Badge variant="secondary" className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
              {index + 1}
            </Badge>
            <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{product.name}</p>
              <p className="text-sm text-muted-foreground">{product.sales} sales</p>
            </div>
            <p className="font-semibold">{product.revenue}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
