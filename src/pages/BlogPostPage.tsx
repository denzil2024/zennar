import { Link, useParams } from 'react-router-dom'
import type { ReactNode } from 'react'
import Seo from '../components/Seo'
import { getPost, formatDate } from '../data/posts'
import { SITE } from '../data/content'

// Renders inline **bold** and [label](href) markers within post text.
// Links starting with "/" become in-app <Link>s; others open in a new tab.
function rich(text: string): ReactNode {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
      if (link) {
        const [, label, href] = link
        return href.startsWith('/') ? (
          <Link key={i} to={href}>
            {label}
          </Link>
        ) : (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      }
      return part
    })
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <>
        <Seo title="Post Not Found" noindex />
        <section>
          <div className="wrap">
            <h2 className="st">Post not found</h2>
            <p className="ss">That article does not exist or has moved.</p>
            <div className="rule" />
            <Link className="btn-o" to="/blog">
              Back to Insights
            </Link>
          </div>
        </section>
      </>
    )
  }

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'ZENNARA Property & Facility Management',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZENNARA Property & Facility Management',
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    ...(post.cover ? { image: `${SITE.url}${post.cover}` } : {}),
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} jsonLd={articleLd} />
      <section>
        <div className="wrap">
          <article className="post-article">
            <div className="sl">{post.category}</div>
            <h1 className="st">{post.title}</h1>
            <div className="post-meta">
              {formatDate(post.date)} · {post.readMins} min read
            </div>
            <div className="post-cover">
              {post.cover ? (
                <img src={post.cover} alt={post.title} />
              ) : (
                <span className="post-cover-ico">{post.icon}</span>
              )}
            </div>
            {post.body.map((b, i) => {
              switch (b.type) {
                case 'h2':
                  return (
                    <h2 className="post-h2" key={i}>
                      {b.text}
                    </h2>
                  )
                case 'h3':
                  return (
                    <h3 className="post-h3" key={i}>
                      {b.text}
                    </h3>
                  )
                case 'ul':
                  return (
                    <ul className="post-ul" key={i}>
                      {b.items.map((it, j) => (
                        <li key={j}>{rich(it)}</li>
                      ))}
                    </ul>
                  )
                case 'table':
                  return (
                    <div className="post-table-wrap" key={i}>
                      <table className="post-table">
                        <thead>
                          <tr>
                            {b.headers.map((h, j) => (
                              <th key={j}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {b.rows.map((row, r) => (
                            <tr key={r}>
                              {row.map((cell, c) => (
                                <td key={c}>{rich(cell)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                case 'callout':
                  return (
                    <div className={`post-callout ${b.variant}`} key={i}>
                      <span className="post-callout-tag">
                        {b.variant === 'tip' ? 'Pro tip' : 'Caution'}
                      </span>
                      {b.title && (
                        <span className="post-callout-title">{b.title}</span>
                      )}
                      <p>{rich(b.text)}</p>
                    </div>
                  )
                case 'cta':
                  return (
                    <div className="post-cta" key={i}>
                      <h2 className="post-cta-title">{b.title}</h2>
                      <p className="post-cta-text">{rich(b.text)}</p>
                      <Link className="btn-g" to={b.to}>
                        {b.buttonLabel}
                      </Link>
                    </div>
                  )
                default:
                  return (
                    <p className="post-p" key={i}>
                      {rich(b.text)}
                    </p>
                  )
              }
            })}
            <div className="post-back">
              <Link className="btn-o" to="/blog">
                Back to Insights
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
