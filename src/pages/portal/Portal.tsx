import Seo from '../../components/Seo'
import { PORTAL_NAV, PORTAL_WIDGETS, MAINTENANCE } from '../../data/content'

export default function Portal() {
  return (
    <>
      <Seo
        title="Client Portal"
        description="ZENNARA Client Portal: manage payments, maintenance requests, eco reports, and documents in one place."
        noindex
      />
      <section>
        <div className="wrap">
          <div className="sl eco">Digital Platform</div>
          <h2 className="st">
            Client <span className="eco">Portal</span>
          </h2>
          <p className="ss">
            Manage payments, maintenance requests, eco reports, and documents in
            one place. This is a preview of the portal dashboard. Secure login
            is wired up in a later milestone.
          </p>
          <div className="erule" />

          <div className="portal-app">
            <aside className="p-side">
              <div className="p-side-lbl">Dashboard</div>
              {PORTAL_NAV.map((i) => (
                <div
                  key={i.label}
                  className={`p-item${i.active ? ' on' : ''}`}
                >
                  <span className="p-ico">{i.ico}</span>
                  {i.label}
                </div>
              ))}
            </aside>

            <div className="p-main">
              {PORTAL_WIDGETS.map((w) => (
                <div className="p-widget" key={w.label}>
                  <div className="pw-l">{w.label}</div>
                  <div
                    className="pw-v"
                    style={w.eco ? { color: 'var(--zennara-eco-l)' } : undefined}
                  >
                    {w.value}
                  </div>
                  <div className="pw-s">{w.sub}</div>
                </div>
              ))}
              <div className="p-widget p-wide">
                <div className="pw-l">Maintenance Requests</div>
                <div className="m-list">
                  {MAINTENANCE.map((m, i) => (
                    <div className="m-row" key={i}>
                      <span className={`m-dot ${m.status}`} />
                      <span className="m-desc">{m.desc}</span>
                      <span className="m-date">{m.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
