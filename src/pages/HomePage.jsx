import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AchievementsSection from '../components/AchievementsSection';
import InterviewProcessSection from '../components/InterviewProcessSection';
import PartnershipSection from '../components/PartnershipSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AchievementsSection />
      <InterviewProcessSection />
      <PartnershipSection />
      <CTASection />
    </main>
  );
};

export default HomePage;