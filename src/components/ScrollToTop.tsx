import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// A service detail (/services/<slug>) is a popup over /services, not a page
// change, so we skip the scroll reset when only opening/closing it.
const isServiceDetail = (p: string) => /^\/services\/[^/]+$/.test(p)

// Resets scroll to the top on a real page navigation (header/footer links, logo).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const prev = useRef('')

  useEffect(() => {
    const togglingPopup = isServiceDetail(pathname) || isServiceDetail(prev.current)
    prev.current = pathname
    if (!togglingPopup) window.scrollTo(0, 0)
  }, [pathname])

  return null
}
