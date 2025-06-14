// components/Faq.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const faqs = [
    {
      question: "Is steam cleaning safe for my car's paint?",
      answer: "Absolutely. Our steam cleaning method is actually gentler on your paint than traditional washing. The steam lifts dirt without abrasive scrubbing, preserving your clear coat and reducing micro-scratches."
    },
    {
      question: "How much water do you actually use?",
      answer: "We use just 1-2 liters per vehicle compared to 150+ liters for a traditional car wash. That's a 98-99% reduction in water usage!"
    },
    {
      question: "Can steam cleaning remove tough stains and grime?",
      answer: "Yes! The high-temperature steam (150°C) effectively breaks down even stubborn dirt, grease, and road grime without harsh chemicals. It's excellent for wheels, engine bays, and interior stains."
    },
    {
      question: "Does steam cleaning sanitize the interior?",
      answer: "Absolutely. The high-temperature steam kills bacteria, viruses, and dust mites, making it ideal for sanitizing seats, carpets, and other surfaces without using chemical disinfectants."
    },
    {
      question: "How long does a steam wash take?",
      answer: "Most vehicles take between 45-90 minutes depending on size and condition. We work efficiently but thoroughly to ensure every part of your vehicle receives proper attention."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our eco-friendly steam cleaning process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-emerald-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-xl font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-emerald-600 text-lg" />
                  ) : (
                    <FaChevronDown className="text-gray-500 text-lg" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-6 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience the Future of Car Cleaning?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are saving water and getting superior results.
            </p>
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Book Your First Wash
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;