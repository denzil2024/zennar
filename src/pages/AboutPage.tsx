import Seo from '../components/Seo'
import Team from '../components/sections/Team'
import Certifications from '../components/sections/Certifications'
import CTA from '../components/sections/CTA'
import { VALUES, APPROACH } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="ZENNARA is a premier eco-responsible property and facility management company, combining institutional rigour with deep local-market expertise across the markets we serve."
      />
      <section>
        <div className="wrap">
          <div className="sl">Who We Are</div>
          <h2 className="st">
            A Premium Management <em>Partner</em>
          </h2>
          <p className="ss">
            ZENNARA Property &amp; Facility Management is a premier
            eco-responsible property and facility management company, combining
            institutional rigour with deep local-market expertise and a genuine
            commitment to green building operations across the markets we serve.
          </p>
          <p className="ss" style={{ marginTop: 16 }}>
            We operate as a management and operations partner, distinguished by
            an eco green ethos that signals sustainability, ESG readiness, and
            smart building management.
          </p>
          <div className="rule" />
          <div className="pillars">
            {VALUES.map((v, i) => (
              <div className={`pillar ${v.eco ? 'ep' : ''}`} key={v.label}>
                <div className="pn">Value 0{i + 1}</div>
                <div className="pv">{v.label}</div>
                <div className="pd">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-alt)' }}>
        <div className="wrap">
          <div className="sl eco">Our Approach</div>
          <h2 className="st">
            How We <em>Operate</em>
          </h2>
          <p className="ss">
            A consistent operating model that protects asset value, controls
            cost, and raises the standard of every building we manage.
          </p>
          <div className="rule" />
          <div className="approach-grid">
            {APPROACH.map((a, i) => (
              <div className="approach-card" key={a.t}>
                <div className="approach-n">0{i + 1}</div>
                <div className="approach-t">{a.t}</div>
                <div className="approach-d">{a.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Certifications />
      <CTA />
    </>
  )
}
