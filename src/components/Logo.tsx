import { ASSETS } from '../data/content'

// Renders the brand mark. When ASSETS.logo is set it uses the real logo image
// everywhere (nav + footer); otherwise it falls back to the styled wordmark.
export default function Logo() {
  if (ASSETS.logo) {
    return <img className="logo-img" src={ASSETS.logo} alt="ZENNARA" />
  }
  return (
    <>
      ZENN<span>A</span>RA
    </>
  )
}
