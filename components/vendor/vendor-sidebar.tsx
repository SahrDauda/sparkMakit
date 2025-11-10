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

export function VendorSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r bg-background z-40">
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
  )
}
