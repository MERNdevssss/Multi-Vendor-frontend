import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-[85vh] bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src="/assets/LandingPage/heroSection.png"
                alt="DispatchPro System Dashboard"
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Streamline Your{" "}
              <span className="block">Service Business with</span>{" "}
              <span className="block">OneAim Dispatch</span>{" "}
              <span className="block">System</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              DispatchPro System is the all-in-one solution for service-based
              businesses. Manage your team, jobs, estimates, invoices, and
              payments effortlessly.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
