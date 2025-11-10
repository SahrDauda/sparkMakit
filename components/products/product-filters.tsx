"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  { id: "electronics", label: "Electronics", count: 234 },
  { id: "fashion", label: "Fashion & Clothing", count: 412 },
  { id: "home", label: "Home & Garden", count: 298 },
  { id: "sports", label: "Sports & Outdoors", count: 189 },
  { id: "beauty", label: "Beauty & Health", count: 167 },
  { id: "toys", label: "Toys & Games", count: 156 },
]

const countries = [
  { id: "usa", label: "United States", count: 145 },
  { id: "uk", label: "United Kingdom", count: 112 },
  { id: "china", label: "China", count: 89 },
  { id: "germany", label: "Germany", count: 67 },
  { id: "japan", label: "Japan", count: 43 },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedCountry, setSelectedCountry] = useState<string>("")

  return (
    <>
      <div className="lg:hidden sticky top-16 z-40 bg-background border-b pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="sm">
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Category Dropdown */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label} ({category.count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Country Dropdown */}
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.id} value={country.id}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Dropdown */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Price Range</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">${priceRange[0]}</span>
              <span className="font-medium">${priceRange[1]}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="hidden lg:block space-y-6">
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
              <Checkbox id="independent" />
              <Label htmlFor="independent" className="text-sm font-normal cursor-pointer">
                Independent Sellers
              </Label>
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full bg-transparent">
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      </div>
    </>
  )
}
