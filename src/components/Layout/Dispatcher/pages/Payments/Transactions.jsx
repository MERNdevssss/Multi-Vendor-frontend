import React from "react";

export default function Transactions() {
  const transactions = [
    { customer: "Sophia Clark", amount: "$50.00", date: "2024-03-15", status: "Successful" },
    { customer: "Ethan Bennett", amount: "$75.00", date: "2024-03-16", status: "Pending" },
    { customer: "Olivia Hayes", amount: "$100.00", date: "2024-03-17", status: "Successful" },
    { customer: "Liam Foster", amount: "$60.00", date: "2024-03-18", status: "Failed" },
    { customer: "Ava Morgan", amount: "$85.00", date: "2024-03-19", status: "Successful" },
  ];

  const statusColors= {
    Successful: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border rounded shadow p-6">
      <h1 className="text-xl md:text-2xl font-semibold mb-2">Payment Integration (Stripe)</h1>
      <p className="text-gray-500 mb-6">
        Manage and monitor transactions processed through Stripe.
      </p>

      <h2 className="font-semibold mb-3">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border rounded">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="py-2 px-3">Customer</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-3">{txn.customer}</td>
                <td className="py-2 px-3">{txn.amount}</td>
                <td className="py-2 px-3">{txn.date}</td>
                <td className="py-2 px-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${statusColors[txn.status]}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="py-2 px-3 text-blue-600 hover:underline cursor-pointer">
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
