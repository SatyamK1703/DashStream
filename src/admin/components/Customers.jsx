// src/admin/components/Customers.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaEdit, FaTrash } from 'react-icons/fa';

const Customers = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCustomer, setExpandedCustomer] = useState(null);

  const filters = [
    { id: 'all', label: 'All Customers' },
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
    { id: 'members', label: 'Members' },
  ];

  const customers = [
    {
      id: 'CUST001',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(123) 456-7890',
      location: 'Downtown',
      vehicles: ['Tesla Model 3', 'Toyota Prius'],
      bookings: 8,
      lastBooking: '2023-06-10',
      status: 'active',
      membership: 'Gold'
    },
    {
      id: 'CUST002',
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '(234) 567-8901',
      location: 'North District',
      vehicles: ['Honda Civic'],
      bookings: 3,
      lastBooking: '2023-06-12',
      status: 'active',
      membership: 'Silver'
    },
    {
      id: 'CUST003',
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      phone: '(345) 678-9012',
      location: 'South Hills',
      vehicles: ['BMW 3 Series', 'Ford F-150'],
      bookings: 12,
      lastBooking: '2023-06-08',
      status: 'active',
      membership: 'Gold'
    },
    {
      id: 'CUST004',
      name: 'David Wilson',
      email: 'david@example.com',
      phone: '(456) 789-0123',
      location: 'East Meadows',
      vehicles: ['Subaru Outback'],
      bookings: 1,
      lastBooking: '2023-05-15',
      status: 'inactive',
      membership: 'None'
    },
    {
      id: 'CUST005',
      name: 'James Brown',
      email: 'james@example.com',
      phone: '(567) 890-1234',
      location: 'West Valley',
      vehicles: ['Audi Q5'],
      bookings: 5,
      lastBooking: '2023-06-14',
      status: 'active',
      membership: 'Silver'
    }
  ];

  const filteredCustomers = activeFilter === 'all' 
    ? customers 
    : customers.filter(customer => 
        activeFilter === 'members' ? customer.membership !== 'None' : customer.status === activeFilter
      );

  const toggleCustomer = (id) => {
    setExpandedCustomer(expandedCustomer === id ? null : id);
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Customer Management</h2>
          <div className="flex space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search customers..."
                className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              <FaFilter className="mr-2" />
              Filters
              <FaChevronDown className="ml-2" />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <div className="flex flex-wrap gap-3">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === filter.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membership</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCustomers.map((customer) => (
              <React.Fragment key={customer.id}>
                <tr 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleCustomer(customer.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{customer.email}</div>
                    <div className="text-gray-400">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{customer.bookings} bookings</div>
                    <div className="text-gray-400">Last: {customer.lastBooking}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.membership === 'Gold' ? 'bg-amber-100 text-amber-800' :
                      customer.membership === 'Silver' ? 'bg-gray-100 text-gray-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.membership}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-emerald-600 hover:text-emerald-900 mr-3">Edit</button>
                    <button className="text-gray-600 hover:text-gray-900">
                      {expandedCustomer === customer.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </td>
                </tr>
                {expandedCustomer === customer.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="7" className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 mb-2">Vehicles</h3>
                          <ul className="space-y-2">
                            {customer.vehicles.map((vehicle, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <FaCar className="mr-2 text-emerald-600" />
                                {vehicle}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 mb-2">Contact Information</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-600">
                              <FaEnvelope className="mr-2 text-emerald-600" />
                              {customer.email}
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                              <FaPhone className="mr-2 text-emerald-600" />
                              {customer.phone}
                            </li>
                            <li className="flex items-center text-sm text-gray-600">
                              <FaMapMarkerAlt className="mr-2 text-emerald-600" />
                              {customer.location}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 mb-2">Actions</h3>
                          <div className="flex space-x-3">
                            <button className="flex items-center text-sm text-emerald-600 hover:text-emerald-800">
                              <FaEdit className="mr-1" /> Edit Profile
                            </button>
                            <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                              <FaEnvelope className="mr-1" /> Send Message
                            </button>
                            <button className="flex items-center text-sm text-red-600 hover:text-red-800">
                              <FaTrash className="mr-1" /> Deactivate
                            </button>
                          </div>

                          <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Membership</h3>
                            <div className="flex items-center">
                              <span className={`mr-2 w-3 h-3 rounded-full ${
                                customer.membership === 'Gold' ? 'bg-amber-400' :
                                customer.membership === 'Silver' ? 'bg-gray-400' : 'bg-gray-300'
                              }`}></span>
                              <span className="text-sm text-gray-600">
                                {customer.membership === 'Gold' ? 'Gold Membership (2 washes/month)' :
                                 customer.membership === 'Silver' ? 'Silver Membership (1 wash/month)' : 'No active membership'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
          <span className="font-medium">{filteredCustomers.length}</span> results
        </div>
        <div className="flex space-x-2">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;