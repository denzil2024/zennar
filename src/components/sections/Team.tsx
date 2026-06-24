import { TEAM } from '../../data/content'

const initials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Team() {
  return (
    <section>
      <div className="wrap">
        <div className="sl">Leadership</div>
        <h2 className="st">
          The People Behind <em>ZENNARA</em>
        </h2>
        <p className="ss">
          A hands-on leadership team spanning property operations, governance,
          and technology, accountable to every client we serve.
        </p>
        <div className="rule" />
        <div className="team-grid">
          {TEAM.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} />
                ) : (
                  <span>{initials(m.name)}</span>
                )}
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              {m.years && <div className="team-years">{m.years} experience</div>}
              {m.bio && <p className="team-bio">{m.bio}</p>}
              {m.linkedin && (
                <a
                  className="team-li"
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
