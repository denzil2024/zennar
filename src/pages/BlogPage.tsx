import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { POSTS, formatDate } from '../data/posts'

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Insights"
        description="FM insights and eco news from ZENNARA: facility management, sustainability, and green building operations across Nairobi."
      />
      <section>
        <div className="wrap">
          <div className="sl">Insights</div>
          <h2 className="st">
            FM Insights &amp; <em>Eco News</em>
          </h2>
          <p className="ss">
            Practical thinking on facility management, sustainability, and green
            building operations.
          </p>
          <div className="rule" />
          <div className="blog-grid">
            {POSTS.map((p) => (
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
        </div>
      </section>
    </>
  )
}
