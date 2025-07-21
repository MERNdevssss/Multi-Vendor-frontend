import React, { useState } from "react";
import dayjs from "dayjs";

const ordersData = [
  { id: "#12345", customer: "Sophia Clark", service: "Plumbing", date: "2024-07-19", technician: "Ethan Harper", status: "Scheduled", amount: "$250" },
  { id: "#12346", customer: "Liam Bennett", service: "Electrical", date: "2024-07-18", technician: "Olivia Carter", status: "In Progress", amount: "$300" },
  { id: "#12347", customer: "Ava Mitchell", service: "HVAC", date: "2024-07-10", technician: "Noah Parker", status: "Completed", amount: "$400" },
  { id: "#12348", customer: "Jackson Reed", service: "Plumbing", date: "2024-06-28", technician: "Isabella Hayes", status: "Cancelled", amount: "$150" },
  { id: "#12349", customer: "Chloe Foster", service: "Electrical", date: "2024-07-14", technician: "Lucas Bennett", status: "Scheduled", amount: "$200" },
  { id: "#12350", customer: "Daniel Evans", service: "HVAC", date: "2024-07-04", technician: "Mia Coleman", status: "In Progress", amount: "$350" },
];

export default function WorkOrdersPage() {
  const [orders, setOrders] = useState(ordersData);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ status: "", service: "", dateRange: "" });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const newOrder = {
      id: `#${Math.floor(10000 + Math.random() * 90000)}`,
      customer: form.customer.value,
      service: form.service.value,
      date: form.date.value,
      technician: form.technician.value,
      status: form.status.value,
      amount: `$${form.amount.value}`,
    };
    setOrders([newOrder, ...orders]);
    setShowModal(false);
    form.reset();
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = filters.status ? order.status === filters.status : true;
    const matchesService = filters.service ? order.service === filters.service : true;

    let matchesDate = true;
    if (filters.dateRange) {
      const orderDate = dayjs(order.date);
      const today = dayjs();
      if (filters.dateRange === "Today") {
        matchesDate = orderDate.isSame(today, "day");
      } else if (filters.dateRange === "This Week") {
        matchesDate = orderDate.isAfter(today.subtract(7, "day"));
      } else if (filters.dateRange === "This Month") {
        matchesDate = orderDate.isSame(today, "month");
      }
    }

    return matchesSearch && matchesStatus && matchesService && matchesDate;
  });

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-black">Work Orders</h1>
        <button
          className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setShowModal(true)}
        >
          Create Work Order
        </button>
      </div>

      {/* Search */}
      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search by Order ID or Customer Name"
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

      {/* Table */}
      <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-sky-200 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Technician</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-3 font-bold">{order.id}</td>
                  <td className="px-4 py-3 text-gray-600">{order.customer}</td>
                  <td className="px-4 py-3">{order.service}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.technician}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full bg-blue-300 text-black text-sm">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td className="px-4 py-3 text-blue-600 font-semibold cursor-pointer">View</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center px-4 py-6 text-gray-500">
                  No work orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-lg font-bold mb-4">Create New Work Order</h2>
      <form onSubmit={handleCreateOrder} className="space-y-4">
        <input name="customer" required className="w-full p-2 border rounded" placeholder="Customer Name" />
        <input name="technician" required className="w-full p-2 border rounded" placeholder="Technician" />
        <input name="date" type="date" required className="w-full p-2 border rounded" />
        <select name="service" required className="w-full p-2 border rounded">
          <option value="">Select Service</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="HVAC">HVAC</option>
        </select>
        <select name="status" required className="w-full p-2 border rounded">
          <option value="">Select Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input name="amount" type="number" required className="w-full p-2 border rounded" placeholder="Amount ($)" />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Create</button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
