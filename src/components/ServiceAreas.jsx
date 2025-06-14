// src/components/ServiceAreas.js
import React from 'react';
import { FaMapMarkerAlt, FaCar, FaClock, FaCheckCircle } from 'react-icons/fa';

const ServiceAreas = () => {
  const cities = [
    "Downtown", "North District", "South Hills", "East Meadows", 
    "West Valley", "Central Park", "Riverside", "Lakeside"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Service Areas</span>
          </h2>
          <p className="text-xl text-gray-600">
            We bring eco-friendly steam cleaning directly to your location
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="text-emerald-600 font-bold text-2xl">20+</div>
              <div className="text-gray-600">Neighborhoods served</div>
            </div>
          </div>

          <div>
            <div className="mb-10">
              <div className="flex items-start mb-6">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Metro Coverage</h3>
                  <p className="text-gray-600">
                    We currently serve the entire metro area and surrounding suburbs. 
                    Our mobile units can reach you wherever you are - at home, work, or any convenient location.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {cities.map((city, index) => (
                  <div 
                    key={index}
                    className="bg-white px-4 py-2 rounded-full border border-emerald-200 flex items-center"
                  >
                    <FaCheckCircle className="text-emerald-500 mr-2" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <FaCar className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Service Requirements</h3>
                  <p className="text-gray-600">
                    We need approximately 10x20 feet of space to set up our equipment. 
                    Our eco-friendly vans carry everything we need to deliver premium service at your location.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <FaClock className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Service Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8am - 8pm<br />
                    Saturday - Sunday: 9am - 6pm<br />
                    Holiday hours may vary
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-emerald-500/10 rounded-2xl p-6">
              <h3 className="font-bold text-emerald-700 mb-3">Expanding Soon!</h3>
              <p className="text-gray-700 mb-4">
                We're adding new service areas every month. Enter your zip code to see if we're coming to your neighborhood soon.
              </p>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter your zip code" 
                  className="flex-grow border border-emerald-300 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-r-lg transition-colors">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;