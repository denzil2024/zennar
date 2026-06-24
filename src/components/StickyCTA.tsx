import { Link } from 'react-router-dom'

// Always-visible "Book Consultation" action, sits to the left of the WhatsApp FAB.
export default function StickyCTA() {
  return (
    <Link className="sticky-cta" to="/contact">
      Book Consultation
    </Link>
  )
}
