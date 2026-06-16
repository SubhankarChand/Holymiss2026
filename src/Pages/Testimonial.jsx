import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Testimonial() {
  const testimonials = [
    { 
      quote: "The vocational training programs have given the women in our village financial independence and dignity. We are forever grateful to Holy Mission.", 
      author: "- Community Beneficiary, Nabapally", 
      color: "var(--saffron)",
      icon: "fa-star"
    },
    { 
      quote: "Thanks to the scholarship funds and smart classrooms, my children can dream of a future beyond the fields. Education has truly broken the cycle.", 
      author: "- Local Farmer, West Bengal", 
      color: "var(--royal-blue)",
      icon: "fa-graduation-cap"
    },
    { 
      quote: "The zero-waste management initiative has completely transformed our village. It is cleaner, safer, and we are creating our own organic fertilizers.", 
      author: "- Village Panchayat Member", 
      color: "var(--emerald-green)",
      icon: "fa-recycle"
    },
    { 
      quote: "Holy Mission's health camps have been a lifeline for our community. Access to quality healthcare has saved countless lives in our village.", 
      author: "- Local Health Worker", 
      color: "#e74c3c",
      icon: "fa-heart"
    },
    { 
      quote: "The tree plantation drives have brought back greenery to our region. We are seeing birds and wildlife return to our village.", 
      author: "- Environmental Activist", 
      color: "#27ae60",
      icon: "fa-tree"
    },
    { 
      quote: "Women's empowerment programs have given us a voice in our community. We are now leaders and decision-makers in our own right.", 
      author: "- Women's Group Leader", 
      color: "#8e44ad",
      icon: "fa-female"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'var(--saffron)', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '6px solid var(--royal-blue)' }}>
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          style={{ fontWeight: 900, fontSize: '45px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}
        >
          Voices of Impact
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: '18px', marginTop: '10px' }}
        >
          What the community says about Holy Mission
        </motion.p>
        <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px', fontSize: '16px', backgroundColor: 'var(--royal-blue)', padding: '10px 20px', borderRadius: '5px', transition: '0.3s' }}>
          <i className="fa fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ translateY: -10, boxShadow: '0 15px 35px rgba(0,0,0,0.15)' }}
              style={{ 
                background: 'white', 
                padding: '35px', 
                borderRadius: '12px', 
                borderTop: `6px solid ${test.color}`, 
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <i className={`fa ${test.icon}`} style={{ fontSize: '30px', color: test.color, opacity: 0.7, marginRight: '15px' }}></i>
                <i className="fa fa-quote-left" style={{ fontSize: '30px', color: test.color, opacity: 0.4 }}></i>
              </div>
              <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: '1.8', color: '#555', flex: 1 }}>
                "{test.quote}"
              </p>
              <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <p style={{ fontWeight: 'bold', color: 'var(--royal-blue)', textTransform: 'uppercase', fontSize: '14px', margin: 0 }}>
                  {test.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}