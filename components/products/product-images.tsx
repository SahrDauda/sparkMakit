"use client"

import { useState } from "react"

const images = [
  "/kente-cloth-colorful-african-textile.jpg",
  "/african-textiles-colorful-fabrics-patterns.jpg",
  "/african-marketplace-colorful-products-textiles-cra.jpg",
]

export function ProductImages() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square rounded-lg overflow-hidden bg-muted">
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-lg overflow-hidden bg-muted border-2 transition-colors ${
              selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
