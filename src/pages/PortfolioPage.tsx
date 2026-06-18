import Seo from '../components/Seo'
import Portfolio from '../components/sections/Portfolio'

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="A selection of the commercial and residential properties ZENNARA manages across Nairobi."
      />
      <Portfolio background="var(--zennara-black)" />
    </>
  )
}
