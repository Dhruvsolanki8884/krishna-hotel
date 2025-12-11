import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const teamMembers = [
  {
    name: "Chef Ramesh Kumar",
    role: "Head Chef - Gujarati Cuisine",
    image: "/indian-chef-male-professional-portrait.jpg",
    bio: "With over 20 years of experience, Chef Ramesh brings authentic Gujarati flavors to every dish.",
  },
  {
    name: "Chef Manjeet Singh",
    role: "Head Chef - Punjabi Cuisine",
    image: "/punjabi-chef-male-portrait-with-turban.jpg",
    bio: "A master of tandoor and rich gravies, Chef Manjeet's creations are beloved by all.",
  },
  {
    name: "Chef Priya Sharma",
    role: "Head Chef - Indo-Chinese",
    image: "/indian-female-chef-professional-portrait.jpg",
    bio: "Chef Priya specializes in the perfect fusion of Indian spices with Chinese techniques.",
  },
  {
    name: "Amit Patel",
    role: "Restaurant Manager",
    image: "/indian-restaurant-manager-professional-portrait.jpg",
    bio: "Ensuring every guest receives warm hospitality and exceptional service.",
  },
  {
    name: "Neha Desai",
    role: "Pastry Chef",
    image: "/indian-female-pastry-chef-portrait.jpg",
    bio: "Creating delightful Indian sweets and fusion desserts that end every meal perfectly.",
  },
  {
    name: "Vikram Joshi",
    role: "Sous Chef",
    image: "/young-indian-male-chef-portrait.jpg",
    bio: "A rising culinary talent bringing fresh ideas while honoring traditional recipes.",
  },
]

export default function OurTeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/professional-kitchen-team-indian-chefs-working-tog.jpg" alt="Our Team" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-krishna-gold hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Our Team</h1>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
              The People Behind the Magic
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
              Meet Our Culinary Artists
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team is a family of passionate individuals who share a common love for authentic Indian cuisine. Each
              member brings unique skills and experiences that together create the Hotel Krishna experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-krishna-gold font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-krishna-purple to-krishna-purple-dark text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Want to Join Our Family?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our love for food and hospitality.
          </p>
          <Button asChild size="lg" className="bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark">
            <Link href="/career">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
