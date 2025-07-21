import React, { useState } from "react";
import DatePicker from "react-datepicker";


const PaymentsPage = () => {
  const [filter, setFilter] = useState("All");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const completedPayments = [
    { customer: "Emily Carter", amount: "$150.00", date: "2024-07-20" },
    { customer: "David Lee", amount: "$200.00", date: "2024-07-18" },
    { customer: "Sarah Johnson", amount: "$100.00", date: "2024-07-15" },
    { customer: "Michael Brown", amount: "$180.00", date: "2024-07-12" },
    { customer: "Jessica Wilson", amount: "$120.00", date: "2024-07-10" },
  ];

  const pendingPayments = [
    { customer: "Robert Taylor", amount: "$130.00", date: "2024-07-25" },
    { customer: "Olivia Clark", amount: "$170.00", date: "2024-07-22" },
    { customer: "Daniel Harris", amount: "$110.00", date: "2024-07-20" },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">Payments</h1>
      <p className="text-gray-500 mb-6">Manage your payments</p>

      <h2 className="text-lg font-semibold text-gray-700 mb-2">Received Payments</h2>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-4">
        {["All", "Last 30 days", "Custom"].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-4 py-1 rounded-md border ${
              filter === option
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Date Pickers */}
      {filter === "Custom" && (
        <div className="flex gap-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select Date"
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Select Date"
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>
      )}

      {/* Completed Payments Table (desktop) */}
      <div className="overflow-x-auto hidden md:block mb-10">
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Customer</th>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Amount</th>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Date</th>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedPayments.map((payment, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-800">{payment.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{payment.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{payment.date}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Completed Payments (mobile) */}
      <div className="block md:hidden space-y-4 mb-10">
        {completedPayments.map((payment, index) => (
          <div
            key={index}
            className="border rounded-md p-4 shadow-sm bg-white space-y-1"
          >
            <div className="text-sm">
              <strong>Customer:</strong> {payment.customer}
            </div>
            <div className="text-sm">
              <strong>Amount:</strong> {payment.amount}
            </div>
            <div className="text-sm">
              <strong>Date:</strong> {payment.date}
            </div>
            <div className="text-sm">
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-2">Pending Payments</h2>

      {/* Pending Payments Table (desktop) */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Customer</th>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Amount</th>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Date</th>
              <th className="text-left px-6 py-3 text-sm text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingPayments.map((payment, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-800">{payment.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{payment.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{payment.date}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Payments (mobile) */}
      <div className="block md:hidden space-y-4">
        {pendingPayments.map((payment, index) => (
          <div
            key={index}
            className="border rounded-md p-4 shadow-sm bg-white space-y-1"
          >
            <div className="text-sm">
              <strong>Customer:</strong> {payment.customer}
            </div>
            <div className="text-sm">
              <strong>Amount:</strong> {payment.amount}
            </div>
            <div className="text-sm">
              <strong>Date:</strong> {payment.date}
            </div>
            <div className="text-sm">
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Pending
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsPage;
