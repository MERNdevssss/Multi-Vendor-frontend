import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// All data arrays
const stats = [
  { title: "Active Vendors", value: "150", change: "+10%" },
  { title: "Invoices", value: "1,800" },
  { title: "New Jobs", value: "2,500" },
  { title: "Avg. Completion Time", value: "2.5 hrs" },
  { title: "Total Revenue (Platform Fees)", value: "$25,000", change: "+15%" },
  { title: "Platform Usage", value: "85%", change: "+5%" },
];

const notifications = [
  { title: "Vendor Application", desc: "New vendor application received" },
  { title: "Job Completion", desc: "Job completed successfully" },
];

const logs = [
  { title: "Vendor Added", desc: "Vendor 'Tech Solutions' added" },
  { title: "Job Completed", desc: "Job #12345 completed" },
];

const vendors = [
  { name: "Vendor X", value: 90 },
  { name: "Vendor Y", value: 25 },
  { name: "Vendor Z", value: 30 },
  { name: "Vendor W", value: 75 },
  { name: "Vendor V", value: 85 },
  { name: "Vendor U", value: 65 },
  { name: "Vendor T", value: 65 },
  { name: "Vendor S", value: 10 },
  { name: "Vendor R", value: 90 },
  { name: "Vendor Q", value: 80 },
];

const vendorData = [
  { month: "Jan", growth: 10 },
  { month: "Feb", growth: 12 },
  { month: "Mar", growth: 14 },
  { month: "Apr", growth: 18 },
  { month: "May", growth: 20 },
  { month: "Jun", growth: 25 },
];

const revenueData = [
  { name: "Vendor A", revenue: 4000 },
  { name: "Vendor B", revenue: 3000 },
  { name: "Vendor C", revenue: 2000 },
  { name: "Vendor D", revenue: 2780 },
  { name: "Vendor E", revenue: 1890 },
];

const lineData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 350 },
  { month: "Mar", value: 480 },
  { month: "Apr", value: 320 },
  { month: "May", value: 450 },
  { month: "Jun", value: 300 },
  { month: "Jul", value: 500 },
];

const techJobData = [
  { name: "Techs", value: 3500 },
  { name: "Jobs", value: 3500 },
];

const jobStatusData = [
  { name: "Open", value: 80 },
  { name: "Completed", value: 80 },
  { name: "Cancelled", value: 80 },
];

