import { useReveal } from '../hooks/useReveal'
import photo from '/kashyap-photo.jpeg'
import './About.css'

const timeline = [
  { period: 'June 2026 — Present', role: 'Frontend Web Development Intern', company: 'Codtech IT Solutions Pvt. Ltd.', desc: '6-week internship focused on improving frontend skills through real-world projects and industry practices.' },
  { period: 'June 2026', role: 'UI/UX Designer & Frontend Developer', company: 'Alpha Associates — alpha-associates.netlify.app', desc: 'Designed and developed a corporate web platform for a modern consultancy firm with fluid informational architecture.' },
  { period: 'June 2026', role: 'UI/UX Designer & Frontend Developer', company: 'Parida Fitness — paridafitness.netlify.app', desc: 'Built an immersive, energetic frontend web experience for a fitness facility with optimized performance and modern UI.' },
  { period: 'May 2026', role: 'UI/UX Designer & Frontend Developer', company: 'Vahan Desk — vahandesk.netlify.app', desc: 'Designed and deployed a fully responsive website for an RTO & Legal Services business with WhatsApp integration.' },
  { period: 'Ongoing', role: 'B.Tech — Computer Science & Engineering', company: 'University (CSE)', desc: 'Building strong fundamentals in computer science while applying knowledge to real-world development projects.' },
  { period: 'Ongoing', role: 'Web Development Intern ', company: 'Tata Steel (SNTI)', desc: 'Gaining practical industry experience and refining core development skills within an enterprise environment, started May 2026' },
]

export default function About() {
  useReveal()

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <p className="section-label">Get To Know Me</p>
          <h1 className="section-title">About <span className="gradient-text">Kumar Kashyap</span></h1>
        </div>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* Sticky Card */}
            <div className="about-card reveal">
              <div className="about-img">
                <img src={photo} alt="Kumar Kashyap" />
                <div className="about-img-overlay" />
              </div>
              <div className="about-info">
                <h2 className="about-name">Kumar Kashyap</h2>
                <p className="about-role">// Frontend Developer &amp; UI/UX Designer</p>
                <div className="about-links">
                  <a href="mailto:KashyapKumar@860.com" className="about-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    KashyapKumar@860.com
                  </a>
                  <a href="tel:+917544059165" className="about-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.72A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.84a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                    +91 75440 59165
                  </a>
                  <a href="https://www.linkedin.com/in/kumar-kashyap1/" target="_blank" rel="noreferrer" className="about-link">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    linkedin.com/in/kumar-kashyap1
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="about-content">
              <h2 className="reveal">I turn ideas into <span className="gradient-text">digital reality</span></h2>
              <p className="reveal">Hey! I'm Kumar Kashyap, a B.Tech Computer Science & Engineering student with a deep passion for building beautiful and functional web experiences. I specialize in frontend development, combining clean code with thoughtful UI/UX design to deliver websites that don't just look good — they <em>work</em> great.</p>
              <p className="reveal">My journey started with curiosity about how websites are built, and it quickly turned into a serious craft. Every project I take on is an opportunity to push my skills further and deliver something genuinely impressive to my clients.</p>
              <p className="reveal">Whether you need a business website, a portfolio, a service platform, or a landing page — I'm the developer who'll treat your project with the attention and professionalism it deserves.</p>

              {/* Timeline */}
              <div className="timeline reveal">
                <p className="timeline-title">// Experience &amp; Journey</p>
                {timeline.map((t, i) => (
                  <div key={i} className="timeline-item">
                    <div className="tl-dot" />
                    <div className="tl-content">
                      <p className="tl-period">{t.period}</p>
                      <h3 className="tl-role">{t.role}</h3>
                      <p className="tl-company">{t.company}</p>
                      <p className="tl-desc">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hackathon */}
              <div className="hack-card reveal">
                <div className="hack-icon">🏆</div>
                <div className="hack-content">
                  <h3 className="hack-title">24-Hour Hackathon — Arka Jain University</h3>
                  <p className="hack-meta">// May 2026 · Team Collaboration · Rapid Prototyping</p>
                  <p className="hack-desc">Built a <strong>Unified Land Verification &amp; Document Management System</strong> in 24 hours. Simplified access to land records, ownership verification, and data transparency. Intense team collaboration under pressure with real-world problem solving.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
