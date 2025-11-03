import type React from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex">
        <AdminSidebar />
        <main className="flex-1 p-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
