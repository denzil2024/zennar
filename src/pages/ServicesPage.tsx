import { useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Services from '../components/sections/Services'
import Onboarding from '../components/sections/Onboarding'
import WhySwitch from '../components/sections/WhySwitch'
import KpiScorecard from '../components/sections/KpiScorecard'
import ReportingCadence from '../components/sections/ReportingCadence'
import TrustStrip from '../components/sections/TrustStrip'
import FAQ from '../components/sections/FAQ'
import RelatedInsights from '../components/sections/RelatedInsights'
import CTA from '../components/sections/CTA'
import ServiceModal from '../components/sections/ServiceModal'
import EcoStrip from '../components/layout/EcoStrip'
import { SERVICES } from '../data/content'

export default function ServicesPage() {
  const { slug } = useParams()
  const service = slug ? SERVICES.find((s) => s.slug === slug) : null
  return (
    <>
      <Seo
        title="Services"
        description="Property management, facility management, Eco FM, building maintenance, cleaning, security coordination, inspections, and FM consultancy."
      />
      <Services
        title="Our"
        subtitle="ZENNARA delivers institutional-grade property and facility management, built on integrated in-house operations, a real-time Executive Owner Dashboard, and disciplined rent collection that holds efficiency above 98%."
      />
      <EcoStrip />
      <Onboarding />
      <WhySwitch />
      <KpiScorecard />
      <ReportingCadence />
      <TrustStrip />
      <FAQ />
      <RelatedInsights />
      <CTA />
      {service && <ServiceModal service={service} />}
    </>
  )
}
