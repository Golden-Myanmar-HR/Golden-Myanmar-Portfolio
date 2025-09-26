import React from "react";
import ServiceHeroSection from "../components/ServiceHeroSection";
import OurService from "../components/OurService";
import OurProcess from "../components/OurProcess";
import CTASection from "../components/CTASection";

const ServicePage = () => {
  return (
    <main>
      <ServiceHeroSection />
      <OurService />
      <OurProcess />
      {/* <PartnershipSection /> */}
      <CTASection />
    </main>
  );
};

export default ServicePage;
