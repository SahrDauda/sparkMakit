"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

const orders = [
  {
    id: "#AFM-2024-0045",
    customer: "Sarah M.",
    product: "Kente Cloth Runner",
    amount: "$89.99",
    status: "pending",
    date: "Jan 15, 2024",
  },
  {
    id: "#AFM-2024-0044",
    customer: "James K.",
    product: "Mudcloth Pillow Cover",
    amount: "$42.00",
    status: "processing",
    date: "Jan 15, 2024",
  },
  {
    id: "#AFM-2024-0043",
    customer: "Maria L.",
    product: "Batik Wall Hanging",
    amount: "$95.00",
    status: "shipped",
    date: "Jan 14, 2024",
  },
  {
    id: "#AFM-2024-0042",
    customer: "David R.",
    product: "Kente Cloth Runner",
    amount: "$89.99",
    status: "delivered",
    date: "Jan 13, 2024",
  },
  {
    id: "#AFM-2024-0041",
    customer: "Emily S.",
    product: "Woven Table Runner",
    amount: "$55.00",
    status: "pending",
    date: "Jan 13, 2024",
  },
]

const statusColors = {
  pending: "default",
  processing: "secondary",
  shipped: "default",
  delivered: "secondary",
} as const

export function OrdersTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="text-left p-4 font-semibold">Order ID</th>
                <th className="text-left p-4 font-semibold">Customer</th>
                <th className="text-left p-4 font-semibold">Product</th>
                <th className="text-left p-4 font-semibold">Amount</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.product}</td>
                  <td className="p-4 font-semibold">{order.amount}</td>
                  <td className="p-4">
                    <Badge variant={statusColors[order.status as keyof typeof statusColors]}>{order.status}</Badge>
                  </td>
                  <td className="p-4 text-muted-foreground">{order.date}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
