import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Testimonial() {
  const testimonials = [
    { quote: "The vocational training programs have given the women in our village financial independence and dignity. We are forever grateful to Holy Mission.", author: "- Community Beneficiary, Nabapally", color: "var(--saffron)" },
    { quote: "Thanks to the scholarship funds and smart classrooms, my children can dream of a future beyond the fields. Education has truly broken the cycle.", author: "- Local Farmer, West Bengal", color: "var(--royal-blue)" },
    { quote: "The zero-waste management initiative has completely transformed our village. It is cleaner, safer, and we are creating our own organic fertilizers.", author: "- Village Panchayat Member", color: "var(--emerald-green)" }
  ];

  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'var(--saffron)', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '6px solid var(--royal-blue)' }}>
        <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ fontWeight: 900, fontSize: '45px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
          Voices of Impact
        </motion.h1>
        <p style={{ fontSize: '18px', marginTop: '10px' }}>What the community says about Holy Mission</p>
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px', fontSize: '16px', backgroundColor: 'var(--royal-blue)', padding: '10px 20px', borderRadius: '5px' }}>
          <i className="fa fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {testimonials.map((test, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ translateY: -10, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
            style={{ background: 'white', padding: '40px', borderRadius: '10px', borderTop: `6px solid ${test.color}`, boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
          >
            <i className="fa fa-quote-left" style={{ fontSize: '40px', color: test.color, opacity: 0.5, marginBottom: '20px' }}></i>
            <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: '1.8', color: '#555' }}>"{test.quote}"</p>
            <p style={{ fontWeight: 'bold', color: 'var(--royal-blue)', marginTop: '20px', textTransform: 'uppercase' }}>{test.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}