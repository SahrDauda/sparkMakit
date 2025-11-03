import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Store, Users, ShoppingCart } from "lucide-react"

const stats = [
  {
    name: "Total Revenue",
    value: "$245,678",
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
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
