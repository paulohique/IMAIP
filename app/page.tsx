import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { NewsCarousel } from "@/components/news-carousel" // Import the new component
import { SpecialtiesSection } from "@/components/specialties-section"
import { AppointmentSection } from "@/components/appointment-section"
import { InsuranceSection } from "@/components/insurance-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <NewsCarousel /> {/* Add the new NewsCarousel component here */}
      <SpecialtiesSection />
      <AppointmentSection />
      <InsuranceSection />
    </>
  )
}
