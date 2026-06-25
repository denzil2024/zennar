import { Link } from 'react-router-dom'
import { SERVICES } from '../../data/content'
import Reveal from '../Reveal'

type Props = {
  count?: number
  title?: string
  subtitle?: string
  background?: string
}

export default function Services({
  count,
  title = 'Management',
  subtitle = 'A full spectrum of property and facility management, led by our eco-responsible Eco FM service line. From day-to-day operations and maintenance to sustainability, security, and reporting, we run buildings to a higher standard while keeping running costs down.',
  background,
}: Props) {
  const items = count ? SERVICES.slice(0, count) : SERVICES
  return (
    <section id="services" style={background ? { background } : undefined}>
      <div className="wrap">
        <Reveal>
          <div className="sl">Our Capabilities</div>
          <h2 className="st">
            {title} <em>Services</em>
          </h2>
          <p className="ss">{subtitle}</p>
          <div className="rule" />
          <div className="svc-grid">
            {items.map((s) => (
              <Link
                className={`svc ${s.eco ? 'eco' : ''}`}
                to={`/services/${s.slug}`}
                key={s.t}
              >
                <div className="svc-ico">{s.ico}</div>
                <div className="svc-t">{s.t}</div>
                <div className="svc-d">{s.d}</div>
                <span className="svc-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
