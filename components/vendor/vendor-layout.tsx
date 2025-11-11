import type React from "react"
import { VendorHeader } from "@/components/vendor/vendor-header"
import { VendorSidebar } from "@/components/vendor/vendor-sidebar"

export function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <VendorHeader />
      <div className="flex-1 flex">
        <VendorSidebar />
        <main className="flex-1 lg:ml-64 p-4 md:p-6 lg:p-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
