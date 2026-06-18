import { STATS } from '../../data/content'

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {STATS.map((s) => (
        <div className="stat" key={s.l}>
          <div className={`stat-n ${s.eco ? 'eco' : 'gold'}`}>{s.n}</div>
          <div className="stat-l">{s.l}</div>
        </div>
      ))}
    </div>
  )
}
