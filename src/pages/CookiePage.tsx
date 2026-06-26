import Seo from '../components/Seo'
import { SITE } from '../data/content'

const UPDATED = 'June 2026'

export default function CookiePage() {
  return (
    <>
      <Seo
        title="Cookie Policy"
        description="How ZENNARA Property & Facility Management uses cookies and similar technologies on its website."
      />
      <section>
        <div className="wrap">
          <article className="post-article">
            <div className="sl">Legal</div>
            <h1 className="st">Cookie Policy</h1>
            <div className="post-meta">Last updated {UPDATED}</div>

            <p className="post-p">
              This Cookie Policy explains how ZENNARA Property &amp; Facility
              Management Ltd (ZENNARA, we, us, our) uses cookies and similar
              technologies on our website. It should be read alongside our{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2 className="post-h2">What Cookies Are</h2>
            <p className="post-p">
              Cookies are small text files placed on your device when you visit a
              website. They are widely used to make sites work, to remember your
              preferences, and to give owners information about how their site is
              used.
            </p>

            <h2 className="post-h2">The Cookies We Use</h2>
            <ul className="post-ul">
              <li>
                <strong>Strictly necessary cookies</strong>, which the site needs
                to function, such as keeping you signed in to the client portal
                and keeping the service secure
              </li>
              <li>
                <strong>Performance cookies</strong>, which help us understand how
                visitors use the site so we can improve it, in aggregate and
                without identifying you
              </li>
              <li>
                <strong>Functional cookies</strong>, which remember choices you
                make, such as preferences, to give you a smoother experience
              </li>
            </ul>

            <h2 className="post-h2">Third-Party Cookies</h2>
            <p className="post-p">
              Some cookies may be set by third-party services we use, for example
              to measure site performance or to enable embedded content. These
              providers set their own cookies, and we encourage you to review
              their policies.
            </p>

            <h2 className="post-h2">Managing Cookies</h2>
            <p className="post-p">
              You can control and delete cookies through your browser settings,
              and set your browser to warn you before accepting them. Blocking
              strictly necessary cookies may stop parts of the site, including
              the client portal, from working as intended.
            </p>

            <h2 className="post-h2">Changes to This Policy</h2>
            <p className="post-p">
              We may update this Cookie Policy from time to time. The latest
              version will always appear on this page, with the date it was last
              updated.
            </p>

            <h2 className="post-h2">Contact Us</h2>
            <p className="post-p">
              For any question about our use of cookies, contact us at{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. ZENNARA Property
              &amp; Facility Management Ltd is based in {SITE.city}.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
