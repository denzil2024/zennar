import { Router } from 'express'
import { query } from '../db.js'
import {
  normalizeKE,
  issueCode,
  verifyCode,
  createSession,
  getClientByToken,
  deleteSession,
  bearer,
} from '../lib/auth.js'
import { sendWhatsApp } from '../lib/whatsapp.js'

const router = Router()
const h = (fn) => (req, res) =>
  fn(req, res).catch((err) => res.status(500).json({ error: err.message }))

const PORTAL_URL = process.env.PORTAL_URL || 'https://zennarafp.com/portal'

// Step 1: client enters phone -> we send a one-time code over WhatsApp.
router.post(
  '/request-code',
  h(async (req, res) => {
    const phone = normalizeKE(req.body?.phone)
    if (phone.length < 12) return res.status(400).json({ error: 'invalid phone' })

    const { rows } = await query(
      "SELECT id FROM clients WHERE phone = $1 AND status = 'active'",
      [phone],
    )
    // Always respond ok so the endpoint can't be used to discover who is registered.
    if (!rows[0]) return res.json({ ok: true })

    const code = await issueCode(phone)
    const msg = `Your ZENNARA login code is ${code}. Open ${PORTAL_URL} to sign in. It expires in 10 minutes.`
    const wa = await sendWhatsApp(phone, msg)

    const body = { ok: true }
    // Until ZENNARA's WhatsApp number is linked, return the code so login is testable.
    if (!wa.sent) body.devCode = code
    res.json(body)
  }),
)

// Step 2: client submits the code -> we create a session and return a token.
router.post(
  '/verify-code',
  h(async (req, res) => {
    const phone = normalizeKE(req.body?.phone)
    const code = String(req.body?.code || '').trim()
    if (!phone || !code)
      return res.status(400).json({ error: 'phone and code required' })

    const result = await verifyCode(phone, code)
    if (!result.ok) return res.status(401).json({ error: result.reason })

    const { rows } = await query('SELECT * FROM clients WHERE phone = $1', [phone])
    const client = rows[0]
    if (!client) return res.status(401).json({ error: 'invalid' })

    const token = await createSession(client.id)
    res.json({
      token,
      client: { id: client.id, name: client.name, phone: client.phone },
    })
  }),
)

router.get(
  '/me',
  h(async (req, res) => {
    const client = await getClientByToken(bearer(req))
    if (!client) return res.status(401).json({ error: 'unauthorized' })
    res.json({ client: { id: client.id, name: client.name, phone: client.phone } })
  }),
)

router.post(
  '/logout',
  h(async (req, res) => {
    await deleteSession(bearer(req))
    res.json({ ok: true })
  }),
)

export default router
