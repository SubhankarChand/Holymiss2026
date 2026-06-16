import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import Vision from './Pages/Vision';
import Testimonial from './Pages/Testimonial';
import ScrollToTopHash from './components/ScrollToTopHash';

export default function App() {
  return (
    <>
      {/* Utility to handle smooth scroll positions across routes */}
      <ScrollToTopHash />
      
      {/* Shared Layout Structure across all page changes */}
      <TopBar />
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </>
  );
}