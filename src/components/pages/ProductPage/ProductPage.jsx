import React from "react";

const features = [
  {
    title: "Customer & Job Management",
    description:
      "Efficiently manage customer information, job details, and scheduling. Track job progress, assign tasks, and communicate updates seamlessly.",
    image: "https://escalierssolution.com/wp-content/uploads/2023/08/Job-Management-system-change.jpg",
  },
  {
    title: "Estimates & Invoice Builder",
    description:
      "Create professional estimates and invoices quickly. Customize templates, add line items, and send documents directly to customers.",
    image: "https://www.invoicesimple.com/wp-content/uploads/2025/03/Estimate-Template-4-1.png",
  },
  {
    title: "Role-Based Dashboards",
    description:
      "Tailored dashboards for different roles within your organization. Technicians, managers, and administrators see relevant info and tools.",
    image: "https://cdn.dribbble.com/userupload/17146459/file/original-c6353240f4263b9331e9ec1cc0a20bd8.png?format=webp&resize=400x300&vertical=center",
  },
  {
    title: "Payment Integration",
    description:
      "Accept payments online through various methods. Integrate with gateways for secure transactions. Automate reminders and track revenue.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*wlUcw0Qi_pr9o_YNtSkKrg.jpeg",
  },
  {
    title: "Time Tracking",
    description:
      "Accurately track time spent on jobs and tasks. Monitor hours, generate timesheets, and ensure accurate billing.",
    image: "https://www.bigtime.net/wp-content/uploads/2024/11/Thumbnail_-Leverage-Ratio_-The-Forgotten-KPI-For-Professional-Services.png",
  },
  {
    title: "Secure Login",
    description:
      "Protect sensitive data with secure login and access controls. Multi-factor authentication and role permissions ensure access safety.",
    image: "https://media.istockphoto.com/id/1221578901/vector/2fa-authentication-password-secure-notice-login-verification-or-sms-with-push-code-message.jpg?s=612x612&w=0&k=20&c=zganV8pxvPCp2aNZG6uDHL_qStrXerKneEcWRFxkVQA=",
  },
  {
    title: "Internal Messaging",
    description:
      "Facilitate seamless communication within your team. Send messages, share files, and collaborate on jobs in real-time.",
    image: "https://img.freepik.com/free-vector/appointment-booking-with-smartphone-woman_23-2148561973.jpg",
  },
  {
    title: "Admin Analytics & Reports",
    description:
      "Gain insights into business performance with analytics and reports. Track key metrics, identify trends, and improve decisions.",
    image: "https://adminjs.co/img/hero-img.webp",
  },
];

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        DispatchPro System Features
      </h1>
      <p className="text-gray-500 text-sm md:text-base mb-10">
        Explore the powerful features designed to streamline your service business
        operations and boost efficiency.
      </p>

      <div className="w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 p-6 shadow-sm bg-white"
          >
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <div className="w-full overflow-hidden rounded-md">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
