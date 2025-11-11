"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Settings, Store } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/vendor/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/vendor/products", icon: Package },
  { name: "Orders", href: "/vendor/orders", icon: ShoppingCart },
  { name: "Analytics", href: "/vendor/analytics", icon: BarChart3 },
  { name: "Store Settings", href: "/vendor/settings", icon: Store },
  { name: "Account", href: "/vendor/account", icon: Settings },
]

interface VendorSidebarProps {
  isMobileMenuOpen: boolean
  onClose: () => void
}

export function VendorSidebar({ isMobileMenuOpen, onClose }: VendorSidebarProps) {
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
              <h2 className="text-lg font-semibold">Vendor Portal</h2>
              <p className="text-sm text-muted-foreground">Manage your store</p>
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
