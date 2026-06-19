import Seo from '../components/Seo'
import Hero from '../components/sections/Hero'
import EcoStrip from '../components/layout/EcoStrip'
import StatsBar from '../components/sections/StatsBar'
import Services from '../components/sections/Services'
import Portfolio from '../components/sections/Portfolio'
import EcoSection from '../components/sections/EcoSection'

export default function Home() {
  return (
    <>
      <Seo
        title="ZENNARA Property & Facility Management"
        description="East Africa's eco-responsible property and facility management partner, delivering institutional-grade operations across Nairobi and beyond."
      />
      <Hero />
      <EcoStrip />
      <StatsBar />
      <Services count={6} />
      <Portfolio viewAll />
      <EcoSection />
    </>
  )
}
