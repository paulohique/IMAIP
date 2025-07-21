import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import NewsCarousel from "@/components/news-carousel" // Corrected import
import { SpecialtiesSection } from "@/components/specialties-section"
import { AppointmentSection } from "@/components/appointment-section"
import { InsuranceSection } from "@/components/insurance-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <NewsCarousel />
      <SpecialtiesSection />
      <AppointmentSection />
      <InsuranceSection />
      <ContactSection />
    </>
  )
}
