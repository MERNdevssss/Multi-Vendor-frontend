export const getStatusColor = (status) => {
  const colors = {
    "In Progress": "bg-yellow-100 text-yellow-800",
    "Scheduled": "bg-blue-100 text-blue-800",
    "Completed": "bg-green-100 text-green-800",
  };
  return colors[status] || "bg-gray-100 text-gray-800";
};

export const getPriorityColor = (priority) => {
  const colors = {
    "High": "text-red-600",
    "Medium": "text-yellow-600",
    "Low": "text-green-600",
  };
  return colors[priority] || "text-gray-600";
};
