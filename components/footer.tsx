import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact Us" },
  { href: "/career", label: "Career" },
];

const cuisines = [
  { href: "/menu/gujarati", label: "Gujarati Thali" },
  { href: "/menu/punjabi", label: "Punjabi" },
  { href: "/menu/chinese", label: "Indo-Chinese" },
  { href: "/menu/snacks", label: "Kathiawadi Snacks" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-krishna-purple-dark to-krishna-purple text-white">
      {/* Main Footer - Mobile optimized */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4 sm:space-y-6">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <Image
                  src="/images/krishna-20image.webp"
                  alt="Hotel Krishna Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif">
                  Hotel Krishna
                </h3>
                <p className="text-xs sm:text-sm text-white/70">
                  Kathiawadi Swad
                </p>
              </div>
            </Link>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Somnath, Div Highway, Vill, Sonariya, authentic Kathiawadi
              Gujarati, Punjabi ane Indo-Chinese food. Ghar jevo swad!
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-krishna-gold transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-krishna-gold transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-krishna-gold transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-krishna-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-krishna-gold transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Cuisines */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-krishna-gold">
              Amari Cuisines
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {cuisines.map((cuisine) => (
                <li key={cuisine.href}>
                  <Link
                    href={cuisine.href}
                    className="text-white/80 hover:text-krishna-gold transition-colors text-xs sm:text-sm"
                  >
                    {cuisine.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-krishna-gold">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-krishna-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-xs sm:text-sm">
                  SOMNATH, DIV HIGHWAY, VILL,
                  <br />
                  Sonariya, Veraval, Gujarat 362268
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-krishna-gold flex-shrink-0" />
                <span className="text-white/80 text-xs sm:text-sm">
                  +91 8780809038
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-krishna-gold flex-shrink-0" />
                <span className="text-white/80 text-xs sm:text-sm">
                  hotelkrishna@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-krishna-gold flex-shrink-0" />
                <span className="text-white/80 text-xs sm:text-sm">
                  10:00 AM - 12:00 AM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-white/60 text-xs sm:text-sm">
              © {new Date().getFullYear()} Hotel Krishna. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-krishna-gold text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-krishna-gold text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
