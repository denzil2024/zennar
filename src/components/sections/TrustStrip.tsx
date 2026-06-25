import { GUARANTEES } from '../../data/content'

// Compact trust band: response-time promise, transparent pricing, service guarantee.
export default function TrustStrip() {
  return (
    <section className="trust-band">
      <div className="wrap trust-grid">
        {GUARANTEES.map((g) => (
          <div className="trust-item" key={g.t}>
            <div className="trust-t">{g.t}</div>
            <div className="trust-d">{g.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
