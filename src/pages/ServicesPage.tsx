import Seo from '../components/Seo'
import Services from '../components/sections/Services'
import EcoStrip from '../components/layout/EcoStrip'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Property management, facility management, Eco FM, building maintenance, cleaning, security coordination, inspections, and FM consultancy."
      />
      <Services
        title="Our"
        subtitle="ZENNARA delivers institutional-grade property and facility management across Nairobi — with our Eco FM service line as a core differentiator."
      />
      <EcoStrip />
    </>
  )
}
