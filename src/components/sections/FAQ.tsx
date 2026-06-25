import { useState } from 'react'
import { FAQS } from '../../data/content'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section>
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
              {open === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
