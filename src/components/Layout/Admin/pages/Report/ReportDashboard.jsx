import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const ReportsDashboard = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(null);
  const vendorData = [
    { name: "Vendor A", revenue: 40000 },
    { name: "Vendor B", revenue: 30000 },
    { name: "Vendor C", revenue: 45000 },
    { name: "Vendor D", revenue: 38000 },
    { name: "Vendor E", revenue: 47000 },
    { name: "Vendor F", revenue: 32000 },
  ];

  const completionData = [
    { week: "Week 1", rate: 60 },
    { week: "Week 2", rate: 40 },
    { week: "Week 3", rate: 80 },
    { week: "Week 4", rate: 50 },
  ];

  const conversionData = [
    { week: "Week 1", value: 75 },
    { week: "Week 2", value: 70 },
    { week: "Week 3", value: 60 },
    { week: "Week 4", value: 72 },
  ];

  const userData = [
    { week: "Week 1", users: 20 },
    { week: "Week 2", users: 30 },
    { week: "Week 3", users: 35 },
    { week: "Week 4", users: 50 },
  ];

  return (
    <div className="px-4 md:px-12 py-8 text-gray-800 text-sm">
      <h1 className="text-2xl font-bold mb-1">Reports & Analytics</h1>
      <p className="text-gray-500 mb-4 text-xs">
        Export in PDF, Excel, or CSV formats and use a custom date range picker.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
      <button
        className={`px-4 py-2 rounded-lg ${
          clicked === 'schedule'
            ? 'bg-blue-300 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-gray-800'
        }`}
        onClick={() => {
          if (!clicked) {
            setClicked('export');
            navigate('/admin/reports/exports');
          }
        }}
        disabled={clicked === 'schedule'}
      >
        Export
      </button>

      <button
        className={`px-4 py-2 rounded-lg ${
          clicked === 'export'
            ? 'bg-sky-200 text-gray-400 cursor-not-allowed'
            : 'bg-sky-400 text-white'
        }`}
        onClick={() => {
          if (!clicked) {
            setClicked('schedule');
           navigate('/admin/reports/exports');
          }
        }}
        disabled={clicked === 'export'}
      >
        Schedule Reports
      </button>
    </div>

      {/* Vendor Revenue */}
<section className="mb-10">
  <h2 className="font-bold text-lg mb-4">Vendor Revenue</h2>
  <div className="border border-gray-400 p-4 rounded-xl shadow bg-sky-50">
    <p className="text-base text-black mb-2">Vendor Revenue</p>
    <p className="text-2xl font-bold">$250,000</p>
    <p className="text-base text-gray-500">
      Last 30 Days <span className="text-green-500 font-medium">+15%</span>
    </p>
    <div className="max-w-md w-full ml-0">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={vendorData}>
          <XAxis dataKey="name" axisLine={{ stroke: '#ccc' }} tickLine={false} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#bae6fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</section>



      {/* Top-Performing Technicians */}
      <section className="mb-10">
        <h2 className="font-bold text-lg mb-4">Top-Performing Technicians</h2>
        <div className="overflow-auto border border-gray-400 rounded-xl shadow">
          <table className="min-w-full bg-sky-50 text-left">
            <thead className="bg-sky-200">
              <tr>
                <th className="p-3 font-medium">Technician</th>
                <th className="p-3 font-medium">Jobs Completed</th>
                <th className="p-3 font-medium">Average Rating</th>
                <th className="p-3 font-medium">Revenue Generated</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ethan Carter", 120, 4.8, "$30,000"],
                ["Olivia Bennett", 115, 4.7, "$28,500"],
                ["Noah Thompson", 110, 4.9, "$27,000"],
                ["Ava Martinez", 105, 4.6, "$25,500"],
                ["Liam Harris", 100, 4.5, "$24,000"],
              ].map(([tech, jobs, rating, revenue], idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3 font-medium">{tech}</td>
                  <td className="p-3">{jobs}</td>
                  <td className="p-3">{rating}</td>
                  <td className="p-3">{revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Job Completion Rate */}
      <section className="mb-10">
  <h2 className="font-bold text-gray-800 text-lg mb-4">Job Completion Rate</h2>
  <div className="border border-gray-400 p-6 rounded-xl shadow-sm bg-sky-50">
    <p className="text-2xl font-bold text-gray-900">95%</p>
    <p className="text-sm text-gray-500 mt-1">
      Last 30 Days <span className="text-green-600 font-medium">+5%</span>
    </p>
    <div className="mt-6">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={completionData}>
          <XAxis dataKey="week" tick={{ fill: '#64748b' }} axisLine={{ stroke: '#e5e7eb' }} tickLine={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="rate"
            stroke="#000"
            fill="#4b5563"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
</section>


      {/* Invoice-to-Payment Conversion */}
      <section className="mb-10">
  <h2 className="font-bold text-lg mb-4">Invoice-to-Payment Conversation</h2>
  <div className="border border-gray-400 p-4 rounded-xl shadow bg-sky-50">
    <p className="text-base text-black mb-2">Invoice-to-Payment Conversation</p>
    <p className="text-2xl font-bold">85%</p>
    <p className="text-base text-gray-500">
      Last 30 Days <span className="text-green-500 font-medium">+10%</span>
    </p>
    <div className="max-w-xs w-full ml-0">
      <ResponsiveContainer width="100%" height={200}>
  
        <BarChart data={conversionData}>
          <XAxis dataKey="week" axisLine={{ stroke: '#ccc' }} tickLine={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#bae6fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</section>


      {/* New Users Per Week */}
      <section className="mb-10">
        <h2 className="font-bold text-lg mb-4">New Users Per Week</h2>
        <div className="border border-gray-400 p-4 rounded-xl shadow bg-sky-50">
          <p className="text-2xl font-bold">50</p>
          <p className="text-xs text-gray-500">
            Last 30 Days <span className="text-green-500 font-medium">+20%</span>
          </p>
          <div className="max-w-xs w-full ml-0">
      <ResponsiveContainer width="100%" height={200}>
  
        <BarChart data={userData}>
          <XAxis dataKey="week" axisLine={{ stroke: '#ccc' }} tickLine={false} />
          <Tooltip />
          <Bar dataKey="users" fill="#bae6fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
        </div>
      </section>
    </div>
  );
};

export default ReportsDashboard;
