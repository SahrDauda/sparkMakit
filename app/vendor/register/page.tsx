import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { VendorApplicationForm } from "@/components/vendor/vendor-application-form"

export default function VendorRegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-4xl space-y-6 py-8">
        <Link href="/vendor/login">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Button>
        </Link>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Become a SparkMakit Vendor</h1>
          <p className="text-muted-foreground">Join our marketplace and reach customers worldwide</p>
        </div>

        <VendorApplicationForm />
      </div>
    </div>
  )
}
