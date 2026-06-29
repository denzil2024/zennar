// Static site content for ZENNARA. All content is code-managed (no CMS).

export type Service = {
  ico: string
  t: string
  d: string
  eco: boolean
  slug: string
  long: string
  features: string[]
}
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
  {
    ico: '🏢',
    t: 'Property Management',
    d: 'Comprehensive residential and commercial property management.',
    eco: false,
    slug: 'property-management',
    long: 'End-to-end management of residential and commercial properties, covering tenant relations, rent and service-charge collection, budgeting, and compliance. We protect your asset value and income while taking the day-to-day off your plate.',
    features: [
      'Rent collection and arrears management, 98%+ efficiency',
      'Tenant relations and communications',
      'Budgeting and financial reporting',
      'Statutory compliance and inspections',
    ],
  },
  {
    ico: '⚙️',
    t: 'Facility Management',
    d: 'Smart building operations, maintenance, and engineering.',
    eco: false,
    slug: 'facility-management',
    long: 'Reliable building operations across mechanical, electrical, and engineering systems. We keep your building running efficiently, safely, and to standard, with planned maintenance and rapid response built in.',
    features: [
      'Mechanical and electrical operations',
      'Planned preventive maintenance',
      'Vendor and contractor management',
      'Health, safety, and compliance',
    ],
  },
  {
    ico: '🌿',
    t: 'Eco FM Services',
    d: 'Green-certified cleaning, energy, and waste management.',
    eco: true,
    slug: 'eco-fm-services',
    long: 'Facility management with sustainability built into daily operations. We actively manage energy, water, waste, and procurement to cut both your environmental footprint and your running costs, with ESG-ready reporting.',
    features: [
      'Energy and water optimisation',
      'Waste diversion and recycling',
      'Green procurement',
      'Carbon and ESG reporting',
    ],
  },
  {
    ico: '🔧',
    t: 'Building Maintenance',
    d: 'Preventive and reactive maintenance by certified contractors.',
    eco: false,
    slug: 'building-maintenance',
    long: 'Preventive and reactive maintenance delivered by vetted, certified contractors. We catch issues before they escalate and resolve faults fast, protecting asset value and keeping tenants satisfied.',
    features: [
      'Planned preventive maintenance',
      '24/7 reactive repairs',
      'Vetted, certified contractors',
      'Asset condition tracking',
    ],
  },
  {
    ico: '🧹',
    t: 'Eco Cleaning',
    d: 'Eco-certified commercial and residential cleaning.',
    eco: true,
    slug: 'eco-cleaning',
    long: 'Eco-certified cleaning for commercial and residential spaces, using low-impact products and methods that are safer for occupants and the environment, without compromising on standards.',
    features: [
      'Eco-certified products and methods',
      'Commercial and residential',
      'Trained, supervised teams',
      'Scheduled and one-off services',
    ],
  },
  {
    ico: '🔒',
    t: 'Security Coordination',
    d: 'End-to-end security management across all properties.',
    eco: false,
    slug: 'security-coordination',
    long: 'End-to-end coordination of security across your properties, from manned guarding and access control to surveillance and incident response, managed through a single point of accountability.',
    features: [
      'Manned guarding coordination',
      'Access control and CCTV',
      'Incident response protocols',
      'Single point of accountability',
    ],
  },
  {
    ico: '📋',
    t: 'Inspections',
    d: 'Scheduled condition surveys and compliance inspections.',
    eco: false,
    slug: 'inspections',
    long: 'Scheduled condition surveys and compliance inspections that keep your buildings safe, compliant, and well documented, with clear reports and prioritised action plans.',
    features: [
      'Condition surveys',
      'Statutory compliance checks',
      'Detailed reporting',
      'Prioritised action plans',
    ],
  },
  {
    ico: '🧭',
    t: 'FM Consultancy',
    d: 'Advisory on operations, efficiency, and sustainability strategy.',
    eco: false,
    slug: 'fm-consultancy',
    long: 'Advisory for owners and developers on operations, efficiency, and sustainability strategy. We help you set up the right operating model, reduce costs, and meet ESG goals, whether or not you engage us to deliver.',
    features: [
      'Operating model design',
      'Cost and efficiency reviews',
      'Sustainability strategy',
      'Procurement and tendering support',
    ],
  },
]

