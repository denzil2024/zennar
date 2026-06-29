import { useState } from 'react'
import { submitLead } from '../lib/portalApi'
import Select from './Select'

const PROPERTY_TYPES = [
  'Commercial',
  'Residential',
  'Mixed-Use',
  'Industrial',
  'Retail',
  'Other',
]

export default function LeadForm({ inline = false }: { inline?: boolean }) {
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const fd = new FormData(e.currentTarget as HTMLFormElement)
    const propertyType = String(fd.get('propertyType') || '')
    if (!propertyType) {
      setError('Please choose a property type.')
      return
    }
    setBusy(true)
    try {
      await submitLead({
        propertyType,
        location: String(fd.get('location') || ''),
        size: String(fd.get('size') || ''),
        phone: String(fd.get('phone') || ''),
      })
      setDone(true)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className={`lead-card lead-done${inline ? ' lead-done-inline' : ''}`}>
        <div className="lead-tick">✓</div>
        <h3 className="lead-title">Request received</h3>
        <p className="lead-sub" style={{ border: 'none', padding: 0 }}>
          Thank you. A specialist will reach out within one business hour with
          your free property assessment.
        </p>
      </div>
    )
  }

  // Inline / horizontal bar variant (used when the form sits below the headline).
  if (inline) {
    return (
      <form className="lead-bar" onSubmit={onSubmit}>
        <Select name="propertyType" options={PROPERTY_TYPES} placeholder="Property type" />
        <input className="lead-bin" name="location" placeholder="Location (city, country)" required />
        <input className="lead-bin" name="size" placeholder="Units / sq ft" />
        <input className="lead-bin" name="phone" type="tel" placeholder="Phone" required />
        <button className="lead-bbtn" type="submit" disabled={busy}>
          {busy ? 'Sending…' : 'Get Free Assessment'}
        </button>
        {error && <p className="lead-err lead-bar-err">{error}</p>}
      </form>
    )
  }

  return (
    <form className="lead-card" onSubmit={onSubmit}>
      <h3 className="lead-title">Get a Free Property Assessment</h3>
      <p className="lead-sub">No obligation. A specialist responds within one business hour.</p>

      <span className="lead-lbl">Property type</span>
      <Select name="propertyType" options={PROPERTY_TYPES} placeholder="Select type" />

      <label className="lead-lbl" htmlFor="lead-loc">
        Location
      </label>
      <input id="lead-loc" className="lead-in" name="location" placeholder="City, country" required />

      <label className="lead-lbl" htmlFor="lead-size">
        Number of units / sq ft
      </label>
      <input id="lead-size" className="lead-in" name="size" placeholder="e.g. 40 units or 25,000 sq ft" />

      <label className="lead-lbl" htmlFor="lead-phone">
        Phone
      </label>
      <input id="lead-phone" className="lead-in" name="phone" type="tel" inputMode="tel" placeholder="Your phone number" required />

      <button className="lead-btn" type="submit" disabled={busy}>
        {busy ? 'Sending…' : 'Get my free assessment'}
      </button>
      {error && <p className="lead-err">{error}</p>}
    </form>
  )
}
