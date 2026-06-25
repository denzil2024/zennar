import { useRouteError } from 'react-router-dom'

// Self-healing error boundary. The common production failure is a stale tab
// after a deploy: a client-side route-data fetch receives HTML (the SPA
// fallback) instead of JSON and throws "Unexpected token '<' ... not valid
// JSON", or a content-hashed chunk 404s. We reload once to pull the fresh
// build; if it still fails we show a friendly message instead of looping.
const RELOAD_KEY = 'zennara_auto_reloaded'

export default function RouteError() {
  const error = useRouteError()
  const msg = String((error as Error)?.message ?? error ?? '')
  const staleBuild =
    /Unexpected token|not valid JSON|dynamically imported module|Loading chunk|Importing a module script failed|Failed to fetch/i.test(
      msg,
    )

  if (typeof window !== 'undefined' && staleBuild) {
    if (!sessionStorage.getItem(RELOAD_KEY)) {
      sessionStorage.setItem(RELOAD_KEY, String(Date.now()))
      window.location.reload()
      return null
    }
  }

  return (
    <section>
      <div className="wrap" style={{ textAlign: 'center', padding: '90px 0' }}>
        <div className="sl">Error</div>
        <h2 className="st">Something went wrong</h2>
        <p className="ss" style={{ margin: '0 auto 28px' }}>
          Please refresh the page. If the problem continues, let us know.
        </p>
        <a className="btn-g" href="/">
          Back to home
        </a>
      </div>
    </section>
  )
}
