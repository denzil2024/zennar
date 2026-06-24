import { useEffect, useState } from 'react'
import Seo from '../../components/Seo'
import {
  getAdminToken,
  setAdminToken,
  clearAdminToken,
  adminListClients,
  adminListLeads,
  adminCreateClient,
  type Lead,
  adminAddProperty,
  adminAddPayment,
  adminAddMaintenance,
  adminAddDocument,
  adminAddEco,
  type AdminClient,
} from '../../lib/portalApi'

const opt = (v: FormDataEntryValue | null) => {
  const s = String(v ?? '').trim()
  return s ? s : undefined
}
const num = (v: FormDataEntryValue | null) => {
  const s = String(v ?? '').trim()
  return s ? Number(s) : undefined
}

export default function Admin() {
  const [booting, setBooting] = useState(true)
  const [authed, setAuthed] = useState(false)
  const [tokenInput, setTokenInput] = useState('')
  const [authErr, setAuthErr] = useState<string | null>(null)

  const [clients, setClients] = useState<AdminClient[]>([])
  const [leads, setLeads] = useState<Lead[]>([])
  const [selected, setSelected] = useState<AdminClient | null>(null)
  const [flash, setFlash] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  async function loadClients() {
    const [c, l] = await Promise.all([adminListClients(), adminListLeads()])
    setClients(c.clients)
    setLeads(l.leads)
  }

  useEffect(() => {
    if (!getAdminToken()) {
      setBooting(false)
      return
    }
    loadClients()
      .then(() => setAuthed(true))
      .catch(() => clearAdminToken())
      .finally(() => setBooting(false))
  }, [])

  async function onAuth(e: React.FormEvent) {
    e.preventDefault()
    setAuthErr(null)
    setAdminToken(tokenInput.trim())
    try {
      await loadClients()
      setAuthed(true)
    } catch {
      clearAdminToken()
      setAuthErr('Invalid admin token')
    }
  }

  function onSignout() {
    clearAdminToken()
    setAuthed(false)
    setSelected(null)
    setClients([])
    setTokenInput('')
  }

  // Wrap a form submit: clear banners, run fn, flash result, reset the form.
  const action =
    (fn: (fd: FormData) => Promise<string>) => async (e: React.FormEvent) => {
      e.preventDefault()
      setErr(null)
      setFlash(null)
      const form = e.currentTarget as HTMLFormElement
      try {
        setFlash(await fn(new FormData(form)))
        form.reset()
      } catch (e2) {
        setErr((e2 as Error).message)
      }
    }

  const addClient = action(async (fd) => {
    const r = await adminCreateClient(String(fd.get('name')), String(fd.get('phone')))
    await loadClients()
    setSelected(r.client)
    return `Client "${r.client.name}" saved`
  })

  const cid = selected?.id ?? 0

  const addPayment = action(async (fd) => {
    await adminAddPayment({
      clientId: cid,
      amountKes: num(fd.get('amount')) ?? 0,
      dueDate: opt(fd.get('due')) ?? null,
      status: opt(fd.get('status')),
      description: opt(fd.get('desc')),
    })
    return 'Payment added'
  })

  const addMaintenance = action(async (fd) => {
    await adminAddMaintenance({
      clientId: cid,
      description: String(fd.get('desc')),
      status: opt(fd.get('status')),
    })
    return 'Maintenance request added'
  })

  const addDocument = action(async (fd) => {
    await adminAddDocument({
      clientId: cid,
      title: String(fd.get('title')),
      url: String(fd.get('url')),
    })
    return 'Document shared'
  })

  const addProperty = action(async (fd) => {
    await adminAddProperty({
      clientId: cid,
      name: String(fd.get('name')),
      area: opt(fd.get('area')),
    })
    return 'Property added'
  })

  const addEco = action(async (fd) => {
    await adminAddEco({
      clientId: cid,
      period: opt(fd.get('period')),
      energySavedPct: num(fd.get('energy')),
      wasteDivertedPct: num(fd.get('waste')),
      score: opt(fd.get('score')),
    })
    return 'Eco report recorded'
  })

  return (
    <>
      <Seo title="Portal Admin" description="ZENNARA portal administration." noindex />
      <section>
        <div className="wrap">
          <div className="sl eco">Internal</div>
          <h2 className="st">
            Portal <span className="eco">Admin</span>
          </h2>

          {booting ? (
            <p className="ss">Loading…</p>
          ) : !authed ? (
            <>
              <p className="ss">Enter the admin token to manage clients and updates.</p>
              <div className="erule" />
              <form className="p-login" onSubmit={onAuth}>
                <label className="p-flbl" htmlFor="a-token">
                  Admin token
                </label>
                <input
                  id="a-token"
                  className="p-input"
                  type="password"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  autoComplete="off"
                  required
                />
                <button className="p-btn" type="submit">
                  Unlock
                </button>
                {authErr && <p className="p-err">{authErr}</p>}
              </form>
            </>
          ) : (
            <>
              <div className="p-head">
                <p className="ss" style={{ margin: 0 }}>
                  {clients.length} client{clients.length === 1 ? '' : 's'}
                </p>
                <button className="p-link" type="button" onClick={onSignout}>
                  Lock
                </button>
              </div>
              <div className="erule" />

              {(flash || err) && (
                <p className={err ? 'p-err' : 'p-ok'}>{err || flash}</p>
              )}

              <div className="p-widget p-wide" style={{ marginBottom: 18 }}>
                <div className="pw-l">
                  Website Leads ({leads.length})
                </div>
                <div className="m-list">
                  {leads.length === 0 && (
                    <div className="m-row">No leads yet.</div>
                  )}
                  {leads.map((l) => (
                    <div className="m-row" key={l.id}>
                      <span className="m-desc">
                        <strong>{l.phone}</strong>
                        {l.property_type ? ` · ${l.property_type}` : ''}
                        {l.location ? ` · ${l.location}` : ''}
                        {l.size ? ` · ${l.size}` : ''}
                      </span>
                      <span className="m-date">
                        {new Date(l.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-grid">
                <aside className="p-side">
                  <div className="p-side-lbl">Clients</div>
                  {clients.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`p-item${selected?.id === c.id ? ' on' : ''}`}
                      onClick={() => {
                        setSelected(c)
                        setFlash(null)
                        setErr(null)
                      }}
                    >
                      <span className="m-desc">{c.name}</span>
                      <span className="m-date">{c.phone}</span>
                    </button>
                  ))}

                  <form className="admin-form" onSubmit={addClient}>
                    <div className="p-side-lbl" style={{ marginTop: 18 }}>
                      Add client
                    </div>
                    <input className="p-input" name="name" placeholder="Name" required />
                    <input
                      className="p-input"
                      name="phone"
                      placeholder="Phone (07XX…)"
                      required
                    />
                    <button className="p-btn" type="submit">
                      Save client
                    </button>
                  </form>
                </aside>

                <div className="admin-main">
                  {!selected ? (
                    <div className="p-widget">
                      <div className="pw-l">No client selected</div>
                      <p className="pw-s">
                        Pick a client on the left (or add one) to post updates.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="p-widget">
                        <div className="pw-l">Posting updates for</div>
                        <div className="pw-v" style={{ fontSize: 26 }}>
                          {selected.name}
                        </div>
                        <div className="pw-s">{selected.phone}</div>
                      </div>

                      <form className="p-widget admin-form" onSubmit={addPayment}>
                        <div className="pw-l">Add payment</div>
                        <input
                          className="p-input"
                          name="amount"
                          type="number"
                          placeholder="Amount (KES)"
                          required
                        />
                        <input className="p-input" name="due" type="date" />
                        <select className="p-input" name="status" defaultValue="due">
                          <option value="due">Due</option>
                          <option value="paid">Paid</option>
                          <option value="overdue">Overdue</option>
                        </select>
                        <input
                          className="p-input"
                          name="desc"
                          placeholder="Description"
                        />
                        <button className="p-btn" type="submit">
                          Add payment
                        </button>
                      </form>

                      <form className="p-widget admin-form" onSubmit={addMaintenance}>
                        <div className="pw-l">Add maintenance request</div>
                        <input
                          className="p-input"
                          name="desc"
                          placeholder="Description"
                          required
                        />
                        <select className="p-input" name="status" defaultValue="open">
                          <option value="open">Open</option>
                          <option value="in_progress">In progress</option>
                          <option value="urgent">Urgent</option>
                          <option value="done">Done</option>
                        </select>
                        <button className="p-btn" type="submit">
                          Add request
                        </button>
                      </form>

                      <form className="p-widget admin-form" onSubmit={addDocument}>
                        <div className="pw-l">Share document</div>
                        <input
                          className="p-input"
                          name="title"
                          placeholder="Title"
                          required
                        />
                        <input
                          className="p-input"
                          name="url"
                          type="url"
                          placeholder="https://…"
                          required
                        />
                        <button className="p-btn" type="submit">
                          Share
                        </button>
                      </form>

                      <form className="p-widget admin-form" onSubmit={addProperty}>
                        <div className="pw-l">Add property</div>
                        <input
                          className="p-input"
                          name="name"
                          placeholder="Property name"
                          required
                        />
                        <input className="p-input" name="area" placeholder="Area" />
                        <button className="p-btn" type="submit">
                          Add property
                        </button>
                      </form>

                      <form className="p-widget admin-form" onSubmit={addEco}>
                        <div className="pw-l">Record eco report</div>
                        <input
                          className="p-input"
                          name="period"
                          placeholder="Period (e.g. 2026-06)"
                        />
                        <input
                          className="p-input"
                          name="energy"
                          type="number"
                          step="0.1"
                          placeholder="Energy saved %"
                        />
                        <input
                          className="p-input"
                          name="waste"
                          type="number"
                          step="0.1"
                          placeholder="Waste diverted %"
                        />
                        <input
                          className="p-input"
                          name="score"
                          placeholder="Score (e.g. A+)"
                        />
                        <button className="p-btn" type="submit">
                          Record report
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
