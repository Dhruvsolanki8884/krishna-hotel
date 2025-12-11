import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Users, Utensils, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Love in Every Dish",
    description:
      "Every recipe is prepared with the same love and care that has been passed down through generations of our family.",
  },
  {
    icon: Users,
    title: "Family First",
    description:
      "We treat every guest as family, ensuring they feel welcomed and cherished from the moment they walk through our doors.",
  },
  {
    icon: Utensils,
    title: "Authentic Traditions",
    description:
      "We preserve and honor traditional cooking methods and recipes, keeping the authentic flavors of India alive.",
  },
  {
    icon: Sparkles,
    title: "Continuous Excellence",
    description:
      "While honoring tradition, we continuously strive to improve and deliver the best possible dining experience.",
  },
]

export default function LegacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/traditional-indian-cooking-spices-and-utensils-vin.jpg" alt="Our Legacy" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-krishna-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Our Legacy</h1>
        </div>
      </section>

      {/* Legacy Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
                Preserving Tradition
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
                A Heritage Worth Preserving
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The legacy of Hotel Krishna is built on the foundation of authentic Indian culinary traditions. Our
                  recipes have been carefully preserved and passed down through three generations, each adding their own
                  touch while maintaining the essence of our heritage.
                </p>
                <p>
                  From the traditional masala grinding techniques to the age-old methods of slow cooking, we ensure that
                  every dish served at Hotel Krishna carries the authentic flavors that have been cherished for decades.
                </p>
                <p>
                  Our legacy is not just about food—it's about the values of hospitality, respect, and love that have
                  defined Indian culture for centuries. When you dine at Hotel Krishna, you become part of this
                  continuing tradition.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/traditional-indian-grandmother-cooking-old-photogr.jpg" alt="Traditional cooking" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-krishna-gold/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-krishna-purple/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-krishna-purple" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradition Image Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">Glimpses of Tradition</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=traditional indian cooking scene ${i}`}
                  alt={`Tradition ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
