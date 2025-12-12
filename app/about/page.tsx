import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Clock, Heart } from "lucide-react";

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50K+", label: "Happy Customers" },
  { value: "100+", label: "Menu Items" },
  { value: "3", label: "Cuisine Types" },
];

const subPages = [
  {
    title: "Our Story",
    description: "Discover the journey that brought Hotel Krishna to life",
    href: "/about/our-story",
    icon: Heart,
  },
  {
    title: "Our Team",
    description: "Meet the passionate people behind every delicious dish",
    href: "/about/our-team",
    icon: Users,
  },
  {
    title: "Awards & Recognition",
    description: "Celebrating our achievements in culinary excellence",
    href: "/about/awards",
    icon: Award,
  },
  {
    title: "Our Legacy",
    description: "Traditions and values that define who we are",
    href: "/about/legacy",
    icon: Clock,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/elegant-indian-restaurant-kitchen-with-chefs-cooki.jpg"
          alt="Hotel Krishna Kitchen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Discover Our Journey
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">
            About Hotel Krishna
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A legacy of authentic Indian cuisine, warm hospitality, and
            unforgettable dining experiences
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-krishna-gold">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-krishna-purple-dark font-serif">
                  {stat.value}
                </p>
                <p className="text-krishna-purple/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/traditional-indian-restaurant-dining-area-with-cul.jpg"
                  alt="Hotel Krishna Dining"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl hidden md:block">
                <Image
                  src="/indian-chef-preparing-food-with-traditional-spices.jpg"
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
                A Tradition of Taste & Hospitality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hotel Krishna was founded with a simple yet profound vision:
                  to bring the authentic flavors of India to every table. What
                  started as a small family-run establishment has grown into a
                  beloved culinary destination.
                </p>
                <p>
                  Our journey began over 25 years ago when our founder, inspired
                  by his grandmother's traditional recipes, decided to share
                  these treasured flavors with the community. Today, we continue
                  to honor that legacy by serving dishes prepared with the same
                  love, care, and authentic techniques.
                </p>
                <p>
                  At Hotel Krishna, we believe that food is more than
                  nourishment—it's an experience that brings people together,
                  creates memories, and celebrates the rich culinary heritage of
                  India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages Navigation */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Learn More
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
              Explore Our Story
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-krishna-gold/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-krishna-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-krishna-purple group-hover:text-white transition-colors">
                    <page.icon className="w-7 h-7 text-krishna-purple group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-krishna-purple transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {page.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-krishna-gold font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-krishna-purple to-krishna-purple-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-krishna-gold/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Heart className="w-8 h-8 text-krishna-gold" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">
                Our Mission
              </h3>
              <p className="text-white/80 leading-relaxed">
                To serve authentic Indian cuisine that delights the senses,
                nourishes the body, and creates lasting memories. We are
                committed to preserving traditional recipes while embracing
                innovation to deliver an exceptional dining experience.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-krishna-gold/20 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Award className="w-8 h-8 text-krishna-gold" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the most beloved destination for authentic Indian cuisine,
                recognized for our commitment to quality, hospitality, and the
                celebration of India's diverse culinary traditions. We aspire to
                bring the warmth of Indian home cooking to every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Ready to Experience Our Hospitality?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit us today and discover why Hotel Krishna has been a favorite
            dining destination for over 25 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-krishna-purple hover:bg-krishna-purple-dark text-white"
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-krishna-purple text-krishna-purple bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
