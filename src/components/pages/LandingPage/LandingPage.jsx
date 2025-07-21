import React from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import RoleBasedPower from "./RoleBasedPower";
import FeaturesOverview from "./FeaturesOverview";
import PricingSection from "./PricingSection";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <section id="home">
          <HeroSection />
        </section>
        <section id="product">
          <HowItWorks />
          <RoleBasedPower />
          <FeaturesOverview />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
