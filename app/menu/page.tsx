import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuCategories = [
  {
    id: "gujarati",
    title: "Gujarati",
    description: "Sweet, tangy, and healthy vegetarian delights from Gujarat",
    image: "/gujarati-thali-full-spread-with-kadhi-dhokla-rotla.jpg",
    href: "/menu/gujarati",
    items: "50+ Items",
  },
  {
    id: "punjabi",
    title: "Punjabi",
    description: "Rich, creamy, and full of robust North Indian flavors",
    image: "/punjabi-food-butter-chicken-dal-makhani-naan-bread.jpg",
    href: "/menu/punjabi",
    items: "40+ Items",
  },
  {
    id: "chinese",
    title: "Chinese",
    description: "Indo-Chinese fusion with the perfect blend of spices",
    image: "/indo-chinese-food-manchurian-noodles-fried-rice.jpg",
    href: "/menu/chinese",
    items: "35+ Items",
  },
  {
    id: "snacks",
    title: "Snacks",
    description: "Crispy, savory traditional Indian snacks and chaats",
    image: "/indian-street-food-chaat-variety-snacks.jpg",
    href: "/menu/snacks",
    items: "25+ Items",
  },
]

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/elegant-indian-food-spread-multiple-dishes-top-vie.jpg"
          alt="Our Menu"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-4">Discover Our Flavors</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">Our Menu</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our diverse collection of authentic Indian cuisines, each crafted with passion and tradition
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-krishna-gold text-krishna-purple-dark text-xs font-semibold rounded-full mb-3">
                      {category.items}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-2">{category.title}</h2>
                    <p className="text-white/80 mb-4 max-w-sm">{category.description}</p>
                    <div className="flex items-center gap-2 text-krishna-gold font-medium">
                      <span>View Menu</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* View Full Menu CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">Want to See Everything?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Download our complete menu with all items and prices
          </p>
          <Button size="lg" className="bg-krishna-purple hover:bg-krishna-purple-dark text-white">
            Download Full Menu (PDF)
          </Button>
        </div>
      </section>

      {/* Special Thali Section */}
      <section className="py-20 bg-gradient-to-r from-krishna-purple to-krishna-purple-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">Our Specialty</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">The Famous Krishna Thali</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Experience the complete Indian meal with our signature thali. A perfect combination of flavors,
                textures, and nutrition served on a traditional platter. Each thali includes a variety of dishes that
                represent the best of Indian cuisine.
              </p>
              <ul className="space-y-3 mb-8">
                {["Unlimited Rotis", "2 Premium Sabjis", "Dal & Rice", "Papad & Salad", "Sweet Dish", "Buttermilk"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-krishna-gold">₹249</span>
                <span className="text-white/60">per person</span>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark"
              >
                <Link href="/contact">Visit Us Today</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gujarati-thali-full-spread-with-kadhi-dhokla-rotla.jpg"
                  alt="Krishna Special Thali"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-krishna-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
