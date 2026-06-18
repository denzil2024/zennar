import Seo from '../components/Seo'
import EcoSection from '../components/sections/EcoSection'
import StatsBar from '../components/sections/StatsBar'

export default function EcoPage() {
  return (
    <>
      <Seo
        title="Eco FM"
        description="ZENNARA's eco-responsible facility management — energy and water efficiency, waste diversion, green procurement, and carbon reporting."
      />
      <EcoSection />
      <StatsBar />
    </>
  )
}
