"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Store, ShoppingCart, BarChart3, Settings, Shield } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Vendors", href: "/admin/vendors", icon: Store },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Platform Settings", href: "/admin/settings", icon: Settings },
  { name: "Security", href: "/admin/security", icon: Shield },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r bg-background z-40">
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
