// src/components/BlogPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogPreview = () => {
  const articles = [
    {
      id: 1,
      title: "The Environmental Impact of Traditional Car Washes",
      excerpt: "Discover how traditional car washing methods contribute to water waste and pollution, and why steam cleaning is the sustainable alternative.",
      date: "May 15, 2023",
      category: "Sustainability",
      readTime: "5 min read",
      image: "water-waste"
    },
    {
      id: 2,
      title: "How Steam Cleaning Extends Your Vehicle's Lifespan",
      excerpt: "Learn why steam cleaning is gentler on your car's surfaces and preserves your vehicle's finish better than traditional methods.",
      date: "April 28, 2023",
      category: "Car Care",
      readTime: "4 min read",
      image: "steam-cleaning"
    },
    {
      id: 3,
      title: "5 Eco-Friendly Vehicle Maintenance Tips",
      excerpt: "Simple changes to your car care routine that can significantly reduce your environmental impact without sacrificing quality.",
      date: "April 10, 2023",
      category: "Tips & Tricks",
      readTime: "6 min read",
      image: "eco-maintenance"
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
          {articles.map((article) => (
            <Link 
              to={`/blog/${article.id}`} 
              key={article.id}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-r from-cyan-500 to-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-20">
                  DashSteam
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-emerald-600">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    {article.date}
                  </div>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-800 transition-colors">
                  Read more <FaArrowRight className="ml-2 text-sm" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Visit Our Blog
            <FaArrowRight className="ml-3 text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;