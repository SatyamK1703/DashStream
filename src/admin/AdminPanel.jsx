// src/admin/AdminPanel.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Bookings from './components/Bookings.jsx';
import Customers from './components/Customers.jsx';
import Services from './components/Services.jsx';
import Analytics from './components/Analytics.jsx';
import Settings from './components/Settings.jsx';
import { FaChartLine, FaCalendarAlt, FaUsers, FaCar, FaChartBar, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const AdminPanel = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-emerald-800 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex justify-between items-center border-b border-emerald-700">
          {sidebarOpen ? (
            <div className="flex items-center">
              <div className="bg-emerald-600 p-2 rounded-lg mr-3">
                <FaCar className="text-xl" />
              </div>
              <h1 className="text-xl font-bold">DashSteam Admin</h1>
            </div>
          ) : (
            <div className="bg-emerald-600 p-2 rounded-lg">
              <FaCar className="text-xl" />
            </div>
          )}
          <button onClick={toggleSidebar} className="text-white">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="mt-6">
          {[
            { id: 'dashboard', icon: <FaChartLine />, label: 'Dashboard' },
            { id: 'bookings', icon: <FaCalendarAlt />, label: 'Bookings' },
            { id: 'customers', icon: <FaUsers />, label: 'Customers' },
            { id: 'services', icon: <FaCar />, label: 'Services' },
            { id: 'analytics', icon: <FaChartBar />, label: 'Analytics' },
            { id: 'settings', icon: <FaCog />, label: 'Settings' },
          ].map((item) => (
            <Link
              key={item.id}
              to={`/admin/${item.id}`}
              className={`flex items-center p-4 transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-700 border-l-4 border-emerald-400'
                  : 'hover:bg-emerald-700'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="ml-4">{item.label}</span>}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="w-full flex items-center p-4 mt-6 text-left hover:bg-emerald-700 transition-colors"
          >
            <span className="text-xl"><FaSignOutAlt /></span>
            {sidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex justify-between items-center p-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h2>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <button className="bg-gray-200 rounded-full p-1">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                </button>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">admin@ecosteam.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="customers" element={<Customers />} />
            <Route path="services" element={<Services />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;