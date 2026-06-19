import { Link } from 'react-router-dom'
import { ECO_PILLS } from '../../data/content'

export default function EcoSection() {
  return (
    <section id="eco" className="eco-sec">
      <div className="wrap">
        <div className="sl eco">Sustainability</div>
        <h2 className="st">
          Eco <span className="eco">Facility</span> Management
        </h2>
        <p className="ss">
          Sustainability is built into every building we operate, from energy
          and water efficiency to waste diversion and carbon reporting. A live
          eco data dashboard is on our roadmap.
        </p>
        <div className="erule" />
        <div className="eco-pill-grid">
          {ECO_PILLS.map((p) => (
            <div className="eco-pill-lg" key={p}>
              {p}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <Link className="btn-e" to="/contact">
            🌿 Book a Free Eco Audit
          </Link>
        </div>
      </div>
    </section>
  )
}
