import Seo from '../components/Seo'
import LeadForm from '../components/LeadForm'
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
            Speak with our team about managing your property, building, or
            portfolio. Share a few details using the form and a specialist will
            respond within one business hour, or reach us directly on WhatsApp.
          </p>
          <div className="rule" />
          <div className="contact-cols">
            <LeadForm />
            <div className="contact-aside">
              <div className="contact-row">
                <div className="cc-lbl">WhatsApp</div>
                <a className="btn-e" href={waLink} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
                <p className="cc-note">Live chat for client and tenant enquiries.</p>
              </div>
              <div className="contact-row">
                <div className="cc-lbl">Email</div>
                <a className="cc-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <p className="cc-note">For proposals and partnership enquiries.</p>
              </div>
              <div className="contact-row">
                <div className="cc-lbl eco">Office</div>
                <div className="cc-text">{SITE.address}</div>
                <p className="cc-note">{SITE.city}</p>
              </div>
            </div>
          </div>
          <div className="map-divider" />
          <iframe
            className="map-embed"
            title="ZENNARA office location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              `${SITE.address}, ${SITE.city}`,
            )}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}
