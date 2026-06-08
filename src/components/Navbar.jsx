import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills',   label: 'Skills' },
  ]

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="madebyKashyap Logo" />
          <span>madebyKashyap</span>
        </NavLink>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to} to={l.to} end={l.to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={() => setOpen(false)}
        >
          Comtact Me
        </NavLink>
      </div>
    </>
  )
}
