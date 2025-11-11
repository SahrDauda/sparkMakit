"use client"

import type React from "react"
import { useState } from "react"
import { VendorHeader } from "@/components/vendor/vendor-header"
import { VendorSidebar } from "@/components/vendor/vendor-sidebar"

export function VendorLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="h-screen flex flex-col overflow-hidden max-w-full">
      <VendorHeader onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <div className="flex-1 flex overflow-hidden">
        <VendorSidebar isMobileMenuOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <main className="flex-1 lg:ml-64 overflow-auto max-w-full">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-muted/30 min-h-full overflow-x-hidden">
            <div className="max-w-7xl mx-auto overflow-x-hidden">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
