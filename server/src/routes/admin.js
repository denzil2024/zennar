import { Router } from 'express'
import { query } from '../db.js'
import { normalizeKE, bearer } from '../lib/auth.js'

const router = Router()
const h = (fn) => (req, res) =>
  fn(req, res).catch((err) => res.status(500).json({ error: err.message }))

// Protected by a shared ADMIN_TOKEN until the full admin UI/login lands (step 5).
function requireAdmin(req, res, next) {
  const token = process.env.ADMIN_TOKEN
  if (!token) return res.status(500).json({ error: 'ADMIN_TOKEN not configured' })
  if (bearer(req) !== token) return res.status(401).json({ error: 'unauthorized' })
  next()
}

// Create (or re-activate) a client. Body: { name, phone }.
router.post(
  '/clients',
  requireAdmin,
  h(async (req, res) => {
    const name = String(req.body?.name || '').trim()
    const phone = normalizeKE(req.body?.phone)
    if (!name || phone.length < 12)
      return res.status(400).json({ error: 'name and valid phone required' })

    const { rows } = await query(
      `INSERT INTO clients (name, phone, status) VALUES ($1, $2, 'active')
       ON CONFLICT (phone) DO UPDATE SET name = EXCLUDED.name, status = 'active'
       RETURNING id, name, phone, status`,
      [name, phone],
    )
    res.json({ client: rows[0] })
  }),
)

// List clients.
router.get(
  '/clients',
  requireAdmin,
  h(async (_req, res) => {
    const { rows } = await query(
      'SELECT id, name, phone, status, created_at FROM clients ORDER BY created_at DESC',
    )
    res.json({ clients: rows })
  }),
)

// List website leads (newest first).
router.get(
  '/leads',
  requireAdmin,
  h(async (_req, res) => {
    const { rows } = await query(
      `SELECT id, property_type, location, size, phone, status, created_at
       FROM leads ORDER BY created_at DESC LIMIT 100`,
    )
    res.json({ leads: rows })
  }),
)

// Add a property for a client. Body: { clientId, name, area }.
router.post(
  '/properties',
  requireAdmin,
  h(async (req, res) => {
    const { clientId, name, area } = req.body || {}
    if (!clientId || !String(name || '').trim())
      return res.status(400).json({ error: 'clientId and name required' })
    const { rows } = await query(
      'INSERT INTO properties (client_id, name, area) VALUES ($1, $2, $3) RETURNING *',
      [clientId, String(name).trim(), area || null],
    )
    res.json({ property: rows[0] })
  }),
)

// Add a payment/invoice for a client. Body: { clientId, amountKes, dueDate, status, description }.
router.post(
  '/payments',
  requireAdmin,
  h(async (req, res) => {
    const { clientId, amountKes, dueDate, status, description } = req.body || {}
    if (!clientId || amountKes == null)
      return res.status(400).json({ error: 'clientId and amountKes required' })
    const { rows } = await query(
      `INSERT INTO payments (client_id, amount_kes, due_date, status, description)
       VALUES ($1, $2, $3, COALESCE($4, 'due'), $5) RETURNING *`,
      [clientId, amountKes, dueDate || null, status || null, description || null],
    )
    res.json({ payment: rows[0] })
  }),
)

// Post a maintenance update for a client. Body: { clientId, propertyId, description, status }.
router.post(
  '/maintenance',
  requireAdmin,
  h(async (req, res) => {
    const { clientId, propertyId, description, status } = req.body || {}
    if (!clientId || !String(description || '').trim())
      return res.status(400).json({ error: 'clientId and description required' })
    const { rows } = await query(
      `INSERT INTO maintenance_requests (client_id, property_id, description, status)
       VALUES ($1, $2, $3, COALESCE($4, 'open')) RETURNING *`,
      [clientId, propertyId || null, String(description).trim(), status || null],
    )
    res.json({ maintenance: rows[0] })
  }),
)

// Share a document with a client. Body: { clientId, title, url }.
router.post(
  '/documents',
  requireAdmin,
  h(async (req, res) => {
    const { clientId, title, url } = req.body || {}
    if (!clientId || !String(title || '').trim() || !String(url || '').trim())
      return res.status(400).json({ error: 'clientId, title and url required' })
    const { rows } = await query(
      'INSERT INTO documents (client_id, title, url) VALUES ($1, $2, $3) RETURNING *',
      [clientId, String(title).trim(), String(url).trim()],
    )
    res.json({ document: rows[0] })
  }),
)

// Record an eco report for a client. Body: { clientId, period, energySavedPct, wasteDivertedPct, score }.
router.post(
  '/eco',
  requireAdmin,
  h(async (req, res) => {
    const { clientId, period, energySavedPct, wasteDivertedPct, score } =
      req.body || {}
    if (!clientId) return res.status(400).json({ error: 'clientId required' })
    const { rows } = await query(
      `INSERT INTO eco_reports (client_id, period, energy_saved_pct, waste_diverted_pct, score)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        clientId,
        period || null,
        energySavedPct ?? null,
        wasteDivertedPct ?? null,
        score || null,
      ],
    )
    res.json({ eco: rows[0] })
  }),
)

export default router
