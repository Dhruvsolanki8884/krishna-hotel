"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Amaru Location",
    details: ["somnath Div Highway,vill sonariya", "veraval, Gujarat 362268"],
    action: "Directions Melo",
    href: "https://maps.app.goo.gl/fBmCbGhweoE4XMc59",
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+91 7990532124", "+91 7096798779"],
    action: "Call Karo",
    href: "tel: +8780809038",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["hotelkrishna@gmail.com"],
    action: "Email Karo",
    // href: "mailto:info@hotelkrishna.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Monday - Sunday", "7:00 AM - 12:00 AM"],
    action: "Menu Jovoo",
    href: "/menu",
  },
];

const faqs = [
  {
    question: "Shu tamari pase parking available che?",
    answer:
      "Ha, amari pase moti parking space che trucks, cars ane bikes mate. Highway travelers mate convenient parking che.",
  },
  {
    question: "Shu tame catering service apo cho?",
    answer:
      "Ha, ame weddings, corporate events ane private parties mate catering service apiye chiye. 50 thi 500+ guests mate arrange kari sakiye.",
  },
  {
    question: "Shu badhi dishes vegetarian che?",
    answer:
      "Ha, amaru complete menu 100% pure vegetarian che. Gujarati, Punjabi ane Chinese - badhu j veg che.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero Section - Mobile optimized */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/krishnaphoto.jpg"
          alt="Hotel Krishna - Kathiawad, Gujarat"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            Sampark Karo
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Reservation, inquiry ya feedback mate amne contact karo
          </p>
        </div>
      </section>

      {/* Contact Info Cards - Mobile optimized */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-border hover:border-krishna-gold/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-krishna-purple/10 flex items-center justify-center mb-3 sm:mb-4">
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-krishna-purple" />
                </div>
                <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground text-xs sm:text-sm"
                  >
                    {detail}
                  </p>
                ))}
                <a
                  href={info.href}
                  className="inline-flex items-center gap-2 text-krishna-gold font-medium text-xs sm:text-sm mt-3 sm:mt-4 hover:text-krishna-purple transition-colors"
                >
                  {info.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-krishna-purple/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-krishna-purple" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground">
                    Message Moklo
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    24 hours ma reply karsu
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    Message Moklai Gayo!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you! Ame jaldi reply karsu.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tamaru naam"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background h-11 sm:h-12"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background h-11 sm:h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="phone" className="text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background h-11 sm:h-12"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="subject" className="text-sm">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Shu help joi?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background h-11 sm:h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="message" className="text-sm">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tamaro message lakhoo..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-krishna-purple hover:bg-krishna-purple-dark text-white h-12 sm:h-14 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Message Moklo
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map Section - With actual Google Maps iframe */}
            <div className="space-y-5 sm:space-y-6">
              <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[350px] md:h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8550.998399615992!2d70.44567937649832!3d20.89979949999811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2cd258f7c4349%3A0x71ca8889414f7024!2sHotel%20Krishna!5e0!3m2!1sen!2sin!4v1765445752039!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Krishna Location"
                  className="absolute inset-0"
                />
              </div>

              {/* Additional Info */}
              <div className="bg-krishna-purple text-white rounded-xl sm:rounded-2xl p-5 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Aaj j Aavo!
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                  Rajkot-Junagadh Highway par Hotel Krishna - Trucks, cars ane
                  bikes mate moti parking. Highway travelers mate best food
                  stop!
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <p className="text-krishna-gold font-medium">Breakfast</p>
                    <p className="text-white/80">7:00 AM - 11:00 AM</p>
                  </div>
                  <div>
                    <p className="text-krishna-gold font-medium">Lunch</p>
                    <p className="text-white/80">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="text-krishna-gold font-medium">
                      Evening Snacks
                    </p>
                    <p className="text-white/80">4:00 PM - 7:00 PM</p>
                  </div>
                  <div>
                    <p className="text-krishna-gold font-medium">Dinner</p>
                    <p className="text-white/80">7:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-krishna-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-foreground">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-3 sm:gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-border"
              >
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-krishna-purple to-krishna-purple-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-3 sm:mb-4">
            Jamva Aavjo!
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Walk in anytime - Large groups mate pehla call karo
          </p>
          <a
            href="tel:+91 8780809038"
            className="inline-flex items-center gap-2 bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call +91 8780809038
          </a>
        </div>
      </section>
    </>
  );
}
