import Seo from '../components/Seo'
import { SITE } from '../data/content'

const UPDATED = 'June 2026'

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="The terms governing your use of the ZENNARA Property & Facility Management website and client portal."
      />
      <section>
        <div className="wrap">
          <article className="post-article">
            <div className="sl">Legal</div>
            <h1 className="st">Terms of Service</h1>
            <div className="post-meta">Last updated {UPDATED}</div>

            <p className="post-p">
              These Terms of Service govern your use of the website and client
              portal of ZENNARA Property &amp; Facility Management Ltd (ZENNARA,
              we, us, our). By using this website, you agree to these terms. If
              you do not agree with them, please do not use the site.
            </p>

            <h2 className="post-h2">Use of the Website</h2>
            <p className="post-p">
              You may use this website for lawful purposes only. You agree not
              to misuse it, attempt to gain unauthorised access to any part of
              it, interfere with its operation, or use it in any way that could
              damage or impair the service for others.
            </p>

            <h2 className="post-h2">Services and Enquiries</h2>
            <p className="post-p">
              The website describes our services and lets you make enquiries.
              Information on the site is for general guidance and does not by
              itself create a contract. Any service we provide is governed by a
              separate written agreement that sets out the scope, fees, and
              terms specific to your property.
            </p>

            <h2 className="post-h2">Client Portal</h2>
            <p className="post-p">
              Access to the client portal is provided to authorised clients
              only. You are responsible for keeping your login details
              confidential and for all activity under your account. Notify us
              promptly if you believe your account has been accessed without your
              permission.
            </p>

            <h2 className="post-h2">Intellectual Property</h2>
            <p className="post-p">
              All content on this website, including text, graphics, logos, and
              the ZENNARA name and marks, is owned by or licensed to us and is
              protected by law. You may not copy, reproduce, or reuse it without
              our written permission, other than for your own personal,
              non-commercial reference.
            </p>

            <h2 className="post-h2">Content and Disclaimers</h2>
            <p className="post-p">
              Our articles and guides are general information, not professional,
              legal, or financial advice, and should not be relied on as a
              substitute for advice tailored to your situation. We work to keep
              the site accurate and current, but we provide it on an as-is basis
              and make no warranty that it is complete or error-free.
            </p>

            <h2 className="post-h2">Limitation of Liability</h2>
            <p className="post-p">
              To the extent permitted by law, ZENNARA is not liable for any loss
              or damage arising from your use of, or inability to use, this
              website, including any reliance on information published on it.
              Nothing in these terms limits any liability that cannot be limited
              under the law of Kenya.
            </p>

            <h2 className="post-h2">Third-Party Links</h2>
            <p className="post-p">
              This website may link to sites we do not control. We are not
              responsible for their content, products, or practices, and a link
              does not imply our endorsement.
            </p>

            <h2 className="post-h2">Governing Law</h2>
            <p className="post-p">
              These terms are governed by the laws of Kenya, and any dispute
              relating to them or to your use of the website is subject to the
              jurisdiction of the courts of Kenya.
            </p>

            <h2 className="post-h2">Changes to These Terms</h2>
            <p className="post-p">
              We may update these terms from time to time. The current version
              will always appear on this page, with the date it was last
              updated, and your continued use of the site means you accept any
              changes.
            </p>

            <h2 className="post-h2">Contact Us</h2>
            <p className="post-p">
              For any question about these terms, contact us at{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. ZENNARA Property
              &amp; Facility Management Ltd is based in {SITE.city}.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
