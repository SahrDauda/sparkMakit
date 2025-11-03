import { HeroSection } from "@/components/homepage/hero-section"
import { FeaturedCategories } from "@/components/homepage/featured-categories"
import { FeaturedVendors } from "@/components/homepage/featured-vendors"
import { FeaturedProducts } from "@/components/homepage/featured-products"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedVendors />
        <FeaturedProducts />
      </main>
      <SiteFooter />
    </div>
  )
}
