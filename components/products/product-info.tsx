"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react"

interface ProductInfoProps {
  product: {
    name: string
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    badge?: string
    description: string
    stock: number
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  // </CHANGE>
  const [quantity, setQuantity] = useState(1)

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0
  // </CHANGE>

  return (
    <div className="space-y-6">
      {/* Title and Rating */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">{product.name}</h1>
          {/* </CHANGE> */}
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${star <= Math.round(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
          {/* </CHANGE> */}
        </div>

        {product.badge && <Badge className="w-fit">{product.badge}</Badge>}
        {/* </CHANGE> */}
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              <Badge variant="destructive">{discountPercent}% OFF</Badge>
            </>
          )}
          {/* </CHANGE> */}
        </div>
        <p className="text-sm text-muted-foreground">Tax included. Shipping calculated at checkout.</p>
        <p className="text-sm font-medium text-primary">{product.stock} items in stock</p>
        {/* </CHANGE> */}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h3 className="font-semibold">Description</h3>
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
        {/* </CHANGE> */}
      </div>

      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="font-semibold">Quantity</label>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button variant="outline" size="icon" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>
            +
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button size="lg" className="flex-1">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button size="lg" variant="outline">
          Buy Now
        </Button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t">
        <div className="flex flex-col items-center text-center gap-2">
          <Truck className="h-6 w-6 text-primary" />
          <span className="text-xs text-muted-foreground">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xs text-muted-foreground">Secure Payment</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <RotateCcw className="h-6 w-6 text-primary" />
          <span className="text-xs text-muted-foreground">30-Day Returns</span>
        </div>
      </div>
    </div>
  )
}
