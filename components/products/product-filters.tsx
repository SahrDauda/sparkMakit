"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const categories = [
  { id: "textiles", label: "Textiles & Fabrics", count: 234 },
  { id: "jewelry", label: "Jewelry & Accessories", count: 189 },
  { id: "art", label: "Art & Sculptures", count: 156 },
  { id: "home", label: "Home Decor", count: 298 },
  { id: "fashion", label: "Fashion & Clothing", count: 412 },
  { id: "beauty", label: "Beauty & Wellness", count: 167 },
]

const countries = [
  { id: "ghana", label: "Ghana", count: 89 },
  { id: "nigeria", label: "Nigeria", count: 145 },
  { id: "kenya", label: "Kenya", count: 67 },
  { id: "south-africa", label: "South Africa", count: 112 },
  { id: "senegal", label: "Senegal", count: 43 },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between lg:hidden">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm">
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <Label
                htmlFor={category.id}
                className="text-sm font-normal cursor-pointer flex-1 flex items-center justify-between"
              >
                <span>{category.label}</span>
                <span className="text-muted-foreground">({category.count})</span>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">${priceRange[0]}</span>
            <span className="font-medium">${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Country of Origin */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Country of Origin</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {countries.map((country) => (
            <div key={country.id} className="flex items-center space-x-2">
              <Checkbox id={country.id} />
              <Label
                htmlFor={country.id}
                className="text-sm font-normal cursor-pointer flex-1 flex items-center justify-between"
              >
                <span>{country.label}</span>
                <span className="text-muted-foreground">({country.count})</span>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Vendor Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Vendor Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="verified" />
            <Label htmlFor="verified" className="text-sm font-normal cursor-pointer">
              Verified Vendors Only
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="artisan" />
            <Label htmlFor="artisan" className="text-sm font-normal cursor-pointer">
              Independent Artisans
            </Label>
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full bg-transparent">
        <X className="h-4 w-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  )
}
