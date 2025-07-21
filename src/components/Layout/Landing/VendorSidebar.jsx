import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  FileText,
  Users2,
  Clock,
  CreditCard,
  HelpCircle,
  X,
} from "lucide-react";

export default function Sidebar({ activeTab, isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { key: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/vendor/dashboard" },
    { key: "Customers", icon: <Users size={18} />, path: "/vendor/customers" },
    { key: "Work Orders", icon: <ClipboardList size={18} />, path: "/vendor/workOrder" },
    { key: "Estimates", icon: <FileText size={18} />, path: "/vendor/estimates" },
    { key: "Invoices", icon: <FileText size={18} />, path: "/vendor/invoices" }, // Reused FileText
    { key: "Team Members", icon: <Users2 size={18} />, path: "/vendor/teamMembers" },
    { key: "Time Logs", icon: <Clock size={18} />, path: "/vendor/timeLogs" },
    { key: "Payments", icon: <CreditCard size={18} />, path: "/vendor/payments" },
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
              <X className="w-5 h-5" />
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
                <span className="mr-3 text-gray-600">{item.icon}</span>
                <span>{item.key}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <div className="text-sm text-gray-500 flex items-center justify-center gap-2 cursor-pointer hover:text-gray-700 transition">
            <HelpCircle size={16} />
            <span>Help and Docs</span>
          </div>
        </div>
      </aside>
    </>
  );
}
