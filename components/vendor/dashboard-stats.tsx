import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Total Revenue",
    value: "NLe 12,345",
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
    <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 min-w-0">
        {stats.map((stat) => (
          <Card key={stat.name} className="min-w-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-accent">{stat.change}</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{stat.name}</p>
                <p className="text-lg sm:text-2xl font-bold truncate">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
