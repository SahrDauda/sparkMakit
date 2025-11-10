import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md space-y-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Button>
        </Link>

        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Admin Portal</h1>
          <p className="text-muted-foreground">Secure administrative access</p>
        </div>

        <LoginForm userType="admin" />

        <div className="text-center">
          <div className="flex items-center gap-4 justify-center text-sm">
            <Link href="/login" className="text-muted-foreground hover:text-primary">
              Customer Login
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/vendor/login" className="text-muted-foreground hover:text-primary">
              Vendor Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
