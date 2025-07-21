import React from "react";
import { Clock, Info, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

function Updates({ updates }) {
  const getUpdateIcon = (type) => {
    switch (type) {
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "confirmation":
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case "progress":
        return <TrendingUp className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getUpdateColor = (type) => {
    switch (type) {
      case "info":
        return "bg-blue-50 border-blue-200";
      case "success":
        return "bg-green-50 border-green-200";
      case "confirmation":
        return "bg-blue-50 border-blue-200";
      case "progress":
        return "bg-orange-50 border-orange-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div>
      <h3 className="font-semibold mb-4">Job Updates</h3>
      <div className="space-y-3">
        {updates.map((update, idx) => (
          <div key={idx} className={`p-4 rounded-lg border ${getUpdateColor(update.type)}`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getUpdateIcon(update.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 mb-1">{update.text}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{update.date}</span>
                  {update.time && <span>{update.time}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add Update Button */}
      <div className="mt-4">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
          <TrendingUp className="h-4 w-4" />
          <span>Add Update</span>
        </button>
      </div>
    </div>
  );
}

export default Updates;