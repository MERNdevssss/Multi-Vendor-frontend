import React, { useState } from "react";
import Sidebar from "./VendorSidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function DispatchLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Determine active tab based on current route
  const getActiveTab = () => {
    const path = location.pathname;
    if (path.includes('/dashboard')) return "Dashboard";
    if (path.includes('/customers')) return "Customers";
    if (path.includes('/workOrder')) return "Work Orders";
    if (path.includes('/estimates')) return "Estimates";
    if (path.includes('/invoices')) return "Invoices";
    if (path.includes('/teamMembers')) return "Team Members";
      if (path.includes('/timeLogs')) return "Time Logs";
    if (path.includes('/payments')) return "Payments";
  
    return "Dashboard"; // default
  };

  const activeTab = getActiveTab();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar toggle button */}
      <button
        className="absolute top-4 left-4 md:hidden z-50 bg-gray-800 text-white px-3 py-1 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <Sidebar
        activeTab={activeTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 p-6 overflow-y-auto w-full">
        {/* This will render the nested route components */}
        <Outlet />
      </main>
    </div>
  );
}
