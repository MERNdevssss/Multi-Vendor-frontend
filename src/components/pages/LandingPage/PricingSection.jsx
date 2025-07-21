import React from 'react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: 'Forever',
      button: 'Start Free Trial',
      features: ['1 User', 'Basic Features', 'Limited Support'],
    },
    {
      name: 'Basic',
      price: '$49',
      period: 'Per month',
      button: 'Get Started',
      badge: 'Most Popular',
      features: ['5 Users', 'All Basic Features', 'Priority Support', 'Analytics Dashboard'],
    },
    {
      name: 'Pro',
      price: '$99',
      period: 'Per month',
      button: 'Get Started',
      badge: 'Best Value',
      features: ['10 Users', 'All Pro Features', 'Dedicated Account Manager', 'Custom Integrations'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Security & Compliance</h2>
        <p className="text-gray-600">
          Your data is safe with us. We use SSL encryption, Stripe for secure payment processing, 
          role-based access control, and have clear data policies in place.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-cyan-100 to-white rounded-lg shadow p-6 flex flex-col"
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-medium px-2 py-0.5 rounded-full shadow">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-1 text-gray-600">{plan.period}</span>
              </div>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium mb-4 hover:bg-blue-700 transition">
                {plan.button}
              </button>
              <ul className="space-y-1 text-gray-600 text-sm flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
