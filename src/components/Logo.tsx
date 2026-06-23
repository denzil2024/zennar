import { ASSETS } from '../data/content'

// Renders the brand mark. When logo assets are set it shows the theme-matched
// SVG (white-wordmark in dark mode, dark-wordmark in light mode), swapped by
// CSS so there is no flash. Falls back to the styled text wordmark otherwise.
//
// variant="mark" (header): shows the wordmark with the tagline cropped off the
// artwork, then renders the tagline as separate, clearly readable HTML text.
// variant="full" (footer): shows the complete designer lockup as-is.
export default function Logo({ variant = 'full' }: { variant?: 'full' | 'mark' }) {
  const mark = variant === 'mark'
  const dark = mark ? ASSETS.wordmarkDark : ASSETS.logoDark
  const light = mark ? ASSETS.wordmarkLight : ASSETS.logoLight

  if (dark || light) {
    return (
      <>
        {dark && <img className="logo-img logo-dark" src={dark} alt="ZENNARA" />}
        {light && <img className="logo-img logo-light" src={light} alt="ZENNARA" />}
        {mark && ASSETS.tagline && (
          <span className="brand-tagline">{ASSETS.tagline}</span>
        )}
      </>
    )
  }
  return (
    <>
      ZENN<span>A</span>RA
    </>
  )
}
