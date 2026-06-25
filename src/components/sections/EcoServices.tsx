import { ECO_SERVICES } from '../../data/content'

export default function EcoServices() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <div className="sl eco">Eco FM Services</div>
        <h2 className="st">
          Sustainability, <em>Operationalised</em>
        </h2>
        <p className="ss">
          Green operations built into the day to day, with measurable savings
          and reporting you can show stakeholders.
        </p>
        <div className="rule" />
        <div className="approach-grid">
          {ECO_SERVICES.map((s) => (
            <div className="approach-card" key={s.t}>
              <div className="approach-t" style={{ marginTop: 0 }}>
                {s.t}
              </div>
              <div className="approach-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
