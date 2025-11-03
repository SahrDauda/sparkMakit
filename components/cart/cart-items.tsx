"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus } from "lucide-react"
import Link from "next/link"

const initialCartItems = [
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

export function CartItems() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  if (cartItems.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center space-y-4">
          <p className="text-lg text-muted-foreground">Your cart is empty</p>
          <Link href="/products">
            <Button>Start Shopping</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-4">
            <div className="flex gap-4">
              {/* Product Image */}
              <Link href={`/products/${item.id}`} className="flex-shrink-0">
                <div className="h-24 w-24 rounded-lg overflow-hidden bg-muted">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </Link>

              {/* Product Info */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <Link href={`/products/${item.id}`}>
                      <h3 className="font-semibold hover:text-primary transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.vendor}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="flex-shrink-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    {item.quantity > 1 && (
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
