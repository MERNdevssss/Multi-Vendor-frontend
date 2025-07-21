import React from "react";

const vendors = [
  {
    name: "Tech Solutions Inc.",
    email: "contact@techsolutions.com",
    status: "Active",
  },
  {
    name: "Global Retailers Ltd.",
    email: "support@globalretailers.com",
    status: "Active",
  },
  {
    name: "Local Goods Co.",
    email: "info@localgoods.com",
    status: "Inactive",
  },
  {
    name: "Fashion Hub LLC",
    email: "customerservice@fashionhub.com",
    status: "Active",
  },
  {
    name: "Food Delights Corp.",
    email: "orders@fooddelights.com",
    status: "Active",
  },
];

const Vendors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Vendor Management
      </h1>
      <p className="text-gray-600 text-sm mb-6">
        Manage all registered businesses on the platform.
      </p>

      {/* Desktop/Tablet Table */}
      <div className="hidden md:block overflow-x-auto border border-gray-500 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300    text-sm bg-white">
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-gray-900 whitespace-nowrap">Business Name</th>
              <th className="text-left px-6 py-3 font-medium text-gray-900 whitespace-nowrap">Contact Information</th>
              <th className="text-left px-6 py-3 font-medium text-gray-900 whitespace-nowrap">Status</th>
              <th className="text-left px-6 py-3 font-medium text-gray-900 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vendors.map((vendor, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 text-gray-900 text-base  whitespace-nowrap">{vendor.name}</td>
                <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{vendor.email}</td>
                <td className="px-6 py-4">
                  <span
  className="px-6 py-1 rounded-md font-medium text-sm bg-blue-300 text-black"
>
  {vendor.status}
</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 font-bold">
                  <span className="cursor-pointer hover:underline">Suspend Vendor</span> |{" "}
                  <span className="cursor-pointer hover:underline">View Details</span> |{" "}
                  <span className="cursor-pointer hover:underline text-gray-500">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {vendors.map((vendor, idx) => (
          <div key={idx} className="bg-white border border-gray-300 rounded-lg shadow-sm p-4">
            <p className="text-base font-semibold text-gray-900 mb-1">{vendor.name}</p>
            <p className="text-sm text-gray-600 mb-2">{vendor.email}</p>
            <div className="mb-2">
              <span
                className={`px-4 py-1 rounded-md font-medium text-sm ${
                  vendor.status === "Active"
                    ? "bg-blue-200 text-blue-900"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {vendor.status}
              </span>
            </div>
            <div className="text-sm text-blue-600 space-x-2">
              <span className="cursor-pointer hover:underline">Suspend Vendor</span>
              <span className="text-gray-400">|</span>
              <span className="cursor-pointer hover:underline">View Details</span>
              <span className="text-gray-400">|</span>
              <span className="cursor-pointer hover:underline text-red-500">Delete</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
