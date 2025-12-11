import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const gujaratiMenu = {
  thali: [
    {
      name: "Gujarati Thali [Unlimited]",
      price: "₹140",
      description: "Roti, Dal, Rice, Sabji, Salad, Rotla, Chaas, Papad",
    },
    {
      name: "kathiawadi Thali [Unlimited]",
      price: "₹150",
      description:
        "Roti, Dal, Rice, Sabji, Salad, Rotla, Chaas, Bhakhri, Papad",
    },
  ],
  sabji: [
    { name: "Undhiyu", price: "₹180", popular: true },
    { name: "Sev Tamatar", price: "₹120" },
    { name: "Kadhi", price: "₹100" },
    { name: "Ringan Bataka", price: "₹130" },
    { name: "Bhinda Nu Shaak", price: "₹140" },
    { name: "Gujarati Dal", price: "₹90" },
    { name: "Tindora Bataka", price: "₹120" },
    { name: "Valor Papdi", price: "₹150", popular: true },
  ],
  breads: [
    { name: "Bajra Rotla", price: "₹30" },
    { name: "Thepla", price: "₹40" },
    { name: "Bhakri", price: "₹25" },
    { name: "Puri", price: "₹20" },
    { name: "Masala Puri", price: "₹35" },
  ],
  rice: [
    { name: "Khichdi", price: "₹120" },
    { name: "Vagharelo Bhaat", price: "₹100" },
    { name: "Masala Bhaat", price: "₹110" },
  ],
  sweets: [
    { name: "Mohanthal", price: "₹60", popular: true },
    { name: "Shrikhand", price: "₹70" },
    { name: "Basundi", price: "₹80" },
    { name: "Jalebi", price: "₹50" },
    { name: "Ghughra", price: "₹40" },
  ],
};

export default function GujaratiMenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/gujarati-thali-full-spread-with-kadhi-dhokla-rotla.jpg"
          alt="Gujarati Cuisine"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-krishna-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
            Gujarati Menu
          </h1>
          <p className="text-white/80 mt-4">
            Sweet, tangy, and healthy vegetarian delights
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Menu */}
            <div className="lg:col-span-2 space-y-12">
              {/* Thali Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Thali Options
                </h2>
                <div className="space-y-4">
                  {gujaratiMenu.thali.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-krishna-gold font-bold text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sabji Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Sabji (Vegetables)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gujaratiMenu.sabji.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">
                          {item.name}
                        </span>
                        {item.popular && (
                          <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <span className="text-krishna-gold font-bold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Breads Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Rotis & Breads
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gujaratiMenu.breads.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-krishna-gold font-bold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rice Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Rice Dishes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gujaratiMenu.rice.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-krishna-gold font-bold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sweets Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Sweets (Mithai)
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gujaratiMenu.sweets.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">
                          {item.name}
                        </span>
                        {item.popular && (
                          <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">
                            Best
                          </Badge>
                        )}
                      </div>
                      <span className="text-krishna-gold font-bold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Featured Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/authentic-gujarati-thali-food-colorful-vegetarian-.jpg"
                    alt="Gujarati Food"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-krishna-purple text-white rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4">Gujarati Cuisine</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Known for its unique sweet and tangy flavors, Gujarati
                    cuisine is predominantly vegetarian and uses a perfect
                    balance of spices.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      100% Vegetarian
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Traditional Recipes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Fresh Daily
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
