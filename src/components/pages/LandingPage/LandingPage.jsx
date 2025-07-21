import React from "react";
import NavbarLandingPage from "./Navbar";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import RoleBasedPower from "./RoleBasedPower";
import FeaturesOverview from "./FeaturesOverview";
import PricingSection from "./PricingSection";
import Footer from "./Footer";
function LandingPage() {
  return (
    <>
      <NavbarLandingPage />
      <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <HowItWorks />
          <RoleBasedPower />
          <FeaturesOverview />
          <PricingSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
