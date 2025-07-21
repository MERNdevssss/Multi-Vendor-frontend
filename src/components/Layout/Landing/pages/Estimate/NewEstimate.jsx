import React from "react";

const NewEstimatePage = () => {
  // Sample data for services and materials
  const services = [
    {
      service: "Plumbing Repair",
      description: "Fix leaky faucet",
      quantity: 1,
      unitPrice: "$50.00",
      total: "$50.00",
    },
    {
      service: "Electrical Wiring",
      description: "Rewire living room",
      quantity: 1,
      unitPrice: "$200.00",
      total: "$200.00",
    },
  ];

  const materials = [
    {
      material: "Copper Pipe",
      description: "1/2 inch",
      quantity: 10,
      unitPrice: "$5.00",
      total: "$50.00",
    },
  ];

  return (
    <div className="min-h-screen  bg-[#F6FBFC] p-6">
      {/* Add max width and center content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Form Section */}
        <div className="flex-1 mt-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900">New Estimate</h1>
          <p className="text-gray-600 mt-1 text-sm">
            Create a new estimate for a customer
          </p>

          {/* Form Fields */}
          <div className="mt-6 space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Customer
              </label>
              <select className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                <option>Select Customer</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm  font-semibold mb-1">
                Estimate Number
              </label>
              <input
                type="text"
                placeholder="Estimate Number"
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Estimate Date
              </label>
              <input
                type="date"
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Expiry Date
              </label>
              <input
                type="date"
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">Services</h2>

            {/* Table for desktop */}
            <div className="hidden md:block mt-3 overflow-x-auto rounded-lg border border-gray-300">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Service
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Description
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Unit Price
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-2">{s.service}</td>
                      <td className="px-4 py-2 text-gray-600">
                        {s.description}
                      </td>
                      <td className="px-4 py-2">{s.quantity}</td>
                      <td className="px-4 py-2">{s.unitPrice}</td>
                      <td className="px-4 py-2">{s.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards for mobile */}
            <div className="md:hidden mt-3 space-y-3">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow border border-gray-200 p-4"
                >
                  <p className="text-sm font-semibold text-gray-800">
                    Service: <span className="font-normal">{s.service}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Description: {s.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {s.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    Unit Price: {s.unitPrice}
                  </p>
                  <p className="text-sm text-gray-600">Total: {s.total}</p>
                </div>
              ))}
            </div>

            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Add Service
            </button>
          </div>

          {/* Materials Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">Materials</h2>

            {/* Table for desktop */}
            <div className="hidden md:block mt-3 overflow-x-auto rounded-lg border border-gray-300">
              <table className="min-w-full bg-white text-sm">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Material
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Description
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Unit Price
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-2">{m.material}</td>
                      <td className="px-4 py-2 text-gray-600">
                        {m.description}
                      </td>
                      <td className="px-4 py-2">{m.quantity}</td>
                      <td className="px-4 py-2">{m.unitPrice}</td>
                      <td className="px-4 py-2">{m.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards for mobile */}
            <div className="md:hidden mt-3 space-y-3">
              {materials.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow border border-gray-200 p-4"
                >
                  <p className="text-sm font-semibold text-gray-800">
                    Material: <span className="font-normal">{m.material}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Description: {m.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    Quantity: {m.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    Unit Price: {m.unitPrice}
                  </p>
                  <p className="text-sm text-gray-600">Total: {m.total}</p>
                </div>
              ))}
            </div>

            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Add Material
            </button>
          </div>

          {/* Labor Costs */}
          {/* Labor Costs */}
<div className="mt-8">
  <h2 className="text-lg font-semibold text-gray-800">Labor Costs</h2>
  <div className="mt-3 grid grid-cols-1 gap-4">
    <div>
      <label className="block text-gray-700 text-sm font-semibold mb-1">
        Labor Hours
      </label>
      <input
        type="number"
        placeholder="Labor Hours"
        className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-semibold mb-1">
        Hourly Rate
      </label>
      <input
        type="number"
        placeholder="Hourly Rate"
        className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  </div>
</div>


          {/* Total Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">Total</h2>
            <div className="mt-3">
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Total Amount
              </label>
              <input
                type="text"
                placeholder="Total Amount"
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">Notes</h2>
            <textarea
              placeholder="Notes"
              rows="4"
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="w-full md:w-60 flex mt-4 flex-col gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Estimate Actions
          </h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
            Save Estimate
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
            Send Estimate
          </button>
          <button className="bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg">
            Preview Estimate
          </button>
          <button className="text-black font-semibold px-4 py-2 rounded-lg hover:underline">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEstimatePage;
