// components/Booking.js
import React from 'react';
import { FaTimes, FaCalendarAlt, FaClock, FaCar, FaMapMarkerAlt } from 'react-icons/fa';

const Booking = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">Book Your DashSteam Wash</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Exterior Only', 'Interior Only', 'Full Service', 'Premium Package'].map((service, index) => (
                    <div 
                      key={index}
                      className="border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                    >
                      <div className="font-medium">{service}</div>
                      <div className="text-emerald-600 font-bold mt-2">${index === 0 ? 35 : index === 1 ? 45 : index === 2 ? 65 : 85}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Sedan', 'SUV', 'Truck'].map((type, index) => (
                    <div 
                      key={index}
                      className="border border-gray-300 rounded-xl p-3 text-center cursor-pointer hover:border-emerald-500 hover:bg-emerald-50 transition-colors"
                    >
                      <FaCar className="mx-auto text-gray-500 mb-2" />
                      <div>{type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date & Time</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <FaCalendarAlt />
                    </div>
                    <input
                      type="text"
                      placeholder="Select date"
                      className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <FaClock />
                    </div>
                    <select className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <FaMapMarkerAlt />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-lg">Full Service Wash</div>
                <div className="text-gray-600">SUV • 60 minutes</div>
              </div>
              <div className="text-emerald-600 font-bold text-xl">$65.00</div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;