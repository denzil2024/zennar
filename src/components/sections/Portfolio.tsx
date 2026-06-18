import { PORTFOLIO } from '../../data/content'

type Props = { background?: string }

export default function Portfolio({ background }: Props) {
  return (
    <section
      id="portfolio"
      style={{ background: background ?? 'var(--zennara-charcoal)' }}
    >
      <div className="wrap">
        <div className="sl">Managed Portfolio</div>
        <h2 className="st">
          Properties Under <em>Management</em>
        </h2>
        <p className="ss">
          A selection of the commercial and residential properties we operate
          across Nairobi.
        </p>
        <div className="rule" />
        <div className="port-grid">
          {PORTFOLIO.map((p) => (
            <div className="pc" key={p.nm}>
              <div className="pc-img">
                <span>{p.ico}</span>
                <span className="pc-badge">{p.badge}</span>
                <span className="pc-eco">🌿</span>
              </div>
              <div className="pc-info">
                <div className="pc-dist">{p.dist}</div>
                <div className="pc-nm">{p.nm}</div>
                <div className="pc-addr">{p.addr}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
