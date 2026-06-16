import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Mission() {
  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'var(--royal-blue)', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '6px solid var(--saffron)' }}>
        <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ fontWeight: 900, fontSize: '45px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
          Our Mission
        </motion.h1>
        <Link to="/" style={{ color: 'var(--saffron)', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px', fontSize: '16px', transition: '0.3s' }}>
          <i className="fa fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} style={{ background: 'white', padding: '50px', margin: '-40px auto 0', borderRadius: '10px', maxWidth: '900px', borderTop: '6px solid var(--emerald-green)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}><strong>To pioneer an integrated, grassroots ecosystem that dismantles the root causes of rural poverty and ecological degradation.</strong></p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>We commit to empowering smallholder farmers, youth, and children across underserved regions by delivering localized infrastructure, modern educational resources, and climate-smart agricultural training.</p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>By seamlessly linking regenerative farming techniques with zero-waste community management, we transform village refuse into organic field nutrients, thereby boosting crop yields, increasing household incomes, and reversing environmental damage. We channel these economic gains back into the community by establishing digitally-equipped, safe, and nurturing learning environments for every rural child.</p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>Through these intersectional initiatives, we aim to eliminate systemic dependencies, replace traditional charity with sustainable self-reliance, and foster equitable, thriving rural societies where future generations can achieve economic dignity and live in harmony with nature.</p>
      </motion.div>
    </div>
  );
}