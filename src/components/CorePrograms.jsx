import React from 'react';
import { motion } from 'framer-motion';

export default function CorePrograms() {
  const programs = [
    { 
      icon: 'fa-graduation-cap', 
      title: "Children's Welfare", 
      desc: "Smart Classrooms bringing digital tools to villages. Scholarship funds to prevent dropouts and holistic healthcare spaces.",
      color: '#FF8F1C'
    },
    { 
      icon: 'fa-heartbeat', 
      title: 'Health & Women', 
      desc: "Free medical camps and fostering financial independence through vocational skill development and women's empowerment initiatives.",
      color: '#0A369D'
    },
    { 
      icon: 'fa-leaf', 
      title: 'Farmers & Agriculture', 
      desc: "Fair markets, yield optimization, climate change adaptation, and financial literacy tailored strictly for smallholder farmers.",
      color: '#2E7D32'
    },
    { 
      icon: 'fa-recycle', 
      title: 'Waste Management', 
      desc: "Zero-waste villages, upcycling plastic hubs, and vast organic composting arrays to create sustainable bio-fertilizers.",
      color: '#FF8F1C'
    }
  ];

  return (
    <section id="how-we-are" style={{ padding: '90px 0', backgroundColor: 'var(--light-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Ecosystem Model
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ 
            textAlign: 'center', 
            color: '#777', 
            marginBottom: '60px', 
            fontSize: '18px', 
            maxWidth: '800px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            lineHeight: '1.8'
          }}
        >
          Our unique approach seamlessly connects regenerative agriculture, zero-waste management, and holistic child education into a single, self-sustaining loop.
        </motion.p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                translateY: -20,
                scale: 1.03,
                boxShadow: '0 25px 50px rgba(255,143,28,0.35)',
                borderTopColor: '#FF8F1C',
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'white',
                padding: '35px 25px',
                borderRadius: '12px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                borderTop: `6px solid ${prog.color}`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, ${prog.color} 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }}
              />
              
              <motion.i 
                className={`fa ${prog.icon}`} 
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                style={{ 
                  fontSize: '55px', 
                  color: prog.color, 
                  marginBottom: '25px', 
                  transition: 'transform 0.4s',
                  position: 'relative',
                  zIndex: 1
                }}
              />
              <h4 style={{ 
                fontWeight: 800, 
                color: 'var(--royal-blue)', 
                fontSize: '22px', 
                textTransform: 'uppercase', 
                marginBottom: '15px',
                position: 'relative',
                zIndex: 1
              }}>{prog.title}</h4>
              <p style={{ 
                color: '#555', 
                fontSize: '15px', 
                flexGrow: 1,
                position: 'relative',
                zIndex: 1,
                lineHeight: '1.6'
              }}>{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}