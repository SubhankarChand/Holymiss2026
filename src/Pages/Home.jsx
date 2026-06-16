import React from 'react';
import Hero from '../components/Hero';
import CorePrograms from '../components/CorePrograms';
import MapContact from '../components/MapContact';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';

export default function Home() {
  return (
    <>
      <Hero />
      
      <CorePrograms />

      {/* ACHIEVEMENTS - With bounce animations and saffron glow */}
      <section id="achievements" style={{ backgroundColor: 'var(--royal-blue)', color: 'white', padding: '80px 0', textAlign: 'center', borderTop: '6px solid var(--saffron)', borderBottom: '6px solid var(--saffron)' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontWeight: 900, marginBottom: '50px', textTransform: 'uppercase', fontSize: '40px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Measurable Impact
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {siteData.stats.map((stat, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.3 }
                }}
                className="stat-item"
              >
                <h2 style={{ 
                  fontSize: '60px', 
                  color: 'var(--saffron)', 
                  fontWeight: 900, 
                  margin: 0,
                  textShadow: '3px 3px 6px rgba(0,0,0,0.4)'
                }}>
                  {stat.prefix || ''}{stat.count}{stat.suffix || ''}
                </h2>
                <p style={{ 
                  marginTop: '15px', 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* GOVERNANCE & CREDENTIALS - With card animations and hover effects */}
      <section id="where-we-are" style={{ padding: '90px 0', backgroundColor: 'var(--light-bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Governance & Credentials
          </motion.h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'stretch' }}>
            {/* Left column - Organizational Structure with hover effect */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              whileHover={{ 
                translateY: -10,
                boxShadow: '0 20px 40px rgba(10,54,157,0.2)',
                transition: { duration: 0.3 }
              }}
              style={{ 
                flex: '1 1 400px', 
                background: 'white', 
                padding: '40px', 
                borderRadius: '10px', 
                borderTop: '6px solid var(--royal-blue)', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ color: 'var(--royal-blue)', fontWeight: 900, fontSize: '26px', marginTop: 0 }}>
                <i className="fa fa-building" style={{ marginRight: '10px', color: 'var(--saffron)' }}></i>
                Organizational Structure
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                The organization is managed by a governing body with <strong style={{ color: 'var(--saffron)' }}>7 experts</strong> across program and finance to guide the entire functioning of the organization.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                <strong>Governance:</strong> We have a rigorous finance & program planning system. Staff capacity building, performance appraisals, and continuous monitoring ensure absolute accountability towards the organization and the people we serve.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  style={{ color: 'var(--saffron)', fontWeight: 800, fontSize: '18px', marginBottom: '10px' }}
                >
                  <i className="fa fa-check-circle" style={{ marginRight: '10px' }}></i> Highest standards of financial accountability.
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  style={{ color: 'var(--saffron)', fontWeight: 800, fontSize: '18px' }}
                >
                  <i className="fa fa-check-circle" style={{ marginRight: '10px' }}></i> Radically transparent reporting.
                </motion.li>
              </ul>
            </motion.div>

            {/* Right column - Credentials Table with hover glow */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              whileHover={{ 
                boxShadow: '0 20px 40px rgba(255,143,28,0.3)',
                borderColor: 'var(--saffron)',
                transition: { duration: 0.3 }
              }}
              style={{ 
                flex: '1 1 500px', 
                background: 'white', 
                borderRadius: '10px', 
                padding: '5px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)', 
                border: '4px solid var(--saffron)', 
                overflow: 'auto',
                transition: 'all 0.3s ease'
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: 'var(--saffron)', color: 'white' }}>
                  <tr>
                    <th style={{ padding: '15px', textAlign: 'left', border: 'none', fontSize: '16px' }}>Registration Authority</th>
                    <th style={{ padding: '15px', textAlign: 'left', border: 'none', fontSize: '16px' }}>Identification Number</th>
                  </tr>
                </thead>
                <tbody>
                  {siteData.credentials.map((item, idx) => (
                    <motion.tr 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ 
                        backgroundColor: '#f0f7ff',
                        transition: { duration: 0.2 }
                      }}
                      style={{ borderBottom: '1px solid #eee' }}
                    >
                      <td style={{ padding: '12px 15px', fontWeight: 'bold', color: '#333' }}>{item.authority}</td>
                      <td style={{ padding: '12px 15px', color: '#555' }}>{item.id}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION - With zoom animations and glow effects */}
      <section id="gallery" style={{ padding: '90px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Ecosystem Gallery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', color: '#777', marginBottom: '50px', fontSize: '16px' }}
          >
            Highlights from our community outreach, education programs, and grassroots empowerment initiatives.
          </motion.p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[1,2,3,4,5,6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: num * 0.1,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 20px 40px rgba(255,143,28,0.4)',
                  borderColor: 'var(--saffron)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  border: '5px solid white',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
              >
                <motion.img 
                  src={`/images/gallery${num}.png`} 
                  alt={`Gallery ${num}`} 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    width: '100%', 
                    height: '280px', 
                    objectFit: 'cover', 
                    display: 'block' 
                  }}
                  onError={(e) => { 
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x300/0A369D/FFFFFF?text=Gallery+${num}`; 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}