import React from "react";

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white border shadow-md rounded-md p-6 sm:p-10">
        <h1 className="text-2xl font-bold text-black mb-6">Profile &amp; Settings</h1>

        {/* Account Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Account</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="text-sm font-bold bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Change Password
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="First name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Last name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Phone number"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Company name"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Address"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold px-6 py-2 rounded-md transition-colors duration-200">
              Update Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;
