// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCar, FaBars, FaTimes, FaPhone, FaCalendarAlt, FaLeaf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Update active link based on current route
  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    setActiveLink(path);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Services', path: '/services', key: 'services' },
    { name: 'Pricing', path: '/pricing', key: 'pricing' },
    { name: 'Blog', path: '/blog', key: 'blog' },
    { name: 'Contact', path: '/contact', key: 'contact' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Handle smooth scrolling for same-page links
  const handleScrollTo = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <motion.div 
                  className="bg-emerald-500 p-2 rounded-lg mr-3"
                  animate={{ rotate: scrolled ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCar className="text-white text-xl" />
                </motion.div>
                <div className="text-xl font-bold">
                  Dash<span className="text-emerald-500">Steam</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-1 py-2 font-medium transition-colors ${
                    activeLink === item.key 
                      ? 'text-emerald-500' 
                      : 'text-gray-700 hover:text-emerald-500'
                  }`}
                  onClick={() => setActiveLink(item.key)}
                >
                  {item.name}
                  {activeLink === item.key && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center text-gray-700 hover:text-emerald-500"
                whileHover={{ scale: 1.05 }}
              >
                <FaPhone className="mr-2" />
              </motion.a>

              <motion.button
                onClick={() => handleScrollTo('booking')}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-5 py-2 rounded-full font-bold flex items-center hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCalendarAlt className="mr-2" /> Book Now
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 bg-white z-40 pt-20 md:hidden"
          >
            <div className="container mx-auto px-4 h-full">
              <motion.div 
                className="flex flex-col h-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex-1">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.key}
                      variants={itemVariants}
                    >
                      <Link
                        to={item.path}
                        className={`block text-2xl font-bold py-4 px-2 ${
                          activeLink === item.key 
                            ? 'text-emerald-500' 
                            : 'text-gray-800'
                        }`}
                        onClick={() => {
                          setActiveLink(item.key);
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="py-8 border-t border-gray-100"
                  variants={itemVariants}
                >
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center text-gray-700 hover:text-emerald-500 py-3 text-xl"
                  >
                    <FaPhone className="mr-3" /> (123) 456-7890
                  </a>

                  <motion.button
                    onClick={() => {
                      handleScrollTo('booking');
                      setIsOpen(false);
                    }}
                    className="mt-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center hover:opacity-90 transition-opacity text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCalendarAlt className="mr-2" /> Book Appointment
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;