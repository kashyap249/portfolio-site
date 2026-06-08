import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import photo from '/kashyap-photo.jpeg'
import './Home.css'

const phrases = ['Frontend Developer', 'UI/UX Designer', 'Freelance Web Developer', 'HTML · CSS · JavaScript']

export default function Home() {
  useReveal()
  const [subtitleText, setSubtitleText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const typingRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let i = 0
    const phrase = phrases[phraseIdx]

    function typeChar() {
      if (cancelled) return
      if (i <= phrase.length) {
        setSubtitleText(phrase.slice(0, i++))
        typingRef.current = setTimeout(typeChar, 55)
      } else {
        typingRef.current = setTimeout(() => {
          if (cancelled) return
          let j = phrase.length
          function del() {
            if (cancelled) return
            if (j >= 0) {
              setSubtitleText(phrase.slice(0, j--))
              typingRef.current = setTimeout(del, 35)
            } else {
              setPhraseIdx(p => (p + 1) % phrases.length)
            }
          }
          del()
        }, 1800)
      }
    }
    setTimeout(typeChar, 300)
    return () => { cancelled = true; clearTimeout(typingRef.current) }
  }, [phraseIdx])

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-tag">
                <span className="dot" />
                Available for Freelance Projects
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">Kumar</span><br />Kashyap
              </h1>
              <p className="hero-subtitle">
                {subtitleText}<span className="cursor-blink">|</span>
              </p>
              <br />
              <p className="hero-desc">
                Frontend Developer &amp; UI/UX Designer crafting high-performance,
                pixel-perfect web experiences. I turn your ideas into fast,<br />
                responsive, and visually stunning websites.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  Let's Talk
                </Link>
              </div>
          
            </div>

            {/* PHOTO */}
            <div className="hero-visual">
              <div className="hero-img-wrap">
                <div className="hero-img-glow" />
                <div className="hero-img-border">
                  <img src={photo} alt="Kumar Kashyap coding at his desk" loading="eager" />
                </div>
                <div className="bracket bracket-tl" />
                <div className="bracket bracket-tr" />
                <div className="bracket bracket-bl" />
                <div className="bracket bracket-br" />
                <div className="code-card">
                  <p><span className="c-purple">const</span> dev = {'{'}</p>
                  <p>&nbsp;&nbsp;name: <span className="c-cyan">"Kumar Kashyap"</span>,</p>
                  <p>&nbsp;&nbsp;role: <span className="c-cyan">"Frontend Dev"</span></p>
                  <p>{'}'}</p>
                </div>
                <div className="exp-badge">
                  Web 
                  Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {['HTML5','CSS3','JavaScript','Bootstrap','Responsive Design','UI/UX Design','Netlify Hosting','GitHub','Frontend Dev','React','Vercel',
            'HTML5','CSS3','JavaScript','Bootstrap','Responsive Design','UI/UX Design','Netlify Hosting','React','Vercel','GitHub','Frontend Dev'
          ].map((t, i) => (
            <span key={i} className="marquee-item">{t} <span className="sep">✦</span></span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services">
        <div className="container">
          <p className="section-label reveal">What I Do</p>
          <h2 className="section-title reveal">Building Digital <span className="gradient-text">Experiences</span></h2>
          <p className="section-desc reveal">From concept to deployment — I handle the full frontend lifecycle with speed and precision.</p>
          <div className="services-grid">
            {[
              { icon: '🌐', title: 'Website Development', desc: 'Custom, responsive websites built with HTML5, CSS3 & JavaScript. Fast loading, SEO-ready, and mobile-first by default.' },
              { icon: '🎨', title: 'UI/UX Design',        desc: 'Clean and modern interface design that puts your users first. Every pixel is intentional, every interaction is smooth.' },
              { icon: '📱', title: 'Responsive Design',   desc: 'Your website will look perfect on every screen — from the smallest smartphone to the widest 4K monitor.' },
              { icon: '🚀', title: 'Deployment & Hosting',desc: 'Deploying sites to Netlify with optimised performance, domain linking, and fast global CDN delivery.' },
              { icon: '🔍', title: 'SEO Optimization',    desc: 'Structured data, semantic HTML, meta tags, and performance tuning to help your website rank higher on Google.' },
              { icon: '⚡', title: 'Performance Tuning',  desc: 'Optimized assets, lazy loading, and clean code ensuring your site scores high on Core Web Vitals.' },
            ].map((s, i) => (
              <div key={i} className="service-card reveal">
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner reveal">
            <div>
              <p className="section-label">Ready to build?</p>
              <h2 className="cta-title">Have a project in mind?<br /><span className="gradient-text">Let's make it real.</span></h2>
            </div>
            <Link to="/contact" className="btn btn-primary">Start a Project →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
