import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const vendors = [
  {
    name: "Adinkra Crafts",
    sales: "$12,345",
    orders: 234,
    trend: "up",
    change: "+12.5%",
  },
  {
    name: "Sahara Textiles",
    sales: "$9,876",
    orders: 189,
    trend: "up",
    change: "+8.2%",
  },
  {
    name: "Maasai Beadwork",
    sales: "$8,234",
    orders: 156,
    trend: "up",
    change: "+15.3%",
  },
  {
    name: "Zulu Art Gallery",
    sales: "$7,654",
    orders: 145,
    trend: "down",
    change: "-2.1%",
  },
]

export function VendorActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Vendors</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {vendors.map((vendor) => (
          <div key={vendor.name} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1">
              <p className="font-semibold">{vendor.name}</p>
              <p className="text-sm text-muted-foreground">{vendor.orders} orders</p>
            </div>
            <div className="text-right space-y-1">
              <p className="font-bold">{vendor.sales}</p>
              <div className="flex items-center gap-1">
                {vendor.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-accent" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={`text-xs ${vendor.trend === "up" ? "text-accent" : "text-destructive"}`}>
                  {vendor.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
