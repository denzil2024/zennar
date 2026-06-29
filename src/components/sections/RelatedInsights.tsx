import { Link } from 'react-router-dom'
import { POSTS, formatDate } from '../../data/posts'
import Reveal from '../Reveal'

// Cross-links the blog into the Services page, reusing the blog-card style.
export default function RelatedInsights({ count = 3 }: { count?: number }) {
  const posts = POSTS.slice(0, count)
  return (
    <section style={{ background: 'var(--bg-alt)' }}>
      <div className="wrap">
        <Reveal>
          <div className="sl">From Our Insights</div>
          <h2 className="st">
            Related <em>Reading</em>
          </h2>
          <p className="ss">
            Practical guides on running property and facilities in Kenya, from
            preventive maintenance to FM cost benchmarks.
          </p>
          <div className="rule" />
          <div className="blog-grid">
            {posts.map((p) => (
              <Link className="blog-card" to={`/blog/${p.slug}`} key={p.slug}>
                <div className="blog-cover">
                  {p.cover ? (
                    <img src={p.cover} alt={p.title} loading="lazy" />
                  ) : (
                    <span className="blog-cover-ico">{p.icon}</span>
                  )}
                  <span className="blog-cover-cat">{p.category}</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">{p.title}</h3>
                  <div className="blog-meta">
                    {formatDate(p.date)} · {p.readMins} min read
                  </div>
                  <p className="blog-excerpt">{p.excerpt}</p>
                  <span className="blog-more">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
