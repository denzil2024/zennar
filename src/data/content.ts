// Static site content for ZENNARA. All content is code-managed (no CMS).

export type Service = { ico: string; t: string; d: string; eco: boolean }
export type Property = {
  ico: string
  dist: string
  nm: string
  addr: string
  badge: string
  img?: string // optional photo path (e.g. '/properties/pinnacle.jpg'); falls back to placeholder tile
}
export type Stat = { n: string; l: string; eco: boolean }
export type NavLinkItem = { to: string; label: string }

export const NAV_LINKS: NavLinkItem[] = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/eco', label: 'Eco FM' },
  { to: '/blog', label: 'Insights' },
  { to: '/portal', label: 'Portal' },
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
  { ico: '🏙️', dist: 'Under Management', nm: 'Pinnacle Business Park', addr: '📍 Westlands', badge: 'Managed', img: '/properties/pinnacle-business-park.jpg' },
  { ico: '🏢', dist: 'Under Management', nm: 'UN Crescent Residences', addr: '📍 Gigiri', badge: 'Managed', img: '/properties/un-crescent-residences.jpg' },
  { ico: '🌿', dist: 'Eco Showcase', nm: 'Karen Eco Business Hub', addr: '📍 Karen', badge: 'Eco Hub', img: '/properties/karen-eco-business-hub.jpg' },
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

// Centralised site config. Swap in real values when supplied (each is a one-line edit).
export const SITE = {
  url: 'https://zennarafp.com', // canonical base; update when the real domain is confirmed
  whatsapp: '254700000000', // placeholder Nairobi number; replace with client's
  email: 'hello@zennarafp.com',
  phone: '+254700000000',
  city: 'Nairobi, Kenya',
  ogImage: '', // set to e.g. '/og-image.jpg' (1200x630) once a share image is provided
}

// Brand assets. Leave blank to use the text/placeholder fallbacks; set the path
// (file in /public) to swap in the real asset everywhere at once.
export const ASSETS = {
  // Logo swaps by theme automatically. Leave both blank for the text fallback.
  logoDark: '/zennara-logo-dark.svg', // full lockup, white (dark mode) - used in footer
  logoLight: '/zennara-logo-light.svg', // full lockup, black (light mode) - used in footer
  // Header variant: same wordmark with the baked-in tagline cropped off, so the
  // header can show a small mark plus a separate, clearly readable HTML tagline.
  wordmarkDark: '/zennara-wordmark-dark.svg',
  wordmarkLight: '/zennara-wordmark-light.svg',
  tagline: 'Property & Facility Management',
  heroImage: '', // optional photo behind the hero (kept clean for now)
}
