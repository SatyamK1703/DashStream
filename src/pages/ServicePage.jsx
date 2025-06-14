// src/pages/Services.jsx
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCar, FaClock, FaCheckCircle, FaLeaf, FaWater, FaShieldAlt, FaStar, FaCalendarAlt, FaUsers, FaTint } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import SimpleFooter from '../components/SimpleFooter';

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState('exterior');
  const [zipCode, setZipCode] = useState('');
  const [isZipValid, setIsZipValid] = useState(null);

  const cities = [
    "Downtown", "North District", "South Hills", "East Meadows", 
    "West Valley", "Central Park", "Riverside", "Lakeside"
  ];

  const serviceCategories = [
    {
      id: 'exterior',
      name: 'Exterior Services',
      icon: <FaCar className="text-emerald-500" />,
      services: [
        {
          name: "Basic Exterior Wash",
          description: "Complete exterior cleaning using steam technology",
          time: "30-45 min",
          price: "$35",
          features: ["Waterless process", "Tire cleaning", "Window cleaning", "Eco-friendly"]
        },
        {
          name: "Premium Exterior Detail",
          description: "Deep cleaning and protection for your vehicle's exterior",
          time: "60-75 min",
          price: "$65",
          features: ["Clay bar treatment", "Ceramic sealant", "Headlight restoration", "Paint decontamination"]
        },
        {
          name: "Express Wash",
          description: "Quick exterior refresh for busy schedules",
          time: "20-30 min",
          price: "$25",
          features: ["Spot cleaning", "Quick dry", "Tire shine", "Water conservation"]
        }
      ]
    },
    {
      id: 'interior',
      name: 'Interior Services',
      icon: <FaUsers className="text-emerald-500" />,
      services: [
        {
          name: "Complete Interior Cleaning",
          description: "Thorough interior steam cleaning and conditioning",
          time: "60-90 min",
          price: "$75",
          features: ["Seat shampooing", "Dashboard conditioning", "Carpet extraction", "Odor elimination"]
        },
        {
          name: "Leather Treatment",
          description: "Specialized care for leather interiors",
          time: "45-60 min",
          price: "$55",
          features: ["Deep cleaning", "Conditioning", "UV protection", "Stain removal"]
        },
        {
          name: "Pet Hair Removal",
          description: "Specialized service for pet owners",
          time: "30-45 min",
          price: "$45",
          features: ["Deep vacuuming", "Specialized tools", "Odor neutralization", "Fabric protection"]
        }
      ]
    },
    {
      id: 'premium',
      name: 'Premium Packages',
      icon: <FaStar className="text-emerald-500" />,
      services: [
        {
          name: "Complete Care Package",
          description: "Our most popular full-service package",
          time: "2-2.5 hours",
          price: "$120",
          features: ["Full exterior wash", "Complete interior cleaning", "Engine bay cleaning", "Ceramic sealant"]
        },
        {
          name: "Showroom Shine",
          description: "Ultimate detailing for showroom-quality results",
          time: "3-4 hours",
          price: "$180",
          features: ["Paint correction", "Full interior restoration", "Leather conditioning", "Glass coating"]
        },
        {
          name: "Eco Elite Membership",
          description: "Monthly subscription for premium care",
          time: "Regular appointments",
          price: "$99/month",
          features: ["Two Complete Care washes", "20% off add-ons", "Priority scheduling", "Free waterless refreshes"]
        }
      ]
    }
  ];

  const features = [
    {
      title: "Water Conservation",
      description: "Each wash saves 150+ liters compared to traditional methods",
      icon: <FaTint className="text-emerald-500" />,
      stats: "98% less water"
    },
    {
      title: "Eco-Friendly Solutions",
      description: "Biodegradable, non-toxic cleaning products safe for your family and the planet",
      icon: <FaLeaf className="text-emerald-500" />,
      stats: "100% chemical-free"
    },
    {
      title: "Advanced Steam Technology",
      description: "High-temperature steam sanitizes surfaces without harsh chemicals",
      icon: <FaWater className="text-emerald-500" />,
      stats: "99.9% germ elimination"
    },
    {
      title: "Paint Protection",
      description: "Gentle cleaning that preserves your vehicle's finish and clear coat",
      icon: <FaShieldAlt className="text-emerald-500" />,
      stats: "Scratch-free guarantee"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Book Your Service",
      description: "Schedule online or by phone at your convenience",
      icon: <FaCalendarAlt className="text-white" />
    },
    {
      step: 2,
      title: "Prepare Your Vehicle",
      description: "Remove personal items before our arrival",
      icon: <FaCar className="text-white" />
    },
    {
      step: 3,
      title: "Mobile Service Arrives",
      description: "Our eco-van arrives at your location with all equipment",
      icon: <FaMapMarkerAlt className="text-white" />
    },
    {
      step: 4,
      title: "Enjoy a Clean Car",
      description: "Relax while we transform your vehicle",
      icon: <FaCheckCircle className="text-white" />
    }
  ];

  const checkZipCode = () => {
    // Simple validation - in a real app, this would check against a service area database
    if (zipCode.length >= 3) {
      setIsZipValid(true);
    } else {
      setIsZipValid(false);
    }
  };

  return (<>
    <Navbar/>
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
            Premium Eco-Friendly Car Care
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Professional steam cleaning that saves water and protects your vehicle
          </motion.p>
          <motion.button
            className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FaCalendarAlt className="mr-3" /> Book Your Service
          </motion.button>
        </div>
      </div>
      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Premium cleaning options tailored to your vehicle's needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex flex-wrap justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium text-lg flex items-center ${
                  activeTab === category.id 
                    ? 'bg-emerald-500 text-white shadow' 
                    : 'text-gray-700 hover:text-emerald-600'
                } transition-colors m-1`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceCategories
            .find(cat => cat.id === activeTab)
            .services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                    <div className="bg-emerald-100 rounded-xl px-4 py-2">
                      <div className="text-emerald-700 font-bold text-2xl">{service.price}</div>
                      <div className="text-emerald-600 text-sm">{service.time}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheckCircle className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-colors">
                    Select Service
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Eco Features Section */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-emerald-600">DashSteam</span> Difference
            </h2>
            <p className="text-xl text-gray-600">
              Why our steam cleaning technology is better for your car and the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-emerald-700 font-bold">{feature.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How Our <span className="text-emerald-600">Service Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            Simple, convenient, and eco-friendly car care at your location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 bg-black/10 w-full h-full rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <div className="text-5xl font-bold text-white/20 mb-2">{step.step}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-600">
              We bring eco-friendly steam cleaning directly to your location
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl w-full h-96 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <FaMapMarkerAlt className="text-5xl mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Metro Coverage</h3>
                  <p className="text-xl max-w-md mx-auto">
                    Serving the entire metropolitan area with our eco-friendly mobile units
                  </p>
                </div>
              </div>
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Coverage Area</h3>
                    <p className="text-gray-600 mb-4">
                      We currently serve the entire metro area and surrounding suburbs. 
                      Our mobile units can reach you wherever you are - at home, work, or any convenient location.
                    </p>
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
                </div>
              </div>

              <div className="space-y-6 mb-10">
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
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Enter your zip code" 
                    className="flex-grow border border-emerald-300 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button 
                    onClick={checkZipCode}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-r-lg transition-colors"
                  >
                    Check
                  </button>
                </div>
                {isZipValid === true && (
                  <div className="text-emerald-700 mt-3">
                    Great news! We serve your area. <span className="font-bold">Book your service today!</span>
                  </div>
                )}
                {isZipValid === false && (
                  <div className="text-amber-600 mt-3">
                    We're not in your area yet, but we're expanding soon! Enter your email to be notified.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready for a Spotless, Eco-Friendly Wash?</h3>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Experience the DashSteam difference - premium cleaning that cares for your car and the planet.
          </p>
          <button className="bg-white text-cyan-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
            <FaCalendarAlt className="mr-3" /> Book Your Service Now
          </button>
        </div>
      </div>
    </div>
  <SimpleFooter/>
  </>
  );
};

export default ServicePage;