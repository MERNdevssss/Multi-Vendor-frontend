import React, { useState } from "react";
import Details from "./Details";
import Updates from "./Updates";
import Notes from "./Notes";

export default function JobDesc({ selectedJob }) {
  const [activeTab, setActiveTab] = useState("Details");

  // Comprehensive dummy data based on selected job or fallback
  const jobData = {
    // Customer Information
    customer: {
      name: selectedJob?.customer || "Emily Carter",
      contact: selectedJob?.customer === "Emily Carter" ? "(555) 123-4567" : 
               selectedJob?.customer === "David Lee" ? "(555) 234-5678" :
               selectedJob?.customer === "Sarah Johnson" ? "(555) 345-6789" :
               selectedJob?.customer === "Michael Brown" ? "(555) 456-7890" :
               selectedJob?.customer === "Jessica Wilson" ? "(555) 567-8901" : "(555) 123-4567",
      email: selectedJob?.customer === "Emily Carter" ? "emily.carter@email.com" :
             selectedJob?.customer === "David Lee" ? "david.lee@email.com" :
             selectedJob?.customer === "Sarah Johnson" ? "sarah.johnson@email.com" :
             selectedJob?.customer === "Michael Brown" ? "michael.brown@email.com" :
             selectedJob?.customer === "Jessica Wilson" ? "jessica.wilson@email.com" : "customer@email.com",
      address: selectedJob?.customer === "Emily Carter" ? "123 Elm Street, Springfield, IL 62701" :
               selectedJob?.customer === "David Lee" ? "456 Oak Avenue, Madison, WI 53703" :
               selectedJob?.customer === "Sarah Johnson" ? "789 Pine Road, Austin, TX 78701" :
               selectedJob?.customer === "Michael Brown" ? "321 Maple Drive, Denver, CO 80203" :
               selectedJob?.customer === "Jessica Wilson" ? "654 Cedar Lane, Portland, OR 97201" : "123 Main Street, Anytown, USA"
    },

    // Job Details
    jobInfo: {
      id: selectedJob?.id || "#12345",
      serviceType: selectedJob?.serviceType || "Plumbing Repair",
      status: selectedJob?.status || "Accepted",
      scheduledTime: selectedJob?.scheduledTime || "9:00 AM - 11:00 AM",
      priority: selectedJob?.priority || "Normal",
      estimatedDuration: selectedJob?.estimatedDuration || "2 hours",
      assignedTechnician: selectedJob?.assignedTechnician || "John Smith"
    },

    // Special Instructions based on job type
    specialInstructions: selectedJob?.serviceType === "Plumbing Repair" ? 
      "Customer has reported a leak in the basement. Water has been shut off. Please bring extra towels and check for water damage." :
      selectedJob?.serviceType === "Electrical Installation" ? 
      "New outlet installation in kitchen. Power will need to be turned off during work. Customer will be home all day." :
      selectedJob?.serviceType === "HVAC Maintenance" ? 
      "Annual maintenance check. Customer has mentioned unusual noises from the unit. Access through side gate." :
      selectedJob?.serviceType === "Appliance Repair" ? 
      "Washing machine not draining properly. Customer has small children, please be mindful of noise levels." :
      "General maintenance work. Customer has a dog, please call upon arrival. Access through back gate."
  };

  // Dynamic updates based on job type and status
  const updates = [
    { 
      date: "2025-07-17", 
      time: "2:30 PM",
      text: `Job ${jobData.jobInfo.id} created and assigned to ${jobData.jobInfo.assignedTechnician}.`,
      type: "info"
    },
    { 
      date: "2025-07-18", 
      time: "9:15 AM",
      text: selectedJob?.serviceType === "Plumbing Repair" ? 
        "Plumbing parts ordered from supplier. Expected delivery by end of day." :
        selectedJob?.serviceType === "Electrical Installation" ? 
        "Electrical components and safety equipment prepared for installation." :
        "Required materials and equipment have been prepared for the job.",
      type: "update"
    },
    { 
      date: "2025-07-19", 
      time: "8:00 AM",
      text: `Technician ${jobData.jobInfo.assignedTechnician} confirmed availability for scheduled time slot.`,
      type: "confirmation"
    },
    ...(jobData.jobInfo.status === "In-Progress" ? [{
      date: "2025-07-19",
      time: "9:30 AM", 
      text: "Technician arrived on site and began work assessment.",
      type: "progress"
    }] : []),
    ...(jobData.jobInfo.status === "Completed" ? [{
      date: "2025-07-19",
      time: "10:45 AM",
      text: "Work completed successfully. Customer satisfaction confirmed.",
      type: "success"
    }] : [])
  ];

  // Dynamic notes based on job context
  const notes = [
    {
      id: 1,
      author: jobData.customer.name,
      timestamp: "2025-07-18 3:20 PM",
      text: selectedJob?.serviceType === "Plumbing Repair" ? 
        "The leak seems to be getting worse. Please prioritize this repair." :
        selectedJob?.serviceType === "Electrical Installation" ? 
        "Would prefer if work can be completed before 3 PM when kids come home from school." :
        selectedJob?.serviceType === "HVAC Maintenance" ? 
        "The system has been making strange rattling noises, especially at night." :
        "Please call 15 minutes before arrival. Thank you!",
      category: "customer"
    },
    {
      id: 2,
      author: "Dispatch Team",
      timestamp: "2025-07-18 4:45 PM",
      text: selectedJob?.serviceType === "Plumbing Repair" ? 
        "Confirmed water shut-off with customer. Emergency plumbing kit prepared." :
        selectedJob?.serviceType === "Electrical Installation" ? 
        "Safety inspection required after installation. Schedule follow-up if needed." :
        "Remember to take before/after photos for quality assurance and customer records.",
      category: "internal"
    },
    {
      id: 3,
      author: jobData.jobInfo.assignedTechnician,
      timestamp: "2025-07-19 7:30 AM",
      text: selectedJob?.serviceType === "Plumbing Repair" ? 
        "Reviewed customer notes. Bringing extra pipe fittings and sealant." :
        selectedJob?.serviceType === "HVAC Maintenance" ? 
        "Will conduct full system diagnostic to identify source of noise issues." :
        "All tools and materials loaded. ETA at customer location as scheduled.",
      category: "technician"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          {jobData.jobInfo.id}
        </h2>
        <p className="text-gray-500 text-sm">
          Customer: {jobData.customer.name} | Service: {jobData.jobInfo.serviceType} | 
          Scheduled: {jobData.jobInfo.scheduledTime} | Priority: {jobData.jobInfo.priority}
        </p>
        <div className="flex items-center space-x-4 mt-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            jobData.jobInfo.status === "Accepted" ? "bg-blue-100 text-blue-800" :
            jobData.jobInfo.status === "In-Progress" ? "bg-yellow-100 text-yellow-800" :
            jobData.jobInfo.status === "Completed" ? "bg-green-100 text-green-800" :
            "bg-gray-100 text-gray-800"
          }`}>
            {jobData.jobInfo.status}
          </span>
          <span className="text-xs text-gray-500">Technician: {jobData.jobInfo.assignedTechnician}</span>
          <span className="text-xs text-gray-500">Duration: {jobData.jobInfo.estimatedDuration}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4 space-x-6">
        {["Details", "Updates", "Notes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            } font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "Details" && (
          <Details 
            selectedJob={selectedJob}
            jobData={jobData}
            specialInstructions={jobData.specialInstructions}
          />
        )}
        {activeTab === "Updates" && <Updates updates={updates} />}
        {activeTab === "Notes" && <Notes notes={notes} />}
      </div>
    </div>
  );
}
