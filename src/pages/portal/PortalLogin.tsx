import Seo from '../../components/Seo'

export default function PortalLogin() {
  return (
    <>
      <Seo
        title="Client Portal"
        description="ZENNARA Client Portal login."
        noindex
      />
      <section className="portal-wrap">
        <div className="portal-login">
          <div className="sl eco">Client Portal</div>
          <h2 className="st" style={{ fontSize: 34 }}>
            Welcome <em>Back</em>
          </h2>
          <p className="ss" style={{ marginBottom: 24 }}>
            Access maintenance requests, reports, and your managed portfolio.
          </p>
          <form
            className="portal-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="pf-label">Email</label>
            <input className="pf-input" type="email" placeholder="you@company.com" />
            <label className="pf-label">Password</label>
            <input className="pf-input" type="password" placeholder="••••••••" />
            <button className="btn-e" type="submit" style={{ width: '100%', marginTop: 8 }}>
              Sign In
            </button>
          </form>
          <p className="cc-note" style={{ marginTop: 16 }}>
            Authentication backend is wired up in a later milestone. This is a
            preview of the portal entry point.
          </p>
        </div>
      </section>
    </>
  )
}
