import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-accent" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Order Confirmed!</h1>
                <p className="text-muted-foreground text-lg">Thank you for your purchase</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-2">
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="text-2xl font-bold">#AFM-2024-0001</p>
              </div>

              <div className="space-y-2">
                <p className="text-muted-foreground">
                  We've sent a confirmation email to{" "}
                  <span className="font-medium text-foreground">john@example.com</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  You'll receive shipping updates as your order is processed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="flex-1">
                  <Link href="/orders">View Order Details</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
