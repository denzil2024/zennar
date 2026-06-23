import { Router } from 'express'
import { query } from '../db.js'
import { getClientByToken, bearer } from '../lib/auth.js'

const router = Router()
const h = (fn) => (req, res) =>
  fn(req, res).catch((err) => res.status(500).json({ error: err.message }))

// Session-token gate for the logged-in client (token from verify-code).
async function requireClient(req, res, next) {
  try {
    const client = await getClientByToken(bearer(req))
    if (!client) return res.status(401).json({ error: 'unauthorized' })
    req.client = client
    next()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Everything the dashboard needs in one call, scoped to the logged-in client.
router.get(
  '/dashboard',
  requireClient,
  h(async (req, res) => {
    const id = req.client.id

    const [properties, payments, maintenance, documents, eco] = await Promise.all([
      query(
        'SELECT id, name, area FROM properties WHERE client_id = $1 ORDER BY created_at',
        [id],
      ),
      query(
        `SELECT id, amount_kes, due_date, status, description
         FROM payments WHERE client_id = $1 ORDER BY due_date DESC NULLS LAST, created_at DESC`,
        [id],
      ),
      query(
        `SELECT id, description, status, created_at, updated_at
         FROM maintenance_requests WHERE client_id = $1 ORDER BY updated_at DESC`,
        [id],
      ),
      query(
        'SELECT id, title, url, created_at FROM documents WHERE client_id = $1 ORDER BY created_at DESC',
        [id],
      ),
      query(
        `SELECT id, period, energy_saved_pct, waste_diverted_pct, score
         FROM eco_reports WHERE client_id = $1 ORDER BY created_at DESC LIMIT 1`,
        [id],
      ),
    ])

    // Headline numbers the dashboard widgets show at the top.
    const outstanding = payments.rows
      .filter((p) => p.status !== 'paid')
      .reduce((sum, p) => sum + Number(p.amount_kes), 0)
    const openMaintenance = maintenance.rows.filter((m) => m.status !== 'done').length

    res.json({
      client: {
        id: req.client.id,
        name: req.client.name,
        phone: req.client.phone,
      },
      summary: {
        properties: properties.rows.length,
        outstanding_kes: outstanding,
        open_maintenance: openMaintenance,
        eco_score: eco.rows[0]?.score || null,
      },
      properties: properties.rows,
      payments: payments.rows,
      maintenance: maintenance.rows,
      documents: documents.rows,
      eco: eco.rows[0] || null,
    })
  }),
)

export default router
