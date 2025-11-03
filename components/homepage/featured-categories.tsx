import Link from "next/link"
import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Textiles & Fabrics",
    image: "/african-textiles-colorful-fabrics-patterns.jpg",
    count: 234,
  },
  {
    name: "Jewelry & Accessories",
    image: "/african-jewelry-beaded-accessories.jpg",
    count: 189,
  },
  {
    name: "Art & Sculptures",
    image: "/african-art-wooden-sculptures-masks.jpg",
    count: 156,
  },
  {
    name: "Home Decor",
    image: "/african-home-decor-baskets-pottery.jpg",
    count: 298,
  },
  {
    name: "Fashion & Clothing",
    image: "/african-fashion-traditional-clothing.jpg",
    count: 412,
  },
  {
    name: "Beauty & Wellness",
    image: "/african-beauty-products-natural-skincare.jpg",
    count: 167,
  },
]

export function FeaturedCategories() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Explore our diverse collection of authentic African products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{category.count} items</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
