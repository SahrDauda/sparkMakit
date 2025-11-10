import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ProductImages } from "@/components/products/product-images"
import { ProductInfo } from "@/components/products/product-info"
import { ProductTabs } from "@/components/products/product-tabs"
import { RelatedProducts } from "@/components/products/related-products"
import { VendorCard } from "@/components/products/vendor-card"
import { products } from "@/lib/mock-data"
// </CHANGE>

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = products.find((p) => p.id === id)

  // If product not found, show a message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }
  // </CHANGE>

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
              <li className="text-foreground">{product.name}</li>
              {/* </CHANGE> */}
            </ol>
          </nav>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ProductImages product={product} />
            <ProductInfo product={product} />
            {/* </CHANGE> */}
          </div>

          {/* Vendor Info */}
          <div className="mb-12">
            <VendorCard vendor={product.vendor} />
            {/* </CHANGE> */}
          </div>

          {/* Product Tabs */}
          <div className="mb-12">
            <ProductTabs product={product} />
            {/* </CHANGE> */}
          </div>

          {/* Related Products */}
          <RelatedProducts currentProductId={product.id} category={product.category} />
          {/* </CHANGE> */}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
