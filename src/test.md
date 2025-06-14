// src/components/BlogPreview.js
import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogPreview = () => {
  const articles = [
    {
      title: "The Environmental Impact of Traditional Car Washes",
      excerpt: "Discover how traditional car washing methods contribute to water waste and pollution...",
      date: "May 15, 2023",
      category: "Sustainability"
    },
    {
      title: "How Steam Cleaning Extends Your Vehicle's Lifespan",
      excerpt: "Learn why steam cleaning is gentler on your car's surfaces and preserves your vehicle's finish...",
      date: "April 28, 2023",
      category: "Car Care"
    },
    {
      title: "5 Eco-Friendly Vehicle Maintenance Tips",
      excerpt: "Simple changes to your car care routine that can significantly reduce your environmental impact...",
      date: "April 10, 2023",
      category: "Tips & Tricks"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DashSteam <span className="text-emerald-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600">
            Latest articles on sustainable car care and environmental stewardship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-emerald-600 font-medium flex items-center hover:text-emerald-700">
                  Read more <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center bg-gray-900 text-white hover:bg-emerald-700 font-bold py-4 px-8 rounded-full transition-all duration-300"
          >
            Visit Our Blog
            <FaArrowRight className="ml-3 text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;




