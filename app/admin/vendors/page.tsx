"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { VendorsTable } from "@/components/admin/vendors-table"
import { VendorFilters } from "@/components/admin/vendor-filters"
import { AddVendorModal } from "@/components/admin/add-vendor-modal"
import { useState } from "react"

export default function AdminVendorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Vendors</h1>
            <p className="text-muted-foreground">Manage marketplace vendors</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Vendor
          </Button>
        </div>

        <VendorFilters />
        <VendorsTable />
      </div>

      <AddVendorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AdminLayout>
  )
}
