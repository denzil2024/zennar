import { KPIS } from '../../data/content'
import Reveal from '../Reveal'

// KPI benchmark scorecard — the targets we report against every quarter.
export default function KpiScorecard() {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <div className="sl">Measured, Not Promised</div>
          <h2 className="st">
            Performance Against <em>Benchmarks</em>
          </h2>
          <p className="ss">
            Our management performance is graded against defined, non-negotiable
            targets and reported to owners every quarter. Performance is a matter
            of record, never a matter of opinion.
          </p>
          <div className="rule" />
          <div className="kpi-grid">
            {KPIS.map((k) => (
              <div className="kpi-card" key={k.k}>
                <div className="kpi-target">{k.target}</div>
                <div className="kpi-k">{k.k}</div>
                <div className="kpi-d">{k.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
