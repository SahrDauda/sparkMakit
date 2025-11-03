import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function CartSummary() {
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
        {/* Promo Code */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Promo Code</label>
          <div className="flex gap-2">
            <Input placeholder="Enter code" />
            <Button variant="outline">Apply</Button>
          </div>
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

        {/* Checkout Button */}
        <Link href="/checkout">
          <Button size="lg" className="w-full">
            Proceed to Checkout
          </Button>
        </Link>

        {/* Trust Badges */}
        <div className="pt-4 space-y-2 text-center text-sm text-muted-foreground">
          <p>🔒 Secure checkout</p>
          <p>✓ Free shipping on orders over $75</p>
        </div>
      </CardContent>
    </Card>
  )
}
