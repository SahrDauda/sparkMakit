"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely beautiful! The colors are even more vibrant in person. Great quality and fast shipping.",
    verified: true,
  },
  {
    id: 2,
    author: "James K.",
    rating: 5,
    date: "1 month ago",
    comment: "Purchased this as a gift and it was a huge hit. The craftsmanship is exceptional.",
    verified: true,
  },
  {
    id: 3,
    author: "Maria L.",
    rating: 4,
    date: "1 month ago",
    comment: "Love the design and quality. Took a bit longer to arrive than expected but worth the wait.",
    verified: true,
  },
]

export function ProductTabs() {
  return (
    <Tabs defaultValue="reviews" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="reviews">Reviews (45)</TabsTrigger>
        <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        <TabsTrigger value="care">Care Instructions</TabsTrigger>
      </TabsList>

      <TabsContent value="reviews" className="space-y-6 mt-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback>{review.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{review.author}</span>
                      {review.verified && <span className="text-xs text-muted-foreground">(Verified Purchase)</span>}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="shipping" className="mt-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Shipping Information</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free standard shipping on orders over $75</li>
                <li>• Standard shipping: 5-7 business days</li>
                <li>• Express shipping: 2-3 business days (additional fee)</li>
                <li>• International shipping available to select countries</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Returns & Exchanges</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 30-day return policy for unused items</li>
                <li>• Items must be in original condition with tags attached</li>
                <li>• Free returns on defective or damaged items</li>
                <li>• Exchanges available for different sizes or colors</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="care" className="mt-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Care Instructions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Hand wash in cold water with mild detergent</li>
                <li>• Do not bleach or use harsh chemicals</li>
                <li>• Lay flat to dry away from direct sunlight</li>
                <li>• Iron on low heat if needed</li>
                <li>• Store in a cool, dry place when not in use</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Material Information</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This product is made from 100% natural cotton fibers using traditional weaving techniques. Colors are
                achieved using natural dyes. Some color variation is normal and adds to the authentic, handcrafted
                nature of the piece.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
