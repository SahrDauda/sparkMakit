import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Card } from "@/components/ui/card"
import { Users, Globe, Shield, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">About SparkMakit</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Connecting vendors with customers worldwide, building bridges through commerce and culture.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                SparkMakit was founded with a simple yet powerful vision: to create a global marketplace that empowers
                vendors to reach customers worldwide while preserving cultural authenticity and fair trade practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of e-commerce to transform lives, support local economies, and bring unique
                products to those who appreciate quality craftsmanship and authentic goods.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=400&width=600" alt="About us" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 space-y-4 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building strong relationships between vendors and customers
                </p>
              </Card>
              <Card className="p-6 space-y-4 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Global Reach</h3>
                <p className="text-sm text-muted-foreground">Connecting markets across borders and continents</p>
              </Card>
              <Card className="p-6 space-y-4 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Trust</h3>
                <p className="text-sm text-muted-foreground">Ensuring secure transactions and quality products</p>
              </Card>
              <Card className="p-6 space-y-4 text-center hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Passion</h3>
                <p className="text-sm text-muted-foreground">Celebrating craftsmanship and cultural heritage</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="hidden md:grid md:grid-cols-3 gap-8 text-center bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Active Vendors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">500K+</div>
              <div className="text-muted-foreground">Products Listed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">2M+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
          </div>

          {/* Mobile/Tablet Auto-Scrolling Carousel */}
          <div className="md:hidden relative bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl overflow-hidden">
            <div className="flex animate-scroll-stats gap-8">
              <div className="flex-shrink-0 w-full text-center space-y-2">
                <div className="text-4xl font-bold text-primary">10,000+</div>
                <div className="text-muted-foreground">Active Vendors</div>
              </div>
              <div className="flex-shrink-0 w-full text-center space-y-2">
                <div className="text-4xl font-bold text-primary">500K+</div>
                <div className="text-muted-foreground">Products Listed</div>
              </div>
              <div className="flex-shrink-0 w-full text-center space-y-2">
                <div className="text-4xl font-bold text-primary">2M+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <div className="h-2 w-2 rounded-full bg-primary/30 animate-dot-pulse" style={{ animationDelay: "0s" }} />
              <div className="h-2 w-2 rounded-full bg-primary/30 animate-dot-pulse" style={{ animationDelay: "3s" }} />
              <div className="h-2 w-2 rounded-full bg-primary/30 animate-dot-pulse" style={{ animationDelay: "6s" }} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
