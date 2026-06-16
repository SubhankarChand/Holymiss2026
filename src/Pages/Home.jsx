import React from 'react';
import Hero from '../Components/Hero';
import CorePrograms from '../Components/CorePrograms';
import MapContact from '../Components/MapContact';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import siteData from '../data/siteData.json';

export default function Home() {
  return (
    <>
      <Hero />
      
      <CorePrograms />

      {/* ACHIEVEMENTS (With CountUp) */}
      <section id="achievements" style={{ backgroundColor: 'var(--royal-blue)', color: 'white', padding: '70px 10%', textAlign: 'center', borderTop: '5px solid var(--saffron)' }}>
        <h2 style={{fontWeight: 800, marginBottom: '40px', textTransform: 'uppercase'}}>Measurable Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {siteData.stats.map((stat, index) => {
            const [ref, inView] = useInView({ triggerOnce: true });
            return (
              <div ref={ref} key={index}>
                <h2 style={{ fontSize: '55px', color: 'var(--saffron)', fontWeight: 900 }}>
                  {stat.prefix}{inView ? <CountUp end={stat.count} duration={2.5} /> : 0}{stat.suffix}
                </h2>
                <p style={{marginTop: '10px', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase'}}>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <MapContact />
    </>
  );
}