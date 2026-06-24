import { Router } from 'express'
import { query } from '../db.js'

const router = Router()
const h = (fn) => (req, res) =>
  fn(req, res).catch((err) => res.status(500).json({ error: err.message }))

// Public: website "Get a Free Property Assessment" form posts here.
// Body: { propertyType, location, size, phone }. Phone kept as entered
// (the brand serves multiple markets, so no Kenya-specific normalisation).
router.post(
  '/',
  h(async (req, res) => {
    const phone = String(req.body?.phone || '').trim()
    if (phone.replace(/\D/g, '').length < 7)
      return res.status(400).json({ error: 'a valid phone number is required' })

    const { rows } = await query(
      `INSERT INTO leads (property_type, location, size, phone)
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [
        String(req.body?.propertyType || '').trim() || null,
        String(req.body?.location || '').trim() || null,
        String(req.body?.size || '').trim() || null,
        phone,
      ],
    )
    res.json({ ok: true, id: rows[0].id })
  }),
)

export default router
