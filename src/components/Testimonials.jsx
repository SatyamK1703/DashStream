// components/Testimonials.js
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tesla Owner",
      quote: "I was skeptical about steam cleaning at first, but DashSteam left my car looking better than any traditional wash ever has. Plus, knowing I'm saving water makes me feel great!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Environmental Scientist",
      quote: "As someone who studies water conservation, I'm thrilled to support a business that prioritizes sustainability without compromising on quality. Their process is brilliant.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Busy Professional",
      quote: "The convenience of having them come to my office while I work is unbeatable. My car has never been cleaner, and I love that I'm making an eco-friendly choice.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from car owners who've experienced the DashSteam difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-emerald-500"></div>

            <div className="relative">
              <div className="text-5xl text-amber-400 mb-6">
                {"★".repeat(testimonials[activeIndex].rating)}
              </div>

              <blockquote className="text-2xl md:text-3xl text-gray-800 font-light mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <div className="font-bold text-xl">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-600">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-emerald-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                {index === 0 ? '4.9' : index === 1 ? '10K+' : index === 2 ? '2M+' : '98%'}
              </div>
              <div className="text-center text-gray-600">
                {index === 0 ? 'Average Rating' : index === 1 ? 'Cars Cleaned' : index === 2 ? 'Water Saved' : 'Satisfaction'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;