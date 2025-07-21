import React, { useState } from "react";
import { CalendarDays, Search } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeLogsPage = () => {
  const [view, setView] = useState("table");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  const timeLogs = [
    { name: "Sophia Clark", date: "2024-11-15", hours: 8, job: "Job #1234" },
    { name: "Ethan Carter", date: "2024-11-15", hours: 7.5, job: "Job #5678" },
    { name: "Olivia Bennett", date: "2024-11-14", hours: 8, job: "Job #9012" },
    { name: "Liam Harper", date: "2024-11-14", hours: 6, job: "Job #3456" },
    { name: "Ava Foster", date: "2024-11-13", hours: 8, job: "Job #7890" },
  ];

  // 🔍 Filter logs based on search input
  const filteredLogs = timeLogs.filter((log) =>
    log.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.date.includes(searchQuery) ||
    log.job.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 p-4 sm:p-6 overflow-auto">
        <h1 className="text-2xl font-semibold text-gray-800">Time Logs</h1>
        <p className="text-gray-600 mb-4">View and manage your team's time logs.</p>

        {/* Search Input */}
        <div className="relative mb-4">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search by name, date, or job"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-400 bg-gray-200 rounded-md py-2 pl-10 pr-4"
          />
        </div>

        {/* View Toggle */}
        <div className="flex mb-4 gap-2">
          <button
            className={`flex-1 py-2 border rounded ${
              view === "table" ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => setView("table")}
          >
            Table
          </button>
          <button
            className={`flex-1 py-2 border rounded ${
              view === "calendar" ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => setView("calendar")}
          >
            Calendar
          </button>
        </div>

        {/* Calendar View */}
        {view === "calendar" && (
          <div className="p-4 mb-6 flex justify-center">
            <div className="text-gray-700">
              <div className="flex justify-center mb-2">
                <CalendarDays size={24} className="text-gray-500" />
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
              />
            </div>
          </div>
        )}

        {/* Table View */}
        {view === "table" && (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Team Member</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hours Worked</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Associated Job</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLogs.map((log, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{log.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{log.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{log.hours}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{log.job}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {filteredLogs.map((log, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-gray-800 font-semibold text-base">{log.name}</div>
                  <div className="text-sm text-gray-600 mt-1">Date: <span className="text-gray-800">{log.date}</span></div>
                  <div className="text-sm text-gray-600 mt-1">Hours Worked: <span className="text-gray-800">{log.hours}</span></div>
                  <div className="text-sm text-gray-600 mt-1">Job: <span className="text-blue-600">{log.job}</span></div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default TimeLogsPage;
