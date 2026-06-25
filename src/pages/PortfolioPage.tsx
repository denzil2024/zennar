import Seo from '../components/Seo'
import Portfolio from '../components/sections/Portfolio'
import TrustStrip from '../components/sections/TrustStrip'
import CTA from '../components/sections/CTA'

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="A selection of the commercial and residential properties ZENNARA manages across our markets."
      />
      <Portfolio background="var(--bg)" />
      <TrustStrip />
      <CTA />
    </>
  )
}
