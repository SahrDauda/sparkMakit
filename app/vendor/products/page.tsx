"use client"

import { VendorLayout } from "@/components/vendor/vendor-layout"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProductsTable } from "@/components/vendor/products-table"
import { AddProductModal } from "@/components/vendor/add-product-modal"
import { useState } from "react"

export default function VendorProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <VendorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground">Manage your product listings</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        <ProductsTable />
      </div>

      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </VendorLayout>
  )
}
