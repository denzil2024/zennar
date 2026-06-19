import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { getPost, formatDate } from '../data/posts'

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
            <p className="ss">
              That article does not exist or has moved.
            </p>
            <div className="rule" />
            <Link className="btn-o" to="/blog">
              Back to Insights
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
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
            {post.body.map((b, i) =>
              b.type === 'h2' ? (
                <h2 className="post-h2" key={i}>
                  {b.text}
                </h2>
              ) : (
                <p className="post-p" key={i}>
                  {b.text}
                </p>
              ),
            )}
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
