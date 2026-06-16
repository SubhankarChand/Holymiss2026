import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Vision() {
  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'var(--emerald-green)', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '6px solid var(--saffron)' }}>
        <motion.h1 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          style={{ fontWeight: 900, fontSize: '45px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}
        >
          Our Vision
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: '18px', marginTop: '15px', opacity: 0.9 }}
        >
          A World of Peace, Justice, and Equality for All
        </motion.p>
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px', fontSize: '16px', transition: '0.3s', backgroundColor: 'var(--saffron)', padding: '10px 20px', borderRadius: '5px' }}>
          <i className="fa fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }} 
        style={{ background: 'white', padding: '50px', margin: '-40px auto 0', borderRadius: '10px', maxWidth: '900px', borderTop: '6px solid var(--royal-blue)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}
      >
        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ color: 'var(--royal-blue)', fontSize: '24px', marginBottom: '15px' }}>Our Vision for Tomorrow</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
            We envision a society where peace, justice, and equality prevail. In this harmonious world, every individual—irrespective of caste, creed, or religion—thrives free from exploitation, deprivation, and discrimination.
          </p>
        </div>

        <div style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#f0f7ff', borderRadius: '8px', borderLeft: '4px solid var(--royal-blue)' }}>
          <h3 style={{ color: 'var(--royal-blue)', fontSize: '20px', marginBottom: '10px' }}>
            <i className="fa fa-leaf" style={{ marginRight: '10px', color: 'var(--emerald-green)' }}></i>
            Ecological Harmony
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            We envision a world where rural landscapes are transformed into secure, self-reliant, and ecologically vibrant ecosystems where no individual is left vulnerable to exploitation or poverty.
          </p>
        </div>

        <div style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#f0f7ff', borderRadius: '8px', borderLeft: '4px solid var(--emerald-green)' }}>
          <h3 style={{ color: 'var(--emerald-green)', fontSize: '20px', marginBottom: '10px' }}>
            <i className="fa fa-users" style={{ marginRight: '10px', color: 'var(--royal-blue)' }}></i>
            Empowered Communities
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            We see a future where smallholder farmers cultivate resilient, biodiverse lands with deep pride, achieving total financial security and absolute freedom from economic distress. In this future, every village operates on advanced, circular zero-waste principles, seamlessly harmonizing environmental health with community well-being.
          </p>
        </div>

        <div style={{ padding: '25px', backgroundColor: '#f0f7ff', borderRadius: '8px', borderLeft: '4px solid var(--saffron)' }}>
          <h3 style={{ color: 'var(--saffron)', fontSize: '20px', marginBottom: '10px' }}>
            <i className="fa fa-child" style={{ marginRight: '10px', color: 'var(--royal-blue)' }}></i>
            Protected Children
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            Most importantly, we look forward to a society where the systemic vulnerabilities that fuel child labor and child trafficking are entirely eradicated. We look forward to a reality where every child is fiercely protected by their community, cherished in a safe home, and granted uncompromised access to high-quality education, permanently enabling future generations to thrive with dignity and peace.
          </p>
        </div>
      </motion.div>
    </div>
  );
}