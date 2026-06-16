import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Mission() {
  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'var(--royal-blue)', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '6px solid var(--saffron)' }}>
        <motion.h1 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.6 }}
          style={{ fontWeight: 900, fontSize: '45px', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}
        >
          Our Mission
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: '18px', marginTop: '15px', opacity: 0.9 }}
        >
          Building Self-Reliant Communities Through Sustainable Development
        </motion.p>
        <Link to="/" style={{ color: 'var(--saffron)', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px', fontSize: '16px', transition: '0.3s' }}>
          <i className="fa fa-arrow-left"></i> Return to Home
        </Link>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }} 
        style={{ background: 'white', padding: '50px', margin: '-40px auto 0', borderRadius: '10px', maxWidth: '900px', borderTop: '6px solid var(--emerald-green)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', position: 'relative', zIndex: 10 }}
      >
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: 'var(--royal-blue)', fontSize: '24px', marginBottom: '15px' }}>Our Core Mission</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
            Our aims to build self-reliant communities by integrating sustainable livelihoods under community leadership.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--emerald-green)', fontSize: '20px', marginBottom: '10px' }}>Health & Well-being</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            Our mission is to improve community well-being and health equity by delivering integrated, stigma-free treatment and prevention for chronic and infectious diseases and health for all.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--emerald-green)', fontSize: '20px', marginBottom: '10px' }}>Environmental Conservation</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            Our mission is to protect endangered wildlife habitats through conservation efforts, promoting biodiversity and ecological balance.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: 'var(--emerald-green)', fontSize: '20px', marginBottom: '10px' }}>Child Rights & Gender Equality</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            Our aim to promote the Child Rights, Women's protection & Gender Equality and strives to bring them into social dignity.
          </p>
        </div>

        <div>
          <h3 style={{ color: 'var(--emerald-green)', fontSize: '20px', marginBottom: '10px' }}>Natural Farming & Ecological Restoration</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
            Holy Mission's aim to create meaningful opportunities for natural farming, environmental conservation, and ecological restoration, active tree planting initiatives under dedicated community leadership.
          </p>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h4 style={{ color: 'var(--royal-blue)', fontSize: '18px', marginBottom: '10px' }}>Our Approach</h4>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
            <strong>Management:</strong> The organisation is managed by a governing body with experts both from program and finance to guide the entire functioning of the organisation. The governing body has a system of meeting, reviewing, and guidance for planning for different programs of the organisation. The governing body also encourages the next line of program leadership to accelerate the organisation presence across the State of West Bengal.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginTop: '15px' }}>
            <strong>Governance:</strong> The organization has a process of a finance & program planning system including a projection for fundraising. Staff capacity building training, orientation for newly recruited staff is being maintained and staff performance appraisal is being followed and maintained to enhance performance of staff members and ensuing accountability towards the organization.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#555', marginTop: '15px' }}>
            <strong>Organizational Structure:</strong> There are 7 members on board of governing body members of the organization. Holy Mission has a trained and technically sound program and finance management team that executes activities with available resources in closed coordination with the management team. Holy Mission has a transparent and systematic communication mechanism encourages to all leveling of members attached to the organization irrespective of their status.
          </p>
        </div>
      </motion.div>
    </div>
  );
}