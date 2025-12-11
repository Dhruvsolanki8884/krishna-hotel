"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "gujarati",
    title: "Gujarati Thali",
    description: "Kathiawadi style - Dal, Bhaat, Rotla, Shaak, Kadhi",
    image: "/images/gujaratithali.jpg",
    href: "/menu/gujarati",
    color: "from-orange-500/80",
  },
  {
    id: "punjabi",
    title: "Punjabi",
    description: "Paneer, Naan, Dal Makhani - Rich & Creamy",
    image: "/images/panirkhajana.jpg",
    href: "/menu/punjabi",
    color: "from-red-500/80",
  },
  {
    id: "chinese",
    title: "Indo-Chinese",
    description: "Manchurian, Noodles, Fried Rice - Desi Style",
    image: "/images/chinese.jpg",
    href: "/menu/chinese",
    color: "from-yellow-600/80",
  },
]

export function CategoryCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Amari Specialties
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-3 sm:mb-4">
            Explore Our Cuisines
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Kathiawadi Gujarat thi authentic swad - Gujarati, Punjabi ane Indo-Chinese
          </p>
        </div>

        {/* Category Cards - Mobile optimized grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] xl:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden touch-manipulation"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image with Zoom Effect */}
              <div
                className={cn(
                  "absolute inset-0 transition-transform duration-700 ease-out",
                  hoveredId === category.id ? "scale-110" : "scale-100",
                )}
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t to-transparent transition-opacity duration-500",
                  category.color,
                  "opacity-80 sm:opacity-70",
                )}
              />

              {/* Content - Always visible on mobile */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="transform transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white font-serif mb-1.5 sm:mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                    <span>Menu Jovoo</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 md:top-4 md:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
