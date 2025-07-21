import React, { useState } from 'react';
import { Search, Phone, Mail, MapPin, Briefcase, Calendar, Eye, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Customers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Dummy customer data with their jobs
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Emily Carter",
      email: "emily.carter@email.com",
      phone: "(555) 123-4567",
      address: "123 Elm Street, Springfield, IL 62701",
      totalJobs: 3,
      activeJobs: 1,
      completedJobs: 2,
      jobs: [
        {
          id: "#12345",
          serviceType: "Plumbing Repair",
          status: "Accepted",
          scheduledDate: "2025-07-19",
          scheduledTime: "9:00 AM - 11:00 AM",
          description: "Kitchen sink leak repair",
          priority: "High"
        },
        {
          id: "#12398",
          serviceType: "Bathroom Renovation",
          status: "Completed",
          scheduledDate: "2025-07-10",
          scheduledTime: "10:00 AM - 4:00 PM",
          description: "Complete bathroom renovation",
          priority: "Normal"
        },
        {
          id: "#12401",
          serviceType: "Pipe Installation",
          status: "Completed",
          scheduledDate: "2025-06-15",
          scheduledTime: "8:00 AM - 12:00 PM",
          description: "New water line installation",
          priority: "Normal"
        }
      ]
    },
    {
      id: 2,
      name: "David Lee",
      email: "david.lee@email.com",
      phone: "(555) 234-5678",
      address: "456 Oak Avenue, Madison, WI 53703",
      totalJobs: 2,
      activeJobs: 1,
      completedJobs: 1,
      jobs: [
        {
          id: "#12346",
          serviceType: "Electrical Installation",
          status: "In-Progress",
          scheduledDate: "2025-07-19",
          scheduledTime: "10:00 AM - 12:00 PM",
          description: "New outlet installation in kitchen",
          priority: "Normal"
        },
        {
          id: "#12390",
          serviceType: "Wiring Upgrade",
          status: "Completed",
          scheduledDate: "2025-07-05",
          scheduledTime: "9:00 AM - 3:00 PM",
          description: "Electrical panel upgrade",
          priority: "High"
        }
      ]
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "(555) 345-6789",
      address: "789 Pine Road, Austin, TX 78701",
      totalJobs: 2,
      activeJobs: 0,
      completedJobs: 2,
      jobs: [
        {
          id: "#12347",
          serviceType: "HVAC Maintenance",
          status: "Completed",
          scheduledDate: "2025-07-18",
          scheduledTime: "11:00 AM - 1:00 PM",
          description: "Annual HVAC system maintenance",
          priority: "Normal"
        },
        {
          id: "#12385",
          serviceType: "AC Repair",
          status: "Completed",
          scheduledDate: "2025-06-20",
          scheduledTime: "2:00 PM - 4:00 PM",
          description: "Air conditioning unit repair",
          priority: "High"
        }
      ]
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@email.com",
      phone: "(555) 456-7890",
      address: "321 Maple Drive, Denver, CO 80203",
      totalJobs: 1,
      activeJobs: 1,
      completedJobs: 0,
      jobs: [
        {
          id: "#12348",
          serviceType: "Appliance Repair",
          status: "Accepted",
          scheduledDate: "2025-07-20",
          scheduledTime: "1:00 PM - 3:00 PM",
          description: "Washing machine repair",
          priority: "Normal"
        }
      ]
    },
    {
      id: 5,
      name: "Jessica Wilson",
      email: "jessica.wilson@email.com",
      phone: "(555) 567-8901",
      address: "654 Cedar Lane, Portland, OR 97201",
      totalJobs: 2,
      activeJobs: 1,
      completedJobs: 1,
      jobs: [
        {
          id: "#12349",
          serviceType: "General Handyman",
          status: "In-Progress",
          scheduledDate: "2025-07-19",
          scheduledTime: "2:00 PM - 4:00 PM",
          description: "Various home repairs",
          priority: "Normal"
        },
        {
          id: "#12395",
          serviceType: "Fence Repair",
          status: "Completed",
          scheduledDate: "2025-07-12",
          scheduledTime: "9:00 AM - 12:00 PM",
          description: "Backyard fence repair",
          priority: "Low"
        }
      ]
    }
  ]);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const handleViewJob = (jobId) => {
    const jobIdForUrl = jobId.replace('#', '');
    navigate(`/dispatcher/job/${jobIdForUrl}`);
  };

  const handleCustomerDetails = (customer) => {
    setSelectedCustomer(selectedCustomer?.id === customer.id ? null : customer);
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "Accepted":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "In-Progress":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "Completed":
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-600`;
    }
  };

  const getPriorityBadge = (priority) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (priority) {
      case "High":
        return `${baseClasses} bg-red-100 text-red-800`;
      case "Normal":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "Low":
        return `${baseClasses} bg-gray-100 text-gray-600`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-600`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Customer Management
              </h1>
              <p className="text-gray-600">
                Manage customers and view their job history
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search customers by name, email, or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            />
          </div>

          {/* Customers List */}
          <div className="space-y-4">
            {filteredCustomers.map((customer) => (
              <div key={customer.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Customer Header */}
                <div 
                  className="bg-white p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleCustomerDetails(customer)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {customer.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Mail className="h-4 w-4" />
                              <span>{customer.email}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>{customer.phone}</span>
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{customer.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{customer.totalJobs}</div>
                        <div className="text-xs text-gray-500">Total Jobs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">{customer.activeJobs}</div>
                        <div className="text-xs text-gray-500">Active</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{customer.completedJobs}</div>
                        <div className="text-xs text-gray-500">Completed</div>
                      </div>
                      <div className="text-blue-600">
                        {selectedCustomer?.id === customer.id ? '▼' : '▶'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Jobs (Expandable) */}
                {selectedCustomer?.id === customer.id && (
                  <div className="bg-gray-50 border-t border-gray-200 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                      <Briefcase className="h-4 w-4" />
                      <span>Job History ({customer.jobs.length} jobs)</span>
                    </h4>
                    <div className="space-y-3">
                      {customer.jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-lg border border-gray-200 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="font-medium text-gray-900">{job.id}</span>
                                <span className={getStatusBadge(job.status)}>{job.status}</span>
                                <span className={getPriorityBadge(job.priority)}>{job.priority}</span>
                              </div>
                              <h5 className="font-medium text-blue-600 mb-1">{job.serviceType}</h5>
                              <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{job.scheduledDate}</span>
                                </span>
                                <span>{job.scheduledTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleViewJob(job.id)}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 px-3 py-1 rounded hover:bg-blue-50 transition-colors"
                              >
                                <Eye className="h-3 w-3" />
                                <span>View Details</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Results Summary */}
          <div className="mt-6 text-sm text-gray-600 text-center">
            Showing {filteredCustomers.length} of {customers.length} customers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;