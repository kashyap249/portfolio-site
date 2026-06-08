import { Link } from 'react-router-dom'
import logo from '/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo footer-logo">
              <img src={logo} alt="madebyKashyap Logo" />
              <span>madebyKashyap.Dev</span>
            </Link>
            <p>Frontend developer crafting fast, beautiful websites that work for you. serving clients worldwide.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/in/kumar-kashyap1/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:KashyapKumar@860.com">Email Me</a>
            <a href="https://wa.me/917544059165" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="tel:+917544059165">+91 75440 59165</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Kumar Kashyap. All rights reserved.</p>
          <p>Crafted with <span style={{color:'var(--accent2)'}}>♥</span> by <span style={{color:'var(--accent2)'}}>madebyKashyap.Dev</span></p>
        </div>
      </div>
    </footer>
  )
}
