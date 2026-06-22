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

export default router
