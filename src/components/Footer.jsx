// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-3xl font-bold mb-6">
              Dash<span className="text-emerald-400">Steam</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing car care with sustainable steam technology that saves water and delivers superior results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Exterior Steam Wash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interior Steam Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Full Vehicle Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leather & Upholstery Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engine Bay Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Savings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-emerald-400" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-emerald-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-emerald-400" />
                <span>hello@ecosteam.com</span>
              </li>
            </ul>

            <div className="mt-8 bg-gray-800 rounded-xl p-6">
              <h5 className="font-bold mb-3">Subscribe to Our Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-white py-2 px-4 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-r-lg transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} DashSteam. All rights reserved. Making the world cleaner, one car at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;