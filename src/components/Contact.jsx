// src/components/Contact.js
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? Our team is ready to assist you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-600 text-sm">Monday-Friday, 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@ecosteam.com</p>
                    <p className="text-gray-600 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Office</h4>
                    <p className="text-gray-600">123 Green Street</p>
                    <p className="text-gray-600">Eco City, EC 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <FaClock className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday-Friday: 8am-8pm</p>
                    <p className="text-gray-600">Saturday-Sunday: 9am-6pm</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors">
                    <FaFacebook className="text-gray-600 hover:text-emerald-600 text-xl" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors">
                    <FaTwitter className="text-gray-600 hover:text-emerald-600 text-xl" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors">
                    <FaInstagram className="text-gray-600 hover:text-emerald-600 text-xl" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-emerald-100 p-3 rounded-full transition-colors">
                    <FaLinkedin className="text-gray-600 hover:text-emerald-600 text-xl" />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-emerald-50 rounded-2xl p-6">
                <h4 className="font-bold text-emerald-700 mb-3">Business Partnerships</h4>
                <p className="text-gray-700 mb-4">
                  Interested in DashSteam services for your business fleet? Contact our corporate team for special rates.
                </p>
                <button className="text-emerald-700 font-bold flex items-center">
                  Corporate Solutions <FaArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;