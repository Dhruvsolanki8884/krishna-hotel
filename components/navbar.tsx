"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact Us" },
  { href: "/career", label: "Career" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent",
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
            {/* Logo - Responsive sizes */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 z-50">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <Image
                  src="/images/krishna-20image.webp"
                  alt="Hotel Krishna Logo"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1024px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <div className="hidden xs:block sm:block">
                <h1
                  className={cn(
                    "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif transition-colors",
                    scrolled ? "text-primary" : "text-white",
                  )}
                >
                  Hotel Krishna
                </h1>
                <p
                  className={cn(
                    "text-[10px] sm:text-xs md:text-sm tracking-wider transition-colors",
                    scrolled ? "text-muted-foreground" : "text-white/80",
                  )}
                >
                  Kathiawadi Swad
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Larger text */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base lg:text-lg xl:text-xl font-medium transition-all duration-200 hover:text-krishna-gold relative group",
                    scrolled ? "text-foreground" : "text-white",
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-krishna-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden z-50 p-2 rounded-lg transition-colors",
                isOpen ? "text-white" : scrolled ? "text-foreground" : "text-white",
              )}
              aria-label="Toggle menu"
            >
              <Menu className={cn("w-6 h-6 sm:w-7 sm:h-7", isOpen ? "hidden" : "block")} />
              <X className={cn("w-6 h-6 sm:w-7 sm:h-7", isOpen ? "block" : "hidden")} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay - Enhanced dim effect */}
      <div
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar - Full width on small screens */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-80 sm:max-w-[85vw] bg-gradient-to-b from-krishna-purple to-krishna-purple-dark z-40 transform transition-transform duration-300 ease-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 sm:pt-24 pb-6 sm:pb-8 px-5 sm:px-6">
          {/* Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex-1">
            <ul className="space-y-1 sm:space-y-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={cn(
                    "transform transition-all duration-300",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  )}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 sm:py-5 px-4 text-white text-lg sm:text-xl font-medium rounded-lg hover:bg-white/10 transition-colors group active:bg-white/20"
                  >
                    {link.label}
                    <ChevronRight className="w-5 h-5 text-krishna-gold transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer with Call Button */}
          <div className="border-t border-white/20 pt-5 sm:pt-6 mt-4 sm:mt-6 space-y-4">
            <div className="text-center">
              <p className="text-white/80 text-xs sm:text-sm">Daily Open</p>
              <p className="text-krishna-gold font-semibold text-base sm:text-lg">7:00 AM - 11:00 PM</p>
            </div>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-krishna-gold text-krishna-purple-dark font-semibold py-3 sm:py-4 rounded-xl hover:bg-krishna-gold-light transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Call Karo</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
