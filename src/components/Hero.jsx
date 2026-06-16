import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section 
      id="who-we-are" 
      style={{ 
        background: "linear-gradient(rgba(10, 54, 157, 0.85), rgba(46, 125, 50, 0.75)), url('/images/background.jpg') center/cover fixed", 
        color: 'white', 
        padding: '160px 20px', 
        textAlign: 'center', 
        borderBottom: '5px solid var(--saffron)' 
      }}
    >
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '50px', fontWeight: 800 }}>
          EMPOWERING LIVES. <span style={{ color: 'var(--saffron)' }}>RESTORING HOPE.</span>
        </h2>
        <p style={{ fontSize: '20px', maxWidth: '900px', margin: '20px auto', lineHeight: '1.6' }}>
          Founded in 2005 and rooted in Swami Vivekananda's timeless vision: service to humanity is the truest form of worship. We bridge the gap between resources and marginalized populations.
        </p>
      </motion.div>
    </section>
  );
}