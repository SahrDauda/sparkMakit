import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SparkMakit - Multi-Vendor Marketplace",
  description: "Connecting vendors with customers worldwide",
  generator: "v0.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-pyZn0WFWAs02dSu9tHF2m29px4BVrI.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-pyZn0WFWAs02dSu9tHF2m29px4BVrI.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
