"use client"

import { useState } from "react"

interface ProductImagesProps {
  product: {
    image: string
    name: string
  }
}

export function ProductImages({ product }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  // Using the same image for thumbnails - in a real app, you'd have multiple images
  const images = [product.image, product.image, product.image, product.image]
  // </CHANGE>

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square rounded-lg overflow-hidden bg-muted">
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt={product.name}
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
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
