import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239333ea' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="bg-gradient-to-r from-krishna-purple to-krishna-purple-dark rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4">
            Ready to Experience{" "}
            <span className="text-krishna-gold">Krishna's</span> Flavors?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Visit us today and embark on a culinary journey through the
            authentic flavors of India. We look forward to serving you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark font-semibold px-8"
            >
              <Link href="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-krishna-purple px-8 bg-transparent"
            >
              <a href="tel:+918780809038">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            Open Daily: 10:00 AM - 12:00 AM | Walk-ins Welcome
          </p>
        </div>
      </div>
    </section>
  );
}
