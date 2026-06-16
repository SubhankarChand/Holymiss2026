import React from 'react';
import Hero from '../components/Hero';
import CorePrograms from '../components/CorePrograms';
import MapContact from '../components/MapContact';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';

export default function Home() {
  const galleryImages = [
    { num: 1, tag: "Smart Classrooms" },
    { num: 2, tag: "Women Empowerment" },
    { num: 3, tag: "Natural Farming" },
    { num: 4, tag: "Eco Restoration" },
    { num: 5, tag: "Waste Management" },
    { num: 6, tag: "Community Health" }
  ];
  
  const extendedTrack = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <>
      <Hero />
      <CorePrograms />

      {/* ACHIEVEMENTS */}
      <section id="achievements" style={{ backgroundColor: 'var(--royal-blue)', color: 'white', padding: '90px 0', textAlign: 'center', borderTop: '6px solid var(--saffron)', borderBottom: '6px solid var(--saffron)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 25px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
            {siteData.stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
                style={{ padding: '20px' }}
              >
                <h2 style={{ fontSize: '55px', color: 'var(--saffron)', fontWeight: '900', margin: '0 0 10px', textShadow: '2px 4px 10px rgba(0,0,0,0.3)' }}>
                  {stat.prefix || ''}{stat.count}{stat.suffix || ''}
                </h2>
                <p style={{ fontSize: '15px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#e0e0e0', margin: 0 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE & CREDENTIALS */}
      <section id="where-we-are" style={{ padding: '100px 0', backgroundColor: 'var(--light-bg)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title">Governance & Credentials</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '50px' }}>
            <div style={{ flex: '1 1 450px', background: 'white', padding: '45px 40px', borderRadius: '12px', borderTop: '6px solid var(--royal-blue)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--royal-blue)', fontWeight: '800', fontSize: '24px', marginTop: 0, marginBottom: '20px' }}>Organizational Structure</h3>
              <p style={{ fontSize: '15.5px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                The organization is managed by a governing body with <strong style={{ color: 'var(--saffron)' }}>7 experts</strong> across program and finance to guide the entire functioning of the organization.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: '1.8', color: '#555', marginBottom: '25px' }}>
                <strong>Governance:</strong> We maintain a rigorous finance & program planning system. Staff capacity building, orientation, and performance appraisal tracking maximize our community impact across West Bengal.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ color: 'var(--emerald-green)', fontWeight: '700', fontSize: '15px' }}><i className="fa fa-check-circle" style={{ marginRight: '10px', color: 'var(--saffron)' }}></i> Highest Accountability Standards</span>
                <span style={{ color: 'var(--emerald-green)', fontWeight: '700', fontSize: '15px' }}><i className="fa fa-check-circle" style={{ marginRight: '10px', color: 'var(--saffron)' }}></i> Radically Transparent Milestone Mapping</span>
              </div>
            </div>

            <div style={{ flex: '1 1 500px', background: 'white', borderRadius: '12px', padding: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '4px solid var(--saffron)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: 'var(--saffron)', color: 'white' }}>
                  <tr>
                    <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '15px', textTransform: 'uppercase', fontWeight: '700' }}>Registration Authority</th>
                    <th style={{ padding: '18px 20px', textAlign: 'left', fontSize: '15px', textTransform: 'uppercase', fontWeight: '700' }}>Identification Number</th>
                  </tr>
                </thead>
                <tbody>
                  {siteData.credentials.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: idx % 2 === 0 ? '#fff' : '#fcfdfc' }}>
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#333', fontSize: '14px' }}>{item.authority}</td>
                      <td style={{ padding: '14px 20px', color: '#666', fontSize: '14px', fontFamily: 'monospace' }}>{item.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: '100px 0', backgroundColor: 'white', overflow: 'hidden' }}>
        <h2 className="section-title">Ecosystem Gallery</h2>
        <p style={{ textAlign: 'center', color: '#777', margin: '-30px 0 50px' }}>Moving your cursor over an image smoothly pauses the gallery loop stream</p>
        
        <div className="carousel-viewport-wrapper">
          <div className="infinite-carousel-track">
            {extendedTrack.map((slide, displayIndex) => (
              <div key={displayIndex} style={{ width: '350px', padding: '0 15px', flexShrink: 0, boxSizing: 'border-box' }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '4px solid white', height: '270px' }}>
                  <img 
                    src={`/images/gallery${slide.num}.png`} 
                    alt={slide.tag} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { 
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/350x270/0A369D/FFFFFF?text=${slide.tag}`; 
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px 15px', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', color: 'white', fontWeight: '700', fontSize: '14px', letterSpacing: '0.5px' }}>
                    {slide.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapContact />

      {/* ISOLATED COPYRIGHT BOTTOM BAR */}
      <footer style={{ backgroundColor: '#0B132B', color: 'rgba(255,255,255,0.6)', padding: '25px 0', textAlign: 'center', borderTop: '4px solid var(--saffron)', fontSize: '14px', letterSpacing: '0.5px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          &copy; 2026 Holy Mission for Children’s Welfare and Rural Development. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}