import { VendorLayout } from "@/components/vendor/vendor-layout"
import { DashboardStats } from "@/components/vendor/dashboard-stats"
import { RecentOrders } from "@/components/vendor/recent-orders"
import { SalesChart } from "@/components/vendor/sales-chart"
import { TopProducts } from "@/components/vendor/top-products"

export default function VendorDashboardPage() {
  return (
    <VendorLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Adinkra Crafts</p>
        </div>

        <DashboardStats />

        <div className="grid lg:grid-cols-2 gap-6">
          <SalesChart />
          <TopProducts />
        </div>

        <RecentOrders />
      </div>
    </VendorLayout>
  )
}
