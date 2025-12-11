"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Tarla Dalal Fan",
    role: "Food Enthusiast",
    image: "/indian-woman-smiling.png",
    content:
      "Hotel Krishna ma Gujarati thali khavi etli authentic ane tasty che ke ghar yaad avi jay. Kathiawadi style ma banavel dal, shaak ane rotla - ekdam ghar jevi feeling!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajkot Food Lover",
    role: "Local Customer",
    image: "/indian-man-portrait-smiling.jpg",
    content:
      "Vanela gathiya ane garam chai - Highway par aatli sari chai koi nahi apay. Family sathe dar weekend e aviye chiye. Staff pan bahuj friendly che.",
    rating: 5,
  },
  {
    id: 3,
    name: "Highway Traveler",
    role: "Regular Visitor",
    image: "/indian-family-portrait-happy.jpg",
    content:
      "Rajkot-Junagadh highway par best food stop. Clean place, fresh food ane reasonable prices. Punjabi food pan bahuj tasty che. Must visit for all travelers!",
    rating: 5,
  },
  {
    id: 4,
    name: "Saurashtra Foodie",
    role: "Food Blogger",
    image: "/young-indian-woman-food-blogger.jpg",
    content:
      "Sev tameta, undhiyu, dal-bhaat - badhu j authentic Kathiawadi taste. Chinese pan Indo-Chinese style ma ekdam mast che. Highly recommended!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-3 sm:mb-4">
            Amara Guests Shu Kahe Che
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">What Our Guests Say</p>
        </div>

        {/* Testimonial Carousel - Mobile optimized */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-krishna-gold/20" />
            </div>

            <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8 md:flex-row">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-krishna-gold">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-krishna-gold text-krishna-gold" />
                  ))}
                </div>

                <p className="text-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div>
                  <h4 className="font-bold text-foreground text-base sm:text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-krishna-purple/10 flex items-center justify-center text-krishna-purple hover:bg-krishna-purple hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex
                        ? "w-5 sm:w-6 bg-krishna-gold"
                        : "bg-krishna-purple/30 hover:bg-krishna-purple/50",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-krishna-purple/10 flex items-center justify-center text-krishna-purple hover:bg-krishna-purple hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
