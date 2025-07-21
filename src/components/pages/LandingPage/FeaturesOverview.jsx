import React from 'react';
import { 
  Wrench, 
  BarChart3, 
  CreditCard, 
  Clock, 
  Shield, 
  MessageSquare, 
  TrendingUp, 
  FileText 
} from 'lucide-react';

export default function FeaturesOverview() {
  const features = [
    {
      title: 'Customer & Job Management',
      description: 'Manage customer information and job details in one place.',
      icon: Wrench,
    },
    {
      title: 'Role-Based Dashboards',
      description: 'Tailored dashboards for each role.',
      icon: BarChart3,
    },
    {
      title: 'Payment Integration',
      description: 'Integrate with popular payment gateways.',
      icon: CreditCard,
    },
    {
      title: 'Time Tracking',
      description: 'Track technician time on jobs.',
      icon: Clock,
    },
    {
      title: 'Security',
      description: 'Industry-leading security measures.',
      icon: Shield,
    },
    {
      title: 'Messaging',
      description: 'Communicate with your team in real-time.',
      icon: MessageSquare,
    },
    {
      title: 'Analytics',
      description: 'Gain insights into your business performance.',
      icon: TrendingUp,
    },
    {
      title: 'Estimates & Invoices',
      description: 'Create and send professional estimates and invoices.',
      icon: FileText,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
        Features Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-4 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50 cursor-pointer group"
            >
              <div className="flex justify-center">
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black/75 transition-colors duration-300 group-hover:text-blue-600" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-300 group-hover:text-blue-700 leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
