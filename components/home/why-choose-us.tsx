import { Utensils, Clock, Users, Award, Leaf, Heart } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Kathiawadi Recipes",
    description: "Authentic Kathiawadi recipes - Ghar jevo swad",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Daily fresh vegetables ane pure ghee use kariye",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Jaldi service - Highway travelers mate perfect",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Families ane groups mate aaram thi bethvani jagya",
  },
  {
    icon: Award,
    title: "Highway Best",
    description: "Rajkot-Junagadh Highway par best food stop",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Har dish prem ane passion sathe banavi",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-krishna-purple to-krishna-purple-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Kem Hotel Krishna?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-3 sm:mb-4">
            Krishna Experience
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Kathiawadi tradition ane hospitality - Amari specialty che!
          </p>
        </div>

        {/* Features Grid - Mobile optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-krishna-gold/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-krishna-gold" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
