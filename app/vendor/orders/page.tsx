import { VendorLayout } from "@/components/vendor/vendor-layout"
import { OrdersTable } from "@/components/vendor/orders-table"
import { OrderFilters } from "@/components/vendor/order-filters"

export default function VendorOrdersPage() {
  return (
    <VendorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">Manage and fulfill customer orders</p>
        </div>

        <OrderFilters />
        <OrdersTable />
      </div>
    </VendorLayout>
  )
}
