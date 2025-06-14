import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminPanel from './admin/AdminPanel';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import ServicePage from './pages/ServicePage'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/*" element={<AdminPanel />} />
       
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogPage/>}/>
        <Route path="/pricing" element = {<PricingPage/>}/>
        <Route path="/services" element = {<ServicePage/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
        
        
      </Routes>
    </Router>
  );
}