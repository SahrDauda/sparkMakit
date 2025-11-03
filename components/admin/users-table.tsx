"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Sarah Mitchell",
    email: "sarah.m@example.com",
    orders: 12,
    spent: "$1,234.56",
    status: "active",
    joined: "Jan 2024",
  },
  {
    id: 2,
    name: "James Kim",
    email: "james.k@example.com",
    orders: 8,
    spent: "$876.43",
    status: "active",
    joined: "Feb 2024",
  },
  {
    id: 3,
    name: "Maria Lopez",
    email: "maria.l@example.com",
    orders: 15,
    spent: "$2,145.78",
    status: "active",
    joined: "Dec 2023",
  },
  {
    id: 4,
    name: "David Roberts",
    email: "david.r@example.com",
    orders: 5,
    spent: "$543.21",
    status: "active",
    joined: "Mar 2024",
  },
]

export function UsersTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="text-left p-4 font-semibold">User</th>
                <th className="text-left p-4 font-semibold">Orders</th>
                <th className="text-left p-4 font-semibold">Total Spent</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Joined</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </td>
                  <td className="p-4">{user.orders}</td>
                  <td className="p-4 font-semibold">{user.spent}</td>
                  <td className="p-4">
                    <Badge variant="default">{user.status}</Badge>
                  </td>
                  <td className="p-4 text-muted-foreground">{user.joined}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
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
