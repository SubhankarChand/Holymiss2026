import React from 'react';

export default function TopBar() {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <img src="/images/logo.png" alt="Holymission Logo" style={{ maxHeight: '80px' }} />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'var(--saffron)', fontWeight: 900, margin: 0, fontSize: '36px', letterSpacing: '2px', textTransform: 'uppercase' }}>Holy Mission</h1>
        <p style={{ color: 'var(--royal-blue)', fontWeight: 'bold', margin: 0, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Children’s Welfare & Rural Development</p>
      </div>
      <img src="/images/swami.png" alt="Swami Vivekananda" style={{ maxHeight: '80px' }} />
    </div>
  );
}