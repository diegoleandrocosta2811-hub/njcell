import HomeHero from "@/components/HomeHero";
import AboutSection from "@/components/AboutSection";
import HomeServices from "@/components/HomeServices";
import ProfessionalCare from "@/components/ProfessionalCare";
import Testimonials from "@/components/Testimonials";
import HomeContact from "@/components/HomeContact";
import StructuredData from "@/components/StructuredData";
import { homeFaqs } from "@/lib/faqs";
import { faqSchema, localBusinessSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <StructuredData data={[localBusinessSchema(), faqSchema(homeFaqs)]} />
      <HomeHero />
      <AboutSection />
      <HomeServices />
      <ProfessionalCare />
      <Testimonials />
      <HomeContact />
    </>
  );
}
