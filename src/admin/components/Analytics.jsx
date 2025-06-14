// src/admin/components/Analytics.jsx
import React, { useState } from 'react';
import { FaChartBar, FaChartLine, FaCalendarAlt, FaDollarSign, FaWater, FaLeaf, FaCar } from 'react-icons/fa';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('month');

  const stats = [
    { icon: <FaDollarSign className="text-3xl" />, title: 'Total Revenue', value: '$12,458', change: '+18%', changeType: 'positive' },
    { icon: <FaCar className="text-3xl" />, title: 'Services Completed', value: '186', change: '+24%', changeType: 'positive' },
    { icon: <FaWater className="text-3xl" />, title: 'Water Saved', value: '27,840L', change: '+22%', changeType: 'positive' },
    { icon: <FaLeaf className="text-3xl" />, title: 'CO₂ Reduced', value: '1,240kg', change: '+19%', changeType: 'positive' },
  ];

  const serviceData = [
    { name: 'Basic Exterior', value: 85, color: 'bg-cyan-500' },
    { name: 'Complete Care', value: 45, color: 'bg-emerald-500' },
    { name: 'Premium Detail', value: 25, color: 'bg-teal-500' },
    { name: 'Interior Refresh', value: 30, color: 'bg-blue-500' },
    { name: 'Eco Express', value: 60, color: 'bg-green-500' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 8500 },
    { month: 'Feb', revenue: 9200 },
    { month: 'Mar', revenue: 10200 },
    { month: 'Apr', revenue: 9800 },
    { month: 'May', revenue: 11500 },
    { month: 'Jun', revenue: 12458 },
  ];

  const maxRevenue = Math.max(...revenueData.map(item => item.revenue));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-xl font-bold text-gray-800">Business Analytics</h2>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === 'week' 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === 'month' 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTimeRange('quarter')}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeRange === 'quarter' 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Quarterly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-lg ${
                index === 0 ? 'bg-amber-100 text-amber-600' : 
                index === 1 ? 'bg-blue-100 text-blue-600' : 
                index === 2 ? 'bg-cyan-100 text-cyan-600' : 
                'bg-emerald-100 text-emerald-600'
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
            <h3 className="text-lg font-bold text-gray-800">Revenue Overview</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <FaCalendarAlt className="mr-2" />
              Last 6 months
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {revenueData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-2">{item.month}</div>
                <div 
                  className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg"
                  style={{ height: `${(item.revenue / maxRevenue) * 80}%` }}
                ></div>
                <div className="text-xs text-gray-700 mt-2">${(item.revenue / 1000).toFixed(1)}k</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Service Distribution</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <FaCar className="mr-2" />
              Last 30 days
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">186</div>
                  <div className="text-gray-500 text-sm">Services</div>
                </div>
              </div>
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {serviceData.map((service, index) => {
                  const startAngle = index * 72;
                  const endAngle = startAngle + 72;
                  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;

                  const startX = 50 + 45 * Math.cos(startRad);
                  const startY = 50 + 45 * Math.sin(startRad);

                  const endX = 50 + 45 * Math.cos(endRad);
                  const endY = 50 + 45 * Math.sin(endRad);

                  return (
                    <path
                      key={index}
                      d={`M 50,50 L ${startX},${startY} A 45,45 0 ${largeArcFlag},1 ${endX},${endY} Z`}
                      className={service.color}
                    />
                  );
                })}
              </svg>
            </div>
            <div className="ml-8">
              {serviceData.map((service, index) => (
                <div key={index} className="flex items-center mb-3">
                  <div className={`w-4 h-4 rounded mr-2 ${service.color}`}></div>
                  <span className="text-sm">{service.name} ({service.value})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Customer Acquisition</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <FaChartLine className="mr-2" />
              Growth Rate: 24%
            </div>
          </div>
          <div className="h-64">
            {/* Customer acquisition chart placeholder */}
            <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
              Customer Acquisition Chart
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Environmental Impact</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <FaLeaf className="mr-2" />
              Monthly Savings
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Water Saved</span>
                <span className="text-sm font-medium text-emerald-600">27,840L</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 30,000L</div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Carbon Reduction</span>
                <span className="text-sm font-medium text-emerald-600">1,240kg</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 1,600kg</div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Chemical-Free Washes</span>
                <span className="text-sm font-medium text-emerald-600">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: 100%</div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-md font-bold text-gray-800 mb-4">Environmental Impact by Service</h4>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm text-gray-500 pb-2">Service</th>
                  <th className="text-right text-sm text-gray-500 pb-2">Water Saved</th>
                  <th className="text-right text-sm text-gray-500 pb-2">CO₂ Reduced</th>
                </tr>
              </thead>
              <tbody>
                {serviceData.map((service, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-sm">{service.name}</td>
                    <td className="py-3 text-right text-sm">{Math.round(150 * (index + 1))}L</td>
                    <td className="py-3 text-right text-sm">{Math.round(7 * (index + 1))}kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;