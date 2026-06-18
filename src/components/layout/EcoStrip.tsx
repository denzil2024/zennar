import { ECO_PILLS } from '../../data/content'

export default function EcoStrip() {
  return (
    <div className="estrip">
      <div className="estrip-lbl">🌿 Eco Commitment</div>
      <div className="epills">
        {ECO_PILLS.map((p) => (
          <div className="epill" key={p}>
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}
