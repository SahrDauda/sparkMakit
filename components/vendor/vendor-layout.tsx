import type React from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { VendorSidebar } from "@/components/vendor/vendor-sidebar"

export function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex">
        <VendorSidebar />
        <main className="flex-1 p-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
