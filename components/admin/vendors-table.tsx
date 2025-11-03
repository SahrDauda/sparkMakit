"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Ban, CheckCircle } from "lucide-react"

const vendors = [
  {
    id: 1,
    name: "Adinkra Crafts",
    email: "contact@adinkracrafts.com",
    location: "Accra, Ghana",
    products: 45,
    sales: "$12,345",
    status: "active",
    joined: "Jan 2023",
  },
  {
    id: 2,
    name: "Sahara Textiles",
    email: "info@saharatextiles.com",
    location: "Lagos, Nigeria",
    products: 78,
    sales: "$9,876",
    status: "active",
    joined: "Mar 2023",
  },
  {
    id: 3,
    name: "Maasai Beadwork",
    email: "hello@maasaibeads.com",
    location: "Nairobi, Kenya",
    products: 32,
    sales: "$8,234",
    status: "active",
    joined: "May 2023",
  },
  {
    id: 4,
    name: "Zulu Art Gallery",
    email: "contact@zuluart.com",
    location: "Cape Town, South Africa",
    products: 91,
    sales: "$7,654",
    status: "pending",
    joined: "Jan 2024",
  },
]

export function VendorsTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="text-left p-4 font-semibold">Vendor</th>
                <th className="text-left p-4 font-semibold">Location</th>
                <th className="text-left p-4 font-semibold">Products</th>
                <th className="text-left p-4 font-semibold">Total Sales</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Joined</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="font-semibold">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">{vendor.email}</p>
                    </div>
                  </td>
                  <td className="p-4">{vendor.location}</td>
                  <td className="p-4">{vendor.products}</td>
                  <td className="p-4 font-semibold">{vendor.sales}</td>
                  <td className="p-4">
                    <Badge variant={vendor.status === "active" ? "default" : "secondary"}>{vendor.status}</Badge>
                  </td>
                  <td className="p-4 text-muted-foreground">{vendor.joined}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {vendor.status === "pending" && (
                        <Button variant="ghost" size="sm" className="text-accent">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      {vendor.status === "active" && (
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Ban className="h-4 w-4" />
                        </Button>
                      )}
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
