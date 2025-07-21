import React from "react";

const InvoiceDetailsPage = () => {
  const invoice = {
    id: "INV-2023-001",
    issuedDate: "July 15, 2023",
    status: "Paid",
    dueDate: "July 30, 2023",
    totalAmount: "$2,500.00",
    customer: {
      name: "Olivia Bennett",
      email: "olivia.bennett@example.com",
      address: "123 Elm Street, Anytown, CA 91234",
    },
    business: {
      name: "Tech Solutions Inc.",
      email: "contact@techsolutions.com",
      logo: "Tech Solutions Inc. Logo",
    },
    items: [
      {
        service: "Software Development",
        description: "Custom software solution",
        quantity: 1,
        unitPrice: "$2,000.00",
        total: "$2,000.00",
      },
      {
        service: "Consulting",
        description: "Project management and strategy",
        quantity: 10,
        unitPrice: "$50.00",
        total: "$500.00",
      },
      {
        service: "Training",
        description: "On-site training for staff",
        quantity: 1,
        unitPrice: "$0.00",
        total: "$0.00",
      },
    ],
    payment: {
      method: "Credit Card",
      amount: "$2,500.00",
      date: "July 15, 2023",
    },
    notes:
      "Thank you for your business. Payment is due within 15 days of the invoice date. Please contact us if you have any questions.",
  };

  return (
    <div className="min-h-screen bg-[#F6FBFC]  p-4 sm:p-8">
        <div>

        </div>
      {/* Breadcrumb */}
      

      {/* Invoice Header */}
      <div className="  p-6 sm:p-8 shadow-sm rounded-xl border border-gray-400">
        <p className="text-gray-500 text-sm mb-4 ">
        Invoices / <span className="text-black">Invoice #{invoice.id}</span>
      </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Invoice #{invoice.id}
          </h1>
          <button className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
            Download/Print
          </button>
        </div>
        <p className="text-gray-500 mt-1 text-sm">
          Issued on {invoice.issuedDate}
        </p>

        {/* Invoice Summary */}
        <div className="mt-6  border-gray-200 pt-4">
  <h2 className="text-xl font-bold text-black mb-4">Invoice Summary</h2>
  <div className="space-y-2">
    <div className="flex justify-between text-sm text-gray-700">
      <span className="fbold">Status:</span>
      <span>{invoice.status}</span>
    </div>
    <div className="flex justify-between text-sm text-gray-700">
      <span className="fbold">Due Date:</span>
      <span>{invoice.dueDate}</span>
    </div>
    <div className="flex justify-between text-sm text-gray-700">
      <span className="fbold">Total Amount Due:</span>
      <span>{invoice.totalAmount}</span>
    </div>
  </div>
</div>


        {/* Customer Information */}
        <div className="mt-8  border-gray-200 pt-4">
          <h2 className="text-xl font-bold text-black">
            Customer Information
          </h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <p>
              <span className="font-bold">Customer Name: </span>
              {invoice.customer.name}
            </p>
            <p>
              <span className="font-bold">Contact Email: </span>
              {invoice.customer.email}
            </p>
            <p className="sm:col-span-2">
              <span className="font-bold">Billing Address: </span>
              {invoice.customer.address}
            </p>
          </div>
        </div>

        {/* Business Information */}
        <div className="mt-8  border-gray-200 pt-4">
          <h2 className="text-xl font-bold text-black">
            Business Information
          </h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <p>
              <span className="font-bold">Business Name: </span>
              {invoice.business.name}
            </p>
            <p>
              <span className="font-bold">Contact Email: </span>
              {invoice.business.email}
            </p>
            <p className="sm:col-span-2">
              <span className="font-bold">Business Logo: </span>
              {invoice.business.logo}
            </p>
          </div>
        </div>

        {/* Invoice Items */}
        <div className="mt-8  border-gray-200 pt-4">
          <h2 className="text-xl font-bold text-black">
            Invoice Items
          </h2>

          {/* Table for Desktop */}
          <div className="hidden sm:block mt-4 overflow-x-auto rounded-lg border border-gray-300">
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-sky-100">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">
                    Item/Service
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
                    Total Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{item.service}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {item.description}
                    </td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">{item.unitPrice}</td>
                    <td className="px-4 py-2">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile */}
          <div className="sm:hidden mt-4 space-y-3">
            {invoice.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow border border-gray-200 p-4"
              >
                <p className="text-sm font-semibold text-gray-800">
                  Item: <span className="font-normal">{item.service}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Description: {item.description}
                </p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  Unit Price: {item.unitPrice}
                </p>
                <p className="text-sm text-gray-600">Total: {item.total}</p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-4 text-sm text-gray-700 space-y-1">
  <div className="flex justify-between">
    <span className="font-bold">Subtotal:</span>
    <span>{invoice.totalAmount}</span>
  </div>
  <div className="flex justify-between">
    <span className="font-bold">Taxes:</span>
    <span>$0.00</span>
  </div>
  <div className="flex justify-between">
    <span className="font-bold">Discounts:</span>
    <span>$0.00</span>
  </div>
  <div className="flex justify-between font-bold text-gray-900">
    <span className="font-bold">Total:</span>
    <span>{invoice.totalAmount}</span>
  </div>
</div>

        </div>

        {/* Payment Details */}
        <div className="mt-8  border-gray-200 pt-4">
          <h2 className="text-xl font-bold text-black">
            Payment Details
          </h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <p>
              <span className="font-bold">Payment Method: </span>
              {invoice.payment.method}
            </p>
            <p>
              <span className="font-bold">Payment Amount: </span>
              {invoice.payment.amount}
            </p>
            <p className="sm:col-span-2">
              <span className="font-bold">Payment Date: </span>
              {invoice.payment.date}
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-8  border-gray-200 pt-4">
          <h2 className="text-xl font-bold text-black">Notes/Terms</h2>
          <p className="mt-2 text-sm text-gray-600">{invoice.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsPage;
