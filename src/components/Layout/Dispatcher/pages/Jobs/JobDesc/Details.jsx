import React, { useState } from "react";
import { Upload, X, FileText } from "lucide-react";

function Details({ selectedJob, jobData, specialInstructions }) {
  const [jobStatus, setJobStatus] = useState(jobData?.jobInfo?.status || selectedJob?.status || "Accepted");
  const [attachments, setAttachments] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Dynamic services based on job type
  const getServicesForJobType = (serviceType) => {
    const serviceMap = {
      "Plumbing Repair": ["Pipe Inspection", "Leak Repair", "Fixture Installation"],
      "Electrical Installation": ["Wiring Installation", "Circuit Testing", "Safety Inspection"],
      "HVAC Maintenance": ["System Cleaning", "Filter Replacement", "Performance Check"],
      "Appliance Repair": ["Diagnostic Check", "Parts Replacement", "Functionality Test"],
      "General Handyman": ["Assessment", "Repair Work", "Quality Check"],
    };
    return serviceMap[serviceType] || ["Standard Service", "Quality Check", "Final Inspection"];
  };

  const handleStatusChange = (newStatus) => {
    setJobStatus(newStatus);
    // Here you would typically call an API to update the job status
    console.log(`Job status changed to: ${newStatus}`);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      const newAttachments = files.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        type: file.type.includes('image') ? 'image' : 'file',
        uploadedAt: new Date().toLocaleString()
      }));
      
      setAttachments([...attachments, ...newAttachments]);
      setIsUploading(false);
    }, 1500);
  };

  const removeAttachment = (id) => {
    setAttachments(attachments.filter(att => att.id !== id));
  };

  const handleSaveChanges = () => {
    // Here you would typically call an API to save all changes
    const updatedJob = {
      ...selectedJob,
      status: jobStatus,
      attachments: attachments
    };
    console.log('Saving job changes:', updatedJob);
    alert('Changes saved successfully!');
  };
  return (
    <>
      <div className="space-y-6">
        {/* Customer Information */}
        <div>
          <h3 className="font-semibold mb-2">Customer Information</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="text-xs text-gray-500">Name</p>
              <p>{jobData?.customer?.name || selectedJob?.customer || "Ethan Carter"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Contact</p>
              <p>{jobData?.customer?.contact || "(555) 123-4567"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-blue-600 hover:text-blue-800 cursor-pointer">
                {jobData?.customer?.email || "customer@email.com"}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Technician Assigned</p>
              <p>{jobData?.jobInfo?.assignedTechnician || "John Smith"}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-500">Address</p>
              <p>{jobData?.customer?.address || "123 Elm Street, Anytown, USA"}</p>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <h3 className="font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">
            {jobData?.jobInfo?.serviceType || selectedJob?.serviceType || "Service"} - 
            Professional {(jobData?.jobInfo?.serviceType || selectedJob?.serviceType || "service").toLowerCase()} 
            with {jobData?.jobInfo?.estimatedDuration || "estimated completion time"}. 
            {specialInstructions && ` ${specialInstructions}`}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Priority:</span>
              <span className={`ml-2 px-2 py-1 rounded text-xs ${
                jobData?.jobInfo?.priority === "High" ? "bg-red-100 text-red-800" :
                jobData?.jobInfo?.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                "bg-green-100 text-green-800"
              }`}>
                {jobData?.jobInfo?.priority || "Normal"}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Estimated Duration:</span>
              <span className="ml-2 text-gray-700">{jobData?.jobInfo?.estimatedDuration || "2 hours"}</span>
            </div>
          </div>
        </div>

        {/* Assigned Services */}
        <div>
          <h3 className="font-semibold mb-2">Assigned Services</h3>
          <div className="space-y-2">
            {getServicesForJobType(jobData?.jobInfo?.serviceType || selectedJob?.serviceType).map((service) => (
              <div key={service} className="bg-blue-50 border border-blue-200 rounded px-3 py-2 flex items-center justify-between">
                <span className="text-blue-800">{service}</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Required</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <h3 className="font-semibold mb-2">Special Instructions</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              {specialInstructions || "Customer has a dog, please call upon arrival. Access through back gate."}
            </p>
          </div>
        </div>

        {/* Job Status */}
        <div>
          <h3 className="font-semibold mb-2">Job Status</h3>
          <div className="flex space-x-2">
            {["Accepted", "In-Progress", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`border rounded px-3 py-1 text-sm transition-all duration-200 ${
                  jobStatus === status
                    ? "bg-blue-500 text-white border-blue-500 shadow-md"
                    : "border-blue-500 text-blue-500 hover:bg-blue-50"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">Current Status: <span className="font-medium text-blue-600">{jobStatus}</span></p>
        </div>

        {/* Attachments */}
        <div>
          <h3 className="font-semibold mb-2">Attachments</h3>
          
          {/* Existing Attachments */}
          {attachments.length > 0 && (
            <div className="mb-4 space-y-2">
              {attachments.map((attachment) => (
                <div key={attachment.id} className="flex items-center justify-between bg-gray-50 border rounded px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{attachment.name}</p>
                      <p className="text-xs text-gray-500">{attachment.size} • Uploaded {attachment.uploadedAt}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeAttachment(attachment.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upload Area */}
          <div className="border border-dashed rounded p-6 text-center text-gray-500">
            {isUploading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
                <p>Uploading files...</p>
              </div>
            ) : (
              <>
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="mb-2">
                  {attachments.length === 0 ? "No attachments yet" : "Add more attachments"}
                </p>
                <p className="text-xs mb-4">
                  Upload images related to the job, such as before/after photos or
                  issue documentation.
                </p>
                <label className="bg-gray-100 border border-gray-300 rounded px-3 py-1 text-sm hover:bg-gray-200 cursor-pointer inline-block">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  Choose Files
                </label>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
        <button 
          onClick={handleSaveChanges}
          className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition-colors font-medium"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}

export default Details;
