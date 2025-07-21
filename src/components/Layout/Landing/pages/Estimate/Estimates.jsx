import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const orders = [
  { id: "EST-001", customer: "Sophia Clark", service: "Plumbing", date: "2024-01-15", status: "Scheduled", amount: "$250" },
  { id: "EST-002", customer: "Liam Bennett", service: "Electrical", date: "2024-01-16", status: "In Progress", amount: "$300" },
  { id: "EST-003", customer: "Ava Mitchell", service: "HVAC", date: "2024-01-17", status: "Completed", amount: "$400" },
  { id: "EST-004", customer: "Jackson Reed", service: "Plumbing", date: "2024-01-18", status: "Cancelled", amount: "$150" },
  { id: "EST-005", customer: "Chloe Foster", service: "Electrical", date: "2024-01-19", status: "Scheduled", amount: "$200" },
  { id: "EST-006", customer: "Daniel Evans", service: "HVAC", date: "2024-01-20", status: "In Progress", amount: "$350" },
  { id: "EST-007", customer: "Grace Turner", service: "Plumbing", date: "2024-01-21", status: "Completed", amount: "$280" },
  { id: "EST-008", customer: "Henry Hughes", service: "Electrical", date: "2024-01-22", status: "Cancelled", amount: "$180" },
  { id: "EST-009", customer: "Lily Cooper", service: "HVAC", date: "2024-01-23", status: "Scheduled", amount: "$220" },
  { id: "EST-0010", customer: "Samuel Price", service: "Plumbing", date: "2024-01-24", status: "In Progress", amount: "$270" },
];

export default function EstimatesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ status: "", service: "", dateRange: "" });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = filters.status ? order.status === filters.status : true;
    const matchesService = filters.service ? order.service === filters.service : true;

    const today = new Date();
    const orderDate = new Date(order.date);
    let matchesDate = true;

    if (filters.dateRange === "Today") {
      matchesDate = orderDate.toDateString() === today.toDateString();
    } else if (filters.dateRange === "This Week") {
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - today.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      matchesDate = orderDate >= weekStart && orderDate <= weekEnd;
    } else if (filters.dateRange === "This Month") {
      matchesDate =
        orderDate.getMonth() === today.getMonth() &&
        orderDate.getFullYear() === today.getFullYear();
    }

    return matchesSearch && matchesStatus && matchesService && matchesDate;
  });

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-black">Estimates</h1>
        <button
          className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => navigate("/vendor/estimates/new-estimate")}
        >
          Create Estimate
        </button>
      </div>

      {/* Search */}
      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search by Estimate ID or Customer Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <svg
          className="w-5 h-5 absolute top-2.5 left-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        <select
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700"
        >
          <option value="">All Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("service", e.target.value)}
          className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700"
        >
          <option value="">All Services</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="HVAC">HVAC</option>
        </select>

        <select
          onChange={(e) => handleFilterChange("dateRange", e.target.value)}
          className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700"
        >
          <option value="">All Dates</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
        </select>
      </div>

      {/* Table View (Desktop) */}
      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow hidden md:block">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-sky-200 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3">Estimate ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-4 py-3 font-bold">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.service}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-300 text-black">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td className="px-4 py-3 text-blue-500 cursor-pointer hover:underline">View/Edit</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-3 text-center text-gray-500" colSpan="7">
                  No estimates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden mt-6 space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <p className="text-sm font-bold">Estimate ID: {order.id}</p>
              <p className="text-sm text-gray-700">Customer: {order.customer}</p>
              <p className="text-sm text-gray-700">Service: {order.service}</p>
              <p className="text-sm text-gray-700">Date: {order.date}</p>
              <p className="text-sm mt-1">
                Status:{" "}
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-300 text-black">
                  {order.status}
                </span>
              </p>
              <p className="text-sm text-gray-700 mt-1">Amount: {order.amount}</p>
              <button className="text-blue-500 mt-2 font-bold hover:underline">
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No estimates found.</p>
        )}
      </div>
    </div>
  );
}
