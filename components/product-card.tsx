"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  vendor: string
  image: string
  index?: number
}

export function ProductCard({ id, name, price, vendor, image, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
        <Link href={`/products/${id}`}>
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <motion.img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </Link>
        <CardContent className="p-4">
          <Link href={`/products/${id}`}>
            <h3 className="font-semibold text-foreground hover:text-primary transition-colors text-balance">{name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">{vendor}</p>
          <p className="text-lg font-bold text-primary mt-2">${price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
