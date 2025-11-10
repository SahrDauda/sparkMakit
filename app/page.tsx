import { HeroSection } from "@/components/homepage/hero-section"
import { FeaturedCategories } from "@/components/homepage/featured-categories"
import { FeaturedVendors } from "@/components/homepage/featured-vendors"
import { CategoryProducts } from "@/components/homepage/category-products"
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
        <CategoryProducts category="Electronics" title="Electronics & Gadgets" />
        <CategoryProducts category="Home & Kitchen" title="Home & Kitchen Essentials" />
        <CategoryProducts category="Sports & Fitness" title="Sports & Fitness" />
        <CategoryProducts category="Clothing" title="Fashion & Apparel" />
        <CategoryProducts category="Accessories" title="Accessories" />
      </main>
      <SiteFooter />
    </div>
  )
}
