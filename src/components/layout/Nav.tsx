import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../data/content'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nl">
        <Link to="/" className="wordmark">
          ZENN<span>A</span>RA
        </Link>
        <span className="eco-live">
          <span className="eco-dot" />
          <span className="eco-lt">Eco Certified</span>
        </span>
      </div>
      <div className="nlinks">
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => (isActive ? 'on' : undefined)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/portal" className="nav-cta">
          Client Portal
        </Link>
      </div>
    </nav>
  )
}
