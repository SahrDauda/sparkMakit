import { AdminLayout } from "@/components/admin/admin-layout"
import { UsersTable } from "@/components/admin/users-table"
import { UserFilters } from "@/components/admin/user-filters"

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">Manage customer accounts</p>
        </div>

        <UserFilters />
        <UsersTable />
      </div>
    </AdminLayout>
  )
}
