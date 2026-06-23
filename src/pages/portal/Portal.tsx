import { useEffect, useState } from 'react'
import Seo from '../../components/Seo'
import {
  requestCode,
  verifyCode,
  fetchDashboard,
  logout,
  getToken,
  setToken,
  type Dashboard,
} from '../../lib/portalApi'

const NAV = [
  { ico: '📊', label: 'Overview' },
  { ico: '💰', label: 'Payments' },
  { ico: '🔧', label: 'Maintenance' },
  { ico: '🌿', label: 'Eco Reports' },
  { ico: '📄', label: 'Documents' },
]

const kes = (n: number | string) =>
  'KES ' + Number(n).toLocaleString('en-KE', { maximumFractionDigits: 0 })

const fmtDate = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : '—'

// open / in_progress -> amber, urgent -> red, done -> green
const dotClass = (status: string) =>
  status === 'done' ? 'done' : status === 'urgent' ? 'urgent' : 'open'

export default function Portal() {
  const [booting, setBooting] = useState(true)
  const [data, setData] = useState<Dashboard | null>(null)

  // login form state
  const [step, setStep] = useState<'phone' | 'code'>('phone')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [devCode, setDevCode] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // On load, if we already have a session token, try to fetch the dashboard.
  useEffect(() => {
    if (!getToken()) {
      setBooting(false)
      return
    }
    fetchDashboard()
      .then(setData)
      .catch(() => {
        // stale/expired token; fall back to the login screen
      })
      .finally(() => setBooting(false))
  }, [])

  async function onRequestCode(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      const r = await requestCode(phone)
      setDevCode(r.devCode || null)
      setStep('code')
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  async function onVerify(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    try {
      const r = await verifyCode(phone, code)
      setToken(r.token)
      const d = await fetchDashboard()
      setData(d)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  async function onLogout() {
    await logout()
    setData(null)
    setStep('phone')
    setPhone('')
    setCode('')
    setDevCode(null)
  }

  return (
    <>
      <Seo
        title="Client Portal"
        description="ZENNARA Client Portal: manage payments, maintenance requests, eco reports, and documents in one place."
        noindex
      />
      <section>
        <div className="wrap">
          <div className="sl eco">Digital Platform</div>
          <h2 className="st">
            Client <span className="eco">Portal</span>
          </h2>

          {booting ? (
            <p className="ss">Loading your portal…</p>
          ) : !data ? (
            <Login
              step={step}
              phone={phone}
              code={code}
              devCode={devCode}
              busy={busy}
              error={error}
              setPhone={setPhone}
              setCode={setCode}
              onRequestCode={onRequestCode}
              onVerify={onVerify}
              onBack={() => {
                setStep('phone')
                setError(null)
              }}
            />
          ) : (
            <DashboardView data={data} onLogout={onLogout} />
          )}
        </div>
      </section>
    </>
  )
}

type LoginProps = {
  step: 'phone' | 'code'
  phone: string
  code: string
  devCode: string | null
  busy: boolean
  error: string | null
  setPhone: (v: string) => void
  setCode: (v: string) => void
  onRequestCode: (e: React.FormEvent) => void
  onVerify: (e: React.FormEvent) => void
  onBack: () => void
}

function Login(p: LoginProps) {
  return (
    <>
      <p className="ss">
        Sign in with your phone number. We send a one-time code to your WhatsApp.
      </p>
      <div className="erule" />
      <div className="p-login">
        {p.step === 'phone' ? (
          <form onSubmit={p.onRequestCode}>
            <label className="p-flbl" htmlFor="p-phone">
              Phone number
            </label>
            <input
              id="p-phone"
              className="p-input"
              type="tel"
              inputMode="tel"
              placeholder="07XX XXX XXX"
              value={p.phone}
              onChange={(e) => p.setPhone(e.target.value)}
              autoComplete="tel"
              required
            />
            <button className="p-btn" type="submit" disabled={p.busy}>
              {p.busy ? 'Sending…' : 'Send code'}
            </button>
          </form>
        ) : (
          <form onSubmit={p.onVerify}>
            <label className="p-flbl" htmlFor="p-code">
              Enter the 6-digit code
            </label>
            <input
              id="p-code"
              className="p-input"
              type="text"
              inputMode="numeric"
              placeholder="000000"
              maxLength={6}
              value={p.code}
              onChange={(e) => p.setCode(e.target.value.replace(/\D/g, ''))}
              autoFocus
              required
            />
            {p.devCode && (
              <p className="p-hint">
                Dev mode (WhatsApp not linked yet): your code is{' '}
                <strong>{p.devCode}</strong>
              </p>
            )}
            <button className="p-btn" type="submit" disabled={p.busy}>
              {p.busy ? 'Verifying…' : 'Sign in'}
            </button>
            <button className="p-link" type="button" onClick={p.onBack}>
              Use a different number
            </button>
          </form>
        )}
        {p.error && <p className="p-err">{p.error}</p>}
      </div>
    </>
  )
}

function DashboardView({
  data,
  onLogout,
}: {
  data: Dashboard
  onLogout: () => void
}) {
  const { summary, payments, maintenance, documents, eco } = data
  const [section, setSection] = useState('Overview')
  const nextDue = payments.find((p) => p.status !== 'paid')

  const statWidgets = (
    <>
      <div className="p-widget">
        <div className="pw-l">Outstanding</div>
        <div className="pw-v">{kes(summary.outstanding_kes)}</div>
        <div className="pw-s">
          {nextDue ? `Next due ${fmtDate(nextDue.due_date)}` : 'All settled'}
        </div>
      </div>
      <div className="p-widget">
        <div className="pw-l">Open Maintenance</div>
        <div className="pw-v">{summary.open_maintenance}</div>
        <div className="pw-s">
          {summary.properties} propert{summary.properties === 1 ? 'y' : 'ies'}
        </div>
      </div>
    </>
  )

  const paymentsPanel = (
    <div className="p-widget p-wide" key="pay">
      <div className="pw-l">Payments</div>
      <div className="m-list">
        {payments.length === 0 && <div className="m-row">No payments yet.</div>}
        {payments.map((pmt) => (
          <div className="m-row" key={pmt.id}>
            <span className="m-desc">{pmt.description || 'Payment'}</span>
            <span className="m-date">{fmtDate(pmt.due_date)}</span>
            <span className={`p-amt ${pmt.status}`}>
              {kes(pmt.amount_kes)}
              {pmt.status === 'paid' ? ' · paid' : ''}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  const maintenancePanel = (
    <div className="p-widget p-wide" key="maint">
      <div className="pw-l">Maintenance Requests</div>
      <div className="m-list">
        {maintenance.length === 0 && <div className="m-row">No open requests.</div>}
        {maintenance.map((m) => (
          <div className="m-row" key={m.id}>
            <span className={`m-dot ${dotClass(m.status)}`} />
            <span className="m-desc">{m.description}</span>
            <span className="m-date">{m.status.replace('_', ' ')}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const documentsPanel = (
    <div className="p-widget p-wide" key="docs">
      <div className="pw-l">Documents</div>
      <div className="m-list">
        {documents.length === 0 && <div className="m-row">No documents yet.</div>}
        {documents.map((d) => (
          <a
            className="m-row p-doc"
            key={d.id}
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="m-desc">{d.title}</span>
            <span className="m-date">{fmtDate(d.created_at)}</span>
          </a>
        ))}
      </div>
    </div>
  )

  const ecoPanel = (
    <div className="p-widget p-wide" key="eco">
      <div className="pw-l">Eco Report{eco?.period ? ` · ${eco.period}` : ''}</div>
      {eco ? (
        <div className="eco-grid">
          <div>
            <div className="pw-v" style={{ color: 'var(--zennara-eco-l)' }}>
              {eco.score || '—'}
            </div>
            <div className="pw-s">Overall score</div>
          </div>
          <div>
            <div className="pw-v">
              {eco.energy_saved_pct ? `${Number(eco.energy_saved_pct)}%` : '—'}
            </div>
            <div className="pw-s">Energy saved</div>
          </div>
          <div>
            <div className="pw-v">
              {eco.waste_diverted_pct ? `${Number(eco.waste_diverted_pct)}%` : '—'}
            </div>
            <div className="pw-s">Waste diverted</div>
          </div>
        </div>
      ) : (
        <div className="m-row">No eco report yet.</div>
      )}
    </div>
  )

  function renderSection() {
    switch (section) {
      case 'Payments':
        return paymentsPanel
      case 'Maintenance':
        return maintenancePanel
      case 'Eco Reports':
        return ecoPanel
      case 'Documents':
        return documentsPanel
      default:
        return (
          <>
            {statWidgets}
            {paymentsPanel}
            {maintenancePanel}
            {documentsPanel}
          </>
        )
    }
  }

  return (
    <>
      <div className="p-head">
        <p className="ss" style={{ margin: 0 }}>
          Welcome back, <strong>{data.client.name}</strong>
        </p>
        <button className="p-link" type="button" onClick={onLogout}>
          Sign out
        </button>
      </div>
      <div className="erule" />

      <div className="portal-app">
        <aside className="p-side">
          <div className="p-side-lbl">Dashboard</div>
          {NAV.map((i) => (
            <button
              key={i.label}
              type="button"
              className={`p-item${section === i.label ? ' on' : ''}`}
              onClick={() => setSection(i.label)}
            >
              <span className="p-ico">{i.ico}</span>
              {i.label}
            </button>
          ))}
        </aside>

        <div className="p-main">{renderSection()}</div>
      </div>
    </>
  )
}
