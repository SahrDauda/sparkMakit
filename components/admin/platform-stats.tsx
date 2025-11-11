import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Store, Users, ShoppingCart } from "lucide-react"

const stats = [
  {
    name: "Total Revenue",
    value: "NLe 245,678",
    change: "+18.2%",
    icon: DollarSign,
    description: "Platform commission",
  },
  {
    name: "Active Vendors",
    value: "156",
    change: "+12",
    icon: Store,
    description: "This month",
  },
  {
    name: "Total Users",
    value: "8,234",
    change: "+234",
    icon: Users,
    description: "Registered customers",
  },
  {
    name: "Total Orders",
    value: "3,456",
    change: "+15.8%",
    icon: ShoppingCart,
    description: "This month",
  },
]

export function PlatformStats() {
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
                <p className="text-xs text-muted-foreground truncate">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
