// Static site content for ZENNARA. All content is code-managed (no CMS).

export type Service = { ico: string; t: string; d: string; eco: boolean }
export type Property = {
  ico: string
  dist: string
  nm: string
  addr: string
  badge: string
}
export type Stat = { n: string; l: string; eco: boolean }
export type NavLinkItem = { to: string; label: string }

export const NAV_LINKS: NavLinkItem[] = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/eco', label: 'Eco FM' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const SERVICES: Service[] = [
  { ico: '🏢', t: 'Property Management', d: 'Comprehensive residential and commercial property management.', eco: false },
  { ico: '⚙️', t: 'Facility Management', d: 'Smart building operations, maintenance, and engineering.', eco: false },
  { ico: '🌿', t: 'Eco FM Services', d: 'Green-certified cleaning, energy, and waste management.', eco: true },
  { ico: '🔧', t: 'Building Maintenance', d: 'Preventive and reactive maintenance by certified contractors.', eco: false },
  { ico: '🧹', t: 'Eco Cleaning', d: 'Eco-certified commercial and residential cleaning.', eco: true },
  { ico: '🔒', t: 'Security Coordination', d: 'End-to-end security management across all properties.', eco: false },
  { ico: '📋', t: 'Inspections', d: 'Scheduled condition surveys and compliance inspections.', eco: false },
  { ico: '🧭', t: 'FM Consultancy', d: 'Advisory on operations, efficiency, and sustainability strategy.', eco: false },
]

export const PORTFOLIO: Property[] = [
  { ico: '🏙️', dist: 'Under Management', nm: 'Pinnacle Business Park', addr: '📍 Westlands', badge: 'Managed' },
  { ico: '🏢', dist: 'Under Management', nm: 'UN Crescent Residences', addr: '📍 Gigiri', badge: 'Managed' },
  { ico: '🌿', dist: 'Eco Showcase', nm: 'Karen Eco Business Hub', addr: '📍 Karen', badge: 'Eco Hub' },
]

export const STATS: Stat[] = [
  { n: '500+', l: 'Properties Managed', eco: false },
  { n: '98%', l: 'Client Retention', eco: false },
  { n: '78%', l: 'Waste Diverted', eco: true },
  { n: '22%', l: 'Energy Saved', eco: true },
]

export const ECO_PILLS: string[] = [
  '♻️ Waste Reduction',
  '💡 Energy Efficiency',
  '🌱 Green Procurement',
  '🌊 Water Management',
  '🏗️ Sustainable Maintenance',
  '📊 Carbon Reporting',
  '☀️ Solar-Ready Buildings',
]

export const VALUES: { label: string; eco: boolean }[] = [
  { label: 'Luxury', eco: false },
  { label: 'Trust', eco: false },
  { label: 'Precision', eco: false },
  { label: 'Sustainability', eco: true },
]

// Centralised site config (contact, WhatsApp). Swap in real values when supplied.
export const SITE = {
  whatsapp: '254700000000', // placeholder Nairobi number; replace with client's
  email: 'hello@zennara.co.ke',
  city: 'Nairobi, Kenya',
}
