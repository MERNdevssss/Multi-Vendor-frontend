import React from "react";
import { CreditCard, DollarSign, BarChart } from "lucide-react";

export default function StripeConnection() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Connect Your Stripe Account</h1>
      <p className="text-gray-600 mb-8">
        Integrating Stripe with SwiftDispatch allows you to seamlessly process payments, manage transactions,
        and gain valuable insights into your business&apos;s financial performance. Enjoy secure and reliable payment
        processing, automated payouts, and detailed transaction reports, all within your SwiftDispatch dashboard.
      </p>

      <h2 className="font-semibold mb-3">Benefits of Stripe Integration</h2>
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <div className="bg-gray-100 p-2 rounded">
            <CreditCard className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-medium">Seamless Payment Processing</p>
            <p className="text-gray-500 text-sm">
              Process payments securely and efficiently, reducing transaction times and improving customer satisfaction.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-gray-100 p-2 rounded">
            <DollarSign className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-medium">Automated Payouts</p>
            <p className="text-gray-500 text-sm">
              Automate payouts to your drivers and vendors, ensuring timely and accurate compensation.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-gray-100 p-2 rounded">
            <BarChart className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <p className="font-medium">Transaction Management</p>
            <p className="text-gray-500 text-sm">
              Access detailed reports on all transactions, including payments, refunds, and payouts, for better financial management.
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-semibold mb-2">Onboarding Steps</h2>
      <p className="text-sm mb-2">Step 1 of 3</p>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-gray-800 h-2 rounded-full w-1/3"></div>
      </div>

      <p className="text-gray-600 mb-4">Connect Stripe Account</p>
      <p className="text-gray-600 mb-6">
        Click the button below to start the Stripe connection process. You will be redirected to Stripe to authorize
        SwiftDispatch to access your account. Follow the prompts to complete the connection.
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Connect with Stripe
      </button>
    </div>
  );
}
