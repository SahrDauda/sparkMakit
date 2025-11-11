"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { products as allProducts } from "@/lib/mock-data"

const products = allProducts.slice(0, 4).map((product, index) => ({
  ...product,
  stock: [12, 8, 3, 0][index],
  status: ["active", "active", "low-stock", "out-of-stock"][index] as "active" | "low-stock" | "out-of-stock",
  sales: [45, 38, 29, 15][index],
}))

export function ProductsTable() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="w-full min-w-[640px]">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="text-left p-3 sm:p-4 font-semibold text-xs sm:text-sm">Product</th>
                <th className="text-left p-3 sm:p-4 font-semibold text-xs sm:text-sm">Price</th>
                <th className="text-left p-3 sm:p-4 font-semibold text-xs sm:text-sm">Stock</th>
                <th className="text-left p-3 sm:p-4 font-semibold text-xs sm:text-sm">Status</th>
                <th className="text-left p-3 sm:p-4 font-semibold text-xs sm:text-sm">Sales</th>
                <th className="text-right p-3 sm:p-4 font-semibold text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4 text-xs sm:text-sm">NLe {product.price.toFixed(2)}</td>
                  <td className="p-3 sm:p-4 text-xs sm:text-sm">{product.stock}</td>
                  <td className="p-3 sm:p-4">
                    <Badge
                      variant={
                        product.status === "active"
                          ? "default"
                          : product.status === "low-stock"
                            ? "secondary"
                            : "destructive"
                      }
                      className="text-xs"
                    >
                      {product.status === "active" && "Active"}
                      {product.status === "low-stock" && "Low Stock"}
                      {product.status === "out-of-stock" && "Out of Stock"}
                    </Badge>
                  </td>
                  <td className="p-3 sm:p-4 text-xs sm:text-sm">{product.sales}</td>
                  <td className="p-3 sm:p-4">
                    <div className="flex items-center justify-end gap-1 sm:gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                        <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                            <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
