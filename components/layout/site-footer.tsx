import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand - Always visible */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">SparkMakit</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connecting African artisans and vendors with customers worldwide.
            </p>
            <div className="flex gap-3 md:hidden">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Support - Always visible */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop - Desktop only */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Electronics"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Fashion"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Jewelry"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Company - Desktop only */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vendor/login" className="text-muted-foreground hover:text-foreground transition-colors">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SparkMakit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
