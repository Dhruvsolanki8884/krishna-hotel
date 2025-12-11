import { HeroSlider } from "@/components/home/hero-slider"
import { CategoryCards } from "@/components/home/category-cards"
import { SnacksSection } from "@/components/home/snacks-section"
import { RatesSection } from "@/components/home/rates-section"
import { CuisineShowcase } from "@/components/home/cuisine-showcase"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { CallToAction } from "@/components/home/call-to-action"

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoryCards />
      <SnacksSection />
      <RatesSection />
      <CuisineShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  )
}
