import React from 'react';
import { motion } from 'framer-motion';

export default function CorePrograms() {
  const programs = [
    {
      icon: "fa-graduation-cap",
      title: "Children's Welfare",
      desc: "Smart Classrooms bringing digital tools to villages. Scholarship funds to prevent dropouts and holistic healthcare.",
      borderColor: "var(--royal-blue)"
    },
    {
      icon: "fa-heartbeat",
      title: "Health & Women",
      desc: "Free medical camps and fostering financial independence through vocational skill development and women's empowerment.",
      borderColor: "var(--saffron)"
    },
    {
      icon: "fa-leaf",
      title: "Farmers & Agriculture",
      desc: "Fair markets, yield optimization, climate change adaptation, and financial literacy for smallholder farmers.",
      borderColor: "var(--emerald-green)"
    },
    {
      icon: "fa-recycle",
      title: "Waste Management",
      desc: "Zero-waste villages, upcycling plastic hubs, and organic composting arrays to create bio-fertilizers.",
      borderColor: "var(--royal-blue)"
    }
  ];

  return (
    <section id="what-we-do" style={{ padding: '90px 10%' }}>
      <h2 className="section-title">Our Ecosystem Model</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        
        {programs.map((prog, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ translateY: -10, boxShadow: '0 15px 30px rgba(255, 143, 28, 0.3)', borderTop: '5px solid var(--saffron)' }} 
            style={{ 
              background: 'white', 
              padding: '35px', 
              borderRadius: '8px', 
              borderTop: `5px solid ${prog.borderColor}`,
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'border 0.3s ease'
            }}
          >
            <i className={`fa ${prog.icon}`} style={{ fontSize: '45px', color: 'var(--saffron)', marginBottom: '20px' }}></i>
            <h4 style={{ color: prog.borderColor, fontWeight: 'bold', fontSize: '20px' }}>{prog.title}</h4>
            <p style={{ color: '#555', lineHeight: '1.6' }}>{prog.desc}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}