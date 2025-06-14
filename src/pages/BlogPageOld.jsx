// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaTag, FaArrowLeft, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer';
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { id } = useParams();

  const categories = ['All', 'Sustainability', 'Car Care', 'Tips & Tricks', 'Technology', 'Industry News'];

  const articles = [
    {
      id: 1,
      title: "The Environmental Impact of Traditional Car Washes",
      excerpt: "Discover how traditional car washing methods contribute to water waste and pollution, and why steam cleaning is the sustainable alternative.",
      date: "May 15, 2023",
      category: "Sustainability",
      readTime: "5 min read",
      author: "Sarah Johnson",
      authorRole: "Environmental Scientist",
      content: `
        <p>Traditional car washes are one of the most water-intensive activities associated with vehicle maintenance. On average, a single traditional car wash uses between 100-150 liters of water. When multiplied by the millions of car washes performed daily worldwide, this represents a staggering amount of water consumption.</p>

        <h3>The Water Waste Problem</h3>
        <p>Most traditional car washes send this water directly into storm drains, carrying with it a cocktail of pollutants including:</p>
        <ul>
          <li>Oil and grease from engines</li>
          <li>Heavy metals from brake dust</li>
          <li>Chemical residues from soaps and detergents</li>
          <li>Dirt and sediment from road surfaces</li>
        </ul>

        <p>This contaminated water eventually makes its way into rivers, lakes, and oceans, harming aquatic ecosystems and potentially entering our drinking water supplies.</p>

        <h3>Chemical Pollution</h3>
        <p>Beyond water waste, traditional car washes rely heavily on chemical cleaners that can be harmful to the environment. Many contain:</p>
        <ul>
          <li>Phosphates that cause algae blooms</li>
          <li>Petroleum distillates that harm aquatic life</li>
          <li>Synthetic fragrances that don't biodegrade</li>
          <li>Abrasive compounds that damage vehicle surfaces</li>
        </ul>

        <h3>The DashSteam Solution</h3>
        <p>At DashSteam, we've developed a revolutionary approach to car cleaning that addresses these environmental concerns:</p>
        <ul>
          <li><strong>Water Conservation:</strong> Our steam technology uses just 1-2 liters per vehicle - a 98% reduction compared to traditional methods.</li>
          <li><strong>Chemical-Free Cleaning:</strong> High-temperature steam effectively cleans without harsh chemicals, relying only on the natural power of water vapor.</li>
          <li><strong>Zero Runoff:</strong> With minimal water usage, there's no contaminated runoff entering storm drains.</li>
          <li><strong>Energy Efficiency:</strong> Our mobile units are powered by renewable energy where possible, further reducing our carbon footprint.</li>
        </ul>

        <p>By choosing EcoSteam, you're not just getting a superior clean for your vehicle - you're actively participating in water conservation and environmental protection. Join the movement for sustainable vehicle care today!</p>
      `,
      image: "water-waste"
    },
    {
      id: 2,
      title: "How Steam Cleaning Extends Your Vehicle's Lifespan",
      excerpt: "Learn why steam cleaning is gentler on your car's surfaces and preserves your vehicle's finish better than traditional methods.",
      date: "April 28, 2023",
      category: "Car Care",
      readTime: "4 min read",
      author: "Michael Chen",
      authorRole: "Automotive Detailer",
      content: `
        <p>Your vehicle is a significant investment, and proper maintenance is key to preserving its value and appearance. While traditional car washes might seem convenient, they can actually cause long-term damage to your vehicle's surfaces. Steam cleaning offers a superior alternative that not only cleans better but also protects your investment.</p>

        <h3>The Problem with Traditional Cleaning Methods</h3>
        <p>Traditional car washes can be surprisingly harsh on your vehicle:</p>
        <ul>
          <li><strong>Abrasive Brushes:</strong> Automatic car washes often use stiff brushes that can scratch your paint and leave swirl marks.</li>
          <li><strong>High-Pressure Spray:</strong> Pressure washers can force water into seals and electrical components, potentially causing damage.</li>
          <li><strong>Harsh Chemicals:</strong> Many soaps and cleaners strip protective waxes and can degrade rubber and plastic components.</li>
          <li><strong>Incomplete Cleaning:</strong> Traditional methods often leave residue that attracts dirt and accelerates deterioration.</li>
        </ul>

        <h3>Benefits of Steam Cleaning for Vehicle Longevity</h3>
        <p>Steam cleaning offers several advantages that help extend your vehicle's lifespan:</p>

        <h4>1. Gentle on All Surfaces</h4>
        <p>The controlled application of steam is safe for all vehicle surfaces, including:</p>
        <ul>
          <li>Paint and clear coat (no scratching or swirl marks)</li>
          <li>Leather and vinyl interiors</li>
          <li>Delicate electronics and dashboard components</li>
          <li>Rubber seals and trim</li>
        </ul>

        <h4>2. Deep Cleaning Without Damage</h4>
        <p>Steam's unique properties allow it to:</p>
        <ul>
          <li>Penetrate deep into upholstery fibers</li>
          <li>Loosen and dissolve grime without scrubbing</li>
          <li>Reach areas that traditional methods can't access</li>
          <li>Clean without leaving chemical residues</li>
        </ul>

        <h4>3. Protective Benefits</h4>
        <p>Beyond cleaning, steam provides protective benefits:</p>
        <ul>
          <li>Sanitizes surfaces, killing bacteria and mold</li>
          <li>Preserves leather by removing dirt that causes cracking</li>
          <li>Maintains rubber flexibility by removing damaging contaminants</li>
          <li>Prevents corrosion by removing salt and road grime</li>
        </ul>

        <p>By choosing EcoSteam's professional steam cleaning, you're not just maintaining your vehicle's appearance - you're actively extending its lifespan and preserving its value.</p>
      `,
      image: "steam-cleaning"
    },
    {
      id: 3,
      title: "5 Eco-Friendly Vehicle Maintenance Tips",
      excerpt: "Simple changes to your car care routine that can significantly reduce your environmental impact without sacrificing quality.",
      date: "April 10, 2023",
      category: "Tips & Tricks",
      readTime: "6 min read",
      author: "Emily Rodriguez",
      authorRole: "Sustainability Advocate",
      content: `
        <p>Maintaining your vehicle doesn't have to come at the expense of the environment. With a few simple changes to your routine, you can significantly reduce your ecological footprint while keeping your car in top condition. Here are five eco-friendly vehicle maintenance tips that make a difference:</p>

        <h3>1. Adopt Waterless Cleaning Methods</h3>
        <p>Traditional car washing can use up to 150 liters of water per wash. Instead:</p>
        <ul>
          <li>Use steam cleaning services like EcoSteam (only 1-2 liters of water)</li>
          <li>Try waterless wash products for spot cleaning between full services</li>
          <li>If you must wash at home, use a bucket instead of a running hose</li>
        </ul>

        <h3>2. Choose Eco-Friendly Products</h3>
        <p>When selecting cleaning and maintenance products:</p>
        <ul>
          <li>Look for biodegradable formulas</li>
          <li>Avoid products with phosphates, chlorine, and petroleum distillates</li>
          <li>Choose concentrates to reduce packaging waste</li>
          <li>Consider plant-based alternatives to synthetic chemicals</li>
        </ul>

        <h3>3. Maintain Proper Tire Pressure</h3>
        <p>This simple maintenance task has significant environmental benefits:</p>
        <ul>
          <li>Improves fuel efficiency by up to 3%</li>
          <li>Extends tire life, reducing waste</li>
          <li>Reduces CO2 emissions</li>
          <li>Improves vehicle safety and handling</li>
        </ul>
        <p>Check your tire pressure monthly and before long trips.</p>

        <h3>4. Practice Eco-Friendly Driving Habits</h3>
        <p>How you drive impacts both your vehicle's maintenance needs and the environment:</p>
        <ul>
          <li>Avoid aggressive acceleration and braking</li>
          <li>Maintain steady speeds on highways</li>
          <li>Combine trips to reduce overall mileage</li>
          <li>Remove unnecessary weight from your vehicle</li>
          <li>Turn off your engine when idling for more than 30 seconds</li>
        </ul>

        <h3>5. Dispose of Fluids Responsibly</h3>
        <p>Never pour automotive fluids down drains or on the ground:</p>
        <ul>
          <li>Recycle motor oil at designated collection points</li>
          <li>Properly dispose of coolant, brake fluid, and transmission fluid</li>
          <li>Recycle batteries at auto parts stores</li>
          <li>Properly dispose of used tires</li>
        </ul>

        <p>By implementing these eco-friendly maintenance practices, you'll not only reduce your environmental impact but also extend the life of your vehicle and potentially save money on fuel and repairs.</p>
      `,
      image: "eco-maintenance"
    }
  ];

  // If viewing a specific article
  if (id) {
    const article = articles.find(a => a.id === parseInt(id));
    if (!article) return <div>Article not found</div>;

    return (<>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium mb-8"
          >
            <FaArrowLeft className="mr-2" /> Back to Blog
          </Link>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="h-96 bg-gradient-to-r from-cyan-500 to-teal-500 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-20">
                DashSteam
              </div>
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-emerald-600 font-bold">
                {article.category}
              </div>
            </div>

            <div className="p-6 md:p-12">
              <div className="flex flex-wrap justify-between items-center mb-8">
                <div className="flex items-center text-gray-500 mb-4 md:mb-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>{article.date}</span>
                  <span className="mx-3">•</span>
                  <FaClock className="mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center">
                  <FaShareAlt className="mr-2 text-gray-500" />
                  <span className="text-gray-700 font-medium">Share:</span>
                  <a href="#" className="ml-3 text-gray-500 hover:text-cyan-600">
                    <FaFacebook />
                  </a>
                  <a href="#" className="ml-3 text-gray-500 hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="ml-3 text-gray-500 hover:text-blue-700">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="ml-3 text-gray-500 hover:text-red-500">
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              <div className="flex items-center mb-10">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <div className="ml-4">
                  <div className="font-bold">{article.author}</div>
                  <div className="text-gray-600">{article.authorRole}</div>
                </div>
              </div>

              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>

          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles
                .filter(a => a.id !== article.id)
                .slice(0, 3)
                .map(related => (
                  <Link 
                    to={`/blog/${related.id}`} 
                    key={related.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-40 bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
                          {related.category}
                        </span>
                        <span className="text-xs text-gray-500">{related.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{related.title}</h3>
                      <div className="flex items-center text-emerald-600 text-sm">
                        Read more <FaArrowRight className="ml-1 text-xs" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div> 
    <Footer/>
    </>
    );
  }

  // Main blog page with all articles
  return (<>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DashSteam <span className="text-emerald-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600">
            Insights on sustainable car care, environmental impact, and industry innovations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-full font-medium ${
                activeCategory === category.toLowerCase()
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles
            .filter(article => 
              activeCategory === 'all' || article.category.toLowerCase() === activeCategory
            )
            .map(article => (
              <Link 
                to={`/blog/${article.id}`} 
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-56 bg-gradient-to-r from-cyan-500 to-emerald-500 relative">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-emerald-600 font-medium">
                    Read more <FaArrowRight className="ml-2 text-sm" />
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {articles.filter(article => 
          activeCategory === 'all' || article.category.toLowerCase() === activeCategory
        ).length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">No articles found in this category</h3>
            <p className="text-gray-600 mt-2">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </> 
  );
};

export default BlogPage;
