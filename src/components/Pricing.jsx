// src/components/Pricing.js
import React from 'react';
import { FaCheck, FaCar, FaShieldAlt, FaStar, FaCalendarAlt } from 'react-icons/fa';

const Pricing = ({ onBookNow }) => {
  const packages = [
    {
      name: "Basic Exterior",
      price: 35,
      description: "Perfect for regular maintenance",
      features: [
        "Full exterior steam wash",
        "Tire cleaning",
        "Window cleaning",
        "Waterless process",
        "30-45 minutes"
      ],
      popular: false
    },
    {
      name: "Complete Care",
      price: 65,
      description: "Our most popular package",
      features: [
        "Full exterior steam wash",
        "Interior steam cleaning",
        "Tire dressing",
        "Window cleaning inside & out",
        "Dashboard conditioning",
        "60-75 minutes"
      ],
      popular: true
    },
    {
      name: "Premium Detail",
      price: 95,
      description: "Showroom-quality finish",
      features: [
        "Complete Care package",
        "Engine bay cleaning",
        "Leather conditioning",
        "Headlight restoration",
        "Clay bar treatment",
        "Ceramic sealant application",
        "90-120 minutes"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Affordable <span className="text-emerald-600">Eco-Friendly</span> Packages
          </h2>
          <p className="text-xl text-gray-600">
            Premium cleaning at competitive prices, with water conservation built into every service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                pkg.popular 
                  ? 'border-emerald-500 ring-4 ring-emerald-500/20 transform -translate-y-2' 
                  : 'border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div className="bg-emerald-500 text-white py-2 text-center font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  <div className="bg-emerald-100 rounded-xl px-4 py-2">
                    <div className="text-emerald-700 font-bold text-3xl">${pkg.price}</div>
                    <div className="text-emerald-600 text-sm">per vehicle</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={onBookNow}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white transform hover:scale-105' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl p-0.5 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Membership Program</h3>
                <p className="text-gray-600 mb-6">
                  Save more with our eco-friendly subscription plans
                </p>
                <div className="bg-cyan-50 p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-500 rounded-full p-3 mr-4">
                      <FaStar className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-bold">Gold Membership</div>
                      <div className="text-emerald-600 font-bold">$49/month</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2" />
                      <span>2 Complete Care washes per month</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2" />
                      <span>10% discount on additional services</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2" />
                      <span>Priority scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-emerald-500 mr-2" />
                      <span>Free interior refresh between washes</span>
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold">
                    Join Membership
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-emerald-500 rounded-full flex flex-col items-center justify-center text-white">
                    <div className="text-5xl font-bold">25%</div>
                    <div className="text-xl">Average Savings</div>
                    <div className="mt-2 text-sm opacity-90">Compared to individual bookings</div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg text-emerald-700 font-bold">
                    Eco-Friendly Discount
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;