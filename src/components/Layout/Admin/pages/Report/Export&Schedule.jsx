import React from "react";

const ReportsExportPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fefe] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl border border-gray-300 rounded-lg bg-bg-sky-50 shadow-sm p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
          Reports & Analytics
        </h2>
        <p className="text-sm text-sky-700 mb-6">
          Gain insights into your business performance with detailed reports and analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Export Reports */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Export Reports</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Vendor Revenue Report</h4>
            <div className="space-y-4">
              {/* Report Type */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Report Type</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100">
                  <option value="">Select Report</option>
                  <option value="vendor_revenue">Vendor Revenue</option>
                  <option value="technician_performance">Top Technicians</option>
                  <option value="job_completion">Job Completion Rate</option>
                  <option value="invoice_payment">Invoice-to-Payment</option>
                  <option value="user_growth">New Users Per Week</option>
                </select>
              </div>

              {/* Filter by Vendor */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Filter by Vendor</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100">
                  <option value="">Select Vendor</option>
                  <option value="vendor_a">Vendor A</option>
                  <option value="vendor_b">Vendor B</option>
                  <option value="vendor_c">Vendor C</option>
                  <option value="vendor_d">Vendor D</option>
                  <option value="vendor_e">Vendor E</option>
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Start Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100" />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">End Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100" />
              </div>

              {/* Report Format */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Report Format</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100">
                  <option value="">Select Format</option>
                  <option value="pdf">PDF</option>
                  <option value="csv">CSV</option>
                  <option value="excel">Excel</option>
                </select>
              </div>

              {/* Export Button */}
              <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                Export Report
              </button>
            </div>
          </div>

          {/* Right Column - Auto-Schedule Reports */}
          <div className="md:ml-10">
            <h3 className="text-lg font-semibold mt-2 md:mt-12 text-black mb-4">Auto-Schedule Reports</h3>
            <div className="space-y-4">
              {/* Report Type */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Report Type</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100">
                  <option value="">Select Report</option>
                  <option value="vendor_revenue">Vendor Revenue</option>
                  <option value="technician_performance">Top Technicians</option>
                  <option value="job_completion">Job Completion Rate</option>
                  <option value="invoice_payment">Invoice-to-Payment</option>
                  <option value="user_growth">New Users Per Week</option>
                </select>
              </div>

              {/* Schedule Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Schedule Frequency</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100">
                  <option value="">Select Frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              {/* Email Recipients */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Email Recipients</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Schedule Button */}
              <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                Schedule Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsExportPage;