export const PORTFOLIO: Property[] = [
  { ico: '🏙️', dist: 'Under Management', nm: 'Pinnacle Business Park', addr: '📍 Westlands', badge: 'Managed', img: '/properties/pinnacle-business-park.jpg' },
  { ico: '🏢', dist: 'Under Management', nm: 'UN Crescent Residences', addr: '📍 Gigiri', badge: 'Managed', img: '/properties/un-crescent-residences.jpg' },
  { ico: '🌿', dist: 'Eco Showcase', nm: 'Karen Eco Business Hub', addr: '📍 Karen', badge: 'Eco Hub', img: '/properties/karen-eco-business-hub.jpg' },
]

// Asset classes we specialise in. Each property type carries a distinct
// operational focus, per the corporate proposal's specialisation divisions.
export const ASSET_CLASSES: { t: string; d: string; focus: string }[] = [
  {
    t: 'Commercial Grade-A Towers',
    d: 'Premium multi-tenant offices, corporate headquarters, and high-rise commercial centres.',
    focus: 'HVAC and elevator uptime, multi-layered security, corporate lease escalation.',
  },
  {
    t: 'Mixed-Use Developments',
    d: 'High-end retail, residential apartments, and lifestyle centres within a single integrated asset.',
    focus: 'Service-charge allocation, Sectional Property alignment, multi-traffic zoning.',
  },
  {
    t: 'Residential Estates & Gated Communities',
    d: 'Premium apartment blocks, townhouses, and expansive master-planned gated enclaves.',
    focus: 'Community governance, utility reliability, tenant onboarding, common-area harmony.',
  },
  {
    t: 'Industrial & Logistics Parks',
    d: 'Warehouses, cold-storage centres, assembly plants, and specialised manufacturing parks.',
    focus: 'Structural fabric endurance, drainage, heavy power security, high-load paving.',
  },
  {
    t: 'Institutional Facilities',
    d: 'Educational centres, banks, multi-branch portfolios, and corporate real estate networks.',
    focus: 'Regulatory compliance, rapid multi-site deployment, rigid budget alignment.',
  },
]

export const STATS: Stat[] = [
  { n: '98.5%', l: 'Rent Collection', eco: false },
  { n: '95%+', l: 'Occupancy', eco: false },
  { n: '99.7%', l: 'Plant Uptime', eco: false },
  { n: '90%+', l: 'Tenant Satisfaction', eco: true },
]

