// components/HowItWorks.js
import React from 'react';
import { FaWater, FaTemperatureHigh, FaCar, FaLeaf } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaWater className="text-4xl text-cyan-500" />,
      title: "Waterless Technology",
      description: "Our steam cleaning process uses minimal water - just 1-2 liters per vehicle compared to 150+ liters in traditional washes."
    },
    {
      icon: <FaTemperatureHigh className="text-4xl text-orange-500" />,
      title: "High-Temperature Steam",
      description: "We use pressurized steam at 150°C that lifts dirt and grime without harsh chemicals, sanitizing surfaces as it cleans."
    },
    {
      icon: <FaCar className="text-4xl text-teal-500" />,
      title: "Gentle on Surfaces",
      description: "The steam method is safe for all car surfaces, including paint, leather, and electronics, preserving your vehicle's finish."
    },
    {
      icon: <FaLeaf className="text-4xl text-emerald-500" />,
      title: "Eco-Friendly Results",
      description: "Zero chemical runoff, minimal water usage, and reduced carbon footprint make this the most sustainable car wash solution."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Car Cleaning is <span className="text-emerald-600">Steam</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our innovative steam technology cleans better while conserving resources and protecting the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl p-0.5 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Water Savings Calculator</h3>
                <p className="text-gray-600 mb-6">
                  See how much water you save with each steam wash compared to traditional methods.
                </p>
                <div className="bg-cyan-50 p-6 rounded-2xl">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Traditional Wash</span>
                    <span className="font-bold text-red-500">150+ liters</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full mb-6">
                    <div className="h-full bg-red-400 rounded-full" style={{ width: '100%' }}></div>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span className="font-medium">DashSteam Wash</span>
                    <span className="font-bold text-emerald-600">1-2 liters</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: '1.3%' }}></div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-emerald-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    99%
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg text-emerald-700 font-bold">
                    Water Saved
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

export default HowItWorks;