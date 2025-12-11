import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const chineseMenu = {
  starters: [
    { name: "Veg Manchurian Dry", price: "₹160", popular: true },
    { name: "Chilli Paneer Dry", price: "₹180", popular: true },
    { name: "Crispy Corn", price: "₹150" },
    { name: "Spring Rolls (4 pcs)", price: "₹140" },
    { name: "Honey Chilli Potato", price: "₹170" },
    { name: "Chilli Mushroom", price: "₹170" },
    { name: "Golden Fried Baby Corn", price: "₹160" },
    { name: "Veg Lollipop", price: "₹150" },
  ],
  soups: [
    { name: "Veg Clear Soup", price: "₹90" },
    { name: "Hot & Sour Soup", price: "₹110" },
    { name: "Manchow Soup", price: "₹120", popular: true },
    { name: "Sweet Corn Soup", price: "₹100" },
  ],
  mainCourse: [
    { name: "Veg Manchurian Gravy", price: "₹180" },
    { name: "Chilli Paneer Gravy", price: "₹200" },
    { name: "Paneer in Hot Garlic Sauce", price: "₹210" },
    { name: "Mushroom in Black Bean Sauce", price: "₹190" },
    { name: "Mix Veg in Schezwan Sauce", price: "₹180" },
    { name: "Tofu Chilli", price: "₹190" },
  ],
  noodles: [
    { name: "Veg Hakka Noodles", price: "₹150", popular: true },
    { name: "Schezwan Noodles", price: "₹160" },
    { name: "Singapore Noodles", price: "₹170" },
    { name: "Chow Mein", price: "₹140" },
    { name: "Pan Fried Noodles", price: "₹180" },
  ],
  rice: [
    { name: "Veg Fried Rice", price: "₹150" },
    { name: "Schezwan Fried Rice", price: "₹160", popular: true },
    { name: "Triple Schezwan Rice", price: "₹190" },
    { name: "Burnt Garlic Rice", price: "₹170" },
    { name: "Singapore Rice", price: "₹180" },
  ],
  combos: [
    {
      name: "Chinese Combo 1",
      price: "₹249",
      description: "Noodles + Manchurian + Cold Drink",
    },
    {
      name: "Chinese Combo 2",
      price: "₹299",
      description: "Fried Rice + Chilli Paneer + Soup",
      popular: true,
    },
    {
      name: "Family Combo",
      price: "₹699",
      description: "2 Noodles + 2 Rice + 2 Starters + 4 Cold Drinks",
    },
  ],
}

export default function ChineseMenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/indo-chinese-food-manchurian-noodles-fried-rice.jpg"
          alt="Chinese Cuisine"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Indo-Chinese Menu</h1>
          <p className="text-white/80 mt-4">Perfect fusion of Indian spices and Chinese techniques</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Menu */}
            <div className="lg:col-span-2 space-y-12">
              {/* Combos Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Value Combos
                </h2>
                <div className="space-y-4">
                  {chineseMenu.combos.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          {item.popular && (
                            <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">Best Value</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <span className="text-krishna-gold font-bold text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soups Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Soups
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {chineseMenu.soups.map((item, index) => (
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

              {/* Starters Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Starters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chineseMenu.starters.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{item.name}</span>
                        {item.popular && (
                          <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">Popular</Badge>
                        )}
                      </div>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Course Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Main Course (Gravy)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chineseMenu.mainCourse.map((item, index) => (
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

              {/* Noodles Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Noodles
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {chineseMenu.noodles.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground text-sm">{item.name}</span>
                        {item.popular && <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">Hot</Badge>}
                      </div>
                      <span className="text-krishna-gold font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rice Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Fried Rice
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {chineseMenu.rice.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-card rounded-xl border border-border"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground text-sm">{item.name}</span>
                        {item.popular && <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">Spicy</Badge>}
                      </div>
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
                    src="/indo-chinese-food-manchurian-noodles-fried-rice.jpg"
                    alt="Indo-Chinese Food"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-krishna-purple text-white rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4">Indo-Chinese</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    A unique fusion born in India, combining Chinese cooking techniques with bold Indian flavors.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Wok Tossed Fresh
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Spice Levels Available
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      100% Vegetarian
                    </li>
                  </ul>
                </div>

                {/* Spice Level Info */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3">Spice Levels</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">●</span> Mild
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-yellow-500">●●</span> Medium
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-red-500">●●●</span> Spicy
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs mt-3">Ask your server to customize spice level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
