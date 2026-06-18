import { SERVICES } from '../../data/content'

type Props = {
  count?: number
  title?: string
  subtitle?: string
  background?: string
}

export default function Services({
  count,
  title = 'Management',
  subtitle = 'A full spectrum of property and facility management, led by our eco-responsible Eco FM service line.',
  background,
}: Props) {
  const items = count ? SERVICES.slice(0, count) : SERVICES
  return (
    <section id="services" style={background ? { background } : undefined}>
      <div className="wrap">
        <div className="sl">Our Capabilities</div>
        <h2 className="st">
          {title} <em>Services</em>
        </h2>
        <p className="ss">{subtitle}</p>
        <div className="rule" />
        <div className="svc-grid">
          {items.map((s) => (
            <div className={`svc ${s.eco ? 'eco' : ''}`} key={s.t}>
              <div className="svc-ico">{s.ico}</div>
              <div className="svc-t">{s.t}</div>
              <div className="svc-d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
