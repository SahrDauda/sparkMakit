import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/mock-data"

const cartItems = [
  {
    ...products[0],
    quantity: 1,
  },
  {
    ...products[1],
    quantity: 2,
  },
  {
    ...products[4],
    quantity: 1,
  },
]

export function CheckoutSummary() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 0
  const tax = subtotal * 0.08 // Assuming 8% tax rate
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
