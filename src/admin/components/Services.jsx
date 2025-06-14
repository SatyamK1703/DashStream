// src/admin/components/Services.js
import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Basic Exterior', description: 'Full exterior steam wash', price: 35, duration: '45 min', popular: false },
    { id: 2, name: 'Complete Care', description: 'Full exterior and interior cleaning', price: 65, duration: '75 min', popular: true },
    { id: 3, name: 'Premium Detail', description: 'Showroom-quality detailing', price: 95, duration: '120 min', popular: false },
    { id: 4, name: 'Interior Only', description: 'Complete interior steam cleaning', price: 45, duration: '60 min', popular: false },
  ]);

  const [editingService, setEditingService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  const handleSave = (service) => {
    if (editingService) {
      // Update existing service
      setServices(services.map(s => s.id === service.id ? service : s));
    } else {
      // Add new service
      const newId = Math.max(...services.map(s => s.id), 0) + 1;
      setServices([...services, { ...service, id: newId }]);
    }
    setIsModalOpen(false);
    setEditingService(null);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Services & Packages</h2>
          <div className="flex space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button 
              onClick={() => { setEditingService(null); setIsModalOpen(true); }}
              className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 font-medium"
            >
              <FaPlus className="mr-2" />
              Add Service
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div 
              key={service.id} 
              className={`border rounded-xl overflow-hidden ${
                service.popular ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-gray-200'
              }`}
            >
              {service.popular && (
                <div className="bg-emerald-500 text-white py-2 text-center font-bold text-sm">
                  POPULAR CHOICE
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 font-bold text-lg px-3 py-1 rounded">
                    ${service.price}
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span>Duration: {service.duration}</span>
                  <span>{service.popular ? '★★★★★' : '★★★★☆'}</span>
                </div>

                <div className="flex justify-between">
                  <button 
                    onClick={() => handleEdit(service)}
                    className="text-emerald-600 hover:text-emerald-800 flex items-center"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(service.id)}
                    className="text-red-600 hover:text-red-800 flex items-center"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                  <input
                    type="text"
                    defaultValue={editingService?.name || ''}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Basic Exterior"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    defaultValue={editingService?.description || ''}
                    rows="2"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Full exterior steam wash"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input
                      type="number"
                      defaultValue={editingService?.price || ''}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="35"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      defaultValue={editingService?.duration || ''}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="45 min"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="popular"
                    defaultChecked={editingService?.popular || false}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="popular" className="ml-2 block text-sm text-gray-900">
                    Mark as popular service
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSave({
                  id: editingService?.id,
                  name: 'Basic Exterior', // This would come from form state in a real app
                  description: 'Full exterior steam wash',
                  price: 35,
                  duration: '45 min',
                  popular: false
                })}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium"
              >
                {editingService ? 'Update Service' : 'Add Service'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;