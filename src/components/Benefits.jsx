// components/Benefits.js
import React from 'react';
import { FaRecycle, FaTree, FaCarSide, FaShieldAlt } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRecycle className="text-5xl text-emerald-500" />,
      title: "Sustainable Solution",
      description: "Dramatically reduces water consumption and eliminates chemical runoff into waterways."
    },
    {
      icon: <FaTree className="text-5xl text-green-500" />,
      title: "Eco-Friendly",
      description: "Our process uses biodegradable solutions only when necessary and minimizes carbon footprint."
    },
    {
      icon: <FaCarSide className="text-5xl text-cyan-500" />,
      title: "Convenient Service",
      description: "We come to you - at home, work, or anywhere. No need to drive to a car wash facility."
    },
    {
      icon: <FaShieldAlt className="text-5xl text-blue-500" />,
      title: "Superior Protection",
      description: "Steam cleaning sanitizes surfaces, kills bacteria, and preserves your car's finish better than chemicals."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-emerald-600">DashSteam</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Our innovative approach delivers exceptional results while prioritizing environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury car" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-4xl font-bold text-emerald-600">2M+</div>
                <div className="text-gray-600">Liters of water saved</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Environmental Impact That Matters
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Since our founding, DashSteam has saved over 2 million liters of water and prevented thousands of liters of chemical runoff from entering our ecosystems.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Water Conservation</span>
                  <span className="font-bold text-emerald-600">98% reduction</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Chemical Usage</span>
                  <span className="font-bold text-emerald-600">95% reduction</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Customer Satisfaction</span>
                  <span className="font-bold text-emerald-600">4.9/5 rating</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;