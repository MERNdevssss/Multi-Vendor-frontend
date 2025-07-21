import React, { useState } from "react";

const initialCustomers = [
  { name: "Liam Harper", email: "liam.harper@example.com", address: "123 Elm Street, Anytown, USA", status: "Active" },
  { name: "Olivia Bennett", email: "olivia.bennett@example.com", address: "456 Oak Avenue, Anytown, USA", status: "Active" },
  { name: "Noah Carter", email: "noah.carter@example.com", address: "789 Pine Lane, Anytown, USA", status: "Inactive" },
  { name: "Emma Davis", email: "emma.davis@example.com", address: "321 Maple Drive, Anytown, USA", status: "Active" },
  { name: "Jackson Evans", email: "jackson.evans@example.com", address: "654 Cedar Court, Anytown, USA", status: "Active" },
  { name: "Ava Foster", email: "ava.foster@example.com", address: "987 Birch Place, Anytown, USA", status: "Inactive" },
  { name: "Lucas Green", email: "lucas.green@example.com", address: "147 Willow Way, Anytown, USA", status: "Active" },
  { name: "Sophia Hayes", email: "sophia.hayes@example.com", address: "258 Spruce Road, Anytown, USA", status: "Active" },
  { name: "Ethan Ingram", email: "ethan.ingram@example.com", address: "369 Aspen Circle, Anytown, USA", status: "Inactive" },
  { name: "Chloe Jenkins", email: "chloe.jenkins@example.com", address: "741 Redwood Street, Anytown, USA", status: "Active" },
];

const CustomersPage = () => {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState(initialCustomers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    status: "Active",
  });

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCustomer = () => {
    if (!formData.name || !formData.email || !formData.address) return;

    setCustomers((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", address: "", status: "Active" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg"
        >
          Add Customer
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search customers"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
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

      {/* Table (Desktop) */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-gray-300 hidden md:block">
        <table className="min-w-full bg-white rounded-xl">
          <thead className="bg-sky-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Contact Info</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Address</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">{customer.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{customer.email}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{customer.address}</td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-300 text-black">
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 font-bold cursor-pointer hover:underline">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards (Mobile) */}
      <div className="md:hidden mt-6 space-y-4">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer, i) => (
            <div key={i} className="bg-white border border-gray-300 rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold text-gray-800">{customer.name}</h2>
              <p className="text-sm text-gray-600">{customer.email}</p>
              <p className="text-sm text-gray-600">{customer.address}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-300 text-black">
                  {customer.status}
                </span>
                <button className="text-blue-600 text-sm font-bold hover:underline">View</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No customers found.</p>
        )}
      </div>

      {/* Modal */}
      {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg relative">
      {/* Close Button (X) */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
      >
        &times;
      </button>

      <h2 className="text-xl font-bold mb-4">Add Customer</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring"
      />
      <input
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleAddCustomer}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CustomersPage;
