import { REPORTING } from '../../data/content'
import Reveal from '../Reveal'

// Owner reporting cadence — monthly / quarterly / annual.
export default function ReportingCadence() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <Reveal>
          <div className="sl">Reporting</div>
          <h2 className="st">
            How We <em>Report</em>
          </h2>
          <p className="ss">
            Owners receive structured reporting on a fixed schedule, so the
            performance of the asset is always a matter of record, never a matter
            of guesswork.
          </p>
          <div className="rule" />
          <div className="asset-grid">
            {REPORTING.map((r) => (
              <div className="approach-card" key={r.t}>
                <div className="report-when">{r.when}</div>
                <div className="approach-t">{r.t}</div>
                <div className="approach-d">{r.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
