"use client"

import Link from "next/link"
import { Bell, LogOut, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface VendorHeaderProps {
  onMenuToggle?: () => void
}

export function VendorHeader({ onMenuToggle }: VendorHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuToggle}>
            <Menu className="h-5 w-5" />
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/design-mode/sparkmakit.png"
              alt="SparkMakit"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden sm:block">
            <p className="text-xs text-muted-foreground">Vendor Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">Tech Haven Store</p>
                  <p className="text-xs text-muted-foreground">vendor@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/vendor/account">Account Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vendor/settings">Store Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/vendor/login" className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
