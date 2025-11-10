import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your customer account</p>
        </div>

        <LoginForm userType="customer" />

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </p>
          <div className="flex items-center gap-4 justify-center text-sm">
            <Link href="/vendor/login" className="text-muted-foreground hover:text-primary">
              Vendor Login
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
