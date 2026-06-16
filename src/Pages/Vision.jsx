import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Vision() {
  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'var(--emerald-green)', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '6px solid var(--saffron)' }}>
        <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ fontWeight: 900, fontSize: '45px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
          Our Vision
        </motion.h1>
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px', fontSize: '16px', transition: '0.3s', backgroundColor: 'var(--saffron)', padding: '10px 20px', borderRadius: '5px' }}>
          <i className="fa fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} style={{ background: 'white', padding: '50px', margin: '-40px auto 0', borderRadius: '10px', maxWidth: '900px', borderTop: '6px solid var(--royal-blue)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}><strong>We envision a world where rural landscapes are safe, self-reliant, and ecologically vibrant ecosystems—free from the shadows of exploitation and poverty.</strong></p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>We see a future where smallholder farmers cultivate thriving, resilient lands with pride and financial security, completely insulated from economic distress. In this future, every village operates on clean, zero-waste principles, harmonizing environmental health with community well-being.</p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>Most importantly, we look forward to a society where every child is fiercely protected by their community, cherished in a safe home, and given access to quality education, permanently erasing the threats of child labor, trafficking, and neglect.</p>
      </motion.div>
    </div>
  );
}