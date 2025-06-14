// src/components/ImpactTracker.js
import React, { useState, useEffect } from 'react';
import { FaWater, FaLeaf, FaRecycle } from 'react-icons/fa';

const ImpactTracker = () => {
  const [waterSaved, setWaterSaved] = useState(0);
  const [carbonReduced, setCarbonReduced] = useState(0);
  const [carsCleaned, setCarsCleaned] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterSaved(prev => prev < 2537648 ? prev + 37 : prev);
      setCarbonReduced(prev => prev < 98456 ? prev + 5 : prev);
      setCarsCleaned(prev => prev < 10458 ? prev + 1 : prev);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-700 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Environmental Impact</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join our movement to conserve water and reduce environmental impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6">
              <FaWater className="text-3xl text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(waterSaved)}</div>
            <div className="text-xl font-medium">Liters of Water Saved</div>
            <div className="mt-4 text-sm opacity-80">Equivalent to {Math.round(waterSaved / 15000)} Olympic swimming pools</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6">
              <FaLeaf className="text-3xl text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(carbonReduced)}</div>
            <div className="text-xl font-medium">Kg of CO₂ Reduced</div>
            <div className="mt-4 text-sm opacity-80">Equivalent to planting {Math.round(carbonReduced / 21)} trees</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6">
              <FaRecycle className="text-3xl text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">{formatNumber(carsCleaned)}+</div>
            <div className="text-xl font-medium">Vehicles Cleaned</div>
            <div className="mt-4 text-sm opacity-80">With 100% chemical-free steam technology</div>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Real-time Impact Visualization</h3>
              <p className="opacity-90 mb-4">
                See how each DashSteam wash contributes to environmental conservation
              </p>
              <div className="bg-emerald-500/20 rounded-xl p-4">
                <div className="flex justify-between mb-2 text-sm">
                  <span>Your Impact</span>
                  <span>Community Impact</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full mb-4">
                  <div className="h-full bg-emerald-300 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <div className="text-center">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
                    You've saved 1,245 liters of water
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-emerald-500/30 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-emerald-500/50 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      Your Impact
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white text-emerald-700 px-4 py-2 rounded-full font-bold text-sm">
                  97% Less Water
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;