import React from 'react';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';

export default function MapContact() {
  return (
    <section id="reaches-us" style={{ padding: '90px 10%', backgroundColor: 'var(--light-bg)' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Reaches Us
      </motion.h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        
        {/* Contact Info Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 400px', background: 'white', padding: '40px', borderRadius: '8px', borderTop: '5px solid var(--saffron)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
             <i className="fa fa-envelope-open" style={{ fontSize: '50px', color: 'var(--saffron)' }}></i>
          </div>
          <h3 style={{ color: 'var(--royal-blue)', fontWeight: 900, marginBottom: '25px', textAlign: 'center', textTransform: 'uppercase' }}>Send A Message</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
            <input type="text" placeholder="Your Full Name" style={{ padding: '15px', borderRadius: '5px', border: '2px solid #eee', width: '100%', boxSizing: 'border-box' }} />
            <input type="email" placeholder="Your Email Address" style={{ padding: '15px', borderRadius: '5px', border: '2px solid #eee', width: '100%', boxSizing: 'border-box' }} />
            <textarea placeholder="How can we help you?" rows="4" style={{ padding: '15px', borderRadius: '5px', border: '2px solid #eee', width: '100%', boxSizing: 'border-box' }}></textarea>
            <button style={{ backgroundColor: 'var(--saffron)', color: 'white', border: 'none', padding: '15px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '5px', cursor: 'pointer', transition: '0.3s' }}>Drop in Mailbox <i className="fa fa-paper-plane" style={{ marginLeft: '8px' }}></i></button>
          </div>
          
          <hr style={{ margin: '25px 0', borderColor: '#eee' }} />

          <p style={{ margin: '10px 0', color: '#333' }}><i className="fa fa-map-marker" style={{ color: 'var(--saffron)', width: '30px', fontSize: '20px' }}></i> {siteData.organization.address1}</p>
          <p style={{ margin: '10px 0', color: '#333' }}><i className="fa fa-envelope" style={{ color: 'var(--saffron)', width: '30px', fontSize: '20px' }}></i> {siteData.organization.email}</p>
          <p style={{ margin: '10px 0', color: '#333' }}><i className="fa fa-phone" style={{ color: 'var(--saffron)', width: '30px', fontSize: '20px' }}></i> {siteData.organization.phone1} | {siteData.organization.phone2}</p>
        </motion.div>

        {/* Verified Google Map Embed - Centered on Sister Nivedita Road, Nabapally */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 500px' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.122421312345!2d88.363889!3d22.572639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjUiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
            style={{ width: '100%', height: '100%', minHeight: '450px', border: '5px solid var(--emerald-green)', borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}