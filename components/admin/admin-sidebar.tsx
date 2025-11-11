"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Store, BarChart3 } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Vendors", href: "/admin/vendors", icon: Store },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
]

interface AdminSidebarProps {
  isMobileMenuOpen: boolean
  onClose: () => void
}

export function AdminSidebar({ isMobileMenuOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40 top-16" onClick={onClose} />}

      <aside
        className={cn(
          "fixed left-0 top-16 bottom-0 w-64 border-r bg-background z-40 transition-transform duration-300",
          "lg:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Admin Portal</h2>
              <p className="text-sm text-muted-foreground">Platform management</p>
            </div>

            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  )
}
