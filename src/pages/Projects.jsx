import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PageShared.css';
import './Projects.css';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 80); io.unobserve(e.target); }
      });
    }, { threshold: 0.06 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const PROJECTS = [
  { num:'01', icon:'🚗', title:'Vahan Desk', url:'https://vahandesk.netlify.app', desc:'A fully responsive website for an RTO & Legal Services business in Jamshedpur. Modern UI, dedicated service sections, smooth animations, and direct WhatsApp integration.', client:'RTO & Legal Services', launched:'May 2026', stack:'HTML · CSS · JS · Netlify', features:['Responsive Design','WhatsApp Integration','Smooth Animations','Service Sections'] },
  { num:'03', icon:'💪', title:'Parida Fitness', url:'https://paridafitnessdemo.netlify.app', desc:'An immersive, dynamic website for a fitness brand. Energetic UI, gym memberships showcase, workout routines, instructor schedules, and optimized performance.', client:'Gym & Fitness Brand', launched:'June 2026', stack:'HTML · Bootstrap · CSS · JS', features:['High-Impact UI','Membership Plans','Fast Loading','Responsive'] },
  { num:'02', icon:'💼', title:'Alpha Associates', url:'https://alpha-associates.netlify.app', desc:'A corporate web platform for a modern UK consultancy firm. Clean informational architecture, service blocks, and streamlined contact interfaces.', client:'Accounting / Consultancy – UK', launched:'June 2026', stack:'HTML · Bootstrap · JS · Netlify', features:['Corporate Design','Service Blocks','Contact Forms','Mobile Optimized'] },
  { num:'04', icon:'📚', title:'RR Home Tuition', url:'https://rrhometuitiondemo.netlify.app', desc:'A feature-rich tuition academy site built with React and Firebase. Live student reviews via Firestore, image uploads, teacher-gated achievements section, and dark mode.', client:'Tuition Academy – Jamshedpur', launched:'2026', stack:'React · Firebase · Vite', features:['React + Firebase','Live Reviews','Dark Mode','Image Uploads'] },
];

export default function Projects() {
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb page-hero-orb-1" />
        <div className="page-hero-orb page-hero-orb-2" />
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">My Work</span>
            <h1>Built with <span className="accent-text">Purpose</span></h1>
            <p>Real websites, real clients. Every project solves a genuine business problem.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {PROJECTS.map((p, i) => (
            <div key={p.num}>
              <div className={`project-full reveal ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="project-full-meta">
                  <div className="project-number">{p.num}</div>
                  <div className="project-full-info">
                    <span className="pstatus">● Live</span>
                    <h2>{p.title}</h2>
                    <p className="pdesc">{p.desc}</p>
                    <div className="pdetails">
                      {[['Client', p.client], ['Launched', p.launched], ['Stack', p.stack]].map(([k, v]) => (
                        <div key={k} className="pdetail"><span className="pk">{k}</span><span className="pv">{v}</span></div>
                      ))}
                    </div>
                    <div className="pfeatures">{p.features.map(f => <span key={f}>✓ {f}</span>)}</div>
                    <a href={p.url} target="_blank" rel="noopener" className="btn btn-primary">View Live Site ↗</a>
                  </div>
                </div>
                <div className="project-preview">
                  <div className="browser-mock">
                    <div className="browser-bar">
                      <div className="bdots"><span /><span /><span /></div>
                      <div className="burl">{p.url.replace('https://', '')}</div>
                    </div>
                    <div className="browser-body">
                      <iframe src={p.url} title={p.title} loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups" />
                      <div className="iframe-hover">
                        <a href={p.url} target="_blank" rel="noopener" className="iframe-btn">Open Website ↗</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {i < PROJECTS.length - 1 && <div className="pdivider" />}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Want a website like these? <span className="accent-text">Let's build yours.</span></h2>
            <p>Starting from scratch. Delivered fast. Built to impress.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Start Your Project →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
