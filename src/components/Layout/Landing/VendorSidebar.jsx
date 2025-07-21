import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ activeTab, isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { key: "Dashboard", icon: "/src/assets/Sidebar/Dashboard.png", path: "/vendor/dashboard" },
    { key: "Customers", icon: "/src/assets/Sidebar/Customers.png", path: "/vendor/customers" },
    { key: "Work Orders", icon: "/src/assets/Sidebar/WorkIcon.png", path: "/vendor/workOrder" },
    { key: "Estimates", icon: "/src/assets/Sidebar/WorkIcon.png", path: "/vendor/estimates" },
    { key: "Invoices", icon: "/src/assets/Sidebar/WorkIcon.png", path: "/vendor/invoices" },
    { key: "Team Members", icon: "/src/assets/Sidebar/TeamIcon.png", path: "/vendor/teamMembers" },
    { key: "Time Logs", icon: "/src/assets/Sidebar/TimeIcon.png", path: "/vendor/timeLogs" },
    { key: "Payments", icon: "/src/assets/Sidebar/PaymentIcon.png", path: "/vendor/payments" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-40 md:static top-0 left-0 h-full w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col justify-between`}
      >
        <div>
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">DispatchPro</h2>
            <button className="md:hidden" onClick={onClose}>
              ✕
            </button>
          </div>

          <ul className="mt-4">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
                className={`flex items-center px-6 py-3 cursor-pointer transition rounded-lg mx-2 mb-1
                ${
                  activeTab === item.key
                    ? "bg-gray-200 shadow font-medium text-black"
                    : "hover:bg-white text-gray-700"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.key}
                  className="w-5 h-5 mr-3 object-contain"
                />
                <span>{item.key}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <div className="text-sm text-gray-500 flex items-center justify-center gap-2 cursor-pointer hover:text-gray-700 transition">
            <span>❓</span> Help and Docs
          </div>
        </div>
      </aside>
    </>
  );
}
