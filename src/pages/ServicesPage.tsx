import Seo from '../components/Seo'
import Services from '../components/sections/Services'
import Onboarding from '../components/sections/Onboarding'
import WhySwitch from '../components/sections/WhySwitch'
import TrustStrip from '../components/sections/TrustStrip'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
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
        subtitle="ZENNARA delivers institutional-grade property and facility management, with our Eco FM service line as a core differentiator."
      />
      <EcoStrip />
      <Onboarding />
      <WhySwitch />
      <TrustStrip />
      <FAQ />
      <CTA />
    </>
  )
}
