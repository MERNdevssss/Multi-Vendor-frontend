import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Store,
  BarChart2,
  Settings,
  Bell,
  User
} from "lucide-react"; // Import Lucide icons

export default function Sidebar({ activeTab, isOpen, onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    { key: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin/dashboard" },
    { key: "Customers", icon: <Users size={20} />, path: "/admin/customers" },
    { key: "Orders", icon: <ShoppingCart size={20} />, path: "/admin/orders" },
    { key: "Vendors", icon: <Store size={20} />, path: "/admin/vendors" },
    { key: "Reports", icon: <BarChart2 size={20} />, path: "/admin/reports" },
    { key: "Settings", icon: <Settings size={20} />, path: "/admin/settings" },
    { key: "Notifications", icon: <Bell size={20} />, path: "/admin/notifications" },
    { key: "Profile", icon: <User size={20} />, path: "/admin/profile" },
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
        className={`fixed z-40 md:static top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between mt-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Admin</h2>
          <button
            className="md:hidden text-gray-500 dark:text-gray-300"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <ul className="space-y-1 py-4">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`flex items-center px-6 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 ${
                activeTab === item.key
                  ? "bg-gray-300 dark:bg-gray-700 font-semibold text-black dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.key}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
