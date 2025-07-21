import React from "react";

const PlatformSettings = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 font-sans text-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Platform Settings</h1>
      <p className="mb-6 text-sm sm:text-base text-gray-600">
        Configure global settings for the entire platform.
      </p>

      {/* General Settings */}
      <Section title="General Settings">
        <Input label="Platform Name" />
        <Input label="Platform Logo URL" />
        <Input label="Language" />
        <Input label="Support Contact" />
      </Section>

      {/* Vendor Management */}
      <Section title="Vendor Management">
  <div className="border border-gray-300 rounded-xl p-4 mb-4">
    <Radio
      label="Auto-Approve"
      description="Automatically approve new vendor sign-ups."
      name="approval"
      defaultChecked
    />
  </div>
  <div className="border border-gray-300 rounded-xl p-4 mb-4">
    <Radio
      label="Manual Approval"
      description="Manually review and approve new vendor sign-ups."
      name="approval"
    />
  </div>
  
    <Input label="Subscription Tiers" />
    <Input label="Vendor Agreements URL" />
  
</Section>

      {/* User Roles & Permissions */}
   <Section title="User Roles & Permissions">
  <div className="overflow-auto border  border-gray-400 rounded-xl">
    <table className="min-w-full text-sm ">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="px-4 py-2 w-1/2 text-start">Role</th>
          <th className="px-4 py-2 w-1/2 text-start">Permissions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-4 py-2 text-start">Admin</td>
          <td className="px-4 py-2 text-start">Full access to all features and settings.</td>
        </tr>
        <tr className="border-t">
          <td className="px-4 py-2 text-start">Manager</td>
          <td className="px-4 py-2 text-start">Access to orders, vendors, and reports.</td>
        </tr>
        <tr className="border-t">
          <td className="px-4 py-2 text-start">Dispatcher</td>
          <td className="px-4 py-2 text-start">Access to orders and dispatch management.</td>
        </tr>
      </tbody>
    </table>
  </div>
</Section>



      {/* Financial Settings */}
      <Section title="Financial Settings">
        <Input label="Default Dispatch Rate" />
        <Input label="Default Delivery Rate" />
        <Input label="Tax Rate (%)" />
        <Input label="Default Currency" />
        <Input label="Payment Gateway API Key" />
      </Section>

      {/* Notifications */}
      <Section title="Notifications">
        <Input label="Notification Preferences" />
        <Input label="Notification Templates URL" />
      </Section>

      {/* API & Integrations */}
      <Section title="API & Integrations">
        <Input label="API Keys" />
        <Input label="Webhooks URL" />
      </Section>

      {/* Security Settings */}
      <Section title="Security Settings">
        <Input label="Password Policies" />
        <Input label="Two-Factor Authentication (2FA)" />
      </Section>

      {/* System Settings */}
      <Section title="System Settings">
        <Input label="Data Retention Period (days)" />
        <Input label="Logging Level" />
        <Input label="Maintenance Mode" />
      </Section>

      <div className="text-right mt-6">
        <button className="bg-sky-600 text-black px-6 py-2 rounded-xl hover:bg-sky-600 font-semibold text-sm sm:text-base">
          Save Settings
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="font-bold text-xl mb-4">{title}</h2>
    <div className="space-y-4 sm:space-y-6">{children}</div>
  </section>
);

const Input = ({ label }) => (
  <div>
    <label className="block text-sm sm:text-base font-medium mb-1">{label}</label>
    <input
      type="text"
      className="w-1/2 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
  </div>
);

const Radio = ({ label, description, name, defaultChecked }) => (
  <label className="flex items-start space-x-3 cursor-pointer">
    <input
      type="radio"
      name={name}
      defaultChecked={defaultChecked}
      className="mt-1 h-4 w-4 text-sky-500 focus:ring-sky-400 border-gray-300"
    />
    <span>
      <span className="font-medium block text-sm sm:text-base">{label}</span>
      <span className="text-xs text-gray-600">{description}</span>
    </span>
  </label>
);

export default PlatformSettings;
