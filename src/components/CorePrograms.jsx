import React from 'react';
import { motion } from 'framer-motion';

export default function CorePrograms() {
  const programs = [
    { icon: 'fa-graduation-cap', title: "Children's Welfare", desc: "Smart Classrooms bringing digital tools to villages. Scholarship funds to prevent dropouts and holistic healthcare spaces.", color: '#0A369D' },
    { icon: 'fa-heartbeat', title: 'Health & Women', desc: "Free medical camps and fostering financial independence through vocational skill development and women's empowerment initiatives.", color: '#FF8F1C' },
    { icon: 'fa-leaf', title: 'Farmers & Agriculture', desc: "Fair markets, yield optimization, climate change adaptation, and financial literacy tailored strictly for smallholder farmers.", color: '#2E7D32' },
    { icon: 'fa-recycle', title: 'Waste Management', desc: "Zero-waste villages, upcycling plastic hubs, and vast organic composting arrays to create sustainable bio-fertilizers.", color: '#FF8F1C' }
  ];

  return (
    <section id="what-we-do" style={{ padding: '100px 0', backgroundColor: 'var(--light-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 className="section-title">Our Ecosystem Model</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '16px', maxWidth: '750px', margin: '0 auto 60px', lineHeight: '1.8' }}>
          Our unique approach seamlessly connects regenerative agriculture, zero-waste management, and holistic child education into a single, self-sustaining loop.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                boxShadow: '0 20px 40px rgba(255,143,28,0.25)',
                borderColor: 'var(--saffron)'
              }}
              style={{
                background: 'white', padding: '40px 30px', borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)', borderTop: `6px solid ${prog.color}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                cursor: 'pointer', transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ width: '90px', height: '90px', backgroundColor: `${prog.color}10`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', transition: '0.3s' }}>
                <i className={`fa ${prog.icon}`} style={{ fontSize: '38px', color: prog.color }}></i>
              </div>
              <h4 style={{ fontWeight: '800', color: 'var(--royal-blue)', fontSize: '20px', margin: '0 0 15px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{prog.title}</h4>
              <p style={{ color: '#666', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}