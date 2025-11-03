import { AdminLayout } from "@/components/admin/admin-layout"
import { PlatformStats } from "@/components/admin/platform-stats"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { VendorActivity } from "@/components/admin/vendor-activity"
import { RecentTransactions } from "@/components/admin/recent-transactions"

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform overview and analytics</p>
        </div>

        <PlatformStats />

        <div className="grid lg:grid-cols-2 gap-6">
          <RevenueChart />
          <VendorActivity />
        </div>

        <RecentTransactions />
      </div>
    </AdminLayout>
  )
}
