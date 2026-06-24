import { CERTIFICATIONS } from '../../data/content'

export default function Certifications() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <div className="sl eco">Standards &amp; Memberships</div>
        <h2 className="st">
          Built on Recognised <em>Standards</em>
        </h2>
        <p className="ss">
          Our operations are held to internationally recognised quality,
          environmental, and safety standards.
        </p>
        <div className="rule" />
        <div className="cert-grid">
          {CERTIFICATIONS.map((c) => (
            <div className="cert-card" key={c.name}>
              <div className="cert-logo">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} />
                ) : (
                  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 1l3.09 2.26 3.82.16.93 3.71 2.66 2.74-1.46 3.53.5 3.79L12 21l-3.43.06.5-3.79-1.46-3.53 2.66-2.74.93-3.71 3.82-.16L12 1zm-1.2 13.4l5.3-5.3-1.4-1.4-3.9 3.9-1.7-1.7-1.4 1.4 3.1 3.1z"
                    />
                  </svg>
                )}
              </div>
              <div className="cert-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
