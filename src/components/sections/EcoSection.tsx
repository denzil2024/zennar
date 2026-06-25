import { Link } from 'react-router-dom'
import { ECO_PILLS } from '../../data/content'
import Reveal from '../Reveal'

export default function EcoSection() {
  return (
    <section id="eco" className="eco-sec">
      <div className="wrap">
        <Reveal>
          <div className="sl eco">Sustainability</div>
          <h2 className="st">
            Eco <span className="eco">Facility</span> Management
          </h2>
          <p className="ss">
            Sustainability is built into every building we operate, from energy
            and water efficiency to waste diversion, green procurement, and
            carbon reporting. It lowers running costs as much as it lowers
            impact, and gives owners ESG-ready evidence rather than vague green
            claims. A live eco data dashboard is on our roadmap.
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
        </Reveal>
      </div>
    </section>
  )
}
