import { ASSETS } from '../data/content'

// Renders the brand mark. When logo assets are set it shows the theme-matched
// SVG (white-wordmark in dark mode, dark-wordmark in light mode), swapped by
// CSS so there is no flash. Falls back to the styled text wordmark otherwise.
export default function Logo() {
  if (ASSETS.logoDark || ASSETS.logoLight) {
    return (
      <>
        {ASSETS.logoDark && (
          <img className="logo-img logo-dark" src={ASSETS.logoDark} alt="ZENNARA" />
        )}
        {ASSETS.logoLight && (
          <img className="logo-img logo-light" src={ASSETS.logoLight} alt="ZENNARA" />
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