// Key performance indicators we report against every quarter, per the
// corporate proposal's KPI benchmark table.
export const KPIS: { k: string; target: string; d: string }[] = [
  { k: 'Rent Collection Efficiency', target: '≥ 98.5%', d: 'Actual rent collected against total invoiced, measured by the 10th of each month.' },
  { k: 'Asset Occupancy Rate', target: '≥ 95%', d: 'Lettable area under active lease against the total net lettable area.' },
  { k: 'Technical Emergency Response', target: '≤ 15 min', d: 'From a critical emergency being logged to a technician on site.' },
  { k: 'Routine Maintenance Resolution', target: '≤ 24 hrs', d: 'Full resolution and closure of standard, non-emergency repair tickets.' },
  { k: 'Critical Plant Uptime', target: '≥ 99.7%', d: 'Uninterrupted availability of lifts and generators across each quarter.' },
  { k: 'Tenant Satisfaction', target: '≥ 90%', d: 'Aggregated from post-ticket reviews and biannual satisfaction surveys.' },
  { k: 'Lease Renewal Rate', target: '≥ 85%', d: 'Expiring leases renewed rather than vacated.' },
  { k: 'OpEx Variance Control', target: '≤ ±3%', d: 'Actual building expenditure held tight to the agreed annual budget.' },
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

export const VALUES: { label: string; desc: string; eco: boolean }[] = [
  {
    label: 'Institutional Integrity',
    desc: 'Complete accuracy in every financial dealing, owner disclosure, and procurement decision, with zero tolerance for kickbacks or hidden margins.',
    eco: false,
  },
  {
    label: 'Professional Excellence',
    desc: 'Certified technical specialists who treat asset management as an engineering and corporate discipline, never as generalist caretaking.',
    eco: false,
  },
  {
    label: 'Radical Transparency',
    desc: 'Real-time owner access to financial tracking, rent collection, and maintenance dashboards, around the clock and on demand.',
    eco: false,
  },
  {
    label: 'Agile Innovation',
    desc: 'Cloud-based PropTech, predictive analytics, and automated portals in place of the slow, paper-based methods of conventional managers.',
    eco: false,
  },
  {
    label: 'Fiduciary Accountability',
    desc: 'Every shilling of rental income and service charge treated as an investment fund to be optimised and strictly accounted for.',
    eco: false,
  },
  {
    label: 'Environmental Stewardship',
    desc: 'Operations structured to cut energy draw, curb carbon, and run sustainable waste systems across every building we manage.',
    eco: true,
  },
]

// "Our approach" pillars on the About page.
export const APPROACH: { t: string; d: string }[] = [
  {
    t: 'Institutional-grade operations',
    d: 'The governance, SLAs, and reporting discipline usually reserved for the largest portfolios, applied to every property we manage.',
  },
  {
    t: 'Eco-responsible by default',
    d: 'Energy, water, waste, and procurement managed for measurable sustainability and lower running costs, not as an afterthought.',
  },
  {
    t: 'Technology-enabled',
    d: 'An Executive Owner Dashboard and live tenant portal give owners real-time visibility into rent collection, arrears, occupancy, and maintenance, with IoT sub-metering tracking utilities to the cent.',
  },
  {
    t: 'Proactive, not reactive',
    d: 'A 52-week planned preventive maintenance schedule and 3-to-5-year CapEx forecasting protect asset value and turn unpredictable failures into budgeted, controlled events.',
  },
]

// Centralised site config. Swap in real values when supplied (each is a one-line edit).
export const SITE = {
  url: 'https://zennarafp.com', // canonical base; update when the real domain is confirmed
  whatsapp: '254700000000', // placeholder Nairobi number; replace with client's
  email: 'info@zennarafp.com',
  phone: '+254700000000',
  city: 'Nairobi, Kenya',
  address: 'The Landmark Corporate Suites, 7th Floor, Mombasa Road / Westlands, Nairobi',
  social: {
    linkedin: 'https://www.linkedin.com/company/zennarafp',
    twitter: 'https://twitter.com/ZennaraFP',
    facebook: 'https://www.facebook.com/ZennaraFP',
  },
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

// Leadership team. Optional fields render only when present, so we can ship the
// cards now and drop in details as each director replies. `photo` -> headshot
// at '/team/<name>.jpg' (else a styled initials avatar); `years` -> e.g. "12+
// years"; `bio` -> 1-2 sentence bio; `linkedin` -> full profile URL.
export const TEAM: {
  name: string
  role: string
  photo?: string
  years?: string
  bio?: string
  linkedin?: string
}[] = [
  { name: 'Laura Wright', role: 'Director' },
  { name: 'Protus Nyamweya', role: 'Director' },
  { name: 'Denzil Otieno', role: 'Technology & Procurement' },
]

// Professional accreditations & memberships held by ZENNARA's management team,
// per the corporate proposal. Drop the official logo files into /public/certs
// (see /public/certs/README.txt for exact filenames); missing logos fall back
// to the badge icon automatically.
export const CERTIFICATIONS: { name: string; logo?: string }[] = [
  { name: 'Estate Agents Registration Board (EARB)', logo: '/certs/earb.png' },
  { name: 'Valuers Registration Board (VRB)', logo: '/certs/vrb.png' },
  { name: 'Institution of Surveyors of Kenya (ISK)', logo: '/certs/isk.png' },
  { name: 'BIFM / IFMA Certified Facility Managers', logo: '/certs/ifma.svg' },
  { name: 'CPA-K Financial Directors', logo: '/certs/ICPAK-Logo-on-White.svg' },
  { name: 'Sectional Properties Act (2020) Compliant', logo: '/certs/properties_act.png' },
]

// Conversion / trust content.
export const GUARANTEES: { t: string; d: string }[] = [
  { t: 'Rapid response', d: 'Critical emergencies on site within 15 minutes. Urgent repairs within two hours.' },
  { t: 'Transparent pricing', d: 'Clear scope and costs upfront. No surprise invoices.' },
  { t: 'Service guarantee', d: 'Agreed SLAs, measured and reported every month.' },
]

export const ONBOARDING: { t: string; when: string; d: string }[] = [
  { t: 'Audit & assessment', when: 'Weeks 1 & 2', d: 'We inspect every major plant system and review your rent roll, deposits, utility history, and arrears, documenting the exact technical and financial state of the property before takeover.' },
  { t: 'Systems & data migration', when: 'Week 3', d: 'We migrate tenant data, leases, and balances onto our platform, tag every asset, open dedicated escrow accounts, and build your 52-week preventive maintenance schedule.' },
  { t: 'Tenant launch', when: 'Week 4', d: 'We introduce the management team to your tenants with welcome packs, portal onboarding, emergency contacts, and clear new payment details, with townhalls for larger assets.' },
  { t: 'Full management', when: 'Month 2 onward', d: 'We assume full daily control: planned maintenance runs, vendor scorecards begin, the owner dashboard goes live, and energy optimisation starts cutting operating costs.' },
]

export const WHY_SWITCH: { t: string; d: string }[] = [
  { t: 'Predictable rental income', d: 'Automated billing, dedicated escrow collection accounts, and structured arrears follow-up keep collection efficiency above 98%. Your rent is collected on time and reconciled to you on a fixed monthly schedule.' },
  { t: 'Lower operating costs', d: 'We audit energy, procurement, and maintenance, then remove the waste that quietly inflates your bills. Owners often see running costs fall, not rise, after switching.' },
  { t: 'Real transparency', d: 'An Executive Owner Dashboard gives you real-time collection rates, arrears, and occupancy from any device, with reconciled financial reports by the fifth business day each month. No vague updates, no surprise invoices.' },
  { t: 'Faster response', d: 'Every request is logged, tracked, and resolved against agreed SLAs: critical emergencies on site within 15 minutes, urgent repairs within two hours, standard requests within 24. No more chasing your provider for days.' },
  { t: 'Measurable sustainability', d: 'We manage energy, water, and waste for real savings and report the results in an ESG-ready format. Sustainability you can prove to owners and tenants, not just claim.' },
]

export const ECO_SERVICES: { t: string; d: string }[] = [
  { t: 'Energy Efficiency', d: 'We monitor and optimise lighting, HVAC, and equipment, then act on the data to cut consumption and lower energy bills month on month.' },
  { t: 'Water Management', d: 'Leak detection, efficient fixtures, and usage monitoring reduce both waste and water bills, with consumption tracked and reported.' },
  { t: 'Waste Diversion', d: 'Segregation, recycling, and supplier coordination keep waste out of landfill, with diversion rates measured and reported to stakeholders.' },
  { t: 'Green Procurement', d: 'We choose suppliers and materials for performance and lower environmental impact, balancing sustainability with whole-life cost.' },
  { t: 'Carbon Reporting', d: 'Clear, ESG-ready reporting on emissions and savings gives owners and tenants evidence they can use, not vague green claims.' },
  { t: 'Solar-Ready Operations', d: 'We prepare and optimise buildings for renewable energy, so the switch to solar is straightforward when you are ready.' },
]

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does facility management cost?',
    a: 'It depends on the size, type, and condition of your property and the scope you need. We price transparently after a free assessment, and most clients find the model lowers total operating costs rather than adding to them.',
  },
  {
    q: 'What types of property do you manage?',
    a: 'Commercial, residential, mixed-use, industrial, and retail, from single buildings to multi-property portfolios.',
  },
  {
    q: 'How quickly can you take over a property?',
    a: 'After the assessment and agreement, a typical onboarding runs two to four weeks depending on the handover from your current provider. Urgent transitions can move faster.',
  },
  {
    q: 'Do you work alongside our existing team or replace it?',
    a: 'Either. We can manage end to end, supplement your in-house team, or run specific service lines such as maintenance or eco operations.',
  },
  {
    q: 'What makes your eco approach different?',
    a: 'Sustainability is built into daily operations, not bolted on. Energy, water, waste, and procurement are actively managed for measurable savings and reporting you can show stakeholders.',
  },
]
