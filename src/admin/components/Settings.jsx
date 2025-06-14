// src/admin/components/Settings.jsx
import React, { useState } from 'react';
import { FaSave, FaLock, FaBell, FaEnvelope, FaUsers, FaShieldAlt, FaLeaf, FaWater, FaPlug, FaTrash } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [businessInfo, setBusinessInfo] = useState({
    name: 'DashSteam Car Wash',
    email: 'contact@dashsteam.com',
    phone: '(123) 456-7890',
    address: '123 Green Street, Eco City, EC 12345',
    workingHours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm',
  });
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    push: false,
    bookingConfirmations: true,
    bookingReminders: true,
    promotions: true,
    newsletter: false,
  });
  const [environmentalGoals, setEnvironmentalGoals] = useState({
    monthlyWaterGoal: 30000, // liters
    monthlyCarbonGoal: 1500, // kg
    chemicalFreeTarget: 100, // percentage
  });
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    passwordChangeRequired: false,
    sessionTimeout: 30, // minutes
    loginAlerts: true,
  });
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Smith', email: 'john@ecosteam.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@ecosteam.com', role: 'Manager', status: 'Active' },
    { id: 3, name: 'Michael Chen', email: 'michael@ecosteam.com', role: 'Technician', status: 'Active' },
    { id: 4, name: 'Emily Rodriguez', email: 'emily@ecosteam.com', role: 'Technician', status: 'Inactive' },
  ]);
  const [newMember, setNewMember] = useState({ name: '', email: '', role: 'Technician' });
  const [integrations, setIntegrations] = useState([
    { id: 1, name: 'Google Calendar', connected: true },
    { id: 2, name: 'Stripe Payments', connected: true },
    { id: 3, name: 'Mailchimp', connected: false },
    { id: 4, name: 'QuickBooks', connected: false },
  ]);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleBusinessInfoChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({ ...prev, [name]: checked }));
  };

  const handleEnvironmentalGoalChange = (e) => {
    const { name, value } = e.target;
    setEnvironmentalGoals(prev => ({ ...prev, [name]: parseInt(value) }));
  };

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleNewMemberChange = (e) => {
    const { name, value } = e.target;
    setNewMember(prev => ({ ...prev, [name]: value }));
  };

  const addTeamMember = () => {
    if (newMember.name && newMember.email) {
      setTeamMembers(prev => [
        ...prev, 
        { 
          id: prev.length + 1, 
          name: newMember.name, 
          email: newMember.email, 
          role: newMember.role,
          status: 'Active'
        }
      ]);
      setNewMember({ name: '', email: '', role: 'Technician' });
    }
  };

  const removeTeamMember = (id) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  const toggleIntegration = (id) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === id 
        ? { ...integration, connected: !integration.connected } 
        : integration
    ));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const savePassword = () => {
    // Password validation and save logic
    alert('Password changed successfully!');
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const saveSettings = () => {
    // Save settings to backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px">
          {[
            { id: 'general', icon: <FaEnvelope />, label: 'General' },
            { id: 'notifications', icon: <FaBell />, label: 'Notifications' },
            { id: 'security', icon: <FaLock />, label: 'Security' },
            { id: 'team', icon: <FaUsers />, label: 'Team' },
            { id: 'environment', icon: <FaLeaf />, label: 'Environment' },
            { id: 'integrations', icon: <FaPlug />, label: 'Integrations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center justify-center ${
                activeTab === tab.id
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Business Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input
                  type="text"
                  name="name"
                  value={businessInfo.name}
                  onChange={handleBusinessInfoChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                <input
                  type="email"
                  name="email"
                  value={businessInfo.email}
                  onChange={handleBusinessInfoChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={businessInfo.phone}
                  onChange={handleBusinessInfoChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Working Hours</label>
                <input
                  type="text"
                  name="workingHours"
                  value={businessInfo.workingHours}
                  onChange={handleBusinessInfoChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
                <textarea
                  name="address"
                  value={businessInfo.address}
                  onChange={handleBusinessInfoChange}
                  rows="2"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Business Logo</h3>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 font-medium mr-3">
                    Upload New Logo
                  </button>
                  <button className="text-gray-600 hover:text-gray-900 font-medium">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Notification Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h4 className="text-md font-medium text-gray-700 mb-3">Notification Methods</h4>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="email"
                      checked={notificationSettings.email}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="sms"
                      checked={notificationSettings.sms}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">SMS</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="push"
                      checked={notificationSettings.push}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Push Notifications</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <h4 className="text-md font-medium text-gray-700 mb-3">Notification Types</h4>
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="bookingConfirmations"
                      checked={notificationSettings.bookingConfirmations}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Booking Confirmations</span>
                      <p className="text-sm text-gray-500">Receive notifications when a new booking is made</p>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="bookingReminders"
                      checked={notificationSettings.bookingReminders}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Booking Reminders</span>
                      <p className="text-sm text-gray-500">Get reminders before scheduled bookings</p>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="promotions"
                      checked={notificationSettings.promotions}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Promotions & Offers</span>
                      <p className="text-sm text-gray-500">Receive notifications about special promotions</p>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={notificationSettings.newsletter}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Monthly Newsletter</span>
                      <p className="text-sm text-gray-500">Receive our monthly environmental impact report</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Account Security</h3>
              <p className="text-sm text-gray-600 mt-1">Manage your account security settings</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="text-md font-bold text-gray-800 flex items-center">
                  <FaLock className="mr-2 text-emerald-600" />
                  Change Password
                </h4>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <button
                    onClick={savePassword}
                    className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 font-medium"
                  >
                    Change Password
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="text-md font-bold text-gray-800 flex items-center">
                  <FaShieldAlt className="mr-2 text-emerald-600" />
                  Security Settings
                </h4>

                <div className="mt-4 space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="twoFactorAuth"
                      checked={securitySettings.twoFactorAuth}
                      onChange={handleSecurityChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Two-Factor Authentication</span>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="passwordChangeRequired"
                      checked={securitySettings.passwordChangeRequired}
                      onChange={handleSecurityChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Require Password Change Every 90 Days</span>
                      <p className="text-sm text-gray-500">Enforce regular password updates for security</p>
                    </div>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="loginAlerts"
                      checked={securitySettings.loginAlerts}
                      onChange={handleSecurityChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                    />
                    <div className="ml-3">
                      <span className="text-sm font-medium text-gray-700">Login Alerts</span>
                      <p className="text-sm text-gray-500">Get notified when your account is accessed from a new device</p>
                    </div>
                  </label>

                  <div className="pt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout</label>
                    <select
                      name="sessionTimeout"
                      value={securitySettings.sessionTimeout}
                      onChange={handleSecurityChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Settings */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Team Management</h3>
            <p className="text-sm text-gray-600">Invite and manage team members who can access your DashSteam admin panel</p>

            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-md font-bold text-gray-800 mb-4">Add New Team Member</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newMember.name}
                    onChange={handleNewMemberChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={newMember.email}
                    onChange={handleNewMemberChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select
                    name="role"
                    value={newMember.role}
                    onChange={handleNewMemberChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Technician">Technician</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
              </div>

              <button
                onClick={addTeamMember}
                className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-4 py-2 font-medium"
              >
                Add Team Member
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h4 className="text-md font-bold text-gray-800">Team Members</h4>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {teamMembers.map((member) => (
                      <tr key={member.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            member.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                            member.role === 'Manager' ? 'bg-blue-100 text-blue-800' :
                            member.role === 'Technician' ? 'bg-cyan-100 text-cyan-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-emerald-600 hover:text-emerald-900 mr-3">Edit</button>
                          <button 
                            onClick={() => removeTeamMember(member.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Environment Settings */}
        {activeTab === 'environment' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">Environmental Goals</h3>
            <p className="text-sm text-gray-600">Set and track your sustainability targets</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="text-md font-bold text-gray-800 flex items-center">
                  <FaWater className="mr-2 text-cyan-600" />
                  Water Conservation Goals
                </h4>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Water Saving Goal (liters)
                  </label>
                  <input
                    type="range"
                    name="monthlyWaterGoal"
                    min="10000"
                    max="100000"
                    step="5000"
                    value={environmentalGoals.monthlyWaterGoal}
                    onChange={handleEnvironmentalGoalChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">10,000L</span>
                    <span className="text-sm text-gray-700 font-medium">
                      {environmentalGoals.monthlyWaterGoal.toLocaleString()}L
                    </span>
                    <span className="text-sm text-gray-500">100,000L</span>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Current Progress</span>
                      <span className="text-sm font-medium text-cyan-600">24,580L (82%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-cyan-500 h-2.5 rounded-full" 
                        style={{ width: '82%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h4 className="text-md font-bold text-gray-800 flex items-center">
                  <FaLeaf className="mr-2 text-emerald-600" />
                  Carbon Reduction Goals
                </h4>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly CO₂ Reduction Goal (kg)
                  </label>
                  <input
                    type="range"
                    name="monthlyCarbonGoal"
                    min="500"
                    max="5000"
                    step="100"
                    value={environmentalGoals.monthlyCarbonGoal}
                    onChange={handleEnvironmentalGoalChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">500kg</span>
                    <span className="text-sm text-gray-700 font-medium">
                      {environmentalGoals.monthlyCarbonGoal.toLocaleString()}kg
                    </span>
                    <span className="text-sm text-gray-500">5,000kg</span>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Current Progress</span>
                      <span className="text-sm font-medium text-emerald-600">1,120kg (75%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-emerald-500 h-2.5 rounded-full" 
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 md:col-span-2">
                <h4 className="text-md font-bold text-gray-800">Chemical-Free Target</h4>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Percentage of Chemical-Free Washes
                  </label>
                  <input
                    type="range"
                    name="chemicalFreeTarget"
                    min="80"
                    max="100"
                    step="1"
                    value={environmentalGoals.chemicalFreeTarget}
                    onChange={handleEnvironmentalGoalChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">80%</span>
                    <span className="text-sm text-gray-700 font-medium">
                      {environmentalGoals.chemicalFreeTarget}%
                    </span>
                    <span className="text-sm text-gray-500">100%</span>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Current Achievement</span>
                      <span className="text-sm font-medium text-green-600">97%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-500 h-2.5 rounded-full" 
                        style={{ width: '97%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrations Settings */}
        {activeTab === 'integrations' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">App Integrations</h3>
            <p className="text-sm text-gray-600">Connect DashSteam with your favorite tools and services</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrations.map((integration) => (
                <div 
                  key={integration.id} 
                  className="border border-gray-200 rounded-xl p-6 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{integration.name}</h4>
                      <p className="text-sm text-gray-500">
                        {integration.connected 
                          ? 'Connected' 
                          : 'Not connected'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleIntegration(integration.id)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      integration.connected
                        ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        : 'bg-emerald-500 text-white hover:bg-emerald-600'
                    }`}
                  >
                    {integration.connected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
        <button
          onClick={saveSettings}
          className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-3 font-medium"
        >
          <FaSave className="mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
