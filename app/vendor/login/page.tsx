import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function VendorLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Vendor Portal</h1>
          <p className="text-muted-foreground">Sign in to manage your store</p>
        </div>

        <LoginForm userType="vendor" />

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Don't have a vendor account?{" "}
            <Link href="/vendor/register" className="text-primary hover:underline font-medium">
              Apply now
            </Link>
          </p>
          <div className="flex items-center gap-4 justify-center text-sm">
            <Link href="/login" className="text-muted-foreground hover:text-primary">
              Customer Login
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/admin/login" className="text-muted-foreground hover:text-primary">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
