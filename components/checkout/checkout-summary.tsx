import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const cartItems = [
  {
    id: 1,
    name: "Kente Cloth Runner",
    vendor: "Adinkra Crafts",
    price: 89.99,
    quantity: 1,
    image: "/kente-cloth-colorful-african-textile.jpg",
  },
  {
    id: 2,
    name: "Maasai Beaded Necklace",
    vendor: "Maasai Beadwork",
    price: 45.0,
    quantity: 2,
    image: "/maasai-beaded-necklace-colorful-traditional.jpg",
  },
  {
    id: 5,
    name: "Shea Butter Gift Set",
    vendor: "Natural Beauty Co",
    price: 35.0,
    quantity: 1,
    image: "/african-beauty-products-natural-skincare.jpg",
  },
]

export function CheckoutSummary() {
  const subtotal = 204.99
  const shipping = 0
  const tax = 16.4
  const total = subtotal + shipping + tax

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="h-16 w-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.vendor}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                  <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-medium text-accent">Free</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
