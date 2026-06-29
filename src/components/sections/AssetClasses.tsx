import { ASSET_CLASSES } from '../../data/content'
import Reveal from '../Reveal'

// "What we manage" — the five asset-class specialisations from the proposal.
export default function AssetClasses() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <Reveal>
          <div className="sl">What We Manage</div>
          <h2 className="st">
            Asset Classes We <em>Specialise In</em>
          </h2>
          <p className="ss">
            Each asset class demands a different operational discipline. We build
            dedicated teams and standards around the specific demands of every
            property type we take on, from Grade-A towers to industrial parks.
          </p>
          <div className="rule" />
          <div className="asset-grid">
            {ASSET_CLASSES.map((a, i) => (
              <div className="approach-card" key={a.t}>
                <div className="approach-n">0{i + 1}</div>
                <div className="approach-t">{a.t}</div>
                <div className="approach-d">{a.d}</div>
                <div className="asset-focus">{a.focus}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
