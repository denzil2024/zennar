import { Link } from 'react-router-dom'
import { ASSETS } from '../../data/content'
import LeadForm from '../LeadForm'

export default function Hero() {
  return (
    <section className="hero">
      {ASSETS.heroImage && (
        <div
          className="h-photo"
          style={{ backgroundImage: `url(${ASSETS.heroImage})` }}
        />
      )}
      <div className="h-grid" />
      <div className="h-glow-g" />
      <div className="h-glow-e" />

      <div className="h-content h-stack">
        <span className="h-eco">
          <span className="eco-dot" />
          <span className="h-eco-t">Green Certified Facility Management</span>
        </span>
        <h1 className="h-title">
          Lower Operating Costs.
          <br />
          Better Tenant Experience.
          <br />
          <span className="eco">Measurable Sustainability.</span>
        </h1>
        <p className="h-desc">
          Institutional-grade property and facility management that cuts
          operating costs, elevates the tenant experience, and delivers
          measurable sustainability across every market we serve.
        </p>

        <LeadForm inline />

        <Link className="h-altlink" to="/portfolio">
          or view our work →
        </Link>
      </div>
    </section>
  )
}
