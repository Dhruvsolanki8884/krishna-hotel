import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const timeline = [
  {
    year: "1998",
    title: "The Beginning",
    description:
      "Hotel Krishna opened its doors as a small family restaurant with just 20 seats, serving authentic Gujarati thalis.",
  },
  {
    year: "2005",
    title: "Growing Family",
    description:
      "Expanded to include Punjabi cuisine, welcoming a new chef from Punjab who brought traditional recipes from his homeland.",
  },
  {
    year: "2010",
    title: "New Horizons",
    description:
      "Added Indo-Chinese fusion menu, renovated the restaurant, and increased seating capacity to accommodate growing demand.",
  },
  {
    year: "2015",
    title: "Recognition",
    description:
      "Received our first culinary award for Best Gujarati Restaurant, recognizing our commitment to authentic flavors.",
  },
  {
    year: "2020",
    title: "Innovation",
    description:
      "Launched our modernized menu while staying true to traditional recipes, introducing new dishes that honor our heritage.",
  },
  {
    year: "Today",
    title: "Continuing Legacy",
    description:
      "Serving thousands of happy customers daily, Hotel Krishna remains committed to quality, authenticity, and hospitality.",
  },
]

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/vintage-indian-restaurant-old-photographs-sepia-to.jpg" alt="Our Story" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-krishna-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Our Story</h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">Since 1998</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              From Humble Beginnings to Culinary Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The story of Hotel Krishna is one of passion, perseverance, and an unwavering commitment to bringing
              authentic Indian flavors to our community. What began as a small dream has blossomed into a beloved
              culinary institution.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-krishna-purple/20 hidden md:block" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <span className="text-krishna-gold font-bold text-xl">{item.year}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start justify-center">
                  <div className="w-4 h-4 rounded-full bg-krishna-purple border-4 border-background shadow-lg" />
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-krishna-gold">
                <Image
                  src="/elderly-indian-man-portrait-founder.jpg"
                  alt="Founder"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif text-foreground italic mb-6">
              "Every dish we serve carries the love and tradition of generations. Our food is not just nourishment—it's
              a celebration of our heritage."
            </blockquote>
            <p className="text-krishna-purple font-semibold">- Shri Krishnakant Patel</p>
            <p className="text-muted-foreground">Founder, Hotel Krishna</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Button asChild size="lg" className="bg-krishna-purple hover:bg-krishna-purple-dark text-white">
            <Link href="/about">Explore More About Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
