import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const orders = [
  { id: "#12345", customer: "Sophia Clark", vendor: "Local Eats", datetime: "2025-07-1 10:00 AM", amount: "$50.00", status: "Delivered", payment: "COD" },
  { id: "#12346", customer: "Ethan Carter", vendor: "Quick Mart", datetime: "2025-07-8 11:30 AM", amount: "$25.00", status: "Pending", payment: "Prepaid" },
  { id: "#12347", customer: "Olivia Bennett", vendor: "Fashion Hub", datetime: "2025-07-12 12:45 PM", amount: "$100.00", status: "Shipped", payment: "COD" },
  { id: "#12348", customer: "Liam Foster", vendor: "Tech Gadgets", datetime: "2025-06-30 02:00 PM", amount: "$200.00", status: "Delivered", payment: "Prepaid" },
  { id: "#12349", customer: "Ava Harper", vendor: "Book Nook", datetime: "2025-06-12 03:15 PM", amount: "$30.00", status: "Pending", payment: "COD" },
  { id: "#12350", customer: "Noah Reed", vendor: "Pet Supplies", datetime: "2025-07-15 04:30 PM", amount: "$40.00", status: "Shipped", payment: "Prepaid" },
  { id: "#12351", customer: "Isabella Morgan", vendor: "Home Decor", datetime: "2025-07-10 06:00 PM", amount: "$75.00", status: "Delivered", payment: "COD" },
  { id: "#12352", customer: "Jackson Hayes", vendor: "Sports Gear", datetime: "2025-06-15 07:00 PM", amount: "$150.00", status: "Pending", payment: "Prepaid" },
  { id: "#12353", customer: "Mia Coleman", vendor: "Music Store", datetime: "2025-07-10 08:15 PM", amount: "$60.00", status: "Shipped", payment: "COD" },
  { id: "#12354", customer: "Lucas Parker", vendor: "Toy World", datetime: "2025-06-15 09:30 PM", amount: "$80.00", status: "Delivered", payment: "Prepaid" },
];

const filterOptions = {
  "Order Date Range": ["Today", "Last 7 Days", "Last 30 Days", "This Month"],
  "Status": ["Pending", "Shipped", "Delivered"],
  "Vendor": [...new Set(orders.map(o => o.vendor))],
  "Customer": [...new Set(orders.map(o => o.customer))],
  "More Filters": ["COD", "Prepaid", "High Value"],
};

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterSelect = (filterName, value) => {
    if (value === null) {
      const updated = { ...selectedFilters };
      delete updated[filterName];
      setSelectedFilters(updated);
    } else {
      setSelectedFilters((prev) => ({ ...prev, [filterName]: value }));
    }
    setOpenDropdown(null);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedFilters.Status
      ? order.status === selectedFilters.Status
      : true;

    const matchesVendor = selectedFilters.Vendor
      ? order.vendor === selectedFilters.Vendor
      : true;

    const matchesCustomer = selectedFilters.Customer
      ? order.customer === selectedFilters.Customer
      : true;

    const matchesMoreFilter = selectedFilters["More Filters"]
      ? (selectedFilters["More Filters"] === "High Value"
          ? parseFloat(order.amount.replace("$", "")) > 100
          : order.payment === selectedFilters["More Filters"])
      : true;

    return matchesSearch && matchesStatus && matchesVendor && matchesCustomer && matchesMoreFilter;
  });

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 border border-gray-300 bg-white rounded-xl sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Orders</h1>
      <p className="text-sm text-blue-500 mb-4">Manage and track all orders in the system.</p>

      {/* Search */}
      <div className="relative w-full mb-4">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Search by Order ID or Customer Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border bg-gray-200 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-6">
        {Object.keys(filterOptions).map((filterName, idx) => (
          <div key={idx} className="relative w-full sm:w-auto">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === filterName ? null : filterName)
              }
              className={`text-sm px-4 py-2 rounded-md border ${
                selectedFilters[filterName] ? "bg-blue-100 border-blue-400" : "bg-gray-200"
              } hover:bg-gray-300 w-full sm:w-auto text-left`}
            >
              {selectedFilters[filterName] || filterName}
              <span className="ml-1">▼</span>
            </button>

            {openDropdown === filterName && (
              <div className="absolute z-40 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-48 max-h-64 overflow-y-auto">
                {selectedFilters[filterName] && (
                  <div
                    onClick={() => handleFilterSelect(filterName, null)}
                    className="px-4 py-2 text-sm cursor-pointer text-red-600 hover:bg-red-50 border-b"
                  >
                    Clear {filterName}
                  </div>
                )}
                {filterOptions[filterName].map((option, i) => (
                  <div
                    key={i}
                    onClick={() => handleFilterSelect(filterName, option)}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      selectedFilters[filterName] === option ? "bg-blue-100 font-medium" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stats and Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          <div className="bg-blue-100 border border-gray-400 rounded-lg text-center py-6 shadow">
            <p className="text-black text-sm">Total Orders</p>
            <p className="text-2xl font-bold">1,250</p>
          </div>
          <div className="bg-blue-100 border border-gray-400 rounded-lg text-center py-6 shadow">
            <p className="text-black text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">$75,000</p>
          </div>
          <div className="bg-blue-100 border border-gray-400 rounded-lg text-center py-6 shadow">
            <p className="text-black text-sm">Avg. Order Value</p>
            <p className="text-2xl font-bold">$60</p>
          </div>
        </div>

        {/* Table View (Desktop/Tablet Only) */}
        <div className="hidden lg:block lg:col-span-3 overflow-x-auto border border-gray-400 rounded-xl">
          <table className="min-w-full bg-gray-200 text-sm">
            <thead className="bg-blue-200 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left whitespace-nowrap">Order ID</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Customer</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Vendor</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Date/Time</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Amount</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Status</th>
                <th className="px-4 py-2 text-left whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2 text-gray-600">{order.customer}</td>
                    <td className="px-4 py-2 text-gray-600">{order.vendor}</td>
                    <td className="px-4 py-2 text-gray-600">{order.datetime}</td>
                    <td className="px-4 py-2 text-blue-700 font-medium">{order.amount}</td>
                    <td className="px-4 py-2">
                      <span className="px-3 py-1 rounded-xl text-xs font-semibold bg-blue-400 text-white">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 font-bold text-blue-500 hover:underline cursor-pointer">
                      View Details
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center px-4 py-6 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4 lg:col-span-3">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-300 rounded-xl shadow p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium text-gray-500">Order ID</p>
                  <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">Customer</p>
                  <p className="text-base font-medium text-gray-800">{order.customer}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">Vendor</p>
                  <p className="text-base font-medium text-gray-800">{order.vendor}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">Date/Time</p>
                  <p className="text-base text-gray-800">{order.datetime}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="text-base font-semibold text-blue-700">{order.amount}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm text-gray-500">Status</p>
                  <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-blue-400 text-white rounded-full">
                    {order.status}
                  </span>
                </div>
                <div className="mt-3 text-right">
                  <button className="text-blue-500 text-sm font-semibold hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
