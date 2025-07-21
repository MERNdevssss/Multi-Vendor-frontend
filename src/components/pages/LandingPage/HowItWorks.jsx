import React from 'react';
import { Users, FileText, DollarSign, CreditCard, UserPlus } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-6 h-6 text-gray-600" />,
      title: "Sign Up",
      description: "Create your account in minutes.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Users className="w-6 h-6 text-gray-600" />,
      title: "Add Your Team",
      description: "Invite your team members and assign roles.",
      bgColor: "bg-green-100"
    },
    {
      icon: <FileText className="w-6 h-6 text-gray-600" />,
      title: "Create Jobs",
      description: "Easily create and schedule jobs.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <FileText className="w-6 h-6 text-gray-600" />,
      title: "Send Estimates & Invoices",
      description: "Generate professional estimates and invoices.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-gray-600" />,
      title: "Get Paid",
      description: "Seamlessly process payments from customers.",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <div className="max-w-full mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 relative">
            {/* Icon container */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center`}>
              {step.icon}
            </div>
            
            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 w-px h-6 bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;