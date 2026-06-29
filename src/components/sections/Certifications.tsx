import { useState } from 'react'
import { CERTIFICATIONS } from '../../data/content'

// Renders the accreditation logo when a file is present, and falls back to the
// badge icon if the logo is missing or fails to load (so cards never break).
function CertMark({ name, logo }: { name: string; logo?: string }) {
  const [broken, setBroken] = useState(false)
  if (logo && !broken) {
    return <img src={logo} alt={name} onError={() => setBroken(true)} />
  }
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1l3.09 2.26 3.82.16.93 3.71 2.66 2.74-1.46 3.53.5 3.79L12 21l-3.43.06.5-3.79-1.46-3.53 2.66-2.74.93-3.71 3.82-.16L12 1zm-1.2 13.4l5.3-5.3-1.4-1.4-3.9 3.9-1.7-1.7-1.4 1.4 3.1 3.1z"
      />
    </svg>
  )
}

export default function Certifications() {
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <div className="sl eco">Accreditations &amp; Memberships</div>
        <h2 className="st">
          Built on Professional <em>Credentials</em>
        </h2>
        <p className="ss">
          Our managers hold active professional accreditations, and our
          operations align with Kenyan statutory standards, not generalist
          caretaking.
        </p>
        <div className="rule" />
        <div className="cert-grid">
          {CERTIFICATIONS.map((c) => (
            <div className="cert-card" key={c.name}>
              <div className="cert-logo">
                <CertMark name={c.name} logo={c.logo} />
              </div>
              <div className="cert-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
