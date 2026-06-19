import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="h-grid" />
      <div className="h-glow-g" />
      <div className="h-glow-e" />
      <div className="h-content">
        <div className="h-ey">East Africa's Eco-Responsible FM Company</div>
        <span className="h-eco">
          <span className="eco-dot" />
          <span className="h-eco-t">🌿 Green Certified Facility Management</span>
        </span>
        <h1 className="h-title">
          Premium Property
          <br />
          <strong>
            &amp; <span className="eco">Eco Facility</span> Management
          </strong>
        </h1>
        <p className="h-desc">
          Institutional-grade property management and eco-responsible facility
          services for Nairobi's most prestigious properties.
        </p>
        <div className="h-btns">
          <Link className="btn-g" to="/portfolio">
            View Portfolio
          </Link>
          <Link className="btn-e" to="/contact">
            🌿 Free Eco Audit
          </Link>
          <Link className="btn-o" to="/services">
            Our Services
          </Link>
        </div>
      </div>
      <div className="h-scroll">
        <span className="h-scroll-t">Scroll</span>
        <span className="scroll-ln" />
      </div>
    </section>
  )
}
