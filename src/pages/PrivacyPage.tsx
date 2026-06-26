import Seo from '../components/Seo'
import { SITE } from '../data/content'

const UPDATED = 'June 2026'

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How ZENNARA Property & Facility Management collects, uses, and protects your personal data."
      />
      <section>
        <div className="wrap">
          <article className="post-article">
            <div className="sl">Legal</div>
            <h1 className="st">Privacy Policy</h1>
            <div className="post-meta">Last updated {UPDATED}</div>

            <p className="post-p">
              This Privacy Policy explains how ZENNARA Property &amp; Facility
              Management Ltd (ZENNARA, we, us, our) collects, uses, and protects
              personal data when you use our website, contact us, or use our
              client portal. We handle personal data in line with the Data
              Protection Act, 2019 of Kenya.
            </p>

            <h2 className="post-h2">Information We Collect</h2>
            <p className="post-p">
              We collect information you give us directly, such as your name,
              email address, phone number, organisation, and details about your
              property or enquiry, when you complete a form, message us, or
              request a service.
            </p>
            <p className="post-p">
              We also collect limited information automatically when you browse
              the site, such as device type, browser, and the pages you visit,
              through cookies and similar technologies. If you hold a client
              portal account, we process the account and building information
              needed to deliver that service.
            </p>

            <h2 className="post-h2">How We Use Your Information</h2>
            <ul className="post-ul">
              <li>To respond to enquiries and provide the services you request</li>
              <li>To manage client and tenant relationships and the client portal</li>
              <li>To send service updates and, where you have agreed, relevant communications</li>
              <li>To improve our website, services, and customer experience</li>
              <li>To meet our legal, regulatory, and contractual obligations</li>
            </ul>

            <h2 className="post-h2">Legal Basis</h2>
            <p className="post-p">
              We process personal data where it is necessary to perform a
              contract with you, where we have a legitimate business interest,
              where we are required to by law, or where you have given consent.
              You may withdraw consent at any time.
            </p>

            <h2 className="post-h2">Sharing Your Information</h2>
            <p className="post-p">
              We do not sell your personal data. We share it only where
              necessary: with vendors and contractors who help us deliver
              services, with professional advisers, and with authorities where
              the law requires it. Any third party acting for us is required to
              protect your data and use it only for the agreed purpose.
            </p>

            <h2 className="post-h2">Data Retention</h2>
            <p className="post-p">
              We keep personal data only for as long as needed for the purposes
              described here, to meet legal and regulatory requirements, and to
              resolve disputes, after which it is securely deleted or
              anonymised.
            </p>

            <h2 className="post-h2">Security</h2>
            <p className="post-p">
              We apply appropriate technical and organisational measures to
              protect personal data against loss, misuse, and unauthorised
              access. No system can be guaranteed completely secure, but we work
              to keep your information safe and to act quickly if an issue
              arises.
            </p>

            <h2 className="post-h2">Your Rights</h2>
            <p className="post-p">
              Under the Data Protection Act, 2019, you have the right to access
              your personal data, to have it corrected or deleted, to object to
              or restrict its processing, and to data portability. To exercise
              any of these rights, contact us using the details below. You also
              have the right to lodge a complaint with the Office of the Data
              Protection Commissioner.
            </p>

            <h2 className="post-h2">Cookies</h2>
            <p className="post-p">
              Our website uses cookies and similar technologies to make the site
              work and to understand how it is used. You can control cookies
              through your browser settings, though some features may not work as
              intended if they are disabled.
            </p>

            <h2 className="post-h2">Third-Party Links</h2>
            <p className="post-p">
              Our website may link to other sites we do not control. We are not
              responsible for their content or privacy practices, and we
              encourage you to read their policies before sharing any
              information.
            </p>

            <h2 className="post-h2">Changes to This Policy</h2>
            <p className="post-p">
              We may update this Privacy Policy from time to time. The latest
              version will always appear on this page, with the date it was last
              updated.
            </p>

            <h2 className="post-h2">Contact Us</h2>
            <p className="post-p">
              For any question about this policy or your personal data, contact
              us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. ZENNARA
              Property &amp; Facility Management Ltd is based in {SITE.city}.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
