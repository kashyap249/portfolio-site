import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const contactCards = [
  { href: 'https://wa.me/917544059165', icon: '📱', label: 'WhatsApp', value: '+91 75440 59165', cls: 'cc-wa' },
  { href: 'mailto:KashyapKumar@860.com', icon: '✉️', label: 'Email',    value: 'KashyapKumar@860.com', cls: 'cc-mail' },
  { href: 'tel:+917544059165',           icon: '📞', label: 'Phone',    value: '+91 75440 59165', cls: 'cc-ph' },
  { href: 'https://www.linkedin.com/in/kumar-kashyap1/', icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/kumar-kashyap1', cls: 'cc-li', external: true },
]

const purposes = ['New Website','Website Redesign','Landing Page','Portfolio Website','Business Website','Other / General Inquiry']

function ThankYouOverlay({ show, onClose }) {
  if (!show) return null
  const colors = ['#7c3aed','#00d4ff','#25d366','#fbbf24','#f87171']
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top:  Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    tx: (Math.random() - 0.5) * 300,
    ty: (Math.random() - 0.5) * 300,
    dur: 0.8 + Math.random() * 1.2,
    del: Math.random() * 0.4,
  }))

  return (
    <div className="ty-overlay">
      <div className="ty-particles">
        {particles.map(p => (
          <div key={p.id} className="particle" style={{
            left: p.left + '%', top: p.top + '%',
            background: p.color,
            '--tx': p.tx + 'px', '--ty': p.ty + 'px',
            animationDuration: p.dur + 's',
            animationDelay: p.del + 's',
          }} />
        ))}
      </div>
      <div className="ty-anim"><span className="ty-hands">🤝</span></div>
      <h2 className="ty-title">Thank You!</h2>
      <p className="ty-sub">Your message is on its way. Kashyap will get back to you within 24 hours. Can't wait to work together!</p>
      <button className="btn btn-outline" onClick={onClose}>← Back to Contact</button>
    </div>
  )
}

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', phone: '', purpose: '', msg: '' })
  const [showTY, setShowTY] = useState(false)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    if (!form.name.trim())    { alert('Please enter your name.'); return false }
    if (!form.purpose)        { alert('Please select a purpose.'); return false }
    return true
  }

  const handleWA = () => {
    if (!validate()) return
    const text = encodeURIComponent(
      `Hi Kashyap! 👋\n\nName: ${form.name}\nPhone: ${form.phone || 'Not provided'}\nPurpose: ${form.purpose}\n\n${form.msg || "I'd like to discuss a project."}`
    )
    window.open(`https://wa.me/917544059165?text=${text}`, '_blank')
    setShowTY(true)
  }

  const handleEmail = () => {
    if (!validate()) return
    const subject = encodeURIComponent(`Website Inquiry — ${form.purpose} from ${form.name}`)
    const body    = encodeURIComponent(`Hi Kashyap,\n\nName: ${form.name}\nPhone: ${form.phone || 'Not provided'}\nPurpose: ${form.purpose}\n\n${form.msg || "I'd like to discuss a project."}\n\nBest regards,\n${form.name}`)
    window.location.href = `mailto:KashyapKumar@860.com?subject=${subject}&body=${body}`
    setTimeout(() => setShowTY(true), 800)
  }

  return (
    <main>
      <ThankYouOverlay show={showTY} onClose={() => setShowTY(false)} />

      <div className="page-header">
        <div className="container">
          <p className="section-label">Let's Work Together</p>
          <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <h2 className="reveal">Ready to build<br /><span className="gradient-text">your website?</span></h2>
              <p className="reveal">Whether you're a business looking for an online presence, or an entrepreneur with a vision — I'm here to help. Tell me about your project and let's make it happen.</p>
              <div className="contact-cards reveal">
                {contactCards.map((c, i) => (
                  <a key={i} href={c.href} className={`contact-card ${c.cls}`} target={c.external ? '_blank' : undefined} rel={c.external ? 'noreferrer' : undefined}>
                    <div className="cc-icon">{c.icon}</div>
                    <div className="cc-text">
                      <p className="cc-label">{c.label}</p>
                      <p className="cc-value">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap reveal">
              <div className="form-card">
                <h2 className="form-title">Send a Message</h2>
                <p className="form-sub">// Fill in the details — I'll get back within 24 hours</p>

                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" placeholder="e.g. Rahul Sharma" value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp</label>
                  <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                </div>
                <div className="form-group">
                  <label>Purpose of Contact *</label>
                  <select value={form.purpose} onChange={set('purpose')}>
                    <option value="" disabled>Select a purpose</option>
                    {purposes.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Tell me more</label>
                  <textarea placeholder="Describe your project, budget, or any specific requirements..." value={form.msg} onChange={set('msg')} />
                </div>

                <div className="form-btns">
                  <button className="form-btn btn-wa" onClick={handleWA}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.12 1.527 5.845L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.001-1.371l-.359-.213-3.732.885.936-3.616-.234-.372A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/></svg>
                    Send via WhatsApp
                  </button>
                  <button className="form-btn btn-email" onClick={handleEmail}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Send via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
