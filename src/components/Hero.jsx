// src/components/Hero.js
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

const Hero = ({ onBookNow }) => {
  return (
    <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 min-h-screen flex items-center overflow-hidden">
      {/* Animated water droplets */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 inline-flex items-center mb-6">
              <span className="h-2 w-2 bg-emerald-300 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white text-sm font-medium">Sustainable & Waterless</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Shine Clean, <br className="hidden md:block" /> <span className="text-emerald-200">Save Water</span>
            </h1>

            <p className="text-xl text-white/90 mb-10 max-w-lg">
            DashSteam revolutionizes car care with our steam technology, using 90% less water than traditional washes while delivering superior results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookNow}
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                <FaCalendarAlt className="mr-2" />
                Book Your Steam Wash
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center">
                <FaCar className="mr-2" />
                View Services
              </button>
            </div>

            <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-500 rounded-full p-2 mr-3">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Serving Metro Area</h3>
                  <p className="text-white/80 text-sm">Available at your home, office, or preferred location</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-emerald-500/20 rounded-xl px-3 py-1 text-sm text-white">
                  Same Day Service
                </div>
                <div className="bg-emerald-500/20 rounded-xl px-3 py-1 text-sm text-white">
                  7 Days a Week
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-20 -right-10 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-20 right-20 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Steam car wash" 
                  className="w-full rounded-3xl object-cover shadow-2xl border-4 border-white"
                  style={{ height: '500px' }}
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                    <FaCar className="text-emerald-600 text-2xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Vehicles cleaned</div>
                    <div className="text-2xl font-bold text-emerald-600">10,458+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;