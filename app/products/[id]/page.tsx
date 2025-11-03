import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ProductImages } from "@/components/products/product-images"
import { ProductInfo } from "@/components/products/product-info"
import { ProductTabs } from "@/components/products/product-tabs"
import { RelatedProducts } from "@/components/products/related-products"
import { VendorCard } from "@/components/products/vendor-card"

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:text-foreground">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="/products" className="hover:text-foreground">
                  Products
                </a>
              </li>
              <li>/</li>
              <li className="text-foreground">Kente Cloth Runner</li>
            </ol>
          </nav>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ProductImages />
            <ProductInfo />
          </div>

          {/* Vendor Info */}
          <div className="mb-12">
            <VendorCard />
          </div>

          {/* Product Tabs */}
          <div className="mb-12">
            <ProductTabs />
          </div>

          {/* Related Products */}
          <RelatedProducts />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
