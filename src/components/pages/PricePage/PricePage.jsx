import React from "react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    subtitle: "Forever",
    features: ["1 User", "Basic Features", "Limited Support"],
    button: "Start Free Trial",
  },
  {
    name: "Basic",
    price: "$49",
    subtitle: "Per month",
    features: ["5 Users", "All Basic Features", "Priority Support", "Analytics Dashboard"],
    button: "Get Started",
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$99",
    subtitle: "Per month",
    features: ["10 Users", "All Pro Features", "Dedicated Account Manager", "Custom Integrations"],
    button: "Get Started",
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: ["Unlimited Users", "All Enterprise Features", "White-labeling", "24/7 Support"],
    button: "Contact Us",
  },
];

export default function PricingPage() {
  return (
    <div className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Simple, transparent pricing
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Choose the plan that fits your business needs. Start with a free trial and upgrade as you grow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-6 relative shadow hover:shadow-md transition-all"
          >
            {plan.badge && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                {plan.badge}
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold text-gray-800">
              {plan.price} <span className="text-base font-medium">{plan.subtitle}</span>
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {plan.button}
            </button>
            <ul className="mt-4 text-sm text-gray-700 space-y-1">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          <details className="bg-gray-100 rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              What is included in the free trial?
            </summary>
            <p className="mt-2 text-sm text-gray-600">
              The free trial includes access to all basic features for 14 days. You can add up to 2 users and manage up to 50 dispatches. Support is limited to email and documentation.
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4">
  <summary className="font-medium cursor-pointer">
    What payment methods do you accept?
  </summary>
  <div className="mt-2 text-sm text-gray-600">
    We accept all major credit and debit cards including Visa, MasterCard, and American Express. You can also pay via PayPal and ACH bank transfers. For enterprise clients, we offer invoicing upon request.
  </div>
</details>

<details className="bg-gray-100 rounded-lg p-4">
  <summary className="font-medium cursor-pointer">
    Can I change my plan later?
  </summary>
  <div className="mt-2 text-sm text-gray-600">
    Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings. All changes will be prorated so you’re only billed for what you use.
  </div>
</details>

        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className="text-xl md:text-2xl font-bold mb-2">Ready to get started?</h2>
        <p className="text-gray-600 mb-4">
          Sign up for a free trial and experience the power of DispatchPro System.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 DispatchPro System. All rights reserved.
      </footer>
    </div>
  );
}
