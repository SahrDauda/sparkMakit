import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"
import { vendors } from "@/lib/mock-data"

export function FeaturedVendors() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Vendors</h2>
          <p className="text-muted-foreground text-lg">Meet our trusted sellers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <Link key={vendor.id} href={`/vendor/${vendor.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={vendor.image || "/placeholder.svg"}
                        alt={vendor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                          {vendor.name}
                        </h3>
                        {vendor.verified && (
                          <Badge variant="secondary" className="text-xs flex-shrink-0">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{vendor.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{vendor.rating}</span>
                      <span className="text-muted-foreground">({vendor.reviews})</span>
                    </div>
                    <span className="text-muted-foreground">{vendor.products} products</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
