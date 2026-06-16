import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import Vision from './Pages/Vision';
import Testimonial from './Pages/Testimonial';

export default function App() {
  return (
    <>
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