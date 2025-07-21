import React, { useState } from "react";

export default function VendorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [vendorData, setVendorData] = useState({
    name: "Sarah Johnson",
    business: "Johnson's Cleaning Services",
    vendorId: "12345",
    phone: "(555) 123-4567",
    email: "sarah.johnson@example.com",
    address: "123 Main Street, Anytown, CA 91234",
    fee: "15%",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData({ ...vendorData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg mt-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Vendor Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage vendor details and performance metrics.</p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border-b pb-4">
        <img
          src="https://i.pravatar.cc/100?img=32"
          alt="Vendor Avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
        />
        <div className="w-full">
          {isEditing ? (
            <>
              <input
                name="name"
                value={vendorData.name}
                onChange={handleChange}
                className="text-lg md:text-xl font-semibold text-gray-800 border rounded px-3 py-2 w-full mb-2"
              />
              <input
                name="business"
                value={vendorData.business}
                onChange={handleChange}
                className="text-sm text-blue-600 border rounded px-3 py-2 w-full mb-2"
              />
              <input
                name="vendorId"
                value={vendorData.vendorId}
                onChange={handleChange}
                className="text-sm text-gray-600 border rounded px-3 py-2 w-full"
              />
            </>
          ) : (
            <>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{vendorData.name}</h2>
              <p className="text-sm text-gray-600">
                Business: <span className="text-blue-600">{vendorData.business}</span>
              </p>
              <p className="text-sm text-gray-600">Vendor ID: {vendorData.vendorId}</p>
            </>
          )}
        </div>
      </div>

      {/* Tabs (Static UI for now) */}
      <div className="flex flex-wrap mt-6 gap-3 text-sm border-b pb-2">
        {["Overview", "Services", "Transactions", "Performance"].map((tab) => (
          <button
            key={tab}
            className="px-2 py-1 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 focus:outline-none"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Contact Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <p className="text-gray-500">Contact Name</p>
          {isEditing ? (
            <input
              name="name"
              value={vendorData.name}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
            />
          ) : (
            <p>{vendorData.name}</p>
          )}
        </div>
        <div>
          <p className="text-gray-500">Phone Number</p>
          {isEditing ? (
            <input
              name="phone"
              value={vendorData.phone}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
            />
          ) : (
            <p>{vendorData.phone}</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <p className="text-gray-500">Email</p>
          {isEditing ? (
            <input
              name="email"
              value={vendorData.email}
              onChange={handleChange}
              className="border px-3 py-2 rounded w-full"
            />
          ) : (
            <p>{vendorData.email}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Address</h3>
        <p className="text-gray-500 mb-1">Vendor Address</p>
        {isEditing ? (
          <input
            name="address"
            value={vendorData.address}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full text-sm"
          />
        ) : (
          <p className="text-sm">{vendorData.address}</p>
        )}
      </div>

      {/* Fee */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Fee Structure</h3>
        <p className="text-gray-500 mb-1">Fee Percentage</p>
        {isEditing ? (
          <input
            name="fee"
            value={vendorData.fee}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full text-sm"
          />
        ) : (
          <p className="text-sm">{vendorData.fee}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Edit Vendor Details
          </button>
        )}
      </div>
    </div>
  );
}
