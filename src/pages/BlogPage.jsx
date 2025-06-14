// src/pages/BlogPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaArrowLeft, 
  FaShareAlt, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope,
  FaLeaf,
  FaWater,
  FaComments,
  FaBookmark,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCheck,
  FaTag,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import SimpleFooter from '../components/SimpleFooter';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [readingTime, setReadingTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [bookmarked, setBookmarked] = useState(false);
  const { id } = useParams();
  const articleRef = useRef(null);

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
      authorBio: "Sarah is an environmental scientist with 10 years of experience in water conservation research. She specializes in sustainable practices for urban environments.",
      content: `
        <p class="mb-4">Traditional car washes are one of the most water-intensive activities associated with vehicle maintenance. On average, a single traditional car wash uses between 100-150 liters of water. When multiplied by the millions of car washes performed daily worldwide, this represents a staggering amount of water consumption.</p>

        <div class="bg-emerald-50 p-6 rounded-xl my-6 flex items-start">
          <FaWater className="text-2xl text-emerald-600 mr-4 mt-1" />
          <div>
            <h3 class="font-bold text-lg mb-2">Water Waste Facts</h3>
            <p>The average car wash uses enough water to fill 1.5 bathtubs. EcoSteam reduces this to just 1-2 liters per vehicle.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">The Water Waste Problem</h3>
        <p class="mb-4">Most traditional car washes send this water directly into storm drains, carrying with it a cocktail of pollutants including:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Oil and grease from engines</li>
          <li>Heavy metals from brake dust</li>
          <li>Chemical residues from soaps and detergents</li>
          <li>Dirt and sediment from road surfaces</li>
        </ul>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-gradient-to-br from-cyan-500 to-emerald-500 p-6 rounded-xl text-white">
            <h3 class="font-bold text-xl mb-3">Water Savings</h3>
            <div class="text-4xl font-bold mb-2">98%</div>
            <p>Reduction in water usage compared to traditional methods</p>
          </div>

          <div class="bg-gradient-to-br from-amber-500 to-orange-500 p-6 rounded-xl text-white">
            <h3 class="font-bold text-xl mb-3">Chemical Reduction</h3>
            <div class="text-4xl font-bold mb-2">95%</div>
            <p>Less chemicals used in steam cleaning process</p>
          </div>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">Chemical Pollution</h3>
        <p class="mb-4">Beyond water waste, traditional car washes rely heavily on chemical cleaners that can be harmful to the environment. Many contain:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Phosphates that cause algae blooms</li>
          <li>Petroleum distillates that harm aquatic life</li>
          <li>Synthetic fragrances that don't biodegrade</li>
          <li>Abrasive compounds that damage vehicle surfaces</li>
        </ul>

        <div class="bg-gray-100 border-l-4 border-emerald-500 p-4 my-6">
          <p class="italic">"Switching to steam cleaning is one of the simplest ways vehicle owners can reduce their environmental footprint while maintaining their cars."</p>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">The DashSteam Solution</h3>
        <p class="mb-4">At DashSteam, we've developed a revolutionary approach to car cleaning that addresses these environmental concerns:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Water Conservation:</strong> Our steam technology uses just 1-2 liters per vehicle - a 98% reduction compared to traditional methods.</li>
          <li><strong>Chemical-Free Cleaning:</strong> High-temperature steam effectively cleans without harsh chemicals, relying only on the natural power of water vapor.</li>
          <li><strong>Zero Runoff:</strong> With minimal water usage, there's no contaminated runoff entering storm drains.</li>
          <li><strong>Energy Efficiency:</strong> Our mobile units are powered by renewable energy where possible, further reducing our carbon footprint.</li>
        </ul>

        <p class="mt-6">By choosing DashSteam, you're not just getting a superior clean for your vehicle - you're actively participating in water conservation and environmental protection. Join the movement for sustainable vehicle care today!</p>
      `,
      image: "water-waste",
      waterSaved: 150,
      carbonReduced: 2.5,
      tags: ["water conservation", "eco-friendly", "sustainability", "car wash impact"]
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
      authorBio: "Michael is a certified automotive detailer with 15 years of experience. He specializes in premium vehicle care and preservation techniques.",
      content: `
        <p class="mb-4">Your vehicle is a significant investment, and proper maintenance is key to preserving its value and appearance. While traditional car washes might seem convenient, they can actually cause long-term damage to your vehicle's surfaces. Steam cleaning offers a superior alternative that not only cleans better but also protects your investment.</p>

        <div class="bg-amber-50 p-6 rounded-xl my-6">
          <h3 class="font-bold text-lg mb-2">Did You Know?</h3>
          <p>Steam cleaning can extend your vehicle's lifespan by up to 3 years by preventing surface degradation and corrosion.</p>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">The Problem with Traditional Cleaning Methods</h3>
        <p class="mb-4">Traditional car washes can be surprisingly harsh on your vehicle:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Abrasive Brushes:</strong> Automatic car washes often use stiff brushes that can scratch your paint and leave swirl marks.</li>
          <li><strong>High-Pressure Spray:</strong> Pressure washers can force water into seals and electrical components, potentially causing damage.</li>
          <li><strong>Harsh Chemicals:</strong> Many soaps and cleaners strip protective waxes and can degrade rubber and plastic components.</li>
          <li><strong>Incomplete Cleaning:</strong> Traditional methods often leave residue that attracts dirt and accelerates deterioration.</li>
        </ul>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="border border-gray-200 rounded-xl p-6">
            <h3 class="font-bold text-lg mb-3">Traditional Wash</h3>
            <ul class="space-y-2 text-red-500">
              <li class="flex items-center"><FaTimes className="mr-2" /> Surface scratches</li>
              <li class="flex items-center"><FaTimes className="mr-2" /> Chemical damage</li>
              <li class="flex items-center"><FaTimes className="mr-2" /> Water intrusion</li>
            </ul>
          </div>

          <div class="border border-gray-200 rounded-xl p-6 bg-emerald-50">
            <h3 class="font-bold text-lg mb-3">Steam Cleaning</h3>
            <ul class="space-y-2 text-emerald-600">
              <li class="flex items-center"><FaCheck className="mr-2" /> Gentle on surfaces</li>
              <li class="flex items-center"><FaCheck className="mr-2" /> Chemical-free</li>
              <li class="flex items-center"><FaCheck className="mr-2" /> No water intrusion</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">Benefits of Steam Cleaning for Vehicle Longevity</h3>
        <p class="mb-4">Steam cleaning offers several advantages that help extend your vehicle's lifespan:</p>

        <h4 class="text-lg font-bold mt-6 mb-3">1. Gentle on All Surfaces</h4>
        <p class="mb-4">The controlled application of steam is safe for all vehicle surfaces, including:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Paint and clear coat (no scratching or swirl marks)</li>
          <li>Leather and vinyl interiors</li>
          <li>Delicate electronics and dashboard components</li>
          <li>Rubber seals and trim</li>
        </ul>

        <div class="bg-gray-100 p-6 rounded-xl my-6 flex items-start">
          <div className="bg-emerald-500 rounded-full p-3 mr-4">
            <FaLeaf className="text-white text-xl" />
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">Eco-Friendly Bonus</h3>
            <p>Steam cleaning not only preserves your vehicle but also protects the environment by using minimal water and no harsh chemicals.</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mt-6 mb-3">2. Deep Cleaning Without Damage</h4>
        <p class="mb-4">Steam's unique properties allow it to:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Penetrate deep into upholstery fibers</li>
          <li>Loosen and dissolve grime without scrubbing</li>
          <li>Reach areas that traditional methods can't access</li>
          <li>Clean without leaving chemical residues</li>
        </ul>

        <div class="relative my-8">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl"></div>
          <div class="relative bg-white p-6 rounded-xl border-2 border-dashed border-emerald-500 transform -rotate-1">
            <h3 class="font-bold text-xl mb-3">Preservation Tips</h3>
            <p>Combine steam cleaning with regular waxing to create a protective barrier that keeps your vehicle looking newer for longer.</p>
          </div>
        </div>

        <h4 class="text-lg font-bold mt-6 mb-3">3. Protective Benefits</h4>
        <p class="mb-4">Beyond cleaning, steam provides protective benefits:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Sanitizes surfaces, killing bacteria and mold</li>
          <li>Preserves leather by removing dirt that causes cracking</li>
          <li>Maintains rubber flexibility by removing damaging contaminants</li>
          <li>Prevents corrosion by removing salt and road grime</li>
        </ul>

        <p class="mt-6 font-medium">By choosing DashSteam's professional steam cleaning, you're not just maintaining your vehicle's appearance - you're actively extending its lifespan and preserving its value.</p>
      `,
      image: "steam-cleaning",
      waterSaved: 140,
      carbonReduced: 2.3,
      tags: ["vehicle maintenance", "car care", "steam technology", "preservation"]
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
      authorBio: "Emily is a sustainability advocate and founder of GreenRide Initiative. She helps vehicle owners adopt eco-friendly practices.",
      content: `
        <p class="mb-4">Maintaining your vehicle doesn't have to come at the expense of the environment. With a few simple changes to your routine, you can significantly reduce your ecological footprint while keeping your car in top condition. Here are five eco-friendly vehicle maintenance tips that make a difference:</p>

        <div class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-xl my-6">
          <h3 class="font-bold text-xl mb-3">Quick Impact Stats</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="text-3xl font-bold">150L</div>
              <div class="text-sm">Water saved per wash</div>
            </div>
            <div>
              <div class="text-3xl font-bold">3%</div>
              <div class="text-sm">Fuel efficiency gain</div>
            </div>
            <div>
              <div class="text-3xl font-bold">900kg</div>
              <div class="text-sm">CO₂ reduced yearly</div>
            </div>
            <div>
              <div class="text-3xl font-bold">98%</div>
              <div class="text-sm">Less chemicals used</div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">1. Adopt Waterless Cleaning Methods</h3>
        <p class="mb-4">Traditional car washing can use up to 150 liters of water per wash. Instead:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Use steam cleaning services like DashSteam (only 1-2 liters of water)</li>
          <li>Try waterless wash products for spot cleaning between full services</li>
          <li>If you must wash at home, use a bucket instead of a running hose</li>
        </ul>

        <div class="bg-emerald-50 p-6 rounded-xl my-6 flex items-start">
          <FaWater className="text-2xl text-emerald-600 mr-4 mt-1" />
          <div>
            <h3 class="font-bold text-lg mb-2">Water Savings Calculator</h3>
            <p>Each DashSteam wash saves approximately 148 liters of water. That's equivalent to:</p>
            <div class="flex space-x-4 mt-3">
              <div class="text-center">
                <div class="text-2xl font-bold">🛁</div>
                <div class="text-sm">1.5 bathtubs</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">💧</div>
                <div class="text-sm">300 bottles</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">🌱</div>
                <div class="text-sm">1 tree/month</div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">2. Choose Eco-Friendly Products</h3>
        <p class="mb-4">When selecting cleaning and maintenance products:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Look for biodegradable formulas</li>
          <li>Avoid products with phosphates, chlorine, and petroleum distillates</li>
          <li>Choose concentrates to reduce packaging waste</li>
          <li>Consider plant-based alternatives to synthetic chemicals</li>
        </ul>

        <div class="border-l-4 border-emerald-500 pl-4 py-2 my-6">
          <h3 class="font-bold text-lg mb-2">EcoSteam Recommendation</h3>
          <p>We use only plant-based, biodegradable cleaning agents when absolutely necessary. Most cleaning is done with pure steam.</p>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">3. Maintain Proper Tire Pressure</h3>
        <p class="mb-4">This simple maintenance task has significant environmental benefits:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Improves fuel efficiency by up to 3%</li>
          <li>Extends tire life, reducing waste</li>
          <li>Reduces CO2 emissions</li>
          <li>Improves vehicle safety and handling</li>
        </ul>
        <p class="mb-4">Check your tire pressure monthly and before long trips.</p>

        <div class="bg-gray-100 rounded-xl p-6 my-6">
          <div class="flex items-center mb-4">
            <div class="bg-emerald-500 rounded-full p-2 mr-4">
              <FaLeaf className="text-white" />
            </div>
            <h3 class="font-bold">Eco Impact</h3>
          </div>
          <p>Properly inflated tires can reduce your carbon footprint by up to 300kg per year.</p>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">4. Practice Eco-Friendly Driving Habits</h3>
        <p class="mb-4">How you drive impacts both your vehicle's maintenance needs and the environment:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Avoid aggressive acceleration and braking</li>
          <li>Maintain steady speeds on highways</li>
          <li>Combine trips to reduce overall mileage</li>
          <li>Remove unnecessary weight from your vehicle</li>
          <li>Turn off your engine when idling for more than 30 seconds</li>
        </ul>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="border border-emerald-200 rounded-xl p-6 bg-gradient-to-b from-white to-emerald-50">
            <h3 class="font-bold text-lg mb-3">Good Driving Habits</h3>
            <ul class="space-y-2">
              <li class="flex items-center text-emerald-600"><FaCheck className="mr-2" /> Smooth acceleration</li>
              <li class="flex items-center text-emerald-600"><FaCheck className="mr-2" /> Steady speeds</li>
              <li class="flex items-center text-emerald-600"><FaCheck className="mr-2" /> Trip combining</li>
            </ul>
          </div>

          <div class="border border-red-200 rounded-xl p-6 bg-gradient-to-b from-white to-red-50">
            <h3 class="font-bold text-lg mb-3">Avoid These</h3>
            <ul class="space-y-2">
              <li class="flex items-center text-red-500"><FaTimes className="mr-2" /> Rapid acceleration</li>
              <li class="flex items-center text-red-500"><FaTimes className="mr-2" /> Hard braking</li>
              <li class="flex items-center text-red-500"><FaTimes className="mr-2" /> Unnecessary idling</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">5. Dispose of Fluids Responsibly</h3>
        <p class="mb-4">Never pour automotive fluids down drains or on the ground:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Recycle motor oil at designated collection points</li>
          <li>Properly dispose of coolant, brake fluid, and transmission fluid</li>
          <li>Recycle batteries at auto parts stores</li>
          <li>Properly dispose of used tires</li>
        </ul>

        <div class="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl p-6 text-white mt-8">
          <h3 class="font-bold text-xl mb-3">Environmental Responsibility</h3>
          <p>At EcoSteam, we properly dispose of all waste and recycle whenever possible. We're committed to a zero-landfill policy.</p>
        </div>

        <p class="mt-8 font-medium">By implementing these eco-friendly maintenance practices, you'll not only reduce your environmental impact but also extend the life of your vehicle and potentially save money on fuel and repairs.</p>
      `,
      image: "eco-maintenance",
      waterSaved: 160,
      carbonReduced: 3.1,
      tags: ["eco tips", "sustainable driving", "maintenance", "green living"]
    }
  ];

  // Simulated comments
  useEffect(() => {
    if (id) {
      // Generate random comments
      const commentAuthors = [
        "Alex Johnson", "Samantha Reed", "Michael Thompson", "Jennifer Lopez",
        "Robert Garcia", "Emily Chen", "David Wilson", "Lisa Taylor"
      ];

      const commentTexts = [
        "This article completely changed how I think about car maintenance!",
        "I've been using EcoSteam for months and the difference is incredible.",
        "The water savings statistics are mind-blowing. We all need to do our part.",
        "Great tips! I'll be implementing these immediately.",
        "I never realized how much water traditional car washes used. Switching to steam ASAP!",
        "The environmental impact section was eye-opening. More people need to read this.",
        "Excellent article with practical advice. Thank you!",
        "I appreciate the eco-friendly alternatives mentioned here. Very helpful."
      ];

      const randomComments = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        author: commentAuthors[i],
        text: commentTexts[i],
        date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`
      }));

      setComments(randomComments);
      setBookmarked(localStorage.getItem(`bookmarked_${id}`) === 'true');
    }
  }, [id]);

  // Reading progress tracking
  useEffect(() => {
    if (id && articleRef.current) {
      // Calculate reading time
      const words = articleRef.current.textContent.split(/\s+/).length;
      const time = Math.ceil(words / 200); // 200 words per minute
      setReadingTime(time);

      // Progress tracking
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const articleHeight = articleRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const progress = Math.min(100, (scrollPosition / (articleHeight - windowHeight)) * 100);
        setProgress(progress);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [id]);

  // If viewing a specific article
  if (id) {
    const article = articles.find(a => a.id === parseInt(id));
    if (!article) return <div className="container mx-auto px-4 py-16">Article not found</div>;

    const handleAddComment = () => {
      if (newComment.trim()) {
        const newCommentObj = {
          id: comments.length + 1,
          author: "You",
          text: newComment,
          date: new Date().toLocaleDateString(),
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
        };

        setComments([...comments, newCommentObj]);
        setNewComment('');
      }
    };

    const toggleBookmark = () => {
      const newBookmarked = !bookmarked;
      setBookmarked(newBookmarked);
      localStorage.setItem(`bookmarked_${id}`, newBookmarked.toString());
    };

    return (<>
      <Navbar/>
      <div className="bg-gray-50 min-h-screen">
        {/* Reading progress bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

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

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 max-w-2xl">
                      {article.title}
                    </h1>
                    <div className="flex items-center text-white/90">
                      <span className="flex items-center mr-4">
                        <FaCalendarAlt className="mr-2" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <FaClock className="mr-2" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={toggleBookmark}
                    className={`p-3 rounded-full ${bookmarked ? 'bg-amber-500 text-white' : 'bg-white/20 text-white'}`}
                  >
                    <FaBookmark />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-12">
              <div className="flex flex-wrap justify-between items-center mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <div className="font-bold">{article.author}</div>
                    <div className="text-gray-600">{article.authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaShareAlt className="mr-2 text-gray-500" />
                  <span className="text-gray-700 font-medium mr-3">Share:</span>
                  <a href="#" className="ml-2 text-gray-500 hover:text-cyan-600">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="ml-3 text-gray-500 hover:text-blue-400">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="ml-3 text-gray-500 hover:text-blue-700">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="ml-3 text-gray-500 hover:text-red-500">
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>

              <div 
                ref={articleRef}
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4">Environmental Impact of This Article</h3>
                <p className="mb-6">By sharing this knowledge, we've collectively saved:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 flex items-center">
                    <FaWater className="text-4xl text-cyan-500 mr-4" />
                    <div>
                      <div className="text-3xl font-bold text-cyan-600">{article.waterSaved}L</div>
                      <div className="text-gray-600">Water saved per reader</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 flex items-center">
                    <FaLeaf className="text-4xl text-emerald-500 mr-4" />
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">{article.carbonReduced}kg</div>
                      <div className="text-gray-600">CO₂ reduced per reader</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4">About the Author</h3>
                <div className="flex items-start">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <div className="font-bold text-lg">{article.author}</div>
                    <div className="text-emerald-600 mb-2">{article.authorRole}</div>
                    <p className="text-gray-700">{article.authorBio}</p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-6">
                  <FaComments className="text-2xl text-emerald-600 mr-3" />
                  <h3 className="text-xl font-bold">Comments ({comments.length})</h3>
                </div>

                <div className="mb-8">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 h-32"
                  ></textarea>
                  <button
                    onClick={handleAddComment}
                    className="mt-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-6 py-2 font-medium"
                  >
                    Post Comment
                  </button>
                </div>

                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="flex items-start">
                      <img 
                        src={comment.avatar} 
                        alt={comment.author} 
                        className="w-12 h-12 rounded-full mr-4" 
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-bold">{comment.author}</div>
                          <div className="text-gray-500 text-sm">{comment.date}</div>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
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
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="h-40 bg-gradient-to-r from-cyan-400 to-emerald-400 relative">
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-emerald-600">
                        {related.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-gray-500">{related.date}</span>
                        <span className="text-xs text-gray-500">{related.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {related.title}
                      </h3>
                      <div className="flex items-center text-emerald-600 text-sm group-hover:text-emerald-800 transition-colors">
                        Read more <FaArrowRight className="ml-1 text-xs" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter/>
    </>
    );
  }

  // Main blog page with all articles
  const filteredArticles = articles.filter(article => 
    (activeCategory === 'all' || article.category === activeCategory) &&
    (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleExpand = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (<>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            EcoSteam <span className="text-emerald-600">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Discover sustainable car care tips and environmental innovations
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map(category => (
                  <option key={category} value={category === 'All' ? 'all' : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.slice(1).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {filteredArticles[0].title}
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  {filteredArticles[0].excerpt}
                </p>
                <div className="flex items-center text-gray-500 mb-6">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-2" />
                    {filteredArticles[0].date}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2" />
                    {filteredArticles[0].readTime}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                  <div className="ml-3">
                    <div className="font-bold">{filteredArticles[0].author}</div>
                    <div className="text-gray-600">{filteredArticles[0].authorRole}</div>
                  </div>
                </div>
                <Link 
                  to={`/blog/${filteredArticles[0].id}`}
                  className="mt-8 inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Read Full Article <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 min-h-64 lg:min-h-full flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <FaLeaf className="text-5xl mx-auto mb-4" />
                  <p className="text-2xl font-bold max-w-md mx-auto">
                    Sustainable Insights for Eco-Conscious Drivers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {filteredArticles
            .slice(1) // Skip featured article
            .map(article => (
              <motion.div
                key={article.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-cyan-500 to-emerald-500 relative">
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-emerald-600">
                    {article.category}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {article.readTime}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaCalendarAlt className="mr-2" />
                      {article.date}
                    </div>
                    <button 
                      onClick={() => toggleExpand(article.id)}
                      className="text-emerald-600"
                    >
                      {expandedArticle === article.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>

                  <AnimatePresence>
                    {expandedArticle === article.id ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                          <div className="ml-3">
                            <div className="font-medium">{article.author}</div>
                            <div className="text-gray-500 text-sm">{article.authorRole}</div>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${article.id}`}
                          className="inline-flex items-center text-emerald-600 font-medium"
                        >
                          Continue reading <FaArrowRight className="ml-2 text-sm" />
                        </Link>
                      </motion.div>
                    ) : (
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    )}
                  </AnimatePresence>

                  <Link 
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center mt-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl px-4 py-2 text-sm font-medium"
                  >
                    Read Article
                  </Link>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">No articles found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl p-8 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Dash Community
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get the latest sustainability tips, exclusive offers, and environmental impact reports delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow border border-white/30 bg-white/20 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-white/70"
            />
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </div>
    <SimpleFooter/>
  </>
  );
};

export default BlogPage;