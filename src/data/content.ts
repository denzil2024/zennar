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
      'Tenant relations and communications',
      'Rent and service-charge collection',
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
    long: 'Our differentiator: facility management with sustainability built into daily operations. We actively manage energy, water, waste, and procurement to cut both your environmental footprint and your running costs, with ESG-ready reporting.',
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

export const VALUES: { label: string; desc: string; eco: boolean }[] = [
  {
    label: 'Luxury',
    desc: 'Premium standards in every detail, from concierge-grade service to immaculately kept common areas.',
    eco: false,
  },
  {
    label: 'Trust',
    desc: 'Transparent reporting and accountable operations, so owners always know exactly where things stand.',
    eco: false,
  },
  {
    label: 'Precision',
    desc: 'Disciplined, data-led processes that keep buildings running efficiently and predictably.',
    eco: false,
  },
  {
    label: 'Sustainability',
    desc: 'Eco-responsible operations that cut consumption, cost, and carbon across the portfolio.',
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
    d: 'A client portal and live reporting give owners real-time visibility into payments, maintenance, and building performance.',
  },
  {
    t: 'Proactive, not reactive',
    d: 'Preventive maintenance and continuous optimisation that protect asset value and avoid costly surprises.',
  },
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

// Certifications & memberships. PLACEHOLDERS - confirm/replace with the company's
// actual accreditations and add `logo: '/certs/<file>.svg'` when logos arrive.
export const CERTIFICATIONS: { name: string; logo?: string }[] = [
  { name: 'ISO 9001 · Quality Management' },
  { name: 'ISO 14001 · Environmental Management' },
  { name: 'ISO 45001 · Health & Safety' },
  { name: 'Green Building Certification' },
  { name: 'Facilities Management Association' },
]

// Conversion / trust content.
export const GUARANTEES: { t: string; d: string }[] = [
  { t: '2-hour response', d: 'Every enquiry and request answered within two hours.' },
  { t: 'Transparent pricing', d: 'Clear scope and costs upfront. No surprise invoices.' },
  { t: 'Service guarantee', d: 'Agreed SLAs, measured and reported every month.' },
]

export const ONBOARDING: { t: string; d: string }[] = [
  { t: 'Free assessment', d: 'We walk your property, review current costs and pain points, and share a clear plan with transparent pricing. No obligation, no jargon.' },
  { t: 'Transition plan', d: 'We coordinate a structured handover from your current provider, so there is no gap in service, staffing, or accountability during the switch.' },
  { t: 'Mobilisation', d: 'Teams, suppliers, SLAs, and reporting are put in place and your client portal goes live, typically within two to four weeks of sign-off.' },
  { t: 'Ongoing optimisation', d: 'We run the property proactively, with preventive maintenance and continuous improvement, and report performance to you every month.' },
]

export const WHY_SWITCH: { t: string; d: string }[] = [
  { t: 'Lower operating costs', d: 'We audit energy, procurement, and maintenance, then remove the waste that quietly inflates your bills. Most owners see running costs fall, not rise, after switching.' },
  { t: 'Real transparency', d: 'A live client portal and clear monthly reporting replace vague updates and surprise invoices. You always know what was done, what it cost, and what is next.' },
  { t: 'Faster response', d: 'Every request is logged, tracked, and resolved against agreed SLAs, with a response within two hours. No more chasing your provider for days.' },
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
