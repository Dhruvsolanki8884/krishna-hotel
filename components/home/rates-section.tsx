import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mealPlans = [
  {
    id: "basic",
    name: "Simple Thali",
    price: "₹140",
    description: "Quick meal mate perfect",
    features: ["2 Rotla / Bhakri", "1 Shaak", "Dal", "Bhaat", "Salad", "Papad"],
    popular: false,
  },
  {
    id: "special",
    name: "Special Thali",
    price: "₹180",
    description: "Amari sabse popular thali",
    features: [
      "4 Rotla / Fulka",
      "2 Shaak",
      "Dal Fry",
      "Jeera Bhaat",
      "Raita / Chhash",
      "Salad & Papad",
      "Mithai",
      "Chaas",
    ],
    popular: true,
  },
  {
    id: "royal",
    name: "Royal Thali",
    price: "₹200",
    description: "Special occasion mate grand feast",
    features: [
      "Unlimited Rotla",
      "3 Premium Shaak",
      "Dal Makhani",
      "Pulav / Biryani",
      "Paneer Dish",
      "Raita & Salad",
      "2 Mithai",
      "Welcome Drink",
    ],
    popular: false,
  },
]

export function RatesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Amara Rates
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-3 sm:mb-4">
            Thali Meal Plans
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
            Pet bhari ne khao - Unlimited rotla ane chaas sathe!
          </p>
        </div>

        {/* Pricing Cards - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {mealPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-b from-krishna-purple to-krishna-purple-dark text-white shadow-xl sm:shadow-2xl md:scale-105 z-10"
                  : "bg-card border border-border shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-krishna-gold text-krishna-purple-dark text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap">
                    SABSE POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-5 sm:mb-6">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 ${plan.popular ? "text-white" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm mb-3 sm:mb-4 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-3xl sm:text-4xl font-bold ${plan.popular ? "text-krishna-gold" : "text-krishna-purple"}`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-xs sm:text-sm ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                    /person
                  </span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? "bg-krishna-gold/20" : "bg-krishna-purple/10"
                      }`}
                    >
                      <Check
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${plan.popular ? "text-krishna-gold" : "text-krishna-purple"}`}
                      />
                    </div>
                    <span className={`text-xs sm:text-sm ${plan.popular ? "text-white/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`w-full h-11 sm:h-12 text-sm sm:text-base ${
                  plan.popular
                    ? "bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark"
                    : "bg-krishna-purple hover:bg-krishna-purple-dark text-white"
                }`}
              >
                <Link href="/menu">Order Karo</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
