import React, { useState } from "react";

const users = [
    {
    name: "Ethan Harper",
    role: "Manager",
    vendor: "QuickServe",
    status: "Active",
    lastLogin: "2024-01-20 14:30",
    jobCount: 120,
  },
  {
    name: "Olivia Bennett",
    role: "Manager",
    vendor: "ExpressDine",
    status: "Active",
    lastLogin: "2024-01-21 09:15",
    jobCount: 150,
  },
  {
    name: "Noah Carter",
    role: "Manager",
    vendor: "RapidMeals",
    status: "Inactive",
    lastLogin: "2024-01-19 18:45",
    jobCount: 90,
  },
  {
    name: "Ava Thompson",
    role: "Manager",
    vendor: "SwiftBites",
    status: "Active",
    lastLogin: "2024-01-22 11:00",
    jobCount: 110,
  },
  {
    name: "Liam Foster",
    role: "Manager",
    vendor: "SpeedyEats",
    status: "Active",
    lastLogin: "2024-01-20 16:20",
    jobCount: 130,
  },
  {
    name: "Isabella Wright",
    role: "Manager",
    vendor: "QuickServe",
    status: "Inactive",
    lastLogin: "2024-01-18 22:55",
    jobCount: 80,
  },
  {
    name: "Jackson Reed",
    role: "Manager",
    vendor: "ExpressDine",
    status: "Active",
    lastLogin: "2024-01-21 13:40",
    jobCount: 140,
  },
  {
    name: "Sophia Evans",
    role: "Manager",
    vendor: "RapidMeals",
    status: "Active",
    lastLogin: "2024-01-22 08:50",
    jobCount: 100,
  },
  {
    name: "Aiden Hughes",
    role: "Manager",
    vendor: "SwiftBites",
    status: "Inactive",
    lastLogin: "2024-01-19 07:30",
    jobCount: 70,
  },
  {
    name: "Grace Coleman",
    role: "Manager",
    vendor: "SpeedyEats",
    status: "Active",
    lastLogin: "2024-01-20 11:10",
    jobCount: 160,
  },
   {
    name: "David Lee",
    role: "Dispatcher",
    vendor: "RapidMeals",
    status: "Active",
    lastLogin: "2024-01-22 08:10",
    jobCount: 95,
  },
  {
    name: "Emma Garcia",
    role: "Dispatcher",
    vendor: "QuickServe",
    status: "Inactive",
    lastLogin: "2024-01-19 17:40",
    jobCount: 60,
  },

  // Technicians
  {
    name: "Benjamin White",
    role: "Technician",
    vendor: "ExpressDine",
    status: "Active",
    lastLogin: "2024-01-20 13:25",
    jobCount: 85,
  },
  {
    name: "Chloe Martin",
    role: "Technician",
    vendor: "SpeedyEats",
    status: "Inactive",
    lastLogin: "2024-01-18 20:00",
    jobCount: 70,
  },
];

export default function Customers() {
  const [selectedTab, setSelectedTab] = useState("Manager");
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");

  // Filtered users based on search and dropdowns
  const filteredUsers = users.filter((user) => {
    const matchesTab = user.role === selectedTab;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    const matchesStatus = statusFilter ? user.status === statusFilter : true;
    const matchesVendor = vendorFilter ? user.vendor === vendorFilter : true;
    return matchesTab && matchesSearch && matchesRole && matchesStatus && matchesVendor;
  });

  // Unique dropdown options
  const roleOptions = [...new Set(users.map((u) => u.role))];
  const statusOptions = [...new Set(users.map((u) => u.status))];
  const vendorOptions = [...new Set(users.map((u) => u.vendor))];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Customer</h1>
      <p className="text-sm text-gray-600 mb-6">Manage all users within the system</p>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-300 mb-4">
        {["Manager", "Dispatcher", "Technician"].map((tab) => (
          <button
            key={tab}
            className={`py-2 text-sm font-medium ${
              selectedTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-gray-100 text-sm"
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
        </div>
        <div className="flex gap-2 flex-wrap mt-2">
          <select
            className="bg-gray-100 border rounded-md px-3 py-2 text-sm"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">Role</option>
            {roleOptions.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
          <select
            className="bg-gray-100 border rounded-md px-3 py-2 text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <select
            className="bg-gray-100 border rounded-md px-3 py-2 text-sm"
            value={vendorFilter}
            onChange={(e) => setVendorFilter(e.target.value)}
          >
            <option value="">Vendor</option>
            {vendorOptions.map((vendor) => (
              <option key={vendor} value={vendor}>{vendor}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {filteredUsers.map((user, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">{user.name}</h3>
              <span className="px-2 py-1 text-xs font-medium rounded bg-blue-200 text-blue-800">
                {user.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Role:</strong> {user.role}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Vendor:</strong> {user.vendor}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Last Login:</strong> {user.lastLogin}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Job Count:</strong> {user.jobCount}
            </p>
            <div className="text-sm font-semibold text-blue-600 mt-2 cursor-pointer">View</div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-md border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Role</th>
              <th className="text-left px-4 py-2">Vendor</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Last Login</th>
              <th className="text-left px-4 py-2">Job Count</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredUsers.map((user, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2 text-gray-500">{user.role}</td>
                <td className="px-4 py-2 text-gray-500">{user.vendor}</td>
                <td className="px-4 py-2">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-blue-200 text-blue-800">
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-500">{user.lastLogin}</td>
                <td className="px-4 py-2 text-gray-500">{user.jobCount}</td>
                <td className="px-4 py-2 text-gray-500 font-semibold cursor-pointer">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-500">
        <span>Terms of Service</span>
        <span>@2024 SwiftDispatch. All rights reserved.</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
}
