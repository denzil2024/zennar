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
          <span className="h-eco-t">Institutional-Grade Asset Management</span>
        </span>
        <h1 className="h-title">
          Protect Capital Value.
          <br />
          Cut Operating Costs.
          <br />
          <span className="eco">Maximize Yield.</span>
        </h1>
        <p className="h-desc">
          Institutional-grade property and facility management engineered to
          protect capital value, cut operating costs, and maximize yield, with
          sustainability built in across every market we serve.
        </p>

        <LeadForm inline />

        <Link className="h-altlink" to="/portfolio">
          or view our work →
        </Link>
      </div>
    </section>
  )
}
