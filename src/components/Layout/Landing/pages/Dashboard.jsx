import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// ✅ Monthly Data
const monthlyData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 2400 },
  { month: "Mar", value: 3000 },
  { month: "Apr", value: 2780 },
  { month: "May", value: 1890 },
  { month: "Jun", value: 2390 },
];

// ✅ Dashboard Data
const dashboardData = {
  totalInvoices: "$12,500",
  revenue: "$25,000",
  jobCount: "15 Jobs",
  jobPipeline: [
    {
      id: "#12345",
      customer: "Sarah Johnson",
      status: "In Progress",
      technician: "Mike Davis",
      dueDate: "2024-07-15",
    },
    {
      id: "#12346",
      customer: "Robert Smith",
      status: "Scheduled",
      technician: "Emily White",
      dueDate: "2024-07-16",
    },
    {
      id: "#12347",
      customer: "Olivia Brown",
      status: "Completed",
      technician: "Mike Davis",
      dueDate: "2024-07-14",
    },
    {
      id: "#12348",
      customer: "William Green",
      status: "In Progress",
      technician: "Emily White",
      dueDate: "2024-07-17",
    },
    {
      id: "#12349",
      customer: "Sophia Clark",
      status: "Scheduled",
      technician: "Mike Davis",
      dueDate: "2024-07-18",
    },
  ],
};

// ✅ Status Color Helper
const getStatusColor = (status) => {
  switch (status) {
    case "Scheduled":
      return "bg-blue-200 text-blue-800";
    case "In Progress":
      return "bg-blue-300 text-blue-900";
    case "Completed":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

// ✅ Job Modal
const JobModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        aria-label="Close"
      >
        ✖
      </button>
      <h2 className="text-lg font-semibold mb-4">Create New Job</h2>
      <input className="border p-2 w-full mb-3" placeholder="Job Title" />
      <textarea className="border p-2 w-full mb-3" placeholder="Job Description" />
      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </div>
    </div>
  </div>
);

// ✅ Member Modal
const MemberModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        aria-label="Close"
      >
        ✖
      </button>
      <h2 className="text-lg font-semibold mb-4">Add Team Member</h2>
      <input className="border p-2 w-full mb-3" placeholder="Member Name" />
      <input className="border p-2 w-full mb-3" placeholder="Email" type="email" />
      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>
    </div>
  </div>
);

// ✅ Dashboard Component
export default function Dashboard() {
  const [showJobModal, setShowJobModal] = useState(false);
  const [showMemberModal, setShowMemberModal] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-6">Welcome back, Alex</p>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Invoices", value: dashboardData.totalInvoices },
          { label: "Revenue", value: dashboardData.revenue },
          { label: "Job Pipeline", value: dashboardData.jobCount },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-blue-100 p-4 rounded-md shadow-lg border border-gray-300 w-full min-h-[120px] flex flex-col justify-between"
          >
            <p className="text-sm font-medium text-black">{item.label}</p>
            <p className="text-xl font-semibold text-black">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-gray-50 border p-6 rounded-md shadow-sm mb-8">
        <p className="text-sm text-gray-600">Vendor Growth Over Time</p>
        <p className="text-xl font-bold">+15%</p>
        <p className="text-green-500 text-sm mb-2">Last 6 Months +15%</p>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" className="text-xs" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0f172a"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Job Pipeline */}
      <div className="p-6 rounded-md">
        <p className="text-lg font-semibold text-gray-800 mb-4">Job Pipeline</p>

        {/* Table - Desktop */}
        <div className="overflow-x-auto hidden md:block">
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="px-4 py-2">Job ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Technician</th>
                <th className="px-4 py-2">Due Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dashboardData.jobPipeline.map((job) => (
                <tr key={job.id} className="border-b">
                  <td className="px-4 py-2">{job.id}</td>
                  <td className="px-4 py-2 text-gray-500">{job.customer}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-500">{job.technician}</td>
                  <td className="px-4 py-2 text-gray-500">{job.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden space-y-4">
          {dashboardData.jobPipeline.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm border p-4 space-y-2">
              <div className="text-sm font-semibold">Job ID: {job.id}</div>
              <div className="text-sm">Customer: {job.customer}</div>
              <div className="text-sm">
                Status:{" "}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                  {job.status}
                </span>
              </div>
              <div className="text-sm">Technician: {job.technician}</div>
              <div className="text-sm">Due Date: {job.dueDate}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setShowJobModal(true)}
          >
            Create New Job
          </button>
          <button
            className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-md hover:bg-gray-300"
            onClick={() => setShowMemberModal(true)}
          >
            Add Member
          </button>
        </div>
      </div>

      {/* Show Modals */}
      {showJobModal && <JobModal onClose={() => setShowJobModal(false)} />}
      {showMemberModal && <MemberModal onClose={() => setShowMemberModal(false)} />}
    </div>
  );
}
