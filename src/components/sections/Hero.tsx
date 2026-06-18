import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="h-grid" />
      <div className="h-glow-g" />
      <div className="h-glow-e" />
      <div className="h-content">
        <h1 className="h-wordmark">
          ZENN<span>A</span>RA
        </h1>
        <div className="h-tag">
          Property &amp; Facility Management · Nairobi, Kenya
        </div>
        <span className="h-eco">
          <span className="eco-dot" />
          <span className="h-eco-t">Eco Certified Operations</span>
        </span>
        <p className="h-desc">
          East Africa's eco-responsible property and facility management
          partner, delivering institutional-grade operations with a genuine
          commitment to
          sustainable, green buildings across Nairobi and beyond.
        </p>
        <div className="h-btns">
          <Link className="btn-g" to="/services">
            Our Services
          </Link>
          <Link className="btn-e" to="/eco">
            Eco FM
          </Link>
          <Link className="btn-o" to="/portal">
            Client Portal
          </Link>
        </div>
      </div>
    </section>
  )
}
