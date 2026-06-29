import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../data/content'
import Logo from '../Logo'
import ThemeToggle from '../ThemeToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav">
      <div className="nl">
        <Link to="/" className="wordmark" onClick={close}>
          <Logo variant="mark" />
        </Link>
        <span className="eco-live">
          <span className="eco-dot" />
          <span className="eco-lt">Eco-Responsible</span>
        </span>
      </div>

      <div className={`nlinks${open ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            onClick={close}
            className={({ isActive }) => (isActive ? 'on' : undefined)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="nav-cta nav-cta-menu" onClick={close}>
          Get FM Quote
        </Link>
      </div>

      <div className="nav-end">
        <ThemeToggle />
        <Link to="/contact" className="nav-cta nav-cta-bar" onClick={close}>
          Get FM Quote
        </Link>
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
