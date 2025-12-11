import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const snacksMenu = {
  gujaratiSnacks: [
    { name: "Fafda", price: "₹50", popular: true },
    { name: "Gathiya", price: "₹45", popular: true },
    { name: "Khaman", price: "₹60" },
    { name: "Dhokla", price: "₹55" },
    { name: "Khandvi", price: "₹70" },
    { name: "Thepla (4 pcs)", price: "₹80" },
    { name: "Methi Gota", price: "₹65" },
    { name: "Bhajiya", price: "₹50" },
  ],
  chaats: [
    { name: "Sev Puri (6 pcs)", price: "₹60", popular: true },
    { name: "Pani Puri (8 pcs)", price: "₹50", popular: true },
    { name: "Dahi Puri", price: "₹70" },
    { name: "Bhel Puri", price: "₹60" },
    { name: "Papdi Chaat", price: "₹80" },
    { name: "Ragda Pattice", price: "₹90" },
    { name: "Samosa Chaat", price: "₹80" },
    { name: "Aloo Tikki Chaat", price: "₹85" },
  ],
  samosas: [
    { name: "Veg Samosa (2 pcs)", price: "₹40" },
    { name: "Punjabi Samosa (2 pcs)", price: "₹50" },
    { name: "Cheese Samosa (2 pcs)", price: "₹70" },
    { name: "Chinese Samosa (2 pcs)", price: "₹60" },
  ],
  pakoras: [
    { name: "Mix Veg Pakora", price: "₹60" },
    { name: "Onion Pakora", price: "₹50" },
    { name: "Paneer Pakora", price: "₹90" },
    { name: "Bread Pakora", price: "₹60" },
    { name: "Aloo Pakora", price: "₹50" },
  ],
  beverages: [
    { name: "Masala Chai", price: "₹30" },
    { name: "Filter Coffee", price: "₹40" },
    { name: "Lassi (Sweet/Salt)", price: "₹60" },
    { name: "Mango Lassi", price: "₹80" },
    { name: "Buttermilk", price: "₹40" },
    { name: "Fresh Lime Soda", price: "₹50" },
    { name: "Cold Coffee", price: "₹90" },
  ],
}

export default function SnacksMenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image src="/indian-street-food-chaat-variety-snacks.jpg" alt="Indian Snacks" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-krishna-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Snacks & Chaats</h1>
          <p className="text-white/80 mt-4">Crispy, savory, and irresistibly delicious</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Menu */}
            <div className="lg:col-span-2 space-y-12">
              {/* Gujarati Snacks */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Gujarati Snacks
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {snacksMenu.gujaratiSnacks.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <span className="font-medium text-foreground text-sm mb-1">{item.name}</span>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
                      {item.popular && (
                        <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs mt-2">Popular</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chaats */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Chaats
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {snacksMenu.chaats.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <span className="font-medium text-foreground text-sm mb-1">{item.name}</span>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
                      {item.popular && (
                        <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs mt-2">Must Try</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Samosas */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Samosas
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {snacksMenu.samosas.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground text-sm mb-1">{item.name}</span>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pakoras */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Pakoras / Bhajiya
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {snacksMenu.pakoras.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beverages */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Beverages
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {snacksMenu.beverages.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground text-sm mb-1">{item.name}</span>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
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
                    src="/sev-puri-indian-street-food-chaat.jpg"
                    alt="Indian Snacks"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-krishna-purple text-white rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4">Snack Time</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Our snacks are made fresh throughout the day using traditional recipes and the finest ingredients.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Made Fresh Daily
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Traditional Recipes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      No Preservatives
                    </li>
                  </ul>
                </div>

                {/* Special Offer */}
                <div className="bg-krishna-gold text-krishna-purple-dark rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-2">Evening Special</h3>
                  <p className="text-sm opacity-80 mb-4">4 PM - 7 PM Daily</p>
                  <p className="font-serif text-xl">Fafda + Jalebi Combo</p>
                  <p className="font-bold text-2xl mt-2">₹99</p>
                  <p className="text-xs mt-2 opacity-70">*With complimentary chai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
