"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "/images/krishnaphoto.jpg",
    title: "Hotel Krishna ma Aapnu Swagat Che",
    subtitle: "Rajkot-Junagadh Highway par Authentic Kathiawadi Food",
    cta: "Menu Jovoo",
    href: "/menu",
  },
  {
    id: 2,
    image: "/images/gujaratithali.jpg",
    title: "Kathiawadi Gujarati Thali",
    subtitle: "Ghar Jevo Swad - Rotla, Dal, Bhaat, Shaak",
    cta: "Gujarati Menu",
    href: "/menu/gujarati",
  },
  {
    id: 3,
    image: "/images/panirkhajana.jpg",
    title: "Punjabi Tadka",
    subtitle: "Paneer, Naan, Dal Makhani - Mast Flavors",
    cta: "Punjabi Menu",
    href: "/menu/punjabi",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-[60vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-in-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 sm:to-transparent" />

          {/* Content - Mobile optimized */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <p
                  className={cn(
                    "text-krishna-gold text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2 sm:mb-3 md:mb-4 transform transition-all duration-700 delay-200",
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  )}
                >
                  {slide.subtitle}
                </p>
                <h1
                  className={cn(
                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-serif mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight transform transition-all duration-700 delay-300",
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  )}
                >
                  {slide.title}
                </h1>
                <div
                  className={cn(
                    "transform transition-all duration-700 delay-500",
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  )}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark font-semibold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg h-auto"
                  >
                    <Link href={slide.href}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Mobile optimized */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-krishna-gold hover:text-krishna-purple-dark transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-krishna-gold hover:text-krishna-purple-dark transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots - Mobile optimized */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentSlide ? "w-6 sm:w-8 bg-krishna-gold" : "w-2 bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest rotate-90 origin-center translate-x-4">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
