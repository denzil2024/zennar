import Seo from '../components/Seo'
import { SITE } from '../data/content'

export default function ContactPage() {
  const waLink = `https://wa.me/${SITE.whatsapp}`
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with ZENNARA Property & Facility Management in Nairobi via WhatsApp, email, or our enquiry form."
      />
      <section>
        <div className="wrap">
          <div className="sl">Get In Touch</div>
          <h2 className="st">
            Contact <em>ZENNARA</em>
          </h2>
          <p className="ss">
            Speak with our team about managing your property or facility. We
            respond fastest on WhatsApp.
          </p>
          <div className="rule" />
          <div className="contact-grid">
            <div className="contact-card">
              <div className="cc-lbl">WhatsApp</div>
              <a className="btn-e" href={waLink} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <p className="cc-note">Live chat for client and tenant enquiries.</p>
            </div>
            <div className="contact-card">
              <div className="cc-lbl">Email</div>
              <a className="btn-o" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <p className="cc-note">For proposals and partnership enquiries.</p>
            </div>
            <div className="contact-card">
              <div className="cc-lbl eco">Office</div>
              <div className="cc-text">{SITE.city}</div>
              <p className="cc-note">
                Google Maps location embed coming in a later milestone.
              </p>
            </div>
          </div>
          <div className="map-placeholder">Google Map · Nairobi (to be embedded)</div>
        </div>
      </section>
    </>
  )
}
