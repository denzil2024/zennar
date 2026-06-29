import { STATS } from '../../data/content'

export default function StatsBar() {
  return (
    <div className="stats-wrap">
      <div className="stats-bar">
        {STATS.map((s) => (
          <div className="stat" key={s.l}>
            <div className={`stat-n ${s.eco ? 'eco' : 'gold'}`}>{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>
      <p className="stats-note">
        Target service standards across our managed portfolio, reviewed with
        owners every quarter.
      </p>
    </div>
  )
}
