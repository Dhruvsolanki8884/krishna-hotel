"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Users,
  Heart,
  Clock,
  Send,
  CheckCircle,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const positions = [
  { value: "waiter", label: "Waiter / Service Staff" },
  { value: "chef", label: "Chef / Cook" },
  { value: "kitchen-helper", label: "Kitchen Helper" },
  { value: "cashier", label: "Cashier" },
  { value: "cleaner", label: "Cleaning Staff" },
  { value: "other", label: "Other" },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Competitive Salary",
    description: "Industry-standard pay with regular increments",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Work with a supportive and friendly team",
  },
  {
    icon: Heart,
    title: "Staff Meals",
    description: "Complimentary meals during your shift",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Multiple shift options available",
  },
];

export default function CareerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentLocation: "",
    expectedSalary: "",
    availability: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      currentLocation: "",
      expectedSalary: "",
      availability: "",
      message: "",
    });

    // Reset success message after 5 seconds
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="/professional-kitchen-team-indian-chefs-working-tog.jpg"
          alt="Career"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-krishna-purple-dark/90 to-krishna-purple/70" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Join Our Family
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">
            Career Opportunities
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Be part of a team that creates memorable dining experiences every
            day
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Why Work With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
              Employee Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border hover:border-krishna-gold/50 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-krishna-purple/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-krishna-purple" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-krishna-purple/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-krishna-purple" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
                  Apply Now
                </h2>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below to submit your application
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for your interest in joining Hotel Krishna. Our HR
                    team will review your application and contact you within 3-5
                    business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentLocation">
                          Current Location *
                        </Label>
                        <Input
                          id="currentLocation"
                          name="currentLocation"
                          placeholder="City, State"
                          value={formData.currentLocation}
                          onChange={handleChange}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                      Job Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="position">
                          Position Applying For *
                        </Label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) =>
                            handleSelectChange("position", value)
                          }
                          required
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((pos) => (
                              <SelectItem key={pos.value} value={pos.value}>
                                {pos.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">
                          Years of Experience *
                        </Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) =>
                            handleSelectChange("experience", value)
                          }
                          required
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fresher">
                              Fresher (No Experience)
                            </SelectItem>
                            <SelectItem value="1-2">1-2 Years</SelectItem>
                            <SelectItem value="3-5">3-5 Years</SelectItem>
                            <SelectItem value="5+">5+ Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expectedSalary">
                          Expected Salary (Monthly)
                        </Label>
                        <Input
                          id="expectedSalary"
                          name="expectedSalary"
                          placeholder="e.g., ₹15,000 - ₹20,000"
                          value={formData.expectedSalary}
                          onChange={handleChange}
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="availability">
                          When Can You Start? *
                        </Label>
                        <Select
                          value={formData.availability}
                          onValueChange={(value) =>
                            handleSelectChange("availability", value)
                          }
                          required
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">
                              Immediately
                            </SelectItem>
                            <SelectItem value="1-week">
                              Within 1 Week
                            </SelectItem>
                            <SelectItem value="2-weeks">
                              Within 2 Weeks
                            </SelectItem>
                            <SelectItem value="1-month">
                              Within 1 Month
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                      Additional Information
                    </h3>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Why do you want to work at Hotel Krishna?
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about yourself, your skills, and why you'd be a great fit for our team..."
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-background resize-none"
                        />
                      </div>

                      {/* Resume Upload Placeholder */}
                      <div className="space-y-2">
                        <Label>Upload Resume (Optional)</Label>
                        <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-krishna-gold/50 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Drag and drop your resume here, or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PDF, DOC up to 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-krishna-purple hover:bg-krishna-purple-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Submitting Application...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Application
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-muted-foreground text-xs">
                    By submitting this application, you agree to our privacy
                    policy and consent to being contacted regarding job
                    opportunities.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-krishna-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
              Currently Hiring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Waiter / Service Staff",
                type: "Full Time",
                salary: "₹10,000 - ₹15,000",
              },
              {
                title: "Kitchen Helper",
                type: "Full Time",
                salary: "₹10,000 - ₹12,000",
              },
              {
                title: "Experienced Cook",
                type: "Full Time",
                salary: "₹20,000 - ₹30,000",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-krishna-gold/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-foreground">{job.title}</h3>
                  <span className="px-3 py-1 bg-krishna-gold/20 text-krishna-gold text-xs font-medium rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Salary: {job.salary}/month
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-krishna-purple text-krishna-purple bg-transparent"
                  onClick={() => {
                    const position = job.title.toLowerCase().includes("waiter")
                      ? "waiter"
                      : job.title.toLowerCase().includes("kitchen")
                      ? "kitchen-helper"
                      : "chef";
                    setFormData((prev) => ({ ...prev, position }));
                    document
                      .getElementById("fullName")
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-gradient-to-r from-krishna-purple to-krishna-purple-dark text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Have Questions?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our HR department for any queries related to job openings
            and applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+91 8780809038"
              className="inline-flex items-center gap-2 bg-krishna-gold hover:bg-krishna-gold-light text-krishna-purple-dark font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Call HR: +91 8780809038
            </a>
            <a
              href="mailto:hr@hotelkrishna.com"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Email: hotelkrishna@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
