import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, MessageCircle } from "lucide-react"

export function VendorCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Vendor Image */}
          <div className="h-24 w-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <img
              src="/african-craft-shop-logo-adinkra-symbols.jpg"
              alt="Adinkra Crafts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Vendor Info */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Link href="/vendor/1">
                  <h3 className="text-xl font-semibold hover:text-primary transition-colors">Adinkra Crafts</h3>
                </Link>
                <Badge variant="secondary">Verified Vendor</Badge>
              </div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Accra, Ghana</span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(234 reviews)</span>
                </div>
                <span className="text-muted-foreground">45 products</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Family-owned business specializing in authentic Ghanaian textiles and crafts. We work directly with local
              artisans to bring you the finest quality products.
            </p>

            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/vendor/1">Visit Store</Link>
              </Button>
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Vendor
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
