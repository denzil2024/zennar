import { ONBOARDING } from '../../data/content'

export default function Onboarding() {
  return (
    <section>
      <div className="wrap">
        <div className="sl">Getting Started</div>
        <h2 className="st">
          How Onboarding <em>Works</em>
        </h2>
        <p className="ss">
          A structured handover that gets us managing your property without a gap
          in service or accountability.
        </p>
        <div className="rule" />
        <div className="steps-grid">
          {ONBOARDING.map((s, i) => (
            <div className="step-card" key={s.t}>
              <div className="step-n">0{i + 1}</div>
              <div className="step-t">{s.t}</div>
              <div className="step-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
