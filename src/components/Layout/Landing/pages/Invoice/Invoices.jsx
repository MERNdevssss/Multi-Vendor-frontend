import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const invoices = [
  { id: "INV-2024-001", customer: "Acme Corp", date: "2024-07-26", status: "Paid", amount: "$500.00", due: "2024-08-25" },
  { id: "INV-2024-002", customer: "Beta Inc", date: "2024-07-20", status: "Sent", amount: "$750.00", due: "2024-08-19" },
  { id: "INV-2024-003", customer: "Gamma Ltd", date: "2024-07-15", status: "Overdue", amount: "$300.00", due: "2024-08-14" },
  { id: "INV-2024-004", customer: "Delta LLC", date: "2024-07-10", status: "Draft", amount: "$1200.00", due: "2024-08-09" },
  { id: "INV-2024-005", customer: "Epsilon Co", date: "2024-07-05", status: "Paid", amount: "$600.00", due: "2024-08-04" },
  { id: "INV-2024-006", customer: "Zeta Group", date: "2024-06-30", status: "Sent", amount: "$900.00", due: "2024-07-29" },
  { id: "INV-2024-007", customer: "Theta Solutions", date: "2024-06-25", status: "Overdue", amount: "$450.00", due: "2024-07-24" },
  { id: "INV-2024-008", customer: "Lambda Systems", date: "2024-06-20", status: "Draft", amount: "$1500.00", due: "2024-07-19" },
  { id: "INV-2024-009", customer: "Kappa Enterprises", date: "2024-06-15", status: "Paid", amount: "$800.00", due: "2024-07-14" },
];

const InvoicesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;
  const navigate = useNavigate();

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter((inv) =>
    inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inv.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inv.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Invoices</h1>
        <button
          onClick={() => navigate("/vendor/invoices/new-invoice")}
          className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          New Invoice
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search invoices by ID, customer or status..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
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

      {/* Table for Desktop */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-sky-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Invoice ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Amount</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Due Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map((inv, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{inv.id}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{inv.customer}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{inv.date}</td>
                <td className="px-4 py-3">
                  <span className="inline-block mt-2 px-4 py-1 text-xs font-medium rounded-full bg-blue-200 text-black">
                    {inv.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{inv.amount}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{inv.due}</td>
                <td className="px-4 py-3 text-sm text-gray-600 font-bold cursor-pointer hover:underline">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for Mobile */}
      <div className="md:hidden space-y-4">
        {currentInvoices.map((inv, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="text-sm font-semibold text-gray-800">Invoice ID: {inv.id}</p>
            <p className="text-sm text-gray-600">Customer: {inv.customer}</p>
            <p className="text-sm text-gray-600">Date: {inv.date}</p>
            <p className="text-sm text-gray-600">Due Date: {inv.due}</p>
            <p className="text-sm text-gray-600">Amount: {inv.amount}</p>
            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-200 text-black">
              {inv.status}
            </span>
            <button className="block mt-3 text-gray-600 font-bold text-sm hover:underline">View</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className={`px-2 text-gray-600 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600"
              } font-semibold`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className={`px-2 text-gray-600 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
