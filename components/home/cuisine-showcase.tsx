import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const cuisines = [
  {
    id: "gujarati",
    title: "Gujarati Thali",
    description:
      "Amari authentic Kathiawadi Gujarati Thali - Dal, Bhaat, Rotla, Shaak, Kadhi, Papad ane Mithai sathe. Ghar jevi feel ane ghar jevo swad!",
    image: "/images/gujaratithali.jpg",
    features: ["100% Vegetarian", "Unlimited Thali", "Fresh Ingredients"],
    href: "/menu/gujarati",
    reverse: false,
  },
  {
    id: "punjabi",
    title: "Punjabi Cuisine",
    description:
      "Rich and creamy Punjabi dishes - Paneer Butter Masala, Dal Makhani, Naan, Paratha ane ghanu badhu. Tandoor fresh ane tasty!",
    image: "/images/panirkhajana.jpg",
    features: ["Tandoor Fresh", "Rich & Creamy", "Bold Flavors"],
    href: "/menu/punjabi",
    reverse: true,
  },
  {
    id: "chinese",
    title: "Indo-Chinese",
    description:
      "Desi tadka sathe Chinese - Manchurian, Hakka Noodles, Fried Rice, Spring Roll. Indian spices sathe Chinese taste!",
    image: "/images/chinese.jpg",
    features: ["Desi Chinese", "Spicy Options", "Combo Available"],
    href: "/menu/chinese",
    reverse: false,
  },
]

export function CuisineShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Culinary Excellence
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-3 sm:mb-4">
            Amari Signature Cuisines
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Kathiawadi tradition ane authentic taste - Har cuisine ma special vaat che.
          </p>
        </div>

        {/* Cuisine Sections - Mobile optimized */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${
                cuisine.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${cuisine.reverse ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src={cuisine.image || "/placeholder.svg"}
                    alt={cuisine.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Decorative Element - Hidden on mobile */}
                <div
                  className={`absolute -z-10 w-full h-full rounded-2xl bg-krishna-gold/20 hidden sm:block ${
                    cuisine.reverse
                      ? "-left-3 -bottom-3 sm:-left-4 sm:-bottom-4"
                      : "-right-3 -bottom-3 sm:-right-4 sm:-bottom-4"
                  }`}
                />
              </div>

              {/* Content */}
              <div className={cuisine.reverse ? "lg:order-1" : ""}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-3 sm:mb-4">
                  {cuisine.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {cuisine.description}
                </p>
                <ul className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {cuisine.features.map((feature, index) => (
                    <li
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-krishna-gold/10 text-krishna-purple rounded-full text-xs sm:text-sm font-medium"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-krishna-purple hover:bg-krishna-purple-dark text-white w-full sm:w-auto"
                >
                  <Link href={cuisine.href}>
                    Menu Jovoo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
