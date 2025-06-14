// src/admin/components/Dashboard.js
import React from 'react';
import { FaCalendarAlt, FaUsers, FaCar, FaWater, FaLeaf } from 'react-icons/fa';

const Dashboard = () => {
  const stats = [
    { icon: <FaCalendarAlt className="text-3xl" />, title: 'Today Bookings', value: 24, change: '+3', changeType: 'positive' },
    { icon: <FaUsers className="text-3xl" />, title: 'New Customers', value: 8, change: '+2', changeType: 'positive' },
    { icon: <FaCar className="text-3xl" />, title: 'Services Completed', value: 18, change: '-1', changeType: 'negative' },
    { icon: <FaWater className="text-3xl" />, title: 'Water Saved', value: '4,320L', change: '+540L', changeType: 'positive' },
    { icon: <FaLeaf className="text-3xl" />, title: 'CO₂ Reduced', value: '210kg', change: '+26kg', changeType: 'positive' },
  ];

  const recentBookings = [
    { id: '#EC123', customer: 'Sarah Johnson', service: 'Full Service', vehicle: 'SUV', time: 'Today, 10:30 AM', status: 'Confirmed' },
    { id: '#EC124', customer: 'Michael Chen', service: 'Premium Detail', vehicle: 'Sedan', time: 'Today, 1:00 PM', status: 'Confirmed' },
    { id: '#EC125', customer: 'Emily Rodriguez', service: 'Exterior Only', vehicle: 'Sedan', time: 'Today, 3:45 PM', status: 'Pending' },
    { id: '#EC126', customer: 'David Wilson', service: 'Interior Only', vehicle: 'Truck', time: 'Tomorrow, 9:00 AM', status: 'Confirmed' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-lg ${
                index === 0 ? 'bg-cyan-100 text-cyan-600' : 
                index === 1 ? 'bg-blue-100 text-blue-600' : 
                index === 2 ? 'bg-amber-100 text-amber-600' : 
                index === 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-green-100 text-green-600'
              }`}>
                {stat.icon}
              </div>
              <div className={`text-sm font-medium px-2 py-1 rounded ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Bookings</h3>
            <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentBookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.customer}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.service}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{booking.time}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        booking.status === 'Confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Environmental Impact</h3>
            <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
              View Report
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Water Saved This Month</span>
                <span className="text-sm font-medium text-emerald-600">12,480L</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Goal: 15,000L</div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Carbon Reduction</span>
                <span className="text-sm font-medium text-emerald-600">620kg</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Goal: 900kg</div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Chemical-Free Washes</span>
                <span className="text-sm font-medium text-emerald-600">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 100%</div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-md font-bold text-gray-800 mb-4">Service Distribution</h4>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xl font-bold text-gray-700">Services</div>
                </div>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="#f3f4f6" />
                  <path 
                    d="M50,5 A45,45 0 0,1 95,50 L50,50 Z" 
                    fill="#0d9488" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M95,50 A45,45 0 0,1 85,85 L50,50 Z" 
                    fill="#0891b2" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M85,85 A45,45 0 0,1 15,85 L50,50 Z" 
                    fill="#059669" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M15,85 A45,45 0 0,1 5,50 L50,50 Z" 
                    fill="#10b981" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M5,50 A45,45 0 0,1 50,5 L50,50 Z" 
                    fill="#06b6d4" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="ml-8">
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-teal-600 rounded mr-2"></div>
                  <span className="text-sm">Full Service (42%)</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-cyan-500 rounded mr-2"></div>
                  <span className="text-sm">Exterior Only (28%)</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div>
                  <span className="text-sm">Premium Detail (15%)</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-sm">Interior Only (10%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-teal-400 rounded mr-2"></div>
                  <span className="text-sm">Other (5%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;