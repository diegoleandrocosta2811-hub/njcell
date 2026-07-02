import dynamic from "next/dynamic";
import HomeHero from "@/components/HomeHero";
import AboutSection from "@/components/AboutSection";
import HomeServices from "@/components/HomeServices";
import ProfessionalCare from "@/components/ProfessionalCare";
import StructuredData from "@/components/StructuredData";
import { homeFaqs } from "@/lib/faqs";
import { getGoogleReviews, hasGoogleReviews } from "@/lib/reviews/get-google-reviews";
import { buildHomeSchemaGraph } from "@/lib/schema";

const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const HomeContact = dynamic(() => import("@/components/HomeContact"));

export const revalidate = 86_400;

export default async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <>
      <StructuredData
        data={buildHomeSchemaGraph(
          hasGoogleReviews(googleReviews) ? googleReviews.summary : undefined,
        )}
      />
      <HomeHero />
      <AboutSection />
      <HomeServices />
      <ProfessionalCare />
      {hasGoogleReviews(googleReviews) ? (
        <div className="deferred-section">
          <Testimonials data={googleReviews} />
        </div>
      ) : null}
      <div className="deferred-section">
        <FAQ items={homeFaqs} />
      </div>
      <div className="deferred-section">
        <HomeContact />
      </div>
    </>
  );
}
