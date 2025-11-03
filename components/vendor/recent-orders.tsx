import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const orders = [
  {
    id: "#AFM-2024-0045",
    customer: "Sarah M.",
    product: "Kente Cloth Runner",
    amount: "$89.99",
    status: "pending",
    date: "2 hours ago",
  },
  {
    id: "#AFM-2024-0044",
    customer: "James K.",
    product: "Mudcloth Pillow Cover",
    amount: "$42.00",
    status: "processing",
    date: "5 hours ago",
  },
  {
    id: "#AFM-2024-0043",
    customer: "Maria L.",
    product: "Batik Wall Hanging",
    amount: "$95.00",
    status: "shipped",
    date: "1 day ago",
  },
  {
    id: "#AFM-2024-0042",
    customer: "David R.",
    product: "Kente Cloth Runner",
    amount: "$89.99",
    status: "delivered",
    date: "2 days ago",
  },
]

const statusColors = {
  pending: "default",
  processing: "secondary",
  shipped: "default",
  delivered: "secondary",
} as const

export function RecentOrders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/vendor/orders">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <p className="font-semibold">{order.id}</p>
                  <Badge variant={statusColors[order.status as keyof typeof statusColors]}>{order.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {order.customer} • {order.product}
                </p>
                <p className="text-xs text-muted-foreground">{order.date}</p>
              </div>
              <p className="font-bold">{order.amount}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
