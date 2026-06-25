import Seo from '../components/Seo'
import Hero from '../components/sections/Hero'
import EcoStrip from '../components/layout/EcoStrip'
import StatsBar from '../components/sections/StatsBar'
import Services from '../components/sections/Services'
import Portfolio from '../components/sections/Portfolio'
import EcoSection from '../components/sections/EcoSection'
import TrustStrip from '../components/sections/TrustStrip'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import { SITE } from '../data/content'

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ZENNARA Property & Facility Management',
  description:
    "An eco-responsible property and facility management partner delivering institutional-grade operations across the markets we serve.",
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: 'Nairobi, Kenya',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
}

export default function Home() {
  return (
    <>
      <Seo
        title="ZENNARA Property & Facility Management"
        description="An eco-responsible property and facility management partner delivering institutional-grade operations across the markets we serve."
        jsonLd={LOCAL_BUSINESS}
      />
      <Hero />
      <EcoStrip />
      <StatsBar />
      <Services count={6} />
      <TrustStrip />
      <Portfolio viewAll />
      <EcoSection />
      <FAQ />
      <CTA />
    </>
  )
}
