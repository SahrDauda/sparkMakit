"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function VendorFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search vendors..." className="pl-10" />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Vendors</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="pending">Pending Approval</SelectItem>
          <SelectItem value="suspended">Suspended</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-countries">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-countries">All Countries</SelectItem>
          <SelectItem value="ghana">Ghana</SelectItem>
          <SelectItem value="nigeria">Nigeria</SelectItem>
          <SelectItem value="kenya">Kenya</SelectItem>
          <SelectItem value="south-africa">South Africa</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline">Export</Button>
    </div>
  )
}
