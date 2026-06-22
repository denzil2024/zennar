import crypto from 'node:crypto'
import { query } from '../db.js'

const CODE_SECRET = process.env.CODE_SECRET || 'dev-code-secret-change-me'
const CODE_TTL_MIN = 10
const SESSION_TTL_DAYS = 30
const MAX_ATTEMPTS = 5

// Canonicalise Kenyan phone numbers to 2547XXXXXXXX form so admin-entered and
// client-entered numbers always match, and WhatsApp JIDs are correct.
export function normalizeKE(input) {
  let d = String(input || '').replace(/\D/g, '')
  if (d.startsWith('0')) d = '254' + d.slice(1)
  else if (d.length === 9) d = '254' + d
  return d
}

export const generateCode = () => String(crypto.randomInt(100000, 1000000))
export const hashCode = (code) =>
  crypto.createHmac('sha256', CODE_SECRET).update(code).digest('hex')

export async function issueCode(phone) {
  const code = generateCode()
  const expires = new Date(Date.now() + CODE_TTL_MIN * 60000)
  await query(
    'UPDATE login_codes SET consumed = true WHERE phone = $1 AND consumed = false',
    [phone],
  )
  await query(
    'INSERT INTO login_codes (phone, code_hash, expires_at) VALUES ($1, $2, $3)',
    [phone, hashCode(code), expires],
  )
  return code
}

export async function verifyCode(phone, code) {
  const { rows } = await query(
    `SELECT * FROM login_codes
     WHERE phone = $1 AND consumed = false AND expires_at > now()
     ORDER BY created_at DESC LIMIT 1`,
    [phone],
  )
  const rec = rows[0]
  if (!rec) return { ok: false, reason: 'expired' }
  if (rec.attempts >= MAX_ATTEMPTS) return { ok: false, reason: 'too_many_attempts' }
  if (rec.code_hash !== hashCode(code)) {
    await query('UPDATE login_codes SET attempts = attempts + 1 WHERE id = $1', [
      rec.id,
    ])
    return { ok: false, reason: 'invalid' }
  }
  await query('UPDATE login_codes SET consumed = true WHERE id = $1', [rec.id])
  return { ok: true }
}

export async function createSession(clientId) {
  const expires = new Date(Date.now() + SESSION_TTL_DAYS * 86400000)
  const { rows } = await query(
    'INSERT INTO sessions (client_id, expires_at) VALUES ($1, $2) RETURNING id',
    [clientId, expires],
  )
  return rows[0].id
}

export async function getClientByToken(token) {
  if (!token) return null
  const { rows } = await query(
    `SELECT c.* FROM sessions s
     JOIN clients c ON c.id = s.client_id
     WHERE s.id = $1 AND s.expires_at > now()`,
    [token],
  )
  return rows[0] || null
}

export async function deleteSession(token) {
  if (token) await query('DELETE FROM sessions WHERE id = $1', [token])
}

export function bearer(req) {
  const h = req.headers.authorization || ''
  return h.startsWith('Bearer ') ? h.slice(7) : null
}
