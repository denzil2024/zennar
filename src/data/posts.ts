// Blog posts, authored in code. Add a new post by adding an object to POSTS;
// it is automatically listed on /blog and pre-rendered at /blog/<slug>.

export type PostBlock = { type: 'h2' | 'p'; text: string }

export type Post = {
  slug: string
  title: string
  date: string // ISO date, e.g. '2026-05-12'
  category: string
  readMins: number
  excerpt: string
  icon: string // emoji used in the branded placeholder cover until a real image is set
  cover?: string // optional featured image path (e.g. '/blog/eco-fm.jpg'); falls back to placeholder
  body: PostBlock[]
}

export const POSTS: Post[] = [
  {
    slug: 'how-eco-fm-reduces-operating-costs',
    title: 'How Eco FM Reduces Building Operating Costs',
    date: '2026-05-12',
    category: 'Eco FM',
    readMins: 4,
    icon: '💡',
    excerpt:
      'Eco-responsible facility management is not only good for the planet. It is one of the most reliable ways to lower the running costs of a building.',
    body: [
      {
        type: 'p',
        text: 'Eco facility management is often framed purely as an environmental decision. In practice, it is also one of the most dependable ways to reduce what a building costs to operate every month.',
      },
      { type: 'h2', text: 'Energy is the largest lever' },
      {
        type: 'p',
        text: 'Lighting, cooling, and equipment scheduling account for the bulk of recurring energy spend. LED retrofits, smarter controls, and routine plant servicing typically cut energy use by a fifth or more, with the savings compounding year after year.',
      },
      { type: 'h2', text: 'Waste and water add up' },
      {
        type: 'p',
        text: 'Diverting waste from landfill, reusing greywater, and fixing leaks early all reduce direct costs while improving a building reputation with tenants who increasingly expect responsible operations.',
      },
      { type: 'h2', text: 'Reporting turns savings into proof' },
      {
        type: 'p',
        text: 'A clear green performance report, covering energy, water, and waste, lets owners see exactly where money is being saved and where the next opportunity lies. That visibility is the difference between a one-off improvement and a long-term programme.',
      },
    ],
  },
  {
    slug: 'green-building-certification-explained',
    title: 'Green Building Certification Explained',
    date: '2026-04-28',
    category: 'Sustainability',
    readMins: 5,
    icon: '🏆',
    excerpt:
      'Certification can feel like alphabet soup. Here is what the major green building standards actually measure and why they matter to property owners.',
    body: [
      {
        type: 'p',
        text: 'Green building certification gives owners an independent, recognised way to demonstrate that a property is operated responsibly. For commercial landlords in particular, it is becoming a baseline expectation rather than a differentiator.',
      },
      { type: 'h2', text: 'What certifications measure' },
      {
        type: 'p',
        text: 'Most standards assess energy and water efficiency, waste management, indoor air quality, and the sustainability of materials and procurement. Points are awarded across these categories to reach a certification tier.',
      },
      { type: 'h2', text: 'Why it matters commercially' },
      {
        type: 'p',
        text: 'Certified buildings tend to command stronger tenant demand, higher retention, and a measurable reduction in operating costs. They also position an asset well for the growing number of tenants with their own ESG commitments.',
      },
    ],
  },
  {
    slug: 'practical-guide-to-preventive-maintenance',
    title: 'A Practical Guide to Preventive Maintenance',
    date: '2026-04-10',
    category: 'Facility Management',
    readMins: 4,
    icon: '🔧',
    excerpt:
      'Reactive repairs are expensive and disruptive. A structured preventive maintenance programme keeps buildings running and protects asset value.',
    body: [
      {
        type: 'p',
        text: 'Waiting for things to break is the most expensive way to run a building. A preventive maintenance programme replaces costly emergencies with planned, predictable upkeep.',
      },
      { type: 'h2', text: 'Start with an asset register' },
      {
        type: 'p',
        text: 'You cannot maintain what you have not catalogued. A complete register of plant, equipment, and their service intervals is the foundation of any credible programme.',
      },
      { type: 'h2', text: 'Schedule, inspect, record' },
      {
        type: 'p',
        text: 'Routine inspections catch small issues before they become failures. Recording every visit builds a history that informs budgeting and demonstrates duty of care to owners and tenants.',
      },
    ],
  },
]

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
