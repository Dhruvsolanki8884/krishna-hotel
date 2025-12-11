import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Star, Award, Medal } from "lucide-react"

const awards = [
  {
    year: "2023",
    title: "Best Indian Restaurant",
    organization: "Food Excellence Awards",
    icon: Trophy,
    description: "Recognized for outstanding culinary excellence and customer satisfaction.",
  },
  {
    year: "2022",
    title: "Excellence in Hospitality",
    organization: "Gujarat Tourism Board",
    icon: Star,
    description: "Awarded for exceptional service and contribution to local tourism.",
  },
  {
    year: "2021",
    title: "Best Gujarati Thali",
    organization: "Regional Food Festival",
    icon: Award,
    description: "First place for our signature Special Thali preparation.",
  },
  {
    year: "2020",
    title: "Customer Choice Award",
    organization: "Restaurant Association",
    icon: Medal,
    description: "Voted by customers as their favorite dining destination.",
  },
  {
    year: "2018",
    title: "Heritage Cuisine Preservation",
    organization: "Culinary Heritage Foundation",
    icon: Trophy,
    description: "Honored for preserving and promoting traditional Indian recipes.",
  },
  {
    year: "2015",
    title: "Rising Star Restaurant",
    organization: "Food & Beverage Industry Awards",
    icon: Star,
    description: "Recognized as one of the most promising restaurants in the region.",
  },
]

const certifications = [
  "FSSAI Certified",
  "Hygiene Excellence Rating",
  "ISO 22000 Food Safety",
  "Green Restaurant Certified",
]

export default function AwardsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/golden-trophy-awards-ceremony-elegant.jpg" alt="Awards" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-krishna-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Awards & Recognition</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Celebrating Excellence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Our Journey of Recognition
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Over the years, Hotel Krishna has been honored with numerous awards and recognitions that reflect our
              commitment to culinary excellence and exceptional hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-krishna-gold/20 flex items-center justify-center flex-shrink-0">
                    <award.icon className="w-7 h-7 text-krishna-gold" />
                  </div>
                  <div>
                    <span className="text-krishna-purple font-bold text-sm">{award.year}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{award.title}</h3>
                    <p className="text-muted-foreground text-sm">{award.organization}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">Our Certifications</h2>
            <p className="text-muted-foreground mt-2">Meeting the highest standards of quality and safety</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-krishna-purple/10 rounded-full text-krishna-purple font-medium text-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
