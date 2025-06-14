// src/pages/PricingPage.jsx
import React, { useState } from 'react';
import { FaCheck, FaCar, FaShieldAlt, FaStar, FaCalendarAlt, FaLeaf, FaWater, FaClock, FaUsers } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SimpleFooter from '../components/SimpleFooter';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to Complete Care

  const packages = [
    {
      id: 1,
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
      popular: false,
      icon: <FaCar className="text-emerald-500" />,
      waterSavings: 120
    },
    {
      id: 2,
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
      popular: true,
      icon: <FaShieldAlt className="text-emerald-500" />,
      waterSavings: 150
    },
    {
      id: 3,
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
      popular: false,
      icon: <FaStar className="text-emerald-500" />,
      waterSavings: 180
    }
  ];

  const membership = {
    name: "Gold Membership",
    price: 49,
    period: "per month",
    description: "Save more with our eco-friendly subscription",
    benefits: [
      "2 Complete Care washes per month",
      "10% discount on additional services",
      "Priority scheduling",
      "Free interior refresh between washes",
      "Discounts on Premium Detail package"
    ],
    savings: "Save $100+ annually"
  };

  const addOnServices = [
    { name: "Odor Removal", price: 15, duration: "15 min" },
    { name: "Headlight Restoration", price: 25, duration: "20 min" },
    { name: "Pet Hair Removal", price: 20, duration: "25 min" },
    { name: "Clay Bar Treatment", price: 35, duration: "30 min" },
    { name: "Ceramic Coating", price: 75, duration: "45 min" },
    { name: "Engine Bay Cleaning", price: 40, duration: "30 min" }
  ];

  const faqs = [
    {
      question: "How much water does steam washing save?",
      answer: "Traditional car washes use 80-140 gallons of water per wash. Our steam technology uses only 1-2 gallons, saving thousands of gallons annually."
    },
    {
      question: "How often should I get my car steam washed?",
      answer: "For optimal maintenance, we recommend every 2-4 weeks. Our membership program makes regular cleaning affordable."
    },
    {
      question: "Is steam washing safe for my car's paint?",
      answer: "Absolutely! Our low-pressure steam gently lifts dirt without scratching. It's actually safer than traditional methods."
    },
    {
      question: "Do you offer mobile services?",
      answer: "Yes! We can come to your home or office. Mobile service pricing is the same as our regular packages."
    },
    {
      question: "What's your cancellation policy?",
      answer: "You can cancel or reschedule up to 12 hours before your appointment with no charge."
    }
  ];

  return (<>
    <div> <Navbar/></div>
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Eco-Friendly Car Care Pricing
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Premium cleaning at competitive prices, with water conservation built into every service
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link 
              to="/booking" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
            >
              <FaCalendarAlt className="mr-3" /> Book Your Dash-Wash
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Water Savings Banner */}
      <div className="bg-emerald-700 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <FaLeaf className="text-emerald-200 text-2xl mr-3" />
            <span className="text-lg">Each wash saves <span className="font-bold">150+ liters</span> of water compared to traditional methods</span>
          </div>
          <div className="flex items-center">
            <FaWater className="text-emerald-200 text-xl mr-3" />
            <span>Over <span className="font-bold">500,000 liters</span> saved by our customers this year</span>
          </div>
        </div>
      </div>

      {/* Pricing Tabs */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex">
            <button
              className={`px-6 py-3 rounded-full font-medium text-lg ${
                activeTab === 'packages' 
                  ? 'bg-emerald-500 text-white shadow' 
                  : 'text-gray-700 hover:text-emerald-600'
              } transition-colors`}
              onClick={() => setActiveTab('packages')}
            >
              Wash Packages
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium text-lg ${
                activeTab === 'membership' 
                  ? 'bg-emerald-500 text-white shadow' 
                  : 'text-gray-700 hover:text-emerald-600'
              } transition-colors`}
              onClick={() => setActiveTab('membership')}
            >
              Membership
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium text-lg ${
                activeTab === 'addons' 
                  ? 'bg-emerald-500 text-white shadow' 
                  : 'text-gray-700 hover:text-emerald-600'
              } transition-colors`}
              onClick={() => setActiveTab('addons')}
            >
              Add-On Services
            </button>
          </div>
        </div>

        {/* Packages Tab */}
        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg) => (
                <motion.div 
                  key={pkg.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden border relative ${
                    pkg.popular 
                      ? 'border-emerald-500 ring-4 ring-emerald-500/20 transform md:-translate-y-2' 
                      : 'border-gray-100'
                  }`}
                  whileHover={{ y: -10 }}
                >
                  {pkg.popular && (
                    <div className="bg-emerald-500 text-white py-2 text-center font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="bg-emerald-100 rounded-full p-4">
                        {pkg.icon}
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      <div className="text-emerald-700 font-bold text-3xl">${pkg.price}</div>
                      <div className="text-gray-500 text-sm">per vehicle</div>
                    </div>

                    <div className="flex items-center justify-center bg-emerald-50 rounded-lg p-3 mb-6">
                      <FaLeaf className="text-emerald-500 mr-2" />
                      <span className="text-emerald-700 font-medium">Saves {pkg.waterSavings} liters of water</span>
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
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                        selectedPackage === pkg.id 
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Package Comparison */}
            <div className="mt-20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-12">Package Comparison</h3>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-0 border-b border-gray-200">
                  <div className="p-4 font-medium">Feature</div>
                  <div className="p-4 text-center font-medium">Basic Exterior</div>
                  <div className="p-4 text-center font-medium bg-emerald-50">Complete Care</div>
                  <div className="p-4 text-center font-medium">Premium Detail</div>
                </div>

                {[
                  "Exterior steam wash",
                  "Interior cleaning",
                  "Tire dressing",
                  "Window cleaning (inside & out)",
                  "Dashboard conditioning",
                  "Engine bay cleaning",
                  "Leather conditioning",
                  "Headlight restoration",
                  "Ceramic sealant"
                ].map((feature, index) => (
                  <div key={index} className="grid grid-cols-4 gap-0 border-b border-gray-100">
                    <div className="p-4 text-gray-600">{feature}</div>
                    <div className="p-4 text-center">
                      {index < 4 ? <FaCheck className="text-emerald-500 mx-auto" /> : <FaTimes className="text-gray-300 mx-auto" />}
                    </div>
                    <div className="p-4 text-center bg-emerald-50">
                      {index < 5 ? <FaCheck className="text-emerald-500 mx-auto" /> : <FaTimes className="text-gray-300 mx-auto" />}
                    </div>
                    <div className="p-4 text-center">
                      <FaCheck className="text-emerald-500 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Membership Tab */}
        {activeTab === 'membership' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-3xl p-0.5 mb-16">
              <div className="bg-white rounded-3xl p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-500 rounded-full p-3 mr-4">
                        <FaStar className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="font-bold text-2xl">{membership.name}</div>
                        <div className="text-amber-600 font-bold text-3xl">${membership.price}<span className="text-lg text-gray-500"> {membership.period}</span></div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {membership.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Membership Benefits:</h4>
                      <ul className="space-y-3">
                        {membership.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl mb-6">
                      <div className="font-bold text-amber-700">{membership.savings}</div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                      Join Membership
                    </button>
                  </div>

                  <div className="md:w-2/5 flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-full flex flex-col items-center justify-center text-white">
                        <div className="text-5xl font-bold">25%</div>
                        <div className="text-xl">Average Savings</div>
                        <div className="mt-2 text-sm opacity-90 text-center">Compared to individual bookings</div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg text-amber-700 font-bold">
                        Eco-Friendly Discount
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Flexible Scheduling",
                  description: "Book anytime with priority access to popular time slots",
                  icon: <FaClock className="text-amber-500 text-3xl" />
                },
                {
                  title: "Member Rewards",
                  description: "Earn points for every wash that can be redeemed for free services",
                  icon: <FaStar className="text-amber-500 text-3xl" />
                },
                {
                  title: "Referral Program",
                  description: "Get free washes when you refer friends to EcoSteam",
                  icon: <FaUsers className="text-amber-500 text-3xl" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Add-Ons Tab */}
        {activeTab === 'addons' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {addOnServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex justify-between items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <h4 className="font-bold text-lg mb-1">{service.name}</h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaClock className="mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-emerald-600 font-bold text-xl mr-2">${service.price}</span>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      +
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Bundle and Save!</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Add 3 or more services to any package and get 15% off your total order. 
                Perfect for preparing your vehicle for special occasions or seasonal changes.
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold">
                Create Custom Package
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-bold text-lg text-emerald-600 mb-2">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready for a Spotless, Eco-Friendly Wash?</h3>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book now and experience the DashSteam difference - premium cleaning that cares for your car and the planet.
          </p>
          <Link 
            to="/booking" 
            className="bg-white text-cyan-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <FaCalendarAlt className="mr-3" /> Book Your Wash Now
          </Link>
        </div>
      </div>
    </div>
    <SimpleFooter/>
  </>
  );
};

export default PricingPage;