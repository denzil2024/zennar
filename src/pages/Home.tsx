import Seo from '../components/Seo'
import Hero from '../components/sections/Hero'
import EcoStrip from '../components/layout/EcoStrip'
import StatsBar from '../components/sections/StatsBar'
import Services from '../components/sections/Services'
import Portfolio from '../components/sections/Portfolio'
import EcoSection from '../components/sections/EcoSection'
import { SITE } from '../data/content'

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ZENNARA Property & Facility Management',
  description:
    "East Africa's eco-responsible property and facility management partner, delivering institutional-grade operations across Nairobi and beyond.",
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
        description="East Africa's eco-responsible property and facility management partner, delivering institutional-grade operations across Nairobi and beyond."
        jsonLd={LOCAL_BUSINESS}
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
