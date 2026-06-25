import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Service } from '../../data/content'
import Seo from '../Seo'

// Route-driven popup for a single service (URL: /services/<slug>).
export default function ServiceModal({ service }: { service: Service }) {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/services')
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [navigate])

  return (
    <>
      <Seo
        title={service.t}
        description={service.long}
      />
      <div
        className="svc-modal"
        role="dialog"
        aria-modal="true"
        onClick={() => navigate('/services')}
      >
        <div className="svc-modal-card" onClick={(e) => e.stopPropagation()}>
          <Link to="/services" className="svc-modal-x" aria-label="Close">
            ×
          </Link>
          <div className="svc-modal-ico">{service.ico}</div>
          <div className={`sl${service.eco ? ' eco' : ''}`}>
            {service.eco ? 'Eco Service' : 'Service'}
          </div>
          <h2 className="svc-modal-t">{service.t}</h2>
          <p className="svc-modal-d">{service.long}</p>
          <div className="svc-modal-fl">What's included</div>
          <ul className="svc-modal-feat">
            {service.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="svc-modal-actions">
            <Link className="btn-g" to="/contact">
              Book Consultation
            </Link>
            <Link className="btn-o" to="/services">
              All services
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
