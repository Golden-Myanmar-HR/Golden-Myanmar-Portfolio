import React from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutCompanySection from "../components/AboutCompanySection";
import MissionVisionSection from "../components/MissionVisionSection";
import ExpectedGrowthSection from "../components/ExpectedGrowthSection";
import LanguageCenterSection from "../components/LanguageCenterSection";
import PartnershipSection from "../components/PartnershipSection";
import CTASection from "../components/CTASection";

const AboutPage = () => {
  return (
    <main>
      <AboutHeroSection />
      <AboutCompanySection />
      <MissionVisionSection />
      <ExpectedGrowthSection />
      <LanguageCenterSection />
      <PartnershipSection />
      <CTASection />
    </main>
  );
};

export default AboutPage;
