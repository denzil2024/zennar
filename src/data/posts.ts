// Blog posts, authored in code. Add a new post by adding an object to POSTS;
// it is automatically listed on /blog and pre-rendered at /blog/<slug>.
// Within `text`, wrap key phrases in **double asterisks** to render them bold.

export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; variant: 'tip' | 'caution'; title?: string; text: string }
  | { type: 'cta'; title: string; text: string; buttonLabel: string; to: string }

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
    slug: 'preventive-maintenance',
    title: 'How to Build a Preventive Maintenance Programme That Pays for Itself',
    date: '2026-06-25',
    category: 'Facility Management',
    readMins: 13,
    icon: '🛠️',
    cover: '/blogs/preventive-maintenance-cover.jpg',
    excerpt:
      'A practical guide to preventive maintenance for commercial and mixed-use buildings: what it is, what it saves, how to build a programme, a system-by-system schedule, the KPIs that matter, and how it works in Kenya.',
    body: [
      {
        type: 'p',
        text: 'A building deteriorates whether or not anyone is watching, and what that deterioration ends up costing depends almost entirely on when it is caught. A worn part found on a scheduled visit is a minor, planned expense; the same part discovered after it fails brings downtime, emergency rates, and damage to whatever it was connected to. Preventive maintenance is the practice of staying on the first side of that line, servicing a building on a schedule instead of waiting for it to break.',
      },
      {
        type: 'p',
        text: 'Run consistently, it is one of the most dependable economies in property: a planned programme costs a fraction of the reactive alternative and extends the working life of the systems it covers. This guide sets out the **preventive maintenance** programme behind that result, what it involves, what it saves, how to build and run it for a commercial or mixed-use building, and how it changes under Kenyan conditions. It sits alongside [our broader facility maintenance guide](/blog/commercial-facility-maintenance).',
      },

      { type: 'h2', text: 'What Preventive Maintenance Is' },
      {
        type: 'p',
        text: '**Preventive maintenance**, also written **preventative maintenance**, is planned, recurring upkeep carried out to stop failures before they happen. Also called **planned preventive maintenance**, or PPM, it covers the servicing, inspection, and parts replacement that keep a system running reliably across its life.',
      },
      {
        type: 'p',
        text: 'The work is triggered in one of two ways. **Time-based** maintenance runs on the calendar, servicing a chiller every quarter whether or not anything seems wrong, while **usage-based** maintenance runs on a meter, servicing a generator every set number of running hours. Building programmes mostly lean on time-based intervals, with usage-based triggers on the hardest-working plant.',
      },

      { type: 'h2', text: 'The Maintenance Spectrum, from Reactive to Predictive' },
      {
        type: 'p',
        text: 'Preventive maintenance sits in the middle of a spectrum, and knowing where each approach fits is what keeps a budget sensible. At one end is fixing things after they break, and at the other is using live data to predict failure before it arrives. The table below sets out the five common approaches.',
      },
      {
        type: 'table',
        headers: ['Approach', 'What it is', 'Cost and risk', 'Best for'],
        rows: [
          ['Reactive', 'Fix it after it fails', 'Highest total cost, unplanned downtime', 'Low-value, non-critical items'],
          ['Corrective', 'Fix a fault found during other work', 'Planned, but still after the fact', 'Issues caught during inspection'],
          ['Preventive', 'Service on a set schedule', 'Lower cost, fewer failures', 'Nearly all building systems'],
          ['Condition-based', 'Act when a measured threshold is hit', 'Efficient, needs monitoring', 'Assets with measurable wear'],
          ['Predictive', 'Act on condition data and sensors', 'Lowest over time, needs technology', 'Critical, high-value plant'],
        ],
      },
      {
        type: 'p',
        text: '**Preventive and predictive maintenance** are often paired, with preventive as the dependable backbone and predictive layered onto the few assets where failure is most costly. The shift that matters most for a building, though, is the first one, moving from **reactive to preventive**, because that is where the largest savings sit.',
      },

      { type: 'h2', text: 'What Preventive Maintenance Saves' },
      {
        type: 'p',
        text: 'The case for preventive maintenance is financial before it is technical. Industry data consistently shows that **planned work costs a fraction of the same repair done in an emergency**, and that a disciplined programme cuts maintenance spend by double digits while extending equipment life by a wide margin.',
      },
      {
        type: 'p',
        text: 'A useful planning rule is to budget preventive maintenance as a share of what the equipment would cost to replace, commonly **2 to 4% of replacement value a year**, then adjust against your own completion and failure data. Set against the cost of a failed chiller or a seized lift, that spend is modest, and we break the wider numbers down in [what facility management costs locally](/blog/facility-management-cost-kenya).',
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The cost of **skipping preventive maintenance** is rarely a line in the budget, which is exactly why it gets cut. It resurfaces later as emergency call-outs, tenant complaints, and capital replacements years ahead of schedule, at several times the price.',
      },

      { type: 'h2', text: 'The Returns Beyond Cost' },
      {
        type: 'p',
        text: 'The financial case is the easiest to make, but it is not the only return a preventive programme delivers. The same discipline that lowers repair bills also protects the things an owner is judged on over a longer horizon, none of which show up on a single invoice.',
      },
      {
        type: 'ul',
        items: [
          '**Compliance**, because statutory inspections happen on time, keeping certificates valid and insurers comfortable',
          '**Asset value**, because a documented maintenance history supports valuation and reassures a buyer or lender',
          '**Tenant retention**, because reliable lifts, climate, and power keep occupants in place and leases renewing',
          '**Energy**, because well-serviced plant runs closer to its design efficiency and holds utility costs down',
        ],
      },
      {
        type: 'p',
        text: 'Because these returns are spread across compliance, valuation, and tenancy rather than concentrated in a repair bill, they are easy to undervalue. **Taken together, they often outweigh the direct repair savings that justified the programme in the first place.**',
      },

      { type: 'h2', text: 'How to Build a Preventive Maintenance Programme' },
      {
        type: 'p',
        text: 'A preventive programme is not a piece of software but a sequence of decisions any well-run building can make, with or without a system to hold the data. The steps below are the backbone, and standing them up is the heart of [how we set up FM programmes](/services/fm-consultancy).',
      },
      {
        type: 'ul',
        items: [
          'Build an **asset register**: every system and major item, with make, age, and condition',
          'Rank assets by **criticality**, so the lift and the generator outrank the lobby fan',
          'Set frequencies from **manufacturer guidance and statutory dates**, not guesswork',
          'Handle the preventive maintenance scheduling, splitting in-house tasks from vendor contracts and SLAs',
          'Record every visit, building the history that proves compliance and guides budgets',
          'Review the data and tune the intervals as the building shows you what it needs',
        ],
      },
      {
        type: 'p',
        text: 'The early version can live on a shared spreadsheet, whether the work is done in-house or bought in as preventive maintenance services. **The discipline matters more than the tool**, and software earns its place only once the programme is real and the volume justifies it.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Start with the **critical few, not the comprehensive many**. Get preventive servicing right on the lift, the generator, the fire system, and the main HVAC plant first, then widen the programme once those are under control.',
      },

      { type: 'h2', text: 'Preventive Maintenance by Building System' },
      {
        type: 'p',
        text: 'Every building system has its own preventive rhythm. The matrix below sets out the core tasks and a typical cadence for a commercial or mixed-use building, and it pairs with the task-level detail in [our maintenance checklist](/blog/property-maintenance-checklist).',
      },
      {
        type: 'table',
        headers: ['System', 'Core preventive tasks', 'Typical cadence'],
        rows: [
          ['HVAC', 'Filters, coils, refrigerant, controls, full plant service', 'Monthly to quarterly'],
          ['Lifts and escalators', 'Specialist service and statutory examination', 'Quarterly to annual'],
          ['Electrical and generators', 'Board inspection, thermal imaging, generator load tests', 'Monthly to annual'],
          ['Water systems', 'Tanks, booster pumps, borehole, hygiene and backflow', 'Monthly to semi-annual'],
          ['Fire and life-safety', 'Alarms, detection, suppression, extinguishers, doors', 'Weekly to annual'],
          ['Facade and roof', 'Drainage, sealants, waterproofing, condition survey', 'Quarterly to annual'],
          ['Common areas', 'Lighting, finishes, fixtures, pest control', 'Monthly to quarterly'],
        ],
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The systems that fail most expensively are the ones with the longest quiet intervals: **flat roofs, water tanks, and standby generators**. They give little warning between services, so they need a fixed place on the schedule rather than attention only when they fail.',
      },

      { type: 'h2', text: 'Measuring the Programme' },
      {
        type: 'p',
        text: 'A preventive programme is only as good as the numbers it reports, and a handful of metrics tell an owner whether it is working. They translate maintenance activity into the things an owner cares about: uptime, compliance, and asset value.',
      },
      {
        type: 'table',
        headers: ['Metric', 'What it tells an owner', 'Healthy target'],
        rows: [
          ['PM compliance', 'Share of planned tasks done on time', '95% or higher'],
          ['Planned vs reactive ratio', 'How proactive the programme is', 'Majority planned'],
          ['Mean time between failures', 'How reliable a system is', 'Rising over time'],
          ['Mean time to repair', 'How fast faults are fixed', 'Falling over time'],
        ],
      },
      {
        type: 'p',
        text: 'Read together, these show whether a building is **drifting towards reactive firefighting or settling into planned control**. The direction of travel matters more than any single month.',
      },

      { type: 'h2', text: 'Where Preventive Programmes Go Wrong' },
      {
        type: 'p',
        text: 'A preventive programme can fail in either direction, and recognising the failure modes early is what keeps one honest. The aim is the right amount of maintenance for each asset, not the most maintenance possible.',
      },
      {
        type: 'ul',
        items: [
          '**Over-maintenance**, servicing low-risk items so often that the cost of prevention outruns the cost of failure',
          '**No asset register**, so work runs from memory, tasks slip, and nothing is prioritised by importance',
          '**Ignored findings**, where inspections flag faults that no one then schedules to put right',
          '**Checklist thinking**, treating the programme as a list to tick rather than a system to measure and improve',
        ],
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The most common failure is quiet abandonment. **A programme that is never measured slowly reverts to reactive work**, one skipped service at a time, until the building is back where it started and no one decided it should be.',
      },

      { type: 'h2', text: 'Preventive or Predictive?' },
      {
        type: 'p',
        text: 'Software vendors push predictive maintenance hard, but for most buildings the honest answer is that **time-based preventive maintenance is the right default**. Sensors and condition monitoring earn their cost on a handful of critical, high-value assets, not across an entire building.',
      },
      {
        type: 'p',
        text: 'On a chiller, a main generator, or a primary lift, predictive monitoring can catch a failure before it lands and is worth the investment. On the hundreds of smaller items in a building, a reliable preventive schedule is cheaper, simpler, and good enough. **Start preventive, and add predictive only where the maths works.**',
      },

      { type: 'h2', text: 'Preventive Maintenance in Kenya' },
      {
        type: 'p',
        text: 'Running a preventive programme in Kenya means planning for conditions the global guides ignore. **Power and water resilience sit at the centre of it**: generators that run through frequent outages need servicing on running hours, and boreholes, storage tanks, and booster pumps need regular attention to keep a building supplied.',
      },
      {
        type: 'p',
        text: 'On top of that, the local climate adds its own load. **Dust, the long rains, and coastal humidity in Mombasa** wear systems faster than a temperate calendar assumes, so intervals often need to be tighter than the manuals suggest.',
      },
      {
        type: 'p',
        text: 'Statutory compliance brings a calendar of its own. Fire safety, lift inspection, and DOSHS occupational-safety audits all run on statutory schedules a preventive programme should absorb, and the energy side of that upkeep is the focus of [our eco-focused FM service](/services/eco-fm-services).',
      },

      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'What Is the Difference Between Preventive and Corrective Maintenance?' },
      {
        type: 'p',
        text: '**Preventive maintenance is planned and happens before a failure, while corrective maintenance fixes a fault after it appears.** A good programme keeps the balance tilted heavily towards preventive, using corrective work mainly for the issues that inspections catch early.',
      },
      { type: 'h3', text: 'How Often Should Preventive Maintenance Be Done?' },
      {
        type: 'p',
        text: 'It ranges from weekly checks to annual overhauls, depending on the system. **Set each interval against manufacturer guidance, usage, and statutory dates** rather than a single blanket schedule, and tighten it where Kenyan conditions demand.',
      },
      { type: 'h3', text: 'How Much Does Preventive Maintenance Cost?' },
      {
        type: 'p',
        text: 'A common planning figure is **2 to 4% of an asset’s replacement value a year**, though the real number depends on the building and its systems. Whatever the figure, it is consistently a fraction of what the same work costs once it becomes an emergency.',
      },
      { type: 'h3', text: 'Do I Need Software to Run Preventive Maintenance?' },
      {
        type: 'p',
        text: 'You do not need software to begin. **A spreadsheet and the discipline to use it** will run an early programme perfectly well, and software becomes worthwhile only once the asset count and task volume make manual tracking the bottleneck.',
      },

      { type: 'h2', text: 'The Quiet Discipline That Pays' },
      {
        type: 'p',
        text: 'Preventive maintenance rarely announces itself, because its whole purpose is to make sure nothing dramatic happens. A building on a real programme simply runs: the lifts move, the power holds, the tenants stay, and the capital plan survives contact with reality. That quiet reliability is the cheapest version of a building to own, and it is built one scheduled task at a time.',
      },
      {
        type: 'cta',
        title: 'Work With ZENNARA',
        text: 'ZENNARA builds and runs preventive maintenance programmes for commercial and mixed-use buildings across Kenya, from the asset register to the monthly report. Book a consultation or request a free property assessment.',
        buttonLabel: 'Book a Consultation',
        to: '/contact',
      },
    ],
  },
  {
    slug: 'property-vs-facility-management',
    title: 'Property Management vs Facility Management, and How They Work Together',
    date: '2026-06-25',
    category: 'Facility Management',
    readMins: 12,
    icon: '⚖️',
    cover: '/blogs/property-vs-facility-management-cover.jpg',
    excerpt:
      'Property management protects the investment; facility management protects the building. Here is what each one does, where they overlap, how they work together, and which your building needs, with a Kenyan lens.',
    body: [
      {
        type: 'p',
        text: 'Property management and facility management are easy to confuse, and on smaller buildings one person often handles both, yet they answer different questions and a building suffers when the distinction is lost. One treats the building as an investment to be made profitable; the other treats it as a working asset to be kept running. **When the two are merged by default rather than by design, something usually falls through the gap between them.**',
      },
      {
        type: 'p',
        text: '**Property management protects the investment; facility management keeps the building running.** They share enough ground to be mistaken for each other, yet the difference grows sharper the larger and busier a building becomes. What follows is what each one covers, where they meet, how they work best together, and which your building needs, with a clear view of how the split plays out in Kenya.',
      },

      { type: 'h2', text: 'What Property Management Does' },
      {
        type: 'p',
        text: 'Property management is the financial and commercial side of running a property on behalf of its owner. Its job is to protect and grow the **return on the asset**, which means keeping the building let, the rent flowing, and the books in order.',
      },
      {
        type: 'p',
        text: 'That work covers leasing and tenant relations, rent collection and arrears, budgeting and reporting, lease compliance, and the owner relationship. In Kenya, property agents and managers are regulated under the **Estate Agents Act (Cap 533)** and must register with the Estate Agents Registration Board, so this is a licensed profession.',
      },
      {
        type: 'ul',
        items: [
          'Leasing, renewals, and tenant relations',
          'Rent collection, arrears, and credit control',
          'Budgeting, service-charge setting, and financial reporting',
          'Lease compliance and statutory licensing',
          'The owner relationship and long-term asset strategy',
        ],
      },

      { type: 'h2', text: 'What Facility Management Does' },
      {
        type: 'p',
        text: 'Facility management is the operational and technical side, focused on the building itself and the people who use it. Its job is to keep the property **safe, efficient, and pleasant to occupy**, day after day, whatever the lease happens to say.',
      },
      {
        type: 'p',
        text: 'That spans maintenance and the mechanical and electrical systems, security, cleaning, waste, health and safety, space planning, and vendor management. Unlike property management, facility management is **not licensed under a single statutory body in Kenya**, which makes the standard of the provider, rather than a certificate, the thing to check. Our companion guide covers [how that operational work is run](/blog/commercial-facility-maintenance) day to day.',
      },
      {
        type: 'ul',
        items: [
          'Planned and reactive maintenance of the building',
          'Mechanical, electrical, and plumbing systems',
          'Security, cleaning, waste, and landscaping',
          'Health, safety, and statutory compliance',
          'Space planning, energy use, and vendor management',
        ],
      },

      { type: 'h2', text: 'The Core Difference' },
      {
        type: 'p',
        text: 'Strip away the detail and the two roles answer different questions. **Property management asks whether the building makes money; facility management asks whether the building works.** One serves the owner and the balance sheet, the other serves the occupants and the fabric.',
      },
      {
        type: 'table',
        headers: ['Dimension', 'Property management', 'Facility management'],
        rows: [
          ['Focus', 'The investment and its income', 'The building and its operation'],
          ['Serves', 'The owner', 'The occupants'],
          ['Time horizon', 'Strategic and financial', 'Day-to-day and technical'],
          ['Typical tasks', 'Leasing, rent, budgets, compliance', 'Maintenance, systems, security, cleaning'],
          ['Measured by', 'Occupancy, yield, arrears', 'Uptime, safety, response times'],
          ['Regulation in Kenya', 'Licensed under Cap 533', 'No single statutory body'],
        ],
      },

      {
        type: 'p',
        text: 'The same divide runs right through the job titles themselves. Framed as **property manager vs facility manager**, it comes down to who each one answers to: the property manager to the owner and the rent roll, the facility manager to the building and the people inside it. That, beneath the labels, is the real substance of property management vs facility management.',
      },

      { type: 'h2', text: 'Where the Two Overlap' },
      {
        type: 'p',
        text: 'The line is rarely clean, which is why the terms get muddled. Both touch maintenance, both deal with budgets, and both answer to the owner in the end, so a small building often hands the lot to one person or firm.',
      },
      {
        type: 'p',
        text: 'The confusion is made worse by how loosely the words are used across the industry. Some providers call the maintenance role the "property manager," others treat facility management as a subset of property management, and across much of Kenya a single **property manager absorbs the facility tasks** entirely. Whether you frame it as facilities manager vs property manager or the other way round, the labels matter less than making sure nothing falls through the gap between them.',
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'Handing everything to one person on a large building is the **"one-man-band" trap**. It looks cheaper until the gaps appear, when neither the rent roll nor the plant room gets the attention it needs.',
      },

      { type: 'h2', text: 'The Cost of Blurring the Two' },
      {
        type: 'p',
        text: 'Treating the two roles as one is not a labelling error but an operational risk, and the cost of it tends to surface slowly. A capable property manager can keep a building fully let and the accounts healthy while the fabric quietly degrades, because nothing in their remit forces the building’s physical condition onto the agenda.',
      },
      {
        type: 'p',
        text: 'The bill then arrives later and larger. **Deferred maintenance becomes a capital surprise, a missed statutory inspection becomes a liability, and a building that looked profitable turns out to have been borrowing against its own condition.** The financial and the physical have to be managed together precisely because each is so good at hiding the other’s failures.',
      },

      { type: 'h2', text: 'How They Work Together' },
      {
        type: 'p',
        text: 'On a serious commercial building the two are not rivals but a single team with two lenses. Property management sets the financial plan, facility management delivers the physical reality that plan depends on, and that integration is the model behind [our integrated FM advisory](/services/fm-consultancy).',
      },
      {
        type: 'p',
        text: 'The handoffs between them are constant and concrete. **Capital planning relies on asset-condition data** from facility management, lease obligations translate into service levels, and the service charge a property manager sets only holds up if the facility scope behind it is real. Run well, the two turn a building into a property that performs.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'The cleanest setup is **one integrated team, not two contracts that never speak**. When property and facility management share the same reporting and the same numbers, capital decisions rest on real building data instead of guesswork.',
      },

      { type: 'h2', text: 'What Each Role Is Measured On' },
      {
        type: 'p',
        text: 'A practical way to tell the two apart is to look at how each is judged, because the metrics reveal the priorities behind them.',
      },
      {
        type: 'table',
        headers: ['Property management is measured on', 'Facility management is measured on'],
        rows: [
          ['Occupancy and rent collection', 'System uptime and reliability'],
          ['Yield and asset value', 'Response and resolution times'],
          ['Arrears and lease compliance', 'Statutory and safety compliance'],
          ['Owner reporting and returns', 'Planned-versus-reactive ratio'],
        ],
      },
      {
        type: 'p',
        text: 'Read down either column and the worldview is plain: one side is accountable for the building as a financial instrument, the other for the building as a functioning place. **A sound arrangement keeps both columns in view at once**, rather than letting the visible one crowd out the other.',
      },

      { type: 'h2', text: 'Which Does Your Building Need?' },
      {
        type: 'p',
        text: 'The right answer depends less on preference than on the building. A useful way to decide is to start from how the property is owned and occupied, then work out which role carries the weight.',
      },
      {
        type: 'table',
        headers: ['Building type', 'What it usually needs'],
        rows: [
          ['Owner-occupied single building', 'Facility management, with light property oversight'],
          ['Leased multi-tenant commercial', 'Both, with property management leading'],
          ['Residential block or estate', 'Property management that includes facility services'],
          ['Mixed-use development', 'Both, tightly integrated'],
          ['A growing portfolio', 'Both, often through one integrated partner'],
        ],
      },
      {
        type: 'p',
        text: 'Mixed-use developments are the clearest case for both. **Retail, offices, and homes under one roof** pull the financial and operational sides in different directions, and only a coordinated approach keeps the service charge fair and the building running. We set out the operational half of that in [how maintenance is split across mixed-use buildings](/blog/property-maintenance-checklist).',
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The most expensive mistake is assuming one role covers the other. **A property manager focused on rent will rarely catch a failing chiller in time**, and a facility manager has no remit over leases. Name both, even when one firm provides them.',
      },

      { type: 'h2', text: 'When One Firm Does Both' },
      {
        type: 'p',
        text: 'Many owners, especially of a single building, buy both services from one firm, and done well that is the simplest arrangement: one accountable relationship, one set of reporting, and no gap to fall through. The risk is that one discipline quietly dominates the other, usually the financial side, because rent is visible every month while a corroding riser is not.',
      },
      {
        type: 'p',
        text: 'The safeguard is not to split the contract but to insist that both jobs are named, resourced, and reported on in their own right, even under one roof. **An integrated provider should still show you the building’s condition and its finances as two distinct pictures, not a single reassuring number.**',
      },

      { type: 'h2', text: 'How the Split Works in Kenya' },
      {
        type: 'p',
        text: 'Kenya draws the line differently from the textbooks. Property management is the regulated, established profession, registered under the Estate Agents Act, while facility management has grown up around it without the same formal structure, often **bundled into the service charge** rather than sold as a discipline in its own right.',
      },
      {
        type: 'p',
        text: 'Local conditions also make facility management hard to treat as an afterthought. **Power reliability, water storage, and security** demand real operational attention in Nairobi, which is why a generator, a borehole, and a guarded perimeter sit at the centre of most service charges. We break those figures down in [our guide to facility management costs in Kenya](/blog/facility-management-cost-kenya).',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'In Kenya, treat **facility management as a discipline in its own right**, not a line buried in the service charge. The buildings that run best are the ones where someone clearly owns the operational standard, licensed or not.',
      },

      { type: 'h2', text: 'How the Balance Shifts by Building Type' },
      {
        type: 'p',
        text: 'The weight given to each role changes with the kind of building. In residential blocks, property management usually leads and absorbs the facility tasks, because tenant and rent administration is the larger daily load. In commercial buildings the balance tips the other way, since complex plant and stricter compliance make the operational risk higher.',
      },
      {
        type: 'p',
        text: 'Mixed-use developments need both in equal measure and tightly coordinated, because one building is at once a landlord-tenant relationship, a workplace, and a home. **The more varied the occupancy, the more the two disciplines have to run as a single team rather than two separate contracts.**',
      },

      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Is a Facility Manager the Same as a Building Manager?' },
      {
        type: 'p',
        text: 'They overlap heavily, and the titles are often used interchangeably. **A building manager is usually a facility manager focused on a single building**, handling its maintenance, systems, and safety on the ground, while facility management can also span a whole portfolio. Put as building manager vs property manager, the building manager keeps the building working while the property manager keeps the investment working.',
      },
      { type: 'h3', text: 'Do I Need Both a Property Manager and a Facility Manager?' },
      {
        type: 'p',
        text: 'For a leased commercial or mixed-use building, usually yes. **Property management protects the income and facility management protects the building**, and on anything beyond a small single property the two jobs are too much for one role to carry well.',
      },
      { type: 'h3', text: 'Which One Is More Strategic?' },
      {
        type: 'p',
        text: 'Property management is the more strategic and financial of the two, set on yield, occupancy, and the value of the asset. **Facility management is the more operational and technical**, though done well it feeds straight back into that strategy through reliable, lower-cost operations.',
      },
      { type: 'h3', text: 'Is Facilities Management Part of Property Management in Kenya?' },
      {
        type: 'p',
        text: 'For most Kenyan buildings the honest answer is yes. **Many property managers absorb the facility tasks** into a single service and recover them through the service charge, which holds up until the building grows large or complex enough to need dedicated facility expertise.',
      },

      { type: 'h2', text: 'Two Jobs, One Building' },
      {
        type: 'p',
        text: 'Property management and facility management are two answers to the same question of how to look after a building, one through its finances and one through its fabric. The owners who do best stop treating them as interchangeable, give each its due, and **make sure the two work from the same set of numbers**. Get that right and the building earns its keep and holds its value at the same time.',
      },
      {
        type: 'cta',
        title: 'Work With ZENNARA',
        text: 'ZENNARA brings property and facility management together for commercial and mixed-use buildings in Kenya, so the finances and the operations work from one plan. Book a consultation or request a free property assessment.',
        buttonLabel: 'Book a Consultation',
        to: '/contact',
      },
    ],
  },
  {
    slug: 'facility-management-cost-kenya',
    title: 'Cost of Facility Management in Kenya (2026 Guide)',
    date: '2026-06-25',
    category: 'Facility Management',
    readMins: 13,
    icon: '💰',
    cover: '/blogs/facility-management-cost-kenya-cover.jpg',
    excerpt:
      'What facility management costs in Kenya in 2026: real service-charge ranges for commercial and mixed-use buildings, how it is priced, what drives the figure, the hidden costs, and how to read a budget so you pay for value, not guesswork.',
    body: [
      {
        type: 'p',
        text: 'There is **no standard rate** for facility management in Kenya, which is the first thing any owner comparing quotes needs to understand. What a building pays depends on its size and systems, the scope of services, and a contract that is often set with little transparency, and that variability is why service charges are among the most common disputes between landlords and tenants.',
      },
      {
        type: 'p',
        text: 'This guide puts **real numbers** to the question. It sets out how facility management is priced, what a commercial or mixed-use building typically pays in 2026, what drives the figure up or down, the costs that hide below the line, and how to read a budget so you are paying for value rather than guesswork.',
      },

      { type: 'h2', text: 'What You Are Paying For' },
      {
        type: 'p',
        text: 'Facility management is rarely a single line item. It is the bundle of services that keep a building running, and **the size of that bundle is the first thing that sets the cost**. A bare contract covers the essentials, while a full one covers everything an occupier never thinks about until it fails.',
      },
      {
        type: 'ul',
        items: [
          'Security, often through firms such as G4S, KK, or SGA',
          'Common-area cleaning, lighting, and landscaping',
          'Water and electricity for shared areas',
          'Backup power and water, from the generator and diesel to the borehole',
          'Lift maintenance and mechanical and electrical servicing',
          'Waste collection and pest control',
          'A sinking fund for major future repairs',
          'The management fee itself',
        ],
      },
      {
        type: 'p',
        text: '**The wider the scope, the higher the cost**, which is why two quotes can look far apart and both be fair. Comparing them means comparing what each one includes, not just the bottom line.',
      },

      { type: 'h2', text: 'How Facility Management Is Priced' },
      {
        type: 'p',
        text: 'Kenyan facility management is sold through a handful of pricing structures, and most contracts use one or a blend of them. Knowing **which model you are being quoted on** is the first step to judging whether the price is reasonable.',
      },
      {
        type: 'table',
        headers: ['Model', 'How it works', 'Typical use in Kenya'],
        rows: [
          ['Service charge per square foot', 'A monthly rate on lettable area, billed on top of rent', 'The norm for commercial offices'],
          ['Percentage of rent', 'The manager takes a share of the rent collected', 'Common for managed residential and mixed-use'],
          ['Fixed monthly fee', 'A set fee for a defined scope', 'Smaller or single buildings'],
          ['Time and materials', 'Pay per visit plus parts', 'Ad hoc or reactive work'],
          ['Integrated FM', 'One contract bundling every service', 'Portfolios and premium buildings'],
        ],
      },

      { type: 'h2', text: 'What It Costs in Kenya in 2026' },
      {
        type: 'p',
        text: 'Pricing models only matter once you put figures to them. The ranges below reflect what commercial listings and property managers report across Nairobi in 2026, and they are best read as **market norms rather than fixed rates**, because no official schedule exists.',
      },
      { type: 'h3', text: 'Commercial Offices' },
      {
        type: 'p',
        text: 'For commercial office space, the service charge typically runs **KES 20 to 45 per square foot a month**, with **around KES 25 plus VAT** common in the central business district and the top of the range reserved for Grade A buildings in Upper Hill and Westlands. It is billed on top of base rent, often **quarterly in advance**.',
      },
      {
        type: 'p',
        text: 'To put that in context, prime office rent sits near **KES 95 to 105 per square foot a month**, so the service charge usually adds a further **20 to 40% on top of the rent**. A 10,000 square foot office can therefore carry a service charge in the region of **KES 250,000 a month** before VAT.',
      },
      { type: 'h3', text: 'Residential and Mixed-Use' },
      {
        type: 'p',
        text: 'For residential and mixed-use developments, the charge is usually quoted per unit. Entry-level blocks with basic security and no backup systems sit around **KES 5,000 to 10,000 per unit a month**, mid-range developments with a generator and borehole run **KES 12,000 to 25,000**, and high-end Kilimani or Westlands addresses can climb beyond that.',
      },
      { type: 'h3', text: 'Management Fees' },
      {
        type: 'p',
        text: 'Where a managing agent runs the building, the management fee is usually **5 to 15% of the rent collected**, with **8 to 12%** the common middle ground, or a fixed fee from around **KES 20,000 a month** for a commercial property. A **sinking fund**, set aside for major future repairs, commonly adds another **10 to 15% of the service charge**.',
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'Treat every figure here as a market range, not a quote. **Kenya has no standardised facility management rate**, charges are set building by building, and that opacity is why service charges are such a frequent source of dispute. Always ask for the rate per square foot and the line items behind it.',
      },

      { type: 'h2', text: 'Why Similar Buildings Price Differently' },
      {
        type: 'p',
        text: 'Two buildings on the same street can carry very different service charges, and the gap is rarely arbitrary. It reflects choices about grade, scope, and how the building is run, all of which are worth understanding before you judge a quote as high or low.',
      },
      {
        type: 'p',
        text: 'A Grade A tower with a concierge, full backup power, and a premium finish costs more to run than a plain block next door, and reasonably so. The figure only becomes a problem when the **price is high but the scope behind it is thin**, which is why a rate means little until you can see exactly what it buys.',
      },

      { type: 'h2', text: 'What Drives the Cost' },
      {
        type: 'p',
        text: 'Two buildings of the same size can cost very different amounts to run, and the gap comes down to **a handful of drivers**. Understanding them tells you why a quote sits where it does, and where there is room to move.',
      },
      {
        type: 'ul',
        items: [
          'Building grade, age, and condition, since older buildings need more upkeep',
          'The scope of services and the standard expected',
          'Operating hours, with longer trading days costing more',
          'Location and grade, with prime addresses commanding premium service',
          'Security level, a major and rising cost in Kenya',
          'Backup power and water, where diesel and borehole pumping swing the bill',
          'Compliance and insurance',
          'Technology, from a building management system to maintenance software',
        ],
      },
      {
        type: 'p',
        text: '**Energy and water are the drivers most within your control**, and they are where the steepest savings usually sit, which is the focus of our [Eco FM service](/services/eco-fm-services).',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'In Kenya, **backup power and water are among the biggest swing costs**. A building running its generator through frequent outages, or pumping from a borehole, can see common-area energy costs rise sharply, so ask how diesel and pumping are billed before you sign.',
      },

      { type: 'h2', text: 'The Costs That Hide Below the Line' },
      {
        type: 'p',
        text: 'The quoted rate is only part of the picture. A handful of costs sit **below the headline figure**, and they are where a budget that looked reasonable starts to climb.',
      },
      {
        type: 'ul',
        items: [
          'VAT at 16%, added on top of most charges',
          'Diesel for the generator during outages, often a large share of common-area energy',
          'Borehole pumping and water treatment',
          'Sinking-fund top-ups and one-off special levies for major works',
          'Rising security premiums',
          'Emergency callouts and reactive repairs that planned maintenance would have avoided',
        ],
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The cheapest headline rate is rarely the cheapest building to run. **A low quote built on reactive repairs and a skipped sinking fund** simply pushes cost into emergencies and special levies later. Compare on the full budget, never the rate alone.',
      },

      { type: 'h2', text: 'In-House, Outsourced, or Integrated' },
      {
        type: 'p',
        text: 'How you resource facility management **shapes the cost as much as the building does**. There are three broad routes, and the right one shifts as a portfolio grows.',
      },
      {
        type: 'table',
        headers: ['Approach', 'Cost shape', 'Best for'],
        rows: [
          ['In-house team', 'Salaries plus vendors, higher fixed cost', 'Single buildings wanting direct control'],
          ['Outsourced services', 'Pay per service or contract, more flexible', 'Owners wanting specialist cover without payroll'],
          ['Integrated FM', 'One contract, economies of scale', 'Portfolios and premium or mixed-use buildings'],
        ],
      },
      {
        type: 'p',
        text: 'A single building can run well with an in-house caretaker and a few specialist contracts, but **coordination cost climbs with every vendor and every site**. We weigh that trade-off in detail in [our guide to planned facility management](/blog/commercial-facility-maintenance).',
      },

      { type: 'h2', text: 'Mixed-Use: Splitting the Cost Fairly' },
      {
        type: 'p',
        text: 'Mixed-use buildings carry a cost question that single-use buildings do not: **how to divide shared costs** between retail, offices, and homes that use the building very differently. A supermarket trading late, an office working nine to five, and flats occupied around the clock do not draw on the lifts, security, and power equally.',
      },
      {
        type: 'p',
        text: 'A fair split rests on **metering shared services and apportioning the rest against a clear basis**, usually floor area, so that each tenant pays for what they use. We set out how that works alongside the maintenance side in [our mixed-use maintenance guide](/blog/property-maintenance-checklist).',
      },

      { type: 'h2', text: 'How to Read a Service-Charge Budget' },
      {
        type: 'p',
        text: 'A transparent budget is **the best protection against overpaying**, and it is reasonable to ask for one before you commit. A credible facility management budget answers a few simple questions without hesitation, and producing that clarity is the heart of our [FM consultancy](/services/fm-consultancy).',
      },
      {
        type: 'ul',
        items: [
          'What is the rate per square foot, and how was it set?',
          'What does it include, and what is billed separately?',
          'How much is the management fee, and how much the sinking fund?',
          'Is VAT shown, and how are diesel and borehole use charged?',
          'Is there an annual reconciliation of budget against actual spend?',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Ask for the **annual reconciliation**. A manager who shows what was budgeted against what was spent, line by line, is one you can trust with the building, and a manager who cannot is one to question.',
      },

      { type: 'h2', text: 'Budgeting for the Year Ahead' },
      {
        type: 'p',
        text: 'A service charge is a budget rather than a bill, and it should be planned as one. The sound approach is to build the figure from the real scope of work, hold a realistic reserve for the major items that will eventually fall due, and reconcile it against actual spending once the year is out.',
      },
      {
        type: 'ul',
        items: [
          'Build the figure from the **actual scope of work**, not a per-square-foot guess',
          'Hold a **reserve or sinking fund** for the major items that will eventually fall due',
          'Reconcile the budget against real spending at the end of each year',
          'Carry what the reconciliation teaches into next year’s figure',
        ],
      },
      {
        type: 'p',
        text: 'Owners who budget this way avoid the two failures that plague service charges: the charge set too low, which forces a special levy the moment anything significant breaks, and the charge set with no reserve, which leaves a major replacement with nowhere to draw from. **A figure built on scope and history holds up, while one pulled from a rule of thumb does not.**',
      },

      { type: 'h2', text: 'How to Bring the Cost Down' },
      {
        type: 'p',
        text: 'Facility management cost is not fixed, and the cheapest building to own is the one that is **run well rather than run cheaply**. The levers that lower the bill are the same ones that protect the building.',
      },
      {
        type: 'ul',
        items: [
          'Shift spend from reactive repairs to planned, preventive maintenance',
          'Cut energy and water through efficiency and better controls',
          'Consolidate vendors into a single accountable contract',
          'Insist on transparent reporting so waste becomes visible',
        ],
      },
      {
        type: 'p',
        text: '**The largest savings tend to come from energy**, which is where efficiency and certification meet. We cover that ground in our guide to [green building certification](/blog/green-building-certification).',
      },

      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'How Much Does Facility Management Cost in Kenya?' },
      {
        type: 'p',
        text: 'For commercial offices, the service charge typically runs **KES 20 to 45 per square foot a month**, commonly around **KES 25 plus VAT**, on top of rent. Residential and mixed-use developments are usually quoted per unit, from roughly **KES 5,000 to 25,000 a month** depending on the services.',
      },
      { type: 'h3', text: 'How Is a Service Charge Calculated?' },
      {
        type: 'p',
        text: 'It is usually based on lettable floor area, charged per square foot for commercial space or per unit for residential, and set to cover the building’s running costs plus a management fee and a sinking fund. **There is no official formula**, so the basis should be stated plainly in the budget.',
      },
      { type: 'h3', text: 'What Should a Service Charge Include?' },
      {
        type: 'p',
        text: 'It typically covers security, common-area cleaning and utilities, backup power and water, lift and equipment maintenance, waste collection, insurance, a sinking fund, and the management fee. **Anything excluded should be named**, so there are no surprises later.',
      },
      { type: 'h3', text: 'Is There a Standard Facility Management Rate in Kenya?' },
      {
        type: 'p',
        text: 'There is no standard rate to point to. **Charges are set building by building**, which is why two similar properties can price very differently, and why a clear, itemised budget matters so much.',
      },

      { type: 'h2', text: 'What Transparency Is Worth' },
      {
        type: 'p',
        text: 'Facility management in Kenya costs what it costs for a reason, and the owners who pay least over time are rarely the ones chasing the lowest rate. They are the ones who understand the budget, insist on transparency, and run the building well enough that it never has to pay for neglect. **A clear figure you can trace beats a cheap one you cannot**, every time.',
      },
      {
        type: 'cta',
        title: 'Work With ZENNARA',
        text: 'ZENNARA runs transparent, well-budgeted facility management for commercial and mixed-use buildings across Kenya, with line-item reporting and a live client portal. Book a consultation or request a free property assessment.',
        buttonLabel: 'Book a Consultation',
        to: '/contact',
      },
    ],
  },
  {
    slug: 'green-building-certification',
    title: 'How Green Building Certification Works, from LEED to EDGE',
    date: '2026-06-25',
    category: 'Sustainability',
    readMins: 13,
    icon: '🌿',
    cover: '/blogs/green-building-certification-cover.jpg',
    excerpt:
      'A building owner’s guide to green building certification: how it works, the systems that matter from LEED to EDGE, what each costs, how to choose, and what it takes to stay certified, with a focus on Kenya and East Africa.',
    body: [
      {
        type: 'p',
        text: 'A **green building certification** is independent, third-party confirmation that a building performs the way its owners claim, measured across energy, water, materials, and the health of the people inside it. It is a verified result rather than a marketing claim, assessed against the same criteria as every other certified building. For a commercial or mixed-use property, that verification has become a commercial asset in its own right, shaping rent, resale value, and which tenants will sign.',
      },
      {
        type: 'p',
        text: 'The trouble is that the field is crowded and usually explained through a North American lens. This guide takes a wider view. It covers how **green building certification** works, the systems that matter from **LEED to EDGE**, what each one costs, how to choose between them, and what it takes to stay certified once the plaque is on the wall, with particular attention to Kenya and East Africa.',
      },

      { type: 'h2', text: 'What Green Building Certification Is' },
      {
        type: 'p',
        text: '**Green building certification** is a formal, independent assessment that measures a building against a defined sustainability standard and awards a rating based on how well it scores. Sometimes called **sustainable building certification** or simply **building certification**, it replaces a vague claim of being green with a verified, comparable result.',
      },
      {
        type: 'p',
        text: 'The assessment is run by a third party rather than the owner, which is the whole point. A certificate from a recognised body tells tenants, lenders, and investors that the building has been judged against the same criteria as every other certified building, not marked by its own marketing team.',
      },

      { type: 'h2', text: 'Why It Matters for Owners' },
      {
        type: 'p',
        text: 'Certification earns its keep in money, not goodwill. Certified buildings consistently command **higher rents and stronger resale values**, because the features that win the rating, efficient systems and lower running costs, are the same ones that make a building cheaper to occupy, a saving we break down in [how good maintenance lowers running costs](/blog/commercial-facility-maintenance).',
      },
      {
        type: 'p',
        text: 'It also opens doors that are increasingly closed without it. Many corporate and international tenants now carry their own **ESG commitments** and will only lease space that can prove its credentials, and a growing number of lenders price sustainability into their terms.',
      },
      {
        type: 'ul',
        items: [
          'Higher rents and resale values from verified efficiency',
          'Lower operating costs through energy and water savings',
          'Access to ESG-focused tenants and investors',
          'A healthier, more productive environment for occupants',
          'A measurable story for reporting and reputation',
        ],
      },

      { type: 'h2', text: 'The Major Certification Systems' },
      {
        type: 'p',
        text: 'There is no single global standard, only a handful of competing ones. Several **green building certification systems** have grown up in different markets, each with its own emphasis, and these are the ones a commercial owner is most likely to meet.',
      },
      { type: 'h3', text: 'LEED' },
      {
        type: 'p',
        text: '**LEED**, run by the US Green Building Council and awarded through the **Green Building Certification Institute**, is the most recognised system in the world. It scores a building across energy, water, materials, and indoor environmental quality, then awards one of four levels from Certified to Platinum. Its global recognition is its strength; its cost and documentation load are the common complaint.',
      },
      { type: 'h3', text: 'BREEAM' },
      {
        type: 'p',
        text: '**BREEAM**, the British standard and the oldest of the major systems, is widely used across the United Kingdom and Europe. It rates buildings from Pass to Outstanding and is often the default where European tenants or investors are involved.',
      },
      { type: 'h3', text: 'EDGE' },
      {
        type: 'p',
        text: '**EDGE**, created by the IFC, part of the World Bank, was built specifically for **emerging markets**, and it is the system to understand in Kenya. It focuses on three savings, in energy, water, and the energy embodied in materials, and a building qualifies by demonstrating at least a 20% reduction in each. It is faster and cheaper to achieve than LEED, which is why **EDGE green building** certification has spread quickly across Africa, Asia, and Latin America.',
      },
      { type: 'h3', text: 'Green Star' },
      {
        type: 'p',
        text: '**Green Star**, developed in Australia and adapted for Africa by the Green Building Council of South Africa, rates buildings from one to six stars. The African version is the one used across much of the continent, and it sits alongside EDGE as a credible regional route rather than an imported one.',
      },
      { type: 'h3', text: 'WELL and the Rest' },
      {
        type: 'p',
        text: '**WELL** is the outlier, because it certifies the health of the people in a building rather than its environmental footprint, covering air, water, light, and comfort. Beyond these, owners may also meet **Green Globes** and Singapore’s **Green Mark**, the Living Building Challenge for the most ambitious zero-energy buildings, and **ENERGY STAR** as a focused **energy-efficient building certification**.',
      },

      { type: 'h2', text: 'Comparing the Major Systems' },
      {
        type: 'p',
        text: 'The systems are easiest to weigh side by side. The table below sets out where each comes from, who it suits, and how relevant it is in the Kenyan market.',
      },
      {
        type: 'table',
        headers: ['System', 'Origin', 'Best for', 'Tiers', 'Cost', 'Kenya relevance'],
        rows: [
          ['LEED', 'USA', 'International recognition and ESG investors', 'Certified to Platinum', 'High', 'Landmark and multinational buildings'],
          ['BREEAM', 'United Kingdom', 'UK and European tenants and portfolios', 'Pass to Outstanding', 'Medium to high', 'Rare, Europe-linked owners'],
          ['EDGE', 'IFC / World Bank', 'Fast, affordable certification in emerging markets', 'Certified, Advanced, Zero Carbon', 'Low', 'Widely used and growing fast'],
          ['Green Star', 'Australia, adapted for Africa', 'A detailed regional African standard', 'One to six stars', 'Medium', 'Active across the continent'],
          ['WELL', 'USA', 'Buildings focused on occupant health', 'Bronze to Platinum', 'Medium to high', 'Niche, health-led projects'],
          ['ENERGY STAR', 'USA', 'Benchmarking energy performance', 'Score out of 100', 'Low', 'Limited, energy only'],
        ],
      },

      {
        type: 'callout',
        variant: 'tip',
        text: 'For a first certification on a commercial building in Kenya, **EDGE is usually the most realistic target**: low cost, a fast process, and three clear savings to hit. The bigger international names can follow once the building, and the budget, can carry them.',
      },

      { type: 'h2', text: 'How Certification Works, Step by Step' },
      {
        type: 'p',
        text: 'Although the systems differ in detail, the path to certification follows the same broad shape. Knowing the sequence helps an owner budget the time and the documentation each stage demands.',
      },
      {
        type: 'table',
        headers: ['Stage', 'What happens'],
        rows: [
          ['Choose and register', 'Select the system and tier that fit the building, then register the project with the certifying body'],
          ['Design and document', 'Set the targets and gather the evidence, from drawings and energy models to specifications, that proves them'],
          ['Build and verify', 'Construct or retrofit to the design, with on-site checks and testing along the way'],
          ['Review and award', 'The certifying body assesses the evidence and awards the rating, or asks for more'],
          ['Recertify', 'Maintain performance and renew the certificate on the system’s cycle'],
        ],
      },
      {
        type: 'p',
        text: 'The earlier a building enters this process, the cheaper it is. **Designing for certification from the start costs far less than retrofitting for it later**, because the most valuable points, in energy and water, are won in decisions made before anything is built.',
      },

      { type: 'h2', text: 'What Certification Measures' },
      {
        type: 'p',
        text: 'Whatever the system, the scorecard tends to cover the same ground. A building earns points across a set of categories, and the total decides its tier.',
      },
      {
        type: 'ul',
        items: [
          'Energy efficiency, metering, and increasingly on-site renewables',
          'Water efficiency, reuse, and leak control',
          'Responsibly sourced materials, low-impact products, and reduced waste',
          'Indoor environmental quality, covering air, light, acoustics, and comfort',
          'Site and location, including transport links and ecology',
        ],
      },

      { type: 'h2', text: 'What It Costs' },
      {
        type: 'p',
        text: 'There is no flat price for certification, and the honest answer is that it depends on the system, the size of the building, and how early you start. The bill is built from the same handful of components everywhere.',
      },
      {
        type: 'ul',
        items: [
          'Registration and certification fees paid to the certifying body',
          'Consultant or assessor fees to guide the process and verify the evidence',
          'Any design changes or technology needed to hit the targets',
          'Ongoing costs to monitor performance and recertify',
        ],
      },
      {
        type: 'p',
        text: 'Where the systems differ sharply is the order of magnitude. **LEED certification cost** runs highest once consultants and documentation are counted, while **EDGE was designed to be the affordable route for emerging markets**, with lower fees and a lighter process. For many Kenyan owners that difference is decisive, and it is the main reason EDGE has become the default first certification in the region.',
      },

      {
        type: 'callout',
        variant: 'caution',
        text: 'Watch the quote that counts only the **one-off costs**. Registration and consultants are paid once, but metering, servicing, and recertification continue for the life of the building, and they are what protect the rating you paid for.',
      },

      { type: 'h2', text: 'Green Building Certification in Kenya and East Africa' },
      {
        type: 'p',
        text: 'The global guides rarely mention it, but Kenya has an active and fast-growing green building market. The country has its own body, the **Kenya Green Building Society**, which promotes certification and supports owners through it, and a certified building is moving from a rarity to an expectation in premium commercial space.',
      },
      {
        type: 'p',
        text: '**EDGE leads the market** by a wide margin, precisely because it was built for this context, and certified floor space in the country has grown quickly as developers and landlords adopt it. **Green Star**, in its African form, offers a more detailed alternative, while **LEED** remains the badge of choice for landmark towers and multinational tenants. Local certification is handled by accredited bodies such as SGS and Bureau Veritas.',
      },
      {
        type: 'p',
        text: 'For owners weighing the options, the practical question is rarely which certification is best in the abstract, but which one fits the building, the budget, and the tenants you are chasing. That is the conversation behind [our eco-responsible facility management](/services/eco-fm-services).',
      },

      { type: 'h2', text: 'How to Choose the Right Certification' },
      {
        type: 'p',
        text: 'The right certification is the one that matches your goal, not the one with the biggest name. A useful way to decide is to start from what you are trying to achieve and work back to the system that delivers it.',
      },
      {
        type: 'table',
        headers: ['Your goal', 'Strongest fit'],
        rows: [
          ['Fast, affordable certification in Kenya', 'EDGE'],
          ['Attracting international or ESG-driven tenants', 'LEED'],
          ['A recognised standard with European ties', 'BREEAM'],
          ['A detailed regional standard for Africa', 'Green Star'],
          ['Prioritising occupant health and wellbeing', 'WELL'],
          ['Simply benchmarking energy performance', 'ENERGY STAR'],
        ],
      },
      {
        type: 'p',
        text: 'For many commercial and mixed-use buildings in the region, the sensible path is to start with **EDGE** for an achievable first certification, then pursue **LEED or Green Star** later if international tenants or investors call for it. Matching the system to the building is the kind of decision [our FM advisory team](/services/fm-consultancy) is built to guide.',
      },

      {
        type: 'callout',
        variant: 'tip',
        text: 'Do not certify for the badge alone. **Pick the system your tenants and investors recognise**, then aim for the tier you can sustain, rather than the highest one you can reach once.',
      },

      { type: 'h2', text: 'Getting Certified Is Not the Same as Staying Certified' },
      {
        type: 'p',
        text: 'A certificate marks a moment; performance happens every day after it. This is the part the brochures skip, and it is where a building most often slips, because a rating earned at handover means little if the systems behind it are left to drift.',
      },
      {
        type: 'p',
        text: 'Every major system expects a building to **keep performing to stay certified**. Certificates run on renewal cycles, and pathways such as **LEED for Operations and Maintenance** and **BREEAM In-Use** exist to rate a building as it is run, not as it was designed, while EDGE confirms its savings through post-construction verification rather than taking the design on trust.',
      },
      {
        type: 'p',
        text: 'Holding a rating therefore rests on the unglamorous work of facility management: metering energy and water, servicing plant before it loses efficiency, and keeping the records recertification demands. It is the same discipline behind [a working maintenance routine](/blog/property-maintenance-checklist), carried out month after month.',
      },

      {
        type: 'callout',
        variant: 'caution',
        text: 'A rating is not permanent. **A building that drifts out of compliance can lose its certification at renewal**, taking the rent premium and the reputation down with it.',
      },

      { type: 'h2', text: 'The Honest Trade-offs' },
      {
        type: 'p',
        text: 'Certification is worth having, but it is not free of friction, and pretending otherwise helps no one. The process takes time, the documentation is demanding, and the fees and design changes add up, especially on an existing building being brought up to standard.',
      },
      {
        type: 'p',
        text: 'The bigger risk is treating the certificate as the finish line. **A building that is certified once and then neglected loses both the performance and the credibility it paid for**, which is exactly why the systems lean ever harder on in-use verification. Certification rewards the owners who treat it as a commitment, not a campaign.',
      },

      { type: 'h2', text: 'Frequently Asked Questions' },
      { type: 'h3', text: 'Which Green Building Certification Is Best?' },
      {
        type: 'p',
        text: '**There is no single best system, only the best fit for your goal.** EDGE suits owners who want fast, affordable certification in Kenya, LEED suits those chasing international recognition, and WELL suits buildings led by occupant health.',
      },
      { type: 'h3', text: 'How Much Does Green Building Certification Cost?' },
      {
        type: 'p',
        text: 'It depends on the system, the building, and how early you begin, with fees for registration, consultants, and any upgrades needed to hit the targets. EDGE is generally the most affordable route, while **LEED certification cost** tends to be the highest.',
      },
      { type: 'h3', text: 'Is Green Building Certification Required in Kenya?' },
      {
        type: 'p',
        text: 'It is **not yet a legal requirement**, but it is increasingly an expectation in premium commercial and mixed-use space, driven by tenants, investors, and lenders rather than by regulation.',
      },
      { type: 'h3', text: 'What Is the Difference Between Certification and Building Codes?' },
      {
        type: 'p',
        text: 'A building code is the legal minimum a building must meet to be occupied. A green building certification is **a voluntary standard that proves performance well above that minimum**, which is why it carries weight with the market.',
      },

      { type: 'h2', text: 'Beyond the Plaque' },
      {
        type: 'p',
        text: 'A green building certification is most valuable when it reflects how a building runs, not just how it was drawn. Chosen well and maintained properly, it lowers running costs, satisfies tenants and investors, and protects a building’s value, whether it carries the LEED, EDGE, or Green Star name. The owners who get the most from it are those who treat the certificate as the start of the work rather than the reward for it.',
      },
      {
        type: 'cta',
        title: 'Work With ZENNARA',
        text: 'ZENNARA helps commercial and mixed-use owners in Kenya choose the right green building certification and, just as importantly, run their buildings to keep it. Book a consultation or request a free property assessment.',
        buttonLabel: 'Book a Consultation',
        to: '/contact',
      },
    ],
  },
  {
    slug: 'property-maintenance-checklist',
    title:
      'The Complete Property Maintenance Checklist for Commercial and Mixed-Use Buildings',
    date: '2026-06-25',
    category: 'Facility Management',
    readMins: 14,
    icon: '📋',
    cover: '/blogs/property-maintenance-checklist-cover.jpg',
    excerpt:
      'A full property maintenance checklist for commercial and mixed-use buildings: tasks by frequency and by system, who is responsible for what, the statutory items you cannot skip, what it costs, and how to measure it.',
    body: [
      {
        type: 'p',
        text: 'A building that is only fixed when it breaks is the most expensive kind to own, because reactive repairs cost more than the planned work that would have prevented them and they arrive without warning. A **property maintenance checklist** is the tool that breaks that pattern, turning scattered, reactive fixes into a planned schedule. Done well, it keeps a building **safe, compliant, and worth occupying** at a fraction of the cost of running it on emergencies.',
      },
      {
        type: 'p',
        text: 'Where most checklists fall short is the building that is not simple. This guide is written for **commercial and mixed-use developments**, where retail, offices, and homes share one roof and one maintenance budget. It walks through the full checklist by frequency and by system, who is responsible for each task, the **statutory items you cannot skip**, and what the programme should cost.',
      },

      { type: 'h2', text: 'What a Property Maintenance Checklist Is' },
      {
        type: 'p',
        text: 'A **property maintenance checklist** is a structured list of upkeep tasks for a building and its systems, organised by how often each task falls due and who carries it out. Whether you call it a **property management maintenance checklist** or a **property maintenance schedule**, it is less a document than the operating system of the building.',
      },
      {
        type: 'p',
        text: 'A property maintenance checklist that is followed does three jobs at once. It makes sure nothing is forgotten, it **shifts work from reactive to planned**, and it leaves a record you can show to owners, insurers, and auditors when it matters.',
      },

      { type: 'h2', text: 'Preventive, Reactive, and Predictive Work' },
      {
        type: 'p',
        text: 'Every task on the checklist is one of three kinds of work. **Reactive maintenance** fixes things after they break. **Preventive maintenance** services them on a schedule before they fail. **Predictive maintenance** uses sensor data to act only when equipment shows early warning signs.',
      },
      {
        type: 'p',
        text: 'The whole value of a **preventive maintenance checklist** is the shift it forces: from paying premium prices for emergencies to paying planned prices for upkeep. We unpack that in [the case for planned upkeep](/blog/commercial-facility-maintenance).',
      },

      { type: 'h2', text: 'Who Is Responsible for What' },
      {
        type: 'p',
        text: 'In a single-tenant building, every task has an obvious owner. In a multi-tenant or mixed-use building it rarely does, and the fastest way for a job to be skipped is for **two parties to each assume the other owns it**.',
      },
      {
        type: 'table',
        headers: [
          'Maintenance area',
          'Owner / landlord',
          'FM / managing agent',
          'Tenant',
        ],
        rows: [
          ['Structure, roof, and facade', 'Accountable', 'Inspects and arranges', 'n/a'],
          ['Shared plant (HVAC risers, lifts, pumps)', 'Funds replacement', 'Services and schedules', 'n/a'],
          ['Common areas and grounds', 'Accountable', 'Day-to-day upkeep', 'n/a'],
          ['Statutory compliance', 'Duty holder', 'Arranges and records', 'Gives access'],
          ['Inside the demised unit', 'n/a', 'On request', 'Repairs and housekeeping'],
          ['Fit-out and alterations', 'Approves', 'Inspects', 'Carries out and maintains'],
        ],
      },
      {
        type: 'p',
        text: 'The discipline that makes this table work is putting a name against every line. **The lease is the final word on who owes what**, so the checklist should reflect it rather than guess, especially where a single fault sits on the boundary between landlord and tenant.',
      },

      { type: 'h2', text: 'The Checklist by Frequency' },
      {
        type: 'p',
        text: 'The backbone of any checklist is its calendar. The tasks below run from a **property manager daily checklist** through to the annual statutory work, and together they form the routine that keeps everything else from becoming an emergency.',
      },
      { type: 'h3', text: 'Daily' },
      {
        type: 'ul',
        items: [
          'Walk the site so lobbies, car parks, and common areas are checked for hazards, spills, and faults',
          'Confirm fire exits, escape routes, and emergency lighting are clear and working',
          'Review building management system alarms and the overnight fault log',
          'Log and triage new tenant maintenance requests against their response times',
        ],
      },
      { type: 'h3', text: 'Weekly' },
      {
        type: 'ul',
        items: [
          'Test fire alarm call points and emergency lighting on a rotating basis',
          'Inspect plant rooms for leaks, unusual noise, and temperature',
          'Flush infrequently used water outlets to control stagnation',
          'Review the week’s work orders for anything slipping past its SLA',
        ],
      },
      { type: 'h3', text: 'Monthly' },
      {
        type: 'ul',
        items: [
          'Service HVAC filters and check belts, drains, and refrigerant',
          'Test the standby generator and uninterruptible power supplies under load',
          'Inspect plumbing for leaks and check water pressure, pumps, and tanks',
          'Walk the exterior: roof drainage, facade, signage, and car park',
          'Reconcile the planned schedule against what was completed on the ground',
        ],
      },
      { type: 'h3', text: 'Quarterly' },
      {
        type: 'ul',
        items: [
          'Full HVAC and building management system service and controls check',
          'Electrical distribution boards inspected, with thermal imaging for hot spots',
          'Fire equipment, extinguishers, and suppression systems checked',
          'Drainage, gutters, and grease traps cleared',
          'Lift and escalator service by the specialist contractor',
        ],
      },
      { type: 'h3', text: 'Semi-Annual' },
      {
        type: 'ul',
        items: [
          'Deep clean of facades, glazing, and external areas',
          'Water hygiene review and backflow prevention checks',
          'Pest control inspection across shared and demised areas',
          'Vendor performance and contracts reviewed against the SLA',
        ],
      },
      { type: 'h3', text: 'Annual' },
      {
        type: 'ul',
        items: [
          'Fire risk assessment and life-safety certification renewed',
          'Electrical installation condition inspection',
          'Roof and facade condition survey',
          'Lift safety examination by a competent person',
          'Asset register and capital plan reviewed for the year ahead',
        ],
      },

      { type: 'h2', text: 'The Checklist by Building System' },
      {
        type: 'p',
        text: 'The calendar tells you when; the systems tell you what. This is where a **building maintenance inspection checklist** earns its place, because each system is checked, serviced, and recorded against the schedule below. Used this way, the same document doubles as a **property maintenance inspection checklist** for any inspector or insurer who asks, and it is the backbone of our [building maintenance service](/services/building-maintenance).',
      },
      {
        type: 'table',
        headers: ['System', 'What to maintain', 'Typical frequency'],
        rows: [
          ['Envelope and structure', 'Roof, facade, drainage, sealants, structural fixings', 'Quarterly to annual'],
          ['Mechanical and HVAC', 'Filters, coils, refrigerant, controls, chillers and boilers', 'Monthly to quarterly'],
          ['Electrical and lighting', 'Distribution boards, thermal imaging, emergency and general lighting, standby power', 'Monthly to annual'],
          ['Plumbing and water', 'Leaks, pumps, tanks, drainage, water hygiene and backflow', 'Monthly to semi-annual'],
          ['Fire and life-safety', 'Alarms, detection, suppression, extinguishers, escape routes, fire doors', 'Weekly to annual'],
          ['Lifts and vertical transport', 'Lift and escalator service and statutory examination', 'Quarterly to annual'],
          ['Exterior and grounds', 'Car parks, landscaping, signage, external lighting, gutters', 'Monthly to quarterly'],
          ['Interior and common areas', 'Finishes, doors, glazing, cleaning, pest control', 'Daily to quarterly'],
        ],
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The most dangerous gaps are the systems you only notice when they fail: **flat roofs, storm drainage, and fire doors**. They sit quietly between inspections until the day they do not, so give them a fixed place on the schedule rather than leaving them to chance.',
      },

      { type: 'h2', text: 'The Statutory Items You Cannot Skip' },
      {
        type: 'p',
        text: 'A handful of tasks on the checklist are not housekeeping but law. Miss them and the exposure is legal and financial, not just operational, and your insurance can fall away exactly when you need it. Treat the items below as the non-negotiable core of the checklist.',
      },
      {
        type: 'table',
        headers: ['Compliance item', 'Typical frequency', 'Who signs it off'],
        rows: [
          ['Fire risk assessment', 'Annual, or on change of use', 'Competent fire assessor'],
          ['Fire alarm and detection', 'Weekly check, periodic service', 'FM or fire contractor'],
          ['Emergency lighting', 'Monthly check, annual duration test', 'FM or electrician'],
          ['Fire extinguisher service', 'Annual', 'Certified technician'],
          ['Electrical installation inspection', 'Periodically, sooner for some uses', 'Qualified electrician'],
          ['Water hygiene and legionella', 'Ongoing checks, periodic risk assessment', 'Water-treatment specialist'],
          ['Lift safety examination', 'Six-monthly to annual', 'Competent examiner'],
        ],
      },
      {
        type: 'p',
        text: 'The exact names and intervals differ by country, so map this to your local fire, electrical, and public-health rules. In Kenya that means **county fire safety certification**, annual **DOSHS** occupational safety and fire audits, and alignment with your insurer’s terms. The principle holds everywhere: **a missed statutory check is a liability, not a maintenance gap**.',
      },

      { type: 'h2', text: 'Mixed-Use and Multi-Tenant Buildings' },
      {
        type: 'p',
        text: 'This is where standard checklists fall apart, and where most published ones simply stop. A **mixed-use development** combines uses that pull in different directions, and the maintenance has to hold them together without playing favourites. The homes need a **residential property management checklist**, the retail and offices a commercial one, and the building a single schedule that reconciles all three.',
      },
      { type: 'h3', text: 'Shared Versus Demised Systems' },
      {
        type: 'p',
        text: 'A single HVAC riser, water main, or electrical supply may serve a supermarket, a floor of offices, and the flats above, while each tenant controls their own fit-out. The checklist has to separate **shared systems** from **demised** tenant systems, because each is inspected, billed, and repaired differently.',
      },
      {
        type: 'ul',
        items: [
          'Map every system as shared, landlord-demised, or tenant-demised before writing a single task',
          'Meter shared services so retail, office, and residential loads can be split fairly',
          'Keep access agreements in place so plant sitting inside a demise can still be serviced',
        ],
      },
      { type: 'h3', text: 'Different Tenants, Different Rules' },
      {
        type: 'p',
        text: 'Each use class brings its own rhythm and its own regulations. Retail trades long hours and judges you on the frontage and the car park. Offices need security, lifts, and climate control in working hours. Homes need quiet, hot water, and a fast response at any hour.',
      },
      {
        type: 'ul',
        items: [
          'Schedule noisy or disruptive work around retail trading and residential quiet hours',
          'Set response-time SLAs by use class, since a stuck lift and a leaking flat are not equal',
          'Track the separate statutory regimes that can apply to homes, workplaces, and public retail space under one roof',
        ],
      },
      { type: 'h3', text: 'Splitting the Cost Fairly' },
      {
        type: 'p',
        text: 'Mixed-use maintenance is only as fair as its cost split. Shared costs such as lifts, fire systems, and common-area cleaning are usually recovered through a **service charge**, and tenants will challenge any bill they cannot trace. A checklist that tags each task to the systems it covers is what **makes that service charge defensible**.',
      },

      { type: 'h2', text: 'Maintenance and the Seasons' },
      {
        type: 'p',
        text: 'A large part of the calendar is driven by climate. Kenya runs on wet and dry seasons rather than four temperate ones, so anchor the schedule to the rains, the heat, and your busiest trading periods rather than a northern calendar.',
      },
      {
        type: 'table',
        headers: ['Period', 'What to prepare'],
        rows: [
          ['Before the rains', 'Roof, drainage, gutters, and waterproofing checked; flood prep for ground-floor retail'],
          ['Dry and hot season', 'Cooling and ventilation under peak load, water storage and hygiene, dust control'],
          ['Storm periods', 'Secure signage, facades, and loose elements; test pumps and standby power'],
          ['Peak trading periods', 'Pre-holiday readiness: deep clean, full lighting, and reliable HVAC and lifts for footfall'],
        ],
      },

      { type: 'h2', text: 'What the Programme Costs' },
      {
        type: 'p',
        text: 'There is no single price for maintaining a building. The figure turns on the building itself, the scope of the checklist, and how the contracts are structured.',
      },
      {
        type: 'ul',
        items: [
          'Building age and condition',
          'Size, floor area, and the mix of uses',
          'System complexity, such as lifts, generators, and a building management system',
          'Operating hours and required response times',
          'The statutory compliance burden',
        ],
      },
      {
        type: 'p',
        text: 'It helps to split the maintenance budget two ways. **Operating costs** cover the routine checklist, day-to-day repairs, and contracts, while **capital costs** cover big replacements such as a chiller, a roof, or a lift. That split is why a **reserve fund** matters: it stops a predictable replacement from becoming a crisis.',
      },
      {
        type: 'callout',
        variant: 'caution',
        text: '**The cheapest quote is rarely the cheapest outcome.** Compare on **scope and total cost of ownership**, never the headline rate, a balance we set out in [our facility maintenance guide](/blog/commercial-facility-maintenance).',
      },

      { type: 'h2', text: 'Measuring the Programme' },
      {
        type: 'p',
        text: 'A checklist sets out what should be done, but only **the metrics tell you whether it is happening**. Agree the numbers that matter before you sign a contract, and insist on seeing them every month.',
      },
      {
        type: 'table',
        headers: ['Metric', 'What it measures', 'Healthy target'],
        rows: [
          ['Planned task completion', 'Scheduled work done on time', '95% or higher'],
          ['Planned vs reactive ratio', 'Maturity of the programme', 'Majority planned'],
          ['Mean time to repair', 'Speed of resolution', 'Tracked, trending down'],
          ['First-time fix rate', 'Quality and preparation', 'High and rising'],
          ['Work-order backlog', 'Whether you are keeping up', 'Stable or falling'],
          ['Statutory compliance rate', 'Legal items done on time', '100%'],
        ],
      },
      {
        type: 'p',
        text: 'Almost every target here is an aspiration you improve towards over time. The compliance rate is the one exception: on statutory items, **the only acceptable figure is 100%**.',
      },

      { type: 'h2', text: 'Maintenance, Energy, and ESG' },
      {
        type: 'p',
        text: 'Maintenance and sustainability are the same conversation. A poorly maintained building wastes energy and water, so the checklist is also **one of the cheapest ways to cut both**, with no capital project required. It is the same principle behind [our Eco FM programme](/services/eco-fm-services).',
      },
      {
        type: 'ul',
        items: [
          'Energy audits and building management system optimisation',
          'Water efficiency and early leak control',
          'EV-charger and solar maintenance as these become standard',
          'Waste segregation and diversion from landfill',
          'Tracking energy, water, and waste for ESG-ready reporting',
        ],
      },
      { type: 'h2', text: 'From Checklist to System' },
      {
        type: 'p',
        text: '**A checklist on paper degrades the moment someone is busy.** A checklist inside a system endures, because every task, asset, and work order lives in one place with a record behind it.',
      },
      {
        type: 'p',
        text: 'The best operators run it behind a [live client portal](/portal), so owners see what was done, what it cost, and what is due next, without ever chasing an update. That visibility is what turns a list of tasks into a maintenance programme you can trust.',
      },

      { type: 'h2', text: 'Frequently Asked Questions' },
      {
        type: 'h3',
        text: 'What Should a Commercial Property Maintenance Checklist Include?',
      },
      {
        type: 'p',
        text: 'It should span every frequency from daily to annual and every building system, plus the statutory compliance items, with **a named owner against each task**. Anything less leaves a gap that surfaces as an emergency later.',
      },
      { type: 'h3', text: 'How Often Should Property Maintenance Be Done?' },
      {
        type: 'p',
        text: 'It ranges from **daily walkarounds to annual statutory inspections**, depending on the task. Set the intervals against manufacturer guidance and your local compliance dates rather than a single blanket schedule.',
      },
      {
        type: 'h3',
        text: 'Who Is Responsible for Maintenance in a Mixed-Use Building?',
      },
      {
        type: 'p',
        text: 'The owner is usually responsible for the structure, shared systems, and statutory compliance, and the tenant for the inside of their own demise, with the FM coordinating both. **The lease is the source of truth** for any task on the boundary.',
      },
      {
        type: 'h3',
        text: 'What Is the Difference Between a Maintenance and an Inspection Checklist?',
      },
      {
        type: 'p',
        text: 'A maintenance checklist drives the work that gets done. A **building maintenance inspection checklist**, sometimes called a **building facilities inspection checklist**, records the condition you find. A serious programme uses both, because one without the other is either action with no evidence or evidence with no action.',
      },

      { type: 'h2', text: 'Where a Checklist Earns Its Keep' },
      {
        type: 'p',
        text: 'What a building needs is not heroics but a checklist that is **followed, measured, and owned**. Get that right and maintenance stops being a series of expensive surprises and becomes one of the most reliable ways to protect a building’s value and income, in any use class, under any roof.',
      },
      {
        type: 'cta',
        title: 'Work With ZENNARA',
        text: 'ZENNARA runs preventive, compliance-ready maintenance programmes for commercial and mixed-use buildings across Kenya, with transparent reporting and a live client portal. Book a consultation or request a free property assessment.',
        buttonLabel: 'Book a Consultation',
        to: '/contact',
      },
    ],
  },
  {
    slug: 'commercial-facility-maintenance',
    title:
      'Commercial Facility Maintenance: The Owner’s Guide to Lower Costs and Fewer Breakdowns',
    date: '2026-06-25',
    category: 'Facility Management',
    readMins: 12,
    icon: '🏢',
    cover: '/blogs/commercial-facility-maintenance-cover.jpg',
    excerpt:
      'A practical, no-jargon guide to commercial facility maintenance: what it covers, the four maintenance types, what it really costs, a preventive checklist, and how to choose a provider that lowers your operating costs.',
    body: [
      {
        type: 'p',
        text: 'Commercial facility maintenance is the work of keeping a building and its systems running reliably, and how well it is done shows up directly on the owner’s bottom line. A building that is maintained pays a predictable, planned cost, while a building that is only repaired pays a larger one in emergencies, downtime, and shortened equipment life. **Commercial facility maintenance** done properly catches problems while they are small, before they grow into the failures that take systems offline and force premium-priced repairs.',
      },
      {
        type: 'p',
        text: 'This guide is written for owners and property managers who want the full picture, not a sales pitch. It covers what the work involves, the **four ways it can be done**, what it **costs**, a **preventive maintenance checklist** you can adapt, and how to choose a provider that lowers your operating costs instead of inflating them.',
      },

      { type: 'h2', text: 'What Is Commercial Facility Maintenance?' },
      {
        type: 'p',
        text: '**Commercial facility maintenance** is the planned and reactive upkeep of a commercial building and every system inside it, mechanical, electrical, plumbing, fire and life-safety, structure, and grounds. The aim is simple: keep the property **safe, compliant, efficient, and pleasant to occupy**, day after day.',
      },
      {
        type: 'p',
        text: 'Done well, it protects three things at once. It protects the **asset**, because a well-kept building holds its value and avoids premature, capital-heavy replacements. It protects the **occupants**, because comfortable, safe tenants renew their leases instead of leaving. And it protects the **budget**, because planned upkeep costs a fraction of emergency repair. Neglect quietly reverses all three at the same time.',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Maintenance vs Management vs Property Management',
        text: '**Facility maintenance** is the hands-on upkeep of the building. **Facility management** is the wider discipline that plans, budgets, and oversees that maintenance alongside services like cleaning, security, and space. **Property management** adds the commercial layer on top: leases, rent, and tenant relations.',
      },

      { type: 'h2', text: 'The Four Types of Facility Maintenance' },
      {
        type: 'p',
        text: 'Every maintenance task takes one of four approaches, and the balance you strike between them is the single biggest driver of your costs and your downtime.',
      },
      {
        type: 'table',
        headers: ['Approach', 'What It Is', 'Cost and Risk', 'Best For'],
        rows: [
          ['Reactive', 'Fix it after it fails', 'Highest total cost, unplanned downtime', 'Low-consequence, non-critical items'],
          ['Preventive', 'Scheduled servicing at set intervals', 'Lower cost, fewer failures', 'Nearly all building systems'],
          ['Predictive', 'Triggered by condition data and sensors', 'Lowest cost over time, needs technology', 'Critical, high-value plant'],
          ['Condition-based', 'Act when a measured threshold is reached', 'Efficient, needs monitoring', 'Assets with measurable wear'],
        ],
      },
      {
        type: 'p',
        text: 'Left alone, most buildings drift toward **reactive** maintenance, because it asks for nothing until something breaks. That is exactly why it is the most expensive option: failures arrive unplanned, at the worst possible moment, and a single one often takes other components down with it.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'The healthiest mix is **mostly preventive**, with **predictive** monitoring on your critical, high-value plant such as chillers, generators, and lifts, and **reactive** reserved only for items where a failure barely matters.',
      },

      { type: 'h2', text: 'What’s Included, System by System' },
      {
        type: 'p',
        text: 'A serious maintenance scope spans every system that keeps a building running, and the detail is where contracts quietly diverge. Two agreements can both list **HVAC** and mean very different things: a quarterly filter change in one, full plant servicing and controls optimisation in the other. Read the scope, not the headline.',
      },
      { type: 'h3', text: 'Mechanical and HVAC' },
      {
        type: 'ul',
        items: [
          'Routine **filter changes, coil cleaning, and refrigerant checks** that keep cooling efficient and energy bills down',
          'Calibrating the **building management system** so plant runs to schedule instead of working against itself',
          'Planned servicing of **chillers, boilers, and air handling units** before peak load finds the weak point for you',
        ],
      },
      { type: 'h3', text: 'Electrical' },
      {
        type: 'ul',
        items: [
          '**Distribution-board inspections, thermal imaging for hot spots, and load checks** that catch faults before they trip or overheat',
          'Testing general and **emergency lighting and standby generators** so nothing goes dark when the grid does',
          '**Statutory inspections** and the remedial works that keep certificates valid and insurers satisfied',
        ],
      },
      { type: 'h3', text: 'Plumbing and Water' },
      {
        type: 'ul',
        items: [
          'Early **leak detection and repair**, plus drain clearing before a blockage backs up into the building',
          'Maintaining pumps and storage tanks and installing **water-efficient outlets** that quietly cut consumption',
          'Hygiene monitoring and **backflow prevention** that keep the supply safe and compliant',
        ],
      },
      { type: 'h3', text: 'Fire and Life-Safety' },
      {
        type: 'ul',
        items: [
          'Servicing **alarms, detection, and suppression systems** so they perform the one time they are ever needed',
          'Maintaining **extinguishers, emergency exits, and signage** that keep people moving safely in an incident',
          '**Statutory testing and certification**, documented and kept current',
        ],
      },
      { type: 'h3', text: 'Building Envelope, Interior, and Grounds' },
      {
        type: 'ul',
        items: [
          '**Roof, facade, and drainage inspections** that stop water finding its way in',
          'Repairs to **doors, locks, glazing, and internal finishes** that keep the space safe and presentable',
          '**Janitorial, landscaping, and exterior upkeep** that protect both first impressions and the building shell',
        ],
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The most dangerous gaps are in the systems you only notice when they fail: **flat roofs, storm drainage, and fire and life-safety equipment**. Skip these and reactive maintenance stops being a cost problem and becomes a safety and liability one.',
      },

      { type: 'h2', text: 'Preventive Maintenance Checklist' },
      {
        type: 'p',
        text: 'No two buildings run on the same schedule, so treat this as a **starting framework** and tune the intervals to your equipment, occupancy, and manufacturer guidance.',
      },
      {
        type: 'table',
        headers: ['Frequency', 'Typical Tasks'],
        rows: [
          ['Daily and weekly', 'Visual inspections, common-area checks, meter and log readings, address hazards'],
          ['Monthly', 'HVAC filters, emergency lighting test, plumbing leak checks, exterior walkaround'],
          ['Quarterly', 'Plant servicing, electrical thermal checks, drainage clearing, fire equipment checks'],
          ['Annual', 'Full HVAC service, fire and life-safety certification, roof and facade survey, statutory inspections'],
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Anchor every schedule to **two calendars at once**: the manufacturer’s service intervals and your statutory compliance dates. A missed compliance inspection is a legal and insurance exposure, not just a maintenance gap.',
      },

      { type: 'h2', text: 'How Much Does Commercial Facility Maintenance Cost?' },
      {
        type: 'p',
        text: 'There is **no single price** for facility maintenance, and any provider who quotes one before seeing your building is guessing. Cost turns on three things: the building, the scope, and how the contract is structured. The clearest way to read a quote is to understand the **pricing model** behind it.',
      },
      {
        type: 'table',
        headers: ['Pricing Model', 'How It Works', 'Best For'],
        rows: [
          ['Per square foot or metre', 'A rate applied to floor area', 'Budgeting and benchmarking across a portfolio'],
          ['Fixed or managed contract', 'A set monthly fee for a defined scope', 'Predictable budgets and full outsourcing'],
          ['Time and materials', 'Pay per visit plus parts', 'Ad hoc or low-volume needs'],
          ['Integrated FM', 'One contract bundling maintenance with cleaning, security, and more', 'Multi-service sites and portfolios'],
        ],
      },
      {
        type: 'p',
        text: 'Within any model, the figure is pushed up or down by **building age and condition, system complexity, floor area, required response times, operating hours, and local labour rates**. An older building with critical plant running around the clock will always cost more to maintain than a simple, new, nine-to-five office of the same size.',
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'The cheapest bid is rarely the cheapest contract. **Under-scoped, reactive-heavy agreements** push cost into emergency call-outs, downtime, and shortened equipment life. Compare on the scope behind the price and the total cost of ownership, never the headline rate alone.',
      },
      {
        type: 'p',
        text: 'The pattern across the industry is consistent. **Reactive repairs cost several times** the price of the same work planned in advance, and a disciplined preventive programme typically cuts maintenance spend by **double digits** while extending the working life of the equipment it protects.',
      },

      { type: 'h2', text: 'In-House, Outsourced, or Integrated?' },
      {
        type: 'p',
        text: 'How you resource maintenance matters as much as how you schedule it, and the right answer shifts as a portfolio grows.',
      },
      {
        type: 'table',
        headers: ['Approach', 'Strengths', 'Trade-offs'],
        rows: [
          ['In-house team', 'Direct control, deep building knowledge', 'Higher fixed cost, limited specialist cover, harder to scale'],
          ['Outsourced single services', 'Specialist expertise, flexibility', 'Multiple vendors to coordinate and hold accountable'],
          ['Integrated FM partner', 'One accountable partner, economies of scale, consolidated reporting', 'Requires a capable provider and clear SLAs'],
        ],
      },
      {
        type: 'p',
        text: 'A single building can run perfectly well with an **in-house caretaker** and a handful of specialist contracts. But coordination cost climbs with every site and every vendor you add, and at portfolio scale an **integrated partner** usually wins: one accountable relationship, consolidated reporting, and the buying power to deliver more for less.',
      },

      { type: 'h2', text: 'How to Choose a Provider' },
      {
        type: 'p',
        text: 'The right provider is easy to recognise once you know what to look for. Three things separate a genuine partner from a call-out service: **how they work, what they are accredited to, and what they will put in writing**.',
      },
      { type: 'h3', text: 'Questions to Ask' },
      {
        type: 'ul',
        items: [
          'What are your guaranteed response and resolution times?',
          'What share of your work is preventive versus reactive?',
          'Can owners see status, work history, and costs in real time?',
          'What do you sub-contract, and who stays accountable for it?',
          'How do you handle sustainability and energy efficiency?',
        ],
      },
      { type: 'h3', text: 'Credentials and Standards to Look For' },
      {
        type: 'ul',
        items: [
          '**ISO 41001** for facility management systems',
          'Quality, environmental, and safety standards (ISO 9001, 14001, 45001)',
          'Relevant licensing, insurance, and references in your asset class',
        ],
      },
      { type: 'h3', text: 'SLAs and KPIs to Demand' },
      {
        type: 'ul',
        items: [
          'Defined response and resolution times by priority',
          'A target preventive-maintenance completion rate',
          'Monthly reporting against agreed metrics from day one',
        ],
      },
      {
        type: 'callout',
        variant: 'caution',
        text: 'Walk away from any provider who cannot show **transparent reporting**, who prices only on reactive call-outs, who sub-contracts core work without staying accountable for it, or who cannot give references for buildings like yours.',
      },

      { type: 'h2', text: 'Measuring Performance: KPIs and SLAs' },
      {
        type: 'p',
        text: '**If a metric is not reported, it is not being managed.** Agree the numbers that matter before you sign, and insist on seeing them every month, not once a year when the contract is up for renewal.',
      },
      {
        type: 'table',
        headers: ['KPI', 'What It Tells You', 'Healthy Target'],
        rows: [
          ['Response time', 'Speed to acknowledge and attend', 'Within hours for urgent issues'],
          ['Resolution time', 'Speed to fully fix', 'Tracked and trending down'],
          ['PM completion rate', 'Discipline of the programme', '95% or higher on schedule'],
          ['Preventive vs reactive ratio', 'Programme maturity', 'Majority preventive'],
          ['Cost per square foot or metre', 'Efficiency and benchmarking', 'Stable or falling'],
          ['Tenant satisfaction', 'Service quality occupants feel', 'Measured and rising'],
        ],
      },

      { type: 'h2', text: 'Technology in Modern Maintenance' },
      {
        type: 'p',
        text: 'A **computerised maintenance management system (CMMS)** turns maintenance from a paper trail into a live, auditable record. Every asset, work order, and service history sits in one place, so nothing slips through the cracks and budgeting rests on fact rather than memory.',
      },
      {
        type: 'p',
        text: 'On critical plant, **sensors and condition monitoring** read the early warning signs (a rising temperature, a shift in vibration) and turn a future breakdown into a scheduled repair. The best providers put all of it behind a **live client portal**, giving owners real-time visibility of requests, status, costs, and performance, so you never chase an update or wonder where the budget went.',
      },

      { type: 'h2', text: 'Sustainability and Energy Efficiency' },
      {
        type: 'p',
        text: 'Maintenance and sustainability are the same conversation. Buildings are among the world’s largest energy consumers, and a poorly maintained one wastes more of it. **Fouled coils, drifting controls, and unseen leaks** all quietly inflate consumption and cost at the same time.',
      },
      {
        type: 'ul',
        items: [
          '**Energy:** HVAC optimisation, smart controls, and efficient lighting',
          '**Water:** leak detection, efficient fixtures, and usage monitoring',
          '**Waste:** segregation, recycling, and diversion from landfill',
          '**Reporting:** ESG-ready data on energy, water, and waste',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Proactive maintenance is one of the **cheapest decarbonisation levers** available. It cuts energy and water use with no capital project, and the savings land on the same bills you are already paying.',
      },

      { type: 'h2', text: 'Frequently Asked Questions' },
      {
        type: 'h3',
        text: 'What Is the Difference Between Facility Maintenance and Facility Management?',
      },
      {
        type: 'p',
        text: '**Maintenance** is the hands-on upkeep of the building and its systems. **Management** is the wider discipline that plans, budgets, and oversees that maintenance along with services like cleaning, security, and space.',
      },
      { type: 'h3', text: 'How Much Does Commercial Facility Maintenance Cost?' },
      {
        type: 'p',
        text: 'It depends on the building, the scope, and the contract model: per square foot, fixed contract, time and materials, or integrated FM. The reliable way to compare quotes is on **scope and total cost of ownership**, not the headline rate.',
      },
      { type: 'h3', text: 'How Often Should Preventive Maintenance Be Done?' },
      {
        type: 'p',
        text: 'It ranges from **daily checks to annual servicing**, depending on the system. Set the intervals against manufacturer guidance and statutory compliance dates rather than a single blanket schedule.',
      },
      { type: 'h3', text: 'Should We Keep Maintenance In-House or Outsource It?' },
      {
        type: 'p',
        text: 'Small single sites can work in-house with specialist support. As a portfolio grows, an **integrated partner** usually wins on cost, consistency, and accountability.',
      },

      { type: 'h2', text: 'Maintenance That Pays for Itself' },
      {
        type: 'p',
        text: 'Treated as a cost to cut, maintenance always loses: the budget gets trimmed, the building quietly degrades, and the savings come back as bigger bills later. Treated as a **lever to manage**, it does the opposite. Planned work, transparent reporting, and sustainability folded into the same programme make maintenance one of the most reliable ways to lower a building’s running costs while protecting its value. The cheapest buildings to own are the ones that are never allowed to fail.',
      },
      {
        type: 'cta',
        title: 'Work With ZENNARA',
        text: 'ZENNARA delivers institutional-grade, eco-responsible facility maintenance with transparent reporting and a live client portal. Book a consultation or request a free property assessment, and a specialist will respond within one business hour.',
        buttonLabel: 'Book a Consultation',
        to: '/contact',
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
