import '../App.css';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import ImpactTracker from '../components/ImpactTracker';
import ServiceAreas from '../components/ServiceAreas';
import BlogPreview from '../components/BlogPreview';
import Navbar from '../components/Navbar'

function LandingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    
      <div className="font-sans text-gray-800 bg-white">
          <Navbar/>
              <Hero onBookNow={() => setBookingOpen(true)} />
              <ImpactTracker />
              <HowItWorks />
              <Benefits />
              <Pricing onBookNow={() => setBookingOpen(true)} />
              <Testimonials />
              <ServiceAreas />
              <BlogPreview />
              <Faq />
              <Contact />
              <Booking isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
              <Footer />
      </div>
    
  );
}

export default LandingPage;