import React, { useState } from "react";
import { getStatusColor, getPriorityColor } from "./utils";
import MapComponent from "./Map";
import { initialCustomers, initialJobs } from "./mockData";

const DispatcherDashboard = () => {
  const [searchAll, setSearchAll] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");

  const filteredCustomers = initialCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchCustomer.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchCustomer.toLowerCase()) ||
      customer.address.toLowerCase().includes(searchCustomer.toLowerCase())
  );

  const filteredJobs = initialJobs.filter(
    (job) =>
      job.id.toLowerCase().includes(searchAll.toLowerCase()) ||
      job.name.toLowerCase().includes(searchAll.toLowerCase()) ||
      job.location.toLowerCase().includes(searchAll.toLowerCase())
  );

  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <main className="flex-1 p-4 sm:p-6 md:p-10 lg:px-20">
        {/* Dispatcher Info Card */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-500">Senior Dispatcher • On Duty</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Active Jobs</p>
              <p className="text-lg font-bold text-blue-600">{filteredJobs.length}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Today's Tasks</p>
              <p className="text-lg font-bold text-green-600">12</p>
            </div>
          </div>
        </div>

        <header className="mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Dispatcher Dashboard
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Manage your daily tasks and job assignments efficiently.
          </p>
        </header>

        {/* Global Search */}
        <div className="relative mt-2 sm:mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </span>
          <input
            type="text"
            value={searchAll}
            onChange={(e) => setSearchAll(e.target.value)}
            placeholder="Search jobs, customers, or locations"
            className="w-full p-2 sm:p-3 pl-12 md:pl-16 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Customer Management */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Customer Management
          </h2>
          <div className="relative mt-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </span>
            <input
              type="text"
              value={searchCustomer}
              onChange={(e) => setSearchCustomer(e.target.value)}
              placeholder="Search customers"
              className="w-full p-2 sm:p-3 pl-12 md:pl-16 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block mt-4 bg-pink-50 shadow rounded-lg overflow-x-auto">
            <table className="min-w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-100 text-gray-700">
                  <th className="p-3">Name</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Address</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{customer.name}</td>
                    <td className="p-3 text-gray-600">{customer.email}</td>
                    <td className="p-3 text-gray-600">{customer.address}</td>
                    <td className="p-3 text-blue-500 cursor-pointer">Edit</td>
                  </tr>
                ))}
                {filteredCustomers.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-3 text-center text-gray-400">
                      No customers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden mt-4 space-y-4">
            {filteredCustomers.length === 0 ? (
              <div className="text-center text-gray-400">
                No customers found.
              </div>
            ) : (
              filteredCustomers.map((customer, idx) => (
                <div
                  key={idx}
                  className="bg-pink-50 rounded-lg shadow p-4 border border-gray-200"
                >
                  <p className="text-lg font-semibold text-gray-800">
                    {customer.name}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    📧 {customer.email}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    📍 {customer.address}
                  </p>
                  <button className="mt-3 text-sm text-blue-600 font-medium hover:underline">
                    Edit
                  </button>
                </div>
              ))
            )}
          </div>

          <button className="mt-4 px-4 py-2 text-sm sm:text-base font-semibold bg-gray-200 rounded-xl hover:bg-gray-300">
            Add New Customer
          </button>
        </section>

        {/* Assigned Jobs */}
        <section className="mt-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Assigned Jobs
          </h2>

          {/* Table View for Desktop/Tablet */}
          <div className="hidden sm:block mt-3 overflow-x-auto bg-pink-50 shadow rounded-lg">
            <table className="min-w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-100 text-gray-700">
                  <th className="p-3">Job ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Priority</th>
                  <th className="p-3">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{job.id}</td>
                    <td className="p-3 text-gray-700">{job.name}</td>
                    <td className="p-3 text-gray-700">{job.location}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-gray-300 rounded-xl text-xs sm:text-sm font-medium">
                        {job.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-gray-300 rounded-xl text-xs sm:text-sm font-medium">
                        {job.priority}
                      </span>
                    </td>
                    <td className="p-3 text-gray-700">{job.due}</td>
                  </tr>
                ))}
                {filteredJobs.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-3 text-center text-gray-400">
                      No jobs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Card View for Mobile */}
          <div className="sm:hidden mt-4  space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center text-gray-400">No jobs found.</div>
            ) : (
              filteredJobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-pink-50 rounded-2xl shadow-md border border-gray-200 p-4 space-y-2"
                >
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Job ID:</span>{" "}
                    {job.id}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Customer:
                    </span>{" "}
                    {job.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Location:
                    </span>{" "}
                    {job.location}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Status:</span>
                    <span className="ml-2 inline-block px-2 py-0.5 bg-gray-300 text-black rounded-full text-xs font-medium">
                      {job.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Priority:
                    </span>
                    <span className="ml-2 inline-block px-2 py-0.5 bg-gray-300 text-black rounded-full text-xs font-medium">
                      {job.priority}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Due Date:
                    </span>{" "}
                    {job.due}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Upcoming Tasks */}
        <section className="mt-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Upcoming Tasks
          </h2>
          <div className="mt-3 bg-pink-50 rounded-lg border border-black overflow-hidden">
            {[
              {
                id: "#12345",
                name: "Sophia Clark",
                address: "123 Maple Street",
              },
              { id: "#12346", name: "Ethan Harris", address: "456 Oak Avenue" },
              { id: "#12348", name: "Liam Foster", address: "101 Birch Drive" },
            ].map((task, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center p-4 ${
                  idx !== 2 ? "border-b border-black" : ""
                }`}
              >
                
                <div>
                  <p className="font-medium text-gray-800">
                    Job {task.id} - {task.name}
                  </p>
                  <p className="text-gray-500 text-sm">{task.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Job Locations */}
        <section className="mt-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Job Locations
          </h2>
          <div className="mt-3">
            <MapComponent />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DispatcherDashboard;
