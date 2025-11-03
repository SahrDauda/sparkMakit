import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Total Revenue",
    value: "$12,345",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    name: "Total Orders",
    value: "234",
    change: "+8.2%",
    icon: ShoppingCart,
    trend: "up",
  },
  {
    name: "Products Listed",
    value: "45",
    change: "+3",
    icon: Package,
    trend: "up",
  },
  {
    name: "Conversion Rate",
    value: "3.2%",
    change: "+0.5%",
    icon: TrendingUp,
    trend: "up",
  },
]

export function DashboardStats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.name}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-accent">{stat.change}</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.name}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
