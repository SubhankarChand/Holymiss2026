import React from 'react';
import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 5%', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      position: 'relative',
      zIndex: 1001
    }}>
      <motion.img 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        src="/images/logo.png" 
        alt="Holymission Logo" 
        style={{ maxHeight: '85px', width: 'auto' }}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150x80?text=Your+Logo' }}
      />
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ color: 'var(--saffron)', fontWeight: 900, margin: 0, fontSize: '38px', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Holy Mission
        </h1>
        <p style={{ color: 'var(--royal-blue)', fontWeight: 800, margin: 0, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
          Children’s Welfare & Rural Development
        </p>
      </motion.div>
      
      <motion.img 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        src="/images/swami.png" 
        alt="Swami Vivekananda" 
        style={{ maxHeight: '85px', width: 'auto' }}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150x80?text=Swami+Ji' }}
      />
    </div>
  );
}