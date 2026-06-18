import Seo from '../components/Seo'
import { VALUES } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="ZENNARA is East Africa's premier eco-responsible property and facility management company, combining institutional rigour with deep Kenyan market expertise."
      />
      <section>
        <div className="wrap">
          <div className="sl">Who We Are</div>
          <h2 className="st">
            A Premium Management <em>Partner</em>
          </h2>
          <p className="ss">
            ZENNARA Property &amp; Facility Management is East Africa's premier
            eco-responsible property and facility management company,
            combining institutional rigour with deep Kenyan market expertise and
            a genuine commitment to green building operations.
          </p>
          <p className="ss" style={{ marginTop: 16 }}>
            We operate as a management and operations partner, elevated with an
            eco green ethos that signals sustainability, ESG readiness, and
            smart building management.
          </p>
          <div className="rule" />
          <div className="pillars">
            {VALUES.map((v, i) => (
              <div className={`pillar ${v.eco ? 'ep' : ''}`} key={v.label}>
                <div className="pn">Value 0{i + 1}</div>
                <div className="pv">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
