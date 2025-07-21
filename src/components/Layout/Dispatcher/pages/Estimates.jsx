import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  FileText, 
  Calendar, 
  DollarSign, 
  User, 
  Eye, 
  Edit, 
  Trash2, 
  X,
  Send,
  Save
} from 'lucide-react';

const Estimates = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [estimates, setEstimates] = useState([
    {
      id: 'EST-001',
      customerName: 'TechCorp Solutions',
      projectTitle: 'Emergency Network Equipment Repair',
      amount: 2800,
      status: 'Draft',
      createdDate: '2025-01-15',
      expiryDate: '2025-02-15',
      description: 'Emergency repair of server room network switches and router configuration'
    },
    {
      id: 'EST-002',
      customerName: 'Metro Hospital',
      projectTitle: 'HVAC Maintenance Service',
      amount: 1950,
      status: 'Sent',
      createdDate: '2025-01-12',
      expiryDate: '2025-02-12',
      description: 'Quarterly HVAC system maintenance and filter replacement for medical facility'
    },
    {
      id: 'EST-003',
      customerName: 'Downtown Office Plaza',
      projectTitle: 'Elevator Repair & Inspection',
      amount: 4200,
      status: 'Approved',
      createdDate: '2025-01-10',
      expiryDate: '2025-02-10',
      description: 'Emergency elevator repair and annual safety inspection for commercial building'
    },
    {
      id: 'EST-004',
      customerName: 'City Water Department',
      projectTitle: 'Plumbing Emergency Response',
      amount: 1680,
      status: 'Rejected',
      createdDate: '2025-01-08',
      expiryDate: '2025-02-08',
      description: 'Emergency pipe repair and water main restoration services'
    },
    {
      id: 'EST-005',
      customerName: 'Lightning Electronics',
      projectTitle: 'Security System Installation',
      amount: 3450,
      status: 'Draft',
      createdDate: '2025-01-05',
      expiryDate: '2025-02-05',
      description: 'Installation of surveillance cameras and access control systems'
    },
    {
      id: 'EST-006',
      customerName: 'Green Valley Apartments',
      projectTitle: 'Electrical Emergency Service',
      amount: 890,
      status: 'Sent',
      createdDate: '2025-01-03',
      expiryDate: '2025-02-03',
      description: 'Emergency electrical panel repair and outlet replacement'
    },
    {
      id: 'EST-007',
      customerName: 'AutoMax Service Center',
      projectTitle: 'Equipment Maintenance Contract',
      amount: 5200,
      status: 'Approved',
      createdDate: '2025-01-01',
      expiryDate: '2025-02-01',
      description: 'Monthly maintenance contract for automotive diagnostic equipment and tools'
    }
  ]);

  const [newEstimate, setNewEstimate] = useState({
    customerName: '',
    projectTitle: '',
    amount: '',
    expiryDate: '',
    description: '',
    items: [{ description: '', quantity: 1, unitPrice: '', total: 0 }]
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Sent': return 'bg-blue-100 text-blue-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEstimates = estimates.filter(estimate =>
    estimate.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estimate.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estimate.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateEstimate = () => {
    if (newEstimate.customerName && newEstimate.projectTitle && newEstimate.amount) {
      const estimate = {
        id: `EST-${String(estimates.length + 1).padStart(3, '0')}`,
        ...newEstimate,
        amount: parseFloat(newEstimate.amount),
        status: 'Draft',
        createdDate: new Date().toISOString().split('T')[0]
      };
      setEstimates([estimate, ...estimates]);
      setNewEstimate({
        customerName: '',
        projectTitle: '',
        amount: '',
        expiryDate: '',
        description: '',
        items: [{ description: '', quantity: 1, unitPrice: '', total: 0 }]
      });
      setShowCreateForm(false);
    }
  };

  const handleAddItem = () => {
    setNewEstimate({
      ...newEstimate,
      items: [...newEstimate.items, { description: '', quantity: 1, unitPrice: '', total: 0 }]
    });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = newEstimate.items.map((item, i) => {
      if (i === index) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          updatedItem.total = updatedItem.quantity * updatedItem.unitPrice;
        }
        return updatedItem;
      }
      return item;
    });
    setNewEstimate({ ...newEstimate, items: updatedItems });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = newEstimate.items.filter((_, i) => i !== index);
    setNewEstimate({ ...newEstimate, items: updatedItems });
  };

  const calculateTotal = () => {
    return newEstimate.items.reduce((sum, item) => sum + (item.total || 0), 0);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Estimates</h1>
          <p className="text-gray-600">Manage and create project estimates</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Estimate
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search estimates..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Estimates List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estimate ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEstimates.map((estimate) => (
                <tr key={estimate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{estimate.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{estimate.customerName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{estimate.projectTitle}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm font-medium text-gray-900">
                        {estimate.amount.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(estimate.status)}`}>
                      {estimate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{estimate.createdDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Estimate Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Create New Estimate</h2>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={newEstimate.customerName}
                    onChange={(e) => setNewEstimate({ ...newEstimate, customerName: e.target.value })}
                    placeholder="Enter customer name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={newEstimate.projectTitle}
                    onChange={(e) => setNewEstimate({ ...newEstimate, projectTitle: e.target.value })}
                    placeholder="Enter project title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={newEstimate.expiryDate}
                    onChange={(e) => setNewEstimate({ ...newEstimate, expiryDate: e.target.value })}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  rows="3"
                  value={newEstimate.description}
                  onChange={(e) => setNewEstimate({ ...newEstimate, description: e.target.value })}
                  placeholder="Enter project description"
                />
              </div>

              {/* Line Items */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Line Items</h3>
                  <button
                    onClick={handleAddItem}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Item
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Qty</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Unit Price</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newEstimate.items.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                              value={item.description}
                              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                              placeholder="Item description"
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              type="number"
                              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value) || 0)}
                              min="0"
                            />
                          </td>
                          <td className="px-4 py-2">
                            <input
                              type="number"
                              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                              value={item.unitPrice}
                              onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value) || 0)}
                              min="0"
                              step="0.01"
                              placeholder="0.00"
                            />
                          </td>
                          <td className="px-4 py-2">
                            <span className="text-sm font-medium">${(item.total || 0).toFixed(2)}</span>
                          </td>
                          <td className="px-4 py-2">
                            {newEstimate.items.length > 1 && (
                              <button
                                onClick={() => handleRemoveItem(index)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <td colSpan="3" className="px-4 py-2 text-right font-medium">Total:</td>
                        <td className="px-4 py-2 font-bold">${calculateTotal().toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-4 p-6 border-t bg-gray-50">
              <button
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setNewEstimate({ ...newEstimate, amount: calculateTotal().toString() });
                  handleCreateEstimate();
                }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save as Draft
              </button>
              <button
                onClick={() => {
                  setNewEstimate({ ...newEstimate, amount: calculateTotal().toString() });
                  handleCreateEstimate();
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estimates;