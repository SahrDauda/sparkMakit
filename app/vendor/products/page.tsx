import { VendorLayout } from "@/components/vendor/vendor-layout"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ProductsTable } from "@/components/vendor/products-table"
import Link from "next/link"

export default function VendorProductsPage() {
  return (
    <VendorLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground">Manage your product listings</p>
          </div>
          <Button asChild>
            <Link href="/vendor/products/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Link>
          </Button>
        </div>

        <ProductsTable />
      </div>
    </VendorLayout>
  )
}
