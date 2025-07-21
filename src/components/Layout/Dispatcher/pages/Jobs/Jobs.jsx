import React, { useState, useEffect } from "react";
import { Eye, ArrowLeft } from "lucide-react";
import JobDesc from "./JobDesc/JobDesc";
import { useNavigate, useParams } from "react-router-dom";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([
    {
      id: "#12345",
      customer: "Emily Carter",
      serviceType: "Plumbing Repair",
      status: "Accepted",
      scheduledTime: "9:00 AM - 11:00 AM",
    },
    {
      id: "#12346",
      customer: "David Lee",
      serviceType: "Electrical Installation",
      status: "In-Progress",
      scheduledTime: "10:00 AM - 12:00 PM",
    },
    {
      id: "#12347",
      customer: "Sarah Johnson",
      serviceType: "HVAC Maintenance",
      status: "Completed",
      scheduledTime: "11:00 AM - 1:00 PM",
    },
    {
      id: "#12348",
      customer: "Michael Brown",
      serviceType: "Appliance Repair",
      status: "Accepted",
      scheduledTime: "1:00 PM - 3:00 PM",
    },
    {
      id: "#12349",
      customer: "Jessica Wilson",
      serviceType: "General Handyman",
      status: "In-Progress",
      scheduledTime: "2:00 PM - 4:00 PM",
    },
  ]);

  const { jobId } = useParams();

  // Handle URL-based job selection
  useEffect(() => {
    if (jobId) {
      const job = jobs.find(j => j.id === jobId || j.id === `#${jobId}`);
      if (job) {
        setSelectedJob(job);
      } else {
        // If job not found, redirect back to jobs list
        console.warn(`Job with ID ${jobId} not found`);
        navigate('/dispatcher/jobs');
      }
    } else {
      // Clear selected job if no jobId in URL
      setSelectedJob(null);
    }
  }, [jobId, jobs, navigate]);

  const handleViewDetails = (job) => {
    const jobIdForUrl = job.id.replace('#', '');
    navigate(`/dispatcher/job/${jobIdForUrl}`);
  };

  const handleBackToJobs = () => {
    navigate('/dispatcher/jobs');
    setSelectedJob(null);
  };

  const handleJobRowClick = (job) => {
    navigate(`/dispatcher/job/${job.id.replace("#", "")}`);
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "Accepted":
        return `${baseClasses} bg-blue-100 text-blue-800 border border-blue-200`;
      case "In-Progress":
        return `${baseClasses} bg-blue-100 text-blue-800 border border-blue-200`;
      case "Completed":
        return `${baseClasses} bg-blue-100 text-blue-800 border border-blue-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-600 border border-gray-200`;
    }
  };

  // If a job is selected, render the JobDesc component
  if (selectedJob) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-4">
            <button
              onClick={handleBackToJobs}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Jobs</span>
            </button>
          </div>

          {/* Render JobDesc component */}
          <JobDesc selectedJob={selectedJob} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Today's Assigned Jobs
            </h1>
          </div>

          {/* Jobs Table */}
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="bg-gray-100 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-4 px-6 py-4">
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">Job ID</h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Customer
                  </h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Service Type
                  </h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">Status</h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Scheduled Time
                  </h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">Actions</h3>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 bg-white">
              {jobs.map((job, index) => (
                <div
                  key={job.id}
                  onClick={() => handleJobRowClick(job)}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-gray-900">{job.id}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                      {job.customer}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-blue-600">{job.serviceType}</p>
                  </div>
                  <div className="col-span-2">
                    <span className={getStatusBadge(job.status)}>
                      {job.status}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-700">{job.scheduledTime}</p>
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(job);
                      }}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <div>
              Showing {jobs.length} job{jobs.length !== 1 ? "s" : ""} for today
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded-full"></div>
                <span>
                  Accepted:{" "}
                  {jobs.filter((job) => job.status === "Accepted").length}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded-full"></div>
                <span>
                  In-Progress:{" "}
                  {jobs.filter((job) => job.status === "In-Progress").length}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded-full"></div>
                <span>
                  Completed:{" "}
                  {jobs.filter((job) => job.status === "Completed").length}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