// ✅ Main Dashboard Component
export default function SuperAdminDashboard() {
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);

  return (
    <div className="bg-[#F8FAFC] min-h-screen px-4 sm:px-6 lg:px-10 py-6">
      <h2 className="text-xl sm:text-2xl font-bold mt-6">Super Admin Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-3 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 p-4 rounded-xl shadow border border-gray-400 hover:shadow-lg transition"
              >
                <h3 className="text-black text-sm font-semibold">{item.title}</h3>
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                {item.change && <p className="text-green-600 text-sm mt-1">{item.change}</p>}
              </div>
            ))}
          </div>

          {/* Platform Overview Charts */}
          <section className="rounded-xl p-4">
            <h3 className="text-lg font-semibold text-black">Platform Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Vendor Growth */}
              <ChartCard title="Vendor Growth Over Time" data={vendorData} dataKey="growth" label="+15%" />

              {/* Revenue Distribution */}
              <BarChartCard title="Revenue Distribution by Vendor" data={revenueData} dataKey="revenue" label="$12,000" />
            </div>
          </section>

          {/* Revenue & Job Stats */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ChartCard title="Monthly Revenue" data={lineData} dataKey="value" label="$50,000" />
            <ChartCard title="Payment Success Rate" data={lineData} dataKey="value" label="95%" />
            <BarChartCard title="Active Tech vs. Completed Jobs" data={techJobData} dataKey="value" label="2,500" />
            <BarChartCard title="Job Status" data={jobStatusData} dataKey="value" label="100%" />
          </section>

          {/* Vendor Performance */}
          <section className="p-6 rounded-lg w-full">
            <h4 className="text-lg font-bold text-gray-800">Vendor Performance</h4>
            <div className="p-4 rounded-lg border border-gray-200 mt-4">
              <h3 className="text-xl font-bold text-gray-900 mt-2">Top 10</h3>
              <ul className="mt-6 space-y-4">
                {vendors.map((vendor, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-gray-700 w-32">{vendor.name}</span>
                    <div className="flex-1 h-3 overflow-hidden bg-gray-200 rounded">
                      <div className="h-3 bg-gray-400" style={{ width: `${vendor.value}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Revenue Trends & Activity */}
          <ChartCard title="Platform Revenue Trends" data={lineData} dataKey="value" label="$30,000" />
          <ChartCard title="User Activity" data={lineData} dataKey="value" label="+20%" />
        </div>

        {/* RIGHT SIDE (Sidebar) */}
        <aside className="space-y-6">
          {/* Quick Actions */}
          <div className="p-4 rounded-lg">
            <h4 className="font-bold text-black mb-3">Quick Actions</h4>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setShowVendorModal(true)}
            >
              Add New Vendor
            </button>
            <button
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 mt-3"
              onClick={() => setShowJobModal(true)}
            >
              Create New Job
            </button>
          </div>

          {/* Notifications */}
          <div className="p-4 rounded-lg">
            <h4 className="font-bold text-black mb-3">Notifications</h4>
            {notifications.map((note, i) => (
              <div key={i} className="p-2 bg-sky-200 rounded-lg border border-gray-400 mb-2">
                <h5 className="text-blue-700 text-sm font-medium">{note.title}</h5>
                <p className="text-xs text-gray-600">{note.desc}</p>
              </div>
            ))}
          </div>

          {/* Logs */}
          <div className="p-4 rounded-lg">
            <h4 className="font-bold text-black mb-3">Logs & Activities</h4>
            {logs.map((log, i) => (
              <div
                key={i}
                className="p-3 bg-sky-200 rounded-xl mb-2 border border-gray-400 hover:bg-blue-100 transition"
              >
                <h5 className="text-blue-700 font-medium">{log.title}</h5>
                <p className="text-xs text-gray-600">{log.desc}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Modals */}
      {showVendorModal && (
        <Modal onClose={() => setShowVendorModal(false)} title="Add New Vendor">
          <form className="space-y-4">
            <input type="text" placeholder="Vendor Name" className="border p-2 w-full rounded" />
            <input type="email" placeholder="Email" className="border p-2 w-full rounded" />
            <input type="text" placeholder="Phone Number" className="border p-2 w-full rounded" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Vendor</button>
          </form>
        </Modal>
      )}

      {showJobModal && (
        <Modal onClose={() => setShowJobModal(false)} title="Create New Job">
          <form className="space-y-4">
            <input type="text" placeholder="Job Title" className="border p-2 w-full rounded" />
            <textarea placeholder="Job Description" className="border p-2 w-full rounded" rows={3} />
            <input type="date" className="border p-2 w-full rounded" />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Create Job</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

// ✅ Reusable Modal
function Modal({ onClose, title, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

// ✅ Chart Card Component (for line charts)
function ChartCard({ title, data, dataKey, label }) {
  return (
    <div className="p-4 rounded-lg border border-gray-400">
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-black font-bold text-2xl mt-2">{label}</p>
      <p className="text-green-600 text-sm mt-2">+10%</p>
      <div className="h-28 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" tick={{ fill: "#6B7280" }} />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke="#6b7280" strokeWidth={2} dot={{ r: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ✅ Bar Chart Card Component
function BarChartCard({ title, data, dataKey, label }) {
  return (
    <div className="p-4 rounded-lg border border-gray-400">
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-black font-bold text-2xl mt-2">{label}</p>
      <p className="text-green-600 text-sm mt-2">+5%</p>
      <div className="h-28 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={40}>
            <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey={dataKey} fill="#9ca3af" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
