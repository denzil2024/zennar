import { useState } from 'react'
import { Head } from 'vite-react-ssg'
import { FAQS } from '../../data/content'

// FAQPage structured data so the Q&As are eligible for rich results.
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section>
      <Head>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Head>
      <div className="wrap">
        <div className="sl">FAQ</div>
        <h2 className="st">
          Common <em>Questions</em>
        </h2>
        <div className="rule" />
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-ic" aria-hidden="true">
                  +
                </span>
              </button>
              {/* Answer stays in the DOM (toggled via hidden) so it is present
                  in the static HTML for search engines and source readers. */}
              <p className="faq-a" hidden={open !== i}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
