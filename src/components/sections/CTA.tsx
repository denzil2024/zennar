import { Link } from 'react-router-dom'

type Props = {
  title?: string
  text?: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}

// Reusable closing call-to-action band.
export default function CTA({
  title = "Let's talk about your property.",
  text = 'Book a consultation or request a free property assessment, and we will get back to you within 2 hours.',
  primary = { label: 'Book Consultation', to: '/contact' },
  secondary = { label: 'Free Property Assessment', to: '/' },
}: Props) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{text}</p>
        <div className="cta-actions">
          <Link className="btn-g" to={primary.to}>
            {primary.label}
          </Link>
          <Link className="btn-o" to={secondary.to}>
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
