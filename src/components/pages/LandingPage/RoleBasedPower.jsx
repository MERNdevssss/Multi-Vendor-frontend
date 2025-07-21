
import React from 'react';

export default function RoleBasedPower() {
  const roles = [
    {
      title: 'Super Admin',
      description: 'Full control over the entire system, including settings, users, and billing.',
      img: '/assets/LandingPage/SuperAdmin.png',
    },
    {
      title: 'Business Manager',
      description: 'Oversee business operations, manage teams, and track performance.',
      img: '/assets/LandingPage/businessManager.png',
    },
    {
      title: 'Dispatcher',
      description: 'Efficiently schedule and assign jobs to technicians.',
      img: '/assets/LandingPage/dispatcher.png',
    },
    {
      title: 'Technician',
      description: 'Receive job assignments, update progress, and communicate with dispatchers.',
      img: '/assets/LandingPage/technician.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-8">Role-Based Power</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-48 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={role.img} alt={role.title} className="object-contain h-full w-full" />
            </div>
            <h3 className="text-lg font-medium">{role.title}</h3>
            <p className="text-gray-500 text-sm">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
