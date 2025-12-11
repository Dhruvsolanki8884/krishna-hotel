import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const punjabiMenu = {
  starters: [
    { name: "Paneer Tikka", price: "₹220", popular: true },
    { name: "Tandoori Mushroom", price: "₹180" },
    { name: "Hara Bhara Kebab", price: "₹160" },
    { name: "Aloo Tikki", price: "₹120" },
    { name: "Dahi Ke Kebab", price: "₹170" },
    { name: "Veg Seekh Kebab", price: "₹190" },
  ],
  mainCourse: [
    { name: "Paneer Butter Masala", price: "₹260", popular: true },
    { name: "Dal Makhani", price: "₹180", popular: true },
    { name: "Palak Paneer", price: "₹240" },
    { name: "Kadai Paneer", price: "₹250" },
    { name: "Shahi Paneer", price: "₹270" },
    { name: "Malai Kofta", price: "₹280" },
    { name: "Mix Veg Curry", price: "₹200" },
    { name: "Aloo Gobi", price: "₹160" },
    { name: "Chole Masala", price: "₹170" },
    { name: "Rajma Masala", price: "₹160" },
    { name: "Mushroom Do Pyaza", price: "₹230" },
    { name: "Baingan Bharta", price: "₹180" },
  ],
  breads: [
    { name: "Butter Naan", price: "₹50" },
    { name: "Garlic Naan", price: "₹60", popular: true },
    { name: "Laccha Paratha", price: "₹55" },
    { name: "Aloo Paratha", price: "₹70" },
    { name: "Paneer Paratha", price: "₹90" },
    { name: "Missi Roti", price: "₹45" },
    { name: "Rumali Roti", price: "₹40" },
    { name: "Tandoori Roti", price: "₹35" },
  ],
  rice: [
    { name: "Jeera Rice", price: "₹140" },
    { name: "Veg Biryani", price: "₹220", popular: true },
    { name: "Paneer Biryani", price: "₹260" },
    { name: "Pulao", price: "₹160" },
    { name: "Kashmiri Pulao", price: "₹200" },
  ],
  dal: [
    { name: "Dal Tadka", price: "₹140" },
    { name: "Dal Fry", price: "₹130" },
    { name: "Dal Makhani", price: "₹180", popular: true },
    { name: "Yellow Dal", price: "₹110" },
  ],
  thali: [
    {
      name: "Punjabi Thali",
      price: "₹299",
      description: "2 Sabji, Dal, Rice, 3 Roti, Raita, Salad,",
      popular: true,
    },
  ],
};

export default function PunjabiMenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/punjabi-food-butter-chicken-dal-makhani-naan-bread.jpg"
          alt="Punjabi Cuisine"
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
            Punjabi Menu
          </h1>
          <p className="text-white/80 mt-4">
            Rich, creamy, and full of robust flavors
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
                  Punjabi Thali
                </h2>
                <div className="space-y-4">
                  {punjabiMenu.thali.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start p-4 bg-card rounded-xl border border-border hover:border-krishna-gold/50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs">
                              Recommended
                            </Badge>
                          )}
                        </div>
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

              {/* Starters Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Starters / Tandoori
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {punjabiMenu.starters.map((item, index) => (
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

              {/* Main Course Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Main Course (Sabji)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {punjabiMenu.mainCourse.map((item, index) => (
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
                            Bestseller
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

              {/* Dal Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Dal Varieties
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {punjabiMenu.dal.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground text-sm mb-1">
                        {item.name}
                      </span>
                      <span className="text-krishna-gold font-bold">
                        {item.price}
                      </span>
                      {item.popular && (
                        <Badge className="bg-krishna-gold/20 text-krishna-gold text-xs mt-2">
                          Must Try
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Breads Section */}
              <div>
                <h2 className="text-2xl font-bold font-serif text-foreground mb-6 pb-2 border-b border-krishna-gold">
                  Rotis & Breads
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {punjabiMenu.breads.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border"
                    >
                      <span className="font-medium text-foreground text-sm mb-1">
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
                  Rice & Biryani
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {punjabiMenu.rice.map((item, index) => (
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Featured Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="\images\panir.jpg"
                    alt="Punjabi Food"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-krishna-purple text-white rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-4">Punjabi Cuisine</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Experience the heartiness of Punjab with our rich gravies,
                    smoky tandoor items, and butter-laden breads.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Tandoor Specials
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Rich Gravies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-krishna-gold" />
                      Authentic Recipes
                    </li>
                  </ul>
                </div>

                {/* Chef's Special */}
                <div className="bg-krishna-gold text-krishna-purple-dark rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-2">Chef's Special</h3>
                  <p className="font-serif text-xl">Dal Makhani</p>
                  <p className="text-sm mt-2 opacity-80">
                    Slow-cooked overnight for the richest, creamiest flavor
                  </p>
                  <p className="font-bold text-2xl mt-4">₹180</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
