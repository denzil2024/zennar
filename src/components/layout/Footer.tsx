import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { SITE } from '../../data/content'

export default function Footer() {
  return (
    <footer className="brand-ft">
      <div className="wrap">
        <div className="ft-inner">
          <div>
            <div className="ft-wordmark">
              <Logo variant="mark" />
            </div>
            <div className="ft-eco-b">
              <span className="eco-dot" />
              <span className="ft-eco-bt">Eco-Responsible</span>
            </div>
            <p className="ft-desc">
              A premier eco-responsible property and facility management
              company, delivering institutional-grade service with a genuine
              commitment to sustainability across the markets we serve.
            </p>
          </div>
          <div>
            <div className="ft-col-t">Services</div>
            <div className="ft-links">
              <Link to="/services">Property Management</Link>
              <Link to="/services">Facility Management</Link>
              <Link to="/eco">Eco FM Services</Link>
              <Link to="/services">Building Maintenance</Link>
            </div>
          </div>
          <div>
            <div className="ft-col-t">Company</div>
            <div className="ft-links">
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/eco">Sustainability</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Insights</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="ft-col-t eco">Connect</div>
            <div className="ft-links">
              <Link to="/portal">Client Portal</Link>
              <Link to="/contact">WhatsApp</Link>
              <a href={SITE.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={SITE.social.twitter} target="_blank" rel="noreferrer">Twitter</a>
              <a href={SITE.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} ZENNARA Property &amp; Facility
            Management Ltd · All rights reserved · Nairobi, Kenya
          </p>
          <div className="ft-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
