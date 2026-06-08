import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const skillGroups = [
  {
    title: '// Languages',
    skills: [
      { icon: '🌐', name: 'HTML5',      pct: 90 },
      { icon: '🎨', name: 'CSS3',       pct: 85 },
      { icon: '⚡', name: 'JavaScript', pct: 75 },
      { icon: '💻', name: 'C Language', pct: 70 },
      { icon: '⚡', name: ' React', pct: 70 },
    ],
  },
  {
    title: '// Frameworks & Tools',
    skills: [
      { icon: '🅱️', name: 'Bootstrap',   pct: 72 },
      { icon: '🐙', name: 'GitHub',       pct: 70 },
      { icon: '🚀', name: 'Netlify',      pct: 88 },
      { icon: '✅', name: 'Vercel',      pct: 70 },
      { icon: '✏️', name: 'UI/UX Design', pct: 82 },
    ],
  },
]

const techBadges = ['🌐 HTML5','🎨 CSS3','⚡ JavaScript (ES6+)','🅱️ Bootstrap 5','💻 C Language','🐙 GitHub','🚀 Netlify','📱 Responsive Design','✏️ UI/UX Design','🔍 SEO Code','⚡ React','✅ Vercel','⚙️ VS Code','🎯 Web Performance']

const offers = [
  { icon:'⚡', title:'Fast Performance', desc:'Optimized code and assets that ensure lightning-fast load times and smooth user experience on all devices.' },
  { icon:'📱', title:'Mobile-First', desc:'Every website I build works flawlessly from 320px mobile screens to large 4K desktop displays.' },
  { icon:'🎨', title:'Clean UI Design', desc:'Thoughtful, user-centred design decisions that make websites beautiful and easy to navigate.' },
  { icon:'🔍', title:'SEO Ready', desc:'Semantic HTML, meta tags, and structured data to give your website the best chance to rank on Google.' },
  { icon:'🚀', title:'Deployed Live', desc:'Every project is deployed with proper hosting — not just a local file. Your site goes live on the internet.' },
  { icon:'🤝', title:'Client Focus', desc:'I communicate clearly, deliver on time, and ensure you\'re happy with every aspect of the project.' },
]

function SkillBar({ icon, name, pct }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.width = pct + '%'
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name"><span className="sk-icon">{icon}</span> {name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-bar" ref={barRef} style={{ width: 0, transition: 'width 1.2s cubic-bezier(.4,0,.2,1)' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  useReveal()

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <p className="section-label">Technical Proficiency</p>
          <h1 className="section-title">My <span className="gradient-text">Skills</span></h1>
          <p className="section-desc" style={{margin:'16px auto 0',textAlign:'center'}}>A growing toolkit of frontend technologies I use to build stunning web experiences.</p>
        </div>
      </div>

      <section className="skills-section">
        <div className="container">
          <div className="skills-grid">
            {skillGroups.map((g, i) => (
              <div key={i} className="reveal">
                <p className="skill-group-title">{g.title}</p>
                {g.skills.map(s => <SkillBar key={s.name} {...s} />)}
              </div>
            ))}
          </div>

          <p className="section-label reveal" style={{marginBottom:28}}>// Full Tech Stack</p>
          <div className="tech-cloud reveal">
            {techBadges.map((b, i) => {
              const [icon, ...rest] = b.split(' ')
              return (
                <div key={i} className="tech-badge">
                  <span className="ti">{icon}</span> {rest.join(' ')}
                </div>
              )
            })}
          </div>

          <p className="section-label reveal" style={{marginBottom:12}}>// Specializations</p>
          <h2 className="section-title reveal" style={{marginBottom:40}}>What I <span className="gradient-text">Deliver</span></h2>
          <div className="offer-grid">
            {offers.map((o, i) => (
              <div key={i} className="offer-card reveal">
                <div className="offer-icon">{o.icon}</div>
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-desc">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
