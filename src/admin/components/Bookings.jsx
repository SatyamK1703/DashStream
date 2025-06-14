// src/admin/components/Bookings.js
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const Bookings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    { id: 'all', label: 'All Bookings' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' },
  ];

  const bookings = [
    { id: '#EC123', customer: 'Sarah Johnson', service: 'Full Service', vehicle: 'SUV', date: '2023-06-15', time: '10:30 AM', status: 'confirmed', price: '$65' },
    { id: '#EC124', customer: 'Michael Chen', service: 'Premium Detail', vehicle: 'Sedan', date: '2023-06-15', time: '1:00 PM', status: 'confirmed', price: '$95' },
    { id: '#EC125', customer: 'Emily Rodriguez', service: 'Exterior Only', vehicle: 'Sedan', date: '2023-06-15', time: '3:45 PM', status: 'pending', price: '$35' },
    { id: '#EC126', customer: 'David Wilson', service: 'Interior Only', vehicle: 'Truck', date: '2023-06-16', time: '9:00 AM', status: 'confirmed', price: '$45' },
    { id: '#EC127', customer: 'James Brown', service: 'Full Service', vehicle: 'SUV', date: '2023-06-16', time: '11:30 AM', status: 'completed', price: '$65' },
    { id: '#EC128', customer: 'Lisa Taylor', service: 'Premium Detail', vehicle: 'Sedan', date: '2023-06-16', time: '2:15 PM', status: 'cancelled', price: '$95' },
  ];

  const filteredBookings = activeFilter === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === activeFilter);

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Manage Bookings</h2>
          <div className="flex space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search bookings..."
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
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 font-medium">
              New Booking
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
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <span className="text-gray-700">Date Range</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.service}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>{booking.date}</div>
                  <div className="text-gray-400">{booking.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : booking.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : booking.status === 'completed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-emerald-600 hover:text-emerald-900 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-gray-900">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
          <span className="font-medium">26</span> results
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

export default Bookings;