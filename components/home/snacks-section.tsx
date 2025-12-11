"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const snacks = [
  {
    id: 1,
    name: "Bataka Poha",
    description: "Kathiawadi style poha with bataka, sev and fresh pomegranate",
    price: "₹40",
    image: "/images/batakapova.jpg",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Vanela Gathiya",
    description: "Fresh hot gathiya with kadhi, chutney and masala chai",
    price: "₹50",
    image: "/images/vanelagathiya.jpg",
    tag: "Bestseller",
  },
  {
    id: 3,
    name: "Methi Thepla",
    description: "Soft thepla with methi, served with pickle and chai",
    price: "₹60",
    image: "/images/methithepla.jpeg",
    tag: null,
  },
  {
    id: 4,
    name: "Methi na Bhajiya",
    description: "Crispy methi pakora with green chutney and ketchup",
    price: "₹70",
    image: "/images/methinabhajiya.jpg",
    tag: "Spicy",
  },
  {
    id: 5,
    name: "Aloo Paratha",
    description: "Stuffed paratha with butter, dahi and green chutney",
    price: "₹80",
    image: "/images/alluparotha.jpg",
    tag: null,
  },
  {
    id: 6,
    name: "Masala Fries",
    description: "Crispy fries with special Kathiawadi masala and ketchup",
    price: "₹55",
    image: "/images/chips.jpg",
    tag: "Kids Favorite",
  },
]

export function SnacksSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Crispy & Delicious
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-3 sm:mb-4">
            Kathiawadi Snacks
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Amaro khus khushal Kathiawadi nashto - Garam garam chai sathe majo pado!
          </p>
        </div>

        {/* Snacks Grid - Mobile optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {snacks.map((snack) => (
            <div
              key={snack.id}
              className="group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredId(snack.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={snack.image || "/placeholder.svg"}
                  alt={snack.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  className={cn(
                    "object-cover transition-transform duration-500",
                    hoveredId === snack.id ? "scale-110" : "scale-100",
                  )}
                />
                {snack.tag && (
                  <Badge className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-krishna-gold text-krishna-purple-dark text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                    {snack.tag}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-2.5 sm:p-3 md:p-4">
                <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 truncate">
                  {snack.name}
                </h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs hidden sm:block mb-1.5 sm:mb-2 line-clamp-2">
                  {snack.description}
                </p>
                <p className="text-krishna-gold font-bold text-sm sm:text-base md:text-lg">{snack.price}</p>
              </div>

              {/* Hover Overlay - Hidden on mobile touch devices */}
              <div
                className={cn(
                  "absolute inset-0 bg-krishna-purple/90 hidden md:flex items-center justify-center transition-opacity duration-300",
                  hoveredId === snack.id ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <div className="text-center text-white p-4">
                  <h3 className="font-bold text-lg mb-2">{snack.name}</h3>
                  <p className="text-sm text-white/80 mb-3">{snack.description}</p>
                  <p className="text-krishna-gold font-bold text-xl">{snack.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
