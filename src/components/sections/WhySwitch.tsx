import { WHY_SWITCH } from '../../data/content'

export default function WhySwitch() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <div className="sl eco">Why Switch</div>
        <h2 className="st">
          Why Owners <em>Move to ZENNARA</em>
        </h2>
        <p className="ss">
          If your current provider leaves you guessing on cost, status, or
          sustainability, here is what changes.
        </p>
        <div className="rule" />
        <div className="approach-grid">
          {WHY_SWITCH.map((w, i) => (
            <div className="approach-card" key={w.t}>
              <div className="approach-n">0{i + 1}</div>
              <div className="approach-t">{w.t}</div>
              <div className="approach-d">{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
