import React, { useState } from "react";
import { Briefcase, DollarSign, Settings, Truck } from "lucide-react";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Job Updates", "Payment Alerts", "System Messages"];

  const notifications = [
    {
      id: 1,
      type: "job",
      icon: <Briefcase className="h-5 w-5" />,
      title: "Job Assigned",
      message: "Job #12345 has been assigned to Technician Alex",
      timestamp: "2 hours ago",
      category: "Job Updates",
    },
    {
      id: 2,
      type: "payment",
      icon: <DollarSign className="h-5 w-5" />,
      title: "Payment Received",
      message: "Payment of $500 received for Job #12345",
      timestamp: "3 hours ago",
      category: "Payment Alerts",
    },
    {
      id: 3,
      type: "system",
      icon: <Settings className="h-5 w-5" />,
      title: "System Maintenance",
      message: "System maintenance scheduled for tomorrow at 10:00 PM",
      timestamp: "1 day ago",
      category: "System Messages",
    },
    {
      id: 4,
      type: "job",
      icon: <Briefcase className="h-5 w-5" />,
      title: "Job Completed",
      message: "Job #12346 has been completed by Technician Chris",
      timestamp: "2 days ago",
      category: "Job Updates",
    },
    {
      id: 5,
      type: "payment",
      icon: <DollarSign className="h-5 w-5" />,
      title: "Payment Received",
      message: "Payment of $300 received for Job #12346",
      timestamp: "3 days ago",
      category: "Payment Alerts",
    },
    {
      id: 6,
      type: "job",
      icon: <Truck className="h-5 w-5" />,
      title: "New Job Assigned",
      message: "Job #12345 has been assigned to you.",
      timestamp: "2 hours ago",
      category: "Job Updates",
    },
    {
      id: 7,
      type: "payment",
      icon: <DollarSign className="h-5 w-5" />,
      title: "Payment Received",
      message: "Payment of $50.00 received for Job #12345.",
      timestamp: "3 hours ago",
      category: "Payment Alerts",
    },
  ];

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.category === activeTab
        );

  const getIconBackground = (type) => {
    switch (type) {
      case "job":
        return "bg-blue-100";
      case "payment":
        return "bg-blue-100";
      case "system":
        return "bg-blue-100";
      default:
        return "bg-blue-100";
    }
  };

  const getIconColor = (type) => {
    return "text-blue-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Notifications
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 relative font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg ${getIconBackground(
                    notification.type
                  )} flex items-center justify-center`}
                >
                  <div className={getIconColor(notification.type)}>
                    {notification.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <span className="text-xs text-gray-500">
                        {notification.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Settings className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No notifications
            </h3>
            <p className="text-gray-600">
              No {activeTab.toLowerCase()} notifications at the moment.
            </p>
          </div>
        )}

        {/* Results Summary */}
        {filteredNotifications.length > 0 && (
          <div className="mt-6 text-sm text-gray-600 text-center">
            Showing {filteredNotifications.length} notification
            {filteredNotifications.length !== 1 ? "s" : ""}
            {activeTab !== "All" && ` in ${activeTab}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
