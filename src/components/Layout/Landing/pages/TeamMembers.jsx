import React, { useState } from "react";

const initialTeamMembers = [
  {
    name: "Sophia Carter",
    role: "Dispatcher",
    status: "Active",
    rate: "$25/hr",
    jobs: 10,
  },
  {
    name: "Ethan Bennett",
    role: "Technician",
    status: "Active",
    rate: "15% Commission",
    jobs: 8,
  },
  {
    name: "Olivia Hayes",
    role: "Dispatcher",
    status: "Inactive",
    rate: "$22/hr",
    jobs: 0,
  },
  {
    name: "Liam Foster",
    role: "Technician",
    status: "Active",
    rate: "12% Commission",
    jobs: 12,
  },
  {
    name: "Ava Morgan",
    role: "Dispatcher",
    status: "Active",
    rate: "$28/hr",
    jobs: 5,
  },
];

const TeamMembersPage = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [newMember, setNewMember] = useState({ name: "", role: "", status: "Active", rate: "", jobs: 0 });

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || member.role === roleFilter;
    const matchesStatus = !statusFilter || member.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.rate) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember({ name: "", role: "", status: "Active", rate: "", jobs: 0 });
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Team Members</h1>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Add Team Member
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
        <div className="relative mb-2 sm:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search team members"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <svg
            className="w-5 h-5 absolute top-2.5 left-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">Role</option>
          <option value="Dispatcher">Dispatcher</option>
          <option value="Technician">Technician</option>
          <option value="Manager">Manager</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-gray-200 border border-gray-300 rounded-md px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-sky-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Rate</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Jobs</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{member.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{member.role}</td>
                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-200 text-black">{member.status}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{member.rate}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{member.jobs}</td>
                <td className="px-4 py-3 text-sm text-gray-600 font-bold cursor-pointer hover:underline">View/Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filteredMembers.map((member, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <p className="text-sm font-semibold text-gray-800">Name: {member.name}</p>
            <p className="text-sm text-gray-500">Role: {member.role}</p>
            <p className="text-sm text-gray-500">Rate: {member.rate}</p>
            <p className="text-sm text-gray-500">Jobs: {member.jobs}</p>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-200 text-black">{member.status}</span>
            <button className="block mt-3 text-gray-600 font-bold text-sm hover:underline">View/Edit</button>
          </div>
        ))}
      </div>

      {/* Modal for Add Member */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
      {/* ❌ Close icon in top-right corner */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>

      <h2 className="text-lg font-semibold mb-4">Add Team Member</h2>

      <input
        type="text"
        placeholder="Name"
        value={newMember.name}
        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Role"
        value={newMember.role}
        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
        className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Rate"
        value={newMember.rate}
        onChange={(e) => setNewMember({ ...newMember, rate: e.target.value })}
        className="w-full mb-2 px-4 py-2 border border-gray-300 rounded"
      />
      <select
        value={newMember.status}
        onChange={(e) => setNewMember({ ...newMember, status: e.target.value })}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={handleAddMember}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default TeamMembersPage;
