import React, { useState } from "react";
import { Search, Bell, User, Edit, Trash2, Plus, X } from "lucide-react";

const TeamManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "Technician",
    contact: "",
    status: "Active"
  });
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Sophia Bennett",
      role: "Manager",
      contact: "sophia.bennett@example.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Ethan Carter",
      role: "Dispatcher",
      contact: "ethan.carter@example.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Olivia Davis",
      role: "Technician",
      contact: "olivia.davis@example.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Liam Foster",
      role: "Dispatcher",
      contact: "liam.foster@example.com",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Ava Green",
      role: "Technician",
      contact: "ava.green@example.com",
      status: "Active",
    },
  ]);

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    const member = teamMembers.find(m => m.id === id);
    if (member) {
      setEditingMember(member);
      setFormData({
        name: member.name,
        role: member.role,
        contact: member.contact,
        status: member.status
      });
      setShowEditModal(true);
    }
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this team member?")) {
      setTeamMembers(teamMembers.filter((member) => member.id !== id));
    }
  };

  const handleAddMember = () => {
    setFormData({
      name: "",
      role: "Technician",
      contact: "",
      status: "Active"
    });
    setShowAddModal(true);
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert("Please fill in all required fields");
      return;
    }

    const newMember = {
      id: Math.max(...teamMembers.map(m => m.id)) + 1,
      ...formData
    };

    setTeamMembers([...teamMembers, newMember]);
    setShowAddModal(false);
    setFormData({ name: "", role: "Technician", contact: "", status: "Active" });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      alert("Please fill in all required fields");
      return;
    }

    setTeamMembers(teamMembers.map(member => 
      member.id === editingMember.id 
        ? { ...member, ...formData }
        : member
    ));
    
    setShowEditModal(false);
    setEditingMember(null);
    setFormData({ name: "", role: "Technician", contact: "", status: "Active" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setEditingMember(null);
    setFormData({ name: "", role: "Technician", contact: "", status: "Active" });
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    if (status === "Active") {
      return `${baseClasses} bg-blue-100 text-blue-800 border border-blue-200`;
    } else {
      return `${baseClasses} bg-gray-100 text-gray-600 border border-gray-200`;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Manager":
        return "text-blue-600 font-medium";
      case "Dispatcher":
        return "text-blue-500";
      case "Technician":
        return "text-blue-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Team Management
              </h2>
              <p className="text-gray-600">
                Manage your team members and their roles within the dispatch
                system.
              </p>
            </div>
            <button
              onClick={handleAddMember}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Member</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search team members"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-gray-50"
            />
          </div>

          {/* Team Table */}
          <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
            {/* Table Header */}
            <div className="bg-blue-100 border-b border-blue-200">
              <div className="grid grid-cols-12 gap-4 px-6 py-4">
                <div className="col-span-3">
                  <h3 className="text-sm font-semibold text-gray-700">Name</h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">Role</h3>
                </div>
                <div className="col-span-3">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Contact
                  </h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Status
                  </h3>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Actions
                  </h3>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 bg-white">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="col-span-3">
                    <p className="text-sm font-medium text-gray-900">
                      {member.name}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className={`text-sm ${getRoleColor(member.role)}`}>
                      {member.role}
                    </p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                      {member.contact}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <span className={getStatusBadge(member.status)}>
                      {member.status}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(member.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                    >
                      <Edit className="h-3 w-3" />
                      <span>Edit</span>
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                      onClick={() => handleRemove(member.id)}
                      className="text-gray-600 hover:text-red-600 text-sm font-medium flex items-center space-x-1 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-3 w-3" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredMembers.length} of {teamMembers.length} team
            members
          </div>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Team Member</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmitAdd}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Manager">Manager</option>
                    <option value="Dispatcher">Dispatcher</option>
                    <option value="Technician">Technician</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Member Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Edit Team Member</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmitEdit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Manager">Manager</option>
                    <option value="Dispatcher">Dispatcher</option>
                    <option value="Technician">Technician</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Update Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
