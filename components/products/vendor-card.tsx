import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, MessageCircle } from "lucide-react"
import { vendors } from "@/lib/mock-data"

interface VendorCardProps {
  vendor: string
}

export function VendorCard({ vendor: vendorName }: VendorCardProps) {
  // Find vendor in the vendors list or use default data
  const vendorData = vendors.find((v) => v.name === vendorName) || {
    id: 1,
    name: vendorName,
    location: "United States",
    rating: 4.8,
    reviews: 100,
    products: 50,
    verified: true,
  }
  // </CHANGE>

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Vendor Image */}
          <div className="h-24 w-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <img
              src={vendorData.image || "/placeholder.svg?height=96&width=96"}
              alt={vendorData.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Vendor Info */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Link href={`/vendor/${vendorData.id}`}>
                  <h3 className="text-xl font-semibold hover:text-primary transition-colors">{vendorData.name}</h3>
                  {/* </CHANGE> */}
                </Link>
                {vendorData.verified && <Badge variant="secondary">Verified Vendor</Badge>}
              </div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{vendorData.location}</span>
                {/* </CHANGE> */}
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">{vendorData.rating}</span>
                  <span className="text-muted-foreground">({vendorData.reviews} reviews)</span>
                </div>
                <span className="text-muted-foreground">{vendorData.products} products</span>
                {/* </CHANGE> */}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Trusted vendor providing quality products with excellent customer service and fast shipping.
            </p>

            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href={`/vendor/${vendorData.id}`}>Visit Store</Link>
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
