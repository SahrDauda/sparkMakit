import type React from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <div className="flex-1 flex">
        <AdminSidebar />
        <main className="flex-1 lg:ml-64 p-4 md:p-6 lg:p-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
